import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaBoxOpen,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16 perspective-1000">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left transform transition-all duration-500 hover:rotate-x-3 hover:scale-[1.01]">

        {/* Brand */}
        <div className="transform hover:translate-y-1 transition duration-300 ease-in-out">
          <h1 className="text-3xl font-extrabold text-indigo-400 drop-shadow-md">GameStore</h1>
          <p className="mt-3 text-base text-gray-300">
            Powering play. One game at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="transform hover:-rotate-y-3 transition duration-500 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-indigo-300">Quick Links</h2>
          <ul className="space-y-3 text-base text-gray-300">
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaHome /> <a href="/" className="hover:text-indigo-400">Home</a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaBoxOpen /> <a href="/products" className="hover:text-indigo-400">Products</a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaPhone /> <a href="/contact" className="hover:text-indigo-400">Contact</a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaInfoCircle /> <a href="/about" className="hover:text-indigo-400">About Us</a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="transform hover:rotate-y-3 transition duration-500 ease-in-out">
          <h2 className="text-xl font-semibold mb-4 text-indigo-300">Connect</h2>
          <ul className="space-y-3 text-base text-gray-300">
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaEnvelope /> <a href="mailto:karthik782004@gmail.com" className="hover:text-indigo-400">Email</a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaGithub /> <a href="https://github.com/karthikarrthur" target="_blank" className="hover:text-indigo-400">GitHub</a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start hover:scale-105">
              <FaLinkedin /> <a href="https://linkedin.com/in/karthik-r-844078346" target="_blank" className="hover:text-indigo-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

     {/* Bottom Note */}
<div className="mt-10 border-t border-gray-700 pt-4">
  <p className="text-center text-xs text-gray-500 tracking-wide">
    © {new Date().getFullYear()} <span className="font-medium text-indigo-400">GameStore</span>. All rights reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;
