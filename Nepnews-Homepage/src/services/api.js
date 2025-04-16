import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';  // Update this line

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if user is logged in
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export const newsApi = {
    // Authentication
    login: (credentials) => api.post('/auth/login/', credentials),
    register: (userData) => api.post('/auth/register/', userData),
    resetPassword: (email) => api.post('/auth/password-reset/', { email }),
    resetPasswordConfirm: (data) => api.post('/auth/password-reset/confirm/', data),

    // Articles
    getArticles: () => api.get('/articles/'),
    getFeaturedArticles: () => api.get('/articles/?featured=true'),
    getArticlesByCategory: (category) => api.get(`/articles/?category=${category}`),
    getArticleById: (id) => api.get(`/articles/${id}/`),

    // Categories
    getCategories: () => api.get('/categories/'),
    
    // Test connection
    testConnection: () => api.get('/auth/test-connection/'),
};

export default newsApi;