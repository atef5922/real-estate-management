"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-sm border border-gold-400/35 bg-white text-gold-500 shadow-sm">
            <MessageCircleQuestion className="h-7 w-7" />
          </span>
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title="Questions Buyers Ask Before Moving Forward"
            className="mt-6"
          />
        </div>
        <Accordion.Root type="single" collapsible className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={faq.question}
              className="overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition data-[state=open]:border-gold-400/60 data-[state=open]:shadow-premium"
            >
              <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 px-5 py-5 text-left">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-gold-500/12 text-xs font-black text-gold-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-xl font-semibold leading-snug text-slateText">
                    {faq.question}
                  </span>
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-borderSoft text-gold-500 transition group-data-[state=open]:rotate-180 group-data-[state=open]:border-gold-400 group-data-[state=open]:bg-gold-500 group-data-[state=open]:text-navy-950">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden px-5 pb-5 text-sm leading-7 text-mutedText data-[state=closed]:animate-none">
                <div className="ml-[52px] border-t border-borderSoft pt-4">{faq.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="mx-auto mt-8 max-w-5xl rounded-lg border border-gold-400/30 bg-white p-5 text-center shadow-sm">
          <p className="font-heading text-2xl font-semibold text-slateText">Need a private answer?</p>
          <p className="mt-2 text-sm text-mutedText">
            Our advisors can guide you through verification, site visits, loan planning, and property shortlisting.
          </p>
        </div>
      </div>
    </section>
  );
}
