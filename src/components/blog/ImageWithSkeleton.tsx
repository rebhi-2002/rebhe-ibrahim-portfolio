import React, { useState } from "react";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * CSS classes for the wrapper div. Use this for dimensions (e.g., `w-full h-48`).
   */
  wrapperClassName?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  srcSet,
  sizes,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageClasses = `
    w-full h-full
    transition-opacity duration-500 ease-in-out
    ${isLoading ? "opacity-0" : "opacity-100"}
    ${className || ""}
  `;

  const skeletonClasses = `
    absolute inset-0
    bg-gray-800 animate-pulse
  `;

  return (
    <div className={`relative overflow-hidden ${wrapperClassName || ""}`}>
      {isLoading && <div className={skeletonClasses}></div>}
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        className={imageClasses.trim()}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;