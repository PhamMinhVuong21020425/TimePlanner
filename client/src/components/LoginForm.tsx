import React, { useState } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import request from '../utils/request';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: {
            email: string;
            password: string;
        } = {
            email: username,
            password: password,
        };
        const res = await request.post('login', data);
        console.log(res.data);
        navigate('/');
    };

    return (
        <div className="flex h-screen w-1/3 items-center justify-center font-poppins">
            <form
                onSubmit={handleSubmit}
                className="mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md sm:w-full md:w-full lg:w-full"
            >
                <div className="m-5 text-center text-xl font-bold text-gray-600">Log In</div>
                <div className="mb-4">
                    <label className="mb-2 block font-bold text-gray-700" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        id="username"
                        type="email"
                        placeholder="✐   Email"
                        name="email"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="✐   Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="focus:shadow-outline w-full rounded bg-emerald-400 py-2 px-4 font-bold text-white hover:bg-emerald-500 focus:outline-none"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
                <div className="my-3 text-center text-sm text-emerald-400">Forgot Password?</div>

                <div className="my-3 text-center text-ml">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-500">
                        Register
                    </Link>
                </div>

                <hr></hr>

                <div className="mt-5 flex items-center justify-center">
                    <button
                        type="submit"
                        className="mx-5 flex items-center justify-between rounded-md border-2 border-blue-400 p-2"
                    >
                        <FaFacebook className="mr-2 text-[20px] text-blue-500" />
                        <span className="text-sm">Facebook</span>
                    </button>
                    <button
                        className="mx-5 flex items-center justify-between rounded-md border-2 border-green-400 p-2"
                        type="submit"
                    >
                        <FaGithub className="mr-2 text-[20px] text-black-800" />
                        <span className="text-sm">GitHub</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
