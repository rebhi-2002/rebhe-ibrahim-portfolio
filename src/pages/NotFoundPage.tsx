import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileSearch, ArrowLeft } from "lucide-react";
import SeoComponent from "../components/SeoComponent";

const NotFoundPage = () => {
  return (
    <>
      <SeoComponent
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Let's get you back on track."
        noIndex={true} // مهم لمنع محركات البحث من أرشفة هذه الصفحة
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center text-center bg-gray-950 text-gray-100 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FileSearch className="h-24 w-24 text-blue-500 mx-auto mb-8" />
          <h1 className="text-6xl md:text-8xl font-bold font-clash mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            It seems you've ventured into uncharted territory. The page you're
            looking for might have been moved, deleted, or never existed.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center mx-auto gap-2 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Go Back to Homepage
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NotFoundPage;
