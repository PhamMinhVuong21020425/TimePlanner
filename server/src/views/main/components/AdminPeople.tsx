import React from 'react';
import { FiEdit } from "react-icons/fi";
import User from "../types/Users";
import { useEffect, useState } from "react";
import request from "../utils/request";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { fetchUsersAction } from "../redux/actions/userAction";

export default function AdminPeople() {
    // const [users, setUsers] = useState<User[]>();
    const users: User[] = useSelector((state:RootState) => state.userState.users);
    const dispatch = useDispatch();

    useEffect(() => {
        // request.get<User[]>('user/getAllUser')
        //     .then(response => {
        //         setUsers(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
        dispatch(fetchUsersAction());
    }, []);

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

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[70%] border-[1.5px] h-auto p-4 rounded-md font-poppins text-gray-500">
                <div className="font-bold mb-2">User Leaderboard</div>
                <hr />
                {
                    users?.map((i) => (
                        <div className="flex justify-between items-center">
                            <div className="flex items-center my-2">
                                <div className={`w-[35px] h-[35px] ${getRandomColor()} rounded-full flex items-center justify-center text-white font-bold`}>{i.name[0]}</div>
                                <div className="ml-2">
                                    <div className="font-bold text-sm">{i.name}</div>
                                    <div className="text-xs">{i.email}</div>
                                </div>
                            </div>
                            <button className="text-green-400">
                                <FiEdit />
                            </button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}