import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    fetchInsights, createInsight, updateInsight, deleteInsight, toggleInsightPublish,
} from '../../api/insightApi';
import RichTextEditor from '../../components/RichTextEditor';

const EMPTY_FORM = {
    title: '',
    slug: '',
    category: '',
    readTime: '',
    heroHeadline: '',
    excerpt: '',
    content: '',
    tags: '',
    status: 'draft',
    ctaLinks: [],
};

const tagsToString = (arr) => (arr || []).join(', ');
const stringToTags = (str) => str.split(',').map((t) => t.trim()).filter(Boolean);

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export default function InsightsSection({ token, user, flash }) {
    const isAdmin = user?.role === 'admin';

    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingInsight, setEditingInsight] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);
    const [formError, setFormError] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [slugManual, setSlugManual] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchInsights({ token, limit: 100 });
            setInsights(data.insights);
        } catch (e) {
            flash('❌ ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { load(); }, [load]);

    const openNew = () => {
        setEditingInsight(null);
        setForm(EMPTY_FORM);
        setFormError('');
        setSlugManual(false);
        setShowForm(true);
    };

    const openEdit = (insight) => {
        setEditingInsight(insight);
        setForm({
            title: insight.title || '',
            slug: insight.slug || '',
            category: insight.category || '',
            readTime: insight.readTime || '',
            heroHeadline: insight.heroHeadline || '',
            excerpt: insight.excerpt || '',
            content: insight.content || '',
            tags: tagsToString(insight.tags),
            status: insight.status || 'draft',
            ctaLinks: insight.ctaLinks || [],
        });
        setFormError('');
        setSlugManual(true); // editing: treat slug as manual
        setShowForm(true);
    };

    const setField = (key, val) => {
        setForm((f) => {
            const updated = { ...f, [key]: val };
            // Auto-generate slug from title (unless manually set)
            if (key === 'title' && !slugManual) {
                updated.slug = slugify(val);
            }
            return updated;
        });
    };

    const addCta = () => {
        setForm((f) => ({
            ...f,
            ctaLinks: [...f.ctaLinks, { label: '', href: '', variant: 'outline' }],
        }));
    };

    const updateCta = (idx, field, val) => {
        setForm((f) => {
            const ctaLinks = [...f.ctaLinks];
            ctaLinks[idx] = { ...ctaLinks[idx], [field]: val };
            return { ...f, ctaLinks };
        });
    };

    const removeCta = (idx) => {
        setForm((f) => ({
            ...f,
            ctaLinks: f.ctaLinks.filter((_, i) => i !== idx),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        setFormLoading(true);
        const payload = {
            ...form,
            tags: stringToTags(form.tags),
        };
        try {
            if (editingInsight) {
                await updateInsight(editingInsight._id, payload, token);
                flash('✅ Insight updated.');
            } else {
                await createInsight(payload, token);
                flash('✅ Insight created.');
            }
            setShowForm(false);
            setEditingInsight(null);
            setForm(EMPTY_FORM);
            load();
        } catch (e) {
            setFormError(e.message);
        } finally {
            setFormLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteConfirm) return;
        setDeleteLoading(true);
        try {
            await deleteInsight(deleteConfirm, token);
            flash('✅ Insight deleted.');
            setDeleteConfirm(null);
            load();
        } catch (e) {
            flash('❌ ' + e.message);
            setDeleteConfirm(null);
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleTogglePublish = async (id) => {
        try {
            const d = await toggleInsightPublish(id, token);
            flash(`✅ Insight ${d.status === 'published' ? 'published' : 'unpublished'}.`);
            load();
        } catch (e) { flash('❌ ' + e.message); }
    };

    const inputCls = "w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/15 transition-all text-sm";
    const labelCls = "block text-xs text-gray-400 mb-1.5 font-medium";

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">
                    {insights.length} insight{insights.length !== 1 ? 's' : ''}
                </p>
                <button
                    onClick={openNew}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Insight
                </button>
            </div>

            {/* Table header */}
            {!loading && insights.length > 0 && (
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    <span>Title</span>
                    <span>Category</span>
                    <span>Read Time</span>
                    <span>Status</span>
                    <span>Actions</span>
                </div>
            )}

            {/* List */}
            {loading ? (
                <div className="flex justify-center py-24">
                    <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            ) : insights.length === 0 ? (
                <div className="text-center py-24 text-gray-500">
                    <p className="text-5xl mb-4">💡</p>
                    <p className="font-medium text-gray-400 mb-1">No insights yet</p>
                    <p className="text-sm">Click "New Insight" to create your first article.</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {insights.map((insight) => {
                        const isOwner =
                            insight.author?._id === user._id ||
                            insight.author === user._id;
                        const canEdit = isAdmin || isOwner;
                        const updatedDate = new Date(insight.updatedAt).toLocaleDateString();
                        return (
                            <motion.div
                                key={insight._id}
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#0b1120] border border-white/8 rounded-xl p-4 hover:border-white/12 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                    {/* Title + meta */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${insight.status === 'published' ? 'bg-[#00c896]/15 text-[#00c896]' : 'bg-yellow-500/15 text-yellow-400'}`}>
                                                {insight.status}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-white text-sm truncate" title={insight.title}>
                                            {insight.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            Updated {updatedDate}
                                            {insight.author?.name ? ` · ${insight.author.name}` : ''}
                                        </p>
                                    </div>

                                    {/* Category */}
                                    <div className="hidden md:block w-40 shrink-0">
                                        <p className="text-xs text-gray-400 truncate" title={insight.category}>
                                            {insight.category || '—'}
                                        </p>
                                    </div>

                                    {/* Read time */}
                                    <div className="hidden md:block w-24 shrink-0">
                                        <p className="text-xs text-gray-400">{insight.readTime || '—'}</p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                                        {isAdmin && (
                                            <button
                                                onClick={() => handleTogglePublish(insight._id)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${insight.status === 'published'
                                                    ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20'
                                                    : 'bg-[#00c896]/10 text-[#00c896] border-[#00c896]/20 hover:bg-[#00c896]/20'}`}
                                            >
                                                {insight.status === 'published' ? 'Unpublish' : 'Publish'}
                                            </button>
                                        )}
                                        {canEdit && (
                                            <button
                                                onClick={() => openEdit(insight)}
                                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {isAdmin && (
                                            <button
                                                onClick={() => setDeleteConfirm(insight._id)}
                                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* ── Slide-in Editor Form ──────────────────────── */}
            <AnimatePresence>
                {showForm && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowForm(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed right-0 top-0 h-full w-full max-w-3xl bg-[#0b1120] border-l border-white/8 z-50 flex flex-col"
                        >
                            {/* Form header */}
                            <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between shrink-0">
                                <h2 className="font-bold text-white">
                                    {editingInsight ? 'Edit Insight' : 'New Insight'}
                                </h2>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable form body */}
                            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                                <AnimatePresence>
                                    {formError && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                                        >
                                            {formError}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* ── Basic Information ── */}
                                <div className="space-y-1 pb-2">
                                    <h3 className="text-xs font-semibold text-[#00c896] uppercase tracking-widest">Basic Information</h3>
                                </div>

                                {/* Title */}
                                <div>
                                    <label className={labelCls}>Title *</label>
                                    <input
                                        value={form.title}
                                        onChange={(e) => setField('title', e.target.value)}
                                        placeholder="Enter article title"
                                        required
                                        className={inputCls}
                                    />
                                </div>

                                {/* Slug */}
                                <div>
                                    <label className={labelCls}>
                                        Slug
                                        <span className="ml-2 text-gray-600 font-normal normal-case tracking-normal">(auto-generated, editable)</span>
                                    </label>
                                    <input
                                        value={form.slug}
                                        onChange={(e) => { setSlugManual(true); setField('slug', e.target.value); }}
                                        placeholder="url-friendly-slug"
                                        className={inputCls}
                                    />
                                </div>

                                {/* Category + Read Time */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Category</label>
                                        <input
                                            value={form.category}
                                            onChange={(e) => setField('category', e.target.value)}
                                            placeholder="e.g. Supply Chain / Blockchain"
                                            className={inputCls}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Read Time</label>
                                        <input
                                            value={form.readTime}
                                            onChange={(e) => setField('readTime', e.target.value)}
                                            placeholder="e.g. 6–8 minutes"
                                            className={inputCls}
                                        />
                                    </div>
                                </div>

                                {/* Hero Headline */}
                                <div>
                                    <label className={labelCls}>Hero Headline</label>
                                    <input
                                        value={form.heroHeadline}
                                        onChange={(e) => setField('heroHeadline', e.target.value)}
                                        placeholder="Short subtitle shown on the article hero"
                                        className={inputCls}
                                    />
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className={labelCls}>Excerpt <span className="text-gray-600 font-normal">(shown on insight cards)</span></label>
                                    <textarea
                                        rows={3}
                                        value={form.excerpt}
                                        onChange={(e) => setField('excerpt', e.target.value)}
                                        placeholder="Short summary (max 500 characters) displayed on the Insights page card"
                                        className={inputCls + ' resize-y'}
                                    />
                                </div>

                                {/* ── Content ── */}
                                <div className="space-y-1 pt-2 pb-1 border-t border-white/5">
                                    <h3 className="text-xs font-semibold text-[#00c896] uppercase tracking-widest">Article Content</h3>
                                    <p className="text-xs text-gray-500">Use the toolbar to format headings, text size, bold, italic, lists, and blockquotes.</p>
                                </div>

                                <div>
                                    <label className={labelCls}>Content *</label>
                                    <RichTextEditor
                                        value={form.content}
                                        onChange={(html) => setField('content', html)}
                                        placeholder="Start writing your article here…"
                                    />
                                </div>

                                {/* ── Metadata ── */}
                                <div className="space-y-1 pt-2 pb-1 border-t border-white/5">
                                    <h3 className="text-xs font-semibold text-[#00c896] uppercase tracking-widest">Metadata</h3>
                                </div>

                                {/* Tags */}
                                <div>
                                    <label className={labelCls}>Tags / Topics <span className="text-gray-600 font-normal">(comma separated)</span></label>
                                    <input
                                        value={form.tags}
                                        onChange={(e) => setField('tags', e.target.value)}
                                        placeholder="e.g. supply chain, blockchain, governance"
                                        className={inputCls}
                                    />
                                </div>

                                {/* Status (admin only) */}
                                {isAdmin && (
                                    <div>
                                        <label className={labelCls}>Publish Status</label>
                                        <select
                                            value={form.status}
                                            onChange={(e) => setField('status', e.target.value)}
                                            className={inputCls}
                                        >
                                            <option value="draft" className="bg-[#0b1120]">Draft</option>
                                            <option value="published" className="bg-[#0b1120]">Published</option>
                                        </select>
                                    </div>
                                )}

                                {/* ── CTA Section ── */}
                                <div className="space-y-1 pt-2 pb-1 border-t border-white/5">
                                    <h3 className="text-xs font-semibold text-[#00c896] uppercase tracking-widest">CTA Section</h3>
                                    <p className="text-xs text-gray-500">Configure call-to-action buttons shown at the end of the article.</p>
                                </div>

                                <div className="space-y-3">
                                    {form.ctaLinks.map((cta, idx) => (
                                        <div key={idx} className="bg-black/40 border border-white/6 rounded-lg p-3 space-y-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-gray-500">CTA #{idx + 1}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeCta(idx)}
                                                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="col-span-1">
                                                    <input
                                                        value={cta.label}
                                                        onChange={(e) => updateCta(idx, 'label', e.target.value)}
                                                        placeholder="Button label"
                                                        className={inputCls}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <input
                                                        value={cta.href}
                                                        onChange={(e) => updateCta(idx, 'href', e.target.value)}
                                                        placeholder="/path or URL"
                                                        className={inputCls}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <select
                                                        value={cta.variant}
                                                        onChange={(e) => updateCta(idx, 'variant', e.target.value)}
                                                        className={inputCls}
                                                    >
                                                        <option value="primary" className="bg-[#0b1120]">Primary (green)</option>
                                                        <option value="outline" className="bg-[#0b1120]">Outline</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addCta}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#00c896] border border-[#00c896]/20 hover:bg-[#00c896]/10 transition-all"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add CTA Button
                                    </button>
                                </div>
                            </form>

                            {/* Footer actions */}
                            <div className="px-6 py-4 border-t border-white/8 flex items-center justify-end gap-3 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 font-medium text-sm hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={formLoading}
                                    className="px-5 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center gap-2"
                                >
                                    {formLoading && (
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    )}
                                    {editingInsight ? 'Update Insight' : 'Create Insight'}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Delete Confirmation Modal ─────────────── */}
            <AnimatePresence>
                {deleteConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0f1929] border border-white/10 rounded-2xl p-6 w-full max-w-sm"
                        >
                            <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold text-center mb-2">Delete Insight?</h3>
                            <p className="text-gray-500 text-sm text-center mb-6">
                                This action cannot be undone. The insight article will be permanently deleted.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 py-2.5 rounded-lg bg-white/5 text-gray-400 font-medium text-sm hover:bg-white/10 transition-all border border-white/5"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    disabled={deleteLoading}
                                    className="flex-1 py-2.5 rounded-lg bg-red-500/90 text-white font-semibold text-sm hover:bg-red-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {deleteLoading && (
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    )}
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
