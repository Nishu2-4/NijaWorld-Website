import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Contact() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            <section className="pt-24 md:pt-32 pb-20 md:pb-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
                            Ready to transform your enterprise? Let's talk.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 md:p-8"
                        >
                            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                                Request a Demo
                            </h2>
                            <form className="space-y-4 md:space-y-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                        placeholder="Acme Corp"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-nijaGreen hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div>
                                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-gray-900 dark:text-white">
                                    Enterprise Support
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                                    Our team is available 24/7 to support your mission-critical operations.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-nijaGreen/10 flex items-center justify-center">
                                            📧
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                            <p className="font-medium text-gray-900 dark:text-white">reach@nija.world</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-nijaPurple/10 flex items-center justify-center">
                                            📞
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                            <p className="font-medium text-gray-900 dark:text-white">+91 97396 66347</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-nijaGreen/10 to-nijaPurple/10 border border-nijaGreen/20 dark:border-nijaGreen/30 rounded-2xl p-4 sm:p-5 md:p-6">
                                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-gray-900 dark:text-white">
                                    Schedule a Call
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">
                                    Prefer to talk directly with our solution architects? Book a consultation.
                                </p>
                                <button className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                                    View Calendar
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
