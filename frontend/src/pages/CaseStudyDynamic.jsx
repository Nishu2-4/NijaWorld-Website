import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchCaseStudyBySlug } from '../api/caseStudyApi';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
    Building2, BookOpen, Zap, Wrench, Map, TrendingUp, Rocket, FileQuestion,
    Factory, BarChart2, CheckCircle
} from 'lucide-react';

const TAG_COLORS = [
    'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    'bg-violet-500/15 text-violet-400 border-violet-500/25',
    'bg-amber-500/15 text-amber-400 border-amber-500/25',
    'bg-rose-500/15 text-rose-400 border-rose-500/25',
    'bg-blue-500/15 text-blue-400 border-blue-500/25',
];
const getTagColor = (tag) => TAG_COLORS[Math.abs(tag.charCodeAt(0)) % TAG_COLORS.length];

/* ── Section wrapper ──────────────────────────────────────────────────── */
function Section({ title, children, icon }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
        >
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-5">
                {icon && (
                    <div className="w-9 h-9 rounded-xl bg-[#00c896]/10 border border-[#00c896]/25 flex items-center justify-center shrink-0 text-[#00c896]">
                        {icon}
                    </div>
                )}
                <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
            </div>

            {/* Content — capped width for readability (~70 ch) */}
            <div className="border-l-2 border-[#00c896]/30 pl-6 max-w-3xl">
                {children}
            </div>
        </motion.section>
    );
}

/* ── Readable text block ──────────────────────────────────────────────── */
function ContentBlock({ text }) {
    if (!text) return null;
    return (
        <div className="text-gray-400 text-[17px] leading-[1.85] whitespace-pre-line">
            {text}
        </div>
    );
}


/* ── Main component ───────────────────────────────────────────────────── */
export default function CaseStudyDynamic() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [cs, setCs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchCaseStudyBySlug(slug);
                setCs(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    /* Loading */
    if (loading) {
        return (
            <div className="min-h-screen bg-[#070b12] flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
                <Footer />
            </div>
        );
    }

    /* Error / not found */
    if (error || !cs) {
        return (
            <div className="min-h-screen bg-[#070b12] flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                        <FileQuestion className="w-8 h-8 text-gray-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Case Study Not Found</h1>
                    <p className="text-gray-500 mb-6 text-sm">{error || 'This case study does not exist or has been removed.'}</p>
                    <button
                        onClick={() => navigate('/case-studies')}
                        className="px-5 py-2.5 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                    >
                        ← Back to Case Studies
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#070b12] text-white">
            <Navbar />

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden border-b border-white/5">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00c896]/4 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-8 pt-28 pb-20 relative z-10">

                    {/* Icon + Title row */}
                    <div className="flex items-start gap-5 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#00c896]/10 border border-[#00c896]/25 flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-8 h-8 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
                            {cs.title}
                        </h1>
                    </div>

                    {/* Tags */}
                    {cs.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                            {cs.tags.map((t) => (
                                <span key={t} className={`text-xs px-3 py-1 rounded-full border font-semibold uppercase tracking-wider ${getTagColor(t)}`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Divider */}
                    <div className="border-t border-white/8 mb-10" />

                    {/* KPI strip — icon + label + value */}
                    <div className="flex flex-col gap-5">
                        {cs.industry && (
                            <div className="flex items-start gap-3">
                                <Factory size={16} className="text-[#00c896] mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-0.5">Industry</p>
                                    <p className="text-white font-medium text-sm">{cs.industry}</p>
                                </div>
                            </div>
                        )}
                        {cs.kpiHighlight && (
                            <div className="flex items-start gap-3">
                                <BarChart2 size={16} className="text-[#00c896] mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-0.5">KPI Highlight</p>
                                    <p className="text-white font-medium text-sm">{cs.kpiHighlight}</p>
                                </div>
                            </div>
                        )}
                        {cs.outcomeSummary && (
                            <div className="flex items-start gap-3">
                                <CheckCircle size={16} className="text-[#00c896] mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-0.5">Outcome Summary</p>
                                    <p className="text-gray-300 text-sm">{cs.outcomeSummary}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Body ─────────────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-8 pt-6 pb-20">

                {cs.clientContext && (
                    <Section title="Client Context" icon={<Building2 size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.clientContext} />
                    </Section>
                )}

                {cs.executiveSummary && (
                    <Section title="Executive Summary" icon={<BookOpen size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.executiveSummary} />
                    </Section>
                )}

                {cs.businessChallenge && (
                    <Section title="Business Challenge" icon={<Zap size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.businessChallenge} />
                    </Section>
                )}

                {cs.solutionOverview && (
                    <Section title="Solution Overview" icon={<Wrench size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.solutionOverview} />
                    </Section>
                )}

                {cs.implementationApproach && (
                    <Section title="Implementation Approach" icon={<Map size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.implementationApproach} />
                    </Section>
                )}

                {cs.results && (
                    <Section title="Results" icon={<TrendingUp size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.results} />
                    </Section>
                )}

                {cs.whatsNext && (
                    <Section title="What's Next" icon={<Rocket size={16} strokeWidth={1.8} />}>
                        <ContentBlock text={cs.whatsNext} />
                    </Section>
                )}

                {/* Footer nav */}
                <div className="border-t border-white/8 pt-12 mt-4 flex items-center justify-between flex-wrap gap-4">
                    <Link
                        to="/case-studies"
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        All Case Studies
                    </Link>
                    <div className="text-xs text-gray-600">
                        {cs.createdBy?.name && `Published by ${cs.createdBy.name}`}
                        {cs.createdAt && ` · ${new Date(cs.createdAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
