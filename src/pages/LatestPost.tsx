import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articlesData } from "../data/blogData";

const LatestPost = () => {
  const sortedArticles = [...articlesData].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const latestArticle = sortedArticles[0];

  if (!latestArticle) {
    return null;
  }

  return (
    <Link to={`/blog/${latestArticle.slug}`}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={latestArticle.image}
            alt={latestArticle.title}
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Latest Post
            </span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
            {latestArticle.title}
          </h3>
          <p className="text-gray-400 mb-4">{latestArticle.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{latestArticle.readTime} read</span>
            <span className="mx-2">•</span>
            <span>
              {new Date(latestArticle.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default LatestPost;
