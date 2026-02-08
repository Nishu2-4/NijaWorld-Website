import { motion } from 'framer-motion';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import heroImg from '../assets/images/blockchain/identity.png';

export default function IdentityPrimitivesPage() {
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
            <section className="relative pt-32 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Identity Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#141B28]/90 to-[#0B0F14]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl md:text-6xl font-bold mb-6 font-heading text-white"
                        >
                            Identity <span className="text-nijaPurple">Primitives</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed mb-8 font-body"
                        >
                            Credential verification and permissioning foundations. Own your identity and control your data.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaPurple rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <button className="relative z-10 bg-nijaPurple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50">
                                    Create Identity
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Learn about DID
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Outcomes Section */}
            <section className="py-16 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Why Self-Sovereign Identity?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Move beyond passwords and centralized databases.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Privacy Preservation',
                                description: 'Share only the necessary data (e.g., "Over 18") without revealing everything.'
                            },
                            {
                                title: 'Portable Reputation',
                                description: 'Take your credentials and reputation across different platforms.'
                            },
                            {
                                title: 'Reduced Liability',
                                description: 'Enterprises store fewer sensitive user details, reducing breach risk.'
                            },
                            {
                                title: 'Seamless Onboarding',
                                description: 'Reusable KYC checks allow for instant account creation.'
                            }
                        ].map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-nijaPurple mt-2" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
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
                            Core Capabilities
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Key Features
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Standards-compliant identity infrastructure.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'DID Standards',
                                description: 'W3C-compliant Decentralized Identifiers for people and things.'
                            },
                            {
                                title: 'Verifiable Creds',
                                description: 'Cryptographically signed attestations (degrees, licenses, IDs).'
                            },
                            {
                                title: 'Access Control',
                                description: 'Granular permissioning based on verified attributes.'
                            },
                            {
                                title: 'Zero-Knowledge Proofs',
                                description: 'Prove statements without revealing underlying data.'
                            },
                            {
                                title: 'Key Management',
                                description: 'Secure recovery and management of cryptographic keys.'
                            },
                            {
                                title: 'Universal Resolver',
                                description: 'Resolve identities across multiple blockchain networks.'
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
                            Use Cases
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Identity for the digital economy.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            'Reusable KYC for Banking',
                            'Employee Badging & Access',
                            'IoT Device Authentication',
                            'Educational Certificate Verification',
                            'Healthcare Patient Data Portability'
                        ].map((useCase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple transition-all duration-150"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-nijaPurple/10 flex items-center justify-center group-hover:bg-nijaPurple transition-colors duration-150">
                                        <svg className="w-5 h-5 text-nijaPurple group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-900 dark:text-white font-medium group-hover:text-nijaPurple transition-colors duration-150">
                                        {useCase}
                                    </p>
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
                            Ready to secure digital identities?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-body text-lg">
                            Adopt a privacy-preserving identity strategy for your users.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaPurple rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <button className="relative z-10 bg-nijaPurple hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50">
                                    Start Pilot
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Contact Experts
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
