import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  // ArrowRight,
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoComponent from "../components/SeoComponent";

interface CaseStudySection {
  image: string;
  description: string;
  title?: string;
}

interface ProjectData {
  id: number;
  title: string;
  description: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  timeline: string;
  client: string;
  keyResults: {
    metric: string;
    value: string;
    description: string;
  }[];
  caseStudySections: CaseStudySection[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
    avatar?: string;
  };
}

interface ProjectDetailPageProps {
  project: ProjectData;
  previousProject?: { id: number; title: string; image: string };
  nextProject?: { id: number; title: string; image: string };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  previousProject,
  nextProject,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  // Collect all images from the project
  useEffect(() => {
    const images = [
      project.image,
      ...project.caseStudySections.map((section) => section.image),
    ].filter(Boolean);
    setAllImages(images);
  }, [project]);

  const openLightbox = (imageUrl: string) => {
    const index = allImages.indexOf(imageUrl);
    setCurrentImageIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : allImages.length - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev < allImages.length - 1 ? prev + 1 : 0
        );
      }
    },
    [allImages.length]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, navigateImage]);

  return (
    <>
      <SeoComponent
        title={project.title}
        description={project.description}
        keywords={`${project.tech.join(", ")}, case study, web development, ${
          project.category
        }`}
        schemaType="Project"
        ogImageUrl={project.image}
        tags={project.tech}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-950 text-gray-100 pt-24 pb-20"
      >
        {/* Back Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </motion.a>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Client:</span>
                  <div className="font-semibold">{project.client}</div>
                </div>
                <div>
                  <span className="text-gray-500">Timeline:</span>
                  <div className="font-semibold">{project.timeline}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  onClick={() => openLightbox(project.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Results Box */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.keyResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {result.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Project Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.challenge}
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Technologies Used
              </h3>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.solution}
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Results Achieved
              </h3>
              <div className="space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Project Deep Dive</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A detailed walkthrough of the design and development process
            </p>
          </motion.div>

          <div className="space-y-20">
            {project.caseStudySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                    <img
                      src={section.image}
                      alt={section.title || `Case study section ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      onClick={() => openLightbox(section.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  {section.title && (
                    <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                  )}
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center"
            >
              <p className="text-xl text-gray-300 italic mb-6">
                "{project.testimonial.content}"
              </p>
              <div className="flex items-center justify-center">
                {project.testimonial.avatar && (
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-semibold">
                    {project.testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {project.testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Have a Similar Challenge?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how I can help transform your digital presence and
              achieve measurable results for your business.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Let's Talk About Your Project
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Project Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previousProject && (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to={`/case-studies/${previousProject.id}`}
                  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                >
                  <div className="flex items-center mb-4">
                    <ChevronLeft className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 text-sm font-medium">
                      Previous Project
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={previousProject.image}
                      alt={previousProject.title}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors duration-200">
                      {previousProject.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            )}

            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={!previousProject ? "md:col-start-2" : ""}
              >
                <Link
                  to={`/case-studies/${nextProject.id}`}
                  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                >
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-blue-400 text-sm font-medium">
                      Next Project
                    </span>
                    <ChevronRight className="h-5 w-5 text-blue-400 ml-2" />
                  </div>
                  <div className="flex items-center justify-end">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors duration-200 mr-4">
                      {nextProject.title}
                    </h3>
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={allImages[currentImageIndex]}
                  alt="Project detail"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage("prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => navigateImage("next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;
