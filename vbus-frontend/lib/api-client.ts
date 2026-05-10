const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';


export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Đã có lỗi xảy ra' }));
        throw new Error(error.message || 'Đã có lỗi xảy ra');
    }

    return response.json();
}
