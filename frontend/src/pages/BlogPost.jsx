import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { fetchBlogBySlug } from '../api/blogApi';

// Estimate reading time (~200 wpm)
function readingTime(text = '') {
    const words = text.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 200));
    return `${mins} min read`;
}

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchBlogBySlug(slug);
                setBlog(data);
            } catch (e) {
                setError('Blog post not found.');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="min-h-screen relative bg-white dark:bg-baseDark"
        >
            <AnimatedPageBackground />
            <Navbar />

            <main className="relative z-10 pt-28 pb-24">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Back link */}
                    <button
                        onClick={() => navigate('/blogs')}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-nijaGreen transition-colors mb-10"
                    >
                        ← Back to Blogs
                    </button>

                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center py-32">
                            <div className="w-8 h-8 border-2 border-nijaGreen/30 border-t-nijaGreen rounded-full animate-spin" />
                        </div>
                    )}

                    {/* Error */}
                    {!loading && error && (
                        <div className="text-center py-32">
                            <p className="text-5xl mb-4">📭</p>
                            <p className="text-gray-400 text-lg">{error}</p>
                            <button
                                onClick={() => navigate('/blogs')}
                                className="mt-6 px-5 py-2.5 rounded-lg bg-nijaGreen text-black font-semibold text-sm hover:bg-nijaGreen/90 transition-all"
                            >
                                Browse all blogs
                            </button>
                        </div>
                    )}

                    {/* Content */}
                    {!loading && blog && (
                        <article>
                            {/* Tags */}
                            {blog.tags?.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-wrap gap-2 mb-5"
                                >
                                    {blog.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-nijaGreen/10 text-nijaGreen capitalize"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            )}

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: 0.05 }}
                                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading leading-tight mb-6"
                            >
                                {blog.title}
                            </motion.h1>

                            {/* Meta */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-800 mb-10"
                            >
                                {/* Author avatar */}
                                <div className="w-9 h-9 rounded-full bg-nijaGreen/20 flex items-center justify-center text-nijaGreen font-bold text-sm shrink-0">
                                    {blog.author?.name?.charAt(0).toUpperCase() || 'N'}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {blog.author?.name || 'NijaWorld Team'}
                                    </span>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                        <span>
                                            {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span>·</span>
                                        <span>{readingTime(blog.content)}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Excerpt */}
                            {blog.excerpt && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.15 }}
                                    className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 italic border-l-4 border-nijaGreen pl-5"
                                >
                                    {blog.excerpt}
                                </motion.p>
                            )}

                            {/* Body */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-nijaGreen prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-nijaGreen prose-code:bg-nijaGreen/10 prose-code:px-1 prose-code:rounded prose-code:text-sm max-w-none"
                                style={{ whiteSpace: 'pre-wrap' }}
                            >
                                {blog.content}
                            </motion.div>

                            {/* Footer nav */}
                            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                                <button
                                    onClick={() => navigate('/blogs')}
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-nijaGreen transition-colors"
                                >
                                    ← Back to Blogs
                                </button>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="text-sm text-gray-400 hover:text-nijaGreen transition-colors"
                                >
                                    ↑ Top
                                </button>
                            </div>
                        </article>
                    )}
                </div>
            </main>

            <Footer />
        </motion.div>
    );
}
