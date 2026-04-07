const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const authHeaders = (token) => ({
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

// ── Blogs ────────────────────────────────────────────
export const fetchBlogs = async ({ page = 1, limit = 20, status, token } = {}) => {
    const params = new URLSearchParams({ page, limit });
    if (status) params.append('status', status);
    const res = await fetch(`${API_URL}/api/blogs?${params}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch blogs');
    return data;
};

export const fetchBlogBySlug = async (slug, token) => {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Blog not found');
    return data.blog;
};

export const createBlog = async (blogData, token) => {
    const res = await fetch(`${API_URL}/api/blogs`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify(blogData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg = data.message
            || (data.errors?.map(e => e.msg).join(' | '))
            || 'Failed to create blog';
        throw new Error(msg);
    }
    return data.blog;
};

export const updateBlog = async (id, blogData, token) => {
    const res = await fetch(`${API_URL}/api/blogs/${id}`, {
        method: 'PUT',
        headers: authHeaders(token),
        body: JSON.stringify(blogData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg = data.message
            || (data.errors?.map(e => e.msg).join(' | '))
            || 'Failed to update blog';
        throw new Error(msg);
    }
    return data.blog;
};

export const deleteBlog = async (id, token) => {
    const res = await fetch(`${API_URL}/api/blogs/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to delete blog');
    return data;
};

export const togglePublish = async (id, token) => {
    const res = await fetch(`${API_URL}/api/blogs/${id}/publish`, {
        method: 'PATCH',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to toggle publish');
    return data;
};

// ── Users (admin) ────────────────────────────────────
export const fetchUsers = async (token) => {
    const res = await fetch(`${API_URL}/api/auth/users`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch users');
    return data.users;
};

export const registerUser = async (userData, token) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to create user');
    return data.user;
};

export const toggleUserStatus = async (id, token) => {
    const res = await fetch(`${API_URL}/api/auth/users/${id}/toggle`, {
        method: 'PATCH',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to toggle user');
    return data;
};

// ── Settings / Password ──────────────────────────────
export const changePassword = async ({ currentPassword, newPassword, confirmPassword }, token) => {
    const res = await fetch(`${API_URL}/api/users/change-password`, {
        method: 'PUT',
        headers: authHeaders(token),
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to change password');
    return data;
};

export const forgotPassword = async (email) => {
    const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
};

export const resetPassword = async (token, newPassword, confirmPassword) => {
    const res = await fetch(`${API_URL}/api/auth/reset-password/${token}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Reset failed');
    return data;
};

