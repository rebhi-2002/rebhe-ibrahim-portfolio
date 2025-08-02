// src/components/TableOfContents.tsx

import React from "react";
import { Hash } from "lucide-react";

const TableOfContents = ({
  headings,
}: {
  headings: { id: string; title: string }[];
}) => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-10 mt-4 mb-8">
      <h3 className="text-xl font-bold text-blue-400 mb-4">In This Article</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleSmoothScroll(e, heading.id)}
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <Hash className="h-4 w-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-transform group-hover:rotate-12" />
              <span>{heading.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
