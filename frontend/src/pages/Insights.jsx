import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { fetchInsights } from '../api/insightApi';

export default function Insights() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await fetchInsights({ limit: 50 });
                setArticles(data.insights || []);
            } catch (e) {
                setError('Failed to load insights. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

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
                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center py-24">
                            <div className="w-10 h-10 border-2 border-nijaGreen/30 border-t-nijaGreen rounded-full animate-spin" />
                        </div>
                    )}

                    {/* Error */}
                    {!loading && error && (
                        <div className="text-center py-24">
                            <p className="text-gray-400">{error}</p>
                        </div>
                    )}

                    {/* Empty state */}
                    {!loading && !error && articles.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-5xl mb-4">💡</p>
                            <p className="text-gray-400 text-lg font-medium">No insights published yet.</p>
                            <p className="text-gray-500 text-sm mt-2">Check back soon for thought leadership articles.</p>
                        </div>
                    )}

                    {/* Cards grid */}
                    {!loading && !error && articles.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article, idx) => {
                                const primaryCategory = article.category
                                    ? article.category.split('/')[0].trim()
                                    : '';

                                const formattedDate = article.publishedAt
                                    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })
                                    : article.createdAt
                                        ? new Date(article.createdAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric',
                                        })
                                        : '';

                                return (
                                    <motion.div
                                        key={article._id || article.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                        className="h-full"
                                    >
                                        <Link
                                            to={`/insights/${article.slug}`}
                                            className="flex flex-col h-full group bg-[#0D1525] border border-[#1a2a45] rounded-2xl p-7 hover:border-nijaGreen/50 hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-200"
                                        >
                                            {/* Tags row */}
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {primaryCategory && (
                                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0a2218] text-nijaGreen border border-nijaGreen/20">
                                                        {primaryCategory}
                                                    </span>
                                                )}
                                                {article.readTime && (
                                                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#131f35] text-gray-400 border border-white/10">
                                                        {article.readTime}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold mb-4 text-white group-hover:text-nijaGreen transition-colors duration-200 leading-snug flex-grow-0">
                                                {article.title}
                                            </h3>

                                            {/* Excerpt */}
                                            {article.excerpt && (
                                                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-4">
                                                    {article.excerpt}
                                                </p>
                                            )}

                                            {/* Spacer to push footer down */}
                                            <div className="flex-grow" />

                                            {/* Footer row */}
                                            <div className="flex items-center justify-between pt-5 border-t border-[#1a2a45] mt-auto">
                                                <span className="text-xs text-gray-500">
                                                    {formattedDate}
                                                </span>
                                                <span className="text-nijaGreen text-sm font-semibold group-hover:underline flex items-center gap-1">
                                                    Read article →
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Blog Invitation Section */}
            <section
                className="relative py-24 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/blog-section-bg.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide border border-nijaGreen/20">
                            More to Explore
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Dive Deeper Into Our Blog
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Stay up to date with the latest trends, insights, and innovations in blockchain, AI, cybersecurity, and the distributed economy. Explore our collection of articles and thought leadership.
                        </p>

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
