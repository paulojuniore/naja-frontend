import axios from 'axios';

const api = axios.create({
    baseURL: 'https://market-empresajr-backend.herokuapp.com'
});

export default api;