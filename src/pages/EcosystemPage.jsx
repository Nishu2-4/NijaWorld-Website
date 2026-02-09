import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { BarChart3, Handshake, Layers, Wallet, Link2 } from 'lucide-react';

export default function EcosystemPage() {
    const offerings = [
        {
            id: 'davpro',
            title: 'DAVPro',
            subtitle: 'DIGITAL ASSETS VALUE PROJECTIONS',
            icon: null,
            color: 'text-nijaPurple',
            bgColor: 'bg-nijaPurple',
            backContent: 'Digital Assets Value Projections is a tool to assess the true value of the digital asset based on multiple parameters to protect the genuine investors in the Digital assets space and also to ensure the correct value realisation of assets by all the stake holders, including creators and investors.',
            isDavPro: true
        },
        {
            id: 'smac-g',
            title: 'SmaC-G',
            subtitle: 'SMART CONTRACT GENERATOR',
            icon: null,
            color: 'text-nijaGreen',
            bgColor: 'bg-nijaPurple',
            backContent: 'Smart Contract generator is a simple tool to generate Smart Contracts any business professional without the knowledge of Blockchain technology but only Business knowledge.',
            isSmacG: true
        },
        {
            id: 'tokeniz',
            title: 'TokeniZ',
            subtitle: 'TOKENIZATION FRAMEWORK',
            icon: null,
            color: 'text-nijaPurple',
            bgColor: 'bg-gradient-to-br from-blue-500 to-nijaPurple',
            backContent: 'Tokenisation framework to develop an actionable plan for businesses to go tokenise their business.',
            isTokeniZ: true
        },
        {
            id: 'nija-wallet',
            title: 'Nija Wallet',
            subtitle: 'SECURE DIGITAL WALLET',
            icon: null, // Custom logo will be used
            color: 'text-nijaGreen',
            bgColor: 'bg-gradient-to-br from-nijaGreen to-nijaPurple',
            backContent: 'N-Wallet is the Nija wallet that enables individuals to Store their digital assets Connect with exchanges Connect with DAVPro Connect with SmaC-G Connect with TokeniZ.',
            isCustomLogo: true
        },
        {
            id: 'nija-diia',
            title: 'NijaDiiA',
            subtitle: 'DIGITAL INVESTMENTS INTELLIGENT AGENT',
            icon: null,
            color: 'text-nijaPurple',
            bgColor: 'bg-gradient-to-br from-nijaPurple to-nijaGreen',
            backContent: 'An AI-driven trading intelligence system that lets users visually build strategies, leverage collaborative AI agents, analyze thousands of assets in real time, and integrate seamlessly across Web3, DeFi, and enterprise platforms.',
            isNijaDiiA: true
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='min-h-screen relative bg-white dark:bg-baseDark'
        >
            <AnimatedPageBackground />
            <Navbar />

            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-nijaGreen font-heading mb-2">
                        Our Ecosystems
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-body">
                        Web 3.0 Offerings
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.slice(0, 3).map((item, idx) => (
                        <FlipCard key={item.id} item={item} idx={idx} />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    {offerings.slice(3).map((item, idx) => (
                        <div key={item.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
                            <FlipCard item={item} idx={idx + 3} />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}

// Custom Nija Wallet Logo Component
function NijaWalletLogo({ className }) {
    return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="nijaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="nijaGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
            </defs>
            {/* Outer orbital ring - horizontal */}
            <ellipse cx="100" cy="100" rx="80" ry="35" fill="none" stroke="url(#nijaGradient1)" strokeWidth="12" strokeLinecap="round" />
            {/* Outer orbital ring - vertical tilted */}
            <ellipse cx="100" cy="100" rx="35" ry="80" fill="none" stroke="url(#nijaGradient2)" strokeWidth="12" strokeLinecap="round" transform="rotate(45 100 100)" />
            {/* Inner orbital ring */}
            <ellipse cx="100" cy="100" rx="35" ry="80" fill="none" stroke="url(#nijaGradient1)" strokeWidth="12" strokeLinecap="round" transform="rotate(-45 100 100)" />
            {/* Center circle with icon */}
            <circle cx="100" cy="100" r="20" fill="url(#nijaGradient2)" />
            <path d="M92 100 L98 106 L108 94" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Custom SmaC-G Logo Component
function SmaCGLogo() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Left Document Icon */}
                <svg viewBox="0 0 60 70" className="w-16 h-20" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="10" width="50" height="8" rx="2" fill="#8B5CF6" />
                    <rect x="0" y="22" width="50" height="8" rx="2" fill="#10B981" />
                    <rect x="5" y="34" width="50" height="8" rx="2" fill="#8B5CF6" />
                    <rect x="0" y="46" width="50" height="8" rx="2" fill="#10B981" />
                    <rect x="5" y="58" width="50" height="8" rx="2" fill="#8B5CF6" />
                </svg>

                {/* Center Title */}
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold font-heading tracking-wide">
                        <span className="text-nijaGreen">S</span>
                        <span className="text-nijaPurple">ma</span>
                        <span className="text-nijaGreen">C</span>
                        <span className="text-nijaPurple">-G</span>
                    </h3>
                </div>

                {/* Right Handshake with Circuit Icon */}
                <svg viewBox="0 0 80 80" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                    {/* Circuit lines */}
                    <line x1="60" y1="10" x2="60" y2="25" stroke="#8B5CF6" strokeWidth="2" />
                    <line x1="70" y1="20" x2="70" y2="35" stroke="#8B5CF6" strokeWidth="2" />
                    <line x1="50" y1="15" x2="50" y2="30" stroke="#8B5CF6" strokeWidth="2" />
                    <circle cx="60" cy="10" r="3" fill="#8B5CF6" />
                    <circle cx="70" cy="20" r="3" fill="#8B5CF6" />
                    <circle cx="50" cy="15" r="3" fill="#8B5CF6" />
                    {/* Handshake */}
                    <path d="M10 50 C15 40, 25 35, 40 40 L55 50 C60 55, 55 65, 45 60 L30 55 C20 52, 15 58, 10 50" fill="#8B5CF6" />
                    <path d="M70 50 C65 40, 55 35, 40 40 L25 50 C20 55, 25 65, 35 60 L50 55 C60 52, 65 58, 70 50" fill="#8B5CF6" opacity="0.7" />
                </svg>
            </div>

            {/* Subtitle */}
            <p className="text-nijaPurple text-sm font-semibold tracking-[0.3em] text-center">
                SMART CONTRACT<br />GENERATOR
            </p>
        </div>
    );
}

// Custom DAVPro Logo Component
function DAVProLogo() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-6 mb-6">
                {/* Left Bar Chart Icon */}
                <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
                    {/* Bars - ascending pattern */}
                    <rect x="5" y="50" width="12" height="25" rx="2" fill="#8B5CF6" />
                    <rect x="22" y="35" width="12" height="40" rx="2" fill="#10B981" />
                    <rect x="39" y="20" width="12" height="55" rx="2" fill="#8B5CF6" />
                    <rect x="56" y="5" width="12" height="70" rx="2" fill="#10B981" />
                </svg>

                {/* Center Title */}
                <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold font-heading tracking-wide">
                        <span className="text-nijaPurple">DAV</span>
                        <span className="text-nijaGreen">Pro</span>
                    </h3>
                </div>

                {/* Right Bar Chart Icon - mirrored */}
                <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
                    {/* Bars - descending pattern */}
                    <rect x="5" y="5" width="12" height="70" rx="2" fill="#10B981" />
                    <rect x="22" y="20" width="12" height="55" rx="2" fill="#8B5CF6" />
                    <rect x="39" y="35" width="12" height="40" rx="2" fill="#10B981" />
                    <rect x="56" y="50" width="12" height="25" rx="2" fill="#8B5CF6" />
                </svg>
            </div>

            {/* Subtitle */}
            <p className="text-nijaGreen text-sm font-semibold tracking-[0.3em] text-center">
                DIGITAL ASSETS<br />VALUE PROJECTIONS
            </p>
        </div>
    );
}

// Custom TokeniZ Logo Component
function TokeniZLogo() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Bird/Phoenix Logo */}
                <svg viewBox="0 0 120 100" className="w-28 h-24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="tokenizGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                        <linearGradient id="tokenizGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                    {/* Left wing */}
                    <path d="M5 40 L35 25 L60 50 L35 50 Z" fill="url(#tokenizGradient1)" />
                    {/* Right wing */}
                    <path d="M115 40 L85 25 L60 50 L85 50 Z" fill="url(#tokenizGradient1)" />
                    {/* Body/Head */}
                    <path d="M50 50 L60 20 L70 50 Z" fill="url(#tokenizGradient1)" />
                    {/* Tail feathers */}
                    <path d="M45 55 L60 50 L75 55 L60 95 Z" fill="url(#tokenizGradient2)" />
                    {/* Inner detail */}
                    <path d="M55 55 L60 45 L65 55 L60 75 Z" fill="#8B5CF6" opacity="0.5" />
                </svg>

                {/* Center Title */}
                <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold font-heading tracking-wide">
                        <span className="text-nijaGreen">Tokeni</span>
                        <span className="text-nijaPurple">Z</span>
                    </h3>
                </div>
            </div>

            {/* Subtitle */}
            <p className="text-nijaPurple text-sm font-semibold tracking-[0.3em] text-center">
                TOKENIZATION<br />FRAMEWORK
            </p>
        </div>
    );
}

// Custom NijaDiiA Logo Component
function NijaDiiALogo() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Left Puzzle/Interlocking Logo */}
                <svg viewBox="0 0 100 80" className="w-24 h-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="nijadiiaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient id="nijadiiaGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                    {/* Top piece */}
                    <path d="M30 10 L70 10 L70 25 C65 25, 60 30, 60 35 C60 40, 65 45, 70 45 L70 50 L30 50 L30 45 C35 45, 40 40, 40 35 C40 30, 35 25, 30 25 Z" fill="url(#nijadiiaGradient1)" />
                    {/* Bottom piece */}
                    <path d="M20 55 L80 55 L80 70 L20 70 Z" fill="url(#nijadiiaGradient2)" rx="5" />
                    {/* Small decorative elements */}
                    <circle cx="15" cy="20" r="4" fill="#8B5CF6" />
                    <circle cx="85" cy="15" r="3" fill="#10B981" />
                </svg>

                {/* Center Title */}
                <div className="flex flex-col items-center">
                    <h3 className="text-4xl font-bold font-heading tracking-wide">
                        <span className="text-nijaPurple">Nija</span>
                        <span className="text-nijaGreen">DiiA</span>
                    </h3>
                </div>

                {/* Right Puzzle/Interlocking Logo - rotated/mirrored */}
                <svg viewBox="0 0 100 80" className="w-24 h-20" xmlns="http://www.w3.org/2000/svg">
                    {/* Top piece */}
                    <path d="M30 10 L70 10 L70 25 C65 25, 60 30, 60 35 C60 40, 65 45, 70 45 L70 50 L30 50 L30 45 C35 45, 40 40, 40 35 C40 30, 35 25, 30 25 Z" fill="url(#nijadiiaGradient2)" />
                    {/* Bottom piece */}
                    <path d="M20 55 L80 55 L80 70 L20 70 Z" fill="url(#nijadiiaGradient1)" rx="5" />
                    {/* Small decorative elements */}
                    <circle cx="85" cy="20" r="4" fill="#10B981" />
                    <circle cx="15" cy="15" r="3" fill="#8B5CF6" />
                </svg>
            </div>

            {/* Subtitle */}
            <p className="text-nijaGreen text-sm font-semibold tracking-[0.3em] text-center">
                DIGITAL INVESTMENTS<br />INTELLIGENT AGENT
            </p>
        </div>
    );
}

