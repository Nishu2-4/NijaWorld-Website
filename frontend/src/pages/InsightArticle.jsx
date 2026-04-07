import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { fetchInsightBySlug } from '../api/insightApi';

export default function InsightArticle() {
    const { slug } = useParams();
    const [insight, setInsight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setNotFound(false);
            try {
                const data = await fetchInsightBySlug(slug);
                setInsight(data);
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        load();
        window.scrollTo(0, 0);
    }, [slug]);

    // Split category string into individual tag pills
    const tags = insight?.category
        ? insight.category.split('/').map((s) => s.trim()).filter(Boolean)
        : [];

    const formattedDate = insight?.publishedAt
        ? new Date(insight.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        })
        : insight?.createdAt
            ? new Date(insight.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
            })
            : '';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ backgroundColor: '#0B0F14', minHeight: '100vh' }}
        >
            <Navbar />

            {/* ── Loading ─────────────────────────────── */}
            {loading && (
                <div className="pt-40 flex justify-center items-center">
                    <div className="w-10 h-10 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            )}

            {/* ── 404 ──────────────────────────────────── */}
            {!loading && notFound && (
                <div className="pt-40 pb-24 text-center px-6">
                    <p className="text-6xl mb-6">📄</p>
                    <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
                    <p className="text-gray-400 mb-8">
                        The insight article you're looking for doesn't exist or has been removed.
                    </p>
                    <Link
                        to="/insights"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00c896] text-black font-semibold hover:bg-[#00c896]/90 transition-all"
                    >
                        ← Back to Insights
                    </Link>
                </div>
            )}

            {/* ── Article ──────────────────────────────── */}
            {!loading && insight && (
                <article className="pt-28 pb-20">
                    <div className="max-w-[820px] mx-auto px-6">

                        {/* Back link */}
                        <Link
                            to="/insights"
                            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#00c896] transition-colors duration-150 text-sm mb-10 group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Insights
                        </Link>

                        {/* Category tag pills */}
                        {tags.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35 }}
                                className="flex flex-wrap gap-2.5 mb-5"
                            >
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm font-semibold px-4 py-1 rounded-full"
                                        style={{
                                            background: 'rgba(0,200,150,0.1)',
                                            color: '#00c896',
                                            border: '1px solid rgba(0,200,150,0.25)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        )}

                        {/* Read time + Date metadata */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            className="flex items-center gap-3 text-sm text-gray-400 mb-6"
                        >
                            {insight.readTime && (
                                <span>{insight.readTime} read</span>
                            )}
                            {insight.readTime && formattedDate && (
                                <span className="text-gray-600">•</span>
                            )}
                            {formattedDate && <span>{formattedDate}</span>}
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
                        >
                            {insight.title}
                        </motion.h1>

                        {/* Thin divider */}
                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} className="mb-10" />

                        {/* Article body */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.18 }}
                            className="insight-content"
                            dangerouslySetInnerHTML={{ __html: insight.content }}
                        />

                        {/* Hashtag-style tags */}
                        {insight.tags?.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.22 }}
                                className="mt-6 flex flex-wrap gap-2"
                            >
                                {insight.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase"
                                        style={{
                                            background: 'rgba(0,200,150,0.08)',
                                            color: '#00c896',
                                            border: '1px solid rgba(0,200,150,0.35)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        )}

                        {/* CTA section */}
                        {insight.ctaLinks?.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.26 }}
                                className="mt-16 pt-12 text-center"
                                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium">
                                    Explore further
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {insight.ctaLinks.map((cta, idx) => (
                                        <Link
                                            key={idx}
                                            to={cta.href}
                                            className={
                                                cta.variant === 'primary'
                                                    ? 'px-6 py-3 rounded-lg font-semibold text-sm transition-all bg-[#00c896] text-black hover:bg-[#00c896]/90 shadow-lg shadow-[#00c896]/20'
                                                    : 'px-6 py-3 rounded-lg font-semibold text-sm transition-all text-gray-300 hover:text-white hover:border-[#00c896]/50'
                                            }
                                            style={
                                                cta.variant !== 'primary'
                                                    ? { border: '1px solid rgba(255,255,255,0.15)' }
                                                    : {}
                                            }
                                        >
                                            {cta.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Back link — bottom */}
                        <div className="mt-14 text-center">
                            <Link
                                to="/insights"
                                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#00c896] transition-colors text-sm group"
                            >
                                <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to all insights
                            </Link>
                        </div>
                    </div>
                </article>
            )}

            <Footer />
        </motion.div>
    );
}
