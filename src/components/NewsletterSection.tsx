import { motion } from "framer-motion";
import { TrendingUp, Loader2 } from "lucide-react";
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

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { TrendingUp, Loader2 } from "lucide-react";
// import MailchimpSubscribe from "react-mailchimp-subscribe";

// // ================================================================
// // 1. مكون داخلي للنموذج - يعالج الإدخال والرسائل
// // ================================================================

// interface NewsletterFormContentProps {
//   status: string;
//   message: string;
//   onValidated: (formData: { EMAIL: string }) => void;
// }

// const NewsletterFormContent: React.FC<NewsletterFormContentProps> = ({
//   status,
//   message,
//   onValidated,
// }) => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // التحقق من أن الإيميل صالح قبل إرساله
//     if (email && email.indexOf("@") > -1) {
//       onValidated({ EMAIL: email });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       {/* عرض رسائل الخطأ أو النجاح */}
//       {status === "error" && (
//         <div
//           className="text-red-300 p-3 mb-4 rounded-md border border-red-500/50 bg-red-900/40 text-sm text-left"
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       {status === "success" && (
//         <div className="text-green-300 p-3 mb-4 rounded-md border border-green-500/50 bg-green-900/40 text-sm">
//           Thank you for subscribing! Please check your email to confirm.
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:opacity-70"
//             disabled={status === "sending"}
//           />
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
//             disabled={status === "sending"}
//           >
//             {status === "sending" ? (
//               <>
//                 <Loader2 className="animate-spin h-5 w-5 mr-2" />
//                 Subscribing...
//               </>
//             ) : (
//               "Subscribe"
//             )}
//           </motion.button>
//         </div>
//       </form>
//     </div>
//   );
// };

// // ================================================================
// // 2. المكون الرئيسي الذي ستستخدمه في صفحتك
// // ================================================================

// interface MailchimpSubscribeRenderProps {
//   subscribe: (formData: { EMAIL: string }) => void;
//   status: string;
//   message: string;
// }

// const NewsletterSection = () => {
//   // ❗ ملاحظة هامة: تأكد من أن الرابط ينتهي بـ /post-json
//   const mailchimpUrl =
//     "https://gmail.us7.list-manage.com/subscribe/post-json?u=285da69551a8c05fb4b144b58&id=759d09647c&f_id=00e6b1e4f0";

//   return (
//     <section className="py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl border border-gray-700 text-center"
//         >
//           <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-6" />
//           <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Get the latest insights on web development, performance tips, and
//             industry trends delivered straight to your inbox. No spam,
//             unsubscribe anytime.
//           </p>

//           <MailchimpSubscribe
//             url={mailchimpUrl}
//             render={({
//               subscribe,
//               status,
//               message,
//             }: MailchimpSubscribeRenderProps) => (
//               <NewsletterFormContent
//                 status={status}
//                 message={message}
//                 onValidated={(formData) => subscribe(formData)}
//               />
//             )}
//           />

//           <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
//             <span>Join 500+ developers getting weekly insights</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewsletterSection;
