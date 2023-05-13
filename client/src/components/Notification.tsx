import { Fragment } from 'react'
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Notis {
    id: number,
    title: string,
    description: string,
    href: string,
    start_time: string,
    finish_time: string,
}

const notifications: Notis[] = [
    {
        id: 1,
        title: 'Support Vector Machine',
        description: 'Project X, a machine learning project using support vector machines, has been created by John Doe.',
        href: '/projects/X',
        start_time: 'March 16, 2022 10:00 AM',
        finish_time: 'March 16, 2022 11:00 AM',
    },
    {
        id: 2,
        title: 'React training scheduled',
        description: 'A React training session has been scheduled for the development team on March 20, 2022. The session will cover the basics of React and best practices for building scalable web applications.',
        href: '/training/react',
        start_time: 'March 20, 2022 9:00 AM',
        finish_time: 'March 20, 2022 12:00 PM',
    },
    {
        id: 3,
        title: 't-SNE Algorithm',
        description: 'The t-SNE analysis for Project Y is complete. You can now view the results in the project dashboard.',
        href: '/projects/Y/results',
        start_time: 'April 1, 2022 3:00 PM',
        finish_time: 'April 1, 2022 4:00 PM',
    },
    // More notifications...
];


export default function Notification() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center justify-center">
                    <MdOutlineNotificationsActive />
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-72 text-sm px-2 py-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-emerald-200">
                    {
                        notifications.map((noti) => (
                            <Menu.Item key={noti.id}>
                                {({ active }) => (
                                    <a

                                        href={noti.href}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        <p className="text-gray-700 font-bold">{noti.title}</p>
                                        <p className="text-xs my-1">{noti.description}</p>
                                        <p className="text-xs my-2">{noti.start_time}</p>
                                    </a>
                                )}
                            </Menu.Item>
                        ))

                    }
                </Menu.Items>
            </Transition>
        </Menu>
    )
}