import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black/50 text-white">
      <div className="container pt-9">
        <div className="mb-6 flex justify-center gap-4">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/195o1rwmx9/?mibextid=qi2Omg"
            className="rounded-full bg-transparent p-3 text-blue-600 transition hover:scale-110 hover:bg-neutral-100 outline outline-white outline-2"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/itz_darshan_13?igsh=MXF2MTNqdXlxd3Fpcw=="
            className="rounded-full bg-transparent p-3 text-pink-600 transition hover:scale-110 hover:bg-neutral-100 outline outline-white outline-2"
          >
            <FaInstagram className="h-6 w-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/darshan-amane-4722512ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="rounded-full bg-transparent p-3 text-blue-600 transition hover:scale-110 hover:bg-neutral-100 outline outline-white outline-2"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Darshan1355"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-transparent p-3 text-gray-800 transition hover:scale-110 hover:bg-neutral-100 outline outline-white outline-2"
          >
            <FaGithub className="h-6 w-6" />
          </a>

        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center">
        © 2025 MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
