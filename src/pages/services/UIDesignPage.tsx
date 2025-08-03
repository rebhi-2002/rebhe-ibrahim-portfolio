import { motion } from "framer-motion";
import {
  ArrowLeft,
  Palette,
  Users,
  Eye,
  Smartphone,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../../components/common/SeoComponent";
import { projects } from "../../data/projects";

const UIDesignPage = () => {
  // Filter projects related to UI/UX design
  const relatedProjects = projects.filter(
    (project) =>
      project.description.toLowerCase().includes("ui") ||
      project.description.toLowerCase().includes("design") ||
      project.description.toLowerCase().includes("interface")
  );

  const designAreas = [
    {
      category: "User Research",
      icon: Users,
      tools: [
        "User Interviews",
        "Persona Development",
        "Journey Mapping",
        "Competitive Analysis",
      ],
    },
    {
      category: "Visual Design",
      icon: Palette,
      tools: [
        "Figma",
        "Adobe XD",
        "Color Theory",
        "Typography",
        "Brand Guidelines",
      ],
    },
    {
      category: "Prototyping",
      icon: Eye,
      tools: [
        "Interactive Prototypes",
        "Wireframing",
        "User Flow Design",
        "Usability Testing",
      ],
    },
    {
      category: "Responsive Design",
      icon: Smartphone,
      tools: [
        "Mobile-First Design",
        "Breakpoint Strategy",
        "Touch Interactions",
        "Progressive Enhancement",
      ],
    },
  ];

  const features = [
    "User research and persona development",
    "Information architecture and user flow design",
    "Wireframing and low-fidelity prototypes",
    "High-fidelity visual designs",
    "Interactive prototypes and animations",
    "Design system creation and documentation",
    "Responsive design for all screen sizes",
    "Accessibility compliance (WCAG guidelines)",
    "Usability testing and iteration",
    "Design handoff and developer collaboration",
  ];

  const process = [
    {
      phase: "Research & Discovery",
      duration: "1 week",
      description:
        "Understanding your users, business goals, and competitive landscape through research and stakeholder interviews.",
      deliverables: [
        "User personas",
        "Competitive analysis",
        "Project requirements",
        "Design brief",
      ],
    },
    {
      phase: "Information Architecture",
      duration: "3-5 days",
      description:
        "Organizing content and features into logical structures and creating user flow diagrams.",
      deliverables: [
        "Site map",
        "User flow diagrams",
        "Content strategy",
        "Navigation structure",
      ],
    },
    {
      phase: "Wireframing",
      duration: "1 week",
      description:
        "Creating low-fidelity wireframes to establish layout, hierarchy, and functionality without visual distractions.",
      deliverables: [
        "Low-fidelity wireframes",
        "Layout concepts",
        "Interaction patterns",
      ],
    },
    {
      phase: "Visual Design",
      duration: "2-3 weeks",
      description:
        "Developing the visual identity, color schemes, typography, and high-fidelity designs that bring your brand to life.",
      deliverables: [
        "High-fidelity designs",
        "Design system",
        "Style guide",
        "Asset library",
      ],
    },
    {
      phase: "Prototyping",
      duration: "1 week",
      description:
        "Creating interactive prototypes to demonstrate user interactions and validate design decisions.",
      deliverables: [
        "Interactive prototypes",
        "Animation specifications",
        "Micro-interaction details",
      ],
    },
    {
      phase: "Testing & Iteration",
      duration: "1 week",
      description:
        "Conducting usability tests, gathering feedback, and refining the design based on user insights.",
      deliverables: [
        "Usability test results",
        "Design iterations",
        "Final design files",
        "Developer handoff",
      ],
    },
  ];

  const designPrinciples = [
    {
      title: "User-Centered Design",
      description:
        "Every design decision is made with the end user in mind, ensuring intuitive and delightful experiences.",
    },
    {
      title: "Accessibility First",
      description:
        "Designing inclusive experiences that work for users of all abilities, following WCAG guidelines.",
    },
    {
      title: "Performance Conscious",
      description:
        "Balancing beautiful visuals with fast loading times and smooth interactions.",
    },
    {
      title: "Brand Consistency",
      description:
        "Ensuring every element reflects your brand identity and maintains consistency across all touchpoints.",
    },
  ];

  const faqs = [
    {
      question: "Do you provide both UI and UX design services?",
      answer:
        "Yes, I provide comprehensive UI/UX design services. This includes user research, information architecture, wireframing, visual design, prototyping, and usability testing to ensure both beautiful and functional designs.",
    },
    {
      question: "What design tools do you use?",
      answer:
        "I primarily use Figma for design and prototyping due to its collaborative features and powerful design systems. I also have experience with Adobe XD and can work with your preferred design tools.",
    },
    {
      question: "How do you ensure the design works on all devices?",
      answer:
        "I follow a mobile-first design approach, creating responsive designs that adapt seamlessly to different screen sizes. All designs are tested across various devices and browsers to ensure consistency.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "Absolutely! I can work within your existing brand guidelines and help extend them for digital applications. If you don't have brand guidelines, I can help create a cohesive design system.",
    },
  ];

  return (
    <>
      <SeoComponent
        title="UI/UX Design Services - User-Centered Digital Experiences"
        description="Professional UI/UX design services focused on creating intuitive, accessible, and beautiful digital experiences. From user research to high-fidelity prototypes."
        keywords="UI/UX Design, User Experience Design, User Interface Design, Figma Design, Responsive Design, Accessibility Design"
        schemaType="WebSite"
        ogImageUrl="/images/services/ui-design-og.jpg"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // animate={{ opacity: 1 }}
        viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }} // animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <Palette className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                UI/UX <span className="text-blue-500">Design</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Creating intuitive, accessible, and beautiful digital
                experiences that users love. From user research to high-fidelity
                prototypes, I design interfaces that drive engagement and
                conversions.
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
                Schedule Design Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Design Areas */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Design Expertise</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive design services covering every aspect of user
                experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center"
                >
                  <area.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{area.category}</h3>
                  <div className="space-y-2">
                    {area.tools.map((tool, toolIndex) => (
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
                  Comprehensive UI/UX design services that cover every aspect of
                  creating exceptional user experiences, from research to final
                  implementation.
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
                <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      User-Centered Approach
                    </h4>
                    <p className="text-gray-400">
                      Every design decision starts with understanding your
                      users' needs, behaviors, and pain points to create truly
                      intuitive experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Data-Driven Design
                    </h4>
                    <p className="text-gray-400">
                      Using analytics, user feedback, and A/B testing to make
                      informed design decisions that improve conversion rates.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Accessibility First
                    </h4>
                    <p className="text-gray-400">
                      Designing inclusive experiences that work for all users,
                      following WCAG guidelines and best practices.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Design Principles</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The core principles that guide every design decision I make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold mb-6">Design Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A user-centered design process that ensures your product meets
                both user needs and business objectives
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
        {relatedProjects.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6">Design Portfolio</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Examples of how thoughtful design has improved user experience
                  and business outcomes
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
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        {project.description}
                      </p>
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
        )}

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
                Common questions about UI/UX design services
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
                Ready to Improve Your User Experience?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's create a design that not only looks beautiful but also
                drives user engagement and business results.
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
                  Start Design Project
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Get Design Quote
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

export default UIDesignPage;
