import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const EMPTY = { name: '', email: '', company: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(EMPTY);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [serverError, setServerError] = useState('');

    const set = (field, val) => {
        setForm((f) => ({ ...f, [field]: val }));
        if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Full name is required.';
        if (!form.email.trim()) e.email = 'Work email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
        if (!form.message.trim()) e.message = 'Please write a message.';
        else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus('loading');
        setServerError('');

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) {
                // Field-level errors from backend validation
                if (data.errors?.length) {
                    const fieldErrs = {};
                    data.errors.forEach(({ field, msg }) => { fieldErrs[field] = msg; });
                    setErrors(fieldErrs);
                }
                setServerError(data.message || 'Something went wrong. Please try again.');
                setStatus('error');
                return;
            }

            setStatus('success');
            setForm(EMPTY);
        } catch {
            setServerError('Unable to reach the server. Please check your connection and try again.');
            setStatus('error');
        }
    };

    const inputCls = (field) =>
        `w-full px-4 py-3 rounded-lg border ${errors[field]
            ? 'border-red-500 bg-red-900/10'
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
        } text-gray-900 dark:text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition`;

    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            <section className="pt-24 md:pt-32 pb-20 md:pb-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
                            Ready to transform your enterprise? Let's talk.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                        {/* ── Contact Form ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 md:p-8"
                        >
                            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                                Request a Demo
                            </h2>

                            {/* Success state */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-5 p-4 rounded-xl bg-nijaGreen/10 border border-nijaGreen/30 text-nijaGreen text-sm"
                                    >
                                        <p className="font-semibold mb-1">✅ Request received!</p>
                                        <p className="text-nijaGreen/80">Thank you! Your request has been received. A confirmation email has been sent to your inbox.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Server error */}
                            <AnimatePresence>
                                {status === 'error' && serverError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                                    >
                                        {serverError}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit} noValidate>
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => set('name', e.target.value)}
                                        className={inputCls('name')}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => set('email', e.target.value)}
                                        className={inputCls('email')}
                                        placeholder="john@company.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Company <span className="text-gray-400 font-normal">(optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => set('company', e.target.value)}
                                        className={inputCls('company')}
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={form.message}
                                        onChange={(e) => set('message', e.target.value)}
                                        className={inputCls('message')}
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-nijaGreen hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending…
                                        </>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* ── Contact Info ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div>
                                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-gray-900 dark:text-white">
                                    Enterprise Support
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                                    Our team is available 24/7 to support your mission-critical operations.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-nijaGreen/10 flex items-center justify-center">📧</div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                            <a href="mailto:reach@nija.world" className="font-medium text-gray-900 dark:text-white hover:text-nijaGreen transition">reach@nija.world</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-nijaPurple/10 flex items-center justify-center">📞</div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                            <a href="tel:+919739666347" className="font-medium text-gray-900 dark:text-white hover:text-nijaGreen transition">+91 97396 66347</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-nijaGreen/10 to-nijaPurple/10 border border-nijaGreen/20 dark:border-nijaGreen/30 rounded-2xl p-4 sm:p-5 md:p-6">
                                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-gray-900 dark:text-white">
                                    Schedule a Call
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">
                                    Prefer to talk directly with our solution architects? Book a consultation.
                                </p>
                                <button className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition">
                                    View Calendar
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
