"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Please share a little more detail")
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-borderSoft bg-white p-6 shadow-premium">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-slateText">
          Name
          <Input {...register("name")} placeholder="Your full name" />
          {errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slateText">
          Phone
          <Input {...register("phone")} placeholder="+880" />
          {errors.phone ? <span className="text-xs text-red-600">{errors.phone.message}</span> : null}
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slateText">
          Email
          <Input {...register("email")} type="email" placeholder="you@example.com" />
          {errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slateText">
          Subject
          <Input {...register("subject")} placeholder="Buying, selling, project listing..." />
          {errors.subject ? <span className="text-xs text-red-600">{errors.subject.message}</span> : null}
        </label>
      </div>
      <label className="mt-4 grid gap-1.5 text-sm font-semibold text-slateText">
        Message
        <Textarea {...register("message")} placeholder="Tell us what kind of property support you need." />
        {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
      </label>
      {submitted ? (
        <p className="mt-4 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
          Message captured for the frontend demo.
        </p>
      ) : null}
      <Button type="submit" className="mt-5 w-full sm:w-auto" disabled={isSubmitting}>
        Send Message
      </Button>
    </form>
  );
}
