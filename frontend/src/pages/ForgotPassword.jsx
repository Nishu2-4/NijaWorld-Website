import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { forgotPassword } from '../api/blogApi';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!email.trim()) { setError('Please enter your email address.'); return; }
        setLoading(true);
        try {
            await forgotPassword(email.trim());
            setSuccess(true);
        } catch (err) {
            // Still show generic message — never reveal whether email exists
            setSuccess(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#080c14] flex items-center justify-center px-4">
            {/* Subtle background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nijaGreen/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Card */}
                <div className="bg-[#0d1220] border border-white/8 rounded-2xl shadow-2xl shadow-black/60 p-10">

                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-nijaGreen/10 border border-nijaGreen/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-nijaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-white text-center mb-2">Forgot Password?</h1>
                    <p className="text-gray-400 text-sm text-center mb-8">
                        Enter your account email and we'll send a reset link.
                    </p>

                    <AnimatePresence mode="wait">
                        {success ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-5"
                            >
                                <div className="w-14 h-14 rounded-full bg-nijaGreen/15 border border-nijaGreen/30 flex items-center justify-center mx-auto">
                                    <svg className="w-7 h-7 text-nijaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-nijaGreen font-medium">Check your inbox</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    If this email is registered, you will receive a password reset link shortly.
                                    The link expires in <span className="text-white font-medium">15 minutes</span>.
                                </p>
                                <Link
                                    to="/blogs"
                                    className="inline-block mt-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    ← Back to login
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {error && (
                                    <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

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
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-nijaGreen/50 focus:ring-1 focus:ring-nijaGreen/20 transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 rounded-lg bg-nijaGreen text-black font-semibold text-sm hover:bg-nijaGreen/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                                >
                                    {loading && (
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    )}
                                    {loading ? 'Sending...' : 'Send Reset Link'}
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Remember your password?{' '}
                                    <Link to="/blogs" className="text-nijaGreen hover:text-nijaGreen/80 transition-colors">
                                        Back to login
                                    </Link>
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                {/* Back to site */}
                <p className="text-center mt-6 text-xs text-gray-600">
                    <Link to="/" className="hover:text-gray-400 transition-colors">← NijaWorld Home</Link>
                </p>
            </motion.div>
        </div>
    );
}
