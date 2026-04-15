import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

// Mask email for display: a***@domain.com
function maskEmail(email) {
    if (!email) return '';
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const visible = local.slice(0, Math.min(2, local.length));
    return `${visible}***@${domain}`;
}

const RESEND_COOLDOWN = 60; // seconds

export default function AdminLogin() {
    const { login, verifyLoginOtp, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    // ── Step state ──────────────────────────────────────────
    const [step, setStep] = useState(1); // 1 = credentials, 2 = OTP

    // ── Step 1 state ─────────────────────────────────────────
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // ── Step 2 state ─────────────────────────────────────────
    const [confirmedEmail, setConfirmedEmail] = useState(''); // email from server response
    const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
    const [verifying, setVerifying] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [resending, setResending] = useState(false);

    // ── Shared ───────────────────────────────────────────────
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const otpRefs = useRef([]);
    const cooldownRef = useRef(null);

    // Redirect if already authenticated
    useEffect(() => {
        if (!loading && isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, loading, navigate]);

    // Cooldown timer
    useEffect(() => {
        if (cooldown <= 0) {
            clearInterval(cooldownRef.current);
            return;
        }
        cooldownRef.current = setInterval(() => {
            setCooldown((c) => {
                if (c <= 1) { clearInterval(cooldownRef.current); return 0; }
                return c - 1;
            });
        }, 1000);
        return () => clearInterval(cooldownRef.current);
    }, [cooldown]);

    // ── Step 1: submit credentials ───────────────────────────
    const handleCredentialsSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!email.trim() || !password) {
            setError('Please fill in all fields.');
            return;
        }
        setSubmitting(true);
        try {
            const data = await login(email.trim(), password);
            // data = { requiresOtp: true, email }
            setConfirmedEmail(data.email || email.trim());
            setStep(2);
            setCooldown(RESEND_COOLDOWN);
            // Focus first OTP box
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
        } catch (err) {
            setError(err.message || 'Invalid credentials. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // ── Step 2: OTP digit handlers ───────────────────────────
    const handleOtpChange = (index, value) => {
        // Allow only digits
        const digit = value.replace(/\D/g, '').slice(-1);
        const next = [...otpDigits];
        next[index] = digit;
        setOtpDigits(next);
        setError('');

        if (digit && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otpDigits[index]) {
                const next = [...otpDigits];
                next[index] = '';
                setOtpDigits(next);
            } else if (index > 0) {
                otpRefs.current[index - 1]?.focus();
            }
        }
        if (e.key === 'ArrowLeft' && index > 0) otpRefs.current[index - 1]?.focus();
        if (e.key === 'ArrowRight' && index < 5) otpRefs.current[index + 1]?.focus();
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (!pasted) return;
        const next = ['', '', '', '', '', ''];
        pasted.split('').forEach((ch, i) => { next[i] = ch; });
        setOtpDigits(next);
        const focusIdx = Math.min(pasted.length, 5);
        otpRefs.current[focusIdx]?.focus();
    };

    // ── Step 2: verify OTP ───────────────────────────────────
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const otp = otpDigits.join('');
        if (otp.length < 6) {
            setError('Please enter the complete 6-digit OTP.');
            return;
        }
        setVerifying(true);
        try {
            await verifyLoginOtp(confirmedEmail, otp);
            navigate('/dashboard', { replace: true });
        } catch (err) {
            setError(err.message || 'Invalid OTP. Please try again.');
            setOtpDigits(['', '', '', '', '', '']);
            setTimeout(() => otpRefs.current[0]?.focus(), 50);
        } finally {
            setVerifying(false);
        }
    };

    // ── Resend OTP ───────────────────────────────────────────
    const handleResend = async () => {
        if (cooldown > 0 || resending) return;
        setError('');
        setSuccessMsg('');
        setResending(true);
        try {
            await login(email.trim(), password); // Re-run step 1 silently
            setOtpDigits(['', '', '', '', '', '']);
            setCooldown(RESEND_COOLDOWN);
            setSuccessMsg('A new OTP has been sent to your email.');
            setTimeout(() => otpRefs.current[0]?.focus(), 100);
        } catch (err) {
            setError(err.message || 'Failed to resend OTP. Please go back and try again.');
        } finally {
            setResending(false);
        }
    };

    // ── Loading spinner ──────────────────────────────────────
    if (loading) {
        return (
            <div style={{ minHeight: '100vh', background: '#070b12', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 32, height: 32, border: '2px solid rgba(0,200,150,0.3)', borderTop: '2px solid #00c896', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            </div>
        );
    }

    // ── Shared card wrapper ───────────────────────────────────
    const pageVariants = {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
    };

    const stepVariants = {
        enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
        exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.25 } }),
    };

    return (
        <div style={{ minHeight: '100vh', background: '#070b12', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient glows */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: 600, height: 600, background: 'rgba(0,200,150,0.04)', borderRadius: '50%', filter: 'blur(160px)' }} />
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: 500, height: 500, background: 'rgba(99,102,241,0.04)', borderRadius: '50%', filter: 'blur(160px)' }} />
            </div>
            {/* Grid */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 440 }}
            >
                {/* Logo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
                    <Link to="/" style={{ opacity: 1, transition: 'opacity 0.2s', marginBottom: 24 }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        <img src="/nija-world-green.png" alt="NijaWorld" style={{ height: 56, width: 'auto', objectFit: 'contain' }} />
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 999, background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.2)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c896', animation: 'pulse 2s infinite' }} />
                        <span style={{ color: '#00c896', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em' }}>ADMIN PORTAL</span>
                    </div>
                </div>

                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
                    {[1, 2].map((s) => (
                        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 12, fontWeight: 700,
                                background: step >= s ? '#00c896' : 'rgba(255,255,255,0.07)',
                                color: step >= s ? '#000' : 'rgba(255,255,255,0.3)',
                                border: step === s ? '2px solid #00c896' : '2px solid transparent',
                                transition: 'all 0.3s',
                                boxShadow: step >= s ? '0 0 12px rgba(0,200,150,0.4)' : 'none',
                            }}>
                                {step > s ? (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : s}
                            </div>
                            {s < 2 && (
                                <div style={{ width: 40, height: 2, background: step > s ? '#00c896' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s', borderRadius: 2 }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Card */}
                <div style={{ background: '#0b1120', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, boxShadow: '0 25px 60px rgba(0,0,0,0.7)', padding: 32, overflow: 'hidden', position: 'relative' }}>

                    {/* Error banner */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', borderRadius: 12, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', fontSize: 13 }}>
                                    <svg width="16" height="16" style={{ marginTop: 1, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Success banner */}
                    <AnimatePresence>
                        {successMsg && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', borderRadius: 12, background: 'rgba(0,200,150,0.08)', border: '1px solid rgba(0,200,150,0.2)', color: '#00c896', fontSize: 13 }}>
                                    <svg width="16" height="16" style={{ marginTop: 1, flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{successMsg}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Steps */}
                    <AnimatePresence mode="wait" custom={step}>
                        {/* ── STEP 1 ── */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                custom={1}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                <div style={{ marginBottom: 28 }}>
                                    <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Welcome back</h1>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: 13 }}>Sign in to access the NijaWorld CMS dashboard.</p>
                                </div>

                                <form onSubmit={handleCredentialsSubmit} noValidate>
                                    {/* Email */}
                                    <div style={{ marginBottom: 16 }}>
                                        <label htmlFor="admin-email" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                            Email Address
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 16, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                                <svg width="16" height="16" fill="none" stroke="rgba(100,116,139,0.8)" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <input
                                                id="admin-email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="admin@nijaworld.com"
                                                style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 44, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                                                onFocus={e => e.target.style.borderColor = 'rgba(0,200,150,0.4)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div style={{ marginBottom: 12 }}>
                                        <label htmlFor="admin-password" style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                            Password
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 16, display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                                <svg width="16" height="16" fill="none" stroke="rgba(100,116,139,0.8)" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <input
                                                id="admin-password"
                                                type={showPassword ? 'text' : 'password'}
                                                required
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••••"
                                                style={{ width: '100%', boxSizing: 'border-box', paddingLeft: 44, paddingRight: 48, paddingTop: 12, paddingBottom: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                                                onFocus={e => e.target.style.borderColor = 'rgba(0,200,150,0.4)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(v => !v)}
                                                tabIndex={-1}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                style={{ position: 'absolute', top: 0, bottom: 0, right: 0, paddingRight: 16, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(100,116,139,0.8)' }}
                                            >
                                                {showPassword ? (
                                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                                ) : (
                                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Forgot password */}
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
                                        <Link to="/forgot-password" style={{ fontSize: 12, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.target.style.color = '#00c896'}
                                            onMouseLeave={e => e.target.style.color = '#475569'}
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <button
                                        id="admin-login-submit"
                                        type="submit"
                                        disabled={submitting}
                                        style={{ width: '100%', padding: '13px 0', borderRadius: 12, background: submitting ? 'rgba(0,200,150,0.6)' : '#00c896', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,200,150,0.25)', transition: 'background 0.2s, box-shadow 0.2s' }}
                                        onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#00b386'; }}
                                        onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = '#00c896'; }}
                                    >
                                        {submitting && <span style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #000', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />}
                                        {submitting ? 'Verifying…' : 'Continue →'}
                                    </button>
                                </form>
                            </motion.div>
                        )}

                        {/* ── STEP 2 ── */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                custom={2}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            >
                                <div style={{ marginBottom: 28 }}>
                                    <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Check your email</h1>
                                    <p style={{ margin: 0, color: '#64748b', fontSize: 13, lineHeight: 1.6 }}>
                                        We sent a 6-digit code to <span style={{ color: '#00c896', fontWeight: 600 }}>{maskEmail(confirmedEmail)}</span>.<br />
                                        Enter it below to complete sign-in.
                                    </p>
                                </div>

                                <form onSubmit={handleOtpSubmit} noValidate>
                                    {/* OTP boxes */}
                                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 28 }} onPaste={handleOtpPaste}>
                                        {otpDigits.map((digit, i) => (
                                            <input
                                                key={i}
                                                ref={el => otpRefs.current[i] = el}
                                                id={`otp-digit-${i}`}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={2}
                                                value={digit}
                                                onChange={e => handleOtpChange(i, e.target.value)}
                                                onKeyDown={e => handleOtpKeyDown(i, e)}
                                                style={{
                                                    width: 52, height: 60, textAlign: 'center', fontSize: 26, fontWeight: 700,
                                                    background: digit ? 'rgba(0,200,150,0.08)' : 'rgba(255,255,255,0.04)',
                                                    border: digit ? '2px solid rgba(0,200,150,0.5)' : '2px solid rgba(255,255,255,0.1)',
                                                    borderRadius: 12, color: digit ? '#00c896' : '#fff',
                                                    outline: 'none', transition: 'all 0.2s', cursor: 'text',
                                                    boxShadow: digit ? '0 0 16px rgba(0,200,150,0.15)' : 'none',
                                                    caretColor: 'transparent',
                                                }}
                                                onFocus={e => { e.target.style.borderColor = 'rgba(0,200,150,0.6)'; e.target.style.background = 'rgba(0,200,150,0.06)'; }}
                                                onBlur={e => { e.target.style.borderColor = digit ? 'rgba(0,200,150,0.5)' : 'rgba(255,255,255,0.1)'; e.target.style.background = digit ? 'rgba(0,200,150,0.08)' : 'rgba(255,255,255,0.04)'; }}
                                            />
                                        ))}
                                    </div>

                                    {/* Expiry note */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,200,0,0.05)', border: '1px solid rgba(255,200,0,0.12)', marginBottom: 20 }}>
                                        <svg width="14" height="14" fill="none" stroke="#c8a800" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ fontSize: 12, color: '#c8a800' }}>This OTP expires in <strong>10 minutes</strong>. Do not share it.</span>
                                    </div>

                                    {/* Verify button */}
                                    <button
                                        id="admin-otp-submit"
                                        type="submit"
                                        disabled={verifying || otpDigits.join('').length < 6}
                                        style={{
                                            width: '100%', padding: '13px 0', borderRadius: 12,
                                            background: (verifying || otpDigits.join('').length < 6) ? 'rgba(0,200,150,0.4)' : '#00c896',
                                            color: '#000', fontSize: 14, fontWeight: 700, border: 'none',
                                            cursor: (verifying || otpDigits.join('').length < 6) ? 'not-allowed' : 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                            boxShadow: '0 8px 24px rgba(0,200,150,0.2)', transition: 'background 0.2s',
                                            marginBottom: 16,
                                        }}
                                    >
                                        {verifying && <span style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #000', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />}
                                        {verifying ? 'Verifying OTP…' : 'Verify & Sign In'}
                                    </button>

                                    {/* Resend + Back */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                                        <button
                                            type="button"
                                            onClick={() => { setStep(1); setError(''); setSuccessMsg(''); setOtpDigits(['', '', '', '', '', '']); }}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#475569', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s', padding: 0 }}
                                            onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
                                            onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                                        >
                                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Back
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleResend}
                                            disabled={cooldown > 0 || resending}
                                            style={{
                                                background: 'none', border: 'none', cursor: (cooldown > 0 || resending) ? 'not-allowed' : 'pointer',
                                                fontSize: 13, color: (cooldown > 0 || resending) ? '#475569' : '#00c896',
                                                transition: 'color 0.2s', padding: 0, display: 'flex', alignItems: 'center', gap: 6,
                                            }}
                                        >
                                            {resending ? (
                                                <span style={{ width: 12, height: 12, border: '1.5px solid rgba(0,200,150,0.3)', borderTop: '1.5px solid #00c896', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                                            ) : (
                                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            )}
                                            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend OTP'}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer */}
                <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: '#1e293b' }}>
                    <Link to="/" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#475569'}
                        onMouseLeave={e => e.target.style.color = '#1e293b'}
                    >
                        ← Back to NijaWorld
                    </Link>
                </p>
            </motion.div>

            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
                input::placeholder { color: rgba(100,116,139,0.6); }
            `}</style>
        </div>
    );
}
