import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import { Input } from "../components/1atoms/Input/Input.jsx";
import Footer from "../components/4templates/Footer/Footer.jsx";

const Layout = () => {
    return (
        <>git 
            <Navbar />
            <main><Outlet/></main>
            <footer>Footer</footer>
            <Input/>
            <footer><Footer/></footer>
            
        </>
    )
}
export default Layout;