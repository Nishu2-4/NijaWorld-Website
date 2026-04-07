import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin() {
    const { login, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    // If already authenticated, redirect to dashboard
    useEffect(() => {
        if (!loading && isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, loading, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!email.trim() || !password) {
            setError('Please fill in all fields.');
            return;
        }
        setSubmitting(true);
        try {
            await login(email.trim(), password);
            navigate('/dashboard', { replace: true });
        } catch (err) {
            setError(err.message || 'Invalid credentials. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // Show loading spinner while auth state is being restored
    if (loading) {
        return (
            <div className="min-h-screen bg-[#070b12] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#070b12] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00c896]/4 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6366f1]/4 rounded-full blur-[160px]" />
            </div>

            {/* Subtle grid lines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Logo / brand */}
                <div className="flex flex-col items-center mb-8">
                    <Link to="/" className="hover:opacity-80 transition-opacity mb-6">
                        <img
                            src="/nija-world-green.png"
                            alt="NijaWorld"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c896]/10 border border-[#00c896]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00c896] animate-pulse" />
                        <span className="text-[#00c896] text-xs font-medium tracking-wide">
                            ADMIN PORTAL
                        </span>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-[#0b1120] border border-white/10 rounded-2xl shadow-2xl shadow-black/70 p-8">
                    {/* Header */}
                    <div className="mb-7">
                        <h1 className="text-2xl font-bold text-white mb-1.5">Welcome back</h1>
                        <p className="text-gray-500 text-sm">
                            Sign in to access the NijaWorld CMS dashboard.
                        </p>
                    </div>

                    {/* Error banner */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-5 overflow-hidden"
                            >
                                <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                    <svg
                                        className="w-4 h-4 mt-0.5 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                        />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="admin-email"
                                className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
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
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00c896]/40 focus:ring-1 focus:ring-[#00c896]/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="admin-password"
                                className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
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
                                    className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00c896]/40 focus:ring-1 focus:ring-[#00c896]/20 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-gray-400 transition-colors"
                                    tabIndex={-1}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot password link */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-xs text-gray-500 hover:text-[#00c896] transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit button */}
                        <button
                            id="admin-login-submit"
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-2 py-3 rounded-xl bg-[#00c896] hover:bg-[#00b386] text-black text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#00c896]/20 hover:shadow-[#00c896]/30"
                        >
                            {submitting && (
                                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            )}
                            {submitting ? 'Signing in…' : 'Sign In to Dashboard'}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-xs text-gray-700">
                    <Link to="/" className="hover:text-gray-500 transition-colors">
                        ← Back to NijaWorld
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
