import React from "react";

interface ComparisonRow {
  feature: string;
  flexbox: string | React.ReactNode;
  grid: string | React.ReactNode;
}

const ComparisonTable = ({ data }: { data: ComparisonRow[] }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-700">
    <table className="w-full text-left bg-gray-800/50 m-0">
      <thead className="bg-gray-700/50">
        <tr>
          <th className="p-4 text-lg font-semibold text-blue-400">Feature</th>
          <th className="p-4 text-lg font-semibold text-white">Flexbox</th>
          <th className="p-4 text-lg font-semibold text-white">Grid</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t border-gray-700">
            <td className="p-4 font-semibold text-gray-300">{row.feature}</td>
            <td className="p-4 text-gray-400 leading-relaxed">{row.flexbox}</td>
            <td className="p-4 text-gray-400 leading-relaxed">{row.grid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
