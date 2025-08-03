import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Toast from "../common/Toast";

interface CustomFormProps {
  status: "sending" | "success" | "error" | null | undefined;
  message: string | React.ReactNode;
  onValidated: (formData: { EMAIL: string; FNAME?: string }) => void;
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const CustomForm: React.FC<CustomFormProps> = ({
  status,
  message,
  onValidated,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [toast, setToast] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  useEffect(() => {
    if (status === "error") {
      let cleanMessage = "";
      if (typeof message === "string") {
        cleanMessage = message.replace(/<[^>]+>/g, "").trim();
      } else {
        cleanMessage = "An error occurred. Please try again.";
      }
      setToast({
        type: "error",
        message: cleanMessage || "An error occurred. Please try again.",
      });
    }
  }, [status, message]);

  useEffect(() => {
    if (status === "error") {
      console.log("Mailchimp error message:", message);
    }
  }, [status, message]);

  if (status === "success") {
    return (
      <div className="text-center p-4 bg-green-800/20 border border-green-500 rounded-lg">
        <h4 className="font-semibold text-green-300">
          Thank you for subscribing!
        </h4>
        <p className="text-gray-400 text-sm mt-1">
          Please check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setToast({ type: "error", message: "Please enter your email address." });
      return;
    }
    if (!isValidEmail(email)) {
      setToast({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    onValidated({ EMAIL: email, FNAME: firstName });
  };

  return (
    <div className="relative">
      {toast && (
        <Toast {...toast} onClose={() => setToast(null)} autoClose={true} />
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="newsletter-fname"
          name="FNAME"
          autoComplete="given-name"
          placeholder="First Name (Optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          disabled={status === "sending"}
        />
        <input
          type="email"
          id="newsletter-email"
          name="EMAIL"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          required
          disabled={status === "sending"}
        />
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
            status === "sending" ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {status === "sending" ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Subscribe Now"
          )}
        </motion.button>
      </form>
    </div>
  );
};

const NewsletterForm = () => {
  const mailchimpUrl =
    "https://gmail.us7.list-manage.com/subscribe/post-json?u=285da69551a8c05fb4b144b58&id=759d09647c&f_id=00e6b1e4f0";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
    >
      <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
      <p className="text-gray-400 mb-6">
        Get the latest insights on web development, performance tips, and
        industry trends.
      </p>

      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }: MailchimpRenderProps) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />

      <p className="text-xs text-gray-500 mt-4">
        No spam, unsubscribe at any time.
      </p>
    </motion.div>
  );
};

export default NewsletterForm;
