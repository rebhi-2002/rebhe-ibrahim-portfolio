import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Codepen,
  MessageCircleMore,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom"; // 💡 إضافة Link للتنقل الداخلي

const Footer = () => {
  // --- 1. تحديث البيانات: إضافة خاصية "group" لتصنيف الروابط ---
  const socialLinks = [
    // المجموعة الأولى: لعرض الأعمال والوجود المهني
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

    // المجموعة الثانية: للتواصل المباشر وبدء المشاريع
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

  // --- 2. فلترة الروابط بناءً على المجموعة ---
  const workLinks = socialLinks.filter((link) => link.group === "work");
  const contactLinks = socialLinks.filter((link) => link.group === "contact");

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">RI</span>
              </div>
              <span className="text-xl text-white font-bold">
                Rebhe Ibrahim
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Digital Experience Architect specializing in high-performance web
              applications that drive business growth and deliver exceptional
              user experiences.
            </p>

            {/* --- 3. تحديث العرض: عرض الروابط في مجموعتين منفصلتين --- */}
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
                  <Link // 💡 استخدام Link للتنقل السلس
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

// import { motion } from "framer-motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   /* Code2, Globe, */
//   Codepen,
//   MessageCircleMore,
//   SendHorizonal,
// } from "lucide-react";

// const Footer = () => {
//   const socialLinks = [
//     { icon: Github, href: "https://github.com/rebhi-2002", label: "GitHub" },
//     {
//       icon: Linkedin,
//       href: "https://linkedin.com/in/rebhe-ibrahim-451504244",
//       label: "LinkedIn",
//     },
//     { icon: Mail, href: "mailto:rebheibrahim@gmail.com", label: "Email" },
//     {
//       icon: Codepen,
//       href: "https://codepen.io/rebhe-2002",
//       label: "CodePen",
//     },
//     {
//       icon: MessageCircleMore,
//       href: "https://wa.me/972597523575",
//       label: "WhatsApp",
//     },
//     {
//       icon: SendHorizonal,
//       href: "https://t.me/rebhe2002",
//       label: "Telegram",
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               {/* <Code2 className="h-8 w-8 text-blue-500" /> */}
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-sm">RI</span>
//               </div>
//               <span className="text-xl font-bold">Rebhe Ibrahim</span>
//             </div>
//             <p className="text-gray-400 mb-6 max-w-md">
//               Digital Experience Architect specializing in high-performance web
//               applications that drive business growth and deliver exceptional
//               user experiences.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
//                   aria-label={social.label}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <social.icon size={24} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["About", "Services", "Work", "Blog"].map((link) => (
//                 <li key={link}>
//                   <a
//                     // href={`/${link.toLowerCase()}`}
//                     href={
//                       link === "Work"
//                         ? "/case-studies"
//                         : `/${link.toLowerCase()}`
//                     }
//                     className="text-gray-400 hover:text-white transition-colors duration-200"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               {[
//                 "Web Development",
//                 "UI/UX Design",
//                 "Performance Optimization",
//                 "Consulting",
//               ].map((service) => (
//                 <li key={service}>
//                   <span className="text-gray-400">{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             © 2025 Rebhe Ibrahim. All rights reserved.
//           </p>
//           <p className="text-gray-400 text-sm mt-2 md:mt-0">
//             Built with React & TypeScript
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
