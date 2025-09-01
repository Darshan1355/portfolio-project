import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { name: "About", path: "#about" },
    { name: "skill", path: "#skill" },
    { name: "Contact", path: "#contact" },
  ];

  // Active link style
  const getLinkClass = (id) =>
    activeSection === id.replace("#", "")
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400";

  // Smooth scroll when clicking links
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/70 backdrop-blur-md z-20 fixed top-0 left-0 w-full h-16 shadow-md border-b border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-[0_0_8px_#facc15]">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={getLinkClass(link.path)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown (Right Side Only) */}
      <div
        className={`md:hidden fixed top-16 right-4 w-48 bg-gray-900/95 backdrop-blur-xl border border-yellow-400 text-white px-6 py-6 space-y-4 shadow-lg rounded-xl transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={(e) => handleNavClick(e, link.path)}
            className={`block text-lg font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${getLinkClass(
              link.path
            )} hover:bg-yellow-400 hover:text-black`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
