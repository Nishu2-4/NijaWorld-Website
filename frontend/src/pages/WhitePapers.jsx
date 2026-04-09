import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function WhitePapers() {
    const papers = [
        {
            title: 'AI-Powered Mini Data Centres for Universities',
            date: 'March 2026',
            author: 'Nija Venture Impacts Private Limited',
            category: 'AI Infrastructure',
            description: 'This white paper presents a deployment-oriented blueprint for scalable mini AI data centres tailored to universities, AI research laboratories, and smart-city-linked micro data centre environments. With architecture-first guidance, focusing on capability, utilisation, energy efficiency, and institutional relevance.',
            slug: '/white-papers/ai-data-centres',
            tags: ['AI Data Centres', 'Universities', 'NVIDIA L40S', 'Enterprise GPU']
        }
        // More white papers will be added here (e.g., FST)
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

            {/* ═══════════════════════ HERO ═══════════════════════ */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide border border-nijaPurple/20">
                                Knowledge Library
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="text-5xl md:text-6xl font-bold mb-6 font-heading"
                        >
                            White <span className="text-nijaPurple">Papers</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-lg text-gray-300 leading-relaxed font-body max-w-3xl"
                        >
                            The White Papers section is a curated knowledge library of detailed papers covering the architecture, design rationale, implementation approach, and applied use cases of our products and services. It is intended for readers seeking a more comprehensive understanding of the technical and strategic foundations that underpin our work.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="text-gray-400 leading-relaxed font-body mt-4"
                        >
                            These papers are written to bridge vision and execution. They provide deeper context on the challenges being addressed, the systems being proposed, and the practical considerations involved in deploying scalable, future-ready solutions across industries and institutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ PAPERS GRID ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {papers.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="h-full"
                            >
                                <Link
                                    to={paper.slug}
                                    className="flex flex-col h-full group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-200 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-nijaPurple/5 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity opacity-0 group-hover:opacity-100" />

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-nijaPurple/10 text-nijaPurple border border-nijaPurple/20">
                                            {paper.category}
                                        </span>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                            {paper.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-200 leading-snug relative z-10">
                                        {paper.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-6 relative z-10">
                                        {paper.description}
                                    </p>

                                    {/* Author & CTA */}
                                    <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800 mt-auto relative z-10">
                                        <span className="text-xs text-gray-500">{paper.author}</span>
                                        <span className="text-nijaPurple text-sm font-semibold group-hover:underline flex items-center gap-1">
                                            Read paper →
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coming Soon placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 py-16"
                    >
                        <p className="text-gray-400 text-lg font-medium">More white papers coming soon.</p>
                        <p className="text-gray-500 text-sm mt-2">Including papers on Financial Services Technology and more.</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
