import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

const Token = () => {
    return localStorage.getItem('token');
}

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Token()}`;
    return config;
}, (error) => {
    return Promise.reject(error);
}
)