import { useNavigate } from "react-router-dom";
import request from "../utils/request";

function styleOption(text: string, color: string) {
    // Get first letter of text
    // Only works for ()
    const firstLetter = text[0];

    return (
        <div className={`flex justify-between items-center mt-2 hover:bg-${color}-200 py-2 px-3 rounded-md`}>
            <div className={`w-[20px] h-[20px] px-2 flex items-center justify-center bg-${color}-400 text-white rounded-sm text-sm font-bold`}>{firstLetter}</div>
            <div className={`w-[90%] mx-4 text-gray-700 text-sm`}>{text}</div>
        </div>
    )
}

type Props = {
    handleClicked: (option: string) => void;
    currentOption: string;
}

const AdminSideBar = ({ handleClicked, currentOption }: Props) => {

    const navigate = useNavigate();
    const handleLogout = async () => {
        const confirmation: any = window.confirm("Are you sure want to log out?");
        if (confirmation) {
            const res = await request.get('logout');
            if (res.data.success) {
                navigate('/client/login');
            }
        }
    }

    return (
        <div className="m-3 rounded-md shadow-md h-screen font-poppins">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="w-2/3 font-bold text-gray-700 mx-auto my-4 text-center ">TimePlanner</div>
                </div>
                <hr />
                <div className={`flex justify-between items-center mt-2 ${currentOption == "Reports" ? "bg-emerald-200" : "hover:bg-emerald-200"} py-2 px-3 rounded-md`}
                    onClick={() => handleClicked("Reports")}
                >
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-emerald-400 text-white rounded-sm text-sm text-bold">R</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">Reports</div>
                </div>
                <div className={`flex justify-between items-center mt-2 ${currentOption == "People" ? "bg-yellow-200" : "hover:bg-yellow-200"} py-2 px-3 rounded-md`}
                    onClick={() => handleClicked("People")}
                >
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-yellow-400 text-white rounded-sm text-sm text-bold">P</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">People</div>
                </div>
                {/* <div className="flex justify-between items-center mt-2 hover:bg-yellow-200 py-2 px-3 rounded-md">
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-yellow-400 text-white rounded-sm text-sm text-bold">G</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">Get Started</div>
                </div> */}
                <div className={`flex justify-between items-center mt-2 ${currentOption == "Activities" ? "bg-violet-200" : "hover:bg-violet-200"} py-2 px-3 rounded-md`}
                    onClick={() => handleClicked("Activities")}
                >
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-violet-400 text-white rounded-sm text-sm text-bold">A</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">Activities</div>
                </div>
                <div className={`flex justify-between items-center mt-2 ${currentOption == "Settings" ? "bg-cyan-200" : "hover:bg-cyan-200"} py-2 px-3 rounded-md`}
                    onClick={() => handleClicked("Settings")}
                >
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-cyan-400 text-white rounded-sm text-sm text-bold">S</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">Settings</div>
                </div>
                <div className={`flex justify-between items-center mt-2 ${currentOption == "Logout" ? "bg-pink-200" : "hover:bg-pink-200"} py-2 px-3 rounded-md`}
                    onClick={() => {
                        handleClicked("Logout");
                        handleLogout();
                    }
                }
                >
                    <div className="w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-pink-300 text-white rounded-sm text-sm text-bold">L</div>
                    <div className="w-[90%] mx-4 text-gray-700 text-sm">Logout</div>
                </div>
                {/* <div>
                    {styleOption("Reports", "cyan")}
                </div>
                <div>
                    {styleOption("People", "lime")}
                </div>
                <div>
                    {styleOption("Activities", "orange")}
                </div>
                <div>
                    {styleOption("Settings", "violet")}
                </div>
                <div>
                    {styleOption("Logout", "emerald")}
                </div> */}
            </div>
        </div>
    )
}

export default AdminSideBar;