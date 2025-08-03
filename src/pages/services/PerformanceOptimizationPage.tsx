import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  BarChart3,
  Target,
  TrendingUp,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../../components/common/SeoComponent";
import { projects } from "../../data/projects";

const PerformanceOptimizationPage = () => {
  // Filter projects related to performance optimization
  const relatedProjects = projects.filter(
    (project) =>
      project.description.toLowerCase().includes("performance") ||
      project.description.toLowerCase().includes("optimization") ||
      project.description.toLowerCase().includes("speed") ||
      project.keyResults.some(
        (result) =>
          result.metric.toLowerCase().includes("lcp") ||
          result.metric.toLowerCase().includes("speed") ||
          result.metric.toLowerCase().includes("performance")
      )
  );

  const optimizationAreas = [
    {
      category: "Core Web Vitals",
      icon: Target,
      metrics: [
        "Largest Contentful Paint (LCP)",
        "Interaction to Next Paint (INP)",
        "Cumulative Layout Shift (CLS)",
        "First Contentful Paint (FCP)",
      ],
    },
    {
      category: "Frontend Performance",
      icon: Zap,
      metrics: [
        "Bundle Size Optimization",
        "Code Splitting",
        "Lazy Loading",
        "Image Optimization",
      ],
    },
    {
      category: "Backend Performance",
      icon: BarChart3,
      metrics: [
        "Database Query Optimization",
        "API Response Times",
        "Caching Strategies",
        "CDN Implementation",
      ],
    },
    {
      category: "User Experience",
      icon: TrendingUp,
      metrics: [
        "Page Load Speed",
        "Time to Interactive",
        "Bounce Rate Reduction",
        "Conversion Rate Improvement",
      ],
    },
  ];

  const features = [
    "Comprehensive performance audit and analysis",
    "Core Web Vitals optimization (LCP, INP, CLS)",
    "Bundle size reduction and code splitting",
    "Image optimization and modern format implementation",
    "Database query optimization",
    "Caching strategy implementation",
    "CDN setup and configuration",
    "Third-party script optimization",
    "Progressive loading and lazy loading",
    "Performance monitoring and reporting",
  ];

  const process = [
    {
      phase: "Performance Audit",
      duration: "3-5 days",
      description:
        "Comprehensive analysis of your current application using industry-standard tools to identify performance bottlenecks and opportunities.",
      deliverables: [
        "Detailed performance report",
        "Lighthouse audit results",
        "Core Web Vitals analysis",
        "Optimization roadmap",
      ],
    },
    {
      phase: "Strategy Development",
      duration: "1 week",
      description:
        "Creating a prioritized optimization strategy based on audit findings, focusing on high-impact improvements first.",
      deliverables: [
        "Optimization strategy document",
        "Implementation timeline",
        "Expected performance gains",
        "Technical specifications",
      ],
    },
    {
      phase: "Frontend Optimization",
      duration: "1-2 weeks",
      description:
        "Implementing frontend optimizations including code splitting, image optimization, and reducing bundle sizes.",
      deliverables: [
        "Optimized frontend code",
        "Reduced bundle sizes",
        "Improved loading strategies",
        "Enhanced user experience",
      ],
    },
    {
      phase: "Backend Optimization",
      duration: "1-2 weeks",
      description:
        "Optimizing server-side performance through database tuning, caching implementation, and API improvements.",
      deliverables: [
        "Database optimization",
        "Caching implementation",
        "API performance improvements",
        "Server configuration",
      ],
    },
    {
      phase: "Testing & Validation",
      duration: "1 week",
      description:
        "Thorough testing of all optimizations and validation of performance improvements using real-world metrics.",
      deliverables: [
        "Performance test results",
        "Before/after comparisons",
        "Core Web Vitals improvements",
        "User experience validation",
      ],
    },
    {
      phase: "Monitoring Setup",
      duration: "2-3 days",
      description:
        "Setting up continuous performance monitoring to track improvements and catch any regressions early.",
      deliverables: [
        "Performance monitoring dashboard",
        "Alert configurations",
        "Reporting setup",
        "Maintenance guidelines",
      ],
    },
  ];

  const performanceMetrics = [
    {
      metric: "Page Load Speed",
      improvement: "Up to 70% faster",
      description: "Significant reduction in initial page load times",
    },
    {
      metric: "Bundle Size",
      improvement: "50-80% smaller",
      description: "Optimized code and asset delivery",
    },
    {
      metric: "Core Web Vitals",
      improvement: "Green scores",
      description: "Meeting Google's performance standards",
    },
    {
      metric: "User Engagement",
      improvement: "25-40% increase",
      description: "Better performance leads to higher engagement",
    },
  ];

  const faqs = [
    {
      question: "How much can you improve my website's performance?",
      answer:
        "Performance improvements vary based on the current state of your application. Typically, I achieve 50-70% improvements in load times, significant Core Web Vitals improvements, and 25-40% increases in user engagement. I provide detailed before/after metrics for all optimizations.",
    },
    {
      question:
        "Will performance optimization affect my website's functionality?",
      answer:
        "No, performance optimization enhances your website without compromising functionality. All optimizations are thoroughly tested to ensure your application works exactly as intended, just faster and more efficiently.",
    },
    {
      question: "How long does performance optimization take?",
      answer:
        "Most performance optimization projects take 2-4 weeks, depending on the complexity of your application and the extent of optimizations needed. I provide a detailed timeline after the initial audit.",
    },
    {
      question: "Do you provide ongoing performance monitoring?",
      answer:
        "Yes, I set up comprehensive performance monitoring systems and can provide ongoing maintenance packages to ensure your application maintains optimal performance over time.",
    },
  ];

  return (
    <>
      <SeoComponent
        title="Performance Optimization Services - Lightning-Fast Web Applications"
        description="Professional web performance optimization services. Improve Core Web Vitals, reduce load times, and boost user engagement with expert performance tuning."
        keywords="Performance Optimization, Core Web Vitals, Website Speed Optimization, Bundle Size Reduction, LCP Optimization, Web Performance"
        schemaType="WebSite"
        ogImageUrl="/images/services/performance-optimization-og.jpg"
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
                <Zap className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Performance <span className="text-blue-500">Optimization</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Transform your slow website into a lightning-fast digital
                experience. I optimize every aspect of your application to
                achieve superior performance, better SEO rankings, and increased
                user engagement.
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
                Get Performance Audit
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
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
                Typical Performance Improvements
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real results from recent optimization projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {metric.improvement}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{metric.metric}</h3>
                  <p className="text-gray-400 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Optimization Areas</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive performance optimization covering all aspects of
                your application
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationAreas.map((area, index) => (
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
                    {area.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-gray-400 text-sm">
                        {metric}
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
                  Comprehensive performance optimization services that cover
                  every aspect of your application, from frontend to backend
                  optimization.
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
                  Why Performance Matters?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Better User Experience
                    </h4>
                    <p className="text-gray-400">
                      Fast-loading websites provide better user experiences,
                      leading to higher engagement and lower bounce rates.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Improved SEO Rankings
                    </h4>
                    <p className="text-gray-400">
                      Google considers page speed as a ranking factor. Better
                      Core Web Vitals lead to improved search engine visibility.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Higher Conversions
                    </h4>
                    <p className="text-gray-400">
                      Studies show that even a 1-second delay in page load time
                      can result in a 7% reduction in conversions.
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
              <h2 className="text-4xl font-bold mb-6">Optimization Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A systematic approach to identifying and implementing
                performance improvements
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
                <h2 className="text-4xl font-bold mb-6">
                  Performance Success Stories
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  See how performance optimization has transformed these
                  applications
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
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                          Optimized
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
                      <div className="mb-4">
                        {project.keyResults
                          .filter(
                            (result) =>
                              result.metric.toLowerCase().includes("lcp") ||
                              result.metric.toLowerCase().includes("speed") ||
                              result.metric
                                .toLowerCase()
                                .includes("performance")
                          )
                          .slice(0, 1)
                          .map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="text-green-400 font-semibold text-sm"
                            >
                              {result.metric}: {result.value}
                            </div>
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
                Common questions about performance optimization services
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
                Ready to Boost Your Performance?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's analyze your current performance and create a custom
                optimization strategy that delivers measurable improvements.
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
                  Start Optimization
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Get Performance Quote
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

export default PerformanceOptimizationPage;
