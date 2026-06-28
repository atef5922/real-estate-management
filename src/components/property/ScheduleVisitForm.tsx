"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Enter a valid email"),
  date: z.string().min(1, "Preferred date is required"),
  time: z.string().min(1, "Preferred time is required"),
  message: z.string().min(10, "Please add a short message")
});

type FormValues = z.infer<typeof schema>;

export function ScheduleVisitForm({ propertyTitle }: { propertyTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: `I would like to schedule a private visit for ${propertyTitle}.`
    }
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-slateText">
        <CalendarCheck className="h-5 w-5 text-gold-500" />
        Schedule Visit
      </h2>
      <div className="mt-5 grid gap-4">
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
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-semibold text-slateText">
            Preferred Date
            <Input {...register("date")} type="date" />
            {errors.date ? <span className="text-xs text-red-600">{errors.date.message}</span> : null}
          </label>
          <label className="grid gap-1.5 text-sm font-semibold text-slateText">
            Preferred Time
            <Input {...register("time")} type="time" />
            {errors.time ? <span className="text-xs text-red-600">{errors.time.message}</span> : null}
          </label>
        </div>
        <label className="grid gap-1.5 text-sm font-semibold text-slateText">
          Message
          <Textarea {...register("message")} />
          {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
        </label>
        {submitted ? (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
            Visit request captured for the frontend demo.
          </p>
        ) : null}
        <Button type="submit" disabled={isSubmitting}>
          Submit Visit Request
        </Button>
      </div>
    </form>
  );
}
