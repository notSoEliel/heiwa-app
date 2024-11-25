import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.heiwa.com',
});

export default api;