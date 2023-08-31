import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3002/',
    withCredentials: true, // Cho phép server gửi cookie
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
});

export default request;
