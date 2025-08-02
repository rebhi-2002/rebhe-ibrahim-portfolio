import React from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft } from "lucide-react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface SectionImageDisplayProps {
  section: {
    title: string;
    image: string | { desktop: string; mobile: string };
    videoSrc?: string;
  };
  openLightbox: (imageUrl: string) => void;
}

const SectionImageDisplay: React.FC<SectionImageDisplayProps> = ({
  section,
  openLightbox,
}) => {
  const { image, title, videoSrc } = section;

  // Priority 1: Check for video content
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
          playsInline
          className="w-full h-80 object-cover"
        />
      </motion.div>
    );
  }

  // Priority 2: Check for comparison slider (desktop vs mobile)
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
                className="w-12 h-12 rounded-full flex justify-center items-center bg-blue-500 text-white border-2 border-white shadow-lg cursor-grab"
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

  // Default case: Single image display
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

  return null;
};

export default SectionImageDisplay;