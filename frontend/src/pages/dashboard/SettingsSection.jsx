import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { changePassword } from '../../api/blogApi';

export default function SettingsSection({ token, user }) {
    const isAdmin = user?.role === 'admin';
    const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
    const [pwError, setPwError] = useState('');
    const [pwSuccess, setPwSuccess] = useState('');
    const [pwLoading, setPwLoading] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setPwError('');
        setPwSuccess('');
        if (pwForm.newPassword.length < 8) { setPwError('New password must be at least 8 characters.'); return; }
        if (pwForm.newPassword !== pwForm.confirmPassword) { setPwError('New passwords do not match.'); return; }
        setPwLoading(true);
        try {
            await changePassword(pwForm, token);
            setPwSuccess('✅ Password changed successfully.');
            setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setTimeout(() => setPwSuccess(''), 4000);
        } catch (err) {
            setPwError(err.message);
        } finally {
            setPwLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-lg">
            {/* Change Password */}
            <div className="bg-[#0b1120] border border-white/8 rounded-xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#00c896]/10 border border-[#00c896]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#00c896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-semibold text-white">Change Password</h2>
                        <p className="text-gray-500 text-xs">Update your account password</p>
                    </div>
                </div>

                <form onSubmit={handleChangePassword} className="space-y-4" autoComplete="off">
                    <AnimatePresence>
                        {pwError && (
                            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                                {pwError}
                            </motion.div>
                        )}
                        {pwSuccess && (
                            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="px-4 py-3 rounded-lg bg-[#00c896]/10 border border-[#00c896]/25 text-[#00c896] text-sm">
                                {pwSuccess}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {[
                        { key: 'currentPassword', label: 'Current Password', placeholder: 'Enter your current password' },
                        { key: 'newPassword', label: 'New Password', placeholder: 'Min. 8 characters' },
                        { key: 'confirmPassword', label: 'Confirm New Password', placeholder: 'Re-enter new password' },
                    ].map(({ key, label, placeholder }) => (
                        <div key={key}>
                            <label className="block text-sm text-gray-400 mb-2">{label}</label>
                            <input
                                type="password"
                                value={pwForm[key]}
                                onChange={(e) => setPwForm(f => ({ ...f, [key]: e.target.value }))}
                                placeholder={placeholder}
                                required
                                autoComplete="new-password"
                                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00c896]/50 focus:ring-1 focus:ring-[#00c896]/20 transition-all text-sm"
                            />
                        </div>
                    ))}

                    {pwForm.newPassword.length > 0 && (
                        <div className="flex items-center gap-2 pt-1">
                            {[8, 12, 16].map((len) => (
                                <div key={len} className={`h-1 flex-1 rounded-full transition-all duration-300 ${pwForm.newPassword.length >= len ? 'bg-[#00c896]' : 'bg-white/10'}`} />
                            ))}
                            <span className="text-xs text-gray-500 w-12 text-right">
                                {pwForm.newPassword.length < 8 ? 'Weak' : pwForm.newPassword.length < 12 ? 'Fair' : pwForm.newPassword.length < 16 ? 'Good' : 'Strong'}
                            </span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={pwLoading}
                        className="px-6 py-2.5 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                        {pwLoading && <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />}
                        {pwLoading ? 'Updating...' : 'Update Password'}
                    </button>
                </form>
            </div>

            {/* Account Info */}
            <div className="bg-[#0b1120] border border-white/8 rounded-xl p-6">
                <h3 className="font-medium text-white mb-4 flex items-center gap-2">
                    <span>👤</span> Account Info
                </h3>
                <div className="space-y-3 text-sm">
                    {[
                        { label: 'Name', value: user?.name },
                        { label: 'Email', value: user?.email },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between">
                            <span className="text-gray-500">{label}</span>
                            <span className="text-white font-medium">{value}</span>
                        </div>
                    ))}
                    <div className="flex justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isAdmin ? 'bg-purple-500/20 text-purple-400' : 'bg-[#00c896]/15 text-[#00c896]'}`}>
                            {user?.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
