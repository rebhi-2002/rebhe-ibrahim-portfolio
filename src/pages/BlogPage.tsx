import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  // TrendingUp,
} from "lucide-react";
import SeoComponent from "../components/common/SeoComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageWithSkeleton from "../components/blog/ImageWithSkeleton";

import {
  articlesData as articles,
  recommendedReadsData as recommendedReads,
} from "../data/blogData";

import Pagination from "../components/blog/Pagination";

import NewsletterSection from "../components/forms/NewsletterSection";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesGridRef = useRef<HTMLDivElement>(null);
  const articlesPerPage = 7;

  const navigate = useNavigate();
  const location = useLocation();

  // --- التحسين 1: استخدام useMemo لتجنب إعادة حساب الفئات في كل مرة يتم فيها إعادة العرض ---
  // const categories = useMemo(
  //   () => [
  //     "All",
  //     "React",
  //     "Performance",
  //     "Design",
  //     "JavaScript",
  //     "Best Practices",
  //   ],
  //   []
  // );

  const categories = useMemo(() => {
    // 1. احصل على كل الفئات الرئيسية
    const mainCategories = articles.map((article) => article.category);
    // 2. احصل على كل الوسوم من كل المقالات
    const allTags = articles.flatMap((article) => article.tags);
    // 3. ادمجهم وأزل التكرار
    const uniqueCategories = [...new Set([...mainCategories, ...allTags])];
    // 4. أضف "All" في البداية
    return ["All", ...uniqueCategories.sort()]; // .sort() لترتيبهم أبجديًا
  }, []); // لا حاجة لإضافة articles هنا ليعمل مرة واحدة فقط

  // const articles = useMemo(
  //   () => [
  // {
  //   id: 1,
  //   slug: "mastering-react-performance-2024", // Slug فريد لكل مقالة
  //   title: "Mastering React Performance: Complete Guide 2024",
  //   excerpt:
  //     "Learn advanced techniques to optimize your React applications for maximum performance and user experience.",
  //   content: "Deep dive into React performance optimization techniques...",
  //   category: "React",
  //   readTime: "8 min",
  //   publishDate: "2024-12-15",
  //   image:
  //     "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   featured: true,
  //   tags: ["React", "Performance", "Optimization"],
  // },
  // {
  //   id: 2,
  //   slug: "building-accessible-web-applications",
  //   title: "Building Accessible Web Applications",
  //   excerpt:
  //     "A comprehensive guide to creating inclusive web experiences that work for everyone.",
  //   content: "Accessibility is not just a checkbox...",
  //   category: "Best Practices",
  //   readTime: "6 min",
  //   publishDate: "2024-12-10",
  //   image:
  //     "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   featured: false,
  //   tags: ["Accessibility", "UX", "Web Standards"],
  // },
  // {
  //   id: 3,
  //   slug: "modern-css-grid-layouts",
  //   title: "Modern CSS Grid Layouts: Beyond the Basics",
  //   excerpt:
  //     "Explore advanced CSS Grid techniques to create complex, responsive layouts with ease.",
  //   content: "CSS Grid has revolutionized web layout...",
  //   category: "Design",
  //   readTime: "10 min",
  //   publishDate: "2024-12-05",
  //   image:
  //     "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   featured: false,
  //   tags: ["CSS", "Grid", "Responsive Design"],
  // },
  // {
  //   id: 4,
  //   slug: "javascript-es2024",
  //   title: "JavaScript ES2024: New Features You Should Know",
  //   excerpt:
  //     "Discover the latest JavaScript features and how they can improve your development workflow.",
  //   content: "JavaScript continues to evolve...",
  //   category: "JavaScript",
  //   readTime: "7 min",
  //   publishDate: "2024-11-28",
  //   image:
  //     "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   featured: false,
  //   tags: ["JavaScript", "ES2024", "New Features"],
  // },
  // {
  //   id: 5,
  //   slug: "core-web-vitals",
  //   title: "Core Web Vitals: Measuring What Matters",
  //   excerpt:
  //     "Understanding and optimizing Core Web Vitals for better user experience and SEO.",
  //   content: "Core Web Vitals have become crucial...",
  //   category: "Performance",
  //   readTime: "9 min",
  //   publishDate: "2024-11-20",
  //   image:
  //     "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
  //   featured: false,
  //   tags: ["Performance", "SEO", "Web Vitals"],
  // },
  // {
  //   id: 6,
  //   slug: "state-management-in-react-redux-vs-zustand",
  //   title: "State Management in React: Redux vs Zustand",
  //   excerpt:
  //     "Comparing popular state management solutions and when to use each one.",
  //   content: "State management is crucial for complex applications...",
  //   category: "React",
  //   readTime: "12 min",
  //   publishDate: "2024-11-15",
  //   image:
  //     "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   featured: false,
  //   tags: ["React", "Redux", "Zustand", "State Management"],
  // },
  //   ],
  //   []
  // );

  // const recommendedReads = [
  //   {
  //     title: "The Lean Startup",
  //     author: "Eric Ries",
  //     description: "Essential reading for building products efficiently.",
  //     link: "#",
  //   },
  //   {
  //     title: "Don't Make Me Think",
  //     author: "Steve Krug",
  //     description: "Timeless principles of intuitive web usability.",
  //     link: "#",
  //   },
  //   {
  //     title: "Clean Code",
  //     author: "Robert Martin",
  //     description: "A guide to writing maintainable and readable code.",
  //     link: "#",
  //   },
  //   {
  //     title: "Hooked",
  //     author: "Nir Eyal",
  //     description: "How to build habit-forming products.",
  //     link: "#",
  //   },
  // ];

  // --- التحسين 2: استخدام useMemo لتجنب إعادة فلترة المقالات إلا عند تغيير activeCategory ---
  // const filteredArticles = useMemo(
  //   () =>
  //     activeCategory === "All"
  //       ? articles
  //       : articles.filter(
  //           (article) =>
  //             article.category === activeCategory ||
  //             article.tags.includes(activeCategory)
  //         ),
  //   // [activeCategory, articles]
  //   [activeCategory]
  // );

  const filteredArticles = useMemo(() => {
    let tempArticles = articles;

    // Filter by category
    if (activeCategory !== "All") {
      tempArticles = tempArticles.filter(
        (article) =>
          article.category === activeCategory ||
          article.tags.includes(activeCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      tempArticles = tempArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower) ||
          (article.content &&
            article.content.toLowerCase().includes(searchLower)) ||
          article.category.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    return tempArticles;
  }, [activeCategory, searchTerm]);

  const featuredArticle = articles.find((article) => article.featured);

  // هذا الكود يقوم بتحديث الفلتر إذا جاء المستخدم من رابط يحتوي على category
  // تأثير جانبي لتحديث الفئة بناءً على رابط URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get("category"); // const category = params.get("category");

    // if (category && categories.includes(category)) {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl); // setActiveCategory(category);
    } else {
      setActiveCategory("All");
    }
  }, [categories, location.search]);

  // --- دالة لتحديث الفلتر عند الضغط على الوسوم ---
  // --- التحسين 3: استخدام useCallback لضمان عدم إعادة إنشاء الدالة في كل مرة ---
  const handleTagClick = useCallback(
    (tag: string, event: React.MouseEvent) => {
      // event.preventDefault();
      event.stopPropagation();
      setActiveCategory(tag);
      navigate(`/blog?category=${tag}`);
      window.scrollTo({
        top: articlesGridRef.current?.offsetTop,
        behavior: "smooth",
      }); // window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
    if (articlesGridRef.current) {
      articlesGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SeoComponent
        title="Blog - Web Development Insights & Knowledge"
        description="Deep dives into web development, performance optimization, and digital strategy. Sharing insights from building exceptional digital experiences."
        keywords="Web Development Blog, React Tutorials, Performance Optimization, JavaScript, Frontend Development, Rebhe Ibrahim Blog"
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
                Insights & <span className="text-blue-500">Knowledge</span>
              </h1>
              {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Deep dives into web development, performance optimization, and
                digital strategy. Sharing what I've learned building exceptional
                digital experiences.
              </p> */}
              {/* --- التحسين 4: تحديث النص ليعكس صوت البراند --- */}
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Deep dives into web development, performance, and digital
                strategy. Sharing insights from our journey of building
                exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <Link
                  key={featuredArticle.id}
                  to={`/blog/${featuredArticle.slug}`}
                  className="block relative overflow-hidden rounded-xl group"
                >
                  {/* <div className="relative overflow-hidden rounded-xl"> */}
                  {/* <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-80 object-cover"
                  /> */}
                  <ImageWithSkeleton
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    wrapperClassName="w-full h-80"
                    className="object-cover"
                    /*
                      // صورة احتياطية للمتصفحات القديمة جداً
                      src="/images/fallback-large.jpg"
                      // قائمة بالصور وأحجامها المختلفة (يفضل استخدام صيغة WebP)
                      srcSet="/images/image-small.webp 480w, /images/image-medium.webp 800w, /images/image-large.webp 1200w" // إرشاد المتصفح لاختيار الصورة المناسبة بناءً على حجم الشاشة
                      sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
                      alt="وصف دقيق ومهم للصورة"
                    */
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  {/* </div> */}
                </Link>

                <div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(
                        featuredArticle.publishDate
                      ).toLocaleDateString()}
                    </span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredArticle.readTime} read</span>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag) => (
                      <motion.button
                        key={tag}
                        onClick={(e) => handleTagClick(tag, e)}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </motion.button>
                      // <Link
                      //   key={tag}
                      //   to={`/blog?category=${tag}`}
                      //   // className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 hover:text-white rounded-full text-sm font-medium"
                      // >
                      //   <span
                      //     // key={tag}
                      //     className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm cursor-pointer"
                      //     onClick={(e) => {
                      //       e.preventDefault();
                      //       e.stopPropagation();
                      //       setActiveCategory(tag);
                      //       window.scrollTo(0, 0);
                      //     }}
                      //   >
                      //     {tag}
                      //   </span>
                      // </Link>
                    ))}
                  </div>

                  <Link
                    key={featuredArticle.id}
                    to={`/blog/${featuredArticle.slug}`}
                    onClick={() => {
                      // Optionally scroll to top when navigating to a new article
                      // This can be helpful if the user is far down the page
                      // and clicks on a featured article.
                      window.scrollTo(0, 0);
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors duration-200"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section ref={articlesGridRef} className="py-10">
          {/* <div className="mb-12 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div> */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {/* {categories.map((category) => ( */}
              {[
                "All",
                "React",
                "Performance",
                "Design",
                "JavaScript",
                "Best Practices",
              ].map((category) => (
                <motion.button
                  key={category}
                  // onClick={() => setActiveCategory(category)}
                  onClick={() => {
                    // setActiveCategory(category);
                    if (category === "All") {
                      navigate("/blog");
                    } else {
                      navigate(`/blog?category=${category}`);
                    }
                  }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category} {/* Display the category name */}
                  {/* Optionally, display the number of articles in each category */}
                  {category !== "All" && (
                    <span className="ml-2 text-gray-400">
                      (
                      {
                        articles.filter(
                          (article) => article.category === category
                        ).length
                      }
                      )
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* {filteredArticles.map((article, index) => ( */}
              {/* {filteredArticles */}
              {currentArticles
                .filter((article) => !article.featured)
                .map((article, index) => (
                  <Link
                    to={`/blog/${article.slug}`}
                    key={article.id}
                    onClick={() => {
                      // Optionally scroll to top when navigating to a new article
                      window.scrollTo(0, 0);
                    }}
                  >
                    <motion.article
                      key={article.slug} // Use slug as the key instead of id
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      // whileHover={{ y: -10 }}
                      whileHover={{
                        y: -10,
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer h-full flex flex-col"
                    >
                      {/* Article Image and Category */}
                      <div className="relative overflow-hidden">
                        {/* <Link
                        to={`/blog/${article.slug}`}
                        key={article.id}
                        onClick={() => {
                          // Optionally scroll to top when navigating to a new article
                          window.scrollTo(0, 0);
                        }}
                      > */}
                        {/* <motion.img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        /> */}
                        <ImageWithSkeleton
                          src={article.image}
                          alt={article.title}
                          wrapperClassName="w-full h-48"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <motion.div
                          className="absolute top-4 right-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm">
                            {article.category}{" "}
                            {/* Display the article category */}
                          </span>
                        </motion.div>
                        {/* </Link> */}
                      </div>

                      {/* Article Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Publication Date and Reading Time */}
                        <motion.div
                          className="flex items-center text-sm text-gray-400 mb-3"
                          // whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>
                            {new Date(article.publishDate).toLocaleDateString()}
                          </span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{article.readTime}</span>
                        </motion.div>

                        {/* Article Title */}
                        <motion.h3
                          className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200"
                          // whileHover={{ x: 5 }}
                        >
                          {article.title}
                        </motion.h3>

                        {/* Article Excerpt */}
                        <motion.p
                          className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow"
                          // whileHover={{ opacity: 0.8 }}
                        >
                          {article.excerpt}
                        </motion.p>

                        {/* Article Tags */}
                        <motion.div
                          className="flex flex-wrap gap-1 mb-4"
                          // whileHover={{ scale: 1.02 }}
                        >
                          {article.tags.slice(0, 2).map((tag) => (
                            // --- إضافة وظيفة الفلترة للوسوم ---
                            <motion.button
                              key={tag}
                              onClick={(e) => handleTagClick(tag, e)}
                              className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                            >
                              {tag}
                            </motion.button>
                            // <Link
                            //   key={tag}
                            //   to={`/blog?category=${tag}`}
                            //   // className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 hover:text-white rounded-full text-sm font-medium"
                            // >
                            //   <motion.span
                            //     // key={tag}
                            //     onClick={(e) => {
                            //       // e.preventDefault();
                            //       // e.stopPropagation();
                            //       // setActiveCategory(tag);
                            //       // window.scrollTo(0, 0);
                            //       handleTagClick(tag, e);
                            //     }}
                            //     whileHover={{
                            //       // scale: 1.1,
                            //       // marginInline: "6px",
                            //       backgroundColor: "#3b82f6",
                            //       color: "#fff",
                            //     }}
                            //     // className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs cursor-pointer"
                            //     className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                            //   >
                            //     {tag}
                            //   </motion.span>
                            // </Link>
                          ))}
                        </motion.div>

                        {/* "Read More" Link (Optional, since the whole card is clickable) */}
                        {/* <Link
                        to={`/blog/${article.slug}`} // to={`/blog/${article.id}`}
                        key={article.id}
                        onClick={() => {
                          // Optionally scroll to top when navigating to a new article
                          window.scrollTo(0, 0);
                        }}
                      ></Link> */}
                        <motion.div
                          className="text-blue-400 group-hover:text-blue-300 font-medium text-sm flex items-center transition-colors duration-200 mt-auto pt-4"
                          whileHover={{ x: 5 }}
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange} // onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </section>

        {/* Recommended Reads */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-500" />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                {/* Recommended Reads for Founders */}
                Recommended Reads
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {/* Essential books that have shaped my thinking about building successful digital products */}
                Essential books that have shaped our thinking about building
                successful digital products.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedReads.map((book, index) => (
                // <motion.div
                <motion.a
                  key={index}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  // className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center group cursor-pointer"
                  className="block p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    {book.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">by {book.author}</p>
                  <p className="text-gray-400 text-sm">{book.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700 text-center"
            >
              <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights on web development, performance tips,
                and industry trends delivered straight to your inbox. No spam,
                unsubscribe anytime.
              </p>
              <form
                className="max-w-md mx-auto"
                action="https://gmail.us7.list-manage.com/subscribe/post?u=285da69551a8c05fb4b144b58&id=759d09647c&f_id=00e6b1e4f0"
                method="post"
                target="_blank"
              >
                <div className="flex flex-wrap gap-4">
                  <input
                    type="email"
                    id="email"
                    name="EMAIL" // 2. تأكد من أن الاسم هنا هو "EMAIL"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                <span>Join 500+ developers getting weekly insights</span>
              </div>
            </motion.div>
          </div>
        </section> */}
        <NewsletterSection />
      </motion.div>
    </>
  );
};

export default BlogPage;
