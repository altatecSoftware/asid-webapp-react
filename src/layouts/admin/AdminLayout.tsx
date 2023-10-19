import { Outlet } from "react-router-dom"
import { Navbar, PrincipalCard, Sidebar } from "../../components/ui"

const AdminLayout = () => {
    return (
        <>
            <PrincipalCard>
                <Navbar/>
                <Sidebar/>
                <div className="content">
                    <Outlet/>
                </div>
            </PrincipalCard>
        </>
    )
}

export default AdminLayout
