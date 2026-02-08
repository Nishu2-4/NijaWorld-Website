import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudyRealEstate() {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-baseDark'>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/real-estate-hero.jpg')",
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-gray-900/70"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Client Context */}
                        <p className="text-sm text-gray-300 mb-4 uppercase tracking-wide">
                            Real estate investment operator | Multi-asset portfolio
                        </p>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Controlled Liquidity for Tokenised Real Estate Cashflow Entitlements
                        </h1>

                        {/* Outcome Summary */}
                        <p className="text-xl text-gray-200 mb-8 font-medium border-l-4 border-nijaPurple pl-4">
                            Standardised issuance-to-liquidity workflows with transfer restrictions, governance approvals, and investor reporting outputs.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-nijaPurple hover:bg-purple-600 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50 transform hover:scale-105">
                                Request a Demo
                            </button>
                            <button className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 transform hover:scale-105">
                                Schedule a Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Executive Summary */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-800"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Executive Summary</h2>

                        {/* Challenge */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-nijaPurple mb-3">Challenge</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Liquidity for fractional exposure required strict controls: investor eligibility, transfer restrictions, and clear reporting of rights and distributions—without increasing governance or operational risk.
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-nijaPurple mb-3">Solution</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Nija World implemented a structured liquidity framework combining policy controls, approval workflows, and reporting exports across the asset lifecycle.
                            </p>
                        </div>

                        {/* Impact */}
                        <div>
                            <h3 className="text-lg font-semibold text-nijaPurple mb-4">Impact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Admin and reconciliation overhead reduced by <strong className="text-nijaPurple">20–40%</strong>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Investor reporting turnaround improved by <strong className="text-nijaPurple">25–45%</strong>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Transfer exceptions reduced by <strong className="text-nijaPurple">15–30%</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Business Challenge */}
            <section className="py-16 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Business Challenge</h2>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                            The operator needed a consistent mechanism to manage investor entitlements and controlled transfers while maintaining internal governance. Manual processes led to slow reporting cycles, inconsistent approvals, and uncertainty during transfer requests.
                        </p>

                        {/* Key Constraints */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Constraints</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must enforce eligibility and transfer restrictions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must provide clear investor statements and distribution reporting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must maintain controlled operating model with audit trails</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must support staged rollout across multiple assets</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Solution Overview</h2>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            Nija World delivered a governed liquidity approach through the following structured steps:
                        </p>

                        {/* Step-based Layout with Timeline */}
                        <div className="space-y-6 relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-nijaPurple/20">
                                <div
                                    className="w-full bg-nijaPurple transition-all duration-500 ease-in-out"
                                    style={{
                                        height: activeStep ? `${((activeStep - 1) / (4 - 1)) * 100}%` : '0%'
                                    }}
                                />
                            </div>

                            {[
                                {
                                    number: 1,
                                    title: 'Rights & Entitlement Model Definition',
                                    description: 'Define investor rights, cashflow entitlements, distribution logic, and asset-level ownership representations.'
                                },
                                {
                                    number: 2,
                                    title: 'Issuance & Lifecycle Policies',
                                    description: 'Establish issuance rules, lifecycle events, and operating policies governing transfers, distributions, and state changes.'
                                },
                                {
                                    number: 3,
                                    title: 'Transfer Restrictions & Exception Workflows',
                                    description: 'Implement eligibility checks, transfer controls, and structured exception workflows with approval and audit trails.'
                                },
                                {
                                    number: 4,
                                    title: 'Reporting & Governance Outputs',
                                    description: 'Deliver reporting outputs including investor statements, lifecycle event records, and audit-ready compliance evidence.'
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex items-start gap-4 relative z-10 group transition-all duration-200 p-3 -ml-3 rounded-xl cursor-pointer ${activeStep === step.number ? 'bg-nijaPurple/10' : 'hover:bg-nijaPurple/5'
                                        }`}
                                    onMouseEnter={() => setActiveStep(step.number)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200 ${activeStep !== null && activeStep >= step.number
                                        ? 'bg-nijaPurple border-nijaPurple text-white'
                                        : 'bg-white dark:bg-gray-900 border-nijaPurple text-nijaPurple group-hover:bg-nijaPurple group-hover:text-white'
                                        }`}>
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg leading-none mb-2 transition-colors duration-200 ${activeStep === step.number ? 'text-nijaPurple' : 'text-gray-900 dark:text-white group-hover:text-nijaPurple'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture Overview */}
            <section className="py-16 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Architecture Overview</h2>

                        {/* Timeline Layout with Alternating Colors */}
                        <div className="space-y-6 relative">
                            {/* Vertical connecting line - gradient from purple to green */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-nijaPurple/20 via-nijaGreen/20 to-nijaPurple/20"></div>

                            {[
                                { step: 1, text: 'Asset data + valuation schedule → rights definition', color: 'nijaPurple' },
                                { step: 2, text: 'Issuance → controlled transfer flows → settlement confirmation', color: 'nijaGreen' },
                                { step: 3, text: 'Reporting layer → investor statements + compliance evidence', color: 'nijaPurple' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex items-start gap-4 relative z-10 group transition-all duration-200 p-3 -ml-3 rounded-xl cursor-pointer hover:bg-${item.color}/5`}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200 bg-white dark:bg-gray-900 border-${item.color} text-${item.color} group-hover:bg-${item.color} group-hover:text-white`}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <p className={`text-gray-700 dark:text-gray-300 text-lg leading-relaxed group-hover:text-${item.color} transition-colors duration-200`}>
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Implementation Approach */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Implementation Approach</h2>

                        <div className="space-y-6 mb-8">
                            {[
                                'Define entitlements, rights, and distribution schedules',
                                'Establish eligibility, transfer rules, and lockups',
                                'Implement liquidity workflows (RFQ/OTC or controlled venue rails)',
                                'Reporting templates and reconciliation model',
                                'Governance sign-off and staged go-live'
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-nijaPurple text-white rounded-full flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg pt-0.5">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="bg-nijaGreen/10 dark:bg-nijaGreen/20 border-l-4 border-nijaGreen rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong className="text-nijaGreen">5–9 weeks</strong> pilot; <strong className="text-nijaGreen">10–14 weeks</strong> scale
                                <span className="block text-sm mt-1 text-gray-600 dark:text-gray-400">(based on number of assets and investor groups)</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Results & KPIs */}
            <section className="py-16 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Results & KPIs</h2>

                        {/* Operational */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-nijaPurple mb-4">Operational</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Metric</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Admin / reconciliation overhead</td>
                                            <td className="py-4 px-4 font-bold text-nijaPurple">↓ 20–40%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Reporting turnaround</td>
                                            <td className="py-4 px-4 font-bold text-nijaPurple">↓ 25–45%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Transfer exception volume</td>
                                            <td className="py-4 px-4 font-bold text-nijaPurple">↓ 15–30%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Governance */}
                        <div>
                            <h3 className="text-xl font-semibold text-nijaGreen mb-4">Governance</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <span className="text-nijaGreen text-xl">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Policy change traceability improved through approvals and audit logs
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <span className="text-nijaGreen text-xl">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Evidence collection effort: <strong className="text-nijaGreen">↓ 20–35%</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What's Next */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-nijaPurple/5 to-nijaGreen/5 dark:from-nijaPurple/10 dark:to-nijaGreen/10 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What's Next</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-nijaPurple text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Expand to partner distribution channels with controlled onboarding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nijaPurple text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Add risk monitoring for concentration and redemption pressure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nijaPurple text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Introduce quarterly governance reviews and attestation reports</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Need governed liquidity for tokenised real estate exposure?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-nijaPurple hover:bg-purple-600 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50 transform hover:scale-105">
                                Schedule a Consultation
                            </button>
                            <button className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 transform hover:scale-105">
                                Talk to a Solutions Architect
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
