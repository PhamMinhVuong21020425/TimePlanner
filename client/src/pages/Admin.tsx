import AdminSideBar from "../components/AdminSideBar";
import AdminReport from "../components/AdminReport";
import AdminPeople from "../components/AdminPeople";
import { useState } from "react";

const Admin = () => {
    const [selectedOption, setSelectedOption] = useState("Reports");


    function handleClicked(option: string) {
        setSelectedOption(option);
    }

    function renderContent(option: string) {
        switch (option) {
            case "Reports":
                return <AdminReport />
            case "People":
                return <AdminPeople />
            case "Activities":
                return <div>Activities</div>
            case "Settings":
                return <div>Settings</div>
        }
    }
    return (
        <div className="flex font-poppins">
            <div className="w-[20%]">
                <AdminSideBar handleClicked={handleClicked} currentOption={selectedOption} />
            </div>
            <div className="w-[80%]">
                {renderContent(selectedOption)}
            </div>
        </div >
    )
}

export default Admin;