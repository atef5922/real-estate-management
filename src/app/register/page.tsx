import { AuthCard } from "@/components/common/AuthCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Register",
  description: "Frontend-only registration page ready for future buyer, seller, developer, and agent accounts."
});

export default function RegisterPage() {
  return <AuthCard mode="register" />;
}
