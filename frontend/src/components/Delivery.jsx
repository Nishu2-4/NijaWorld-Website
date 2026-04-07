import { motion } from 'framer-motion';
import { useState } from 'react';

export function Delivery() {
    const phases = [
        {
            id: 1,
            title: 'Discovery',
            desc: 'Requirements, risk assessment, target outcomes',
            image: '/images/delivery/discovery.png'
        },
        {
            id: 2,
            title: 'Design',
            desc: 'Architecture, security model, integration plan',
            image: '/images/delivery/design.png'
        },
        {
            id: 3,
            title: 'Build & Deploy',
            desc: 'Production-grade implementation with testing',
            image: '/images/delivery/build.png'
        },
        {
            id: 4,
            title: 'Operate',
            desc: 'Monitoring, updates, and continuous optimisation',
            image: '/images/delivery/operate.png'
        },
    ];

    const defaultImage = '/images/delivery/default.png';
    const [activeImage, setActiveImage] = useState(defaultImage);
    const [activePhase, setActivePhase] = useState(null);

    return (
        <section className="pt-4 pb-16 md:pt-8 md:pb-28 bg-gray-50 dark:bg-baseDark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-12">

                    {/* Left: Operating Model with Numbered Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-lg md:text-2xl rounded-full bg-nijaPurple/10 text-nijaPurple font-bold tracking-wide border border-nijaPurple/20">
                            How We Deliver
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                            Delivery model built for reliability and governance
                        </h2>

                        {/* Numbered Timeline */}
                        <div className="space-y-6 relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-nijaPurple/20">
                                <div
                                    className="w-full bg-nijaPurple transition-all duration-500 ease-in-out"
                                    style={{
                                        height: activePhase ? `${((activePhase - 1) / (phases.length - 1)) * 100}%` : '0%'
                                    }}
                                />
                            </div>

                            {phases.map((phase, idx) => (
                                <motion.div
                                    key={phase.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex items-start gap-4 relative z-10 cursor-pointer group transition-all duration-200 p-3 -ml-3 rounded-xl ${activePhase === phase.id
                                        ? 'bg-nijaPurple/10'
                                        : 'hover:bg-nijaPurple/5'
                                        }`}
                                    onMouseEnter={() => {
                                        setActiveImage(phase.image);
                                        setActivePhase(phase.id);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveImage(defaultImage);
                                        setActivePhase(null);
                                    }}
                                >
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-200 ${activePhase !== null && activePhase >= phase.id
                                        ? 'bg-nijaPurple border-nijaPurple text-white'
                                        : 'bg-white dark:bg-baseDark border-nijaPurple text-nijaPurple group-hover:bg-nijaPurple group-hover:text-white'
                                        }`}>
                                        {phase.id}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-lg leading-none mb-1 transition-colors duration-200 ${activePhase === phase.id
                                            ? 'text-nijaPurple'
                                            : 'text-gray-900 dark:text-white group-hover:text-nijaPurple'
                                            }`}>
                                            {phase.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Interactive Image Display - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex relative flex-col items-center justify-center pt-28"
                    >
                        <motion.img
                            key={activeImage}
                            src={activeImage}
                            alt="Web3 Product Delivery Model"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-auto rounded-2xl object-cover aspect-[4/3] shadow-2xl"
                        />

                        {/* Image caption */}
                        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
                            {activePhase
                                ? `Phase ${activePhase}: ${phases.find(p => p.id === activePhase)?.title}`
                                : 'Web3 Product Delivery Model'
                            }
                        </p>
                    </motion.div>
                </div>

                {/* Centered CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <button className="px-8 py-3 rounded-full border border-nijaPurple text-nijaPurple font-medium hover:bg-nijaPurple hover:text-white transition-all shadow-lg shadow-nijaPurple/10 hover:shadow-nijaPurple/30">
                        Talk to a Solutions Architect →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default Delivery;
