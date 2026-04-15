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

export const deleteUser = async (id, token) => {
    const res = await fetch(`${API_URL}/api/auth/users/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to delete user');
    return data;
};

// ── Settings / Password ──────────────────────────────

/** Step 1 (change-password): verify current password, get OTP sent to email */
export const requestChangeOtp = async ({ currentPassword, newPassword, confirmPassword }, token) => {
    const res = await fetch(`${API_URL}/api/users/request-change-otp`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to send OTP');
    return data;
};

/** Step 2 (change-password): submit OTP to confirm and save new password */
export const verifyChangeOtp = async ({ otp, newPassword, confirmPassword }, token) => {
    const res = await fetch(`${API_URL}/api/users/verify-change-otp`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify({ otp, newPassword, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'OTP verification failed');
    return data;
};

/** Step 1 (forgot password): send OTP to the given email */
export const sendForgotOtp = async (email) => {
    const res = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
};

/** Step 2 (forgot password): verify OTP and set new password */
export const verifyOtpAndReset = async ({ email, otp, newPassword, confirmPassword }) => {
    const res = await fetch(`${API_URL}/api/auth/verify-otp-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Reset failed');
    return data;
};
