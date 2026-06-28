import { AuthCard } from "@/components/common/AuthCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Forgot Password",
  description: "Frontend-only password reset page ready for future authentication."
});

export default function ForgotPasswordPage() {
  return <AuthCard mode="forgot" />;
}
