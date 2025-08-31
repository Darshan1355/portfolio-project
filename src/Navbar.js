import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Skill", path: "#skill" },
    { name: "Achievement", path: "#achievement" },
    { name: "Contact", path: "#contact" },
  ];

  const getLinkClass = (id) =>
    activeSection === id.replace("#", "")
      ? "text-yellow-400 font-bold"
      : "hover:text-yellow-400";

  return (
    <nav className="bg-black/70 backdrop-blur z-20 fixed top-0 left-0 w-full h-16 shadow-md border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_0.8px_#fff]">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className={getLinkClass(link.path)}>
                {link.name}
              </a>
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
        <div className="md:hidden bg-gray-900 text-white px-4 py-4 space-y-3 absolute top-16 left-0 w-full shadow-lg z-30 rounded-b-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block ${getLinkClass(link.path)}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
