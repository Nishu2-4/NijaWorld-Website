import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Activity } from 'lucide-react';

export function Security() {
    const features = [
        {
            title: 'Data Protection',
            description: 'Encryption in transit/at rest, secrets management, least privilege access.',
            icon: ShieldCheck
        },
        {
            title: 'Governance & Audit',
            description: 'Activity logs, change tracking, policy enforcement, and reporting readiness.',
            icon: FileText
        },
        {
            title: 'Operational Reliability',
            description: 'Monitoring, alerting, incident response playbooks, and uptime practices.',
            icon: Activity
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
                    <span className="inline-block mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-lg md:text-2xl rounded-full bg-nijaPurple/10 text-nijaPurple font-bold tracking-wide border border-nijaPurple/20">
                        Security & Compliance
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Security-first by design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We design for auditability, access control, and operational resilience from day one.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                                transition: { type: 'spring', stiffness: 300, damping: 20 }
                            }}
                            className="group bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-nijaPurple dark:hover:border-nijaPurple hover:border-2 hover:shadow-2xl hover:shadow-nijaPurple/20 transition-all duration-300 card-glow-purple"
                        >
                            {/* Icon */}
                            <div className="mb-5 p-3 rounded-xl bg-nijaPurple/10 w-fit text-nijaPurple group-hover:bg-nijaPurple group-hover:text-white transition-colors duration-300">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA - Matching previous style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-nijaPurple text-nijaPurple font-medium hover:bg-nijaPurple hover:text-white transition-all shadow-lg shadow-nijaPurple/10 hover:shadow-nijaPurple/30"
                    >
                        Request a Security Brief →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Security;
