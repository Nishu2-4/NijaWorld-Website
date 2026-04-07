import { motion } from 'framer-motion';

export function AnimatedPageBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-50 bg-gray-50 dark:bg-[#0B0F14] overflow-hidden pointer-events-none">
            {/* Active Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[inherit] opacity-30" // Moving layer
                />
            </div>

            {/* Vibrant Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 10, // Faster
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-nijaPurple/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 12, // Faster
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-nijaGreen/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, 50, -50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Noise Texture for Premium Feel */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        </div>
    );
}
