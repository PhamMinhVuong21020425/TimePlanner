import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import request from '../utils/request'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function getRandomColor() {
    const colorList = [
        "bg-red-400",
        "bg-rose-400",
        "bg-orange-500",
        "bg-lime-400",
        "bg-pink-400",
        "bg-cyan-400",
        "bg-sky-400",
        "bg-indigo-400",
        "bg-emerald-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-purple-400"
    ];


    // Get a random number between 0 and the length of the color list
    const randomNumber = Math.floor(Math.random() * colorList.length);

    // Return the color at the random index
    return colorList[randomNumber];
}

type Props = {
    firstCharacter: string;
}

export default function UserDropDown({ firstCharacter }: Props) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const confirmation: any = window.confirm("Are you sure want to log out?");
        if (confirmation) {
            const res = await request.get('logout');
            if (res.data.success) {
                navigate('/login');
            }
        }
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={`flex items-center justify-center w-[50px] h-[50px] gap-x-1.5 rounded-full ${getRandomColor()} px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300`}>
                    {firstCharacter}
                    {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div className={
                                    classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    <Link to="/profile">
                                        Edit Profile
                                    </Link>
                                </div>
                            )}
                        </Menu.Item>

                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Archive
                                </Link>
                            )}
                        </Menu.Item>

                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Share
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Add to favorites
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}

                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}