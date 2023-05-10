import AdminSideBar from "../components/AdminSideBar";
import AdminReport from "../components/AdminReport";

const Admin = () => {
    return (
        <div className="flex font-poppins">
            <div className="w-[20%]">
                <AdminSideBar />
            </div>
            <div className="w-[80%]">
                <AdminReport />
            </div>
        </div >
    )
}

export default Admin;