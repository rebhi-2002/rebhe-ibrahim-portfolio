import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type FormStatus = "sending" | "error" | "success" | null;

interface EmailFormFields {
  EMAIL: string;
  [key: string]: string | undefined;
}

interface NewsletterFormContentProps {
  status: FormStatus;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
}

const NewsletterFormContent: React.FC<NewsletterFormContentProps> = ({
  status,
  message,
  onValidated,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    onValidated({ EMAIL: email });
  };

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  return (
    <div className="max-w-md mx-auto">
      {error && (
        <div className="text-yellow-300 p-3 mb-4 rounded-md border border-yellow-500/50 bg-yellow-900/40 text-sm text-left">
          {error}
        </div>
      )}
      {status === "error" && message && (
        <div
          className="text-red-300 p-3 mb-4 rounded-md border border-red-500/50 bg-red-900/40 text-sm text-left"
          dangerouslySetInnerHTML={{
            __html: typeof message === "string" ? message : message.message,
          }}
        />
      )}
      {status === "success" && (
        <div className="text-green-300 p-3 mb-4 rounded-md border border-green-500/50 bg-green-900/40 text-sm">
          Thank you! Please check your email to confirm.
        </div>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`flex-1 px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                error
                  ? "border-yellow-500"
                  : "border-gray-600 focus:border-blue-500"
              }`}
              disabled={status === "sending"}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterFormContent;