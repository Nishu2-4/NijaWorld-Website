import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { ArrowLeft, Shield, Palette, Link2, CheckCircle } from 'lucide-react';

export default function NijaWalletPage() {
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
                        <span className="text-nijaPurple">N-</span>
                        <span className="text-nijaGreen">Wallet</span>
                    </h1>
                    <p className="text-2xl text-nijaPurple font-semibold mb-6">
                        The Nija Wallet: Your Complete Digital Asset Command Center
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Experience seamless control of your digital universe with N-Wallet, the powerful yet intuitive Nija wallet designed for both crypto enthusiasts and newcomers alike. Store, create, connect, and manage your entire digital asset portfolio from one secure hub.
                    </p>
                </motion.div>

                {/* Beyond Basic Storage Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-nijaGreen to-nijaPurple rounded-2xl p-8 mb-12 text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">Beyond Basic Storage: A Complete Ecosystem</h2>
                    <p className="text-white/90 leading-relaxed">
                        N-Wallet transforms how you interact with digital assets by providing not just secure storage but also seamless integration with the entire Nija ecosystem. Experience the difference of a wallet built for the future of digital ownership.
                    </p>
                </motion.div>

                {/* Core Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold font-heading text-nijaGreen mb-8 text-center">
                        Core Features That Set N-Wallet Apart
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Secure Asset Storage */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Secure Asset Storage</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Multi-layer security with advanced encryption and biometric authentication
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Support for diverse assets including cryptocurrencies, tokens, and NFTs
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Intuitive portfolio dashboard for real-time monitoring of your holdings
                                </li>
                            </ul>
                        </div>

                        {/* Seamless NFT Creation */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Palette className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Seamless NFT Creation</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Direct integration with Nija NFTGen for one-click NFT minting
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Template library for easy artwork transformation into digital collectibles
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Metadata management tools to maximize your NFTs' value and discoverability
                                </li>
                            </ul>
                        </div>

                        {/* Powerful Ecosystem Connectivity */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="w-12 h-12 bg-nijaGreen/10 rounded-lg flex items-center justify-center mb-4">
                                <Link2 className="text-nijaGreen" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-nijaGreen mb-3">Powerful Ecosystem Connectivity</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    Exchange integration for frictionless trading across major platforms
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    DAVPro connection for professional-grade digital asset valuation insights
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    SmaC-G compatibility to create and manage smart contracts
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-nijaGreen mt-0.5 flex-shrink-0" />
                                    TokeniZ access to implement tokenisation strategies
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Why Users Choose N-Wallet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaPurple mb-6">Why Users Choose N-Wallet</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-nijaPurple flex-shrink-0" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">All-in-one solution eliminating the need for multiple applications</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-nijaPurple flex-shrink-0" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">Intuitive interface designed for both beginners and advanced users</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-nijaPurple flex-shrink-0" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">Cross-platform availability with perfect synchronization across devices</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-nijaPurple flex-shrink-0" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">Future-proof architecture ready for emerging digital asset classes</span>
                        </div>
                    </div>
                </motion.div>

                {/* Your Digital Asset Journey */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold font-heading text-nijaGreen mb-4">Your Digital Asset Journey Starts Here</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
                        Whether you're securing your first cryptocurrency, creating a breakthrough NFT collection, or implementing complex tokenisation strategies, N-Wallet provides the tools and connections you need to succeed in the digital asset space.
                    </p>
                    <p className="text-nijaPurple font-semibold italic">
                        N-Wallet isn't just storing your digital assets—it's empowering you to maximize their potential through seamless ecosystem integration and intuitive controls.
                    </p>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-nijaGreen to-nijaPurple rounded-2xl p-8 text-center text-white"
                >
                    <h2 className="text-2xl font-bold font-heading mb-4">Experience the Nija Advantage</h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Join thousands of users who have discovered how N-Wallet's ecosystem approach transforms digital asset management from complex to effortless.
                    </p>
                    <div className="text-3xl font-bold font-heading mb-4">
                        N-Wallet: Store. Create. Connect. Control.
                    </div>
                    <p className="text-white/80 text-sm">
                        Your gateway to the complete Nija digital asset ecosystem—download N-Wallet today and experience digital ownership redefined.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}
