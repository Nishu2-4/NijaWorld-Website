import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { requestChangeOtp, verifyChangeOtp } from '../../api/blogApi';

const OTP_LENGTH = 6;

export default function SettingsSection({ token, user }) {
    const isAdmin = user?.role === 'admin';

    // ── Change Password state ─────────────────────────────────────────────
    const [step, setStep] = useState(1); // 1 = fill passwords, 2 = enter OTP
    const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
    const [pwError, setPwError] = useState('');
    const [pwSuccess, setPwSuccess] = useState('');
    const [pwLoading, setPwLoading] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);
    const otpRefs = useRef([]);

    // ── Helpers ───────────────────────────────────────────────────────────
    const startCooldown = () => {
        setResendCooldown(60);
        const id = setInterval(() => {
            setResendCooldown((s) => { if (s <= 1) { clearInterval(id); return 0; } return s - 1; });
        }, 1000);
    };

    const resetForm = () => {
        setStep(1);
        setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setOtp(Array(OTP_LENGTH).fill(''));
        setPwError('');
        setResendCooldown(0);
    };

    // ── OTP input ─────────────────────────────────────────────────────────
    const handleOtpChange = (idx, val) => {
        const digit = val.replace(/\D/g, '').slice(-1);
        const next = [...otp]; next[idx] = digit; setOtp(next);
        if (digit && idx < OTP_LENGTH - 1) otpRefs.current[idx + 1]?.focus();
    };

    const handleOtpKeyDown = (idx, e) => {
        if (e.key === 'Backspace') {
            if (otp[idx]) { const next = [...otp]; next[idx] = ''; setOtp(next); }
            else if (idx > 0) otpRefs.current[idx - 1]?.focus();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
        const next = Array(OTP_LENGTH).fill('');
        pasted.split('').forEach((d, i) => { next[i] = d; });
        setOtp(next);
        otpRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
    };

    // ── Step 1: send OTP ──────────────────────────────────────────────────
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setPwError(''); setPwSuccess('');
        if (pwForm.newPassword.length < 8) { setPwError('New password must be at least 8 characters.'); return; }
        if (pwForm.newPassword !== pwForm.confirmPassword) { setPwError('New passwords do not match.'); return; }
        setPwLoading(true);
        try {
            await requestChangeOtp(pwForm, token);
            setStep(2);
            startCooldown();
        } catch (err) {
            setPwError(err.message);
        } finally {
            setPwLoading(false);
        }
    };

    // ── Resend OTP ────────────────────────────────────────────────────────
    const handleResend = async () => {
        if (resendCooldown > 0) return;
        setPwError('');
        setPwLoading(true);
        try {
            await requestChangeOtp(pwForm, token);
            setOtp(Array(OTP_LENGTH).fill(''));
            startCooldown();
        } catch (err) {
            setPwError(err.message);
        } finally {
            setPwLoading(false);
        }
    };

    // ── Step 2: verify OTP ────────────────────────────────────────────────
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setPwError('');
        const otpStr = otp.join('');
        if (otpStr.length < OTP_LENGTH) { setPwError('Please enter the full 6-digit OTP.'); return; }
        setPwLoading(true);
        try {
            await verifyChangeOtp({ otp: otpStr, newPassword: pwForm.newPassword, confirmPassword: pwForm.confirmPassword }, token);
            setPwSuccess('✅ Password changed successfully.');
            resetForm();
            setTimeout(() => setPwSuccess(''), 5000);
        } catch (err) {
            setPwError(err.message);
        } finally {
            setPwLoading(false);
        }
    };

    const pwStrength = pwForm.newPassword.length;

    return (
        <div className="p-6 max-w-lg">
            {/* ── Change Password ──────────────────────────────────── */}
            <div className="bg-[#0b1120] border border-white/8 rounded-xl p-6 mb-4">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#00c896]/10 border border-[#00c896]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-white">Change Password</h2>
                        <p className="text-gray-500 text-xs">An OTP will be sent to your email for verification</p>
                    </div>
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-5">
                    {[1, 2].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'bg-[#00c896] text-black' : 'bg-white/8 text-gray-500 border border-white/10'}`}>
                                {step > s ? (
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : s}
                            </div>
                            {s < 2 && <div className={`flex-1 h-px transition-all duration-500 w-8 ${step > s ? 'bg-[#00c896]' : 'bg-white/10'}`} />}
                        </div>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                        {step === 1 ? 'Set new password' : `Verify OTP sent to ${user?.email}`}
                    </span>
                </div>

                {/* Alerts */}
                <AnimatePresence>
                    {pwError && (
                        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                            {pwError}
                        </motion.div>
                    )}
                    {pwSuccess && (
                        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mb-4 px-4 py-3 rounded-lg bg-[#00c896]/10 border border-[#00c896]/25 text-[#00c896] text-sm">
                            {pwSuccess}
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        /* ─── STEP 1: Password form ─────────────────────── */
                        <motion.form
                            key="step1"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            onSubmit={handleSendOtp}
                            className="space-y-4"
                            autoComplete="off"
                        >
                            {[
                                { key: 'currentPassword', label: 'Current Password', placeholder: 'Enter your current password' },
                                { key: 'newPassword', label: 'New Password', placeholder: 'Min. 8 characters' },
                                { key: 'confirmPassword', label: 'Confirm New Password', placeholder: 'Re-enter new password' },
                            ].map(({ key, label, placeholder }) => (
                                <div key={key}>
                                    <label className="block text-sm text-gray-400 mb-2">{label}</label>
                                    <input
                                        type="password"
                                        value={pwForm[key]}
                                        onChange={(e) => setPwForm(f => ({ ...f, [key]: e.target.value }))}
                                        placeholder={placeholder}
                                        required
                                        autoComplete="new-password"
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/20 transition-all text-sm"
                                    />
                                </div>
                            ))}

                            {/* Strength bar */}
                            {pwStrength > 0 && (
                                <div className="flex items-center gap-2 pt-1">
                                    {[8, 12, 16].map((len) => (
                                        <div key={len} className={`h-1 flex-1 rounded-full transition-all duration-300 ${pwStrength >= len ? 'bg-[#00c896]' : 'bg-white/10'}`} />
                                    ))}
                                    <span className="text-xs text-gray-500 w-12 text-right">
                                        {pwStrength < 8 ? 'Weak' : pwStrength < 12 ? 'Fair' : pwStrength < 16 ? 'Good' : 'Strong'}
                                    </span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={pwLoading}
                                className="px-6 py-2.5 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center gap-2"
                            >
                                {pwLoading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                {pwLoading ? 'Sending OTP…' : 'Send OTP to My Email'}
                            </button>
                        </motion.form>
                    ) : (
                        /* ─── STEP 2: OTP verification ──────────────────── */
                        <motion.form
                            key="step2"
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            onSubmit={handleVerifyOtp}
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm text-gray-400 mb-3">Enter 6-Digit OTP</label>
                                <div className="flex gap-2" onPaste={handleOtpPaste}>
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            ref={(el) => (otpRefs.current[idx] = el)}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                            className={`w-10 h-12 text-center text-xl font-bold rounded-lg border transition-all duration-200 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 ${digit ? 'border-[#00c896]/70 bg-[#00c896]/5' : 'border-white/10'}`}
                                        />
                                    ))}
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        disabled={resendCooldown > 0 || pwLoading}
                                        className="text-xs text-gray-500 hover:text-[#00c896] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-all"
                                >
                                    ← Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={pwLoading}
                                    className="flex-1 py-2.5 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {pwLoading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                    {pwLoading ? 'Verifying…' : 'Confirm & Update Password'}
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Account Info ─────────────────────────────────────── */}
            <div className="bg-[#0b1120] border border-white/8 rounded-xl p-6">
                <h3 className="font-medium text-white mb-4 flex items-center gap-2">
                    <span>👤</span> Account Info
                </h3>
                <div className="space-y-3 text-sm">
                    {[
                        { label: 'Name', value: user?.name },
                        { label: 'Email', value: user?.email },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between">
                            <span className="text-gray-500">{label}</span>
                            <span className="text-white font-medium">{value}</span>
                        </div>
                    ))}
                    <div className="flex justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isAdmin ? 'bg-purple-500/20 text-purple-400' : 'bg-[#00c896]/15 text-[#00c896]'}`}>
                            {user?.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
