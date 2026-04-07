import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function About() {
    const [openAccordion, setOpenAccordion] = useState(0);
    const [openFeatureAccordion, setOpenFeatureAccordion] = useState(0);
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* Hero Section - Get to Know */}
            <section className="pt-32 pb-10 bg-gradient-to-br from-gray-50 to-white dark:from-baseDark dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Top Section - Images + Content */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
                        {/* Left Side - Layered Image Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[600px] hidden lg:block"
                        >
                            {/* Decorative Gradient Background */}
                            <div className="absolute -top-10 -left-10 w-72 h-72 bg-nijaGreen/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

                            {/* Background Image (Primary) */}
                            <div className="absolute top-0 left-0 w-[85%] h-[70%] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-nijaGreen/20 hover:shadow-2xl hover:scale-[1.02]">
                                <img
                                    src="/about-team-meeting.png"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/5 transition-all duration-500"></div>
                            </div>

                            {/* Foreground Image (Overlapping) */}
                            <div className="absolute bottom-0 right-0 w-[75%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group cursor-pointer transition-all duration-500 hover:shadow-nijaGreen/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2">
                                <img
                                    src="/about-team-2.jpg"
                                    alt="Business planning"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-nijaGreen/10 group-hover:to-nijaGreen/5 transition-all duration-500"></div>
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Label */}
                            <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                                Get to Know
                            </span>

                            {/* Main Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
                                Nija Venture Impacts: Creating Wealth and Shared Value in the Distributed Economy
                            </h1>

                            {/* Body Content */}
                            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Nija Venture Impacts is a distributed economy company that is committed to creating wealth and shared value with all stakeholders. We believe that the distributed economy has the potential to revolutionize the way we create, distribute, and share value. By using blockchain technology and tokenization, we can create more transparent, efficient, and equitable systems.
                                </p>

                                <p>
                                    We are passionate about using our skills and expertise to help individuals and communities build sustainable and digital social and economic ecosystems. We believe that the distributed economy can help us to create a more just and equitable world for all.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section - Our Services (Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-5xl"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                            Our Services:
                        </h2>

                        <div className="space-y-4 md:space-y-6">
                            {[
                                'We help businesses to scale faster and create higher value by leveraging the distributed economy.',
                                'We help individuals and communities to build social and economic ecosystems that are sustainable and digital.',
                                'We provide consulting services on blockchain technology, tokenomics, and tokenization.'
                            ].map((service, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4"
                                >
                                    {/* Green Checkmark Icon */}
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nijaGreen flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-900 dark:text-white font-medium leading-relaxed">
                                        {service}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Accordion Section - Team, Vision, Contact */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        {/* Left Side - Team Discussion Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[300px] md:h-[500px] lg:sticky lg:top-8 hidden md:block"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                                <img
                                    src="/about-team-discussion.jpg"
                                    alt="Team discussion"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Accordion with Header */}
                        <div>
                            {/* Section Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                    Learn More About Us
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                                    Discover our team, vision, and how we're transforming the distributed economy through innovative blockchain solutions and strategic partnerships.
                                </p>
                            </motion.div>

                            {/* Accordion Items */}
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Our Team',
                                        content: 'Our team is comprised of successful serial entrepreneurs and technopreneurs with extensive experience in the distributed economy. We have a deep understanding of blockchain technology and tokenization, and we are passionate about using our skills to create a more just and equitable world.'
                                    },
                                    {
                                        title: 'Our Vision',
                                        content: 'Our vision is to create a world where everyone has the opportunity to participate in the distributed economy and benefit from its potential to create wealth and shared value. We believe that the distributed economy has the potential to revolutionize the way we live and work, and we are committed to helping to make that vision a reality.'
                                    },
                                    {
                                        title: 'Contact Us',
                                        content: 'If you are interested in learning more about Nija Venture Impacts, please visit our website or contact us. We would be happy to discuss how we can help you to create wealth and shared value in the distributed economy.\n\nVisit our website to learn more about our services and how we can help you to create wealth and shared value in the distributed economy.'
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ y: -4 }}
                                        className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-300"
                                    >
                                        {/* Accordion Header */}
                                        <button
                                            onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                                            className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left transition-colors"
                                        >
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors">
                                                {item.title}
                                            </h3>
                                            <svg
                                                className={`w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-nijaGreen transition-all duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Accordion Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${openAccordion === idx ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                                {item.content}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Showcase Section - Metrics */}
            <section
                className="relative py-24 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url(/work-showcase-bg.png)' }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        {/* Credentials Label */}
                        <div className="text-nijaGreen text-lg font-semibold mb-4 tracking-wider">
                            Credentials
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Work Showcase
                        </h2>
                    </motion.div>

                    {/* Metrics Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
                    >
                        {[
                            { value: '4+', label: 'years' },
                            { value: '30+', label: 'start-up events' },
                            { value: '6+', label: 'Hackathons' },
                            { value: '8+', label: 'Ventures Incubated' }
                        ].map((metric, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                className="text-center"
                            >
                                {/* Label */}
                                <div className="text-gray-300 text-sm md:text-base font-medium mb-3 uppercase tracking-wide">
                                    {metric.label}
                                </div>

                                {/* Value */}
                                <div className="text-nijaGreen text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                                    {metric.value}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Distributed Economy Section - Educational */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#0d1117]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Part 1: Introduction Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 md:mb-16"
                    >
                        {/* Label */}
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Get to Know
                        </span>

                        {/* Main Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            What is a Distributed Economy?
                        </h2>

                        {/* Body Text */}
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-8 md:mb-12">
                            A distributed economy is an economic system in which economic activity is distributed across a network of nodes. This means that there is no central authority that controls the economy, and instead, economic decisions are made by individuals and organizations that are part of the network.
                        </p>

                        {/* Subheading */}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                            Features of a Distributed Economy
                        </h3>
                    </motion.div>

                    {/* Part 2: Image + Accordion */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        {/* Left Side - Static Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[300px] md:h-[500px] lg:sticky lg:top-8 hidden md:block"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                                <img
                                    src="/distributed-economy.png"
                                    alt="Distributed economy consultation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Features Accordion */}
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Decentralization',
                                    content: 'There is no central authority that controls the economy. Instead, economic decisions are made by individuals and organizations that are part of the network.'
                                },
                                {
                                    title: 'Transparency',
                                    content: 'All economic transactions are transparent, meaning that everyone in the network can see what is happening. This helps to prevent fraud and corruption.'
                                },
                                {
                                    title: 'Efficiency',
                                    content: 'A distributed economy can be more efficient than a centralized economy because it can take advantage of the distributed nature of the network. For example, if a company needs to produce a product, it can source the materials from different suppliers in different parts of the world. This can help to reduce costs and improve efficiency.'
                                },
                                {
                                    title: 'Sustainability',
                                    content: 'A distributed economy can be more sustainable than a centralized economy because it can reduce the need for long-distance transportation. For example, if a community needs to produce food, it can grow the food locally. This can help to reduce pollution and conserve resources.'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-nijaPurple dark:hover:border-nijaPurple transition-all duration-300"
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => setOpenFeatureAccordion(openFeatureAccordion === idx ? -1 : idx)}
                                        className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                    >
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-nijaPurple transition-colors">
                                            {item.title}
                                        </h4>
                                        <svg
                                            className={`w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-nijaPurple transition-all duration-300 ${openFeatureAccordion === idx ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFeatureAccordion === idx ? 'max-h-96' : 'max-h-0'}`}
                                    >
                                        <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                            {item.content}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples of Distributed Economies Section */}
            <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Label */}
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Get to Know
                        </span>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
                            Examples of Distributed Economies
                        </h2>

                        {/* Intro Text */}
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
                            There are a number of examples of distributed economies in operation today. These include:
                        </p>

                        {/* Examples Grid */}
                        <div className="grid md:grid-cols-1 gap-4 md:gap-8">
                            {[
                                {
                                    title: 'The peer-to-peer (P2P) file sharing network',
                                    description: 'The P2P file sharing network is a distributed network that allows users to share files with each other. This network is decentralized, transparent, and efficient.'
                                },
                                {
                                    title: 'The Bitcoin network',
                                    description: 'The Bitcoin network is a distributed network that allows users to send and receive payments. This network is decentralized, transparent, and secure.'
                                },
                                {
                                    title: 'The sharing economy',
                                    description: 'The sharing economy is a model of economic activity in which people share goods and services with each other. This model is decentralized, transparent, and sustainable.'
                                }
                            ].map((example, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="group bg-white dark:bg-gray-900 p-5 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-300"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-nijaGreen transition-colors">
                                        {example.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                        {example.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Future & Conclusion - Combined Section */}
            <section
                className="relative py-16 md:py-24 bg-cover bg-center"
                style={{ backgroundImage: 'url(/future-conclusion-bg.png)' }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                    {/* The Future Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        {/* Label */}
                        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium rounded-full bg-nijaGreen/10 text-nijaGreen uppercase tracking-wide">
                            Get to Know
                        </span>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                            The Future of Distributed Economies
                        </h2>

                        {/* Body Text */}
                        <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6">
                            Distributed economies are still in their early stages of development, but they have the potential to revolutionize the way we think about the economy. As technology continues to develop, distributed economies are likely to become more widespread and influential.
                        </p>

                        {/* Merged Conclusion Content */}
                        <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-4xl mx-auto">
                            Distributed economies offer a number of potential benefits, including decentralization, transparency, efficiency, and sustainability. As technology continues to develop, distributed economies are likely to become more widespread and influential.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
