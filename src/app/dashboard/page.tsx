import Link from "next/link";
import { BarChart3, Building2, CalendarCheck, Heart, Inbox, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dashboard",
  description: "Backend-ready real estate dashboard placeholder for properties, leads, visits, saved homes, and profile management."
});

const cards = [
  ["My Properties", "12", Building2],
  ["Leads", "48", Inbox],
  ["Visits", "16", CalendarCheck],
  ["Saved Properties", "8", Heart]
];

export default function DashboardPage() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="container">
        <div className="rounded-lg bg-navy-radial p-8 text-white shadow-premium">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">Frontend Placeholder</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold">Backend-Ready Dashboard</h1>
          <p className="mt-3 max-w-2xl text-white/72">
            This dashboard is intentionally frontend only. It is structured for future authentication, property CRUD, lead management, visit scheduling, booking, payments, and CRM modules.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-lg border border-borderSoft bg-white p-6 shadow-sm">
              <Icon className="h-7 w-7 text-gold-500" />
              <p className="mt-5 text-3xl font-black text-navy-950">{value as string}</p>
              <p className="mt-1 text-sm text-mutedText">{label as string}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-borderSoft bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-heading text-3xl font-semibold text-slateText">My Properties</h2>
              <Button asChild variant="gold">
                <Link href="/properties">Add Property</Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-3">
              {["Gulshan Lakeview Signature Apartment", "Banani Private Pool Villa", "Purbachal Investment Ready Land"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-md border border-borderSoft p-4">
                  <span className="font-medium text-slateText">{item}</span>
                  <span className="rounded-sm bg-slate-100 px-2 py-1 text-xs font-semibold text-mutedText">
                    {index === 0 ? "Published" : index === 1 ? "Draft" : "Review"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-borderSoft bg-white p-6 shadow-sm">
            <UserRound className="h-8 w-8 text-gold-500" />
            <h2 className="mt-4 font-heading text-3xl font-semibold text-slateText">Profile</h2>
            <p className="mt-3 text-sm leading-6 text-mutedText">
              User role, permissions, saved searches, verification status, and billing data can plug into this panel later.
            </p>
            <div className="mt-6 grid gap-3">
              <Button variant="outline">
                <BarChart3 className="h-4 w-4" />
                View Lead Pipeline
              </Button>
              <Button variant="outline">
                <CalendarCheck className="h-4 w-4" />
                Manage Visits
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
