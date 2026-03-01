import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Video, Network, ShieldCheck, Award } from 'lucide-react';

export function Insights() {
    // Latest 3 Insights (from Insights page, sorted by publish date)
    const insights = [
        {
            slug: 'traceability-and-provenance-for-modern-supply-chains',
            title: 'Traceability and Provenance in Modern Supply Chains',
            category: 'Supply Chain',
            readTime: '6–8 min',
            date: '2026-01-20',
            icon: Network
        },
        {
            slug: 'verifiable-identity-for-partner-ecosystems',
            title: 'Verifiable Identity for Partner Ecosystems',
            category: 'Identity',
            readTime: '6–8 min',
            date: '2026-01-15',
            icon: ShieldCheck
        },
        {
            slug: 'tokenised-loyalty-programs-with-governance',
            title: 'Tokenised Loyalty Programs: Engagement Without Losing Governance',
            category: 'Loyalty',
            readTime: '5–7 min',
            date: '2026-01-10',
            icon: Award
        }
    ];

    // Dummy Media items (events/press/webinars)
    const mediaItems = [
        {
            type: 'Webinar',
            title: 'Enterprise Blockchain: From Pilot to Production',
            description: 'Join our experts as they discuss real-world implementation strategies, governance frameworks, and lessons learned from deploying blockchain solutions at scale.',
            date: 'Feb 15, 2026',
            icon: Video
        },
        {
            type: 'Press',
            title: 'Nija Featured in FinTech Innovation Report 2026',
            description: 'Recognised for pioneering enterprise-grade blockchain and AI solutions that bridge the gap between innovation and institutional requirements.',
            date: 'Jan 28, 2026',
            icon: Newspaper
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
                        Latest Insights & Media
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Research and updates
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Thought leadership on AI, blockchain, and enterprise transformation
                    </p>
                </motion.div>

                {/* Two Column Card Layout - Equal Height */}
                <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 items-stretch">

                    {/* Insights Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col hover:border-nijaGreen dark:hover:border-nijaGreen hover:border-2 hover:shadow-2xl hover:shadow-nijaGreen/20 transition-all duration-300 card-glow-green"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-nijaGreen"></span>
                            Latest Insights
                        </h3>
                        <div className="space-y-4 flex-grow flex flex-col">
                            {insights.map((insight, idx) => (
                                <Link
                                    key={insight.slug}
                                    to={`/insights/${insight.slug}`}
                                    className="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl hover:border-nijaGreen/50 hover:bg-nijaGreen/5 transition-all duration-200 flex-1"
                                >
                                    <div className="p-2 rounded-lg bg-nijaGreen/10 text-nijaGreen flex-shrink-0">
                                        <insight.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-nijaGreen/10 text-nijaGreen">
                                                {insight.category}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-500">
                                                {insight.readTime}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors leading-snug text-sm">
                                            {insight.title}
                                        </h4>
                                    </div>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-nijaGreen transition-colors flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Media Card - Green Theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col hover:border-nijaGreen dark:hover:border-nijaGreen hover:border-2 hover:shadow-2xl hover:shadow-nijaGreen/20 transition-all duration-300 card-glow-green"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-nijaGreen"></span>
                            Media & Events
                        </h3>
                        <div className="space-y-4 flex-grow flex flex-col">
                            {mediaItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-start gap-4 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl hover:border-nijaGreen/50 hover:bg-nijaGreen/5 transition-all duration-200 cursor-pointer flex-1"
                                >
                                    <div className="p-2 rounded-lg bg-nijaGreen/10 text-nijaGreen flex-shrink-0">
                                        <item.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-nijaGreen/10 text-nijaGreen">
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-500">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors leading-snug text-sm mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-nijaGreen transition-colors flex-shrink-0 mt-1" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        to="/insights"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-nijaGreen text-nijaGreen font-medium hover:bg-nijaGreen hover:text-white transition-all shadow-lg shadow-nijaGreen/10 hover:shadow-nijaGreen/30"
                    >
                        View Insights →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Insights;
