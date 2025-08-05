import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation(); // Get current route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skill", path: "/Skill" },
    { name: "Achievement", path: "/Achievement" },
    { name: "Contact", path: "/Contact" },
  ];

  const getLinkClass = (path) =>
    location.pathname === path
      ? "md:underline md:underline-offset-8 md:decoration-2 md:font-bold text-white md:text-lg md:translate-y-1 transition-all duration-200"
      : "hover:text-orange-400 transition-all duration-200";

  return (
    <nav className="bg-transparent backdrop-blur z-20 fixed top-0 left-0 w-full h-16 shadow-md border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-white"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
        >
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className={getLinkClass(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white px-4 py-4 space-y-3 absolute top-16 left-0 w-full shadow-lg z-30">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block ${getLinkClass(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
