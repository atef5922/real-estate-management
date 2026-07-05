import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/common/ContactForm";
import { PageBanner } from "@/components/common/PageBanner";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Dream Habitat Realty for premium real estate consultation, site visits, project listings, and property advisory in Bangladesh."
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Expert Consultation"
        image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Luxury property client consultation"
        current="Contact"
      />
      <section className="bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            {[
              [Phone, "Phone", siteConfig.phone],
              [Mail, "Email", siteConfig.email],
              [MapPin, "Office", siteConfig.address],
              [Clock, "Working Hours", siteConfig.hours]
            ].map(([Icon, label, value]) => (
              <div key={label as string} className="rounded-lg border border-borderSoft bg-slate-50 p-5">
                <Icon className="h-6 w-6 text-gold-500" />
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-mutedText">{label as string}</p>
                <p className="mt-1 font-semibold text-slateText">{value as string}</p>
              </div>
            ))}
            <Button asChild variant="gold" size="lg">
              <a href={siteConfig.whatsapp}>
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-slate-50 pb-20">
        <div className="container">
          <div className="grid min-h-[360px] place-items-center rounded-lg border border-borderSoft bg-[linear-gradient(135deg,rgba(201,151,63,.18),rgba(6,26,45,.08)),url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center text-center shadow-sm">
            <div className="rounded-lg bg-white/92 p-6 shadow-premium backdrop-blur">
              <MapPin className="mx-auto h-8 w-8 text-gold-500" />
              <p className="mt-3 font-heading text-3xl font-semibold text-slateText">{siteConfig.address}</p>
              <p className="mt-2 text-sm text-mutedText">Google Map placeholder ready for future embed.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
