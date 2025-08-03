import React from "react";
import { motion } from "framer-motion";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showAnimation?: boolean;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = "md", 
  showAnimation = true,
  className = "" 
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const logoVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -10 
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      rotate: -1
    }
  };

  const innerVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative ${className}`}
      variants={showAnimation ? logoVariants : undefined}
      initial={showAnimation ? "initial" : undefined}
      animate={showAnimation ? "animate" : undefined}
      whileHover="hover"
      whileTap="tap"
    >
      {/* Main Logo Container with Enhanced Gradient */}
      <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl shadow-lg overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Digital Grid Pattern */}
            <svg className="w-full h-full" viewBox="0 0 40 40">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating Geometric Elements */}
        <motion.div 
          className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/20 rounded-sm"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main Text Content */}
        <motion.div 
          className={`relative z-10 w-full h-full flex items-center justify-center text-white font-bold ${textSizes[size]}`}
          variants={showAnimation ? innerVariants : undefined}
        >
          <span className="tracking-wider">RI</span>
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent rounded-bl-lg" />
      </div>

      {/* External Glow Ring (visible on hover) */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-blue-400/0"
        whileHover={{ 
          borderColor: "rgba(59, 130, 246, 0.4)",
          scale: 1.1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BrandLogo;