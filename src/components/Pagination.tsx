// src/components/Pagination.tsx
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  // const pageNumbers = [];
  // // Logic to show a limited number of page buttons (e.g., ... 3, 4, 5 ...)
  // // For simplicity, we'll show all for now, but this can be enhanced.
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Prev
      </button>

      <div className="flex items-center gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`w-10 h-10 rounded-lg transition-colors ${
              currentPage === number
                ? "bg-blue-600 text-white font-bold"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors"
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
