import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function AIDataCentresConsultingPage() {
    const [openPhase, setOpenPhase] = useState(0);

    const coverageBullets = [
        'Workload discovery and GPU sizing (training vs inference vs mixed)',
        'Tier recommendation (Tier 1–4) + expansion triggers',
        'Enterprise baseline architecture (2U for Tier 1, 4U for Tier 2+)',
        'SKD assembly guidance for local partners in India (assembly, cabling, QA)',
        'Hardware stress testing and acceptance criteria',
        'NVIDIA-aligned software reference architecture (Kubernetes + GPU Operator best practices)',
        'Security architecture aligned to Indian NCIIPC standards (zero-trust segmentation)',
        'Procurement advisory including phased planning for MOQ alignment'
    ];

    const phases = [
        {
            phase: '1',
            title: 'Infrastructure & SKD Deployment',
            subtitle: 'Start',
            goal: 'Evaluate workloads and enable local assembly execution with predictable go-live quality.',
            deliverables: [
                'Workload sizing report + tier selection recommendation',
                'Chassis standardisation plan (2U / 4U)',
                'SKD assembly and cabling standards for local partners',
                'Hardware burn-in / stress testing plan and acceptance criteria',
                'Go-live readiness checklist (thermal baseline, power validation, benchmark baseline)'
            ]
        },
        {
            phase: '2',
            title: 'Green Automation & Software Reference Architectures',
            subtitle: 'Build',
            goal: 'Reduce operating cost and standardise the AI software stack using authoritative blueprints.',
            deliverables: [
                'Green Data Centre Thermal Management (Axiado SCM integration) — assist in integrating Axiado SCM with AI-driven Dynamic Thermal Management (DTM), enabling up to 40% reduction in CPU and 20% reduction in GPU power consumption',
                'Software Stack Reference Architectures — provide NVIDIA-aligned enterprise deployment blueprints and best practices for Kubernetes and the NVIDIA GPU Operator, supporting GPU-as-a-Service scheduling, quotas, and operational controls'
            ]
        },
        {
            phase: '3',
            title: 'High-End AI Expansion Strategy',
            subtitle: 'Future',
            goal: 'Prepare for scale, advanced cooling, and high-sensitivity workloads.',
            deliverables: [
                'Scaling assessment toward national-level liquid-cooled compute cabinets (HGX/GB200-class pathways)',
                'Security architecture guidelines aligned to NCIIPC standards with zero-trust network segmentation',
                'Expansion roadmap: Tier 3/4 upgrades via modular GPU swaps (H200 NVL / Blackwell RTX PRO 6000)'
            ]
        }
    ];

    const deliverablesSummary = [
        { title: 'Tier Recommendation', desc: 'Tier recommendation + expansion triggers' },
        { title: 'Baseline Architecture', desc: 'Enterprise baseline architecture (2U/4U chassis standardisation)' },
        { title: 'SKD Assembly Playbook', desc: 'SKD assembly + QA/stress testing playbook' },
        { title: 'Software Reference Blueprint', desc: 'NVIDIA software reference blueprint pack (K8s + GPU Operator best practices)' },
        { title: 'Security Architecture Brief', desc: 'NCIIPC-aligned posture + segmentation guidance' },
        { title: 'Procurement Plan Advisory', desc: 'Phased procurement plan advisory (MOQ alignment)' }
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
                        className="w-full h-full object-cover opacity-20"
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
                            <Link to="/technologies/ai-data-centres" className="hover:text-nijaGreen transition">AI Data Centres</Link>
                            <span>/</span>
                            <span className="text-nijaGreen">Consulting</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading"
                        >
                            Consulting for{' '}
                            <span className="text-nijaGreen">AI Data Centres</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-body"
                        >
                            Hardware-first consulting with enterprise reference architectures—helping institutions deploy reliable AI compute faster while optimising operations, governance, and scale planning.
                        </motion.p>
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
                                <Link to="/contact" className="relative z-10 inline-block bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Schedule a Consultation
                                </Link>
                            </div>
                            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Request a Tier Recommendation
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ CONSULTING COVERAGE ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            What We Cover
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {coverageBullets.map((bullet, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                        <span className="text-xs font-bold text-nijaGreen group-hover:text-white transition-colors duration-150">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">
                                        {bullet}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ 3-PHASE BLUEPRINT ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide">
                            Methodology
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            3-Phase Consulting Blueprint
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {phases.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-nijaPurple dark:hover:border-nijaPurple transition-all duration-150"
                            >
                                <button
                                    onClick={() => setOpenPhase(openPhase === idx ? -1 : idx)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                                >
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nijaPurple/10 flex items-center justify-center group-hover:bg-nijaPurple transition-colors duration-150">
                                            <span className="text-xl font-bold text-nijaPurple group-hover:text-white transition-colors duration-150">
                                                {step.phase}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-nijaPurple block mb-1">
                                                Phase {step.phase} — {step.subtitle}
                                            </span>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-nijaPurple transition-all duration-150 flex-shrink-0 ${openPhase === idx ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-200 ${openPhase === idx ? 'max-h-[600px]' : 'max-h-0'}`}
                                >
                                    <div className="px-6 md:px-8 pb-8 pl-[4.5rem] md:pl-[5.5rem]">
                                        <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm">
                                            <strong className="text-gray-900 dark:text-white">Goal:</strong> {step.goal}
                                        </p>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                            Deliverables
                                        </h4>
                                        <ul className="space-y-3">
                                            {step.deliverables.map((d, dIdx) => (
                                                <li key={dIdx} className="flex items-start gap-3">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ DELIVERABLES SUMMARY ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            What You Receive
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliverablesSummary.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-2xl hover:shadow-nijaGreen/10 transition-all duration-150"
                            >
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                        <svg className="w-6 h-6 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 font-heading">
                            Ready to size your campus compute correctly?
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto font-body text-lg">
                            Share your workload requirements and rollout targets. We'll return a tier recommendation and a deployment blueprint.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <Link to="/contact" className="relative z-10 inline-block bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Schedule a Consultation
                                </Link>
                            </div>
                            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
