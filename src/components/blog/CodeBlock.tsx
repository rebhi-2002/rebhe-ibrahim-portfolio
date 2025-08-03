import React, { useState } from "react";
import { Check, Clipboard } from "lucide-react";

const CodeBlock = ({
  code,
  language = "jsx",
}: {
  code: string;
  language?: string;
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="relative my-6 group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-700/60 hover:bg-gray-600/80 rounded-md transition-all opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {hasCopied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Clipboard className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-5 pt-12 text-sm overflow-x-auto border border-gray-700 shadow-inner">
        <code
          className={`language-${language} text-blue-200 font-mono leading-relaxed block whitespace-pre`}
        >
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;