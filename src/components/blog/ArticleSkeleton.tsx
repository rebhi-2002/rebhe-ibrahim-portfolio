import { motion } from "framer-motion";

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`bg-gray-700/50 rounded-md animate-pulse ${className}`} />
);

const ArticleSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 flex flex-col items-center">
          <SkeletonBox className="h-5 w-40 mb-4" />
          <SkeletonBox className="h-6 w-32 mb-2" />
          <SkeletonBox className="h-12 w-3/4 mb-4" />
          <SkeletonBox className="h-5 w-48" />
        </header>

        <SkeletonBox className="mb-12 rounded-xl aspect-video" />

        <article className="max-w-none mx-auto">
          <SkeletonBox className="h-6 w-full mb-4" />
          <SkeletonBox className="h-6 w-11/12 mb-4" />
          <SkeletonBox className="h-6 w-full mb-10" />

          <SkeletonBox className="h-6 w-full mb-4" />
          <SkeletonBox className="h-6 w-10/12" />
        </article>
      </div>
    </motion.div>
  );
};

export default ArticleSkeleton;