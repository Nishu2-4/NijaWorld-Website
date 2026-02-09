import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Banknote, Building2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudies() {
    const caseStudies = [
        {
            id: 1,
            title: "Liquidity Enablement for Tokenised Private Credit Notes",
            industry: "Financial Services / Private Credit",
            kpiHighlight: "Reduced settlement cycle by 30–55%",
            tags: ["RWA Liquidity", "Tokenisation", "Governance", "Reporting"],
            icon: Banknote,
            link: "/case-studies/rwa-liquidity-private-credit-notes"
        },
        {
            id: 2,
            title: "Controlled Liquidity for Tokenised Real Estate Cashflow Entitlements",
            industry: "Real Estate / Investment Operations",
            kpiHighlight: "Reduced admin overhead by 20–40%",
            tags: ["RWA Liquidity", "Governance", "Investor Controls", "Reporting"],
            icon: Building2,
            link: "/case-studies/rwa-liquidity-real-estate-cashflows"
        }
    ];

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/case-studies-hero.png')" }}
                >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-900/90"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Proven delivery in real environments
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Featured Case Studies Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.01,
                                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                                }}
                                className="group relative flex flex-col bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-[box-shadow,border-color] duration-300 hover:shadow-2xl hover:shadow-nijaGreen/20 hover:border-nijaGreen/50"
                            >
                                {/* Fixed height wrapper for Header + Tags to align separator line */}
                                <div className="flex flex-col min-h-[120px]">
                                    {/* Header: Icon + Title */}
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-nijaGreen flex-shrink-0 mt-1">
                                            <study.icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                                            {study.title}
                                        </h3>
                                    </div>

                                    {/* Tags starting from below icon (left aligned) */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {study.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-2 py-0.5 text-[10px] rounded-full bg-nijaGreen/10 text-nijaGreen font-medium uppercase tracking-wide"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-200 dark:bg-white/10 mb-5"></div>

                                {/* Details in bullet points */}
                                <ul className="space-y-3 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="font-medium text-gray-900 dark:text-gray-300">Industry:</span> {study.industry}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nijaGreen flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="font-medium text-gray-900 dark:text-gray-300">KPI Highlight:</span> {study.kpiHighlight}
                                        </span>
                                    </li>
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    to={study.link}
                                    className="w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-nijaGreen/10 hover:bg-nijaGreen text-nijaGreen hover:text-white border border-nijaGreen/30 hover:shadow-lg hover:shadow-nijaGreen/50"
                                >
                                    Read Case Study <span>→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <button className="border-2 border-nijaGreen text-nijaGreen px-8 py-3 rounded-full font-medium transition-all hover:bg-nijaGreen hover:text-white hover:shadow-lg hover:shadow-nijaGreen/50">
                            Browse All Case Studies
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
