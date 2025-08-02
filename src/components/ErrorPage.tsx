// src/components/ErrorPage.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const ErrorPage = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-md mx-auto px-4">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-white mb-3">
          An Error Occurred
        </h1>

        <p className="text-lg text-gray-400 mb-8">{message}</p>

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Back to Articles</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
