import { motion } from "framer-motion";
import { Code2, Users, Zap, Award, Coffee, BookOpen } from "lucide-react";
import SeoComponent from "../components/SeoComponent";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 70 }, // 90
    { name: "UI/UX Design", level: 85 },
    { name: "Performance Optimization", level: 92 },
    { name: "DevOps & Deployment", level: 60 }, // 80
    { name: "Project Management", level: 85 }, // 88
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Great products are built by great teams working together towards a common goal",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Every millisecond matters. I optimize for speed, efficiency, and user experience",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "I strive for excellence in every project, paying attention to the smallest details",
    },
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Coding",
      description:
        "Began my journey with JavaScript and fell in love with web development",
    },
    {
      year: "2021",
      title: "First Client Project",
      description:
        "Delivered my first freelance project - a local business website",
    },
    {
      year: "2022",
      title: "Full-Stack Focus",
      description: "Expanded into backend development and database design",
    },
    {
      year: "2023",
      title: "Agency Partnership",
      description:
        "Started collaborating with design agencies on complex projects",
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description:
        "Began working on large-scale applications for enterprise clients",
    },
    {
      year: "2025",
      title: "Digital Architect",
      description:
        "Established myself as a Digital Experience Architect and mentor",
    },
  ];

  return (
    <>
      <SeoComponent
        title="About Rebhe Ibrahim"
        description="Learn about my journey as a Digital Experience Architect, my passion for clean code, and how I help businesses transform their digital presence."
        keywords="About Rebhe Ibrahim, Digital Experience Architect, Web Developer Background, Full-Stack Developer"
        schemaType="Person"
        ogImageUrl="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <motion.div
        initial="initial"
        animate="animate"
        className="pt-24 pb-20 overflow-x-hidden"
      >
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:col-span-3">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Building Digital Experiences That{" "}
                  <span className="text-blue-500">Matter</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  I'm Rebhe Ibrahim, a Digital Experience Architect passionate
                  about creating high-performance web applications that solve
                  real business problems and deliver exceptional user
                  experiences.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  With over 4 years of experience in web development, I
                  specialize in transforming complex ideas into elegant,
                  scalable solutions. I believe in clean code, user-centered
                  design, and the power of technology to drive business growth.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Coffee className="h-4 w-4 mr-2" />
                    <span>Coffee enthusiast</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>Lifelong learner</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <img
                    src="/images/about/rebhe-ibrahim-web-developer.png"
                    alt="Rebhe Ibrahim"
                    className="relative z-10 w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">My Core Values</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide every project and decision I make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                >
                  <value.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">Technical Expertise</h2>
                <p className="text-xl text-gray-400 mb-8">
                  A comprehensive skill set built through years of hands-on
                  experience and continuous learning in the ever-evolving tech
                  landscape.
                </p>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
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
                <h3 className="text-2xl font-bold mb-6">Philosophy</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      User-Centered Design
                    </h4>
                    <p className="text-gray-400">
                      Every decision I make starts with the user. I believe in
                      creating intuitive, accessible experiences that delight
                      and engage.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Performance First
                    </h4>
                    <p className="text-gray-400">
                      Speed matters. I optimize every aspect of an application
                      to ensure fast load times and smooth interactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-400">
                      Technology evolves rapidly, and so do I. I'm constantly
                      learning new tools and techniques to stay at the cutting
                      edge.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">My Journey</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From curious beginner to Digital Experience Architect - every
                step shaped who I am today
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500/30"></div>

              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"></div>

                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <div className="text-blue-500 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Beyond The Code</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Outside of work, I enjoy exploring modern design trends,
                contributing to open-source projects, and mentoring junior
                developers. I believe in giving back to the community that has
                given me so much.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me reading about emerging
                technologies, experimenting with new frameworks, or enjoying a
                perfect cup of coffee while planning the next big project.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;
