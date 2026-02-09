import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { ArrowLeft, Brain, ShieldCheck, Network, Zap, Activity, BarChart2, CheckCircle, Globe, Layers } from 'lucide-react';

export default function NijaDiiAPage() {
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
                        <span className="text-nijaPurple">Nija</span>
                        <span className="text-nijaGreen"> DiiA</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-nijaPurple font-semibold mb-6">
                        Digital Investments Intelligent Agent
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-bold mb-6 max-w-4xl mx-auto">
                        The World's First Self-Evolving AI for Crypto and Web3 Advisory
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Transform your approach to digital asset investments with Nija DiiA, a sovereign AI-native financial intelligence protocol that elevates trading beyond human limitations. Unlike conventional systems, DiiA continuously evolves, adapts, and optimizes itself—creating a revolutionary zero-loss approach to crypto and Web3 investments.
                    </p>
                </motion.div>

                {/* Intelligence Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-nijaPurple to-nijaGreen rounded-2xl p-8 mb-12 text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">Intelligence That Grows Stronger Every Day</h2>
                    <p className="text-white/90 leading-relaxed">
                        At the heart of Nija DiiA lies our proprietary self-evolving technology that fundamentally reshapes what's possible in financial markets.
                    </p>
                </motion.div>

                {/* Core Intelligence Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Self-Evolving AI Kernel */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Brain className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Self-Evolving AI Kernel</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Our groundbreaking "God Kernel" breeds, mutates, and optimizes trading agents in real-time, constantly improving performance through evolutionary algorithms.
                            </p>
                        </div>

                        {/* Zero-Loss Protocol */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Zero-Loss Enforcement</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                All potential trades undergo rigorous simulation and must achieve minimum 80% win probability before execution is authorized.
                            </p>
                        </div>

                        {/* Multi-Agent Ecosystem */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Network className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Multi-Agent Ecosystem</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                30+ specialized agents work in concert across neural, genetic, and reinforcement learning frameworks to analyze markets from every perspective.
                            </p>
                        </div>

                        {/* Quantum Analytics */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Quantum Analytics Engine</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Advanced predictive modeling incorporating quantum principles of interference, entanglement, and spectral forecasting for unprecedented market insight.
                            </p>
                        </div>

                        {/* Hyperdimensional Pattern Recognition */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg md:col-span-2 lg:col-span-2">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Activity className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Hyperdimensional Pattern Recognition</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Identifies complex trading patterns across 10,000+ dimensions, detecting Fibonacci, Elliot, Harmonic, Fractal, and Geometric signals invisible to conventional analysis.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Strategic Tools Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaPurple mb-8 text-center">
                        Powerful Tools for Strategic Advantage
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                <Layers className="text-nijaPurple" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-nijaPurple mb-2">Visual Strategy Builder</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Create sophisticated trading strategies through an intuitive visual interface. Combine traditional indicators (RSI, MACD, SMA) with DiiA's proprietary AI signals, then instantly simulate and optimize.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                <Network className="text-nijaPurple" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-nijaPurple mb-2">Agent Intelligence Network</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Experience collective AI with performance rankings across specialized agent types, adaptive behavior development, and specialized agent roles.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                <BarChart2 className="text-nijaPurple" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-nijaPurple mb-2">Comprehensive Asset Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Access opportunity scoring across 1000+ tokens through technical indicator aggregation, real-time sentiment analysis, and multi-timeframe pattern recognition.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                <Activity className="text-nijaPurple" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-nijaPurple mb-2">System Performance Dashboard</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Monitor vital metrics including capital efficiency, trading performance, agent evolution, and system resource utilization—all delivering 95% system efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Enterprise Integration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaGreen mb-6">Enterprise Integration Advantages</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <Globe className="text-nijaGreen mt-1 flex-shrink-0" size={20} />
                            <div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">API-First Architecture: </span>
                                <span className="text-gray-600 dark:text-gray-400">Seamlessly integrate with any existing system—from centralized exchanges to DeFi protocols.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-nijaGreen mt-1 flex-shrink-0" size={20} />
                            <div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">Institution-Grade Intelligence: </span>
                                <span className="text-gray-600 dark:text-gray-400">Deploy AI-generated trading decisions backed by zero-loss logic.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Globe className="text-nijaGreen mt-1 flex-shrink-0" size={20} />
                            <div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">Web3 Native Framework: </span>
                                <span className="text-gray-600 dark:text-gray-400">Future-ready architecture with DAO governance, tokenization, and community protocols.</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-nijaGreen mt-1 flex-shrink-0" size={20} />
                            <div>
                                <span className="font-bold text-gray-800 dark:text-gray-200">Infinitely Scalable: </span>
                                <span className="text-gray-600 dark:text-gray-400">Handles both retail and institutional capital requirements without performance degradation.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Transform Your Organization */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaGreen mb-8">Transform Your Organization's Trading Capabilities</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-semibold text-nijaPurple border border-gray-100 dark:border-gray-700">Exchanges</span>
                        <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-semibold text-nijaPurple border border-gray-100 dark:border-gray-700">Investment Platforms</span>
                        <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-semibold text-nijaPurple border border-gray-100 dark:border-gray-700">DeFi Projects</span>
                        <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-semibold text-nijaPurple border border-gray-100 dark:border-gray-700">Corporate Treasury</span>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-nijaPurple to-nijaGreen rounded-2xl p-8 text-center text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">Nija DiiA</h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg italic">
                        Where artificial intelligence meets financial intelligence—evolving together daily.
                    </p>
                    <div className="text-xl md:text-2xl font-bold font-heading mb-4">
                        Unleash the power of self-evolving AI and transform your approach to digital asset investments.
                    </div>
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}
