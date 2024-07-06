import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

api.interceptors.response.use(
    response => response,
    error => {
        const errorMessage = error.response?.data?.message || 'An error occurred';
        throw new Error(errorMessage);
    }
);

export default api;
