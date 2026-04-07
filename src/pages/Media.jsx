import { motion } from 'framer-motion';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const events = [
    {
        id: 'fintech-india-summit',
        title: 'Fintech India Summit & Awards 2022',
        description:
            'Nanjunda Pratap Palecanda Speaking at Fintech India Summit & Awards 2022 About Distributed Economy and Tokenisation on 17 & 18 November 2022.',
        venue: 'Crowne Plaza, Chennai, Tamil Nadu',
        date: '17 & 18 November 2022',
        organizer: 'Point To Business Services',
        images: [
            { src: '/fintech-summit-1.png', alt: 'Fintech India Summit 2022 – Event Poster', span: 'col-span-2 row-span-2' },
            { src: '/fintech-summit-2.png', alt: 'Fintech India Summit 2022 – Speakers', span: 'col-span-2 row-span-2' },
            { src: '/fintech-summit-3.png', alt: 'Fintech India Summit 2022 – Agenda Day 1 (Morning)', span: 'col-span-2' },
            { src: '/fintech-summit-4.png', alt: 'Fintech India Summit 2022 – Agenda Day 1 (Afternoon) & Day 2', span: 'col-span-2' },
            { src: '/fintech-summit-5.png', alt: 'Fintech India Summit 2022 – Agenda Day 2 (Full)', span: 'col-span-2' },
            { src: '/fintech-summit-6.png', alt: 'Fintech India Summit 2022 – Website Banner' },
            { src: '/fintech-summit-7.png', alt: 'Fintech India Summit 2022 – Speakers Panel' },
        ],
    },
    {
        id: 'fireside-chat-tokenization',
        title: 'Fireside Chat on The Future of Tokenization in the BFSI Sector',
        description:
            'An insightful event exploring how tokenization can transform the BFSI sector, addressing industry challenges like compliance, infrastructure limitations, and the distributed economy model.',
        date: '7 November 2024',
        highlights: [
            {
                session: 'Opening Remarks',
                speaker: 'Nanjunda Pratap Palecanda',
                insight:
                    'Shared his vision on how tokenization can transform the BFSI sector, addressing industry challenges like compliance and infrastructure limitations. Introduced the concept of a distributed economy model and set the stage for discussions on innovation in financial services.',
            },
            {
                session: 'Keynote Address',
                speaker: 'Paul Resnick',
                note: 'Virtual',
                insight:
                    'Discussed the role of tokenization in enhancing data security, client personalization, and regulatory compliance. Emphasized how tokenization can modernize financial services by creating new asset classes and improving data integrity.',
            },
            {
                session: 'Fireside Chat',
                speaker: 'Stuart Erskine & Nanjunda Pratap Palecanda',
                insight:
                    'Explored how tokenization can drive customer engagement and operational efficiency. Provided insights into how tokenization can enable secure, scalable financial solutions.',
            },
            {
                session: 'Interactive Q&A Session',
                speaker: 'Audience',
                insight:
                    'Participants asked insightful questions about the practical applications of tokenization in BFSI. This interactive segment encouraged a deeper dive into how tokenization could shape the future of finance.',
            },
        ],
        images: [
            { src: '/fireside-chat-1.jpg', alt: 'Nanjunda Pratap Palecanda – Opening Remarks' },
            { src: '/fireside-chat-2.jpg', alt: 'Fireside Chat – Stuart Erskine & Nanjunda Pratap Palecanda' },
            { src: '/fireside-chat-3.jpg', alt: 'Stuart Erskine Speaking' },
            { src: '/fireside-chat-4.jpg', alt: 'Paul Resnick – Virtual Keynote Address' },
            { src: '/fireside-chat-5.jpg', alt: 'Award Ceremony' },
            { src: '/fireside-chat-6.jpg', alt: 'Audience at the Event' },
            { src: '/fireside-chat-7.jpg', alt: 'Group Photo with GINSERV Team' },
            { src: '/fireside-chat-8.jpg', alt: 'Full Audience Group Photo' },
            { src: '/fireside-chat-9.jpg', alt: 'Audience at the Auditorium' },
        ],
    },
    {
        title: "Industry Connect '25",
        description:
            "Garden City University recognized Achyutha A, Co-Founder & COO of Nija Venture Impacts Pvt. Ltd., as an Industry Leader at their Industry Connect '25 event.",
        date: '8 July 2025',
        venue: 'Garden City University, Bangalore',
        organizer: 'Garden City University',
        images: [
            { src: '/industry-connect-1.jpg', alt: "Industry Connect '25 – Achyutha A recognized as Industry Leader" },
        ],
    },
    {
        title: 'Other Speaking Events',
        galleryOnly: true,
        images: [
            { src: '/speaking-event-1.jpg', alt: 'SmartX Health Hackathon 2022 – Siemens' },
            { src: '/speaking-event-2.png', alt: 'India Tech Startup Conclave & Awards 2022 – Speaker Profile' },
            { src: '/speaking-event-3.png', alt: 'Speaking on Distributed Economy & Tokenisation' },
            { src: '/speaking-event-4.png', alt: 'Panel Discussion on Venture Capital' },
            { src: '/speaking-event-5.png', alt: 'Speaking at Industry Conference' },
            { src: '/speaking-event-6.jpg', alt: 'VC Panellists – Value Creation Through Venture Capital at Mysuru Start-Up Pavilion' },
            { src: '/speaking-event-7.png', alt: 'Ipreneur Startup Accelerator Rollout Program' },
            { src: '/speaking-event-8.jpg', alt: 'Speaking on Distributed Economy to Audience' },
            { src: '/speaking-event-13.png', alt: 'BCIC – Namma Karnataka, Gateway to Future India' },
            { src: '/speaking-event-10.png', alt: 'Panel Discussion on Innovation & Start Up Ecosystem Enablers' },
            { src: '/speaking-event-11.png', alt: 'CariNext 2023 – Speaker Announcement, Nassau, The Bahamas' },
            { src: '/speaking-event-12.png', alt: 'ED Summit 2022 – GINSERV at Gogte Institute of Technology' },
            { src: '/speaking-event-9.png', alt: 'IIMBueX 2022 Networking Lounge – Distributed Economy' },
            { src: '/speaking-event-14.jpg', alt: 'Enterprise Blockchain Adoption 2023 – Keynote Speaker' },
        ],
    },
];

