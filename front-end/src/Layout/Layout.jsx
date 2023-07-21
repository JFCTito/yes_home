import { Outlet } from "react-router";
import Navbar from "../components/4templates/Navbar.jsx";
import Image from "../img/YesHome.png";
import ImageIcon from "../img/PersonCircle.png";
import { Input } from "../components/1atoms/Input/Input.jsx";
import Footer from "../components/4templates/Footer/Footer.jsx";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="bodyContainer">
      <div className="background">
        <Navbar source={Image} srcIcon={ImageIcon} />
        <main>
          <Outlet />
        </main>
      </div>
      <footer className="footerContainer">
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
