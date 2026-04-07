import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('nija_token'));
    const [loading, setLoading] = useState(true);

    // On mount, verify stored token and restore user
    useEffect(() => {
        const restore = async () => {
            const stored = localStorage.getItem('nija_token');
            if (!stored) { setLoading(false); return; }
            try {
                const res = await fetch(`${API_URL}/api/auth/me`, {
                    headers: { Authorization: `Bearer ${stored}` },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                    setToken(stored);
                } else {
                    localStorage.removeItem('nija_token');
                    setToken(null);
                }
            } catch {
                localStorage.removeItem('nija_token');
                setToken(null);
            } finally {
                setLoading(false);
            }
        };
        restore();
    }, []);

    const login = async (email, password) => {
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Login failed');
        localStorage.setItem('nija_token', data.token);
        setToken(data.token);
        setUser(data.user);
        return data.user;
    };

    const logout = () => {
        localStorage.removeItem('nija_token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
