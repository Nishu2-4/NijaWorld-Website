import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Banknote, Building2, ArrowRight } from 'lucide-react';

export function CaseStudies() {
    const studies = [
        {
            title: 'Liquidity Enablement for Tokenised Private Credit Notes',
            // category removed from display
            industry: 'Financial Services / Private Credit',
            kpiHighlight: 'Reduced settlement cycle by 30–55%',
            tags: ['RWA Liquidity', 'Tokenisation', 'Governance', 'Reporting'],
            icon: Banknote,
            link: '/case-studies/rwa-liquidity-private-credit-notes'
        },
        {
            title: 'Controlled Liquidity for Tokenised Real Estate Cashflow Entitlements',
            // category removed from display
            industry: 'Real Estate / Investment Operations',
            kpiHighlight: 'Reduced admin overhead by 20–40%',
            tags: ['RWA Liquidity', 'Governance', 'Investor Controls', 'Reporting'],
            icon: Building2,
            link: '/case-studies/rwa-liquidity-real-estate-cashflows'
        }
    ];

    return (
        <section className="pt-8 pb-28 bg-gray-50 dark:bg-baseDark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-16"
                >
                    <span className="inline-block mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-lg md:text-2xl rounded-full bg-nijaGreen/10 text-nijaGreen font-bold tracking-wide border border-nijaGreen/20">
                        Proven Results
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Proven delivery in real environments
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={{
                                y: -5,
                                scale: 1.01,
                                transition: { type: 'spring', stiffness: 300, damping: 20 }
                            }}
                            className="group relative flex flex-col bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-nijaGreen/20 hover:border-nijaGreen dark:hover:border-nijaGreen hover:border-2 card-glow-green"
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
                                Read Case Study <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Browse Case Studies CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-nijaGreen text-nijaGreen font-medium hover:bg-nijaGreen hover:text-white transition-all shadow-lg shadow-nijaGreen/10 hover:shadow-nijaGreen/30"
                    >
                        Browse Case Studies →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default CaseStudies;
