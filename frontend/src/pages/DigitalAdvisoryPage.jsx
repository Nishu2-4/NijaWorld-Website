import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import heroAbstractImg from '../assets/hero-abstract.png';

export default function DigitalAdvisoryPage() {
    const [openApproach, setOpenApproach] = useState(0);

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

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroAbstractImg}
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14]/90 via-[#141B28]/85 to-[#0B0F14]/90" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl md:text-6xl font-bold mb-6 font-heading"
                        >
                            Digital Assets <span className="text-nijaGreen">Investment Advisory & Strategy</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed mb-8 font-body"
                        >
                            Institutional advisory for risk-aware, governance-led digital asset exposure. We deliver execution-aligned strategies that prioritise capital preservation and regulatory compliance over speculation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <button className="relative z-10 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Schedule a Consultation
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Download Methodolgy
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-16 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Key Outcomes
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Strategic clarity for complex digital markets
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Clear Digital Asset Strategy',
                                description: 'Define your "Why" and "How" for digital assets with a thesis-driven approach aligned to corporate goals'
                            },
                            {
                                title: 'Risk-Aligned Allocation Models',
                                description: 'Portfolio construction that respects your risk appetite, liquidity needs, and time horizon'
                            },
                            {
                                title: 'Regulatory-Aware Decision Making',
                                description: 'Navigate the evolving legal landscape with strategies designed for compliance in your target jurisdictions'
                            },
                            {
                                title: 'Execution-Ready Investment Plans',
                                description: 'Move from theory to practice with detailed roadmaps for custody, trading, and settlement'
                            }
                        ].map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-nijaGreen mt-2" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                            {outcome.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {outcome.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive Coverage Section */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Comprehensive Coverage
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Advisory Scope
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            End-to-end guidance for the digital asset lifecycle
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Asset Class Assessment',
                                description: 'Deep dive into protocols, tokens, and RWAs to identify viable investment opportunities'
                            },
                            {
                                title: 'Risk & Suitability Analysis',
                                description: 'Evaluating counterparty, smart contract, and market risks against your profile'
                            },
                            {
                                title: 'Regulatory & Jurisdiction Review',
                                description: 'Mapping legal obligations and tax implications across global markets'
                            },
                            {
                                title: 'Portfolio Construction',
                                description: 'Quantitative modeling for optimal asset mix and rebalancing strategies'
                            },
                            {
                                title: 'Execution & Custody Planning',
                                description: 'Selecting institutional-grade custodians and execution venues'
                            },
                            {
                                title: 'Ongoing Monitoring & Reporting',
                                description: 'Continuous surveillance of portfolio health and market developments'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150"
                            >
                                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Advisory Use Cases
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Tailored guidance for diverse institutional needs
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            'Corporate Treasury: Diversifying balance sheets with digital stores of value',
                            'Family Offices: Generational wealth preservation via new asset classes',
                            'Investment Funds: Launching dedicated crypto or RWA strategies',
                            'Pension & Endowment: Prudent, long-term exposure to digital infrastructure',
                            'Sovereign Wealth: Strategic national adoption and ecosystem development'
                        ].map((useCase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                        <svg className="w-5 h-5 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-900 dark:text-white font-medium group-hover:text-nijaGreen transition-colors duration-150">
                                        {useCase}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide">
                            Capabilities
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Key Features
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Data-driven tools for informed decision making
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Proprietary Market Analysis',
                                description: 'In-depth research reports and on-chain data analytics'
                            },
                            {
                                title: 'Risk Modeling Framework',
                                description: 'Stress-testing portfolios against volatility and black swan events'
                            },
                            {
                                title: 'Vendor Selection Matrix',
                                description: 'Rigorous due diligence on custodians, exchanges, and technology providers'
                            },
                            {
                                title: 'Governance Design',
                                description: 'Structuring multi-sig schemes and operational access controls'
                            },
                            {
                                title: 'Performance Attribution',
                                description: 'Detailed breakdown of returns by asset, sector, and strategy'
                            },
                            {
                                title: 'Education & Training',
                                description: 'Workshops for board members and investment committees'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.07 }}
                                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.15 } }}
                                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-nijaPurple/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-150 opacity-0 group-hover:opacity-100" />
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150 relative z-10">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Deliverables Section */}
            <section className="py-16 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Key Deliverables
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Tangible outputs to drive your strategy
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Investment Strategy Memo',
                                description: 'Comprehensive document outlining thesis, scope, and objectives'
                            },
                            {
                                title: 'Risk & Suitability Assessment',
                                description: 'Detailed report on risk tolerance and asset alignment'
                            },
                            {
                                title: 'Governance & Controls Framework',
                                description: 'Operational playbook for managing digital assets securely'
                            },
                            {
                                title: 'Execution Roadmap',
                                description: 'Timeline and milestones for policy implementation and asset acquisition'
                            },
                            {
                                title: 'Monitoring Dashboards',
                                description: 'Custom views for real-time portfolio tracking and alerts'
                            },
                            {
                                title: 'Quarterly Rebalance Recommendations',
                                description: 'Data-driven suggestions for maintaining target allocations'
                            }
                        ].map((deliverable, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-2xl hover:shadow-nijaGreen/10 transition-all duration-150"
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                        <svg className="w-6 h-6 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                    {deliverable.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {deliverable.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Approach Section */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Methodology
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Advisory Process
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            A structured path to confident digital asset exposure
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                phase: '1',
                                title: 'Discovery & Education',
                                description: 'Understanding your goals and leveling up knowledge on digital asset fundamentals.'
                            },
                            {
                                phase: '2',
                                title: 'Strategy Formulation',
                                description: 'Developing the investment thesis, asset universe, and allocation targets.'
                            },
                            {
                                phase: '3',
                                title: 'Governance Design',
                                description: 'Establishing decision frameworks, approval flows, and risk limits.'
                            },
                            {
                                phase: '4',
                                title: 'Execution Planning',
                                description: 'Selecting partners and defining the operational workflow for trade and custody.'
                            },
                            {
                                phase: '5',
                                title: 'Implementation & Monitoring',
                                description: 'Executing the initial allocation and beginning the cycle of review and rebalancing.'
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-nijaPurple dark:hover:border-nijaPurple transition-all duration-150"
                            >
                                <button
                                    onClick={() => setOpenApproach(openApproach === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nijaPurple/10 flex items-center justify-center group-hover:bg-nijaPurple transition-colors duration-150">
                                            <span className="text-xl font-bold text-nijaPurple group-hover:text-white transition-colors duration-150">
                                                {step.phase}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-nijaPurple transition-all duration-150 ${openApproach === idx ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-150 ${openApproach === idx ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <div className="px-8 pb-8 pl-[5.5rem] text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 font-heading">
                            Align your strategy with the future of finance
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-body text-lg">
                            Schedule a consultation to discuss your digital asset investment goals
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <button className="relative z-10 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Schedule a Consultation
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Request a Demo
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Download Overview
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
