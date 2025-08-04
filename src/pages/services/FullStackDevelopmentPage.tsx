import { motion } from "framer-motion";
import {
  ArrowLeft,
  Code2,
  Database,
  Server,
  Zap,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../../components/common/SeoComponent";
import { projects } from "../../data/projects";

const FullStackDevelopmentPage = () => {
  // Filter projects related to full-stack development
  const relatedProjects = projects.filter((project) =>
    project.tech.some((tech) =>
      [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ].includes(tech)
    )
  );

  const technologies = [
    {
      category: "Frontend",
      icon: Code2,
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: Server,
      tools: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      category: "Database",
      icon: Database,
      tools: ["MongoDB", "Firebase", "Supabase", "MySQL"],
    },
    {
      category: "Performance",
      icon: Zap,
      tools: ["Code Splitting", "Lazy Loading", "Caching", "CDN Integration"],
    },
  ];

  const features = [
    "Custom web application development from scratch",
    "Responsive design that works on all devices",
    "Secure user authentication and authorization",
    "Real-time features and live data updates",
    "Payment integration (Stripe, PayPal)",
    "Admin dashboards and content management",
    "API development and third-party integrations",
    "Performance optimization and monitoring",
    "SEO optimization and social media integration",
    "Deployment and hosting setup",
  ];

  const process = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      description:
        "Understanding your business requirements, target audience, and technical specifications. Creating detailed project roadmap and architecture planning.",
      deliverables: [
        "Project specification document",
        "Technical architecture plan",
        "Timeline and milestones",
      ],
    },
    {
      phase: "Design & Prototyping",
      duration: "1-2 weeks",
      description:
        "Creating wireframes, user interface designs, and interactive prototypes to visualize the final product.",
      deliverables: [
        "UI/UX designs",
        "Interactive prototypes",
        "Design system",
      ],
    },
    {
      phase: "Backend Development",
      duration: "2-4 weeks",
      description:
        "Building the server-side logic, database structure, APIs, and authentication systems.",
      deliverables: [
        "Database schema",
        "REST APIs",
        "Authentication system",
        "Admin panel",
      ],
    },
    {
      phase: "Frontend Development",
      duration: "3-5 weeks",
      description:
        "Developing the user interface, integrating with backend APIs, and implementing interactive features.",
      deliverables: [
        "Responsive web application",
        "User dashboard",
        "Interactive features",
      ],
    },
    {
      phase: "Testing & Optimization",
      duration: "1-2 weeks",
      description:
        "Comprehensive testing, performance optimization, and security audits to ensure production readiness.",
      deliverables: [
        "Test reports",
        "Performance optimization",
        "Security audit",
      ],
    },
    {
      phase: "Deployment & Launch",
      duration: "1 week",
      description:
        "Production deployment, domain setup, monitoring configuration, and post-launch support.",
      deliverables: ["Live application", "Monitoring setup", "Documentation"],
    },
  ];

  const faqs = [
    {
      question: "What technologies do you use for full-stack development?",
      answer:
        "I primarily use React/Next.js for the frontend, Node.js/Express for the backend, and databases like MongoDB, Firebase, or Supabase. The exact tech stack is chosen based on your specific requirements and scalability needs.",
    },
    {
      question: "How do you ensure the application is secure?",
      answer:
        "Security is built into every layer - from secure authentication systems, data validation, encrypted communications (HTTPS), secure database configurations, and regular security audits. I follow industry best practices and OWASP guidelines.",
    },
    {
      question: "Can you integrate with existing systems or APIs?",
      answer:
        "Absolutely! I have extensive experience integrating with third-party APIs, payment gateways (Stripe, PayPal), CRM systems, and existing databases. I can also build custom APIs to connect different systems.",
    },
    {
      question: "What's included in post-launch support?",
      answer:
        "Post-launch support includes bug fixes, security updates, performance monitoring, backup management, and technical support. I offer different maintenance packages based on your needs.",
    },
  ];

  return (
    <>
      <SeoComponent
        title="Full-Stack Development Services - End-to-End Web Solutions"
        description="Professional full-stack web development services using React, Node.js, and modern technologies. From concept to deployment, I build scalable applications that drive business growth."
        keywords="Full-Stack Development, React Development, Node.js, Web Application Development, Custom Software Development, API Development"
        schemaType="WebSite"
        ogImageUrl="/images/services/full-stack-development-og.png"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-20 overflow-x-hidden"
      >
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <Code2 className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Full-Stack <span className="text-blue-500">Development</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                End-to-end web application development using cutting-edge
                technologies. From database design to user interface, I build
                complete digital solutions that scale with your business.
              </p>
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center mx-auto transition-colors duration-200"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                I use modern, proven technologies to build robust and scalable
                applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center"
                >
                  <tech.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-gray-400 text-sm">
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">What's Included</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Comprehensive full-stack development services that cover every
                  aspect of your web application, from initial concept to
                  ongoing maintenance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Full-Stack?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Unified Development
                    </h4>
                    <p className="text-gray-400">
                      Single developer handling both frontend and backend
                      ensures seamless integration and consistent code quality
                      throughout your project.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Faster Development
                    </h4>
                    <p className="text-gray-400">
                      No communication overhead between different teams. Faster
                      decision-making and implementation of features.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Cost Effective
                    </h4>
                    <p className="text-gray-400">
                      More economical than hiring separate frontend and backend
                      developers, while maintaining high quality standards.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Development Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A structured approach that ensures your project is delivered on
                time, within budget, and exceeds expectations
              </p>
            </motion.div>

            <div className="space-y-8">
              {process.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-blue-500 mr-4">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                      </div>
                      <div className="text-blue-400 font-semibold text-sm">
                        Duration: {phase.duration}
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-400 mb-4">{phase.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-400">
                          Deliverables:
                        </h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map(
                            (deliverable, deliverableIndex) => (
                              <li
                                key={deliverableIndex}
                                className="flex items-center text-gray-300 text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Related Projects</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See how I've applied full-stack development expertise to create
                successful digital solutions for various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={`/case-studies/${project.id}`}>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Case Study
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Common questions about full-stack development services
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
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
                Ready to Build Your Application?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss your project requirements and create a custom
                solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Start Your Project
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Get Custom Quote
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

export default FullStackDevelopmentPage;
