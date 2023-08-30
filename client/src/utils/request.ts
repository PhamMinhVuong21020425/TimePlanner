import axios from 'axios';

const request = axios.create({
    baseURL: 'https://time-planner-server-deploy.vercel.app/',
    withCredentials: true, // Cho phép server gửi cookie
});

export default request;
