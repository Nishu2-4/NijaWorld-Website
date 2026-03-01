import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    fetchCaseStudies,
    createCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    toggleCaseStudyPublish,
} from '../../api/caseStudyApi';

const EMPTY_FORM = {
    title: '',
    industry: '',
    kpiHighlight: '',
    tags: '',
    clientContext: '',
    outcomeSummary: '',
    executiveSummary: '',
    businessChallenge: '',
    solutionOverview: '',
    implementationApproach: '',
    results: '',
    whatsNext: '',
    status: 'draft',
};

const tagsToString = (arr) => (arr || []).join(', ');
const stringToTags = (str) => str.split(',').map((t) => t.trim()).filter(Boolean);

// Predefined tag color map for consistent pill colors
const TAG_COLORS = [
    'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    'bg-violet-500/15 text-violet-400 border-violet-500/25',
    'bg-amber-500/15 text-amber-400 border-amber-500/25',
    'bg-rose-500/15 text-rose-400 border-rose-500/25',
    'bg-blue-500/15 text-blue-400 border-blue-500/25',
];
const getTagColor = (tag) => TAG_COLORS[Math.abs(tag.charCodeAt(0)) % TAG_COLORS.length];

// ─── Standalone Field — MUST be outside CaseStudySection to avoid remounting ───
function Field({ label, name, type = 'input', rows = 3, placeholder = '', value, onChange }) {
    return (
        <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">{label}</label>
            {type === 'input' ? (
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/15 transition-all text-sm"
                />
            ) : (
                <textarea
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-black border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/15 transition-all text-sm resize-y"
                />
            )}
        </div>
    );
}

