import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent blur-2xl"></div>

      {/* Social Icons */}
      <div className="container relative z-10 pt-10">
        <div className="mb-8 flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/195o1rwmx9/?mibextid=qi2Omg"
            className="group rounded-full bg-yellow-400/10 p-3 text-yellow-400 shadow-md 
                       transition-all duration-300 hover:scale-125 hover:bg-yellow-400 hover:text-black"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/itz_darshan_13?igsh=MXF2MTNqdXlxd3Fpcw=="
            className="group rounded-full bg-yellow-400/10 p-3 text-yellow-400 shadow-md 
                       transition-all duration-300 hover:scale-125 hover:bg-yellow-400 hover:text-black"
          >
            <FaInstagram className="h-6 w-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/darshan-amane-4722512ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="group rounded-full bg-yellow-400/10 p-3 text-yellow-400 shadow-md 
                       transition-all duration-300 hover:scale-125 hover:bg-yellow-400 hover:text-black"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Darshan1355"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-yellow-400/10 p-3 text-yellow-400 shadow-md 
                       transition-all duration-300 hover:scale-125 hover:bg-yellow-400 hover:text-black"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full bg-yellow-500/10 border-t border-yellow-400/30 p-4 text-center text-yellow-300 text-sm">
        © 2025 <span className="font-semibold text-yellow-400">MyPortfolio</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
