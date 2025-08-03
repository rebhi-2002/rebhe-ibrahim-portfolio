import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import ToolboxPage from "./pages/ToolboxPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import FullStackDevelopmentPage from "./pages/services/FullStackDevelopmentPage";
import UIDesignPage from "./pages/services/UIDesignPage";
import PerformanceOptimizationPage from "./pages/services/PerformanceOptimizationPage";

import ScrollToTop from "./components/common/ScrollToTop";
import CalendlyScriptLoader from "./components/utilities/CalendlyScriptLoader";

import NotFoundPage from "./pages/NotFoundPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <ScrollToTop />
        <CalendlyScriptLoader />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/full-stack-development" element={<FullStackDevelopmentPage />} />
            <Route path="/services/ui-ux-design-development" element={<UIDesignPage />} />
            <Route path="/services/performance-optimization" element={<PerformanceOptimizationPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
            <Route path="/toolbox" element={<ToolboxPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
