import { Link } from "react-router";
import Home from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Avatar1 from "../../assets/images/avatars/avatar_1.png";
import Logo from "../../assets/images/logo.svg";
import Logout from "../auth/Logout";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-mediumDark py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img className="max-w-25 rounded-full lg:max-w-32.5" src={Logo} />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={Home} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={Notification} alt="Notification" />
          </button>

          <Logout />

          <button className="flex-center ml-8! gap-3">
            <span className="text-lg font-medium lg:text-xl">Sumit</span>
            <img
              className="max-h-8 max-w-8 lg:max-h-11 lg:max-w-11"
              src={Avatar1}
              alt="Avatar 1"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
