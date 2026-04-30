import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { TronLogo } from '../components/TronLogo';

export default function WhitePaperAIDataCentre() {
    const sections = [
        { title: 'Executive Summary', desc: 'Architecture-first guidance focusing on capability, utilisation, energy efficiency, and institutional relevance.' },
        { title: "India's AI Infrastructure Imperative", desc: 'Ten priority use cases of national significance including multilingual LLMs, agricultural yield prediction, TB diagnostics, and more.' },
        { title: 'Preliminary Technical Architecture', desc: 'Four-tier model from 2U entry nodes to full rack national AI clusters, with detailed GPU, CPU, memory, and networking specs.' },
        { title: 'Energy, Cooling & Sustainability', desc: 'Power and cooling infrastructure, PUE targets, liquid vs air cooling analysis, and green power integration.' },
        { title: 'Security, Governance & Data Sovereignty', desc: 'NCIIPC-aligned cybersecurity architecture, DPDP compliance, and physical security framework.' },
        { title: 'Financial Modelling & ROI Analysis', desc: 'Five-year ROI assessment, IRR projections (23%–36%), and payback period analysis across all tiers.' },
        { title: 'Risk Assessment & Mitigation', desc: 'Structured risk scoring with 64% portfolio risk reduction through mitigation controls.' },
        { title: 'Implementation Roadmap', desc: 'Phased 12-month deployment framework from foundation through optimisation and strategic scaling.' },
        { title: 'Illustrative Case Studies', desc: 'Real Indian university AI infrastructure benchmarks including IIT Hyderabad and entry-level deployments.' }
    ];

    const keyStats = [
        { label: 'Deployment Tiers', value: '4' },
        { label: 'Five-Year ROI', value: '30–37%' },
        { label: 'IRR Range', value: '23–36%' },
        { label: 'Payback Period', value: '2.3–3.0 years' }
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
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/ai-datacenter-hero.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14]/95 via-[#141B28]/90 to-[#0B0F14]/95" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 text-sm text-gray-400 mb-6"
                        >
                            <Link to="/white-papers" className="hover:text-nijaPurple transition">White Papers</Link>
                            <span>/</span>
                            <span className="text-nijaPurple">AI Data Centres</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-wrap gap-3 mb-6"
                        >
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-nijaPurple/10 text-nijaPurple border border-nijaPurple/20">
                                White Paper
                            </span>
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                                March 2026
                            </span>
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                                27 Pages
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight"
                        >
                            Deploying Scalable AI-Powered Mini Data Centres for{' '}
                            <span className="text-nijaGreen">Universities</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-sm text-gray-400 mb-8 font-body"
                        >
                            Authored by <strong className="text-gray-200">Nija Venture Impacts Private Limited</strong> · In Partnership with Tron
                        </motion.p>

                        {/* Download CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <a
                                    href="/White_Paper_AI_Mini_Data_Centre.pdf"
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 inline-flex items-center gap-2 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download White Paper (PDF)
                                </a>
                            </div>
                            <Link to="/technologies/ai-data-centres" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Explore AI Data Centres
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ KEY STATS ═══════════════════════ */}
            <section className="py-12 relative z-10 bg-gray-50 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {keyStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-nijaGreen mb-1">{stat.value}</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ EXECUTIVE SUMMARY ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
                            Executive Summary
                        </h2>
                        <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                This white paper presents a deployment-oriented blueprint for scalable mini AI data centres tailored to universities, AI research laboratories, and smart-city-linked micro data centre environments. With architecture-first guidance, focusing on capability, utilisation, energy efficiency, and institutional relevance.
                            </p>
                            <p>
                                The target sector is primarily higher education institutions, AI research laboratories, and micro data centres supporting smart city infrastructure. These environments process workloads ranging from terabytes of real-time edge data to petabyte-scale analytics for meteorological forecasting, genomic sequencing, and large institutional databases.
                            </p>
                            <p>
                                Nija Venture Impacts proposes a four-tier starting model built around enterprise-grade AI servers. The architecture is designed to help universities establish sovereign on-premise compute capacity for multilingual large language model development, campus digital twins, scientific modelling, healthcare prediction, and precision agriculture.
                            </p>
                            <p>
                                The infrastructure strategy is further strengthened through partnership alignment with Tron, a Taiwanese technology company specialising in AI infrastructure, eMobility, batteries, and BESS. This supports a more credible hardware and energy ecosystem narrative for institutional buyers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ WHAT'S INSIDE ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            What's Inside
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Key sections covered in the 27-page white paper
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150"
                            >
                                <div className="w-8 h-8 rounded-lg bg-nijaPurple/10 flex items-center justify-center mb-4 group-hover:bg-nijaPurple transition-colors duration-150">
                                    <span className="text-xs font-bold text-nijaPurple group-hover:text-white transition-colors duration-150">
                                        {idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {section.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ PARTNERSHIP BLOCK ═══════════════════════ */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
                    >
                        <div className="flex items-center gap-6 flex-wrap">
                            <img
                                src="/nija-logo-combined.png"
                                alt="Nija Venture Impacts"
                                className="h-10"
                            />
                            <span className="text-gray-400 text-2xl">×</span>
                            <TronLogo size="md" />
                        </div>
                        <div className="md:ml-auto">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                A joint initiative by Nija Venture Impacts and Tron, Taiwan
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ DOWNLOAD CTA ═══════════════════════ */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 font-heading">
                            Download the Full White Paper
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto font-body text-lg">
                            Get the complete 27-page blueprint including technical architectures, financial modelling, risk assessment, and implementation roadmap.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <a
                                    href="/White_Paper_AI_Mini_Data_Centre.pdf"
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 inline-flex items-center gap-2 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download White Paper (PDF)
                                </a>
                            </div>
                            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Schedule a Consultation
                            </Link>
                            <Link to="/technologies/ai-data-centres" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Explore AI Data Centres
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
