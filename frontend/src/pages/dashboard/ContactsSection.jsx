import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchContacts, deleteContact } from '../../api/contactApi';

// ── Helpers ────────────────────────────────────────────────────────────────────

const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        + ' · '
        + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};

const SMTP_BADGE = (sent) =>
    sent
        ? 'bg-[#00c896]/15 text-[#00c896] border border-[#00c896]/25'
        : 'bg-red-500/10 text-red-400 border border-red-500/20';

// ── Main Component ──────────────────────────────────────────────────────────────

export default function ContactsSection({ token, flash }) {
    const [contacts, setContacts]   = useState([]);
    const [total, setTotal]         = useState(0);
    const [page, setPage]           = useState(1);
    const [pages, setPages]         = useState(1);
    const [loading, setLoading]     = useState(false);
    const [search, setSearch]       = useState('');
    const [expanded, setExpanded]   = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null); // id of row pending confirm

    const LIMIT = 20;

    const load = useCallback(async (p = 1) => {
        setLoading(true);
        try {
            const data = await fetchContacts(token, p, LIMIT);
            setContacts(data.contacts);
            setTotal(data.total);
            setPage(data.page);
            setPages(data.pages);
        } catch (e) {
            flash('❌ ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { load(1); }, [load]);

    const handleDelete = async (id) => {
        if (deleteConfirm !== id) {
            // First click — arm the button
            setDeleteConfirm(id);
            setTimeout(() => setDeleteConfirm(null), 3000); // auto-disarm after 3s
            return;
        }
        // Second click — confirmed
        setDeleteConfirm(null);
        try {
            await deleteContact(token, id);
            flash('✅ Contact deleted.');
            // Remove from local state instantly, then reload
            setContacts((prev) => prev.filter((c) => c._id !== id));
            setTotal((t) => t - 1);
        } catch (e) {
            flash('❌ ' + e.message);
        }
    };

    // ── Client-side search filter ────────────────────────────────────────────
    const filtered = contacts.filter((c) => {
        const q = search.toLowerCase();
        return !q
            || c.name.toLowerCase().includes(q)
            || c.email.toLowerCase().includes(q)
            || (c.company || '').toLowerCase().includes(q);
    });

    const toggleExpand = (id) => setExpanded((cur) => (cur === id ? null : id));

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className="p-6 max-w-full">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">📬</span>
                    <div>
                        <h2 className="text-white font-semibold text-base leading-tight">Customer Contacts</h2>
                        <p className="text-gray-500 text-xs">{total} submission{total !== 1 ? 's' : ''} received</p>
                    </div>
                </div>

                {/* Search */}
                <div className="sm:ml-auto relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name, email or company…"
                        className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00c896]/40 w-full sm:w-72 transition-colors"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                </div>

                {/* Refresh */}
                <button
                    onClick={() => load(page)}
                    title="Refresh"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 text-sm transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                </button>
            </div>

            {/* Loading spinner */}
            {loading ? (
                <div className="flex justify-center py-24">
                    <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <span className="text-5xl mb-4 opacity-30">📭</span>
                    <p className="text-gray-500 text-sm">
                        {search ? 'No contacts match your search.' : 'No contact submissions yet.'}
                    </p>
                </div>
            ) : (
                <>
                    {/* Table */}
                    <div className="rounded-xl border border-white/8 overflow-hidden">
                        {/* Table header */}
                        <div className="grid grid-cols-[minmax(140px,1fr)_minmax(160px,1.2fr)_minmax(120px,0.8fr)_minmax(200px,2fr)_100px_130px_28px_60px] gap-0 bg-[#0b1120] border-b border-white/8 px-4 py-2.5">
                            {['Name', 'Email', 'Company', 'Message', 'SMTP', 'Received', '', ''].map((h, i) => (
                                <span key={i} className="text-xs font-semibold text-gray-500 uppercase tracking-wide truncate">{h}</span>
                            ))}
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-white/5">
                            {filtered.map((c) => (
                                <div key={c._id}>
                                    {/* Summary row */}
                                    <div
                                        className="grid grid-cols-[minmax(140px,1fr)_minmax(160px,1.2fr)_minmax(120px,0.8fr)_minmax(200px,2fr)_100px_130px_28px_60px] gap-0 px-4 py-3 hover:bg-white/3 transition-colors cursor-pointer items-center"
                                        onClick={() => toggleExpand(c._id)}
                                    >
                                        {/* Name */}
                                        <div className="flex items-center gap-2 min-w-0">
                                            <div className="w-7 h-7 rounded-full bg-[#00c896]/15 flex items-center justify-center text-[#00c896] font-bold text-xs shrink-0">
                                                {c.name.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-white text-sm font-medium truncate">{c.name}</span>
                                        </div>

                                        {/* Email */}
                                        <a
                                            href={`mailto:${c.email}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-[#00c896] text-sm hover:underline truncate block"
                                        >
                                            {c.email}
                                        </a>

                                        {/* Company */}
                                        <span className="text-gray-400 text-sm truncate">
                                            {c.company || <span className="text-gray-700 italic">—</span>}
                                        </span>

                                        {/* Message preview */}
                                        <span className="text-gray-400 text-sm truncate pr-2">
                                            {c.message.length > 80 ? c.message.slice(0, 80) + '…' : c.message}
                                        </span>

                                        {/* SMTP badges */}
                                        <div className="flex flex-col gap-1">
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium w-fit ${SMTP_BADGE(c.teamEmailSent)}`}>
                                                {c.teamEmailSent ? '✓ Team' : '✗ Team'}
                                            </span>
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium w-fit ${SMTP_BADGE(c.userEmailSent)}`}>
                                                {c.userEmailSent ? '✓ User' : '✗ User'}
                                            </span>
                                        </div>

                                        {/* Date */}
                                        <span className="text-gray-600 text-xs">{formatDate(c.createdAt)}</span>

                                        {/* Chevron */}
                                        <span className={`text-gray-600 transition-transform duration-200 ${expanded === c._id ? 'rotate-90' : ''}`}>›</span>

                                        {/* Delete button */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDelete(c._id); }}
                                            title={deleteConfirm === c._id ? 'Click again to confirm delete' : 'Delete this entry'}
                                            className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all ${
                                                deleteConfirm === c._id
                                                    ? 'bg-red-500/25 text-red-300 border-red-500/40 animate-pulse'
                                                    : 'bg-red-500/8 text-red-500 border-red-500/15 hover:bg-red-500/20 hover:text-red-300'
                                            }`}
                                        >
                                            {deleteConfirm === c._id ? 'Sure?' : <span className="text-base">🗑</span>}
                                        </button>
                                    </div>

                                    {/* Expanded message */}
                                    <AnimatePresence>
                                        {expanded === c._id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-[#0b1120] border-t border-white/6 mx-4 mb-3 mt-0 rounded-b-xl p-4">
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Full Message</p>
                                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{c.message}</p>
                                                    <div className="mt-3 pt-3 border-t border-white/6 flex items-center gap-4 text-xs text-gray-600">
                                                        <span>IP: {c.ip || '—'}</span>
                                                        <span>Submitted: {formatDate(c.createdAt)}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    {pages > 1 && !search && (
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/6">
                            <span className="text-xs text-gray-600">
                                Page {page} of {pages} · {total} total
                            </span>
                            <div className="flex gap-2">
                                <button
                                    disabled={page <= 1}
                                    onClick={() => load(page - 1)}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    ← Previous
                                </button>
                                <button
                                    disabled={page >= pages}
                                    onClick={() => load(page + 1)}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
