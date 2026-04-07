const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const authHeaders = (token) => ({
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

// ── Public ────────────────────────────────────────────
export const fetchInsights = async ({ page = 1, limit = 50, status, token } = {}) => {
    const params = new URLSearchParams({ page, limit });
    if (status) params.append('status', status);
    const res = await fetch(`${API_URL}/api/insights?${params}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch insights');
    return data;
};

export const fetchInsightBySlug = async (slug, token) => {
    const res = await fetch(`${API_URL}/api/insights/${slug}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Insight not found');
    return data.insight;
};

// ── Protected ─────────────────────────────────────────
export const createInsight = async (insightData, token) => {
    const res = await fetch(`${API_URL}/api/insights`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify(insightData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg =
            data.message ||
            data.errors?.map((e) => e.msg).join(' | ') ||
            'Failed to create insight';
        throw new Error(msg);
    }
    return data.insight;
};

export const updateInsight = async (id, insightData, token) => {
    const res = await fetch(`${API_URL}/api/insights/${id}`, {
        method: 'PUT',
        headers: authHeaders(token),
        body: JSON.stringify(insightData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg =
            data.message ||
            data.errors?.map((e) => e.msg).join(' | ') ||
            'Failed to update insight';
        throw new Error(msg);
    }
    return data.insight;
};

export const deleteInsight = async (id, token) => {
    const res = await fetch(`${API_URL}/api/insights/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to delete insight');
    return data;
};

export const toggleInsightPublish = async (id, token) => {
    const res = await fetch(`${API_URL}/api/insights/${id}/publish`, {
        method: 'PATCH',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to toggle publish');
    return data;
};
