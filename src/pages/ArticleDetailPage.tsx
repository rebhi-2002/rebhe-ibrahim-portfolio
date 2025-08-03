import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  X,
  Twitter,
  Linkedin,
  Link2,
  MessageSquare,
} from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { AnimatePresence } from "framer-motion";
import "prismjs/components/prism-jsx";

import SeoComponent from "../components/SeoComponent";
import AuthorBio from "../components/blog/AuthorBio";

import { articlesData } from "../data/blogData";
import ArticleSkeleton from "../components/blog/ArticleSkeleton";

import ErrorPage from "./ErrorPage";

// Load article content as TSX component dynamically
const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ArticleComponent, setArticleComponent] =
    useState<React.LazyExoticComponent<React.ComponentType> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState("Copy Link");
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const article = useMemo(
    () => articlesData.find((a) => a.slug === slug),
    [slug]
  );
  const currentIndex = useMemo(
    () => articlesData.findIndex((a) => a.slug === slug),
    [slug]
  );

  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < articlesData.length - 1
      ? articlesData[currentIndex + 1]
      : null;

  // Load the article component dynamically
  useEffect(() => {
    if (!slug) return;
    setError(null);
    setArticleComponent(null);

    const modules = import.meta.glob("../data/articles/*.tsx");
    const matchedPath = `../data/articles/${slug}.tsx`;
    const loadModule = modules[matchedPath];

    if (loadModule) {
      // import(`../data/articles/${slug}`)
      loadModule()
        .then((mod) => {
          const component = mod as { default: React.ComponentType };
          setArticleComponent(
            lazy(() => Promise.resolve({ default: component.default }))
          );
          // setTimeout(() => Prism.highlightAll(), 0);
        })
        .catch((err) => {
          console.error("Error loading article component:", err);
          setError(
            "🚫 This article is not available or the component is missing."
          );
        });
    } else {
      setError(`🚫 Article with slug "${slug}" was not found.`);
    }
  }, [slug]);

  useEffect(() => {
    if (ArticleComponent) {
      const timer = setTimeout(() => {
        Prism.highlightAll();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [ArticleComponent]);

  const openLightbox = () => {
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isLightboxOpen && e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isLightboxOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyStatus("✅ Link Copied");
    setTimeout(() => setCopyStatus("Copy Link"), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article?.title || "");

  if (error)
    return (
      // <div className="text-center py-20 text-red-400 text-lg">🚫 {error}</div>
      <ErrorPage message={error} />
    );

  if (!article || !ArticleComponent)
    return (
      // <div className="text-center py-20 text-blue-400 animate-pulse">
      //   ⏳ Preparing your content...
      // </div>
      <ArticleSkeleton />
    );

  return (
    <>
      <SeoComponent
        title={`${article.title} | Blog`}
        description={article.excerpt}
        keywords={article.tags.join(", ")}
        ogImageUrl={article.image}
        schemaType="Article"
        publishedTime={new Date(article.publishDate).toISOString()}
        author={article.author.name}
        articleSection={article.category}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <Link
              to="/blog"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>
            <p className="text-blue-500 font-semibold text-sm mb-2 tracking-wider">
              {article.category.toUpperCase()}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex justify-center items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readTime} read</span>
            </div>
          </motion.header>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 cursor-pointer group"
            onClick={openLightbox}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 prose prose-invert prose-lg max-w-none mx-auto prose-headings:text-blue-400"
          >
            <Suspense
              fallback={
                <div className="text-blue-300">✨ Loading content...</div>
              }
            >
              <ArticleComponent />
            </Suspense>
          </motion.article>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-3">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?category=${tag}`}
                className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 hover:text-white rounded-full text-sm font-medium"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 flex items-center gap-4 border-t border-b border-gray-700 py-6">
            <Share2 className="h-6 w-6 text-blue-400" />
            <h3 className="text-lg font-semibold">Share this article</h3>
            <div className="flex-grow" />
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&via=RebheIbrahim`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
              aria-label="Copy link"
            >
              <Link2 className="h-5 w-5" />
              {copyStatus}
            </button>
          </div>

          {/* Author Bio */}
          <AuthorBio author={article.author} />

          {/* Navigation */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
            {prevArticle ? (
              <Link to={`/blog/${prevArticle.slug}`} className="text-left">
                <p className="text-sm text-gray-400 flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous Article
                </p>
                <p className="text-lg font-semibold text-white hover:text-blue-400 transition-colors mt-1">
                  {prevArticle.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link to={`/blog/${nextArticle.slug}`} className="text-right">
                <p className="text-sm text-gray-400 flex items-center justify-end">
                  Next Article <ArrowRight className="ml-2 h-4 w-4" />
                </p>
                <p className="text-lg font-semibold text-white hover:text-blue-400 transition-colors mt-1">
                  {nextArticle.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Comments Placeholder */}
          <section className="mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <MessageSquare className="h-8 w-8 text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold">Join the Discussion</h2>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
              <p className="text-gray-400">
                Comments are coming soon! We're working on a great way for you
                to share your thoughts.
              </p>
            </div>
          </section>
        </div>
        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
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
                  src={article.image}
                  alt={article.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-2 -right-2 bg-gray-800/80 hover:bg-gray-700/90 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ArticleDetailPage;

// import { Suspense, lazy, useEffect, useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Calendar,
//   Clock,
//   ArrowLeft,
//   ArrowRight,
//   Share2,
//   Twitter,
//   Linkedin,
//   Link2,
//   MessageSquare,
// } from "lucide-react";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css";
// import "prismjs/components/prism-jsx";

// import SeoComponent from "../components/SeoComponent";
// import AuthorBio from "../components/AuthorBio";
// import { articlesData } from "../data/blogData";

// import { articlesContent } from "../data/articlesContent";

// // Lazy load content sections
// const Section = lazy(() => import("../components/Section"));

// // Define structure of fetched JSON data
// interface ArticleData {
//   title: string;
//   sections: Record<string, string>;
// }

// const ArticleDetailPage = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [articleData, setArticleData] = useState<ArticleData | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [copyStatus, setCopyStatus] = useState("Copy Link");

//   const article = useMemo(
//     () => articlesData.find((a) => a.slug === slug),
//     [slug]
//   );
//   const currentIndex = useMemo(
//     () => articlesData.findIndex((a) => a.slug === slug),
//     [slug]
//   );

//   const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
//   const nextArticle =
//     currentIndex >= 0 && currentIndex < articlesData.length - 1
//       ? articlesData[currentIndex + 1]
//       : null;

//   // Fetch article JSON file and highlight code
//   useEffect(() => {
//     if (!slug) return;

//     setError(null);
//     setArticleData(null);

//     fetch(`/src/data/articles/${slug}.json`)
//       .then(async (res) => {
//         const contentType = res.headers.get("Content-Type") || "";

//         if (!res.ok || !contentType.includes("application/json")) {
//           // throw new Error(`Article not found (404) for slug: ${slug}`);
//           const fallbackText = await res.text();
//           console.error("Invalid JSON response:", fallbackText);
//           throw new Error(
//             "❌ This article is not available or the format is invalid."
//           );
//         }
//         return res.json();
//       })
//       .then((data: ArticleData) => {
//         setArticleData(data);
//         // Re-highlight Prism code blocks after content is injected
//         setTimeout(() => Prism.highlightAll(), 0);
//       })
//       .catch((err) => {
//         console.error("Error loading article:", err);
//         setError(err.message || "Unexpected error loading the article.");
//       });
//   }, [slug]);

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopyStatus("Copied!");
//     setTimeout(() => setCopyStatus("Copy Link"), 2000);
//   };

//   const shareUrl = encodeURIComponent(window.location.href);
//   const shareTitle = encodeURIComponent(article?.title || "");

//   if (error) return <div className="text-center py-20">❌ Error: {error}</div>;
//   if (!article || !articleData)
//     return <div className="text-center py-20">⏳ Loading article...</div>;

//   const content = slug ? articlesContent[slug] : null;

//   if (!content) {
//     return (
//       <div className="text-center py-20 text-red-500">
//         ❌ Article not found or invalid slug.
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* SEO metadata for search engines and social sharing */}
//       <SeoComponent
//         title={`${article.title} | Blog`}
//         description={article.excerpt}
//         keywords={article.tags.join(", ")}
//         ogImageUrl={article.image}
//         schemaType="Article"
//         publishedTime={new Date(article.publishDate).toISOString()}
//         author={article.author.name}
//         articleSection={article.category}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="pt-24 pb-20"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Article Header */}
//           <motion.header
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center mb-12"
//           >
//             <Link
//               to="/blog"
//               className="text-blue-400 hover:text-blue-300 inline-flex items-center mb-4"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to all articles
//             </Link>
//             <p className="text-blue-500 font-semibold text-sm mb-2 tracking-wider">
//               {article.category.toUpperCase()}
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               {article.title}
//             </h1>
//             <div className="flex justify-center items-center text-sm text-gray-400">
//               <Calendar className="h-4 w-4 mr-2" />
//               <span>
//                 {new Date(article.publishDate).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>
//               <span className="mx-2">•</span>
//               <Clock className="h-4 w-4 mr-2" />
//               <span>{article.readTime} read</span>
//             </div>
//           </motion.header>

//           {/* Article Main Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-12 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20"
//           >
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-auto object-cover aspect-video"
//             />
//           </motion.div>

//           {/* Article Sections: Each section is rendered from JSON dynamically */}
//           <motion.article
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-col gap-8 prose prose-invert prose-lg max-w-none mx-auto prose-headings:text-blue-400"
//             // dangerouslySetInnerHTML={{ __html: contentHtml }}
//           >
//             {/* {Object.entries(articleData.sections).map(([sectionKey, html]) => (
//               <Suspense
//                 key={sectionKey}
//                 fallback={<div>Loading section...</div>}
//               >
//                 <Section content={html} />
//               </Suspense>
//             ))} */}

//             {/* {Object.entries(articleData.sections).map(([key, content]) => (
//               <Suspense key={key} fallback={<div>🌀 Loading section...</div>}>
//                 <Section content={content} />
//               </Suspense>
//             ))} */}

//             {content}
//             {/* <MarkdownArticlePage slug={article.slug} /> */}
//           </motion.article>

//           {/* Article Tags */}
//           <div className="mt-12 flex flex-wrap gap-3">
//             {article.tags.map((tag) => (
//               <Link
//                 key={tag}
//                 to={`/blog?category=${tag}`}
//                 className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 hover:text-white rounded-full text-sm font-medium"
//               >
//                 {tag}
//               </Link>
//             ))}
//           </div>

//           {/* Social Sharing Section */}
//           <div className="mt-12 flex items-center gap-4 border-t border-b border-gray-700 py-6">
//             <Share2 className="h-6 w-6 text-blue-400" />
//             <h3 className="text-lg font-semibold">Share this article</h3>
//             <div className="flex-grow" />
//             <a
//               href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&via=RebheIbrahim`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
//               aria-label="Share on Twitter"
//             >
//               <Twitter className="h-5 w-5" />
//             </a>
//             <a
//               href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
//               aria-label="Share on LinkedIn"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//             <button
//               onClick={handleCopyLink}
//               className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
//               aria-label="Copy link"
//             >
//               <Link2 className="h-5 w-5" />
//               {copyStatus}
//             </button>
//           </div>

//           {/* Author Information */}
//           <AuthorBio author={article.author} />

//           {/* Navigation to Next/Previous Articles */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
//             {prevArticle ? (
//               <Link to={`/blog/${prevArticle.slug}`} className="text-left">
//                 <p className="text-sm text-gray-400 flex items-center">
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Previous Article
//                 </p>
//                 <p className="text-lg font-semibold text-white hover:text-blue-400 transition-colors mt-1">
//                   {prevArticle.title}
//                 </p>
//               </Link>
//             ) : (
//               <div />
//             )}
//             {nextArticle ? (
//               <Link to={`/blog/${nextArticle.slug}`} className="text-right">
//                 <p className="text-sm text-gray-400 flex items-center justify-end">
//                   Next Article <ArrowRight className="ml-2 h-4 w-4" />
//                 </p>
//                 <p className="text-lg font-semibold text-white hover:text-blue-400 transition-colors mt-1">
//                   {nextArticle.title}
//                 </p>
//               </Link>
//             ) : (
//               <div />
//             )}
//           </div>

//           {/* Comment Placeholder */}
//           <section className="mt-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center mb-8">
//               <MessageSquare className="h-8 w-8 text-blue-500 mr-4" />
//               <h2 className="text-3xl font-bold">Join the Discussion</h2>
//             </div>
//             <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center">
//               <p className="text-gray-400">
//                 Comments are coming soon! We're working on a great way for you
//                 to share your thoughts.
//               </p>
//             </div>
//           </section>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default ArticleDetailPage;