function FlipCard({ item, idx }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="h-[28rem] group w-full"
            style={{ perspective: '1000px' }}
        >
            <div
                className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateX(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full rounded-2xl p-[2px] bg-gradient-to-br from-nijaPurple to-nijaGreen overflow-hidden group-hover:pointer-events-none"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div className={`w-full h-full rounded-[14px] p-8 ${item.isCustomLogo || item.isSmacG || item.isDavPro || item.isTokeniZ || item.isNijaDiiA ? 'bg-white' : 'bg-white dark:bg-gray-900'} overflow-hidden relative h-full flex flex-col items-center justify-center`}>
                        {/* Universal Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id={`grid-${idx}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#grid-${idx})`} />
                            </svg>
                        </div>

                        {/* Universal Corner Accents */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color.replace('text-', 'from-')}/10 to-transparent rounded-bl-[100px] pointer-events-none`} />
                        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${item.color.replace('text-', 'from-')}/5 to-transparent rounded-tr-[80px] pointer-events-none`} />

                        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                            {item.isNijaDiiA ? (
                                /* NijaDiiA Custom Logo */
                                <NijaDiiALogo />
                            ) : item.isTokeniZ ? (
                                /* TokeniZ Custom Logo */
                                <TokeniZLogo />
                            ) : item.isDavPro ? (
                                /* DAVPro Custom Logo */
                                <DAVProLogo />
                            ) : item.isSmacG ? (
                                /* SmaCG Custom Logo */
                                <SmaCGLogo />
                            ) : item.isCustomLogo ? (
                                /* Nija Wallet Custom Logo */
                                <div className="mb-4">
                                    <NijaWalletLogo className="w-40 h-40" />
                                </div>
                            ) : (
                                <div className={`mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 ${item.color}`}>
                                    <item.icon size={40} strokeWidth={1.5} />
                                </div>
                            )}

                            {!item.isSmacG && !item.isDavPro && !item.isTokeniZ && !item.isNijaDiiA && (item.isCustomLogo ? (
                                /* Nija Wallet gradient text */
                                <h3 className="text-3xl font-bold mb-3 font-heading bg-gradient-to-r from-nijaGreen to-nijaPurple bg-clip-text text-transparent">
                                    {item.title.toLowerCase()}
                                </h3>
                            ) : (
                                <h3 className={`text-2xl font-bold mb-3 ${item.color} font-heading`}>
                                    {item.title}
                                </h3>
                            ))}

                            {!item.isCustomLogo && !item.isSmacG && !item.isDavPro && !item.isTokeniZ && !item.isNijaDiiA && (
                                <p className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                                    {item.subtitle}
                                </p>
                            )}

                            {/* Decorative circuit lines */}
                            {!item.isCustomLogo && !item.isSmacG && !item.isDavPro && !item.isTokeniZ && !item.isNijaDiiA && (
                                <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10">
                                    <svg viewBox="0 0 100 100" className={item.color}>
                                        <path d="M10,90 L90,90 L90,10" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="10" cy="90" r="3" fill="currentColor" />
                                        <circle cx="90" cy="10" r="3" fill="currentColor" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full rounded-2xl p-[2px] bg-gradient-to-br from-nijaPurple to-nijaGreen overflow-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateX(180deg)',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div className="w-full h-full rounded-[14px] p-6 bg-gray-800 overflow-hidden flex flex-col justify-center relative items-center">
                        {/* Circuit Pattern Background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <pattern id={`circuit-back-${idx}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M0 20 H40 M20 0 V40" stroke="white" strokeWidth="1" fill="none" />
                                    <circle cx="20" cy="20" r="2" fill="white" />
                                </pattern>
                                <rect width="100%" height="100%" fill={`url(#circuit-back-${idx})`} />
                            </svg>
                        </div>

                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                            <h3 className="text-xl font-bold mb-4 text-white font-heading">
                                {item.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                {item.backContent}
                            </p>
                            <a
                                href={`/ecosystem/${item.id}`}
                                className="px-6 py-2 border-2 border-sky-300 text-sky-300 font-semibold rounded-md hover:bg-sky-300/10 hover:shadow-[0_0_20px_rgba(125,211,252,0.5)] transition-all duration-300 cursor-pointer inline-block"
                            >
                                {item.title}
                            </a>
                        </div>

                        {/* Decorative circuit lines */}
                        <div className="absolute bottom-4 right-4 w-20 h-20 opacity-20">
                            <svg viewBox="0 0 100 100" className="text-white">
                                <path d="M10,90 L90,90 L90,10" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="10" cy="90" r="3" fill="currentColor" />
                                <circle cx="90" cy="10" r="3" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="absolute top-4 left-4 w-16 h-16 opacity-20">
                            <svg viewBox="0 0 100 100" className="text-white">
                                <path d="M90,10 L10,10 L10,90" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="90" cy="10" r="3" fill="currentColor" />
                                <circle cx="10" cy="90" r="3" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
