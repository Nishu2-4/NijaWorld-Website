import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { InteractiveDotGrid } from '../components/InteractiveDotGrid';
import { useState } from 'react';

export default function Join() {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', loginForm);
        // TODO: Implement actual authentication
    };

    const handleSocialLogin = (provider) => {
        console.log(`Social login with ${provider} `);
        // TODO: Implement social authentication
    };

    return (
        <div className='min-h-screen bg-[#0a0e13] dark:bg-[#0a0e13]'>
            <Navbar />

            {/* Main Authentication Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
                {/* Interactive Dot Grid Background */}
                <InteractiveDotGrid />

                {/* Content Layer */}
                <div className="relative z-10 w-full max-w-5xl">

                    {/* Top Area - New User Link */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <p className="text-gray-400 text-sm">
                            New user? <a href="/signup" className="text-[#2DBE7B] hover:text-[#25a569] font-medium transition">Create an account</a>
                        </p>
                    </motion.div>

                    {/* Centered Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#1a1f2e] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2">

                            {/* Left Column - Traditional Login */}
                            <div className="p-12">
                                <h2 className="text-2xl font-bold text-white mb-8">
                                    CONTINUE WITH YOUR LFID
                                </h2>

                                <form onSubmit={handleLoginSubmit} className="space-y-6">
                                    {/* Username/Email Input */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            value={loginForm.email}
                                            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                            placeholder="Username or Email"
                                        />
                                    </div>

                                    {/* Password Input */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="password"
                                            required
                                            value={loginForm.password}
                                            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                            placeholder="Password"
                                        />
                                    </div>

                                    {/* Forgot Password Link */}
                                    <div className="text-right">
                                        <a href="#forgot" className="text-sm text-[#2DBE7B] hover:text-[#25a569] transition">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    {/* Sign In Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2DBE7B] hover:bg-[#25a569] text-white py-3.5 rounded-lg font-semibold transition shadow-lg shadow-[#2DBE7B]/30 hover:shadow-[#2DBE7B]/50"
                                    >
                                        SIGN IN
                                    </button>
                                </form>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

                            {/* Right Column - Social Login */}
                            <div className="p-12 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                                    OR CONTINUE WITH
                                </h2>

                                {/* Social Login Buttons */}
                                <div className="flex justify-center gap-6 mb-8">
                                    {/* Google */}
                                    <button
                                        onClick={() => handleSocialLogin('google')}
                                        className="w-14 h-14 bg-[#0f1419] hover:bg-[#1a1f2e] border border-gray-700 rounded-full flex items-center justify-center transition hover:scale-110 hover:shadow-lg hover:shadow-[#2DBE7B]/20"
                                        title="Continue with Google"
                                    >
                                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    </button>

                                    {/* LinkedIn */}
                                    <button
                                        onClick={() => handleSocialLogin('linkedin')}
                                        className="w-14 h-14 bg-[#0f1419] hover:bg-[#1a1f2e] border border-gray-700 rounded-full flex items-center justify-center transition hover:scale-110 hover:shadow-lg hover:shadow-[#2DBE7B]/20"
                                        title="Continue with LinkedIn"
                                    >
                                        <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Informational Text */}
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        By continuing, you agree to the creation of an LFID<br />
                                        in accordance with our{' '}
                                        <a href="#privacy" className="text-[#2DBE7B] hover:text-[#25a569] transition">Privacy Policy</a>
                                        {' '}and{' '}
                                        <a href="#terms" className="text-[#2DBE7B] hover:text-[#25a569] transition">Terms of Use</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Area - Footer Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center mt-8"
                    >
                        <p className="text-gray-400 text-sm">
                            Have a Question?{' '}
                            <a href="#docs" className="text-[#2DBE7B] hover:text-[#25a569] transition">Read Documentation</a>
                            {' '}or{' '}
                            <a href="/contact" className="text-[#2DBE7B] hover:text-[#25a569] transition">Contact Us</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
