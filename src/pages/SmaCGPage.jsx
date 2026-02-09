import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { ArrowLeft, FileCode, Zap, Shield, Globe, Users, CheckCircle, ArrowRight, Layers, Handshake } from 'lucide-react';

export default function SmaCGPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='min-h-screen relative bg-white dark:bg-baseDark'
        >
            <AnimatedPageBackground />
            <Navbar />

            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/ecosystem"
                        className="inline-flex items-center gap-2 text-nijaGreen hover:text-nijaPurple transition-colors font-semibold"
                    >
                        <ArrowLeft size={20} />
                        Back to Ecosystem
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
                        <span className="text-nijaPurple">SmaC-</span>
                        <span className="text-nijaGreen">G</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-nijaPurple font-semibold mb-6">
                        Smart Contract Generator
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-bold mb-6 max-w-4xl mx-auto">
                        Transform Your Business Agreements Without a Single Line of Code
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Discover the power of blockchain technology without the technical expertise. Our Smart Contract Generator bridges the gap between traditional business practices and cutting-edge blockchain solutions, allowing you to create legally binding, automated agreements with just your business knowledge.
                    </p>
                </motion.div>

                {/* Business Logic Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-nijaGreen to-nijaPurple rounded-2xl p-8 mb-16 text-white text-center"
                >
                    <h2 className="text-3xl font-bold font-heading mb-4">Business Logic to Blockchain — Simplified</h2>
                    <p className="text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
                        Smart contracts are revolutionizing how businesses establish agreements, automate transactions, and ensure compliance. Until now, implementing them required specialized programming skills and blockchain expertise. We've changed that equation.
                    </p>
                    <div className="text-xl font-bold bg-white/10 inline-block px-6 py-3 rounded-full border border-white/20">
                        No coding. No blockchain knowledge. Just business insights.
                    </div>
                </motion.div>

                {/* How It Works Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaPurple mb-12 text-center">
                        From Concept to Contract in Minutes
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-nijaPurple text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto z-10 relative">1</div>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>
                            <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">Define Your Terms</h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Input your business requirements, conditions, and terms using our intuitive interface</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-nijaGreen text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto z-10 relative">2</div>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>
                            <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">Select Parameters</h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Choose from customizable templates designed for various business scenarios</p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-nijaPurple text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto z-10 relative">3</div>
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>
                            <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">Review & Confirm</h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Examine a plain-language summary of your contract's functions and triggers</p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-nijaGreen text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto z-10 relative">4</div>
                            <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-200">Deploy</h3>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400">With one click, transform your business logic into a secure smart contract</p>
                        </div>
                    </div>
                </motion.div>

                {/* Perfect For Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaGreen mb-8 text-center">
                        Perfect For
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-nijaGreen/10 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                                <Layers size={20} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Supply Chain Agreements</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Automate payments upon confirmed deliveries</p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-nijaGreen/10 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle size={20} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Service Level Agreements</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Ensure automatic compliance monitoring and enforcement</p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-nijaGreen/10 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                                <Handshake size={20} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Revenue Sharing</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Distribute earnings transparently according to predefined formulas</p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-nijaGreen/10 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                                <FileCode size={20} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Digital Asset Transfers</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Securely exchange ownership with verified conditions</p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
                            <div className="w-10 h-10 bg-nijaGreen/10 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                                <Globe size={20} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Cross-Border Transactions</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Eliminate intermediaries and reduce international processing times</p>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaPurple mb-8 text-center">Business Benefits Without Technical Barriers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <ArrowRight className="text-nijaPurple" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">Reduce Costs</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Eliminate intermediaries and automate contract execution</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <Shield className="text-nijaPurple" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">Enhance Security</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Leverage blockchain's immutable record-keeping</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <Zap className="text-nijaPurple" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">Increase Efficiency</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Automate verification and execution of agreement terms</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <Users className="text-nijaPurple" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200">Improve Transparency</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Provide all parties with a single source of truth</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-nijaPurple rounded-2xl p-8 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-nijaGreen/20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-nijaGreen/20 rounded-tr-full"></div>

                    <h2 className="text-2xl font-bold font-heading mb-4 relative z-10">The Future of Business Agreements Is Here</h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto relative z-10">
                        Join forward-thinking companies already transforming their operations with accessible blockchain technology. No learning curve, no specialized team, just immediate benefits.
                    </p>
                    <div className="text-xl font-bold font-heading mb-4 relative z-10">
                        Smart Contract Generator: Blockchain simplicity for business professionals.
                    </div>
                    <p className="text-nijaGreen font-semibold relative z-10">
                        Empower your business agreements with blockchain technology—no technical expertise required.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}
