import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { TronLogo } from '../components/TronLogo';

export default function AIDataCentresTurnkeyPage() {
    const turnkeyIncludes = [
        'Enterprise GPU server delivery (Tier 1: 2U / Tier 2+: 4U)',
        'Built-in high-speed networking and security (BlueField-3 DPU + ConnectX-7 NICs)',
        'Rack layout, cabling standards, and installation readiness',
        'Hardware burn-in and acceptance testing',
        'Kubernetes + NVIDIA GPU Operator reference deployment (GPU scheduling, quotas, multi-tenant controls)',
        'Access governance: RBAC and operational approvals',
        'Monitoring, utilisation governance, and reporting outputs',
        'Security posture implementation guidance aligned to NCIIPC standards (segmentation + controls)',
        'Documentation handover (architecture, runbooks, acceptance criteria)',
        'Optional efficiency track (thermal optimisation; solar optional and scoped separately)'
    ];

    const packages = [
        {
            tier: 'Tier 1',
            label: 'Entry / 4× L40S Node',
            specs: '2U enterprise AI server, dual Intel Xeon 6, BlueField-3 DPU, 2× ConnectX-7 NICs, 4× L40S GPUs (48GB), 3-year warranty.',
            highlight: false
        },
        {
            tier: 'Tier 2',
            label: 'Advanced / 8× L40S Mini DC',
            specs: '4U enterprise AI server, dual AMD EPYC 9005, BlueField-3 DPU, up to 4× ConnectX-7 NICs, 8× L40S GPUs (48GB), 3-year warranty.',
            highlight: true
        },
        {
            tier: 'Tier 3 & 4',
            label: 'Scale / Modular Lock-In',
            specs: 'Standardise on the Tier-2 4U backbone and upgrade PCIe GPUs as compute demands grow. Upgrade Path: L40S → H200 NVL → Blackwell RTX PRO 6000.',
            highlight: false,
            badge: 'Modular'
        }
    ];

    const archLayers = [
        { label: 'Compute', desc: 'Tiered GPU nodes (2U / 4U) with modular expansion' },
        { label: 'Networking & Security', desc: 'BlueField-3 DPU + ConnectX-7 topology' },
        { label: 'Software', desc: 'Kubernetes + NVIDIA GPU Operator blueprint for scheduling and quotas' },
        { label: 'Governance', desc: 'RBAC + approval workflows for changes and exceptions' },
        { label: 'Operations', desc: 'Monitoring, utilisation reporting, and incident-ready runbooks' }
    ];

    const implSteps = [
        'Requirements + tier confirmation',
        'Site readiness and installation planning (rack, power, networking)',
        'Procurement and delivery coordination',
        'Assembly standards + burn-in testing + acceptance',
        'Software reference stack deployment (K8s + GPU Operator)',
        'Security posture rollout (segmentation, IAM, logging)',
        'Go-live + handover (runbooks, monitoring, reporting)',
        'Expansion planning (Tier 3/4 modular upgrade triggers)'
    ];

    const outcomes = [
        'Faster time-to-launch using standard enterprise reference architectures',
        'Higher operational reliability through repeatable assembly and testing standards',
        'Scalable investment model via modular GPU upgrades for Tier 3/4',
        'Governance and security posture suitable for institutional and enterprise research workloads'
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
                            <Link to="/technologies/ai-data-centres" className="hover:text-nijaGreen transition">AI Data Centres</Link>
                            <span>/</span>
                            <Link to="/technologies/ai-data-centres/consulting" className="hover:text-nijaGreen transition">Consulting</Link>
                            <span>/</span>
                            <span className="text-nijaGreen">Turnkey Solutions</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading"
                        >
                            Turnkey AI Mini{' '}
                            <span className="text-nijaGreen">Data Centre Deployment</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-body"
                        >
                            End-to-end delivery of tiered AI mini data centres using enterprise NVIDIA L40S platforms—built for governance, security, and a modular scaling path.
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
                                    Request a Proposal
                                </Link>
                            </div>
                            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Schedule a Consultation
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ WHAT'S INCLUDED ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            What's Included in Turnkey
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {turnkeyIncludes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-nijaGreen/10 flex items-center justify-center group-hover:bg-nijaGreen transition-colors duration-150">
                                        <svg className="w-3.5 h-3.5 text-nijaGreen group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ TURNKEY PACKAGES ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaPurple/10 text-nijaPurple uppercase tracking-wide">
                            Packages
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Turnkey Packages
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Choose a baseline tier today—with built-in expansion triggers and a modular lock-in scaling path for Tier 3/4.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className={`group relative bg-white dark:bg-gray-900 border rounded-2xl p-8 transition-all duration-150 flex flex-col ${pkg.highlight
                                    ? 'border-nijaGreen shadow-xl shadow-nijaGreen/10 ring-1 ring-nijaGreen/20'
                                    : 'border-gray-200 dark:border-gray-800 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10'
                                    }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-6 px-4 py-1 bg-nijaGreen text-white text-xs font-bold rounded-full shadow-lg">
                                        Popular
                                    </div>
                                )}
                                {pkg.badge && (
                                    <div className="absolute -top-3 left-6 px-4 py-1 bg-nijaPurple text-white text-xs font-bold rounded-full shadow-lg">
                                        {pkg.badge}
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                    {pkg.tier}
                                </h3>
                                <span className="text-sm font-medium text-nijaGreen mb-5 block">
                                    {pkg.label}
                                </span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                                    {pkg.specs}
                                </p>
                                <Link
                                    to="/contact"
                                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm ${pkg.highlight
                                        ? 'bg-nijaGreen text-white shadow-lg shadow-nijaGreen/30 hover:bg-green-500 hover:shadow-nijaGreen/50'
                                        : 'border border-nijaGreen/20 bg-nijaGreen/5 text-nijaGreen hover:bg-nijaGreen hover:text-white hover:border-transparent'
                                        }`}
                                >
                                    Request a Proposal
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ REFERENCE ARCHITECTURE ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Turnkey Reference Architecture
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            A standardised blueprint ensures predictable delivery across compute, networking/security, software orchestration, governance controls, and operational readiness.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {archLayers.map((layer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple hover:shadow-xl hover:shadow-nijaPurple/10 transition-all duration-150"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-nijaPurple/10 flex items-center justify-center group-hover:bg-nijaPurple transition-colors duration-150">
                                        <span className="text-sm font-bold text-nijaPurple group-hover:text-white transition-colors duration-150">
                                            L{idx + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-150">
                                            {layer.label}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {layer.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ PROCUREMENT & MOQ ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] rounded-2xl p-10 md:p-14 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-nijaPurple/10 rounded-full blur-3xl -mr-36 -mt-36" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4 font-heading">
                                Procurement Planning (Phased Rollout)
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                We support phased procurement planning aligned to university onboarding schedules to help lock supply, manage lead times, and maintain consistent platform standardisation.
                            </p>
                            <p className="text-gray-400 text-sm mb-6">
                                Share your rollout pipeline and target institutions to structure the phased procurement plan.
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

            {/* ═══════════════════════ IMPLEMENTATION PLAN ═══════════════════════ */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Execution
                        </span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Implementation Plan
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nijaGreen via-nijaGreen/50 to-nijaGreen/10 hidden md:block" />

                        <div className="space-y-4">
                            {implSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                                    whileHover={{ x: 6, transition: { duration: 0.15 } }}
                                    className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 md:ml-14 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-150"
                                >
                                    {/* Step number indicator */}
                                    <div className="absolute -left-[3.25rem] top-5 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-nijaGreen flex items-center justify-center z-10 hidden md:flex">
                                        <span className="text-xs font-bold text-nijaGreen">{idx + 1}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="md:hidden flex-shrink-0 w-6 h-6 rounded-full bg-nijaGreen/10 flex items-center justify-center">
                                            <span className="text-xs font-bold text-nijaGreen">{idx + 1}</span>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                            {step}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ OUTCOMES ═══════════════════════ */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-heading">
                            Turnkey Outcomes
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-nijaGreen mt-2" />
                                    <p className="text-gray-900 dark:text-white font-medium leading-relaxed group-hover:text-nijaGreen transition-colors duration-150">
                                        {outcome}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════ PARTNER NOTE (TRON) ═══════════════════════ */}
            <section className="py-16 relative z-10 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
                    >
                        <TronLogo size="md" />
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-heading">
                                Technology Partner
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                Nija partners with Tron (Taiwan) to strengthen enterprise AI infrastructure sourcing and support future-ready energy integrations including batteries and BESS for reliable power planning at scale.
                            </p>
                        </div>
                    </motion.div>
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
                            Request a Proposal Tailored to Your Campus Workloads
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto font-body text-lg">
                            Share your workload profile, expected users, and rollout timelines to receive a turnkey proposal and phased procurement plan.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-150"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                                />
                                <Link to="/contact" className="relative z-10 inline-block bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Request a Proposal
                                </Link>
                            </div>
                            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Schedule a Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
