import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { TronLogo } from '../components/TronLogo';

export default function AIDataCentresPage() {
    const [activeTier, setActiveTier] = useState(0);

    const heroHighlights = [
        'Enterprise-grade NVIDIA L40S GPUs (48GB) with 3-year standard manufacturer warranty',
        'Tiered deployment model from 4-GPU nodes to multi-node mini data centres',
        'Built-in high-speed networking & security using NVIDIA BlueField-3 DPU + ConnectX-7 NICs',
        'Modular scaling path for Tier 3/4: upgrade GPUs without replacing server chassis'
    ];

    const keyDrivers = [
        {
            title: 'Sovereign Compute Capacity',
            description: 'Build sovereign compute capacity for research and innovation programs'
        },
        {
            title: 'Standard Reference Architectures',
            description: 'Reduce operational friction through standard reference architectures'
        },
        {
            title: 'Upgradeable Infrastructure',
            description: 'Deploy an upgradeable infrastructure model that avoids costly re-platforming'
        }
    ];

    const offerings = [
        {
            title: 'Consulting',
            description: 'Workload sizing, tier recommendation, SKD deployment guidance, security architecture, and software reference blueprints for reliable operations.',
            cta: 'Explore Consulting',
            link: '/technologies/ai-data-centres/consulting',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: 'Turnkey Solutions',
            description: 'End-to-end delivery of tiered AI mini data centres—enterprise GPU servers, networking, security posture, software reference stack, and go-live readiness.',
            cta: 'Explore Turnkey Solutions',
            link: '/technologies/ai-data-centres/consulting/turnkey-solutions',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'Operate & Optimise',
            description: 'Monitoring, utilisation governance, reliability reviews, and ongoing performance and efficiency tuning.',
            cta: 'Talk to an Architect',
            link: '/contact',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    const tierConfigs = [
        {
            name: 'Tier 1',
            label: 'Entry / 4× GPU Node',
            specs: [
                { label: 'Server Platform', value: '2U Enterprise AI Server' },
                { label: 'CPU', value: 'Dual-Socket Intel Xeon 6 Series' },
                { label: 'Networking & Security', value: '1× NVIDIA BlueField-3 DPU + 2× NVIDIA ConnectX-7 NICs' },
                { label: 'GPUs', value: '4× NVIDIA L40S (48GB, enterprise)' },
                { label: 'Warranty', value: '3-year standard manufacturer warranty' }
            ],
            note: 'Tier 1 provides a clean starting point for universities launching GPU capacity for labs, student access, and early-stage research.'
        },
        {
            name: 'Tier 2',
            label: 'Advanced / 8× GPU Mini DC',
            specs: [
                { label: 'Server Platform', value: '4U Enterprise AI Server' },
                { label: 'CPU', value: 'Dual-Socket AMD EPYC 9005 Series' },
                { label: 'Networking & Security', value: '1× NVIDIA BlueField-3 DPU + up to 4× NVIDIA ConnectX-7 NICs' },
                { label: 'GPUs', value: '8× NVIDIA L40S (48GB, enterprise)' },
                { label: 'Warranty', value: '3-year standard manufacturer warranty' }
            ],
            note: 'Tier 2 standardises on an industry-standard 8× enterprise GPU configuration, enabling stronger linear scaling and higher network throughput for mid-scale training workloads.'
        }
    ];

    const scalingAdvantages = [
        'Simplified SKD assembly: local partners master only two chassis types (2U and 4U)',
        'Investment protection: upgrade GPU cards to scale performance without replacing nodes',
        'Future-ready compute path: upgrade to NVIDIA H200 NVL or Blackwell-generation RTX PRO 6000 as needed',
        'Faster expansion cycles: reduce procurement and deployment complexity for large scale-outs'
    ];

    const securityBullets = [
        'Zero-trust segmentation guidance and privileged access governance',
        'Role-based access control (Admin / Operator / Compliance / Auditor)',
        'Evidence logging and audit-ready reporting outputs'
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

            {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
            <section className="pt-32 pb-16 relative z-10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/ai-datacenter-hero.png"
                        alt="AI Data Centre"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#141B28]/95 to-[#0B0F14]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide border border-nijaGreen/20">
                                AI Infrastructure
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-white"
                        >
                            AI Data Centres for{' '}
                            <span className="text-nijaGreen">Universities & Enterprise Research</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-body"
                        >
                            Nija, in partnership with Tron (from Taiwan), designs and deploys scalable AI mini data centres using enterprise-grade NVIDIA L40S GPU infrastructure—built for operational reliability, governance, and future upgrade flexibility.
                        </motion.p>

                        {/* Hero CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="flex flex-wrap gap-4 mb-12"
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
                            <a href="/White_Paper_AI_Mini_Data_Centre.pdf" download className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Download White Paper
                            </a>
                        </motion.div>

                        {/* Highlight Bullets */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="grid sm:grid-cols-2 gap-3"
                        >
                            {heroHighlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-nijaGreen flex-shrink-0" />
                                    <span className="text-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ 2. STRATEGIC IMPERATIVE ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Strategic Imperative
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Why AI Mini Data Centres Now
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                            Universities and research institutions need predictable access to GPU compute for training, fine-tuning, and inference workloads—without long-term dependency on variable cloud pricing and capacity constraints. Nija, in partnership with Tron (from Taiwan), enables local AI compute that is secure, auditable, and scalable with a clear expansion roadmap.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {keyDrivers.map((driver, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150"
                            >
                                <div className="w-12 h-12 rounded-lg bg-nijaGreen/10 flex items-center justify-center mb-5 group-hover:bg-nijaGreen transition-colors duration-150">
                                    <svg className="w-6 h-6 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                    {driver.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {driver.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ 3. TECHNOLOGY PARTNER ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-2xl p-10 md:p-14 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-nijaGreen/5 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                            <div className="flex-shrink-0">
                                <TronLogo size="lg" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white font-heading">
                                    Technology Partner — Tron, Taiwan
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    To strengthen procurement access, supply-chain reliability, and next-generation energy integration, Nija is partnering with Tron, a Taiwanese technology company specialising in AI infrastructure, eMobility, Batteries, and BESS (Battery Energy Storage Systems).
                                </p>
                                <div className="space-y-3">
                                    {[
                                        'Enterprise AI infrastructure sourcing and platform standardisation',
                                        'Roadmap alignment for energy systems and storage (BESS) integration',
                                        'Scalable delivery approach designed for phased institutional rollouts'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-nijaGreen flex-shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 4. WHAT WE OFFER ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            What Nija, in Partnership with Tron, Delivers
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {offerings.map((offer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150 flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-xl bg-nijaGreen/10 flex items-center justify-center mb-6 text-nijaGreen group-hover:bg-nijaGreen group-hover:text-white transition-colors duration-150">
                                    {offer.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                    {offer.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {offer.description}
                                </p>
                                <Link
                                    to={offer.link}
                                    className="w-full py-3 rounded-lg border border-nijaGreen/20 bg-nijaGreen/5 text-nijaGreen font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-nijaGreen/5 hover:shadow-nijaGreen/30 hover:bg-nijaGreen hover:text-white hover:border-transparent hover:scale-[1.02]"
                                >
                                    {offer.cta}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ 5. BASELINE TIER CONFIGS ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide">
                            Enterprise-Grade NVIDIA L40S
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Baseline Configurations
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Below are baseline configurations for our enterprise GPU platforms. These baselines are designed for campus deployments and scalable expansion.
                        </p>
                    </motion.div>

                    {/* Tier selector tabs */}
                    <div className="flex gap-3 mb-8">
                        {tierConfigs.map((tier, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTier(idx)}
                                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-150 ${activeTier === idx
                                    ? 'bg-nijaGreen text-white shadow-lg shadow-nijaGreen/30'
                                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-nijaGreen'
                                    }`}
                            >
                                {tier.name} — {tier.label}
                            </button>
                        ))}
                    </div>

                    {/* Tier spec card */}
                    <motion.div
                        key={activeTier}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                {tierConfigs[activeTier].name}{' '}
                                <span className="text-nijaGreen">({tierConfigs[activeTier].label})</span>
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {tierConfigs[activeTier].specs.map((spec, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-50 dark:bg-[#0d1117] rounded-lg p-4 border border-gray-100 dark:border-gray-800"
                                    >
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 block mb-1">
                                            {spec.label}
                                        </span>
                                        <span className="text-gray-900 dark:text-white font-medium">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-nijaGreen/5 border-t border-nijaGreen/10 px-8 py-5">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-nijaGreen mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <strong className="text-gray-900 dark:text-white">Strategic Note:</strong>{' '}
                                    {tierConfigs[activeTier].note}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 6. MODULAR LOCK-IN SCALING ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Modular Lock-In Scaling for Tier 3 & Tier 4
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-10">
                            For Tier 3 and Tier 4 scaling, we recommend a Modular Lock-In approach: standardise on the same 4U enterprise server backbone as Tier 2, and scale compute by upgrading PCIe GPUs rather than replacing the entire chassis.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {scalingAdvantages.map((adv, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                            <svg className="w-5 h-5 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-nijaGreen transition-colors duration-150">
                                            {adv}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 7. COMMERCIAL TERMS ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] rounded-2xl p-10 md:p-14 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-nijaGreen/10 rounded-full blur-3xl -mr-36 -mt-36" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 font-heading">
                                Commercial Terms & Phased Procurement Planning
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                To secure Tier-1 manufacturer baseline terms, a minimum order quantity (MOQ) of 200 units is required. We support a phased procurement plan aligned to university rollout schedules to help lock supply, manage lead times, and ensure consistent platform standardisation.
                            </p>
                            <p className="text-gray-400 text-sm mb-6">
                                Share your expected rollout pipeline to structure a phased procurement plan.
                            </p>
                            <div className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <Link to="/contact" className="relative z-10 inline-block bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Discuss Procurement Plan
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 8. EFFICIENCY OPTIMISATION ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide">
                            Optional
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Efficiency Optimisation
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
                            Efficiency improvements can be implemented through thermal management, operational tuning, and green-power integration pathways. Solar is available as an optional component, based on site feasibility and institution preferences.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Thermal Optimisation',
                                    desc: 'Thermal optimisation and performance baselines',
                                    icon: '🌡️'
                                },
                                {
                                    title: 'Green Power Roadmap',
                                    desc: 'Optional green-power roadmap based on site constraints',
                                    icon: '☀️'
                                },
                                {
                                    title: 'Operational Policy',
                                    desc: 'Operational policy for utilisation and scheduling efficiency',
                                    icon: '⚡'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 9. SECURITY ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Security & Governance Posture
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-10">
                            Deployments are designed with auditability, controlled access, and resilience—aligned to institutional governance expectations and suitable for government and enterprise research programs.
                        </p>

                        <div className="space-y-4">
                            {securityBullets.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                            <svg className="w-5 h-5 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-900 dark:text-white font-medium group-hover:text-nijaGreen transition-colors duration-150">
                                            {item}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════ 10. FINAL CTA ═══════════════════════ */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 font-heading">
                            Get a Tier Recommendation & Deployment Blueprint
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto font-body text-lg">
                            Share your workload profile, expected users, and constraints. We'll provide a tier recommendation, baseline architecture, and rollout plan.
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
                            <a href="/White_Paper_AI_Mini_Data_Centre.pdf" download className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Download White Paper
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
