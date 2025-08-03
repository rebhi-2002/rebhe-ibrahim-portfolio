import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Zap,
  // Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SeoComponent from "../components/common/SeoComponent";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern technologies",
      features: [
        "React & Next.js applications",
        "Node.js & Express backends",
        "Database design & optimization",
        "API development & integration",
        "Real-time features",
        "Progressive Web Apps",
      ],
      timeline: [
        {
          phase: "Planning",
          duration: "1-2 weeks",
          description: "Architecture planning and tech stack selection",
        },
        {
          phase: "Development",
          duration: "4-8 weeks",
          description: "Core development with regular updates",
        },
        {
          phase: "Testing",
          duration: "1-2 weeks",
          description: "Comprehensive testing and optimization",
        },
        {
          phase: "Deployment",
          duration: "1 week",
          description: "Production deployment and monitoring setup",
        },
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Development",
      description: "Creating beautiful, intuitive interfaces that users love",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Responsive design systems",
        "Accessibility compliance",
        "Interactive animations",
        "Design system creation",
      ],
      timeline: [
        {
          phase: "Discovery",
          duration: "1 week",
          description: "User research and requirement analysis",
        },
        {
          phase: "Design",
          duration: "2-3 weeks",
          description: "Wireframing, prototyping, and visual design",
        },
        {
          phase: "Development",
          duration: "3-5 weeks",
          description: "Converting designs to interactive interfaces",
        },
        {
          phase: "Testing",
          duration: "1 week",
          description: "User testing and refinement",
        },
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Making your applications lightning-fast and highly efficient",
      features: [
        "Speed audits & analysis",
        "Code optimization",
        "Image & asset optimization",
        "Database performance tuning",
        "CDN implementation",
        "Core Web Vitals improvement",
      ],
      timeline: [
        {
          phase: "Audit",
          duration: "3-5 days",
          description: "Comprehensive performance analysis",
        },
        {
          phase: "Strategy",
          duration: "1 week",
          description: "Optimization strategy development",
        },
        {
          phase: "Implementation",
          duration: "2-4 weeks",
          description: "Performance improvements and testing",
        },
        {
          phase: "Monitoring",
          duration: "Ongoing",
          description: "Continuous monitoring and adjustments",
        },
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description:
        "We start with a comprehensive discussion about your business goals, target audience, and project requirements.",
      duration: "1-2 hours",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "I create a detailed project roadmap, technical specifications, and timeline based on your needs.",
      duration: "2-3 days",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "I bring your vision to life with regular updates and feedback sessions throughout the process.",
      duration: "2-12 weeks",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Comprehensive testing, optimization, and smooth deployment to ensure everything works perfectly.",
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Support & Growth",
      description:
        "Ongoing support, maintenance, and optimization to help your project continue growing.",
      duration: "Ongoing",
    },
  ];

  return (
    <>
      <SeoComponent
        title="Services - Digital Experience Architecture"
        description="Comprehensive web development services including full-stack development, UI/UX design, and performance optimization for modern businesses."
        keywords="Web Development Services, Full-Stack Development, UI/UX Design, Performance Optimization, React Development, Rebhe Ibrahim Services"
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
                Services That{" "}
                <span className="text-blue-500">Drive Results</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                From concept to launch, I provide comprehensive digital
                solutions that help your business grow and succeed in the
                digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <service.icon className="h-12 w-12 text-blue-500 mr-4" />
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-xl text-gray-400 mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const serviceSlug = service.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        // window.location.href = `/services/${serviceSlug}`;
                        navigate(`/services/${serviceSlug}`); // Using navigate instead of window.location.href
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors duration-200 cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>

                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors duration-200"
                    >
                      <Link
                        to={`/services/${service.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}`}
                        className="flex items-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.button> */}
                  </div>

                  <div
                    className={`bg-gray-800/50 p-8 rounded-xl border border-gray-700 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-6 text-center">
                      Project Timeline
                    </h3>
                    <div className="space-y-6">
                      {service.timeline.map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="relative">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                              {phaseIndex + 1}
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold">{phase.phase}</h4>
                                <span className="text-sm text-blue-400">
                                  {phase.duration}
                                </span>
                              </div>
                              <p className="text-gray-400 text-sm">
                                {phase.description}
                              </p>
                            </div>
                          </div>
                          {phaseIndex < service.timeline.length - 1 && (
                            <div className="ml-4 h-6 w-0.5 bg-gray-600 mt-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-4xl font-bold mb-6">My Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
                every time
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
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
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-400 font-semibold">
                      Duration: {step.duration}
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="flex-shrink-0 mx-8">
                      <ArrowRight className="h-8 w-8 text-blue-500" />
                    </div>
                  )}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss your goals and create a digital experience that
                drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.showPopupWidget(
                        // "https://calendly.com/rebheibrahim/30min"
                        "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                      );
                    }
                  }}
                >
                  Schedule Free Consultation
                </motion.button>
                <Link to="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
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

export default ServicesPage;
