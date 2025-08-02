import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Zap,
  TrendingUp,
  BarChart,
  ShieldCheck,
  Code,
  Users as UsersIcon,
  ArrowRightLeft,
  Quote,
} from "lucide-react";

import SeoComponent from "../components/SeoComponent";
import { projects } from "../data/projects";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const getIconForMetric = (metric: string) => {
  const lower = metric.toLowerCase();
  // تم تغيير لون الأيقونات إلى الأزرق ليتناسب مع الهوية الجديدة
  const iconClass = "h-8 w-8 mx-auto mb-4 text-blue-400";

  if (lower.includes("user") || lower.includes("engagement"))
    return <UsersIcon className={iconClass} />;
  if (
    lower.includes("sale") ||
    lower.includes("conversion") ||
    lower.includes("revenue")
  )
    return <TrendingUp className={iconClass} />;
  if (
    lower.includes("load") ||
    lower.includes("lcp") ||
    lower.includes("performance")
  )
    return <Zap className={iconClass} />;
  if (lower.includes("security") || lower.includes("compliance"))
    return <ShieldCheck className={iconClass} />;
  if (lower.includes("bundle") || lower.includes("code"))
    return <Code className={iconClass} />;
  return <BarChart className={iconClass} />;
};

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const project = projects.find((p) => p.id === parseInt(id || "1"));
      setCurrentProject(project || null);

      if (project) {
        const images = [
          project.image,
          ...project.caseStudySections.flatMap((s) => {
            if (typeof s.image === "string") {
              return [s.image];
            } else if (
              s.image &&
              typeof s.image === "object" &&
              s.image.desktop &&
              s.image.mobile
            ) {
              return [s.image.desktop, s.image.mobile];
            }
            return [];
          }),
        ].filter(Boolean) as string[]; // Cast to string[] after filtering out null/undefined

        setAllImages(images); // This line was causing the error
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [id]);

  const { previousProject, nextProject } = (() => {
    if (!currentProject) return { previousProject: null, nextProject: null };
    const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
    const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const next =
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    return { previousProject: prev, nextProject: next };
  })();

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
    (dir: "prev" | "next") => {
      setCurrentImageIndex((prev) =>
        dir === "next"
          ? (prev + 1) % allImages.length
          : (prev - 1 + allImages.length) % allImages.length
      );
    },
    [allImages.length]
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, navigateImage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white font-bold text-xl">
        Loading Project...
      </div>
    );
  }

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/case-studies">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Back to Case Studies
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // // مكون جديد لعرض الصور بذكاء
  // const SectionImageDisplay = ({
  //   image,
  //   title,
  //   openLightbox,
  // }: {
  //   image: string | { desktop: string; mobile: string };
  //   title: string;
  //   openLightbox: (imageUrl: string) => void;
  // }) => {
  //   // --- الحالة الأولى: إذا كانت البيانات عبارة عن كائن (يحتوي على صورة للجوال والحاسوب) ---
  //   if (
  //     typeof image === "object" &&
  //     image !== null &&
  //     image.desktop &&
  //     image.mobile
  //   ) {
  //     return (
  //       // نعرض الصورتين جنبًا إلى جنب
  //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  //         {/* صورة الحاسوب */}
  //         <div
  //           className="relative overflow-hidden rounded-xl cursor-pointer group"
  //           onClick={() => openLightbox(image.desktop)}
  //         >
  //           <img
  //             src={image.desktop}
  //             alt={`${title} - Desktop`}
  //             className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  //           />
  //           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100" />
  //         </div>
  //         {/* صورة الجوال */}
  //         <div
  //           className="relative overflow-hidden rounded-xl cursor-pointer group"
  //           onClick={() => openLightbox(image.mobile)}
  //         >
  //           <img
  //             src={image.mobile}
  //             alt={`${title} - Mobile`}
  //             className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  //           />
  //           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100" />
  //         </div>
  //       </div>
  //     );
  //   }

  //   // --- الحالة الثانية: إذا كانت البيانات نصًا عاديًا (صورة واحدة فقط) ---
  //   if (typeof image === "string") {
  //     return (
  //       <div
  //         className="relative overflow-hidden rounded-xl cursor-pointer group"
  //         onClick={() => openLightbox(image)}
  //       >
  //         <img
  //           src={image}
  //           alt={title || ""}
  //           className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  //         />
  //         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100" />
  //       </div>
  //     );
  //   }

  //   // في حال لم تكن هناك صورة
  //   return null;
  // };

  // ----------------------------------------------------------------
  //  SectionImageDisplay Component
  //  A smart component to display media (video, image slider, or single image)
  //  for a case study section.
  // ----------------------------------------------------------------

  // // 1. استيراد المكتبات اللازمة
  // import {
  //   ReactCompareSlider,
  //   ReactCompareSliderImage,
  // } from "react-compare-slider";
  // import { motion } from "framer-motion";
  // import { ArrowRightLeft } from "lucide-react"; // تأكد من استيراد الأيقونة

  // 2. تعريف المكون والخصائص (Props) التي يستقبلها
  const SectionImageDisplay = ({
    section,
    openLightbox,
  }: {
    section: {
      title: string;
      // `image` يمكن أن يكون نصًا أو كائنًا للمقارنة
      image: string | { desktop: string; mobile: string };
      // `videoSrc` هو حقل اختياري للفيديو
      videoSrc?: string;
    };
    openLightbox: (imageUrl: string) => void;
  }) => {
    // استخراج المتغيرات من "القسم" لسهولة الاستخدام
    const { image, title, videoSrc } = section;

    // --- الأولوية الأولى: التحقق من وجود فيديو ---
    // إذا كان حقل `videoSrc` موجودًا، سيتم عرض الفيديو دائمًا.
    if (videoSrc) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl shadow-lg"
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline // مهم ليعمل على أجهزة أبل
            className="w-full h-80 object-cover"
          />
        </motion.div>
      );
    }

    // --- الأولوية الثانية: إذا لم يكن هناك فيديو، تحقق من وجود شريط مقارنة ---
    if (typeof image === "object" && image.desktop && image.mobile) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h4 className="text-xl font-bold mb-4">Desktop vs. Mobile View</h4>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <ReactCompareSlider
              handle={
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                  w-12 h-12 rounded-full 
                  flex justify-center items-center
                  bg-blue-500 text-white  
                  border-2 border-white 
                  shadow-lg cursor-grab
                "
                >
                  <ArrowRightLeft size={24} />
                </motion.div>
              }
              itemOne={
                <ReactCompareSliderImage
                  src={image.desktop}
                  alt={`${title} - Desktop`}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={image.mobile}
                  alt={`${title} - Mobile`}
                />
              }
              style={{ height: "400px" }}
            />
            <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold py-1 px-3 rounded-full pointer-events-none font-inter">
              DESKTOP
            </div>
            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold py-1 px-3 rounded-full pointer-events-none font-inter">
              MOBILE
            </div>
          </div>
        </motion.div>
      );
    }

    // --- الحالة الافتراضية: إذا لم يكن هناك فيديو أو شريط مقارنة، اعرض الصورة الواحدة ---
    if (typeof image === "string") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => openLightbox(image)}
        >
          <img
            src={image}
            alt={title || ""}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100" />
        </motion.div>
      );
    }

    // في حال لم تكن هناك أي وسائط للعرض
    return null;
  };

  // لا تنسَ تصدير المكون إذا كان في ملف منفصل
  // export default SectionImageDisplay;

  // const SectionImageDisplay = ({
  //   image,
  //   title,
  //   openLightbox,
  // }: {
  //   image: string | { desktop: string; mobile: string };
  //   title: string;
  //   openLightbox: (imageUrl: string) => void;
  // }) => {
  //   // --- الحالة الأولى: عرض شريط المقارنة التفاعلي (صورتان) ---
  //   if (
  //     typeof image === "object" &&
  //     image !== null &&
  //     image.desktop &&
  //     image.mobile
  //   ) {
  //     return (
  //       // حاوية الحركة: لجعل القسم يظهر بشكل ناعم عند التمرير إليه
  //       <motion.div
  //         initial={{ opacity: 0, y: 40 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.8 }}
  //         className="text-center" // لتوسيط العنوان
  //       >
  //         {/* عنوان توضيحي: لإعطاء سياق للمستخدم */}
  //         <h4 className="text-xl font-bold mb-4">Desktop vs. Mobile View</h4>

  //         {/* الحاوية الرئيسية: نستخدمها لوضع الوسوم فوق شريط المقارنة */}
  //         <div className="relative rounded-xl overflow-hidden shadow-2xl">
  //           <ReactCompareSlider
  //             // مقبض السحب المخصص: لتحسين التصميم وجعله متوافقًا مع العلامة التجارية
  //             handle={
  //               // استخدام motion.div لإضافة تفاعل للمقبض
  //               <motion.div
  //                 whileHover={{ scale: 1.15 }} // يكبر حجمه عند مرور الماوس
  //                 whileTap={{ scale: 0.95 }} // يصغر حجمه عند الضغط
  //                 // استخدم كلاسات Tailwind CSS لسهولة التخصيص
  //                 className="
  //                 w-12 h-12 rounded-full
  //                 flex justify-center items-center
  //                  bg-blue-500 text-white
  //                 border-2 border-white
  //                 shadow-lg cursor-grab
  //               "
  //                 // 💡 نصيحة: استبدل "bg-cyan-500" بلون علامتك التجارية الأساسي
  //               >
  //                 <ArrowRightLeft size={24} />
  //               </motion.div>
  //             }
  //             // الصورة الأولى (اليسار)
  //             itemOne={
  //               <ReactCompareSliderImage
  //                 src={image.desktop}
  //                 alt={`${title} - Desktop`}
  //               />
  //             }
  //             // الصورة الثانية (اليمين)
  //             itemTwo={
  //               <ReactCompareSliderImage
  //                 src={image.mobile}
  //                 alt={`${title} - Mobile`}
  //               />
  //             }
  //             style={{ height: "400px" }} // يمكنك تعديل الارتفاع حسب الحاجة
  //           />

  //           {/* وسوم التوضيح: لوضع ملصقات "DESKTOP" و "MOBILE" */}
  //           <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold py-1 px-3 rounded-full pointer-events-none font-inter">
  //             {/* 💡 نصيحة: تأكد من أن "font-sans" هو نفس خط مشروعك */}
  //             DESKTOP
  //           </div>
  //           <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold py-1 px-3 rounded-full pointer-events-none font-inter">
  //             {/* 💡 نصيحة: تأكد من أن "font-sans" هو نفس خط مشروعك */}
  //             MOBILE
  //           </div>
  //         </div>
  //       </motion.div>
  //     );
  //   }

  //   // --- الحالة الثانية: عرض الصورة الواحدة التقليدية ---
  //   if (typeof image === "string") {
  //     return (
  //       <motion.div
  //         initial={{ opacity: 0, y: 40 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.8 }}
  //         className="relative overflow-hidden rounded-xl cursor-pointer group"
  //         onClick={() => openLightbox(image)}
  //       >
  //         <img
  //           src={image}
  //           alt={title || ""}
  //           className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
  //         />
  //         {/* طبقة تظليل تظهر عند مرور الماوس لمسة جمالية */}
  //         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100" />
  //       </motion.div>
  //     );
  //   }

  //   // في حال لم تكن هناك صورة، لا تعرض شيئًا
  //   return null;
  // };

  return (
    <>
      <SeoComponent
        title={`${currentProject.title} - Case Study`}
        description={currentProject.description}
        keywords={`${currentProject.tech.join(", ")}`}
        schemaType="Project"
        ogImageUrl={currentProject.image}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-950 text-gray-100 pt-24 pb-20 overflow-x-hidden"
      >
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
                  {currentProject.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {currentProject.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {currentProject.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {currentProject.liveUrl && currentProject.liveUrl !== "#" && (
                  <motion.a
                    href={currentProject.liveUrl}
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
                {currentProject.githubUrl &&
                  currentProject.githubUrl !== "#" && (
                    <motion.a
                      href={currentProject.githubUrl}
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
                <div className="flex items-center">
                  <User className="h-4 w-4 text-blue-500 mr-2" />
                  <div>
                    <span className="text-gray-500">Client:</span>
                    <div className="font-semibold">{currentProject.client}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  <div>
                    <span className="text-gray-500">Timeline:</span>
                    <div className="font-semibold">
                      {currentProject.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(currentProject.image)}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
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

        {/* Key Results Section */}
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
              {currentProject.keyResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  {getIconForMetric(result.metric)}
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

        {/* Project Overview Section */}
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
                {currentProject.challenge}
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech) => (
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
                {currentProject.solution}
              </p>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Results Achieved
              </h3>
              <div className="space-y-3">
                {currentProject.results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Deep Dive Section */}
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
            {currentProject.caseStudySections.map((section, index) => (
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
                {/* <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => openLightbox(section.image)}
                  >
                    <img
                      src={section.image}
                      alt={section.title || ""}
                      className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  {/* استخدم المكون الجديد هنا */}
                  {/* <SectionImageDisplay
                    image={section.image}
                    title={section.title}
                    openLightbox={openLightbox}
                  /> */}
                  <SectionImageDisplay
                    section={section}
                    openLightbox={openLightbox}
                  />
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

        {/* Testimonial Section */}
        {currentProject.testimonial && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center relative overflow-hidden"
            >
              <Quote className="absolute top-4 left-4 w-16 h-16 text-gray-700/50" />
              <p className="text-xl text-gray-300 italic mb-6 z-10 relative">
                "{currentProject.testimonial.content}"
              </p>
              <div className="flex items-center justify-center z-10 relative">
                {currentProject.testimonial.avatar && (
                  <img
                    src={currentProject.testimonial.avatar}
                    alt={currentProject.testimonial.author}
                    className="w-12 h-16 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold">
                    {currentProject.testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {currentProject.testimonial.role}
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
                  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200 h-full"
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
                  className="group block bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-200 h-full"
                >
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-blue-400 text-sm font-medium">
                      Next Project
                    </span>
                    <ChevronRight className="h-5 w-5 text-blue-400 ml-2" />
                  </div>
                  <div className="flex items-center justify-end text-right">
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
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
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
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CaseStudyDetailPage;
