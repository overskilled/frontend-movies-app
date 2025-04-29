import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // if you're using cookies/JWT
});

// Optional: add interceptors
api.interceptors.response.use(
    (res: any) => res,
    (error: any) => {
        // Handle global errors here
        return Promise.reject(error);
    }
);

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });


export default api;
