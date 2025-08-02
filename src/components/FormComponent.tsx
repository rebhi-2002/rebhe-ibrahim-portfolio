import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Toast: Reusable popup notification for success/error feedback
// Appears at the top center and auto-dismisses after 4 seconds
const Toast = ({
  type,
  message,
  onClose,
}: {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}) => (
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

// The actual form component that will be rendered by the library
// Props for the CustomForm component (render-prop child of MailchimpSubscribe)
interface CustomFormProps {
  /**
   * Submission status from MailchimpSubscribe
   * - "sending": Form is being submitted
   * - "success": Form submission was successful
   * - "error": Form submission failed
   * - null | undefined: Initial state or no submission status
   */
  status: "sending" | "success" | "error" | null | undefined;
  /**
   * Feedback or error message from Mailchimp
   * - string: Human-readable message
   * - React.ReactNode: Custom error message component
   */
  message: string | React.ReactNode;
  /**
   * Called with validated form data
   * - formData: { EMAIL: string; FNAME?: string }
   */
  onValidated: (formData: { EMAIL: string; FNAME?: string }) => void;
}

// Utility: Basic email format validation (client-side, before Mailchimp submission)
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// CustomForm: Handles user input, validation, and triggers Mailchimp signup
// Shows real-time feedback and disables fields while submitting
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

  // React to Mailchimp status changes: show feedback toast
  useEffect(() => {
    if (status === "error") {
      // Show Mailchimp error message (cleaned from HTML), or fallback if missing
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

  // Log the raw error message for debugging purposes
  useEffect(() => {
    if (status === "error") {
      console.log("Mailchimp error message:", message);
    }
  }, [status, message]);

  // Auto-dismiss the toast notification after a delay
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // If submission is successful, show a thank you message instead of the form
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

  // Handles form submission: validates input, provides user feedback, and triggers Mailchimp logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Require email input
    if (!email.trim()) {
      setToast({ type: "error", message: "Please enter your email address." });
      return;
    }
    // Require valid email format
    if (!isValidEmail(email)) {
      setToast({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    // If validation passes, submit to Mailchimp
    onValidated({ EMAIL: email, FNAME: firstName });
  };

  return (
    <div className="relative">
      {/* Toast notification for user feedback */}
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name input (optional, sent to Mailchimp as FNAME) */}
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
        {/* Email input (required, validated before submission) */}
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

// NewsletterForm: High-level wrapper for the newsletter subscription UI and Mailchimp integration
const NewsletterForm = () => {
  // Mailchimp endpoint for AJAX JSONP subscription requests (must use 'post-json' for CORS compatibility)
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
