import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import Footer from "../components/4templates/Footer/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet/></main>
            <footer><Footer/></footer>
            
        </>
    )
}
export default Layout;