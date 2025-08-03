import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/case-studies" },
    { name: "Toolbox", path: "/toolbox" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <BrandLogo size="md" showAnimation={true} />
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
                whileHover={{
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Rebhe Ibrahim
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (window.Calendly) {
                  window.Calendly.showPopupWidget(
                    "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                  );
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Schedule Call
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-500 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mt-4"
              onClick={(event) => {
                event.preventDefault();
                if (window.Calendly) {
                  window.Calendly.showPopupWidget(
                    "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                  );
                }
              }}
            >
              Schedule Call
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;