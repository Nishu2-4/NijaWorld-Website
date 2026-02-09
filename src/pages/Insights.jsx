import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Insights() {
    const articles = [
        {
            slug: 'traceability-and-provenance-for-modern-supply-chains',
            title: 'Traceability and Provenance in Modern Supply Chains: From Visibility to Verifiable Evidence',
            excerpt: 'Supply chain visibility sounds transformative until you face a dispute. Learn how provenance-first supply chain models create defensible operational history that stands up under scrutiny.',
            category: 'Supply Chain / Blockchain / Governance',
            readTime: '6–8 minutes',
            date: 'January 2026'
        },
        {
            slug: 'verifiable-identity-for-partner-ecosystems',
            title: 'Verifiable Identity for Partner Ecosystems: Access Control That Scales with Governance',
            excerpt: 'When enterprises add networks of contractors, partners, and vendors, identity becomes an existential governance problem. Discover how verifiable identity workflows transform access control into a governed process with built-in accountability.',
            category: 'Identity / Security / Enterprise Controls',
            readTime: '6–8 minutes',
            date: 'January 2026'
        },
        {
            slug: 'tokenised-loyalty-programs-with-governance',
            title: 'Tokenised Loyalty Programs: Engagement Gains Without Losing Governance',
            excerpt: 'Most loyalty programs become operational nightmares within months. Discover how tokenisation paired with genuine governance turns loyalty into a controlled, measurable, auditable operational asset.',
            category: 'Loyalty / Tokenisation / Analytics',
            readTime: '5–7 minutes',
            date: 'January 2026'
        }
    ];

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
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading"
                        >
                            Insights & Research
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed font-body"
                        >
                            Expert insights, research papers, and thought leadership on blockchain, AI, and enterprise innovation.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, idx) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="h-full"
                            >
                                <Link
                                    to={`/insights/${article.slug}`}
                                    className="flex flex-col h-full group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150"
                                >
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-nijaGreen/10 text-nijaGreen">
                                            {article.category.split('/')[0].trim()}
                                        </span>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                                        <span className="text-sm text-gray-500 dark:text-gray-500">
                                            {article.date}
                                        </span>
                                        <span className="text-nijaGreen font-medium group-hover:underline">
                                            Read article →
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Blog Invitation Section */}
            <section
                className="relative py-24 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/blog-section-bg.jpg)' }}
            >
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Label */}
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide border border-nijaGreen/20">
                            More to Explore
                        </span>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Dive Deeper Into Our Blog
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Stay up to date with the latest trends, insights, and innovations in blockchain, AI, cybersecurity, and the distributed economy. Explore our collection of articles and thought leadership.
                        </p>

                        {/* CTA Button */}
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all bg-nijaGreen hover:bg-nijaGreen/90 text-white shadow-lg shadow-nijaGreen/30 hover:shadow-xl hover:shadow-nijaGreen/40 hover:scale-105"
                        >
                            Read Our Blog
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
