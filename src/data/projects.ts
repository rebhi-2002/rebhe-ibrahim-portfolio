// src/data/projects.ts

export const projects = [
  {
    id: 1,
    title: "StyleMart - Comprehensive E-Commerce Platform",
    description:
      "A complete, full-stack e-commerce solution built from the ground up, featuring a clean UI, secure accounts, and a full-featured admin dashboard for product management.",
    category: "E-commerce Platforms",
    challenge:
      "The primary challenge was to design and build a complete e-commerce ecosystem from scratch, ensuring a seamless experience for both customers and administrators.",
    solution:
      "Developed a robust full-stack application using Vite and React with the shadcn/ui component library. The solution features RESTful APIs, secure payment integration with Stripe, and a responsive frontend.",
    results: [
      "Delivered a fully functional e-commerce platform with a modern design.",
      "Implemented a complete user journey from Browse to checkout and order tracking.",
      "Created a comprehensive admin dashboard for easy product and inventory management.",
      "Ensured the entire application is fully responsive across all devices.",
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
    image: "/images/projects/stylemart/hero.png", // ❗ الصورة الرئيسية
    liveUrl: "#",
    githubUrl: "https://github.com/rebhi-2002/shop-smart-builder",
    timeline: "8 Weeks",
    client: "StyleMart Inc.",
    keyResults: [
      {
        metric: "User Accounts",
        value: "Feature-Rich",
        description: "Secure authentication and order history for users.",
      },
      {
        metric: "Admin Dashboard",
        value: "Full Control",
        description: "Complete management of products, orders, and users.",
      },
      {
        metric: "Payment Integration",
        value: "Stripe",
        description: "Secure and reliable payment processing.",
      },
    ],
    caseStudySections: [
      {
        image: "/images/projects/stylemart/products-page.png", // ❗ صورة لصفحة المنتجات
        title: "Intuitive Product Browse",
        description:
          "Designed a clean and intuitive user interface for Browse products, with advanced filtering and search capabilities to help users find exactly what they need.",
      },
      {
        image: "/images/projects/stylemart/admin-panel.png", // ❗ صورة للوحة التحكم
        title: "Comprehensive Admin Panel",
        description:
          "Built a powerful admin dashboard from scratch, allowing administrators to manage products, view sales analytics, handle orders, and update inventory in real-time.",
      },
      {
        image: "/images/projects/stylemart/checkout.png", // ❗ صورة لصفحة الدفع
        title: "Seamless & Secure Checkout",
        description:
          "Integrated Stripe to create a multi-step, secure, and user-friendly checkout process, designed to minimize cart abandonment and build customer trust.",
      },
    ],
    testimonial: {
      content:
        "StyleMart is a testament to building a complete, production-ready e-commerce platform. It showcases a deep understanding of both frontend user experience and backend system architecture.",
      author: "Rebhe Ibrahim",
      role: "CEO, StyleMart",
      avatar: "/images/about/rebhe-ibrahim-web-developer.png",
    },
  },
  {
    id: 2,
    title: "BookIn - Luxury Hotel Booking Platform",
    description:
      "A full-stack luxury hotel booking platform featuring an elegant user interface, AI-powered recommendations, and a comprehensive admin panel.",
    category: "E-commerce Platforms",
    challenge:
      "Developing a feature-rich, high-performance booking platform that combines a luxurious user experience with a powerful and intuitive admin dashboard for complete operational control.",
    solution:
      "Built with Next.js for server-side rendering. Firebase was leveraged for real-time data and authentication, supplemented by an Express.js server for handling Stripe payments. Redux was used for robust state management.",
    results: [
      "A customer-facing website for Browse and booking luxury hotels with AI-driven recommendations.",
      "Secure and seamless payment processing through Stripe integration.",
      "A comprehensive admin panel for managing hotels, rooms, bookings, users, and customer support tickets.",
      "A responsive design ensuring a consistent experience across all devices.",
    ],
    tech: [
      "Next.js",
      "React",
      "Redux",
      "Firebase",
      "Node.js (Express)",
      "Stripe",
      "Material-UI",
    ],
    image: "/images/projects/bookin/hero.png", // ❗ الصورة الرئيسية
    liveUrl: "#",
    githubUrl: "https://github.com/rebhi-2002/Graduation--Project",
    timeline: "12 Weeks",
    client: "Luxury Stays Inc.",
    keyResults: [
      {
        metric: "Admin Panel",
        value: "Full Management",
        description: "Total control over hotels, rooms, and bookings.",
      },
      {
        metric: "Hybrid Backend",
        value: "Firebase & Node.js",
        description:
          "Combining serverless and server-based for optimal performance.",
      },
      {
        metric: "Payment Gateway",
        value: "Stripe",
        description: "Enabled secure online booking and payments.",
      },
    ],
    caseStudySections: [
      {
        image: "/images/projects/bookin/hotel-listing.png", // ❗ صورة لصفحة عرض الفنادق
        title: "Elegant Hotel Discovery",
        description:
          "The user interface was crafted with Material-UI to reflect the premium and luxurious nature of the hotels being offered, focusing on high-quality imagery and a smooth booking flow.",
      },
      {
        image: "/images/projects/bookin/admin-panel.png", // ❗ صورة للوحة التحكم
        title: "Powerful Hotel Management",
        description:
          "The admin panel allows hotel managers to control every aspect of their listings, including room types, pricing, availability, and bookings, all from a centralized dashboard.",
      },
      {
        image: "/images/projects/bookin/hybrid-backend.png", // ❗ صورة توضيحية للمعمارية
        title: "Hybrid Backend Architecture",
        description:
          "A hybrid backend was implemented, using Firebase for real-time features and user auth, while a dedicated Node.js (Express) server handled complex business logic and secure Stripe payment processing.",
      },
    ],
    testimonial: {
      content:
        "The platform has transformed how we manage our luxury hotel listings. The admin dashboard is incredibly intuitive and gives us full control over everything from bookings to customer inquiries.",
      author: "Rebhe Ibrahim",
      role: "Portfolio Manager, Luxury Stays Inc.",
      avatar: "/images/about/rebhe-ibrahim-web-developer.png",
    },
  },
  {
    id: 3,
    title: "Cinematic - Movie Discovery Web App",
    description:
      "A feature-rich movie discovery web application that allows users to browse, search, and get detailed information about movies, powered by the TMDB API.",
    category: "Full-Stack Applications",
    challenge:
      "The main challenge was to design a clean, intuitive interface for Browse a massive library of movies from the TMDB API, requiring efficient data fetching and user state management.",
    solution:
      "Built a responsive single-page application using React. Leveraged the TMDB API for all movie data and Supabase for user authentication and watchlists, providing a cinematic dark-mode UI.",
    results: [
      "Users can explore thousands of movies via trending, popular, and top-rated sections.",
      "Implemented detailed movie pages with trailers, cast, and similar movie recommendations.",
      "Developed a complete user account system with profile and watchlist functionality.",
      "Integrated a powerful search with filtering capabilities.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "React Query",
    ],
    image: "/images/projects/cinematic/hero.png", // ❗ الصورة الرئيسية
    liveUrl: "https://aesthetic-babka-bbaaa8.netlify.app/",
    githubUrl: "https://github.com/rebhi-2002/Cinematic",
    timeline: "6 Weeks",
    client: "Personal Project",
    keyResults: [
      {
        metric: "API Integration",
        value: "Real-time Data",
        description: "Live movie and TV show data from The Movie Database.",
      },
      {
        metric: "User Authentication",
        value: "Supabase",
        description:
          "Secure accounts and personalized watchlists via Supabase.",
      },
      {
        metric: "Advanced Search",
        value: "Genre & Filters",
        description: "Easy discovery of new content for users.",
      },
    ],
    caseStudySections: [
      {
        image: "/images/projects/cinematic/movie-details.png", // ❗ صورة لصفحة تفاصيل الفيلم
        title: "Detailed Movie View",
        description:
          "The core of the application is its ability to present rich data for each movie, including cast, crew, trailers, and similar movie recommendations, all fetched in real-time from the TMDB API.",
      },
      {
        image: "/images/projects/cinematic/user-watchlist.png", // ❗ صورة لقائمة المشاهدة
        title: "Personalized User Watchlist",
        description:
          "Integrated Supabase to handle user sign-ups, logins, and profile management. The watchlist feature allows authenticated users to save movies, creating a personalized experience.",
      },
      {
        image: "/images/projects/cinematic/search-results.png", // ❗ صورة لصفحة البحث
        title: "Powerful Search & Discovery",
        description:
          "Implemented a fast and responsive search feature that allows users to find any movie in the database, with options to filter by genre, release year, and popularity.",
      },
    ],
    testimonial: {
      content:
        "Cinematic has become my go-to for finding new movies. The interface is beautiful and the watchlist feature is exactly what I needed to keep track of films I want to see.",
      author: "Rebhe Ibrahim",
      role: "Movie Enthusiast",
      avatar: "/images/about/rebhe-ibrahim-web-developer.png",
    },
  },
  {
    id: 4,
    title: "Car World - Automotive Services Platform",
    description:
      "A comprehensive automotive platform offering car rentals, a car parts e-commerce store, and vehicle service booking, with an AI-powered admin panel.",
    category: "Business Solutions",
    challenge:
      "To integrate three distinct business models—car rentals, e-commerce, and service bookings—into a single platform, and build an admin dashboard with custom AI tools.",
    solution:
      "Developed a modular full-stack application using Vite and React. Utilized Firebase for all backend services, including database and authentication. A key feature is the integration of Google's Vertex AI into the admin panel.",
    results: [
      "Successfully launched a multi-functional platform for all automotive needs.",
      "A seamless booking system for both car rentals and vehicle services.",
      "A complete e-commerce flow for purchasing car parts online.",
      "An innovative admin dashboard equipped with AI-powered features.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase",
      "Vertex AI",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    image: "/images/projects/car-world/hero.png", // ❗ الصورة الرئيسية
    liveUrl: "#",
    githubUrl: "https://github.com/Golex-AI-Apps/webapp-gmvjh6vvv6lrepw6iidru",
    timeline: "10 Weeks",
    client: "Car World Group",
    keyResults: [
      {
        metric: "AI Integration",
        value: "Google Vertex AI",
        description: "Admin tools enhanced with AI chat and image generation.",
      },
      {
        metric: "Backend Service",
        value: "Firebase",
        description: "Serverless architecture for scalability and speed.",
      },
      {
        metric: "Multi-Vertical",
        value: "3-in-1 Platform",
        description: "Combined rentals, e-commerce, and services.",
      },
    ],
    caseStudySections: [
      {
        image: "/images/projects/car-world/booking.png", // ❗ صورة لعملية الحجز
        title: "Seamless Booking System",
        description:
          "The architecture was designed to handle different data models for car rentals, spare parts inventory, and service appointments, all within a single user-friendly interface powered by Firebase.",
      },
      {
        image: "/images/projects/car-world/admin-panel.png", // ❗ صورة للوحة التحكم
        title: "Admin Panel with AI Tools",
        description:
          "A secure admin panel was developed to manage the entire platform. The integration of Google's Vertex AI provided unique features like an AI assistant for customer support and an image generator for marketing materials.",
      },
      {
        image: "/images/projects/car-world/parts-store.png", // ❗ صورة لمتجر القطع
        title: "E-Commerce for Car Parts",
        description:
          "A complete e-commerce module was built to allow users to purchase car parts, with inventory management and order processing handled through the Firebase backend.",
      },
    ],
    testimonial: {
      content:
        "This platform consolidated all our services under one roof. The ability to manage everything from a single admin dashboard has been a game-changer for our business.",
      author: "Rebhe Ibrahim",
      role: "Operations Manager, Car World",
      avatar: "/images/about/rebhe-ibrahim-web-developer.png",
    },
  },
  {
    id: 5,
    title: "FastBite - High-Performance Food Delivery Website",
    description:
      'A high-performance marketing website for the "FastBite" food delivery service, rebuilt with a focus on Core Web Vitals, advanced animations, and a comprehensive SEO strategy.',
    category: "Advanced Front-End",
    challenge:
      "The initial version of the website suffered from critical performance bottlenecks, including a ~2.3MB bundle size and a slow Largest Contentful Paint (LCP) of 3.8s. The project required a complete performance overhaul and a robust SEO strategy.",
    solution:
      "A comprehensive performance audit was conducted, leading to a targeted optimization strategy. This included code-splitting, lazy-loading images, and optimizing font delivery. Heavy animations were refactored using Framer Motion and GSAP.",
    results: [
      "Reduced the initial bundle size from 2.3MB to under 1MB.",
      "Dramatically improved Core Web Vitals, achieving a target LCP of under 2.5 seconds.",
      "Delivered a fully responsive, visually rich website with a consistent design system.",
      "Implemented a comprehensive SEO and social media sharing strategy.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    image: "/images/projects/fastbite/hero.png", // ❗ الصورة الرئيسية
    liveUrl: "https://regal-cendol-4b4f59.netlify.app/",
    githubUrl: "https://github.com/rebhi-2002/FastBite",
    timeline: "4 Weeks",
    client: "FastBite Inc.",
    keyResults: [
      {
        metric: "LCP Improved To",
        value: "<2.5s",
        description: "Reduced page load time for better user experience.",
      },
      {
        metric: "Bundle Size",
        value: "<1MB",
        description: "Optimized code for faster initial load.",
      },
      {
        metric: "Advanced SEO",
        value: "Implemented",
        description: "Improved search engine visibility and ranking.",
      },
    ],
    caseStudySections: [
      {
        // image: "/images/projects/fastbite/performance-audit.png", // ❗ صورة عن تقرير الأداء
        image: {
          mobile: "/images/projects/fastbite/mobile-audit.png",
          desktop: "/images/projects/fastbite/desktop-audit.png",
        },
        title: "Performance Audit & Optimization",
        description:
          "The first step was a deep dive into the existing codebase to identify performance bottlenecks using tools like Lighthouse and WebPageTest. This informed a strategy focused on image optimization, code-splitting, and reducing main-thread work.",
      },
      {
        // image: "/images/projects/fastbite/animations.jpg", // ❗ صورة للأنيميشن
        image: "/images/projects/fastbite/animations.gif",
        videoSrc: "/images/projects/fastbite/animations.mp4",
        title: "UI & Animation Refactoring",
        description:
          "Refactored all animations using Framer Motion and GSAP for smoother, more performant visuals. A consistent design system was implemented to ensure visual cohesion and faster development.",
      },
      {
        image: "/images/projects/fastbite/responsive.png", // ❗ صورة للتصميم المتجاوب
        title: "Fully Responsive Design",
        description:
          "Ensured a pixel-perfect and seamless user experience across all devices, from mobile phones to widescreen desktops, with a mobile-first approach.",
      },
    ],
    testimonial: {
      content:
        "This project served as a foundational exploration into creating scalable frontend architecture. The result is a robust, maintainable codebase that now serves as a blueprint for future client work.",
      author: "Rebhe Ibrahim",
      role: "Digital Experience Architect",
      avatar: "/images/about/rebhe-ibrahim-web-developer.png",
    },
  },
];

// export const projects = [
//   {
//     id: 1,
//     title: "FastBite - High-Performance Food Delivery Website",
//     description:
//       'A high-performance marketing website for the "FastBite" food delivery service, rebuilt with a focus on Core Web Vitals, advanced animations, and a comprehensive SEO strategy.',
//     category: "Web App & Performance Optimization",
//     challenge:
//       "The initial version of the website suffered from critical performance bottlenecks, including a ~2.3MB bundle size and a slow Largest Contentful Paint (LCP) of 3.8s. The project required a complete performance overhaul and a robust SEO strategy.",
//     solution:
//       "A comprehensive performance audit was conducted, leading to a targeted optimization strategy. This included code-splitting, lazy-loading images, and optimizing font delivery. Heavy animations were refactored using Framer Motion and GSAP.",
//     results: [
//       "Reduced the initial bundle size from 2.3MB to under 1MB.",
//       "Dramatically improved Core Web Vitals, achieving a target LCP of under 2.5 seconds.",
//       "Delivered a fully responsive, visually rich website with a consistent design system.",
//       "Implemented a comprehensive SEO and social media sharing strategy.",
//     ],
//     tech: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Tailwind CSS",
//       "Framer Motion",
//       "GSAP",
//     ],
//     image: "/images/projects/fastbite-demo.png", // ❗ تأكد من مسار الصورة
//     liveUrl: "#", // ❗ ضع الرابط المباشر هنا
//     githubUrl: "#", // ❗ ضع رابط GitHub هنا
//     timeline: "4 Weeks",
//     client: "FastBite Inc.",
//     keyResults: [
//       {
//         metric: "LCP Improved To",
//         value: "<2.5s",
//         description: "Reduced page load time for better user experience.",
//       },
//       {
//         metric: "Bundle Size",
//         value: "<1MB",
//         description: "Optimized code for faster initial load.",
//       },
//       {
//         metric: "Advanced SEO",
//         value: "Implemented",
//         description: "Improved search engine visibility and ranking.",
//       },
//     ],
//     caseStudySections: [
//       {
//         image: "/images/projects/fastbite-demo.png", // ❗ غير الصورة
//         title: "Performance Audit & Optimization",
//         description:
//           "The first step was a deep dive into the existing codebase to identify performance bottlenecks using tools like Lighthouse and WebPageTest. This informed a strategy focused on image optimization, code-splitting, and reducing main-thread work.",
//       },
//       {
//         image: "/images/projects/fastbite-demo.png", // ❗ غير الصورة
//         title: "UI & Animation Refactoring",
//         description:
//           "Refactored all animations using Framer Motion and GSAP for smoother, more performant visuals. A consistent design system was implemented to ensure visual cohesion and faster development.",
//       },
//     ],
//     testimonial: {
//       content:
//         "This project served as a foundational exploration into creating scalable frontend architecture. The result is a robust, maintainable codebase that now serves as a blueprint for future client work.",
//       author: "Rebhe Ibrahim",
//       role: "Digital Experience Architect",
//       avatar: "#", // ❗ ضع رابط صورة الأفتار
//     },
//   },
//   {
//     id: 2,
//     title: "StyleMart - Comprehensive E-Commerce Platform",
//     description:
//       "A complete, full-stack e-commerce solution built from the ground up, featuring a clean UI, secure accounts, and a full-featured admin dashboard for product management.",
//     category: "E-Commerce",
//     challenge:
//       "The primary challenge was to design and build a complete e-commerce ecosystem from scratch, ensuring a seamless experience for both customers and administrators.",
//     solution:
//       "Developed a robust full-stack application using Vite and React with the shadcn/ui component library. The solution features RESTful APIs, secure payment integration with Stripe, and a responsive frontend.",
//     results: [
//       "Delivered a fully functional e-commerce platform with a modern design.",
//       "Implemented a complete user journey from Browse to checkout and order tracking.",
//       "Created a comprehensive admin dashboard for easy product and inventory management.",
//       "Ensured the entire application is fully responsive across all devices.",
//     ],
//     tech: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Tailwind CSS",
//       "shadcn/ui",
//       "React Query",
//       "Stripe",
//     ],
//     image: "/images/projects/stylemart.png", // ❗ تأكد من صحة مسار الصورة
//     liveUrl: "#", // ❗ ضع الرابط المباشر هنا
//     githubUrl: "#", // ❗ ضع رابط GitHub هنا
//     timeline: "8 Weeks",
//     client: "StyleMart Inc.",
//     keyResults: [
//       {
//         metric: "User Accounts",
//         value: "Feature-Rich",
//         description: "Secure authentication and order history for users.",
//       },
//       {
//         metric: "Admin Dashboard",
//         value: "Full Control",
//         description: "Complete management of products, orders, and users.",
//       },
//       {
//         metric: "Payment Integration",
//         value: "Stripe",
//         description: "Secure and reliable payment processing.",
//       },
//     ],
//     caseStudySections: [
//       {
//         image: "/images/projects/stylemart.png", // ❗ غير الصورة
//         title: "UI Design with Shadcn/UI",
//         description:
//           "Designed a clean and intuitive user interface using the powerful and accessible components from shadcn/ui, ensuring a consistent and modern look and feel across the platform.",
//       },
//       {
//         image: "/images/projects/stylemart.png", // ❗ غير الصورة
//         title: "Backend & Payment Integration",
//         description:
//           "Built the backend infrastructure to handle product data, user accounts, and integrated Stripe for a seamless and secure checkout process.",
//       },
//     ],
//     testimonial: {
//       content:
//         "StyleMart is a testament to building a complete, production-ready e-commerce platform. It showcases a deep understanding of both frontend user experience and backend system architecture.",
//       author: "Rebhe Ibrahim",
//       role: "CEO, StyleMart",
//       avatar: "#", // ❗ ضع رابط صورة الأفتار
//     },
//   },
//   {
//     id: 3,
//     title: "Cinematic - Movie Discovery Web App",
//     description:
//       "A feature-rich movie discovery web application that allows users to browse, search, and get detailed information about movies, powered by the TMDB API.",
//     category: "Web App",
//     challenge:
//       "The main challenge was to design a clean, intuitive interface for Browse a massive library of movies from the TMDB API, requiring efficient data fetching and user state management.",
//     solution:
//       "Built a responsive single-page application using React. Leveraged the TMDB API for all movie data and Supabase for user authentication and watchlists, providing a cinematic dark-mode UI.",
//     results: [
//       "Users can explore thousands of movies via trending, popular, and top-rated sections.",
//       "Implemented detailed movie pages with trailers, cast, and similar movie recommendations.",
//       "Developed a complete user account system with profile and watchlist functionality.",
//       "Integrated a powerful search with filtering capabilities.",
//     ],
//     tech: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Tailwind CSS",
//       "Supabase",
//       "React Query",
//     ],
//     image: "/images/projects/cinematic.png", // ❗ تأكد من صحة مسار الصورة
//     liveUrl: "#", // ❗ ضع الرابط المباشر هنا
//     githubUrl: "#", // ❗ ضع رابط GitHub هنا
//     timeline: "6 Weeks",
//     client: "Personal Project",
//     keyResults: [
//       {
//         metric: "API Integration",
//         value: "Real-time Data",
//         description: "Live movie and TV show data from The Movie Database.",
//       },
//       {
//         metric: "User Authentication",
//         value: "Supabase",
//         description:
//           "Secure accounts and personalized watchlists via Supabase.",
//       },
//       {
//         metric: "Advanced Search",
//         value: "Genre & Filters",
//         description: "Easy discovery of new content for users.",
//       },
//     ],
//     caseStudySections: [
//       {
//         image: "/images/projects/cinematic.png", // ❗ غير الصورة
//         title: "API Integration & Data Flow",
//         description:
//           "The core of the application is its ability to communicate effectively with the TMDB API. This was achieved by setting up an efficient data fetching layer with React Query to handle caching, and state synchronization.",
//       },
//       {
//         image: "/images/projects/cinematic.png", // ❗ غير الصورة
//         title: "User Authentication & Watchlist",
//         description:
//           "Integrated Supabase to handle user sign-ups, logins, and profile management. The watchlist feature allows authenticated users to save movies, creating a personalized experience.",
//       },
//     ],
//     testimonial: {
//       content:
//         "Cinematic has become my go-to for finding new movies. The interface is beautiful and the watchlist feature is exactly what I needed to keep track of films I want to see.",
//       author: "Rebhe Ibrahim",
//       role: "Movie Enthusiast",
//       avatar: "#", // ❗ ضع رابط صورة الأفتار
//     },
//   },
//   {
//     id: 4,
//     title: "Car World - Automotive Services Platform",
//     description:
//       "A comprehensive automotive platform offering car rentals, a car parts e-commerce store, and vehicle service booking, with an AI-powered admin panel.",
//     category: "Web App",
//     challenge:
//       "To integrate three distinct business models—car rentals, e-commerce, and service bookings—into a single platform, and build an admin dashboard with custom AI tools.",
//     solution:
//       "Developed a modular full-stack application using Vite and React. Utilized Firebase for all backend services, including database and authentication. A key feature is the integration of Google's Vertex AI into the admin panel.",
//     results: [
//       "Successfully launched a multi-functional platform for all automotive needs.",
//       "A seamless booking system for both car rentals and vehicle services.",
//       "A complete e-commerce flow for purchasing car parts online.",
//       "An innovative admin dashboard equipped with AI-powered features.",
//     ],
//     tech: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Firebase",
//       "Vertex AI",
//       "shadcn/ui",
//       "Tailwind CSS",
//     ],
//     image: "/images/projects/car-world-rentals.png", // ❗ تأكد من صحة مسار الصورة
//     liveUrl: "#", // ❗ ضع الرابط المباشر هنا
//     githubUrl: "#", // ❗ ضع رابط GitHub هنا
//     timeline: "10 Weeks",
//     client: "Car World Group",
//     keyResults: [
//       {
//         metric: "AI Integration",
//         value: "Google Vertex AI",
//         description: "Admin tools enhanced with AI chat and image generation.",
//       },
//       {
//         metric: "Backend Service",
//         value: "Firebase",
//         description: "Serverless architecture for scalability and speed.",
//       },
//       {
//         metric: "Multi-Vertical",
//         value: "3-in-1 Platform",
//         description: "Combined rentals, e-commerce, and services.",
//       },
//     ],
//     caseStudySections: [
//       {
//         image: "/images/projects/car-world-rentals.png", // ❗ غير الصورة
//         title: "Multi-Vertical Platform Architecture",
//         description:
//           "The architecture was designed to handle different data models for car rentals, spare parts inventory, and service appointments, all within a single user-friendly interface powered by Firebase.",
//       },
//       {
//         image: "/images/projects/car-world-rentals.png", // ❗ غير الصورة
//         title: "Admin Panel with AI Tools",
//         description:
//           "A secure admin panel was developed to manage the entire platform. The integration of Google's Vertex AI provided unique features like an AI assistant for customer support and an image generator for marketing materials.",
//       },
//     ],
//     testimonial: {
//       content:
//         "This platform consolidated all our services under one roof. The ability to manage everything from a single admin dashboard has been a game-changer for our business.",
//       author: "Rebhe Ibrahim",
//       role: "Operations Manager, Car World",
//       avatar: "#", // ❗ ضع رابط صورة الأفتار
//     },
//   },
//   {
//     id: 5,
//     title: "BookIn - Luxury Hotel Booking Platform",
//     description:
//       "A full-stack luxury hotel booking platform featuring an elegant user interface, AI-powered recommendations, and a comprehensive admin panel for managing hotels, bookings, and customer support.",
//     category: "E-commerce",
//     challenge:
//       "Developing a feature-rich, high-performance booking platform that combines a luxurious user experience with a powerful and intuitive admin dashboard for complete operational control.",
//     solution:
//       "Built with Next.js for server-side rendering. Firebase was leveraged for real-time data and authentication, supplemented by an Express.js server for handling Stripe payments. Redux was used for robust state management.",
//     results: [
//       "A customer-facing website for Browse and booking luxury hotels with AI-driven recommendations.",
//       "Secure and seamless payment processing through Stripe integration.",
//       "A comprehensive admin panel for managing hotels, rooms, bookings, users, and customer support tickets.",
//       "A responsive design ensuring a consistent experience across all devices.",
//     ],
//     tech: [
//       "Next.js",
//       "React",
//       "Redux",
//       "Firebase",
//       "Node.js (Express)",
//       "Stripe",
//       "Material-UI",
//     ],
//     image: "/images/projects/bookin-hotels.png", // ❗ تأكد من صحة مسار الصورة
//     liveUrl: "#", // ❗ ضع الرابط المباشر هنا
//     githubUrl: "#", // ❗ ضع رابط GitHub هنا
//     timeline: "12 Weeks",
//     client: "Luxury Stays Inc.",
//     keyResults: [
//       {
//         metric: "Admin Panel",
//         value: "Full Management",
//         description: "Total control over hotels, rooms, and bookings.",
//       },
//       {
//         metric: "Hybrid Backend",
//         value: "Firebase & Node.js",
//         description:
//           "Combining serverless and server-based for optimal performance.",
//       },
//       {
//         metric: "Payment Gateway",
//         value: "Stripe",
//         description: "Enabled secure online booking and payments.",
//       },
//     ],
//     caseStudySections: [
//       {
//         image: "/images/projects/bookin-hotels.png", // ❗ غير الصورة
//         title: "Luxury UI/UX Design",
//         description:
//           "The user interface was crafted with Material-UI to reflect the premium and luxurious nature of the hotels being offered, focusing on high-quality imagery and a smooth booking flow.",
//       },
//       {
//         image: "/images/projects/bookin-hotels.png", // ❗ غير الصورة
//         title: "Hybrid Backend Architecture",
//         description:
//           "A hybrid backend was implemented, using Firebase for real-time features and user auth, while a dedicated Node.js (Express) server handled complex business logic and secure Stripe payment processing.",
//       },
//     ],
//     testimonial: {
//       content:
//         "The platform has transformed how we manage our luxury hotel listings. The admin dashboard is incredibly intuitive and gives us full control over everything from bookings to customer inquiries.",
//       author: "Maria Garcia",
//       role: "Portfolio Manager, Luxury Stays Inc.",
//       avatar: "#", // ❗ ضع رابط صورة الأفتار
//     },
//   },
// ];
