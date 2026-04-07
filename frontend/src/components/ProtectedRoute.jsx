import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute — wraps any route that requires authentication.
 * 
 * - If auth is still loading (token being verified), shows a spinner.
 * - If not authenticated, redirects to /admin-login and preserves
 *   the attempted URL in location state so we can return after login.
 * - If authenticated, renders the child element normally.
 */
export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen bg-[#070b12] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#00c896]/30 border-t-[#00c896] rounded-full animate-spin" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/admin-login"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
