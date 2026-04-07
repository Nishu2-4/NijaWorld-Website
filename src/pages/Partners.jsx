import { motion } from 'framer-motion';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const partnerCards = [
    {
        title: 'BLUEBIRD',
        subtitle: 'Management Services',
        image: '/BluBird Management Services.png',
    },
    {
        title: 'GINSERV',
        subtitle: 'Nurturing Ventures',
        image: '/Ginserv.png',
    },
    {
        title: 'INDIA BLOCKCHAIN ALLIANCE',
        subtitle: 'Blockchain Research & Development',
        image: '/India Blockchain Alliance.png',
    },
    {
        title: 'FUTURE FAST',
        subtitle: 'Are you Ready For the ride?',
        image: '/FutureFast.png',
    },
];

const founders = [
    {
        name: 'Nanjunda Pratap Palecanda',
        role: 'Founder',
        image: '/founder-nanjunda.jpg',
    },
    {
        name: 'Achyutha Anantha Murthy',
        role: 'Co-Founder',
        image: '/founder-achu.png',
    },
];

const founderProfiles = [
    {
        name: 'Nanjunda Pratap Palecanda',
        role: 'Founder',
        image: '/founder-bio-nanjunda.jpg',
        linkedin: 'https://www.linkedin.com/in/palecanda/?originalSubdomain=in',
        bio: 'Building Sustainable mobility Solutions, Distributed economy. A Futurist, Tokenisation Evangelist, cybersecurity and DeFi to DFi, Host of FutureFast Podcast & Author of \'Exploring AI in the 80/20 Future\'.',
    },
    {
        name: 'Achyutha Anantha Murthy',
        role: 'Co-Founder',
        image: '/founder-bio-achu.jpg',
        linkedin: 'https://www.linkedin.com/in/achyuthab/?originalSubdomain=in',
        bio: 'IICA Certified Independent Director. Blockchain Evangelist, Cybersecurity Expert, Web 3.0 Pioneer: Leading Decentralized Innovation. Global Tactician: Building Excellence & Partnerships. IT Governance Authority.',
    },
];

function LinkedInIcon({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export function Partners() {
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

            {/* Hero Section — handshake image as background */}
            <section
                className="pt-32 pb-20 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: 'url(/partners-hero.jpg)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading text-white"
                        >
                            Our Partners
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-200 leading-relaxed font-body"
                        >
                            Strategic partnerships driving innovation in AI and blockchain technology.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Partner Cards Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-14 font-heading text-gray-900 dark:text-white"
                    >
                        Our Strategic Partners
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnerCards.map((partner, idx) => (
                            <motion.div
                                key={partner.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                className="group flex flex-col items-center text-center rounded-2xl p-6 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-nijaGreen/40 dark:hover:border-nijaGreen/30 shadow-sm hover:shadow-xl hover:shadow-nijaGreen/5 transition-all duration-300 backdrop-blur-sm"
                            >
                                {/* Card Image */}
                                <div className="w-full h-44 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/[0.06] mb-6 p-4 overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.title}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white font-heading tracking-wide mb-1">
                                    {partner.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                                    {partner.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Circular Founder Avatars Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
                        {founders.map((founder, idx) => (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="relative mb-6">
                                    <div
                                        className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${founder.role === 'Founder'
                                            ? 'bg-nijaGreen'
                                            : 'bg-nijaPurple'
                                            }`}
                                        style={{ transform: 'scale(1.08)' }}
                                    />
                                    <div
                                        className={`relative rounded-full p-1 transition-all duration-300 ${founder.role === 'Founder'
                                            ? 'bg-gradient-to-br from-nijaGreen/60 to-nijaGreen/20 group-hover:from-nijaGreen group-hover:to-nijaGreen/60'
                                            : 'bg-gradient-to-br from-nijaPurple/60 to-nijaPurple/20 group-hover:from-nijaPurple group-hover:to-nijaPurple/60'
                                            }`}
                                    >
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-top shadow-xl"
                                        />
                                    </div>
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
                                    {founder.name}
                                </h2>

                                <span
                                    className={`inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-wide border ${founder.role === 'Founder'
                                        ? 'bg-nijaGreen/10 text-nijaGreen border-nijaGreen/30'
                                        : 'bg-nijaPurple/10 text-nijaPurple border-nijaPurple/30'
                                        }`}
                                >
                                    {founder.role}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Founder Profiles Section */}
            <section className="py-20 relative z-10 bg-gray-50 dark:bg-gradient-to-br dark:from-[#0B0F14] dark:via-[#141B28] dark:to-[#0B0F14]">
                {/* Subtle glow decorations */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-nijaGreen/5 rounded-full blur-3xl pointer-events-none hidden dark:block" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nijaPurple/5 rounded-full blur-3xl pointer-events-none hidden dark:block" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
                    {founderProfiles.map((profile, idx) => {
                        const isFounder = profile.role === 'Founder';
                        const accentColor = isFounder ? 'nijaGreen' : 'nijaPurple';

                        return (
                            <motion.div
                                key={profile.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`flex flex-col md:flex-row gap-8 rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl ${isFounder
                                    ? 'bg-white dark:bg-white/[0.03] border-gray-200 dark:border-nijaGreen/10 hover:border-nijaGreen/30 hover:shadow-nijaGreen/5'
                                    : 'bg-white dark:bg-white/[0.03] border-gray-200 dark:border-nijaPurple/10 hover:border-nijaPurple/30 hover:shadow-nijaPurple/5'
                                    }`}
                            >
                                {/* Left — Image */}
                                <div className="flex-shrink-0 mx-auto md:mx-0">
                                    <div className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${isFounder
                                        ? 'border-nijaGreen/20 hover:border-nijaGreen/50'
                                        : 'border-nijaPurple/20 hover:border-nijaPurple/50'
                                        }`}>
                                        <img
                                            src={profile.image}
                                            alt={profile.name}
                                            className="w-72 h-72 sm:w-80 sm:h-80 object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Right — Content */}
                                <div className="flex flex-col justify-center flex-1 min-w-0">
                                    {/* Name + LinkedIn */}
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
                                            {profile.name}
                                        </h3>
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200 hover:drop-shadow-[0_0_6px_rgba(10,102,194,0.5)]"
                                            aria-label={`${profile.name} LinkedIn`}
                                        >
                                            <LinkedInIcon className="w-7 h-7" />
                                        </a>
                                    </div>

                                    {/* Role Badge */}
                                    <span
                                        className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-medium w-fit border ${isFounder
                                            ? 'bg-nijaGreen/10 text-nijaGreen border-nijaGreen/30'
                                            : 'bg-nijaPurple/10 text-nijaPurple border-nijaPurple/30'
                                            }`}
                                    >
                                        {profile.role}
                                    </span>

                                    {/* Bio */}
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6 max-w-2xl text-base md:text-lg">
                                        {profile.bio}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}

export default Partners;
