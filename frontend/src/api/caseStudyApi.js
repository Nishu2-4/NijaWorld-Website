const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const authHeaders = (token) => ({
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

// ── Case Studies ────────────────────────────────────────
export const fetchCaseStudies = async ({ page = 1, limit = 100, status, token } = {}) => {
    const params = new URLSearchParams({ page, limit });
    if (status) params.append('status', status);
    const res = await fetch(`${API_URL}/api/case-studies?${params}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch case studies');
    return data;
};

export const fetchCaseStudyBySlug = async (slug, token) => {
    const res = await fetch(`${API_URL}/api/case-studies/${slug}`, {
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Case study not found');
    return data.caseStudy;
};

export const createCaseStudy = async (csData, token) => {
    const res = await fetch(`${API_URL}/api/case-studies`, {
        method: 'POST',
        headers: authHeaders(token),
        body: JSON.stringify(csData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg = data.message
            || (data.errors?.map(e => e.msg).join(' | '))
            || 'Failed to create case study';
        throw new Error(msg);
    }
    return data.caseStudy;
};

export const updateCaseStudy = async (id, csData, token) => {
    const res = await fetch(`${API_URL}/api/case-studies/${id}`, {
        method: 'PUT',
        headers: authHeaders(token),
        body: JSON.stringify(csData),
    });
    const data = await res.json();
    if (!res.ok) {
        const msg = data.message
            || (data.errors?.map(e => e.msg).join(' | '))
            || 'Failed to update case study';
        throw new Error(msg);
    }
    return data.caseStudy;
};

export const deleteCaseStudy = async (id, token) => {
    const res = await fetch(`${API_URL}/api/case-studies/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to delete case study');
    return data;
};

export const toggleCaseStudyPublish = async (id, token) => {
    const res = await fetch(`${API_URL}/api/case-studies/${id}/publish`, {
        method: 'PATCH',
        headers: authHeaders(token),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to toggle publish');
    return data;
};
