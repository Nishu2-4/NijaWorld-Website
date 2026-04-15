import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { resetPassword as apiResetPassword } from '../api/blogApi';

export default function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({ newPassword: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (form.newPassword.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }
        if (form.newPassword !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            await apiResetPassword(token, form.newPassword, form.confirmPassword);
            setSuccess(true);
            // Redirect to admin login after 3 seconds
            setTimeout(() => navigate('/admin-login'), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#080c14] flex items-center justify-center px-4">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nijaGreen/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-[#0d1220] border border-white/8 rounded-2xl shadow-2xl shadow-black/60 p-10">

                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-nijaGreen/10 border border-nijaGreen/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-nijaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-white text-center mb-2">Set New Password</h1>
                    <p className="text-gray-400 text-sm text-center mb-8">
                        Choose a strong password for your account.
                    </p>

                    <AnimatePresence mode="wait">
                        {success ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-nijaGreen/15 border border-nijaGreen/30 flex items-center justify-center mx-auto">
                                    <svg className="w-7 h-7 text-nijaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-nijaGreen font-medium text-lg">Password Reset!</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Your password has been reset successfully.<br />
                                    Redirecting you to login…
                                </p>
                                <Link
                                    to="/admin-login"
                                    className="inline-block px-6 py-2.5 rounded-lg bg-nijaGreen text-black font-semibold text-sm hover:bg-nijaGreen/90 transition-all mt-2"
                                >
                                    Go to Login
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
                                <AnimatePresence>
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                                        >
                                            {error}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {[
                                    { key: 'newPassword', label: 'New Password', placeholder: 'Min. 8 characters' },
                                    { key: 'confirmPassword', label: 'Confirm New Password', placeholder: 'Re-enter new password' },
                                ].map(({ key, label, placeholder }) => (
                                    <div key={key}>
                                        <label className="block text-sm text-gray-400 mb-2">{label}</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="password"
                                                value={form[key]}
                                                onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))}
                                                placeholder={placeholder}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-nijaGreen/50 focus:ring-1 focus:ring-nijaGreen/20 transition-all text-sm"
                                            />
                                        </div>
                                    </div>
                                ))}

                                {/* Password strength hint */}
                                {form.newPassword.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        {[8, 12, 16].map((len) => (
                                            <div
                                                key={len}
                                                className={`h-1 flex-1 rounded-full transition-colors ${form.newPassword.length >= len ? 'bg-nijaGreen' : 'bg-white/10'}`}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-500">
                                            {form.newPassword.length < 8 ? 'Too short' : form.newPassword.length < 12 ? 'Fair' : form.newPassword.length < 16 ? 'Good' : 'Strong'}
                                        </span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 rounded-lg bg-nijaGreen text-black font-semibold text-sm hover:bg-nijaGreen/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                                >
                                    {loading && (
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    )}
                                    {loading ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                <p className="text-center mt-6 text-xs text-gray-600">
                    <Link to="/" className="hover:text-gray-400 transition-colors">← NijaWorld Home</Link>
                </p>
            </motion.div>
        </div>
    );
}
