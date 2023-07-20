import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import Footer from "../components/4templates/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet/></main>
            <Footer />
        </>
    )
}
export default Layout;