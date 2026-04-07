import { motion } from 'framer-motion';

const QUICK_LINKS = [
    { id: 'case-study', label: 'Case Studies', icon: '📋', desc: 'Create & manage case studies' },
    { id: 'blogs', label: 'Blogs', icon: '📝', desc: 'Write & publish blog posts' },
    { id: 'insights', label: 'Insights', icon: '💡', desc: 'Thought leadership content' },
    { id: 'media', label: 'Media', icon: '🎬', desc: 'Images, videos & assets' },
    { id: 'partners', label: 'Partners', icon: '🤝', desc: 'Partner logos & profiles' },
    { id: 'settings', label: 'Settings', icon: '⚙️', desc: 'Account & password settings' },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay },
});

export default function HomeSection({ user, onNavigate }) {
    const isAdmin = user?.role === 'admin';
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8">

            {/* ── Welcome banner ────────────────────────────── */}
            <motion.div {...fadeUp(0)}>
                <h2 className="text-3xl font-bold text-white">
                    {greeting},{' '}
                    <span className="text-[#00c896]">{user?.name?.split(' ')[0] || 'there'}</span> 👋
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                    Welcome back to the NijaWorld CMS. Here's a quick overview of your account.
                </p>
            </motion.div>

            {/* ── Account Info card ─────────────────────────── */}
            <motion.div
                {...fadeUp(0.1)}
                className="bg-[#0b1120] border border-white/8 rounded-2xl overflow-hidden"
            >
                {/* Card header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00c896]/15 border border-[#00c896]/25 flex items-center justify-center text-[#00c896] font-bold text-lg">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="text-white font-semibold text-base">Account Info</p>
                        <p className="text-gray-500 text-xs">Your current session details</p>
                    </div>
                </div>

                {/* Rows */}
                {[
                    { label: 'Name', value: user?.name },
                    { label: 'Email', value: user?.email },
                    {
                        label: 'Role',
                        value: (
                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${isAdmin
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/25'
                                    : 'bg-[#00c896]/15 text-[#00c896] border border-[#00c896]/25'
                                }`}>
                                {user?.role}
                            </span>
                        ),
                    },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        className="flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0"
                    >
                        <span className="text-gray-500 text-sm">{label}</span>
                        <span className="text-white text-sm font-medium">{value}</span>
                    </div>
                ))}
            </motion.div>

            {/* ── Quick-nav grid ────────────────────────────── */}
            <motion.div {...fadeUp(0.2)}>
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3 font-medium">Quick Access</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {QUICK_LINKS
                        .filter(l => l.id !== 'users' || isAdmin)
                        .map((link, i) => (
                            <motion.button
                                key={link.id}
                                onClick={() => onNavigate(link.id)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 + i * 0.05 }}
                                className="text-left p-4 rounded-xl bg-[#0b1120] border border-white/8 hover:border-[#00c896]/30 hover:bg-[#00c896]/5 transition-all group"
                            >
                                <span className="text-2xl">{link.icon}</span>
                                <p className="text-white text-sm font-semibold mt-2 group-hover:text-[#00c896] transition-colors">
                                    {link.label}
                                </p>
                                <p className="text-gray-600 text-xs mt-0.5">{link.desc}</p>
                            </motion.button>
                        ))}
                </div>
            </motion.div>
        </div>
    );
}
