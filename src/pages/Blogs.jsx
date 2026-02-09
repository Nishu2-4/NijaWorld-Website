import { motion } from 'framer-motion';
import { AnimatedPageBackground } from '../components/AnimatedPageBackground';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Blogs() {
    // Placeholder blog posts
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Blockchain in Enterprise',
            excerpt: 'Exploring how blockchain technology is transforming enterprise operations and creating new opportunities for innovation.',
            category: 'Blockchain',
            readTime: '5 min read',
            date: 'February 2026',
            author: 'Nija Team'
        },
        {
            id: 2,
            title: 'AI-Driven Automation: A New Era',
            excerpt: 'Discover how artificial intelligence is revolutionizing business automation and improving operational efficiency.',
            category: 'AI & Automation',
            readTime: '7 min read',
            date: 'February 2026',
            author: 'Nija Team'
        },
        {
            id: 3,
            title: 'Cybersecurity Best Practices for 2026',
            excerpt: 'Stay ahead of emerging threats with our comprehensive guide to modern cybersecurity strategies.',
            category: 'Cybersecurity',
            readTime: '6 min read',
            date: 'January 2026',
            author: 'Nija Team'
        },
        {
            id: 4,
            title: 'Tokenization: Unlocking Asset Liquidity',
            excerpt: 'Learn how tokenization is creating new pathways for asset liquidity and transforming traditional finance.',
            category: 'Blockchain',
            readTime: '8 min read',
            date: 'January 2026',
            author: 'Nija Team'
        },
        {
            id: 5,
            title: 'The Role of Smart Contracts in Modern Business',
            excerpt: 'Understanding how smart contracts are automating business processes and reducing operational overhead.',
            category: 'Blockchain',
            readTime: '6 min read',
            date: 'January 2026',
            author: 'Nija Team'
        },
        {
            id: 6,
            title: 'Building Resilient Digital Infrastructure',
            excerpt: 'Key strategies for creating robust and scalable digital infrastructure in the distributed economy.',
            category: 'Infrastructure',
            readTime: '9 min read',
            date: 'December 2025',
            author: 'Nija Team'
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

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-5xl font-bold mb-6 font-heading"
                        >
                            Our Blog
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-xl text-gray-300 leading-relaxed font-body"
                        >
                            Insights, updates, and thought leadership on blockchain, AI, cybersecurity, and the distributed economy.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                                className="h-full"
                            >
                                <div className="flex flex-col h-full group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen hover:shadow-xl hover:shadow-nijaGreen/10 transition-all duration-150 cursor-pointer">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-nijaGreen/10 text-nijaGreen">
                                            {post.category}
                                        </span>
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-nijaGreen transition-colors duration-150">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 dark:text-gray-500">
                                                {post.date}
                                            </span>
                                            <span className="text-xs text-gray-400 dark:text-gray-600">
                                                By {post.author}
                                            </span>
                                        </div>
                                        <span className="text-nijaGreen font-medium group-hover:underline">
                                            Read more →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Placeholder Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                <span className="font-medium text-gray-900 dark:text-white">Coming Soon:</span> Full blog articles with in-depth analysis and case studies
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
}
