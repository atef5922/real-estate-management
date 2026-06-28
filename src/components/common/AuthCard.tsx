"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, Lock, Mail, UserRound } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/Logo";

type AuthCardProps = {
  mode: "login" | "register" | "forgot";
};

export function AuthCard({ mode }: AuthCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const isRegister = mode === "register";
  const isForgot = mode === "forgot";

  return (
    <section className="min-h-[calc(100vh-80px)] bg-navy-radial px-4 py-16">
      <div className="mx-auto max-w-md rounded-lg border border-white/20 bg-white p-6 shadow-premium">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-8 text-center">
          <h1 className="font-heading text-4xl font-semibold text-slateText">
            {isRegister ? "Create Account" : isForgot ? "Reset Password" : "Welcome Back"}
          </h1>
          <p className="mt-2 text-sm text-mutedText">
            {isRegister
              ? "Frontend-ready registration for future buyer, seller, and agent accounts."
              : isForgot
                ? "Enter your email to preview a future password reset workflow."
                : "Login UI prepared for future authentication and dashboard access."}
          </p>
        </div>
        <form
          className="mt-6 grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {isRegister ? (
            <label className="relative">
              <UserRound className="absolute left-3 top-3.5 h-4 w-4 text-mutedText" />
              <Input required placeholder="Full name" className="pl-10" />
            </label>
          ) : null}
          <label className="relative">
            <Mail className="absolute left-3 top-3.5 h-4 w-4 text-mutedText" />
            <Input required type="email" placeholder="Email address" className="pl-10" />
          </label>
          {!isForgot ? (
            <label className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-mutedText" />
              <Input required type="password" placeholder="Password" className="pl-10 pr-10" />
              <Eye className="absolute right-3 top-3.5 h-4 w-4 text-mutedText" />
            </label>
          ) : null}
          {isRegister ? (
            <select className="h-11 rounded-md border border-borderSoft bg-white px-3 text-sm text-slateText">
              <option>Buyer</option>
              <option>Seller</option>
              <option>Developer</option>
              <option>Agent</option>
            </select>
          ) : null}
          {mode === "login" ? (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-mutedText">
                <input type="checkbox" />
                Remember me
              </label>
              <Link href="/forgot-password" className="font-semibold text-gold-500">
                Forgot password?
              </Link>
            </div>
          ) : null}
          <Button type="submit" className="w-full" variant="gold">
            {isRegister ? "Create Account" : isForgot ? "Send Reset Link" : "Login"}
          </Button>
        </form>
        {submitted ? (
          <p className="mt-4 rounded-md bg-green-50 px-3 py-2 text-center text-sm font-medium text-green-700">
            Frontend form submitted.
          </p>
        ) : null}
        {!isForgot ? (
          <>
            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-mutedText">
              <span className="h-px flex-1 bg-borderSoft" />
              Social Login
              <span className="h-px flex-1 bg-borderSoft" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="outline">
                <FaGoogle />
                Google
              </Button>
              <Button type="button" variant="outline">
                <FaFacebookF />
                Facebook
              </Button>
            </div>
          </>
        ) : null}
        <p className="mt-6 text-center text-sm text-mutedText">
          {isRegister ? "Already have an account?" : "Need an account?"}{" "}
          <Link href={isRegister ? "/login" : "/register"} className="font-semibold text-gold-500">
            {isRegister ? "Login" : "Register"}
          </Link>
        </p>
      </div>
    </section>
  );
}
