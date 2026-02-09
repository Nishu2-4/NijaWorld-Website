import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { ArrowLeft, Layers, Target, FileText, Globe, Building2, ShoppingBag, Radio, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export default function TokeniZPage() {
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
                        <span className="text-nijaPurple">Tokeni</span>
                        <span className="text-nijaGreen">Z</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-nijaPurple font-semibold mb-6">
                        Tokenisation Framework
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-bold mb-6 max-w-4xl mx-auto">
                        Transform Your Business Model With Strategic Tokenisation
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        In today's digital economy, tokenisation represents a powerful evolution in how businesses create value, engage with customers, and unlock new revenue streams. Our comprehensive Tokenisation Framework provides you with a structured, actionable roadmap to successfully tokenise your business assets and operations.
                    </p>
                </motion.div>

                {/* Transformation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-600 to-nijaPurple rounded-2xl p-8 mb-16 text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">From Traditional to Token-Powered</h2>
                    <p className="text-white/90 leading-relaxed mb-6">
                        Tokenisation isn't just for tech companies anymore. Any business with valuable assets, loyal customers, or unique offerings can leverage this revolutionary approach. Our framework demystifies the process, turning complex blockchain concepts into clear, executable business strategies.
                    </p>
                </motion.div>

                {/* Roadmap Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaGreen mb-12 text-center">
                        Your Complete Tokenisation Roadmap
                    </h2>

                    <div className="space-y-8">
                        {/* Phase 1 */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-nijaGreen text-white px-4 py-1 rounded-bl-xl font-bold text-sm">Phase 1</div>
                            <h3 className="text-2xl font-bold text-nijaGreen mb-6">Discovery & Assessment</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <Target size={18} className="text-nijaGreen" /> Asset Identification
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Determine which aspects of your business hold tokenisation potential</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <TrendingUp size={18} className="text-nijaGreen" /> Market Opportunity
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Evaluate competitive landscape and customer receptiveness</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <ShieldCheck size={18} className="text-nijaGreen" /> Regulatory Navigation
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Understand compliance requirements specific to your industry</p>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-nijaGreen text-white px-4 py-1 rounded-bl-xl font-bold text-sm">Phase 2</div>
                            <h3 className="text-2xl font-bold text-nijaGreen mb-6">Strategic Design</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <Zap size={18} className="text-nijaGreen" /> Token Economics
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Design value mechanisms that align with business objectives</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <Layers size={18} className="text-nijaGreen" /> Use Case Development
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Define concrete applications that deliver genuine utility</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <FileText size={18} className="text-nijaGreen" /> Governance Framework
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Establish management structures that balance control and community</p>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-nijaGreen text-white px-4 py-1 rounded-bl-xl font-bold text-sm">Phase 3</div>
                            <h3 className="text-2xl font-bold text-nijaGreen mb-6">Implementation Planning</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <Layers size={18} className="text-nijaGreen" /> Technology Selection
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Choose the right blockchain platform and technical architecture</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <Globe size={18} className="text-nijaGreen" /> Partnership Ecosystem
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Identify necessary service providers and integration partners</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                                        <TrendingUp size={18} className="text-nijaGreen" /> Launch Strategy
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Create phased rollout plans with clear milestones and metrics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Industries Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaPurple mb-8 text-center">
                        Business Benefits Across Industries
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm">
                            <ShoppingBag className="text-nijaPurple mb-4" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Retail & Consumer Goods</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Create innovative loyalty programs and exclusive product access</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm">
                            <Building2 className="text-nijaPurple mb-4" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Real Estate</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Enable fractional ownership and streamline property transactions</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm">
                            <Radio className="text-nijaPurple mb-4" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Entertainment & Media</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Develop new monetization models for content and IP</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm">
                            <Layers className="text-nijaPurple mb-4" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Manufacturing</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Establish verifiable supply chain tracking and parts authentication</p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm md:col-span-2 lg:col-span-2">
                            <Target className="text-nijaPurple mb-4" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Service Providers</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Introduce membership models with tangible digital benefits</p>
                        </div>
                    </div>
                </motion.div>

                {/* Why Us & CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 mb-12 shadow-lg"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaGreen mb-6 text-center">Why Our Framework Delivers Results</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <div className="font-bold text-nijaGreen mb-2">Business-First</div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Focuses on sustainable value creation, not just technology</p>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-nijaGreen mb-2">Scalable</div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Adaptable to businesses of all sizes across various sectors</p>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-nijaGreen mb-2">Integration-Focused</div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Designed to complement your existing operations</p>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-nijaGreen mb-2">Future-Proofed</div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Built with evolving regulations and market developments in mind</p>
                        </div>
                    </div>

                    <div className="bg-nijaGreen/10 rounded-xl p-8 text-center">
                        <h3 className="text-xl font-bold font-heading mb-4 text-nijaGreen">Begin Your Tokenisation Journey</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            Transform potential into action with a proven framework that guides you from concept to implementation. Our structured approach ensures your tokenisation initiative aligns with core business objectives.
                        </p>
                        <div className="text-lg font-bold text-nijaPurple">
                            TokeniZ: Your blueprint for business transformation in the token economy.
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}
