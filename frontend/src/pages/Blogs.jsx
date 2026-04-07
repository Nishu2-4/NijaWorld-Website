import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import { useAuth } from '../context/AuthContext';
import { fetchBlogs } from '../api/blogApi';

export default function Blogs() {
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchBlogs({ limit: 20 });
                setBlogs(data.blogs);
            } catch (e) {
                setError('Failed to load blogs. Please try again later.');
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
            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-start justify-between">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-5xl font-bold mb-6 font-heading"
                            >
                                Our Blog
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="text-xl text-gray-300 leading-relaxed font-body"
                            >
                                Insights, updates, and thought leadership on blockchain, AI, cybersecurity, and the distributed economy.
                            </motion.p>
                        </div>

                        {/* Auth Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="shrink-0 mt-2"
                        >
                            {isAuthenticated ? (
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-nijaGreen text-black font-semibold text-sm hover:bg-nijaGreen/90 transition-all shadow-lg shadow-nijaGreen/20"
                                >
                                    <span>⚡</span>
                                    Dashboard
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowLogin(true)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <span>🔐</span>
                                    Admin Login
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 border-2 border-nijaGreen/30 border-t-nijaGreen rounded-full animate-spin" />
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-4xl mb-3">⚠️</p>
                            <p>{error}</p>
                        </div>
                    )}

                    {/* No blogs yet */}
                    {!loading && !error && blogs.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-4xl mb-3">📝</p>
                            <p className="text-lg mb-2 dark:text-gray-400">No blog posts yet.</p>
                            <p className="text-sm dark:text-gray-600">
                                {isAuthenticated
                                    ? <span>Go to your <button onClick={() => navigate('/dashboard')} className="text-nijaGreen underline">Dashboard</button> to create the first post.</span>
                                    : 'Check back soon for new content.'}
                            </p>
                        </div>
                    )}

                    {/* Blog Grid */}
                    {!loading && !error && blogs.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post, idx) => (
                                <motion.div
                                    key={post._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                    className="h-full"
                                >
                                    <div
                                        onClick={() => navigate(`/blogs/${post.slug}`)}
                                        className="flex flex-col h-full group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150 cursor-pointer"
                                    >
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags?.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-nijaGreen/10 text-nijaGreen capitalize">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                                            {post.excerpt || post.content?.slice(0, 140) + '…'}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500 dark:text-gray-500">
                                                    {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                                </span>
                                                <span className="text-xs text-gray-400 dark:text-gray-600">
                                                    By {post.author?.name || 'NijaWorld Team'}
                                                </span>
                                            </div>
                                            <span className="text-nijaGreen font-medium group-hover:underline">
                                                Read more →
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </motion.div >
    );
}
