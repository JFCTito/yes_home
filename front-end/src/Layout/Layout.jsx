import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import { Input } from "../components/1atoms/Input/Input.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet/></main>
            <footer>Footer</footer>
            <Input/>
        </>
    )
}
export default Layout;