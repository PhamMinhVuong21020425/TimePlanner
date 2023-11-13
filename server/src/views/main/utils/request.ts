import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true, // Cho phép server gửi cookie
});

export default request;
