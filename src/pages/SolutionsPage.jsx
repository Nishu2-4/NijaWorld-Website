import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import automationImg from '../assets/images/ai/automation.png';
import infrastructureImg from '../assets/images/ai/infrastructure.png';
import auditImg from '../assets/images/blockchain/audit.png';
import tokenisationImg from '../assets/images/blockchain/tokenisation.png';
import identityImg from '../assets/images/cybersecurity/identity.png';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';

export default function SolutionsPage() {
    const solutions = [
        {
            title: 'Tokenisation',
            outcome: 'Launch compliant tokenised assets and workflows',
            bullets: ['Governance controls', 'Issuance & lifecycle', 'Reporting & auditability'],
            image: tokenisationImg
        },
        {
            title: 'Supply Chain Solution',
            outcome: 'Improve visibility and reduce disputes with end-to-end traceability',
            bullets: ['Provenance ledger', 'Event tracking', 'Partner reconciliation'],
            image: auditImg
        },
        {
            title: 'Identity Management',
            outcome: 'Secure identity and access with verifiable credentials',
            bullets: ['KYC/KYB-ready', 'Role-based control', 'Fraud reduction'],
            image: identityImg
        },
        {
            title: 'Loyalty Solution',
            outcome: 'Build modern loyalty programs with transparent rewards and engagement',
            bullets: ['Token-based rewards', 'Personalisation', 'Analytics & controls'],
            image: automationImg
        },
        {
            title: 'Digital Assets Investment Advisory',
            outcome: 'Institutional-grade advisory and strategy for digital asset exposure',
            bullets: ['Risk framework', 'Governance', 'Reporting-ready outputs'],
            image: infrastructureImg
        },
        {
            title: 'RWA Liquidity',
            outcome: 'Enable compliant liquidity infrastructure for tokenised real-world assets',
            bullets: ['Issuance workflows', 'Eligibility controls', 'Settlement mechanics'],
            image: tokenisationImg,
            link: '/solutions/rwa-liquidity'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='min-h-screen relative'
        >
            <AnimatedPageBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading"
                        >
                            Solutions designed for enterprise deployment
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed font-body"
                        >
                            Practical implementations that integrate with existing systems and governance models.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, idx) => {
                            const CardWrapper = solution.link ? Link : 'div';
                            const cardProps = solution.link ? { to: solution.link } : {};

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="h-full"
                                >
                                    <CardWrapper
                                        {...cardProps}
                                        className="block h-full group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-b-nijaGreen dark:hover:border-b-nijaGreen hover:shadow-2xl hover:shadow-nijaGreen/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-nijaGreen/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />

                                        {solution.image && (
                                            <div className="mb-6 -mx-6 -mt-6 h-40 relative overflow-hidden rounded-t-xl group-hover:h-44 transition-all duration-300">
                                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent z-10 opacity-80" />
                                                <img
                                                    src={solution.image}
                                                    alt={solution.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}

                                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors relative z-10">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10">
                                            <span className="font-semibold text-gray-900 dark:text-gray-200">Outcome:</span> {solution.outcome}
                                        </p>
                                        <ul className="space-y-2 relative z-10">
                                            {solution.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardWrapper>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Ecosystem Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 max-w-5xl mx-auto"
                    >
                        <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800/50 rounded-2xl overflow-hidden hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-2xl hover:shadow-nijaGreen/10 transition-all duration-300 group">
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                {/* Text Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors">
                                        Our Ecosystem
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-base">
                                        Explore the interconnected network of technologies, partners, and solutions that power enterprise transformation.
                                    </p>
                                    <ul className="space-y-2 mb-5">
                                        <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                            <span>Integrated technology stack</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                            <span>Strategic partnerships</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                            <span>End-to-end solutions</span>
                                        </li>
                                    </ul>
                                    <button className="bg-nijaGreen hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 hover:scale-105 transform">
                                        Explore Ecosystem →
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="h-full min-h-[280px] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white dark:to-gray-900 z-10" />
                                    <img
                                        src="/distributed-economy.png"
                                        alt="Ecosystem"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4 font-heading">
                            Discuss your use case with Nija
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-body">
                            Get a tailored walkthrough, architecture approach, and implementation plan.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <button className="relative z-10 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Request a Demo
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
