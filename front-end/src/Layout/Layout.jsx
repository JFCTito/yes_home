import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import Image from "../img/YesHome.png";
import ImageIcon from "../img/PersonCircle.png";
const Layout = () => {
    return (
        <>
            <Navbar source ={Image} srcIcon ={ImageIcon}/>
            <main><Outlet/></main>
            <footer>Footer</footer>

        </>
    )
}
export default Layout;