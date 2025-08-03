import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterFormContent from "./NewsletterFormContent";

type FormStatus = "sending" | "error" | "success" | null;

interface EmailFormFields {
  EMAIL: string;
  [key: string]: string | undefined;
}

interface MailchimpRenderProps {
  subscribe: (data: EmailFormFields) => void;
  status: FormStatus;
  message: string | Error | null;
}

const NewsletterSection = () => {
  const mailchimpUrl =
    "https://gmail.us7.list-manage.com/subscribe/post-json?u=285da69551a8c05fb4b144b58&id=759d09647c&f_id=00e6b1e4f0";

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700 text-center"
        >
          <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the latest insights on web development, performance tips, and
            industry trends delivered straight to your inbox. No spam,
            unsubscribe anytime.
          </p>

          <MailchimpSubscribe
            url={mailchimpUrl}
            render={({ subscribe, status, message }: MailchimpRenderProps) => (
              <NewsletterFormContent
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />

          <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
            <span>Join 500+ developers getting weekly insights</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;