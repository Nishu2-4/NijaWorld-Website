import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { InteractiveDotGrid } from '../components/InteractiveDotGrid';
import { useState } from 'react';

export default function Signup() {
    const [signupForm, setSignupForm] = useState({
        email: '',
        organisation: '',
        role: '',
        country: '',
        password: '',
        confirmPassword: ''
    });

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (signupForm.password !== signupForm.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Signup attempt:', signupForm);
        // TODO: Implement actual signup logic
    };

    return (
        <div className='min-h-screen bg-[#0a0e13] dark:bg-[#0a0e13]'>
            <Navbar />

            {/* Main Signup Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
                {/* Interactive Dot Grid Background */}
                <InteractiveDotGrid />

                {/* Content Layer */}
                <div className="relative z-10 w-full max-w-xl">

                    {/* Centered Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#1a1f2e] rounded-2xl shadow-2xl shadow-black/50 p-12 relative"
                    >
                        {/* Top Right - Sign In Link */}
                        <div className="absolute top-6 right-8 text-sm text-gray-400">
                            Already have an account?{' '}
                            <Link to="/join" className="text-[#2DBE7B] hover:text-[#25a569] font-medium transition">
                                Sign in
                            </Link>
                        </div>

                        {/* Header Section */}
                        <div className="mb-8 mt-4">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Create an Account
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Get started by creating your LFID
                            </p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSignupSubmit} className="space-y-5">

                            {/* Email Address */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={signupForm.email}
                                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>

                            {/* Organisation Name */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Organisation Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={signupForm.organisation}
                                        onChange={(e) => setSignupForm({ ...signupForm, organisation: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                        placeholder="Your company or organization"
                                    />
                                </div>
                            </div>

                            {/* Role Dropdown */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Role
                                </label>
                                <div className="relative">
                                    {/* Dropdown Arrow Icon */}
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <select
                                        required
                                        value={signupForm.role}
                                        onChange={(e) => setSignupForm({ ...signupForm, role: e.target.value })}
                                        className="w-full px-4 pr-12 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#0f1419]">Select your role</option>
                                        <option value="developer" className="bg-[#0f1419]">Developer</option>
                                        <option value="designer" className="bg-[#0f1419]">Designer</option>
                                        <option value="manager" className="bg-[#0f1419]">Manager</option>
                                        <option value="founder" className="bg-[#0f1419]">Founder</option>
                                        <option value="other" className="bg-[#0f1419]">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Country Dropdown */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Country
                                </label>
                                <div className="relative">
                                    {/* Dropdown Arrow Icon */}
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <select
                                        required
                                        value={signupForm.country}
                                        onChange={(e) => setSignupForm({ ...signupForm, country: e.target.value })}
                                        className="w-full px-4 pr-12 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#0f1419]">Select your country</option>
                                        <option value="US" className="bg-[#0f1419]">United States</option>
                                        <option value="UK" className="bg-[#0f1419]">United Kingdom</option>
                                        <option value="CA" className="bg-[#0f1419]">Canada</option>
                                        <option value="DE" className="bg-[#0f1419]">Germany</option>
                                        <option value="FR" className="bg-[#0f1419]">France</option>
                                        <option value="IN" className="bg-[#0f1419]">India</option>
                                        <option value="CN" className="bg-[#0f1419]">China</option>
                                        <option value="JP" className="bg-[#0f1419]">Japan</option>
                                        <option value="SG" className="bg-[#0f1419]">Singapore</option>
                                        <option value="AU" className="bg-[#0f1419]">Australia</option>
                                        <option value="BR" className="bg-[#0f1419]">Brazil</option>
                                        <option value="MX" className="bg-[#0f1419]">Mexico</option>
                                        <option value="other" className="bg-[#0f1419]">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={signupForm.password}
                                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                        placeholder="Create a strong password"
                                    />
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={signupForm.confirmPassword}
                                        onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#0f1419] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2DBE7B] focus:border-transparent transition"
                                        placeholder="Re-enter your password"
                                    />
                                </div>
                            </div>

                            {/* Create Account Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#2DBE7B] hover:bg-[#25a569] text-white py-4 rounded-lg font-semibold transition shadow-lg shadow-[#2DBE7B]/30 hover:shadow-[#2DBE7B]/50 mt-6"
                            >
                                CREATE ACCOUNT
                            </button>

                            {/* Footer Text */}
                            <div className="text-center mt-6">
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    By creating an account, you agree to our{' '}
                                    <a href="#privacy" className="text-[#2DBE7B] hover:text-[#25a569] transition">
                                        Privacy Policy
                                    </a>
                                    {' '}and{' '}
                                    <a href="#terms" className="text-[#2DBE7B] hover:text-[#25a569] transition">
                                        Terms of Use
                                    </a>
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
