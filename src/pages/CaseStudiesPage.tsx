// {"code":"rate-limited","message":"You have hit the rate limit. Please upgrade to keep chatting.","providerLimitHit":false,"isRetryable":true}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  FileCode,
  Search,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../components/common/SeoComponent";

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // const filters = ["All", "E-Commerce", "SaaS", "Mobile", "Enterprise"];

  const projects = [
    // {
    //   id: 1,
    //   title: "TechFlow E-Commerce Platform",
    //   category: "E-Commerce",
    //   description:
    //     "A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.",
    //   image:
    //     "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: TrendingUp, label: "Conversion Rate", value: "+300%" },
    //     { icon: Users, label: "User Engagement", value: "+250%" },
    //     { icon: Zap, label: "Load Time", value: "1.2s" },
    //   ],
    //   tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    //   challenge:
    //     "The client needed a complete e-commerce overhaul to compete with major platforms while maintaining their unique brand identity.",
    //   solution:
    //     "Built a custom platform with advanced features like AI-powered recommendations, real-time inventory tracking, and optimized checkout flow.",
    //   results: [
    //     "300% increase in conversion rates",
    //     "250% improvement in user engagement",
    //     "50% reduction in cart abandonment",
    //     "1.2s average page load time",
    //   ],
    //   testimonial: {
    //     content:
    //       "Rebhe transformed our online presence completely. The new platform exceeded all our expectations.",
    //     author: "Sarah Johnson",
    //     role: "CEO, TechFlow",
    //   },
    // },
    // {
    //   id: 2,
    //   title: "DataViz Analytics Dashboard",
    //   category: "SaaS",
    //   description:
    //     "Comprehensive analytics dashboard for businesses to track KPIs and generate actionable insights.",
    //   image:
    //     "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: Users, label: "Daily Users", value: "10K+" },
    //     { icon: TrendingUp, label: "Data Points", value: "1M+" },
    //     { icon: Zap, label: "Response Time", value: "200ms" },
    //   ],
    //   tech: ["React", "TypeScript", "D3.js", "Express", "Redis"],
    //   challenge:
    //     "Creating an intuitive dashboard that could handle massive datasets while providing real-time insights.",
    //   solution:
    //     "Developed a scalable architecture with optimized data visualization and real-time updates using WebSocket connections.",
    //   results: [
    //     "10,000+ daily active users",
    //     "99.9% uptime maintained",
    //     "70% faster data processing",
    //     "Real-time dashboard updates",
    //   ],
    //   testimonial: {
    //     content:
    //       "The dashboard has become essential to our daily operations. The insights are invaluable.",
    //     author: "Mike Chen",
    //     role: "Data Director, AnalyticsPro",
    //   },
    // },
    // {
    //   id: 3,
    //   title: "FinSecure Mobile Banking",
    //   category: "Mobile",
    //   description:
    //     "Secure mobile banking application with biometric authentication and advanced security features.",
    //   image:
    //     "https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: Users, label: "Active Users", value: "50K+" },
    //     { icon: Zap, label: "Security Score", value: "99.9%" },
    //     { icon: TrendingUp, label: "App Rating", value: "4.9/5" },
    //   ],
    //   tech: ["React Native", "Node.js", "AWS", "GraphQL", "MongoDB"],
    //   challenge:
    //     "Building a highly secure banking app that meets regulatory requirements while providing excellent UX.",
    //   solution:
    //     "Implemented multi-layer security with biometric authentication, end-to-end encryption, and real-time fraud detection.",
    //   results: [
    //     "50,000+ active users",
    //     "99.9% security compliance",
    //     "4.9/5 app store rating",
    //     "Zero security incidents",
    //   ],
    //   testimonial: {
    //     content:
    //       "Security and user experience perfectly balanced. Our customers love the new app.",
    //     author: "David Rodriguez",
    //     role: "CTO, FinSecure Bank",
    //   },
    // },
    // {
    //   id: 4,
    //   title: "GlobalCorp Enterprise Portal",
    //   category: "Enterprise",
    //   description:
    //     "Large-scale enterprise portal for employee management, document sharing, and internal communications.",
    //   image:
    //     "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: Users, label: "Employees", value: "25K+" },
    //     { icon: TrendingUp, label: "Productivity", value: "+40%" },
    //     { icon: Zap, label: "System Uptime", value: "99.9%" },
    //   ],
    //   tech: ["Angular", "Java", "Spring Boot", "Oracle", "Docker"],
    //   challenge:
    //     "Modernizing legacy systems while ensuring seamless integration with existing enterprise infrastructure.",
    //   solution:
    //     "Built a modular microservices architecture with gradual migration strategy and comprehensive API integration.",
    //   results: [
    //     "25,000+ employees onboarded",
    //     "40% increase in productivity",
    //     "99.9% system uptime",
    //     "60% reduction in support tickets",
    //   ],
    //   testimonial: {
    //     content:
    //       "The new portal streamlined our operations significantly. Exceptional work.",
    //     author: "Jennifer Liu",
    //     role: "IT Director, GlobalCorp",
    //   },
    // },
    // {
    //   id: 5,
    //   title: "EcoShop Sustainable Marketplace",
    //   category: "E-Commerce",
    //   description:
    //     "Eco-friendly marketplace connecting sustainable brands with environmentally conscious consumers.",
    //   image:
    //     "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: TrendingUp, label: "Vendor Growth", value: "+500%" },
    //     { icon: Users, label: "Monthly Users", value: "100K+" },
    //     { icon: Zap, label: "Carbon Saved", value: "10T+" },
    //   ],
    //   tech: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "AWS"],
    //   challenge:
    //     "Creating a platform that promotes sustainability while providing competitive e-commerce features.",
    //   solution:
    //     "Developed sustainability tracking features, carbon footprint calculator, and vendor verification system.",
    //   results: [
    //     "500% increase in vendor signups",
    //     "100,000+ monthly active users",
    //     "10+ tons of carbon saved",
    //     "Featured in top sustainability blogs",
    //   ],
    //   testimonial: {
    //     content:
    //       "Rebhe understood our mission perfectly and delivered a platform that truly makes a difference.",
    //     author: "Emma Thompson",
    //     role: "Founder, EcoShop",
    //   },
    // },
    // {
    //   id: 6,
    //   title: "MedConnect Telemedicine Platform",
    //   category: "SaaS",
    //   description:
    //     "HIPAA-compliant telemedicine platform enabling secure video consultations and patient management.",
    //   image:
    //     "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   metrics: [
    //     { icon: Users, label: "Consultations", value: "1M+" },
    //     { icon: Zap, label: "Response Time", value: "< 3s" },
    //     { icon: TrendingUp, label: "Patient Satisfaction", value: "98%" },
    //   ],
    //   tech: ["React", "WebRTC", "Node.js", "PostgreSQL", "HIPAA"],
    //   challenge:
    //     "Building a secure, reliable platform that meets strict healthcare regulations while being user-friendly.",
    //   solution:
    //     "Implemented end-to-end encryption, real-time video streaming, and comprehensive audit logging for compliance.",
    //   results: [
    //     "1 million+ consultations completed",
    //     "98% patient satisfaction rate",
    //     "HIPAA compliance achieved",
    //     "< 3 second response times",
    //   ],
    //   testimonial: {
    //     content:
    //       "The platform has revolutionized how we deliver healthcare. Patients and doctors love it.",
    //     author: "Dr. Michael Brown",
    //     role: "Medical Director, HealthCare Plus",
    //   },
    // },

    {
      id: 1,
      title: "StyleMart - Comprehensive E-Commerce Platform",
      category: "E-commerce Platforms",
      description:
        "A complete, full-stack e-commerce solution built from the ground up. Features a clean user interface, detailed product pages, category Browse, secure user accounts with order history, and a full-featured admin dashboard for product management.",
      image: "/images/projects/stylemart/hero.png",
      metrics: [
        { icon: Users, label: "User Account System", value: "Feature-Rich" },
        { icon: Zap, label: "Admin Dashboard", value: "Full Control" },
        {
          icon: TrendingUp,
          label: "Responsive Design",
          value: "Across Devices",
        },
      ],
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
        "Stripe",
      ],
      challenge:
        "The primary challenge was to design and build a complete e-commerce ecosystem from scratch, ensuring a seamless experience for both customers and administrators. This included creating a secure authentication system, managing complex product data, processing orders, and building an intuitive admin interface.",
      solution:
        "Developed a robust full-stack application with a clear separation between the customer-facing storefront and the backend admin panel. The solution features RESTful APIs for data management, secure payment integration with Stripe, and a responsive, component-based frontend for a consistent user experience across all pages and devices.",
      results: [
        "Delivered a fully functional e-commerce platform with a clean, modern design.",
        "Implemented a complete user journey: from Browse products and categories to checkout and order tracking.",
        "Created a comprehensive admin dashboard for easy product and inventory management.",
        "Ensured the entire application is fully responsive and optimized for various screen sizes.",
      ],
      testimonial: {
        content:
          "StyleMart is a testament to building a complete, production-ready e-commerce platform. It showcases a deep understanding of both frontend user experience and backend system architecture.",
        author: "Rebhe Ibrahim",
        role: "Project Lead & Architect", // role: "CEO, StyleMart",
      },
      githubUrl: "https://github.com/rebhi-2002/shop-smart-builder",
    },
    {
      id: 2,
      title: "BookIn - Luxury Hotel Booking Platform",
      category: "E-commerce Platforms",
      description:
        "A full-stack luxury hotel booking platform featuring an elegant user interface, AI-powered recommendations, and a comprehensive admin panel for managing hotels, bookings, and customer support.",
      image: "/images/projects/bookin/hero.png",
      metrics: [
        { icon: Users, label: "Admin Panel", value: "Full Management" },
        { icon: Zap, label: "Backend", value: "Firebase & Node.js" },
        { icon: TrendingUp, label: "Payments", value: "Stripe" },
      ],
      tech: [
        "Next.js",
        "React",
        "Redux",
        "Firebase",
        "Node.js (Express)",
        "Stripe",
        "Material-UI",
        "Tailwind CSS",
      ],
      challenge:
        "Developing a feature-rich, high-performance booking platform that combines a luxurious user experience with a powerful and intuitive admin dashboard for complete operational control.",
      solution:
        "Built a full-stack application using Next.js for server-side rendering and a fast user experience. Firebase was leveraged for real-time data and authentication, supplemented by an Express.js server for handling specific backend logic and Stripe payments. Redux was used for robust state management, and a combination of Material-UI and Tailwind CSS created the polished user interface.",
      results: [
        "A customer-facing website for Browse and booking luxury hotels with AI-driven recommendations.",
        "Secure and seamless payment processing through Stripe integration.",
        "A comprehensive admin panel for managing hotels, rooms, bookings, users, and customer support tickets.",
        "A responsive design ensuring a consistent experience across all devices.",
      ],
      testimonial: {
        content:
          "The platform has transformed how we manage our luxury hotel listings. The admin dashboard is incredibly intuitive and gives us full control over everything from bookings to customer inquiries.",
        author: "Maria Garcia",
        // role: "Portfolio Manager, Luxury Stays Inc.",
        role: "Project Lead & Architect",
      },
      githubUrl: "https://github.com/rebhi-2002/Graduation--Project",
    },
    {
      id: 3,
      title: "Cinematic - Movie Discovery Web App",
      category: "Full-Stack Applications",
      description:
        "A feature-rich movie discovery web application that allows users to browse, search, and get detailed information about movies. Includes user authentication, personal watchlists, and profile management, all powered by the TMDB API.",
      image: "/images/projects/cinematic/hero.png",
      metrics: [
        { icon: Zap, label: "TMDB API Integration", value: "Real-time Data" },
        {
          icon: Users,
          label: "User Authentication",
          value: "Watchlist & Profile",
        },
        { icon: Search, label: "Advanced Search", value: "Genre & Filters" },
      ],
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "React Query",
        "Netlify",
      ],
      challenge:
        "The main challenge was to design a clean, intuitive interface for Browse a massive library of movies from the TMDB API. It required efficient data fetching, state management for user data (like watchlists), and creating a seamless user authentication flow.",
      solution:
        "Built a responsive single-page application (SPA) using React. Leveraged the TMDB API for all movie-related data. Implemented a secure authentication system allowing users to register, log in, and manage a personal profile and watchlist. The dark-mode UI provides a cinematic and immersive user experience.",
      results: [
        "Users can explore thousands of movies via trending, popular, and top-rated sections.",
        "Implemented detailed movie pages with trailers, cast, and similar movie recommendations.",
        "Developed a complete user account system with profile and watchlist functionality.",
        "Integrated a powerful search with filtering capabilities.",
      ],
      testimonial: {
        content:
          "Cinematic has become my go-to for finding new movies. The interface is beautiful and the watchlist feature is exactly what I needed to keep track of films I want to see.",
        author: "Rebhe Ibrahim",
        // role: "Movie Enthusiast",
        role: "Project Lead & Architect",
      },
      githubUrl: "https://github.com/rebhi-2002/Cinematic",
    },
    {
      id: 4,
      title: "Car World - Automotive Services Platform",
      category: "Business Solutions",
      description:
        "A comprehensive automotive platform offering car rentals, a car parts e-commerce store, and vehicle service booking. Features a user dashboard for managing bookings and an admin panel with advanced tools like an AI chat and image generator.",
      image: "/images/projects/car-world/hero.png",
      metrics: [
        { icon: Zap, label: "AI Integration", value: "Google Vertex AI" },
        { icon: Users, label: "Backend Service", value: "Firebase" },
        { icon: TrendingUp, label: "Component Library", value: "shadcn/ui" },
      ],
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Firebase",
        "Vertex AI",
        "shadcn/ui",
        "Tailwind CSS",
        "React Query",
      ],
      challenge:
        "To integrate three distinct business models—car rentals, e-commerce for parts, and service bookings—into a single, cohesive platform. A key challenge was building an advanced admin dashboard with custom AI tools while ensuring a smooth user experience on the front-end.",
      solution:
        "Developed a modular full-stack application where each major feature (rentals, parts, services) was handled as a distinct component. This allowed for separation of concerns and scalability. A robust user and admin authentication system provides distinct experiences, with the admin panel featuring integrated AI tools for enhanced management.",
      results: [
        "Successfully launched a multi-functional platform covering diverse automotive needs.",
        "A seamless booking system for both car rentals and vehicle services.",
        "A complete e-commerce flow for purchasing car parts online.",
        "An innovative admin dashboard equipped with AI-powered features for efficient operation.",
      ],
      testimonial: {
        content:
          "This platform consolidated all our services under one roof. The ability to manage rentals, parts inventory, and service appointments from a single admin dashboard has been a game-changer for our business.",
        author: "Rebhe Ibrahim",
        // role: "Operations Manager, Car World",
        role: "Project Lead & Architect",
      },
      githubUrl:
        "https://github.com/Golex-AI-Apps/webapp-gmvjh6vvv6lrepw6iidru",
    },
    {
      id: 5,
      title: "FastBite - High-Performance Food Delivery Website",
      category: "Advanced Front-End",
      description:
        'A high-performance marketing website for the "FastBite" food delivery service, rebuilt with a focus on Core Web Vitals, advanced animations, and a comprehensive SEO strategy.',
      image: "/images/projects/fastbite/hero.png",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
      ],
      challenge:
        "The initial version of the website suffered from critical performance bottlenecks, including a ~2.3MB bundle size and a slow Largest Contentful Paint (LCP) of 3.8s. The project required a complete performance overhaul, implementation of missing UI components, and a robust SEO strategy.",
      solution:
        "A comprehensive performance audit was conducted, leading to a targeted optimization strategy. This included code-splitting with dynamic imports, lazy-loading images with modern WebP formats, and optimizing font delivery. Heavy animations were refactored, and a full suite of SEO metadata, including Schema.org structured data and Open Graph tags, was integrated.",
      results: [
        "Reduced the initial bundle size from 2.3MB to under 1MB.",
        "Dramatically improved Core Web Vitals, achieving a target LCP of under 2.5 seconds.",
        "Delivered a fully responsive, visually rich website with a consistent design system.",
        "Implemented a comprehensive SEO and social media sharing strategy to maximize online visibility.",
      ],
      metrics: [
        { icon: Zap, label: "LCP Improved To", value: "<2.5s" },
        { icon: FileCode, label: "Bundle Size Reduced To", value: "<1MB" },
        { icon: Search, label: "Advanced SEO", value: "Implemented" },
      ],
      testimonial: {
        content:
          "This project served as a foundational exploration into creating scalable frontend architecture with React. The result is a robust, maintainable codebase that now serves as a blueprint for future client work.",
        author: "Rebhe Ibrahim",
        // role: "Digital Experience Architect",
        role: "Project Lead & Architect",
      },
      githubUrl: "https://github.com/rebhi-2002/FastBite",
    },
    {
      id: 6,
      title: "UniCourse - University Registration & Moodle System",
      category: "Business Solutions",
      description:
        "A comprehensive, enterprise-level web platform designed to streamline course registration and academic management for universities, featuring deep Moodle LMS integration.",
      image: "/images/projects/unicourse/hero.png",
      metrics: [
        { icon: Users, label: "Role-Based System", value: "3 User Roles" },
        {
          icon: Zap,
          label: "Full-Stack Architecture",
          value: "React & Node.js",
        },
        { icon: TrendingUp, label: "LMS Integration", value: "Moodle" },
      ],
      tech: [
        "React",
        "TypeScript",
        "Node.js (Express)",
        "PostgreSQL",
        "React Query",
        "Tailwind CSS",
        "Moodle Integration",
        "Drizzle ORM",
      ],
      challenge:
        "The goal was to architect a centralized, secure, and user-friendly platform to replace fragmented legacy systems. The key challenge was integrating three distinct user roles (Student, Faculty, Admin) and ensuring seamless data synchronization with Moodle for a cohesive academic experience.",
      solution:
        "Developed a full-stack application with a role-based access control system. The platform features a dynamic front-end built with React and React Query for state management, and a robust Node.js (Express) and PostgreSQL back-end to handle complex business logic.",
      results: [
        "Delivered a centralized platform for course registration, academic records, and learning management.",
        "Designed and implemented three distinct, feature-rich dashboards for Students, Faculty, and Administrators.",
        "Successfully integrated with Moodle for course content, assignments, and grade synchronization.",
        "Ensured the system is scalable, secure, and accessible, adhering to modern web standards.",
      ],
      testimonial: {
        content:
          "UniCourse was an ambitious project that showcases the ability to design and implement a complex, enterprise-level system. It demonstrates a deep understanding of full-stack architecture, database management, and user-centric design principles.",
        author: "Rebhe Ibrahim",
        role: "Project Lead & Architect",
      },
      githubUrl: "https://github.com/rebhi-2002/UniversityCoursePortal",
    },
  ];

  // 1. استخرج كل التصنيفات من مصفوفة المشاريع
  const projectCategories = projects.map((p) => p.category);
  // 2. استخدم `Set` للحصول على التصنيفات الفريدة فقط (لمنع التكرار)
  const uniqueCategories = new Set(projectCategories);
  // 3. ادمج فلتر "All" مع التصنيفات الفريدة لإنشاء القائمة النهائية
  const filters = ["All", ...uniqueCategories];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <SeoComponent
        title="Case Studies - Digital Experience Projects"
        description="Explore detailed case studies of successful web development projects including e-commerce platforms, SaaS dashboards, and mobile applications."
        keywords="Case Studies, Web Development Projects, E-Commerce Development, SaaS Development, Mobile App Development, Rebhe Ibrahim Portfolio"
        schemaType="WebSite"
        ogImageUrl="/images/about/rebhe-ibrahim-web-developer.png"
      />
      <motion.div
        initial="initial"
        animate="animate"
        className="pt-24 pb-20 overflow-x-hidden"
      >
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Case Studies &{" "}
                <span className="text-blue-500">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore how I've helped businesses transform their digital
                presence and achieve measurable results through strategic design
                and development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <metric.icon className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                          <div className="text-xs text-blue-400 font-semibold">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/case-studies/${project.id}`}
                        className="flex-1"
                      >
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Case Study
                        </button>
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="p-2 border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg transition-colors duration-200">
                          <Github className="h-4 w-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Case Study Preview */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Featured Case Study</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Deep dive into one of my most successful projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-4">{projects[0].title}</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">
                    Challenge
                  </h4>
                  <p className="text-gray-400 mb-4">{projects[0].challenge}</p>

                  <h4 className="text-lg font-semibold mb-2 text-blue-400">
                    Solution
                  </h4>
                  <p className="text-gray-400 mb-4">{projects[0].solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">
                    Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projects[0].results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <p className="text-gray-300 italic mb-4">
                    "{projects[0].testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">
                        {projects[0].testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {projects[0].testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's work together to build something amazing that drives real
                results for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                onClick={(event) => {
                  event.preventDefault();
                  if (window.Calendly) {
                    window.Calendly.showPopupWidget(
                      // "https://calendly.com/rebheibrahim/30min"
                      "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                    );
                  }
                }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default CaseStudiesPage;
