import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="bg-blue-600/20 p-2 rounded-lg">{icon}</div>
      <h3 className="text-2xl my-4 font-bold text-blue-400">{title}</h3>
    </div>
    <p className="text-lg text-gray-300 leading-relaxed">{children}</p>
  </motion.div>
);

export default FeatureCard;
