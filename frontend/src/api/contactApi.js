const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const authHeaders = (token) => ({
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

/**
 * Fetch all contact submissions (admin-only).
 * @param {string} token  - JWT from AuthContext
 * @param {number} page   - 1-based page number
 * @param {number} limit  - results per page (default 20)
 */
export const fetchContacts = async (token, page = 1, limit = 20) => {
    const res = await fetch(
        `${API_URL}/api/contact?page=${page}&limit=${limit}`,
        { headers: authHeaders(token) }
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch contacts');
    return data; // { success, total, page, pages, contacts }
};

/**
 * Delete a single contact submission (admin-only).
 */
export const deleteContact = async (token, id) => {
    const res = await fetch(`${API_URL}/api/contact/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to delete contact');
    return data;
};
