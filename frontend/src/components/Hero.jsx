import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveDotGrid } from './InteractiveDotGrid';
import { TechVisualization } from './TechVisualization';

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 text-gray-900 dark:text-white overflow-hidden">
            {/* Interactive Dot Grid Background */}
            <InteractiveDotGrid />

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 px-4 sm:px-6 items-center pointer-events-none">

                {/* Left Content */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                    >
                        Modernise operations with{' '}
                        <span className="text-nijaGreen">AI automation</span> and blockchain-grade trust.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-xl leading-relaxed"
                    >
                        Nija helps organisations deploy secure, production-grade solutions that improve traceability,
                        reduce operational friction, and enable compliant digital transformation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex gap-4 flex-wrap pointer-events-auto"
                    >
                        <Link to="/join">
                            <button className="bg-nijaGreen hover:bg-green-500 transition text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 hover:scale-105 transform">
                                Join →
                            </button>
                        </Link>
                        <Link to="/case-studies">
                            <button className="border border-gray-300 dark:border-white/20 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900/10 dark:hover:bg-white/10 transition px-6 py-3 rounded-lg backdrop-blur-sm">
                                View Case Studies
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Tech Visualization - Hidden on mobile */}
                <div className="hidden md:block">
                    <TechVisualization />
                </div>
            </div>
        </section>
    );
}

export default Hero;
