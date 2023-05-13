import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from '../utils/request';
import { FaFacebook, FaGithub } from 'react-icons/fa';

function SignUpForm() {
    const [dataUser, setDataUser] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword:''
    });

    const navigate = useNavigate();

    const handleDataUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setDataUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await request.post('login/signup', dataUser);
        console.log(res);
        navigate('/login');
    }

    return (
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
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        name="fullname"
                        placeholder="✐ Full Name"
                        value={dataUser.fullname}
                        onChange={handleDataUserChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        name="email"
                        placeholder="✐ Email"
                        value={dataUser.email}
                        onChange={handleDataUserChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        name="password"
                        placeholder="✐ Password"
                        value={dataUser.password}
                        onChange={handleDataUserChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block font-bold text-gray-700" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 shadow focus:border-green-300 focus:outline-none"
                        name="confirmPassword"
                        placeholder="✐ Confirm Password"
                        value={dataUser.confirmPassword}
                        onChange={handleDataUserChange}
                    />
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
    );
}

export default SignUpForm;
