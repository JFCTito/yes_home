import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import Image from "../img/YesHome.png";
import ImageIcon from "../img/PersonCircle.png";
import { Input } from "../components/1atoms/Input/Input.jsx";
import Footer from "../components/4templates/Footer/Footer.jsx";

const Layout = () => {
    return (
        <> 
            <Navbar source ={Image} srcIcon ={ImageIcon}/>
            <main><Outlet/></main>
            <Footer/>
        </>
    )
}
export default Layout;