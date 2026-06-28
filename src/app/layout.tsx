import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { MainNavbar } from "@/components/layout/MainNavbar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { PropertyStateProvider } from "@/components/providers/PropertyStateProvider";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { InitialLoadCard } from "@/components/common/InitialLoadCard";
import { FloatingActions } from "@/components/common/FloatingActions";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: siteConfig.name
      }
    ],
    locale: "en_BD",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <PropertyStateProvider>
          <InitialLoadCard />
          <ScrollProgress />
          <header className="sticky top-0 z-[80]">
            <TopNavbar />
            <MainNavbar />
          </header>
          <main>{children}</main>
          <FloatingActions />
          <Footer />
        </PropertyStateProvider>
      </body>
    </html>
  );
}
