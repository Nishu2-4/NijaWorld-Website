import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Insights', path: '/insights' },
        { name: 'Media', path: '/media' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className='fixed w-full bg-white/80 dark:bg-baseDark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                <Link to='/' className='flex items-center gap-0 hover:opacity-90 transition group z-50 relative'>
                    {/* NIJA Logo Icon */}
                    <img
                        src='/nija-logo.png'
                        alt='NIJA Logo'
                        className='h-8 w-auto'
                    />
                    {/* NIJA WORLD Logo Image - Purple for light theme, Green for dark theme */}
                    <div className='h-8 flex items-center overflow-hidden'>
                        <img
                            src='/nija-world-purple.png'
                            alt='NIJA WORLD'
                            className='h-14 w-auto max-w-none block dark:hidden'
                        />
                        <img
                            src='/nija-world-green.png'
                            alt='NIJA WORLD'
                            className='h-14 w-auto max-w-none hidden dark:block'
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-5 items-center text-sm text-gray-700 dark:text-gray-300'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className='hover:text-nijaGreen transition'
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className='hidden lg:flex gap-3 items-center'>
                    <button className='border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Download Overview
                    </button>
                    <button className='bg-nijaGreen hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-lg shadow-nijaGreen/30'>
                        Request a Demo
                    </button>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Controls */}
                <div className='flex lg:hidden items-center gap-4 z-50'>
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-gray-700 dark:text-gray-300 hover:text-nijaGreen transition'
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='lg:hidden bg-white dark:bg-baseDark border-t border-gray-200 dark:border-gray-800 absolute w-full left-0 overflow-hidden shadow-xl'
                    >
                        <div className='px-6 py-8 flex flex-col gap-6'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className='text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-nijaGreen transition border-b border-gray-100 dark:border-gray-800 pb-2'
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className='flex flex-col gap-4 mt-4'>
                                <button className='w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                                    Download Overview
                                </button>
                                <button className='w-full bg-nijaGreen hover:bg-green-500 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg shadow-nijaGreen/30'>
                                    Request a Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
