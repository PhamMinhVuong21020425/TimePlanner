import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from '../utils/request';
import { FaFacebook, FaGithub } from 'react-icons/fa';

type Message = {
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
}

function SignUpForm() {
    const [dataUser, setDataUser] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState<Message>({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleDataUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setMessage({ ...message, [name]: '' });
        setDataUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isValid = true;
        let errorMessage = { ...message }
        if (dataUser.fullname?.trim() === '') {
            errorMessage = {
                ...errorMessage,
                fullname: 'Full name is not null.'
            };
            isValid = false;
        }
        if (dataUser.email?.trim() === '') {
            errorMessage = {
                ...errorMessage,
                email: 'Email is not null.'
            };
            isValid = false;
        }
        if (dataUser.password.length < 3) {
            errorMessage = {
                ...errorMessage,
                password: 'Password must be at least 3 characters long.'
            };
            isValid = false;
        }
        if (dataUser.password !== dataUser.confirmPassword) {
            errorMessage = {
                ...errorMessage,
                confirmPassword: 'Passwords must not match.'
            };
            isValid = false;
        }

        if (isValid) {
            const res = await request.post('login/signup', dataUser);
            console.log(res);
            navigate('/client/login');
        } else {
            setMessage(errorMessage);
        }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="flex h-screen w-1/3 items-center justify-center font-poppins">
                <form
                    onSubmit={handleSubmit}
                    className="mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md sm:w-full md:w-full lg:w-full"
                >
                    <div className="m-5 text-center text-xl font-bold text-gray-600">Sign up</div>
                    <div className="mb-4">
                        <label className="mb-2 block font-bold text-gray-700" htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            className="focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none"
                            name="fullname"
                            placeholder="✐ Full Name"
                            value={dataUser.fullname}
                            onChange={handleDataUserChange}
                        />

                        <p className="mt-2 text-red-500 text-sm italic">
                            {message.fullname}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none"
                            name="email"
                            placeholder="✐ Email"
                            value={dataUser.email}
                            onChange={handleDataUserChange}
                        />

                        <p className="mt-2 text-red-500 text-sm italic">
                            {message.email}
                        </p>

                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none"
                            name="password"
                            placeholder="✐ Password"
                            value={dataUser.password}
                            onChange={handleDataUserChange}
                        />

                        <p className="mt-2 text-red-500 text-sm italic">
                            {message.password}
                        </p>

                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block font-bold text-gray-700" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none"
                            name="confirmPassword"
                            placeholder="✐ Confirm Password"
                            value={dataUser.confirmPassword}
                            onChange={handleDataUserChange}
                        />

                        <p className="mt-2 text-red-500 text-sm italic">
                            {message.confirmPassword}
                        </p>

                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="focus:shadow-outline w-full rounded bg-emerald-400 py-2 px-4 font-bold text-white hover:bg-emerald-500 focus:outline-none"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="my-3 text-center text-ml">
                        Already have an account?{' '}
                        <Link to="../login" className="text-blue-500">
                            Login
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
        </div>
    );
}

export default SignUpForm;
