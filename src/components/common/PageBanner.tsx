import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  image?: string;
  imageAlt?: string;
  current: string;
};

export function PageBanner({
  eyebrow,
  title,
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "",
  current
}: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-12 pt-8 text-white sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={false}
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,164,74,0.16),transparent_30%),linear-gradient(100deg,rgba(6,26,45,0.88)_0%,rgba(6,26,45,0.72)_44%,rgba(11,39,66,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold-line" />
      <div className="container relative z-10">
        <div className="max-w-full">
          <Breadcrumb variant="light" items={[{ label: current }]} />
          {eyebrow ? (
            <p className="mt-5 inline-flex rounded-sm border border-gold-400/30 bg-gold-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-gold-300 backdrop-blur">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-full whitespace-nowrap font-heading text-3xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-5 h-1 w-24 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
