import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Coins,
    Network,
    ShieldCheck,
    Award,
    TrendingUp,
    Wallet,
    ArrowRight
} from 'lucide-react';

export function Solutions() {
    const solutions = [
        {
            title: 'Tokenisation',
            description: 'Launch compliant tokenised assets and workflows.',
            bullets: ['Governance controls', 'Issuance & lifecycle', 'Reporting & auditability'],
            icon: Coins,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore Tokenisation',
            link: '/solutions/tokenisation',
            delay: 0
        },
        {
            title: 'Supply Chain Solution',
            description: 'Improve visibility and reduce disputes with end-to-end traceability.',
            bullets: ['Provenance ledger', 'Event tracking', 'Partner reconciliation'],
            icon: Network,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore Supply Chain',
            link: '/solutions/supply-chain',
            delay: 0.1
        },
        {
            title: 'Identity Management',
            description: 'Secure identity and access with verifiable credentials.',
            bullets: ['KYC/KYB-ready', 'Role-based control', 'Fraud reduction'],
            icon: ShieldCheck,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore Identity',
            link: '/solutions/identity',
            delay: 0.2
        },
        {
            title: 'Loyalty Solution',
            description: 'Build modern loyalty programs with transparent rewards and engagement.',
            bullets: ['Token-based rewards', 'Personalisation', 'Analytics & controls'],
            icon: Award,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore Loyalty',
            link: '/solutions/loyalty',
            delay: 0.3
        },
        {
            title: 'Digital Assets Advisory',
            description: 'Institutional-grade advisory and strategy for digital asset exposure.',
            bullets: ['Risk framework', 'Governance', 'Reporting-ready outputs'],
            icon: TrendingUp,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore Advisory',
            link: '/solutions/advisory',
            delay: 0.4
        },
        {
            title: 'RWA Liquidity',
            description: 'Enable compliant liquidity infrastructure for tokenised real-world assets.',
            bullets: ['Issuance workflows', 'Eligibility controls', 'Settlement mechanics'],
            icon: Wallet,
            color: 'text-nijaGreen',
            baseColor: 'nijaGreen',
            bulletColor: 'bg-nijaGreen',
            cta: 'Explore RWA Liquidity',
            link: '/solutions/rwa-liquidity',
            delay: 0.5
        }
    ];

    return (
        <section className="pt-4 pb-16 md:pt-6 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-baseDark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-block mb-6 px-8 py-3 text-2xl rounded-full bg-nijaGreen/10 text-nijaGreen font-bold tracking-wide border border-nijaGreen/20">
                        Industry Solutions
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Solutions designed for enterprise deployment
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Practical implementations that integrate with existing systems and governance models.
                    </p>
                </motion.div>

                {/* Solutions Grid - Flexbox for 3-then-2 centering */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: solution.delay, duration: 0.5 }
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                scale: 1.01,
                                transition: { type: 'spring', stiffness: 300, damping: 20 }
                            }}
                            className={`group relative flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[380px] p-8 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-nijaGreen/20 hover:border-nijaGreen dark:hover:border-nijaGreen hover:border-2 card-glow-green`}
                        >
                            {/* Icon & Title Row */}
                            < div className="flex items-center gap-4 mb-6" >
                                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 w-fit flex-shrink-0 ${solution.color} transition-colors duration-300 group-hover:bg-${solution.baseColor} group-hover:text-white`}>
                                    <solution.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-${solution.baseColor}`}>
                                    {solution.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed min-h-[50px]">
                                {solution.description}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2 mb-8 flex-grow">
                                {solution.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                                        <div className={`w-2 h-2 rounded-full ${solution.bulletColor}`} />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button - Matching Pillars Style */}
                            <Link
                                to={solution.link}
                                className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-${solution.baseColor}/10 hover:bg-${solution.baseColor} text-${solution.baseColor} hover:text-white border border-${solution.baseColor}/30 hover:shadow-lg hover:shadow-${solution.baseColor}/50`}
                            >
                                {solution.cta} <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link to="/solutions" className="px-8 py-3 rounded-full border border-nijaGreen text-nijaGreen font-medium hover:bg-nijaGreen hover:text-white hover:shadow-lg hover:shadow-nijaGreen/30 transition-all duration-300">
                        View All Solutions →
                    </Link>
                </motion.div>
            </div >
        </section >
    );
}

export default Solutions;

// Safelist for dynamic classes:
// group-hover:bg-nijaGreen
// group-hover:text-nijaGreen
