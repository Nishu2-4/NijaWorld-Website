import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    fetchBlogs, createBlog, updateBlog, deleteBlog, togglePublish,
} from '../../api/blogApi';

const EMPTY_FORM = { title: '', excerpt: '', content: '', tags: '', status: 'draft' };
const tagsToString = (arr) => (arr || []).join(', ');
const stringToTags = (str) => str.split(',').map((t) => t.trim()).filter(Boolean);

export default function BlogSection({ token, user, flash }) {
    const isAdmin = user?.role === 'admin';

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);
    const [formError, setFormError] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchBlogs({ token, limit: 100 });
            setBlogs(data.blogs);
        } catch (e) {
            flash('❌ ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { load(); }, [load]);

    const openNew = () => {
        setEditingBlog(null);
        setForm(EMPTY_FORM);
        setFormError('');
        setShowForm(true);
    };

    const openEdit = (blog) => {
        setEditingBlog(blog);
        setForm({
            title: blog.title || '',
            excerpt: blog.excerpt || '',
            content: blog.content || '',
            tags: tagsToString(blog.tags),
            status: blog.status || 'draft',
        });
        setFormError('');
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        setFormLoading(true);
        const payload = { ...form, tags: stringToTags(form.tags) };
        try {
            if (editingBlog) {
                await updateBlog(editingBlog._id, payload, token);
                flash('✅ Blog updated.');
            } else {
                await createBlog(payload, token);
                flash('✅ Blog created.');
            }
            setShowForm(false);
            setEditingBlog(null);
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
            await deleteBlog(deleteConfirm, token);
            flash('✅ Blog deleted.');
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
            const d = await togglePublish(id, token);
            flash(`✅ Blog ${d.status === 'published' ? 'published' : 'unpublished'}.`);
            load();
        } catch (e) { flash('❌ ' + e.message); }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">{blogs.length} blog{blogs.length !== 1 ? 's' : ''}</p>
                <button
                    onClick={openNew}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Blog
                </button>
            </div>

            {/* Blog list */}
            {loading ? (
                <div className="flex justify-center py-24">
                    <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            ) : blogs.length === 0 ? (
                <div className="text-center py-24 text-gray-500">
                    <p className="text-5xl mb-4">📝</p>
                    <p className="font-medium text-gray-400 mb-1">No blogs yet</p>
                    <p className="text-sm">Click "New Blog" to write your first post.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {blogs.map((blog) => {
                        const isOwner = blog.author?._id === user._id || blog.author === user._id;
                        const canEdit = isAdmin || isOwner;
                        return (
                            <motion.div
                                key={blog._id}
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#0b1120] border border-white/8 rounded-xl p-5 flex items-start justify-between gap-4 hover:border-white/12 transition-all"
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${blog.status === 'published' ? 'bg-[#00c896]/15 text-[#00c896]' : 'bg-yellow-500/15 text-yellow-400'}`}>
                                            {blog.status}
                                        </span>
                                        {blog.tags?.map(t => (
                                            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">{t}</span>
                                        ))}
                                    </div>
                                    <h3 className="font-semibold text-white mb-1 truncate">{blog.title}</h3>
                                    <p className="text-gray-500 text-xs">By {blog.author?.name || 'Unknown'} · {new Date(blog.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                                    {isAdmin && (
                                        <button
                                            onClick={() => handleTogglePublish(blog._id)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${blog.status === 'published' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20' : 'bg-[#00c896]/10 text-[#00c896] border-[#00c896]/20 hover:bg-[#00c896]/20'}`}
                                        >
                                            {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                                        </button>
                                    )}
                                    {canEdit && (
                                        <button
                                            onClick={() => openEdit(blog)}
                                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {isAdmin && (
                                        <button
                                            onClick={() => setDeleteConfirm(blog._id)}
                                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* ── Slide-in Form ─────────────────────── */}
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
                            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[#0b1120] border-l border-white/8 z-50 flex flex-col"
                        >
                            <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between shrink-0">
                                <h2 className="font-bold text-white">{editingBlog ? 'Edit Blog' : 'New Blog'}</h2>
                                <button onClick={() => setShowForm(false)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                                <AnimatePresence>
                                    {formError && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                                            {formError}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {[
                                    { label: 'Title *', key: 'title', type: 'input', placeholder: 'Enter title' },
                                    { label: 'Excerpt', key: 'excerpt', type: 'textarea', rows: 2, placeholder: 'Enter excerpt' },
                                    { label: 'Content *', key: 'content', type: 'textarea', rows: 12, placeholder: 'Enter content' },
                                    { label: 'Tags (comma separated)', key: 'tags', type: 'input', placeholder: 'e.g. blockchain, ai' },
                                ].map(({ label, key, type, rows, placeholder }) => (
                                    <div key={key}>
                                        <label className="block text-xs text-gray-400 mb-1.5 font-medium">{label}</label>
                                        {type === 'input' ? (
                                            <input
                                                value={form[key]}
                                                onChange={(e) => { const val = e.target.value; setForm(f => ({ ...f, [key]: val })); }}
                                                placeholder={placeholder}
                                                className="w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/15 transition-all text-sm"
                                            />
                                        ) : (
                                            <textarea
                                                rows={rows}
                                                value={form[key]}
                                                onChange={(e) => { const val = e.target.value; setForm(f => ({ ...f, [key]: val })); }}
                                                placeholder={placeholder}
                                                className="w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/15 transition-all text-sm resize-y font-mono"
                                            />
                                        )}
                                    </div>
                                ))}

                                {isAdmin && (
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1.5 font-medium">Status</label>
                                        <select
                                            value={form.status}
                                            onChange={(e) => setForm(f => ({ ...f, status: e.target.value }))}
                                            className="w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00c896]/50 text-sm"
                                        >
                                            <option value="draft" className="bg-[#0b1120]">Draft</option>
                                            <option value="published" className="bg-[#0b1120]">Published</option>
                                        </select>
                                    </div>
                                )}
                            </form>

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
                                    {formLoading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                    {editingBlog ? 'Update Blog' : 'Create Blog'}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Delete confirmation modal */}
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
                            <h3 className="text-white font-semibold text-center mb-2">Delete Blog?</h3>
                            <p className="text-gray-500 text-sm text-center mb-6">This action cannot be undone. The blog post will be permanently removed.</p>
                            <div className="flex gap-3">
                                <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 rounded-lg bg-white/5 text-gray-400 font-medium text-sm hover:bg-white/10 transition-all border border-white/5">Cancel</button>
                                <button onClick={handleDelete} disabled={deleteLoading} className="flex-1 py-2.5 rounded-lg bg-red-500/90 text-white font-semibold text-sm hover:bg-red-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                                    {deleteLoading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
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
