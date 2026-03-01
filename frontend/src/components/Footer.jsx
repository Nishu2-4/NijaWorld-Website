import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe:', email);
    };

    return (
        <footer className="relative bg-[#1a1a1a] text-gray-400 overflow-hidden">
            {/* Rhombus Shapes Watermark - Left Side */}
            <div className="absolute left-0 bottom-1/2 opacity-5 pointer-events-none">
                {/* First Rhombus */}
                <div className="w-64 h-64 bg-gray-500 transform rotate-45 -translate-x-40"></div>
            </div>
            <div className="absolute left-0 bottom-1 opacity-5 pointer-events-none">
                {/* Second Rhombus */}
                <div className="w-64 h-96 bg-gray-500 transform rotate-45 -translate-x-125"></div>
            </div>

            {/* NIJA Logo Watermark - Bottom Right */}
            <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none">
                <img
                    src="/nija-logo.png"
                    alt="NIJA Watermark"
                    className="w-80 h-auto"
                />
            </div>

            {/* Newsletter Section */}
            <div className="relative z-10 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 bg-[#242424] rounded-xl px-4 sm:px-8 py-4 md:py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <svg className="w-10 h-10 text-nijaGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Subscribe now to get</h3>
                                <p className="text-white font-semibold text-lg">latest updates</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 md:w-80 bg-transparent border-b border-gray-600 px-4 py-2 text-white placeholder-gray-500 focus:border-nijaGreen outline-none transition"
                            />
                            <button
                                type="submit"
                                className="p-2 text-white hover:text-nijaGreen transition transform rotate-90"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">

                    {/* Left: Logo and Social Media */}
                    <div>
                        <Link to='/' className='flex items-center gap-1.5 mb-6 hover:opacity-90 transition group'>
                            <img
                                src='/nija-logo.png'
                                alt='NIJA Logo'
                                className='h-12 w-auto'
                            />
                            {/* NIJA WORLD Logo Image - Always green in footer */}
                            <img
                                src='/nija-world-green.png'
                                alt='NIJA WORLD'
                                className='h-[76px] w-auto'
                            />
                        </Link>

                        {/* Social Media Icons */}
                        <div className="flex flex-wrap gap-3">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/nijaventureimpactspl/" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* X (Twitter) - Nija */}
                            <a href="https://x.com/nija82705" target="_blank" rel="noopener noreferrer" title="X - Nija" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* X (Twitter) - FutureFast */}
                            <a href="https://x.com/futurefastpcast" target="_blank" rel="noopener noreferrer" title="X - FutureFast Podcast" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/nijaimpacts/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* Instagram - Nija World */}
                            <a href="https://www.instagram.com/nijaworld42" target="_blank" rel="noopener noreferrer" title="Instagram - Nija World" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Instagram - FutureFast Podcast */}
                            <a href="https://www.instagram.com/futurefastpodcast/" target="_blank" rel="noopener noreferrer" title="Instagram - FutureFast Podcast" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://www.youtube.com/@futurefast" target="_blank" rel="noopener noreferrer" title="YouTube - FutureFast" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-nijaGreen transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle: Explore Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-nijaGreen transition">About Company</Link></li>
                            <li><Link to="/about" className="hover:text-nijaGreen transition">Meet the Team</Link></li>
                            <li><Link to="/media" className="hover:text-nijaGreen transition">News & Media</Link></li>
                            <li><Link to="/contact" className="hover:text-nijaGreen transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right: Contact Information */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed">
                                #B/37, "Pernakuti", 1st Cross, Siddhivinayaka Layout, BSK 3rd Stage, 3rd Phase Bangalore - 560 085
                            </p>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-nijaGreen" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:reach@nija.world" className="hover:text-nijaPurple transition">reach@nija.world</a>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-nijaGreen" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href="tel:+919739666347" className="hover:text-nijaPurple transition">+91 97396 66347</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-nijaGreen" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href="tel:+919845226516" className="hover:text-nijaPurple transition">+91 98452 26516</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Description */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <p className="text-center text-sm text-gray-500 max-w-4xl mx-auto">
                        Nija Venture Impacts is a Distributed Economy ( Nija Model ) Venture, creating wealth and shared value with all stakeholders.
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-gray-600">© Copyright 2026 by nija.world</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-nijaGreen hover:bg-green-500 text-white p-3 rounded-full shadow-lg transition z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}

export default Footer;
