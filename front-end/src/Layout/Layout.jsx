import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet/></main>
            <footer>Footer</footer>
        </>
    )
}
export default Layout;