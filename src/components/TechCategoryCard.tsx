import React from "react";
import { Link } from "react-router-dom";

const TechCategoryCard = ({
  icon,
  title,
  description,
  tools,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  href?: string;
}) => {
  const content = (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800">
      <div className="flex-shrink-0 text-blue-400 pt-1">{icon}</div>
      <div className="flex-grow">
        <h2
          id={title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
          className="text-3xl font-bold mb-3 mt-3 text-blue-400 scroll-mt-20"
        >
          {title}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
};

export default TechCategoryCard;
