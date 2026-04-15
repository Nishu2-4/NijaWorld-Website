import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sendForgotOtp, verifyOtpAndReset } from '../api/blogApi';

const OTP_LENGTH = 6;

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1 = enter email, 2 = enter OTP + new password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
    const [pwForm, setPwForm] = useState({ newPassword: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [resendCooldown, setResendCooldown] = useState(0);
    const otpRefs = useRef([]);

    // ── Step 1: send OTP ────────────────────────────────────────────────────
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setError('');
        if (!email.trim()) { setError('Please enter your email address.'); return; }
        setLoading(true);
        try {
            await sendForgotOtp(email.trim());
            setStep(2);
            startCooldown();
        } catch {
            // Generic — never reveal whether email exists
            setStep(2);
            startCooldown();
        } finally {
            setLoading(false);
        }
    };

    // ── Resend cooldown (60s) ───────────────────────────────────────────────
    const startCooldown = () => {
        setResendCooldown(60);
        const id = setInterval(() => {
            setResendCooldown((s) => {
                if (s <= 1) { clearInterval(id); return 0; }
                return s - 1;
            });
        }, 1000);
    };

    const handleResend = async () => {
        if (resendCooldown > 0) return;
        setError('');
        setLoading(true);
        try {
            await sendForgotOtp(email.trim());
            setOtp(Array(OTP_LENGTH).fill(''));
            startCooldown();
        } catch {
            startCooldown();
        } finally {
            setLoading(false);
        }
    };

    // ── OTP input handling ──────────────────────────────────────────────────
    const handleOtpChange = (idx, val) => {
        const digit = val.replace(/\D/g, '').slice(-1);
        const next = [...otp];
        next[idx] = digit;
        setOtp(next);
        if (digit && idx < OTP_LENGTH - 1) otpRefs.current[idx + 1]?.focus();
    };

    const handleOtpKeyDown = (idx, e) => {
        if (e.key === 'Backspace') {
            if (otp[idx]) {
                const next = [...otp]; next[idx] = ''; setOtp(next);
            } else if (idx > 0) {
                otpRefs.current[idx - 1]?.focus();
            }
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

    // ── Step 2: verify OTP + reset password ────────────────────────────────
    const handleReset = async (e) => {
        e.preventDefault();
        setError('');
        const otpStr = otp.join('');
        if (otpStr.length < OTP_LENGTH) { setError('Please enter the full 6-digit OTP.'); return; }
        if (pwForm.newPassword.length < 8) { setError('Password must be at least 8 characters.'); return; }
        if (pwForm.newPassword !== pwForm.confirmPassword) { setError('Passwords do not match.'); return; }
        setLoading(true);
        try {
            await verifyOtpAndReset({
                email: email.trim(),
                otp: otpStr,
                newPassword: pwForm.newPassword,
                confirmPassword: pwForm.confirmPassword,
            });
            setSuccess(true);
            setTimeout(() => navigate('/admin-login'), 3000);
        } catch (err) {
            setError(err.message || 'Invalid or expired OTP.');
        } finally {
            setLoading(false);
        }
    };

    const pwStrength = pwForm.newPassword.length;

    return (
        <div className="min-h-screen bg-[#080c14] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c896]/5 rounded-full blur-[120px]" />
            </div>

            <AnimatePresence mode="wait">
                {success ? (
                    /* ── Success state ── */
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 w-full max-w-md"
                    >
                        <div className="bg-[#0d1220] border border-white/8 rounded-2xl shadow-2xl shadow-black/60 p-10 text-center space-y-5">
                            <div className="w-16 h-16 rounded-full bg-[#00c896]/15 border border-[#00c896]/30 flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-[#00c896] font-semibold text-lg">Password Reset!</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your password has been reset successfully.<br />
                                Redirecting you to login…
                            </p>
                            <Link
                                to="/admin-login"
                                className="inline-block px-6 py-2.5 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                            >
                                Go to Login
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full max-w-md"
                    >
                        <div className="bg-[#0d1220] border border-white/8 rounded-2xl shadow-2xl shadow-black/60 p-8">

                            {/* Header icon */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-[#00c896]/10 border border-[#00c896]/20 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                {[1, 2].map((s) => (
                                    <div key={s} className="flex items-center gap-3">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'bg-[#00c896] text-black' : 'bg-white/8 text-gray-500 border border-white/10'}`}>
                                            {step > s ? (
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : s}
                                        </div>
                                        {s < 2 && <div className={`w-10 h-px transition-all duration-500 ${step > s ? 'bg-[#00c896]' : 'bg-white/10'}`} />}
                                    </div>
                                ))}
                            </div>

                            <h1 className="text-xl font-bold text-white text-center mb-1">
                                {step === 1 ? 'Forgot Password?' : 'Enter OTP & New Password'}
                            </h1>
                            <p className="text-gray-500 text-sm text-center mb-7">
                                {step === 1
                                    ? "Enter your account email and we'll send a 6-digit OTP."
                                    : `OTP sent to ${email}. Enter it below along with your new password.`}
                            </p>

                            {/* Error banner */}
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        key="err"
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                                    >
                                        {error}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                {step === 1 ? (
                                    /* ─── STEP 1: Email ─────────────────────────────── */
                                    <motion.form
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        onSubmit={handleSendOtp}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="you@example.com"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/20 transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-3 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {loading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                            {loading ? 'Sending OTP…' : 'Send OTP'}
                                        </button>

                                        <p className="text-center text-sm text-gray-500">
                                            Remember your password?{' '}
                                            <Link to="/admin-login" className="text-[#00c896] hover:text-[#00c896]/80 transition-colors">
                                                Back to login
                                            </Link>
                                        </p>
                                    </motion.form>
                                ) : (
                                    /* ─── STEP 2: OTP + New Password ─────────────────── */
                                    <motion.form
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleReset}
                                        className="space-y-5"
                                    >
                                        {/* OTP boxes */}
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-3">6-Digit OTP</label>
                                            <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
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
                                                        className={`w-11 h-13 text-center text-xl font-bold rounded-xl border transition-all duration-200 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#00c896]/40 ${digit ? 'border-[#00c896]/70 bg-[#00c896]/5' : 'border-white/10'}`}
                                                        style={{ height: '52px' }}
                                                    />
                                                ))}
                                            </div>
                                            {/* Resend */}
                                            <div className="text-center mt-3">
                                                <button
                                                    type="button"
                                                    onClick={handleResend}
                                                    disabled={resendCooldown > 0 || loading}
                                                    className="text-xs text-gray-500 hover:text-[#00c896] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                                >
                                                    {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
                                                </button>
                                            </div>
                                        </div>

                                        {/* New password */}
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">New Password</label>
                                            <input
                                                type="password"
                                                value={pwForm.newPassword}
                                                onChange={(e) => setPwForm(f => ({ ...f, newPassword: e.target.value }))}
                                                placeholder="Min. 8 characters"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/20 transition-all text-sm"
                                            />
                                            {/* Strength bar */}
                                            {pwStrength > 0 && (
                                                <div className="flex items-center gap-2 mt-2">
                                                    {[8, 12, 16].map((len) => (
                                                        <div key={len} className={`h-1 flex-1 rounded-full transition-all duration-300 ${pwStrength >= len ? 'bg-[#00c896]' : 'bg-white/10'}`} />
                                                    ))}
                                                    <span className="text-xs text-gray-500 w-12 text-right">
                                                        {pwStrength < 8 ? 'Weak' : pwStrength < 12 ? 'Fair' : pwStrength < 16 ? 'Good' : 'Strong'}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Confirm password */}
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                                            <input
                                                type="password"
                                                value={pwForm.confirmPassword}
                                                onChange={(e) => setPwForm(f => ({ ...f, confirmPassword: e.target.value }))}
                                                placeholder="Re-enter new password"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/20 transition-all text-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-3 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {loading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                            {loading ? 'Verifying…' : 'Reset Password'}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => { setStep(1); setOtp(Array(OTP_LENGTH).fill('')); setError(''); }}
                                            className="w-full text-center text-sm text-gray-500 hover:text-gray-300 transition-colors"
                                        >
                                            ← Change email address
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        <p className="text-center mt-6 text-xs text-gray-600">
                            <Link to="/" className="hover:text-gray-400 transition-colors">← NijaWorld Home</Link>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
