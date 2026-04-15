import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import BlogSection from './dashboard/BlogSection';
import CaseStudySection from './dashboard/CaseStudySection';
import UsersSection from './dashboard/UsersSection';
import SettingsSection from './dashboard/SettingsSection';
import PlaceholderSection from './dashboard/PlaceholderSection';
import HomeSection from './dashboard/HomeSection';
import InsightsSection from './dashboard/InsightsSection';
import ContactsSection from './dashboard/ContactsSection';

const NAV = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'case-study', label: 'Case Study', icon: '📋' },
    { id: 'blogs', label: 'Blogs', icon: '📝' },
    { id: 'insights', label: 'Insights', icon: '💡' },
    { id: 'media', label: 'Media', icon: '🎬' },
    { id: 'partners', label: 'Partners', icon: '🤝' },
    { id: 'footer', label: 'Footer', icon: '🔗' },
    { id: 'users', label: 'Users', icon: '👥', adminOnly: true },
    { id: 'contacts', label: 'Customer Contacts', icon: '📬', adminOnly: true },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
];

const SECTION_LABELS = {
    home: 'Home',
    'case-study': 'Case Study',
    blogs: 'Blogs',
    insights: 'Insights',
    media: 'Media',
    partners: 'Partners',
    footer: 'Footer',
    users: 'Users',
    contacts: 'Customer Contacts',
    settings: 'Settings',
};

export default function Dashboard() {
    const { user, token, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [actionMsg, setActionMsg] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if (!token) navigate('/admin-login', { replace: true });
    }, [token, navigate]);

    const flash = (msg) => {
        setActionMsg(msg);
        setTimeout(() => setActionMsg(''), 3500);
    };

    if (!user) return null;
    const isAdmin = user.role === 'admin' || user.role === 'superadmin';
    const isSuperAdmin = user.role === 'superadmin';

    const visibleNav = NAV.filter(n => !n.adminOnly || isAdmin);

    return (
        <div className="min-h-screen bg-[#070b12] text-white flex overflow-hidden">
            {/* ── Sidebar ─────────────────────────────────── */}
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[#0b1120] border-r border-white/5 flex flex-col shrink-0 transition-all duration-300`}
            >
                {/* Logo */}
                <div className="px-4 py-5 border-b border-white/5 flex items-center justify-between">
                    {sidebarOpen && (
                        <button
                            onClick={() => navigate('/')}
                            className="hover:opacity-80 transition-opacity"
                            title="Go to NijaWorld Home"
                        >
                            <div className="bg-[#0b1120] rounded-lg px-2 py-1">
                                <img
                                    src="/nija-world-green.png"
                                    alt="NijaWorld Logo"
                                    className="h-14 w-auto object-contain"
                                />
                            </div>
                        </button>
                    )}
                    <button
                        onClick={() => setSidebarOpen(v => !v)}
                        className="ml-auto text-gray-500 hover:text-white transition-colors p-1 rounded"
                        title={sidebarOpen ? 'Collapse' : 'Expand'}
                    >
                        {sidebarOpen ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* User info */}
                {sidebarOpen && (
                    <div className="px-5 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#00c896]/20 flex items-center justify-center text-[#00c896] font-bold text-sm shrink-0">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                    isSuperAdmin
                                        ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                                        : isAdmin
                                            ? 'bg-purple-500/20 text-purple-400'
                                            : 'bg-[#00c896]/20 text-[#00c896]'
                                }`}>
                                    {isSuperAdmin ? '⭐ Super Admin' : user.role}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nav */}
                <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
                    {visibleNav.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            title={!sidebarOpen ? item.label : undefined}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === item.id
                                ? 'bg-[#00c896]/12 text-[#00c896] border border-[#00c896]/20'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                }`}
                        >
                            <span className="text-base shrink-0">{item.icon}</span>
                            {sidebarOpen && item.label}
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <div className="px-2 pb-5">
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        title={!sidebarOpen ? 'Logout' : undefined}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent"
                    >
                        <span className="text-base shrink-0">🚪</span>
                        {sidebarOpen && 'Logout'}
                    </button>
                </div>
            </aside>

            {/* ── Main Content ──────────────────────────────── */}
            <main className="flex-1 flex flex-col overflow-hidden min-w-0">
                {/* Top bar */}
                <header className="px-6 py-4 border-b border-white/5 bg-[#090e1a] flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <h1 className="text-lg font-bold text-white">
                            {SECTION_LABELS[activeTab] || 'Dashboard'}
                        </h1>
                        <span className="text-xs text-gray-600 hidden sm:block">/ CMS</span>
                    </div>
                    <AnimatePresence>
                        {actionMsg && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${actionMsg.startsWith('❌')
                                    ? 'bg-red-500/15 text-red-400 border border-red-500/20'
                                    : 'bg-[#00c896]/15 text-[#00c896] border border-[#00c896]/20'
                                    }`}
                            >
                                {actionMsg}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>

                {/* Section content */}
                <div className="flex-1 overflow-y-auto">
                    {activeTab === 'home' && <HomeSection user={user} onNavigate={setActiveTab} />}
                    {activeTab === 'case-study' && <CaseStudySection token={token} user={user} flash={flash} />}
                    {activeTab === 'blogs' && <BlogSection token={token} user={user} flash={flash} />}
                    {activeTab === 'insights' && <InsightsSection token={token} user={user} flash={flash} />}
                    {activeTab === 'media' && <PlaceholderSection title="Media" icon="🎬" description="Manage images, videos, and downloadable assets." />}
                    {activeTab === 'partners' && <PlaceholderSection title="Partners" icon="🤝" description="Manage partner logos, profiles, and relationships." />}
                    {activeTab === 'footer' && <PlaceholderSection title="Footer" icon="🔗" description="Manage footer links, columns, and legal text." />}
                    {activeTab === 'users' && isAdmin && <UsersSection token={token} user={user} flash={flash} />}
                    {activeTab === 'contacts' && isAdmin && <ContactsSection token={token} flash={flash} />}
                    {activeTab === 'settings' && <SettingsSection token={token} user={user} />}
                </div>
            </main>
        </div>
    );
}
