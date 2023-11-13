import React from 'react';
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";

export default function Setting() {
    return (
        <div className="flex">
            <div className="w-[30%]"><SideBar /></div>
            <div className="w-[70%]"><UserProfile /></div>
        </div>
    )
}