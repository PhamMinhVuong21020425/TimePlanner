import axios from 'axios';

const request = axios.create({
    baseURL: '/',
    withCredentials: true, // Cho phép server gửi cookie
});

export default request;
