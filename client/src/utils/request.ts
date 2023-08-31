import axios from 'axios';

const request = axios.create({
    baseURL: 'https://time-planner-server-deploy.vercel.app/',
    withCredentials: true, // Cho phép server gửi cookie
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
});

export default request;
