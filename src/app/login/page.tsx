import { AuthCard } from "@/components/common/AuthCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Login",
  description: "Frontend-only login page ready for future authentication."
});

export default function LoginPage() {
  return <AuthCard mode="login" />;
}
