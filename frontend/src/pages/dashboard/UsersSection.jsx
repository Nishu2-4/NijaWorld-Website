import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchUsers, registerUser, toggleUserStatus } from '../../api/blogApi';

export default function UsersSection({ token, user, flash }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'editor' });
    const [userFormError, setUserFormError] = useState('');
    const [userFormLoading, setUserFormLoading] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchUsers(token);
            setUsers(data);
        } catch (e) {
            flash('❌ ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => { load(); }, [load]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setUserFormError('');
        setUserFormLoading(true);
        try {
            await registerUser(userForm, token);
            flash('✅ User created successfully.');
            setUserForm({ name: '', email: '', password: '', role: 'editor' });
            setShowForm(false);
            load();
        } catch (e) {
            setUserFormError(e.message);
        } finally {
            setUserFormLoading(false);
        }
    };

    const handleToggle = async (id) => {
        try {
            await toggleUserStatus(id, token);
            flash('✅ User status updated.');
            load();
        } catch (e) {
            flash('❌ ' + e.message);
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">{users.length} user{users.length !== 1 ? 's' : ''}</p>
                <button
                    onClick={() => setShowForm(v => !v)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all"
                >
                    {showForm ? '✕ Cancel' : '+ Add User'}
                </button>
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.form
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        onSubmit={handleRegister}
                        className="bg-[#0b1120] border border-white/10 rounded-xl p-6 mb-6 space-y-4 overflow-hidden"
                    >
                        <h3 className="font-semibold text-white mb-2">Create New User</h3>
                        {userFormError && <p className="text-red-400 text-sm">{userFormError}</p>}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { key: 'name', placeholder: 'Full Name', type: 'text' },
                                { key: 'email', placeholder: 'Email Address', type: 'email' },
                                { key: 'password', placeholder: 'Password (min 6 chars)', type: 'password' },
                            ].map(({ key, placeholder, type }) => (
                                <input
                                    key={key}
                                    type={type}
                                    value={userForm[key]}
                                    onChange={(e) => setUserForm(f => ({ ...f, [key]: e.target.value }))}
                                    placeholder={placeholder}
                                    required
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00c896]/50 text-sm"
                                />
                            ))}
                            <select
                                value={userForm.role}
                                onChange={(e) => setUserForm(f => ({ ...f, role: e.target.value }))}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00c896]/50 text-sm"
                            >
                                <option value="editor" className="bg-[#0b1120]">Editor</option>
                                <option value="admin" className="bg-[#0b1120]">Admin</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            disabled={userFormLoading}
                            className="px-5 py-2 rounded-lg bg-[#00c896] text-black font-semibold text-sm hover:bg-[#00c896]/90 transition-all disabled:opacity-50"
                        >
                            {userFormLoading ? 'Creating...' : 'Create User'}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

            {loading ? (
                <div className="flex justify-center py-24">
                    <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
                </div>
            ) : (
                <div className="space-y-3">
                    {users.map((u) => (
                        <div key={u._id} className="bg-[#0b1120] border border-white/8 rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-white/12 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {u.name?.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-medium text-white text-sm">{u.name}</p>
                                    <p className="text-gray-500 text-xs">{u.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.role === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-[#00c896]/15 text-[#00c896]'}`}>
                                    {u.role}
                                </span>
                                <span className={`text-xs ${u.isActive ? 'text-[#00c896]' : 'text-gray-600'}`}>
                                    {u.isActive ? '● Active' : '● Inactive'}
                                </span>
                                {u._id !== user._id && (
                                    <button
                                        onClick={() => handleToggle(u._id)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${u.isActive ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20' : 'bg-[#00c896]/10 text-[#00c896] border-[#00c896]/20 hover:bg-[#00c896]/20'}`}
                                    >
                                        {u.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