export default function CaseStudySection({ token, user, flash }) {
    const navigate = useNavigate();
    const isAdmin = user?.role === 'admin';

    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingCs, setEditingCs] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);
    const [formError, setFormError] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [step, setStep] = useState(1); // multi-step form: 1=basic, 2=content

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchCaseStudies({ token, limit: 100 });
            setCaseStudies(data.caseStudies);
        } catch (e) {
            flash('❌ ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { load(); }, [load]);

    const openNew = () => {
        setEditingCs(null);
        setForm(EMPTY_FORM);
        setFormError('');
        setStep(1);
        setShowForm(true);
    };

    const openEdit = (cs) => {
        setEditingCs(cs);
        setForm({
            title: cs.title || '',
            industry: cs.industry || '',
            kpiHighlight: cs.kpiHighlight || '',
            tags: tagsToString(cs.tags),
            clientContext: cs.clientContext || '',
            outcomeSummary: cs.outcomeSummary || '',
            executiveSummary: cs.executiveSummary || '',
            businessChallenge: cs.businessChallenge || '',
            solutionOverview: cs.solutionOverview || '',
            implementationApproach: cs.implementationApproach || '',
            results: cs.results || '',
            whatsNext: cs.whatsNext || '',
            status: cs.status || 'draft',
        });
        setFormError('');
        setStep(1);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        setFormLoading(true);
        const payload = { ...form, tags: stringToTags(form.tags) };
        try {
            if (editingCs) {
                await updateCaseStudy(editingCs._id, payload, token);
                flash('✅ Case study updated.');
            } else {
                await createCaseStudy(payload, token);
                flash('✅ Case study created.');
            }
            setShowForm(false);
            setEditingCs(null);
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
            await deleteCaseStudy(deleteConfirm, token);
            flash('✅ Case study deleted.');
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
            const d = await toggleCaseStudyPublish(id, token);
            flash(`✅ Case study ${d.status === 'published' ? 'published' : 'unpublished'}.`);
            load();
        } catch (e) {
            flash('❌ ' + e.message);
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-gray-500 text-sm">{caseStudies.length} case stud{caseStudies.length !== 1 ? 'ies' : 'y'}</p>
                </div>
                <button
                    onClick={openNew}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Case Study
                </button>
            </div>

            {/* Case Study Grid */}
            {loading ? (
                <div className="flex justify-center py-24">
                    <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            ) : caseStudies.length === 0 ? (
                <div className="text-center py-24 text-gray-500">
                    <p className="text-5xl mb-4">📋</p>
                    <p className="font-medium text-gray-400 mb-1">No case studies yet</p>
                    <p className="text-sm">Click "Add New Case Study" to create your first one.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {caseStudies.map((cs) => {
                        const isOwner = cs.createdBy?._id === user._id || cs.createdBy === user._id;
                        const canEdit = isAdmin || isOwner;
                        return (
                            <motion.div
                                key={cs._id}
                                layout
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#0b1120] border border-white/8 rounded-xl p-5 flex flex-col gap-4 hover:border-[#00c896]/25 transition-all group"
                            >
                                {/* Card Header */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#00c896]/10 border border-[#00c896]/20 flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-white text-sm leading-snug line-clamp-2">{cs.title}</h3>
                                        <span className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${cs.status === 'published' ? 'bg-[#00c896]/15 text-[#00c896]' : 'bg-yellow-500/15 text-yellow-400'}`}>
                                            {cs.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Tags */}
                                {cs.tags?.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {cs.tags.map((t) => (
                                            <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full border font-medium uppercase tracking-wide ${getTagColor(t)}`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Divider */}
                                <div className="border-t border-white/5" />

                                {/* Meta */}
                                <div className="space-y-1.5 text-sm">
                                    {cs.industry && (
                                        <div className="flex items-start gap-2 text-gray-400">
                                            <span className="text-[#00c896] mt-0.5">●</span>
                                            <span><span className="font-medium text-gray-300">Industry:</span> {cs.industry}</span>
                                        </div>
                                    )}
                                    {cs.kpiHighlight && (
                                        <div className="flex items-start gap-2 text-gray-400">
                                            <span className="text-[#00c896] mt-0.5">●</span>
                                            <span><span className="font-medium text-gray-300">KPI Highlight:</span> {cs.kpiHighlight}</span>
                                        </div>
                                    )}
                                </div>

                                {/* CTA + Actions */}
                                <div className="mt-auto space-y-2">
                                    <a
                                        href={`/case-studies/${cs.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center py-2.5 rounded-lg border border-[#00c896]/40 text-[#00c896] text-sm font-medium hover:bg-[#00c896]/10 transition-all"
                                    >
                                        Read Case Study →
                                    </a>
                                    <div className="flex gap-2">
                                        {isAdmin && (
                                            <button
                                                onClick={() => handleTogglePublish(cs._id)}
                                                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all border ${cs.status === 'published' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20' : 'bg-[#00c896]/10 text-[#00c896] border-[#00c896]/20 hover:bg-[#00c896]/20'}`}
                                            >
                                                {cs.status === 'published' ? 'Unpublish' : 'Publish'}
                                            </button>
                                        )}
                                        {canEdit && (
                                            <button
                                                onClick={() => openEdit(cs)}
                                                className="flex-1 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {isAdmin && (
                                            <button
                                                onClick={() => setDeleteConfirm(cs._id)}
                                                className="flex-1 py-1.5 rounded-lg text-xs font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all border border-red-500/20"
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

            {/* ── Slide-in Form Panel ─────────────────── */}
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
                            {/* Panel header */}
                            <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between shrink-0">
                                <div>
                                    <h2 className="font-bold text-white">{editingCs ? 'Edit Case Study' : 'New Case Study'}</h2>
                                    <p className="text-gray-500 text-xs mt-0.5">Step {step} of 2 — {step === 1 ? 'Basic Info' : 'Full Content'}</p>
                                </div>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Step tabs */}
                            <div className="flex border-b border-white/8 shrink-0">
                                {[{ n: 1, label: 'Basic Info' }, { n: 2, label: 'Full Content' }].map(({ n, label }) => (
                                    <button
                                        key={n}
                                        onClick={() => setStep(n)}
                                        className={`flex-1 py-3 text-sm font-medium transition-all ${step === n ? 'text-[#00c896] border-b-2 border-[#00c896]' : 'text-gray-500 hover:text-gray-300'}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                                <AnimatePresence>
                                    {formError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                                        >
                                            {formError}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {step === 1 && (
                                    <>
                                        <Field label="Title *" name="title" placeholder="Enter title" value={form.title} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, title: v })); }} />
                                        <Field label="Industry" name="industry" placeholder="Enter industry" value={form.industry} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, industry: v })); }} />
                                        <Field label="KPI Highlight" name="kpiHighlight" placeholder="Enter KPI highlight" value={form.kpiHighlight} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, kpiHighlight: v })); }} />
                                        <Field label="Tags (comma separated)" name="tags" placeholder="e.g. blockchain, ai" value={form.tags} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, tags: v })); }} />
                                        <Field label="Client Context" name="clientContext" type="textarea" rows={3} placeholder="Enter client context" value={form.clientContext} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, clientContext: v })); }} />
                                        <Field label="Outcome Summary" name="outcomeSummary" type="textarea" rows={3} placeholder="Enter outcome summary" value={form.outcomeSummary} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, outcomeSummary: v })); }} />
                                        {isAdmin && (
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Status</label>
                                                <select
                                                    value={form.status}
                                                    onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, status: v })); }}
                                                    className="w-full bg-white/4 border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00c896]/50 text-sm"
                                                >
                                                    <option value="draft" className="bg-[#0b1120]">Draft</option>
                                                    <option value="published" className="bg-[#0b1120]">Published</option>
                                                </select>
                                            </div>
                                        )}
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <Field label="Executive Summary" name="executiveSummary" type="textarea" rows={4} placeholder="Enter executive summary" value={form.executiveSummary} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, executiveSummary: v })); }} />
                                        <Field label="Business Challenge" name="businessChallenge" type="textarea" rows={4} placeholder="Enter business challenge" value={form.businessChallenge} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, businessChallenge: v })); }} />
                                        <Field label="Solution Overview" name="solutionOverview" type="textarea" rows={4} placeholder="Enter solution overview" value={form.solutionOverview} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, solutionOverview: v })); }} />
                                        <Field label="Implementation Approach" name="implementationApproach" type="textarea" rows={4} placeholder="Enter implementation approach" value={form.implementationApproach} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, implementationApproach: v })); }} />
                                        <Field label="Results" name="results" type="textarea" rows={4} placeholder="Enter results" value={form.results} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, results: v })); }} />
                                        <Field label="What's Next" name="whatsNext" type="textarea" rows={3} placeholder="Enter what's next" value={form.whatsNext} onChange={(e) => { const v = e.target.value; setForm(f => ({ ...f, whatsNext: v })); }} />
                                    </>
                                )}
                            </form>

                            {/* Footer actions */}
                            <div className="px-6 py-4 border-t border-white/8 flex items-center justify-between shrink-0">
                                <div className="flex gap-2">
                                    {step === 2 && (
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 font-medium text-sm hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                        >
                                            ← Back
                                        </button>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 font-medium text-sm hover:bg-white/10 hover:text-white transition-all border border-white/5"
                                    >
                                        Cancel
                                    </button>
                                    {step === 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => { if (!form.title.trim()) { setFormError('Title is required.'); return; } setFormError(''); setStep(2); }}
                                            className="px-5 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                                        >
                                            Next →
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={formLoading}
                                            className="px-5 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center gap-2"
                                        >
                                            {formLoading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                                            {editingCs ? 'Update' : 'Create'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Delete Confirmation Modal ───────────── */}
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
                            <h3 className="text-white font-semibold text-center mb-2">Delete Case Study?</h3>
                            <p className="text-gray-500 text-sm text-center mb-6">This action cannot be undone. The case study will be permanently removed.</p>
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
