import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import request from '../utils/request';
import { TfiCommentAlt } from 'react-icons/tfi';
import { AiFillUnlock, AiFillLock, AiFillPlusSquare } from 'react-icons/ai';
import { RiDraftFill } from 'react-icons/ri';

const Header: React.FC = () => {
    const [session, setSession] = useCookies(['user']);

    if (session) {
        console.log(`Cookie has been set successfully! ${session.user}`);
    } else {
        console.log('Cookie has been set failed!');
    }

    return (
        <>
            <header className="flex items-center justify-between bg-green-300 py-3 px-5">
                <button className="mx-3 flex items-center rounded bg-emerald-700 py-1 px-2 text-sm font-bold text-white hover:bg-emerald-500">
                    <TfiCommentAlt className="mr-1" />
                    Posts
                </button>
                <nav className="flex items-center justify-between font-medium text-white">
                    {session ? (
                        <>
                            <Link to="/client/drafts">
                                <button className="mx-3 flex items-center rounded bg-emerald-500 py-1 px-4 text-sm font-bold text-white hover:bg-emerald-700">
                                    <RiDraftFill className="mr-1" />
                                    Drafts
                                </button>
                            </Link>
                            <Link to="/client">
                                <button className="mx-3 flex items-center rounded border border-emerald-500 bg-transparent py-1 px-3 font-semibold text-emerald-700 hover:border-transparent hover:bg-emerald-500 hover:text-white">
                                    <AiFillPlusSquare className="mr-1" />
                                    New Post
                                </button>
                            </Link>
                            <Link to="/logout">
                                <button className="mx-3 flex items-center rounded bg-emerald-500 py-1 px-4 text-sm font-bold text-white hover:bg-emerald-700">
                                    <AiFillLock className="mr-1" />
                                    Logout
                                </button>
                            </Link>
                            {session.user ? (
                                <h6 className="h-7 w-7 rounded-full">{session.user}</h6>
                            ) : (
                                <div>error</div>
                            )}
                        </>
                    ) : (
                        <>
                            <Link to="/client/login">
                                <button className=" mx-3 flex items-center rounded bg-emerald-600 py-1 px-2 text-sm font-bold text-white hover:bg-emerald-400">
                                    <AiFillUnlock className="mr-1 text-base" />
                                    Sign in
                                </button>
                            </Link>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
