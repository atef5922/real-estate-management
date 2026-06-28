import { CalendarCheck, FileCheck2, ShieldCheck, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    title: "Verified Homes",
    icon: ShieldCheck,
    text: "Every featured home is reviewed for ownership clarity, location quality, and buyer confidence."
  },
  {
    title: "Trusted Advisors",
    icon: UsersRound,
    text: "Work with specialists who understand family needs, investment goals, and premium negotiations."
  },
  {
    title: "Legal Confidence",
    icon: FileCheck2,
    text: "Move forward with document review support, approval checks, and risk-aware guidance."
  },
  {
    title: "Private Visits",
    icon: CalendarCheck,
    text: "Schedule calm, curated site visits that help you feel the space before making a decision."
  }
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-radial py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gold-line" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,164,74,0.18),transparent_34%)]" />
      <div className="container relative z-10">
        <SectionHeader
          align="center"
          eyebrow="Why Choose Us"
          title="A More Trusted Way to Move"
          className="mx-auto text-white [&_h2]:text-white"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-white/74">
          A property decision is more than a transaction. It is where family, security, and future plans begin.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.08] p-7 text-center shadow-glass backdrop-blur transition hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white/[0.12]"
            >
              <div className="absolute right-4 top-4 font-heading text-5xl font-semibold text-white/[0.05]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative z-10">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-sm border border-gold-400/35 bg-gold-400/12 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold leading-tight text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/74">{reason.text}</p>
              </div>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
