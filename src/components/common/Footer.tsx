import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Codepen,
  MessageCircleMore,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  const socialLinks = [
    // Work & Portfolio Links
    {
      icon: Github,
      href: "https://github.com/rebhi-2002",
      label: "GitHub",
      group: "work",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rebhe-ibrahim-451504244",
      label: "LinkedIn",
      group: "work",
    },
    {
      icon: Codepen,
      href: "https://codepen.io/rebhe-2002",
      label: "CodePen",
      group: "work",
    },

    // Direct Contact Links
    {
      icon: Mail,
      href: "mailto:rebheibrahim@gmail.com",
      label: "Email",
      group: "contact",
    },
    {
      icon: MessageCircleMore,
      href: "https://wa.me/972597523575",
      label: "WhatsApp",
      group: "contact",
    },
    {
      icon: SendHorizonal,
      href: "https://t.me/rebhe2002",
      label: "Telegram",
      group: "contact",
    },
  ];

  const workLinks = socialLinks.filter((link) => link.group === "work");
  const contactLinks = socialLinks.filter((link) => link.group === "contact");

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <BrandLogo size="md" />
              <span className="text-xl text-white font-bold">
                Rebhe Ibrahim
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Digital Experience Architect specializing in high-performance web
              applications that drive business growth and deliver exceptional
              user experiences.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-12">
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Follow My Work
                </h4>
                <div className="flex space-x-4">
                  {workLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="mt-6 sm:mt-0">
                <h4 className="text-white font-semibold mb-3">Let's Talk</h4>
                <div className="flex space-x-4">
                  {contactLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Work", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === "Work"
                        ? "/case-studies"
                        : `/${link.toLowerCase()}`
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "Performance Optimization",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rebhe Ibrahim. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;