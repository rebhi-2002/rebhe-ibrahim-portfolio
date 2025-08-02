import React, { useEffect } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
  autoClose = true,
  duration = 4000,
}) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  return (
    <div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg border transition-all animate-fade-in ${
        type === "success"
          ? "bg-green-800/90 border-green-500 text-green-100"
          : "bg-red-900/90 border-red-500 text-red-100"
      }`}
      role="alert"
    >
      {type === "success" ? (
        <svg
          className="h-5 w-5 text-green-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-red-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-xs text-white/70 hover:text-white focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;