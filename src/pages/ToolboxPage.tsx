import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Wrench,
  Figma,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../components/SeoComponent";

const ToolboxPage = () => {
  const categories = [
    {
      icon: Code2,
      title: "Frontend Development & Frameworks",
      description:
        "Building the core logic and architecture of web applications using modern technologies.",
      tools: [
        {
          name: "React",
          level: 95,
          description:
            "3+ years of experience building scalable front-end applications",
        },
        {
          name: "Next.js",
          level: 92,
          description:
            "Leveraging full-stack capabilities for server-side rendering, performance, and SEO.",
        },
        {
          name: "TypeScript",
          level: 88,
          description:
            "Utilizing static typing for robust and maintainable codebases",
        },
        {
          name: "JavaScript (ES6+)",
          level: 92,
          description:
            "4+ years of hands-on experience in building dynamic applications",
        },
        {
          name: "Axios & Fetch API",
          level: 95,
          description:
            "Expert in handling asynchronous requests and client-server communication.",
        },
        {
          name: "Redux",
          level: 85,
          description: "State management for complex React applications",
        },
        {
          name: "Vue.js",
          level: 65,
          description:
            "Previous hands-on experience in building progressive user interfaces.",
        },
        {
          name: "jQuery",
          level: 70,
          description:
            "Experience with legacy web projects and DOM manipulation",
        },
        // {
        //   name: "Svelte",
        //   level: 80,
        //   description: "Compile-time optimized framework",
        // },
        // {
        //   name: "React Native",
        //   level: 88,
        //   description: "Cross-platform mobile development",
        // },
      ],
    },
    {
      icon: Palette,
      title: "Styling & Animation",
      description:
        "Crafting beautiful, responsive, and accessible interfaces with a focus on detail and motion.",
      tools: [
        {
          name: "HTML5",
          level: 98,
          description:
            "4+ years of experience with semantic and accessible markup",
        },
        {
          name: "CSS3 & SCSS/Sass",
          level: 95,
          description:
            "4+ years of experience with advanced styling and preprocessors",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description:
            "Rapidly building modern, custom-designed user interfaces",
        },
        {
          name: "Bootstrap",
          level: 98,
          description: "4+ years of expert experience in responsive design",
        },
        {
          name: "Styled Components",
          level: 87,
          description: "CSS-in-JS library",
        },
        {
          name: "Framer Motion",
          level: 85,
          description:
            "Creating fluid and complex animations in React applications",
        },
        {
          name: "Pug.js",
          level: 82,
          description:
            "Experience with the high-performance template engine for HTML.",
        },
      ],
    },
    {
      icon: Figma,
      title: "UI/UX Design & Prototyping",
      description:
        "Designing intuitive and user-centered interfaces from wireframes to high-fidelity prototypes.",
      tools: [
        {
          name: "Figma",
          level: 90,
          description:
            "Collaborative design for modern web and mobile applications",
        },
        {
          name: "Adobe XD",
          level: 85,
          description:
            "2+ years of experience creating user-friendly prototypes and wireframes",
        },
        // {
        //   name: "Photoshop",
        //   level: 60,
        //   description:
        //     "1 year of experience in graphic design and visual content editing",
        // },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust server-side logic, APIs, and managing databases for full-stack applications.",
      tools: [
        {
          name: "Node.js",
          level: 85,
          description:
            "Experience in building server-side applications and APIs using the JavaScript runtime.",
        },
        {
          name: "Express.js",
          level: 88,
          description:
            "Proficient in creating robust and scalable web applications and APIs with Express.",
        },
        {
          name: "REST APIs",
          level: 90,
          description:
            "Designing and developing RESTful APIs to facilitate client-server communication.",
        },
        {
          name: "PHP",
          level: 70,
          description:
            "Experience in developing websites using pure PHP for server-side tasks.",
        },
        // { name: "Python", level: 85, description: "Versatile programming language" },
        // { name: "GraphQL", level: 88, description: "Query language for APIs" },
        // { name: "Microservices", level: 82, description: "Distributed system architecture" },
      ],
    },
    {
      icon: Database,
      title: "Databases & Storage",
      description:
        "Experience with relational, NoSQL, and Backend-as-a-Service (BaaS) platforms to meet diverse application needs.",
      tools: [
        {
          name: "MongoDB",
          level: 85,
          description:
            "Experience using MongoDB as the NoSQL database for full-stack e-commerce applications.",
        },
        {
          name: "MySQL & SQL",
          level: 80,
          description:
            "Proficient in relational database management with MySQL (via phpMyAdmin) and writing SQL queries, utilized in PHP projects.",
        },
        // {
        //   name: "PostgreSQL",
        //   level: 88,
        //   description: "Relational database system",
        // },
        {
          name: "Firebase",
          level: 90,
          description:
            "Utilizing Firebase for real-time database capabilities and backend services.",
        },
        {
          name: "Supabase",
          level: 78,
          description:
            "Experience with Supabase as an open-source Backend-as-a-Service platform.",
        },
        {
          name: "Redis",
          level: 75,
          description:
            "Collaborated with backend teams to implement Redis for high-performance caching in a graduation project.",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Version Control & Deployment", //title: "DevOps & Deployment",
      description:
        "Managing codebases and deploying modern web applications to leading cloud platforms.", // description: "Tools for deployment, monitoring, and maintaining applications",
      tools: [
        // { name: "AWS", level: 85, description: "Cloud computing platform" },
        {
          name: "Git & GitHub",
          level: 95,
          description:
            "Expert in using Git for version control and GitHub for collaborative development and code management.",
        },
        {
          name: "Vercel",
          level: 90,
          description:
            "Proficient in deploying and managing modern frontend applications on the Vercel platform.",
        },
        // { name: "Docker", level: 80, description: "Containerization platform" },
        {
          name: "Netlify",
          level: 88,
          description:
            "Experience in deploying and managing JAMstack applications on the Netlify platform.",
        },
        // { name: "GitHub Actions", level: 85, description: "CI/CD automation" },
        // { name: "DigitalOcean", level: 82, description: "Cloud infrastructure provider" },
      ],
    },
    {
      icon: Wrench,
      title: "Workflow & Productivity Tools", // title: "Tools & Productivity",
      description:
        "A selection of primary tools and platforms used to ensure an efficient, high-quality, and collaborative development process.",
      tools: [
        // --- Code Editors & Build Tools ---
        {
          name: "VS Code",
          level: 98,
          description:
            "Primary, highly-customized code editor for daily development.",
        },
        {
          name: "Windsurf Editor",
          level: 85,
          description:
            "Leveraging AI-native tools to accelerate the coding workflow.",
        },
        {
          name: "Atom",
          level: 88,
          description:
            "Previous experience utilizing the Atom editor for various web projects.",
        },
        {
          name: "Vite",
          level: 92,
          description:
            "Leveraging the modern build tool for a fast and efficient development experience.",
        },
        {
          name: "Webpack",
          level: 80,
          description:
            "Experience with configuring Webpack for module bundling in JavaScript projects.",
        },
        // --- ! ---
        {
          name: "Gulp.js",
          level: 82,
          description:
            "Automating development tasks and asset pipelines with the Gulp.js task runner.",
        },
        {
          name: "ESLint",
          level: 88,
          description:
            "Enforcing code quality and consistency with a modern linter.",
        },
        // --- API & Testing ---
        {
          name: "Jest",
          level: 85,
          description:
            "Proficient in writing unit tests to ensure code quality and reliability.",
        },
        {
          name: "Postman",
          level: 90,
          description:
            "Expert in API testing, debugging, and development using the Postman platform.",
        },
        {
          name: "Thunder Client",
          level: 88,
          description:
            "Utilizing the VS Code extension for rapid and convenient API client testing.",
        },
        // --- Project Management & Collaboration ---
        {
          name: "Trello",
          level: 90,
          description:
            "Using Trello for agile project management, tracking tasks, and visualizing workflow.",
        },
        {
          name: "Slack",
          level: 85,
          description:
            "Proficient in using Slack for real-time team communication and collaboration.",
        },
      ],
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Discovery & Strategy", // title: "Planning & Research",
      tools: ["Figma", "Adobe XD", "Notion", "Miro", "Trello"],
      description:
        "We start by deeply understanding your business goals, target audience, and project requirements to build a solid strategic foundation, creating initial wireframes and a clear roadmap.", // description: "Understanding requirements, user research, and creating wireframes",
    },
    {
      step: "02",
      title: "UI/UX Design & Prototyping", // title: "Design & Prototyping",
      tools: ["Figma", "Adobe XD", "Framer Motion"],
      description:
        "Creating intuitive, high-fidelity designs and interactive prototypes that focus on delivering an exceptional and engaging user experience.",
    },
    // {
    //   step: "03",
    //   title: "Development Setup",
    //   tools: ["VS Code", "Git", "Next.js"],
    //   description: "Setting up development environment and project structure",
    // },
    {
      step: "03",
      title: "Frontend Development",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "Setting up the development environment and building a scalable, high-performance, and responsive application using modern technologies and clean code principles.",
      // "Building a scalable, high-performance, and responsive user interface using modern frontend technologies and clean code principles.", // description: "Building responsive and interactive user interfaces",
    },
    {
      step: "04",
      title: "Backend & API Integration", // title: "Backend Integration",
      tools: ["Node.js", "Express.js", "Postman", "MongoDB"], // tools: ["Node.js", "PostgreSQL", "GraphQL"],
      description:
        "Implementing server-side logic, developing and testing robust REST APIs, and integrating the appropriate database solution.", // description: "Implementing server-side logic and database integration",
    },
    {
      step: "05",
      title: "Testing & Optimization",
      tools: ["Jest", "Lighthouse", "WebPageTest"],
      description:
        "Conducting unit tests and performance audits to ensure the application is robust, bug-free, and highly optimized for Core Web Vitals.", // description: "Comprehensive testing and performance optimization",
    },
    {
      step: "06",
      title: "Deployment & Launch", // title: "Deployment & Monitoring",
      tools: ["Vercel", "Netlify", "Git & GitHub"], // tools: ["Vercel", "AWS", "Analytics"],
      description:
        "Deploying the final product to leading cloud platforms, ensuring a smooth, seamless launch and establishing a continuous integration workflow.", // description: "Production deployment and continuous monitoring",
    },
  ];

  return (
    <>
      <SeoComponent
        title="My Digital Toolbox - Technologies & Tools"
        description="Explore the comprehensive collection of modern tools, technologies, and frameworks I use to create exceptional digital experiences."
        keywords="Web Development Tools, React, Next.js, Node.js, TypeScript, Tailwind CSS, Development Stack, Rebhe Ibrahim Tools"
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
                My Digital <span className="text-blue-500">Toolbox</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                A comprehensive collection of modern tools, technologies, and
                frameworks I use to create exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                      <category.icon className="h-12 w-12 text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      {category.title}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-200">
                            {tool.name}
                          </h3>
                          <span className="text-blue-500 font-semibold">
                            {tool.level}%
                          </span>
                        </div>

                        <p className="text-gray-400 mb-4 text-sm">
                          {tool.description}
                        </p>

                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                My Development Workflow
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                How I combine these tools to deliver exceptional results from
                concept to deployment
              </p>
            </motion.div>

            <div className="space-y-8">
              {workflow.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-blue-500 mr-4">
                        {phase.step}
                      </span>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                My experience with the tools and technologies that power modern
                web development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                // { number: "50+", label: "Technologies Mastered" },
                { number: "4+", label: "Years of Experience" }, //  لدي الخبرة الزمنية.
                { number: "40+", label: "Successful Projects" }, // { number: "100+", label: "Projects Completed" }, //  لدي الخبرة العملية وحجم الأعمال.
                { number: "50%", label: "Performance Boost" }, //  عملي له تأثير تقني قوي.
                { number: "30%", label: "Increase in Engagement" }, //  عملي له تأثير إيجابي على المستخدمين وأهداف العمل.
                // { number: "3+", label: "Developers Mentored" },
                // { number: "99.9%", label: "Client Satisfaction" },
                // { number: "24/7", label: "Learning New Tech" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700"
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's combine the right tools and technologies to bring your
                vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link to="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    View My Work
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ToolboxPage;