export function Media() {
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

            {/* Hero Section — media image as background */}
            <section
                className="pt-32 pb-20 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: 'url(/media-hero.jpg)' }}
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
                            Media & Press
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-200 leading-relaxed font-body"
                        >
                            Latest news, press releases, and media coverage about NIJA.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-lg md:text-2xl rounded-full bg-nijaGreen/10 text-nijaGreen font-bold tracking-wide border border-nijaGreen/20">
                            Events
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
                            Our Speaking Engagements
                        </h2>
                    </motion.div>

                    {/* Event Cards */}
                    <div className="space-y-24">
                        {(() => {
                            let numberedIdx = 0;
                            return events.map((event) => {
                                const currentNumber = event.galleryOnly ? null : ++numberedIdx;
                                return (
                                    <motion.article
                                        key={event.title}
                                        id={event.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.6 }}
                                        className="relative"
                                    >
                                        {event.galleryOnly ? (
                                            /* Gallery-Only Section (no number, no meta) */
                                            <div className="mb-10">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading text-center mb-8">
                                                    {event.title}
                                                </h3>
                                                {/* Photo Grid – 3 per row */}
                                                <div className="space-y-4 max-w-6xl mx-auto">
                                                    {Array.from({ length: Math.ceil(event.images.length / 3) }, (_, rowIdx) => {
                                                        const rowImages = event.images.slice(rowIdx * 3, rowIdx * 3 + 3);
                                                        const isLastRow = rowIdx === Math.ceil(event.images.length / 3) - 1;
                                                        const isIncomplete = isLastRow && rowImages.length < 3;
                                                        return (
                                                            <div key={rowIdx} className={isIncomplete ? 'flex justify-center gap-4' : 'grid grid-cols-1 sm:grid-cols-3 gap-4'}>
                                                                {rowImages.map((img, i) => (
                                                                    <motion.div
                                                                        key={img.src}
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                                                        className={`group cursor-pointer ${isIncomplete ? 'w-full sm:w-[calc(33.333%-0.67rem)]' : ''}`}
                                                                    >
                                                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                            <img
                                                                                src={img.src}
                                                                                alt={img.alt}
                                                                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                            />
                                                                        </div>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Event Header Card */}
                                                <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-10 mb-10 hover:border-nijaGreen/30 transition-all duration-300">
                                                    {/* Event Number Badge */}
                                                    <div className="flex items-start gap-6 mb-6">
                                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-nijaGreen/10 border border-nijaGreen/20 flex items-center justify-center">
                                                            <span className="text-nijaGreen font-bold text-xl">{String(currentNumber).padStart(2, '0')}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-heading mb-3">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Event Meta */}
                                                    <div className="flex flex-wrap gap-4 ml-0 md:ml-20">
                                                        {/* Date */}
                                                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                                                            <svg className="w-4 h-4 text-nijaGreen flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{event.date}</span>
                                                        </div>

                                                        {/* Venue */}
                                                        {event.venue && (
                                                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                                                                <svg className="w-4 h-4 text-nijaGreen flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{event.venue}</span>
                                                            </div>
                                                        )}

                                                        {/* Organizer */}
                                                        {event.organizer && (
                                                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                                                                <svg className="w-4 h-4 text-nijaGreen flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                                </svg>
                                                                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{event.organizer}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Image Gallery */}
                                                {event.images.length > 0 && !event.highlights && (
                                                    <div className="space-y-4">
                                                        {/* Row 1 */}
                                                        <div className={`grid gap-4 mx-auto ${event.images.length === 1 ? 'grid-cols-1 max-w-xl' : 'grid-cols-1 md:grid-cols-2 max-w-2xl'}`}>
                                                            {event.images.slice(0, 2).map((img, i) => (
                                                                <motion.div
                                                                    key={img.src}
                                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                                    className="group cursor-pointer"
                                                                >
                                                                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                        <img
                                                                            src={img.src}
                                                                            alt={img.alt}
                                                                            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                        />
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div>

                                                        {/* Row 2: Agenda images (3 columns) */}
                                                        {event.images.length > 2 && (
                                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                                                {event.images.slice(2, 5).map((img, i) => (
                                                                    <motion.div
                                                                        key={img.src}
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                                                                        className="group cursor-pointer"
                                                                    >
                                                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                            <img
                                                                                src={img.src}
                                                                                alt={img.alt}
                                                                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                            />
                                                                        </div>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Row 3: Additional images (2 columns) */}
                                                        {event.images.length > 5 && (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                                                {event.images.slice(5).map((img, i) => (
                                                                    <motion.div
                                                                        key={img.src}
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                                                        className="group cursor-pointer"
                                                                    >
                                                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                            <img
                                                                                src={img.src}
                                                                                alt={img.alt}
                                                                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                            />
                                                                        </div>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Event Highlights */}
                                                {event.highlights && event.highlights.length > 0 && (
                                                    <div className="mt-10 space-y-5">
                                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white font-heading flex items-center gap-3">
                                                            <span className="w-8 h-px bg-nijaGreen"></span>
                                                            Event Highlights
                                                        </h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                            {event.highlights.map((h, i) => (
                                                                <motion.div
                                                                    key={h.session}
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    whileInView={{ opacity: 1, y: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                                    className="bg-white dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-nijaGreen/30 transition-all duration-300 group"
                                                                >
                                                                    <div className="flex items-center gap-3 mb-4">
                                                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-nijaGreen/10 border border-nijaGreen/20 flex items-center justify-center text-nijaGreen font-bold text-sm">
                                                                            {String(i + 1).padStart(2, '0')}
                                                                        </span>
                                                                        <div>
                                                                            <h5 className="font-semibold text-gray-900 dark:text-white text-base">
                                                                                {h.session}
                                                                            </h5>
                                                                            <p className="text-sm text-nijaGreen font-medium">
                                                                                {h.speaker}
                                                                                {h.note && <span className="text-gray-400 ml-1">({h.note})</span>}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                                        {h.insight}
                                                                    </p>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Event Photos (shown after highlights) */}
                                                {event.images.length > 0 && event.highlights && (
                                                    <div className="mt-10">
                                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white font-heading flex items-center gap-3 mb-5">
                                                            <span className="w-8 h-px bg-nijaGreen"></span>
                                                            Event Photos
                                                        </h4>
                                                        <div className="space-y-4 max-w-6xl mx-auto">
                                                            {/* Row 1 */}
                                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                                {event.images.slice(0, 3).map((img, i) => (
                                                                    <motion.div
                                                                        key={img.src}
                                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                                                        className="group cursor-pointer"
                                                                    >
                                                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                            <img
                                                                                src={img.src}
                                                                                alt={img.alt}
                                                                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                            />
                                                                        </div>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                            {/* Row 2 */}
                                                            {event.images.length > 3 && (
                                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                                    {event.images.slice(3, 6).map((img, i) => (
                                                                        <motion.div
                                                                            key={img.src}
                                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                                            viewport={{ once: true }}
                                                                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                                                            className="group cursor-pointer"
                                                                        >
                                                                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                                <img
                                                                                    src={img.src}
                                                                                    alt={img.alt}
                                                                                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                                />
                                                                            </div>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            {/* Row 3 */}
                                                            {event.images.length > 6 && (
                                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                                    {event.images.slice(6).map((img, i) => (
                                                                        <motion.div
                                                                            key={img.src}
                                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                                            viewport={{ once: true }}
                                                                            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                                                                            className="group cursor-pointer"
                                                                        >
                                                                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-nijaGreen/40 transition-all duration-300 hover:shadow-xl hover:shadow-nijaGreen/10">
                                                                                <img
                                                                                    src={img.src}
                                                                                    alt={img.alt}
                                                                                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                                                                />
                                                                            </div>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </motion.article>
                                );
                            });
                        })()}
                    </div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}

export default Media;
