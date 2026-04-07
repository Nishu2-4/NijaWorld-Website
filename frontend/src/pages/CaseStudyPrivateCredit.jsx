import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudyPrivateCredit() {
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
                        backgroundImage: "url('/images/private-credit-hero.png')",
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                >
                    {/* Lighter overlay for better image visibility */}
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
                            Credit originator / structured product issuer | Institutional distribution
                        </p>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Liquidity Enablement for Tokenised Private Credit Notes
                        </h1>

                        {/* Outcome Summary */}
                        <p className="text-xl text-gray-200 mb-8 font-medium border-l-4 border-nijaGreen pl-4">
                            Enabled controlled secondary liquidity workflows and governance-ready reporting for tokenised credit exposure.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 transform hover:scale-105">
                                Schedule a Consultation
                            </button>
                            <button className="bg-nijaPurple hover:bg-purple-600 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50 transform hover:scale-105">
                                Talk to a Solutions Architect
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
                            <h3 className="text-lg font-semibold text-nijaGreen mb-3">Challenge</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                The issuer needed a compliant path to liquidity for tokenised credit notes, with strict investor eligibility, settlement controls, and reporting outputs aligned to internal governance.
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-nijaGreen mb-3">Solution</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Nija World designed an end-to-end RWA liquidity model: issuance + transfer restrictions + RFQ/OTC settlement workflow + audit-ready reporting.
                            </p>
                        </div>

                        {/* Impact */}
                        <div>
                            <h3 className="text-lg font-semibold text-nijaGreen mb-4">Impact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Settlement cycle reduced by <strong className="text-nijaGreen">30–55%</strong> (process standardisation + workflow automation)
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Manual reconciliation reduced by <strong className="text-nijaGreen">25–45%</strong>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaGreen mt-1">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        Compliance evidence preparation effort reduced by <strong className="text-nijaGreen">20–40%</strong>
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
                            The client faced operational friction and governance risk when enabling transfers across eligible participants. Investor onboarding was inconsistent, transfer restrictions weren't systematically enforced, and post-trade reporting required significant manual effort across teams.
                        </p>

                        {/* Key Constraints */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Constraints</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must support eligibility gating and jurisdiction controls</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must map issuance and transfers to approval workflows</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must support audit-ready reporting and evidence trails</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-nijaPurple mt-1">●</span>
                                    <span className="text-gray-700 dark:text-gray-300">Must integrate with existing internal review and documentation processes</span>
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
                            Nija World implemented a governed RWA liquidity blueprint through the following structured steps:
                        </p>

                        {/* Step-based Layout with Timeline */}
                        <div className="space-y-6 relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-nijaGreen/20">
                                <div
                                    className="w-full bg-nijaGreen transition-all duration-500 ease-in-out"
                                    style={{
                                        height: activeStep ? `${((activeStep - 1) / (5 - 1)) * 100}%` : '0%'
                                    }}
                                />
                            </div>

                            {[
                                {
                                    number: 1,
                                    title: 'Token Lifecycle & Rights Definition',
                                    description: 'Define the full lifecycle of the token, including issuance, ownership rights, transfer conditions, and redemption logic.'
                                },
                                {
                                    number: 2,
                                    title: 'Eligibility Controls & Transfer Restrictions',
                                    description: 'Implement investor eligibility checks, jurisdiction controls, and rule-based transfer restrictions to enforce governance requirements.'
                                },
                                {
                                    number: 3,
                                    title: 'RFQ-Based Liquidity Workflow',
                                    description: 'Enable controlled secondary liquidity through RFQ / OTC workflows, ensuring policy validation prior to quote acceptance and settlement.'
                                },
                                {
                                    number: 4,
                                    title: 'Settlement Coordination & Exception Handling',
                                    description: 'Coordinate settlement states with structured exception handling for approvals, overrides, and failed transactions.'
                                },
                                {
                                    number: 5,
                                    title: 'Reporting & Internal Stakeholder Exports',
                                    description: 'Generate reporting outputs for internal stakeholders, including investor statements, compliance evidence, and audit-ready exports.'
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex items-start gap-4 relative z-10 group transition-all duration-200 p-3 -ml-3 rounded-xl cursor-pointer ${activeStep === step.number ? 'bg-nijaGreen/10' : 'hover:bg-nijaGreen/5'
                                        }`}
                                    onMouseEnter={() => setActiveStep(step.number)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200 ${activeStep !== null && activeStep >= step.number
                                        ? 'bg-nijaGreen border-nijaGreen text-white'
                                        : 'bg-white dark:bg-gray-900 border-nijaGreen text-nijaGreen group-hover:bg-nijaGreen group-hover:text-white'
                                        }`}>
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg leading-none mb-2 transition-colors duration-200 ${activeStep === step.number ? 'text-nijaGreen' : 'text-gray-900 dark:text-white group-hover:text-nijaGreen'
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
                            {/* Vertical connecting line - gradient from green to purple */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-nijaGreen/20 via-nijaPurple/20 to-nijaGreen/20"></div>

                            {[
                                { step: 1, text: 'Investor onboarding → eligibility gate → issuance', color: 'nijaGreen' },
                                { step: 2, text: 'RFQ requests → policy validation → quote acceptance', color: 'nijaPurple' },
                                { step: 3, text: 'Settlement workflow → confirmations → transfer finalisation', color: 'nijaGreen' },
                                { step: 4, text: 'Index/reporting layer → cap table reconciliation → audit exports', color: 'nijaPurple' }
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
                                'Objectives + liquidity constraints mapping',
                                'Token design (rights, transfer rules, redemption mechanics)',
                                'RFQ/OTC workflow implementation + exception handling',
                                'Governance reviews and stakeholder alignment',
                                'Reporting templates and monitoring setup',
                                'Pilot launch → staged expansion'
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-nijaGreen text-white rounded-full flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-gray-700 dark:text-gray-300 text-lg pt-0.5">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="bg-nijaPurple/10 dark:bg-nijaPurple/20 border-l-4 border-nijaPurple rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong className="text-nijaPurple">6–10 weeks</strong> for pilot; <strong className="text-nijaPurple">10–16 weeks</strong> for scaled rollout
                                <span className="block text-sm mt-1 text-gray-600 dark:text-gray-400">(depending on onboarding complexity)</span>
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
                            <h3 className="text-xl font-semibold text-nijaGreen mb-4">Operational</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Metric</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Before</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">After</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Settlement cycle time</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">T+3–T+7</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">T+1–T+3</td>
                                            <td className="py-4 px-4 font-bold text-nijaGreen">↓ 30–55%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Manual reconciliation effort</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">High</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Low</td>
                                            <td className="py-4 px-4 font-bold text-nijaGreen">↓ 25–45%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Exception turnaround</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Manual</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Automated</td>
                                            <td className="py-4 px-4 font-bold text-nijaGreen">↓ 20–40%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Risk & Compliance */}
                        <div>
                            <h3 className="text-xl font-semibold text-nijaPurple mb-4">Risk & Compliance</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Metric</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Before</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">After</th>
                                            <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Evidence preparation time</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Manual intensive</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Streamlined</td>
                                            <td className="py-4 px-4 font-bold text-nijaPurple">↓ 20–40%</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-800">
                                            <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Policy exception frequency</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Frequent</td>
                                            <td className="py-4 px-4 text-gray-600 dark:text-gray-400">Controlled</td>
                                            <td className="py-4 px-4 font-bold text-nijaPurple">↓ 15–30%</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                        className="bg-gradient-to-br from-nijaGreen/5 to-nijaPurple/5 dark:from-nijaGreen/10 dark:to-nijaPurple/10 rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What's Next</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-nijaGreen text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Expand eligible investor sets with staged onboarding rules</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nijaGreen text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Add redemption pressure monitoring and concentration controls</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nijaGreen text-xl mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300 text-lg">Introduce periodic access / eligibility attestation reviews</span>
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
                            Exploring liquidity for tokenised credit exposure?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 transform hover:scale-105">
                                Schedule a Consultation
                            </button>
                            <button className="bg-nijaPurple hover:bg-purple-600 text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-nijaPurple/30 hover:shadow-nijaPurple/50 transform hover:scale-105">
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
