declare module "react-mailchimp-subscribe";

interface MailchimpRenderProps {
  subscribe: (formData: { EMAIL: string; FNAME?: string }) => void;
  status: "sending" | "success" | "error" | null | undefined;
  message: string | React.ReactNode;
}
