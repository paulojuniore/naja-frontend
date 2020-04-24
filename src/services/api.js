import axios from 'axios';

const api = axios.create({
    baseURL: 'http://market-empresajr-backend.herokuapp.com'
});

export default api;