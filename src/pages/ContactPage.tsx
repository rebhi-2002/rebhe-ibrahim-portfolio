import  { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import SeoComponent from "../components/SeoComponent";
import Toast from "../components/common/Toast";

const ContactPage = () => {
  // استخراج دالة إعادة التعيين من useForm
  // The useForm hook returns a reset function as the third element.
  const [state, formspreeHandleSubmit, resetFormspree] = useForm("mnnzjygd");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [toast, setToast] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please provide a message of at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      formspreeHandleSubmit(e);
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setToast({
        type: "success",
        message: "Thank you for your message! I will get back to you soon.",
      });

      // Reset local form state on successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setErrors({});

      // Reset formspree state for the next submission
      resetFormspree();
    }
    // Optional: Handle general form errors if needed
    if (state.errors && !state.succeeded) {
      const formErrors = state.errors.getFormErrors();
      if (formErrors.length > 0) {
        setToast({
          type: "error",
          message:
            formErrors.map((err) => err.message).join(", ") ||
            "An error occurred. Please try again.",
        });
      }
    }
  }, [state.succeeded, state.errors, resetFormspree]); // Keep state.errors here to show server-side errors

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "rebheibrahim@gmail.com",
      action: "Send Email",
      link: "mailto:rebheibrahim@gmail.com",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      action: "Book Now",
      link: null,
    },
    {
      icon: MessageCircle,
      title: "Quick Chat",
      description: "Message me on LinkedIn",
      action: "Connect",
      link: "https://linkedin.com/in/rebhe-ibrahim-451504244",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/rebhi-2002" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rebhe-ibrahim-451504244",
    },
  ];

  const faqs = [
    {
      question: "What is the typical project timeline?", // "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. A standard website may take 2-4 weeks, while complex web applications can range from 8-16 weeks. A detailed, custom timeline is provided after our initial consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely. We collaborate with clients worldwide and are adept at working across different time zones through clear communication via email, video calls, and project management tools.",
    },
    {
      question: "What is included in the development process?", // "What is included in your development process?",
      answer:
        "Our process is comprehensive, including discovery, UI/UX design, development, testing, deployment, and post-launch support. We ensure clients are involved in key decisions throughout the project lifecycle.",
    },
    {
      question: "Is ongoing maintenance provided?", // "Do you provide ongoing maintenance?",
      answer:
        "Yes, we offer ongoing maintenance packages that include security updates, performance optimization, content updates, and technical support. We can discuss a plan tailored to your specific needs.",
    },
  ];

  return (
    <>
      {toast && <Toast {...toast} onClose={() => setToast(null)} autoClose={true} />}
      <SeoComponent
        title="Contact - Let's Build Something Amazing Together"
        description="Ready to transform your digital presence? Get in touch to discuss your project and discover how we can bring your vision to life."
        keywords="Contact Rebhe Ibrahim, Web Development Consultation, Project Inquiry, Digital Experience Architect"
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
                Let's Build Something{" "}
                <span className="text-blue-500">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Ready to transform your digital presence? I'd love to hear about
                your project and discuss how we can bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the way that works best for you to start our conversation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center group"
                >
                  <method.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  {method.title === "Schedule a Call" ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      onClick={(event) => {
                        event.preventDefault();
                        if (window.Calendly) {
                          window.Calendly.showPopupWidget(
                            "https://calendly.com/rebheibrahim/30min?background_color=1A252F&text_color=FFFFFF&primary_color=00A3FF"
                          );
                        }
                      }}
                    >
                      {method.action}
                    </motion.button>
                  ) : (
                    <motion.a
                      href={method.link ?? undefined}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {method.action}
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl font-bold mb-6">Project Details</h2>
                <p className="text-gray-400 mb-8">
                  Tell me about your project and I'll get back to you within
                  24-48 hours with a detailed response and next steps.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                    <span>Remote / Global</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-3 text-blue-500" />
                    <span>Available for calls</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-3 text-blue-500" />
                    <span>24-48 hour response time</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        autoComplete="name"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Your full name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        autoComplete="email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        autoComplete="organization"
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="Your company name"
                      />
                      <ValidationError
                        prefix="Company"
                        field="company"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select project type</option>
                        <option value="web-app">Web Application</option>
                        <option value="website">Website</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="optimization">
                          Performance Optimization
                        </option>
                        <option value="consultation">Consultation</option>
                      </select>
                      <ValidationError
                        prefix="Project Type"
                        field="projectType"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                      {errors.projectType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.projectType}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5K - $10K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k+">$50K+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                      <ValidationError
                        prefix="Budget"
                        field="budget"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <ValidationError
                        prefix="Timeline"
                        field="timeline"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </motion.button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    I typically respond within 24-48 hours
                  </p>
                </form>
              </motion.div>
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
                Quick answers to common questions about the process.{" "}
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
      </motion.div>
    </>
  );
};

export default ContactPage;
