import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { ArrowLeft, TrendingUp, ShieldAlert, BarChart3, PieChart, Lock, Users, Search, Scale } from 'lucide-react';

export default function DAVProPage() {
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
                        <span className="text-nijaPurple">DAV</span>
                        <span className="text-nijaGreen">Pro</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-nijaPurple font-semibold mb-6">
                        Digital Assets Value Projections
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-bold mb-6 max-w-4xl mx-auto">
                        Protecting Genuine Investors Through Data-Driven Valuation
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        DAVPro is an advanced analytical tool designed to assess the true intrinsic and projected value of digital assets. By evaluating multiple parameters, we protect investors from market volatility and ensure fair value realization for all stakeholders—from creators to institutional backers.
                    </p>
                </motion.div>

                {/* The Problem & Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    <div className="bg-nijaGreen/10 border border-nijaGreen/20 rounded-2xl p-8">
                        <div className="w-12 h-12 bg-nijaGreen/20 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                            <ShieldAlert size={24} />
                        </div>
                        <h2 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">The Challenge</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            The digital asset space is fraught with speculation, hype-driven pricing, and lack of fundamental valuation standards. This exposes genuine investors to significant risks and prevents high-quality projects from receiving the capital they deserve.
                        </p>
                    </div>

                    <div className="bg-nijaGreen/10 border border-nijaGreen/20 rounded-2xl p-8">
                        <div className="w-12 h-12 bg-nijaGreen/20 text-nijaGreen rounded-lg flex items-center justify-center mb-4">
                            <Scale size={24} />
                        </div>
                        <h2 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">The DAVPro Solution</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            We bring institutional-grade rigor to crypto valuation. DAVPro analyzes on-chain data, market sentiment, utility metrics, and economic models to provide a comprehensive "True Value" score, enabling informed decision-making for everyone.
                        </p>
                    </div>
                </motion.div>

                {/* Core Methodology Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaPurple mb-12 text-center">
                        Our Valuation Methodology
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <BarChart3 className="text-nijaPurple mb-4" size={32} />
                            <h3 className="text-xl font-bold text-nijaPurple mb-3">Market Metrics</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Analysis of liquidity depth, trading volume consistency, and volatility patterns to determine market stability.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <PieChart className="text-nijaPurple mb-4" size={32} />
                            <h3 className="text-xl font-bold text-nijaPurple mb-3">Tokenomics</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Evaluation of supply schedules, emission rates, and distribution concentration to assess long-term sustainability.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <Users className="text-nijaPurple mb-4" size={32} />
                            <h3 className="text-xl font-bold text-nijaPurple mb-3">Utility & Adoption</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Measurement of active user growth, network effects, and real-world application utility versus speculative value.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <Search className="text-nijaPurple mb-4" size={32} />
                            <h3 className="text-xl font-bold text-nijaPurple mb-3">Technical Audit</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Code quality assessment, security audit verification, and development activity tracking.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Who Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaGreen mb-8 text-center">
                        Empowering the Entire Ecosystem
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                <Users className="text-nijaGreen" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">For Investors</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Access institutional-grade research and "True Value" indices to make confident, data-backed investment decisions, avoiding rug pulls and overvalued assets.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                <TrendingUp className="text-nijaGreen" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">For Creators & Projects</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Gain credibility with a verified DAVPro valuation. Demonstrate your project's fundamental strength to attract long-term, high-quality capital.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Integration with Ecosystem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-100 dark:border-gray-800"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaPurple mb-6 text-center">Integrated with the Nija Ecosystem</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        DAVPro doesn't stand alone. It powers the intelligence behind every decision in the Nija World.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="font-bold text-nijaGreen mb-2">Nija DiiA</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Feeds valuation data into the AI trading agent for zero-loss execution.</p>
                        </div>
                        <div>
                            <div className="font-bold text-nijaGreen mb-2">Nija Wallet</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Displays real-time asset health scores directly in your portfolio view.</p>
                        </div>
                        <div>
                            <div className="font-bold text-nijaGreen mb-2">TokeniZ</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Provides validation standards for new assets created through our framework.</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-nijaPurple to-blue-600 rounded-2xl p-8 text-center text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">Invest with Clarity. Create with Confidence.</h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Stop guessing and start knowing. Leverage the power of DAVPro to unlock the true potential of your digital asset strategy.
                    </p>
                    <div className="text-xl font-bold font-heading mb-4">
                        Protecting Value. Empowering Growth.
                    </div>
                    <button className="px-8 py-3 bg-white text-nijaPurple font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Explore DAVPro Analytics
                    </button>
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}
