"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  // Play,
  Star,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../components/SeoComponent";
import FormComponent from "../components/FormComponent";
import LatestPost from "./LatestPost";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      id: 4,
      title: "Car World - Automotive Services Platform",
      description:
        "AI-powered 3-in-1 platform for rentals, e-commerce, and services.", // <-- وصف مختصر ومؤثر
      image: "/images/projects/car-world/hero.png",
      metrics: "Admin panel enhanced with Google's Vertex AI", // <-- أبرز مقياس نجاح
      tech: ["React", "Firebase", "Vertex AI", "TypeScript"], // <-- أهم 4 تقنيات
    },
    {
      id: 5,
      title: "FastBite - High-Performance Food Delivery Website",
      description:
        "A marketing website rebuilt for elite performance and Core Web Vitals.",
      image: "/images/projects/fastbite/hero.png",
      metrics: "LCP improved from 3.8s to under 2.5s",
      tech: ["React", "TypeScript", "Framer Motion", "GSAP"],
    },
    {
      id: 2,
      title: "BookIn - Luxury Hotel Booking Platform",
      description:
        "Full-stack booking platform with a hybrid backend architecture.",
      image: "/images/projects/bookin/hero.png",
      metrics: "Hybrid Backend using Firebase & Node.js",
      tech: ["Next.js", "Firebase", "Node.js", "Stripe"],
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Discovery",
      description: "Understanding your business goals and user needs",
    },
    {
      icon: TrendingUp,
      title: "Design",
      description: "Creating intuitive interfaces and user experiences",
    },
    {
      icon: Users,
      title: "Development",
      description: "Building high-performance, scalable applications",
    },
    {
      icon: Star,
      title: "Launch",
      description: "Deploying and optimizing for maximum impact",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow",
      content:
        "Rebhe transformed our outdated platform into a modern, high-performing application. The results exceeded our expectations.",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Marcus Johnson",
      role: "Founder, StartupXYZ",
      content:
        "Working with Rebhe was a game-changer. His attention to detail and technical expertise are unmatched.",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager, InnovateCorp",
      content:
        "The performance improvements Rebhe delivered saved us thousands in infrastructure costs.",
      avatar:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  return (
    <>
      <SeoComponent
        title="Rebhe Ibrahim - Digital Experience Architect"
        description="Building high-performance web applications that scale, convert, and deliver exceptional user experiences for modern businesses."
        keywords="Rebhe Ibrahim, Digital Experience Architect, Web Development, React, Next.js, TypeScript, UI/UX Design, Performance Optimization, Full-Stack Developer"
        schemaType="WebSite"
        ogImageUrl="/images/about/rebhe-ibrahim-web-developer.png"
      />
      <motion.div
        initial="initial"
        animate="animate"
        className="pt-16 overflow-x-hidden"
      >
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
              >
                Architecting Digital Experiences That Perform
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Building high-performance web applications that scale, convert,
                and deliver exceptional user experiences for modern businesses.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    View My Work
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                {/* <a
                  href="https://calendly.com/rebheibrahim/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.showPopupWidget(
                        // "https://calendly.com/rebheibrahim/30min"
                        "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                      );
                    }
                  }}
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Schedule Discovery Call
                </motion.button>
                {/* </a> */}
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-xl"
            />
          </div>
        </section>

        {/* Proof of Concept Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas Into{" "}
                <span className="text-blue-500">Digital Reality</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how I turn complex business requirements into elegant,
                high-performing solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: "50%", label: "Faster Load Times", icon: Zap },
                {
                  metric: "300%",
                  label: "Higher Conversions",
                  icon: TrendingUp,
                },
                { metric: "99.9%", label: "Uptime Achieved", icon: Star },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <item.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured Work
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A showcase of recent projects that demonstrate technical
                excellence and business impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="text-blue-500 font-semibold mb-4">
                      {project.metrics}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link to={`/case-studies/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        View Case Study
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View All Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Timeline */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                My Process
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A structured approach to delivering exceptional digital
                experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>

                  {index < services.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-600/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Hear from the founders and teams I've helped achieve their
                digital goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From The Blog
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Insights on web development, performance optimization, and
                digital strategy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Blog featured"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      Latest Post
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3">
                    Mastering React Performance: Complete Guide 2024
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn advanced techniques to optimize your React
                    applications for maximum performance and user experience.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>5 min read</span>
                    <span className="mx-2">•</span>
                    <span>Dec 15, 2024</span>
                  </div>
                </div>
              </motion.div> */}
              <LatestPost />

              {/* <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest insights on web development, performance tips,
                  and industry trends delivered to your inbox.
                </p>
                <form
                  // 1. الصق رابط الإرسال هنا
                  className="space-y-4"
                  action="https://gmail.us7.list-manage.com/subscribe/post?u=285da69551a8c05fb4b144b58&id=759d09647c&f_id=00e6b1e4f0"
                  method="post"
                  target="_blank"
                >
                  {/* حقل الاسم الأول (إذا أضفته) *|}
                  <input
                    type="text"
                    placeholder="First Name"
                    name="FNAME" // 3. تأكد من أن الاسم هنا هو "FNAME"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="EMAIL" // 2. تأكد من أن الاسم هنا هو "EMAIL"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Subscribe Now
                  </motion.button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </motion.div> */}
              <FormComponent />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Read All Articles
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
