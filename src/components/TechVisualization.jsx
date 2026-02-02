import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TechVisualization() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel images and labels
    const slides = [
        {
            id: 0,
            image: new URL('../assets/blockchain_pranav_generated.jpeg', import.meta.url).href,
            label: 'Blockchain',
            color: 'from-purple-500 to-blue-500'
        },
        {
            id: 1,
            image: new URL('../assets/ai_tech.png', import.meta.url).href,
            label: 'Artificial Intelligence',
            color: 'from-purple-500 to-green-500'
        },
        {
            id: 2,
            image: new URL('../assets/cybersecurity_tech.png', import.meta.url).href,
            label: 'Cybersecurity',
            color: 'from-cyan-500 to-purple-500'
        }
    ];

    // Auto-rotate carousel every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative pointer-events-auto">
            {/* Carousel Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].label}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Carousel Indicators - Below Container */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default TechVisualization;
