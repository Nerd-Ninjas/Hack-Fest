import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./Constants";
import logo from "../assets/main/logonerd.webp";

// Icons
import { RiDashboardHorizontalFill, RiDashboardHorizontalLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-bold text-gray-800">Nerd Learn</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10">
          {navItems.map((item, index) => (
            <Link to={item.href} key={index} className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition">
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Dashboard Button (Desktop) */}
        <div className="hidden lg:flex">
          <Link to="/dashboard">
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition">
              <RiDashboardHorizontalFill className="text-2xl mr-2" />
              Dashboard
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleNavbar} className="lg:hidden text-black">
          {mobileDrawer ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileDrawer && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center justify-center z-40 lg:hidden">
          <button onClick={toggleNavbar} className="absolute top-5 right-6 text-3xl text-black">
            <X />
          </button>
          <ul className="space-y-6 text-center">
            {navItems.map((item, index) => (
              <Link to={item.href} key={index} className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                {item.label}
              </Link>
            ))}
          </ul>

          {/* Dashboard Button (Mobile) */}
          <Link to="/dashboard" className="mt-6">
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition">
              <RiDashboardHorizontalLine className="text-2xl mr-2" />
              Dashboard
            </button>
          </Link>
        </div>
      )}

      {/* Floating Home Button */}
      <div className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white shadow-lg cursor-pointer hover:bg-gray-700 transition">
        <AiFillHome className="text-2xl" />
      </div>
    </nav>
  );
};

export default NavBar;
