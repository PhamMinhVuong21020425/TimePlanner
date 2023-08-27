import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3002/',
    withCredentials: true, // Cho phép gửi cookie
});

export default request;
