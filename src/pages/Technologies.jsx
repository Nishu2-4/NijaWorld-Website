import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import aiWorkflowImg from '../assets/images/ai_workflow_vibrant.png';
import blockchainImg from '../assets/images/blockchain_ledger_structure.png';
import cyberImg from '../assets/images/cybersecurity_shield_layer.png';

export default function Technologies() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='min-h-screen relative'
        >
            <AnimatedPageBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={aiWorkflowImg}
                        alt="Technologies Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#141B28]/90 to-[#0B0F14]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading text-white"
                        >
                            Technologies built for enterprise-scale trust
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed font-body"
                        >
                            Nija combines practical AI with blockchain-grade infrastructure to deliver secure,
                            production-ready systems. Our technology stack is designed for enterprises that require
                            reliability, transparency, and scale.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Technologies Pillars Grid */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Core Technology Pillars
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                            Our platform is built on three foundational pillars that drive enterprise transformation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'AI (Intelligence & Automation)',
                                headline: 'AI to digitise, automate, and operationalise decision-making',
                                capabilities: [
                                    'Digitisation — Convert documents and legacy workflows into structured, usable data',
                                    'Automation — Policy-driven workflow automation with human oversight',
                                    'Infrastructure Intelligence — Reliability, observability, and operational optimisation'
                                ],
                                link: '/technologies/ai',
                                cta: 'Explore AI Technologies',
                                image: aiWorkflowImg
                            },
                            {
                                title: 'Blockchain (Trust & Verifiable Systems)',
                                headline: 'Blockchain for verifiable records and programmable settlement',
                                capabilities: [
                                    'Tokenisation — Asset/entitlement lifecycle with governance controls',
                                    'Audit Trail & Provenance — Tamper-evident records across partners',
                                    'Smart Contracts & Settlement — Automated, verifiable business logic',
                                    'Identity & Access Primitives — Credential verification and permissioning foundations'
                                ],
                                link: '/technologies/blockchain',
                                cta: 'Explore Blockchain',
                                image: blockchainImg
                            },
                            {
                                title: 'Cybersecurity (Risk & Governance)',
                                headline: 'Security-first controls across identity, data, and operations',
                                capabilities: [
                                    'Threat Detection & Triage — Correlation and prioritisation of suspicious activity',
                                    'Identity Security — Access governance, anomaly detection, and rapid revocation',
                                    'Policy & Compliance Controls — Change management, audit evidence, reporting readiness',
                                    'Incident Response Enablement — Playbooks, escalation workflows, post-incident review outputs'
                                ],
                                link: '/technologies/cybersecurity',
                                cta: 'Explore Cybersecurity',
                                image: cyberImg
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className={`group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-2xl transition-all duration-200 flex flex-col h-full relative overflow-hidden ${idx === 1
                                        ? 'hover:border-b-nijaPurple dark:hover:border-b-nijaPurple hover:shadow-nijaPurple/10'
                                        : 'hover:border-b-nijaGreen dark:hover:border-b-nijaGreen hover:shadow-nijaGreen/10'
                                    }`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100 ${idx === 1 ? 'bg-nijaPurple/5' : 'bg-nijaGreen/5'
                                    }`} />

                                {pillar.image && (
                                    <div className="mb-6 -mx-8 -mt-8 h-48 relative overflow-hidden rounded-t-xl group-hover:h-52 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent z-10 opacity-80" />
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <h3 className={`text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10 transition-colors ${idx === 1 ? 'group-hover:text-nijaPurple' : 'group-hover:text-nijaGreen'
                                    }`}>
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium relative z-10">
                                    {pillar.headline}
                                </p>

                                <div className="flex-grow mb-8 relative z-10">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-4">
                                        Capabilities
                                    </h4>
                                    <ul className="space-y-3">
                                        {pillar.capabilities.map((cap, cIdx) => (
                                            <li key={cIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${idx === 1 ? 'bg-nijaPurple' : 'bg-nijaGreen'
                                                    }`} />
                                                <span>{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => pillar.link && navigate(pillar.link)}
                                    className={`w-full py-3 rounded-lg border font-medium transition-all duration-200 relative z-10 flex items-center justify-center gap-2 group/btn hover:scale-[1.02] hover:text-white hover:border-transparent ${idx === 1
                                        ? 'border-nijaPurple/20 bg-nijaPurple/5 text-nijaPurple shadow-lg shadow-nijaPurple/5 hover:shadow-nijaPurple/30 hover:bg-nijaPurple'
                                        : 'border-nijaGreen/20 bg-nijaGreen/5 text-nijaGreen shadow-lg shadow-nijaGreen/5 hover:shadow-nijaGreen/30 hover:bg-nijaGreen'
                                        }`}
                                >
                                    <span className="relative">
                                        {pillar.cta}
                                    </span>
                                    <svg
                                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">
                            Explore how Nija’s technology fits your enterprise
                        </h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="relative group">
                                <motion.div
                                    className="absolute inset-0 bg-nijaGreen rounded-lg blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <button className="relative z-10 bg-nijaGreen hover:bg-green-500 text-white px-8 py-4 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                    Request a Demo
                                </button>
                            </div>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition hover:bg-white/10">
                                Talk to a Solutions Architect
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
