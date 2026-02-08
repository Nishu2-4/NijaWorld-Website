import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import tokenisationImg from '../assets/images/blockchain/tokenisation.png';
import auditImg from '../assets/images/blockchain/audit.png';
import smartContractsImg from '../assets/images/blockchain/smart_contracts.png';
import identityImg from '../assets/images/blockchain/identity.png';
import blockchainBgImg from '../assets/images/blockchain_ledger_structure.png';

export default function BlockchainPage() {
    const blockchainTechnologies = [
        {
            name: 'Tokenisation',
            description: 'Asset/entitlement lifecycle with governance controls',
            features: ['Asset Digitisation', 'Lifecycle Mgmt', 'Governance Rules'],
            image: tokenisationImg,
            link: '/technologies/blockchain/tokenisation'
        },
        {
            name: 'Audit Trail & Provenance',
            description: 'Tamper-evident records across partners',
            features: ['Immutable Ledger', 'Multi-party Verify', 'History Tracking'],
            image: auditImg,
            link: '/technologies/blockchain/audit'
        },
        {
            name: 'Smart Contracts & Settlement',
            description: 'Automated, verifiable business logic',
            features: ['Auto-Execution', 'Trustless Settlement', 'Logic Documentation'],
            image: smartContractsImg,
            link: '/technologies/blockchain/smart-contracts'
        },
        {
            name: 'Identity & Access Primitives',
            description: 'Credential verification and permissioning foundations',
            features: ['DID Standards', 'Verifiable Creds', 'Access Control'],
            image: identityImg,
            link: '/technologies/blockchain/identity'
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
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={blockchainBgImg}
                        alt="Blockchain Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#141B28]/90 to-[#0B0F14]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading text-white"
                        >
                            Blockchain Infrastructure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed font-body"
                        >
                            Secure, immutable ledger technology designed for enterprise trust, governance, and verifiable business logic.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20">
                        {blockchainTechnologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="group block h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-[#0B0F14] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-b-nijaPurple dark:hover:border-b-nijaPurple hover:shadow-2xl hover:shadow-nijaPurple/10 transition-all duration-200 flex flex-col h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-nijaPurple/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />

                                    {tech.image && (
                                        <div className="mb-6 -mx-6 -mt-6 h-40 relative overflow-hidden rounded-t-xl group-hover:h-44 transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent z-10 opacity-80" />
                                            <img
                                                src={tech.image}
                                                alt={tech.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors relative z-10">
                                        {tech.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed relative z-10">
                                        {tech.description}
                                    </p>

                                    <div className="mt-auto relative z-10">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-3">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2 mb-6">
                                            {tech.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaPurple" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={tech.link}
                                            className="w-full py-3 rounded-lg border border-nijaPurple/20 bg-nijaPurple/5 text-nijaPurple font-medium transition-all duration-200 relative z-10 flex items-center justify-center gap-2 shadow-lg shadow-nijaPurple/5 hover:shadow-nijaPurple/30 hover:bg-nijaPurple hover:text-white hover:border-transparent hover:scale-[1.02]"
                                        >
                                            <span className="relative">
                                                Explore {tech.name}
                                            </span>
                                            <svg
                                                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
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
                        <h2 className="text-3xl font-bold mb-8">
                            Ready to implement secure blockchain solutions?
                        </h2>
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
                                Talk to a Solutions Architect
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
