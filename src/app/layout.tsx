import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { MainNavbar } from "@/components/layout/MainNavbar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { PropertyStateProvider } from "@/components/providers/PropertyStateProvider";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { InitialLoadCard } from "@/components/common/InitialLoadCard";
import { FloatingActions } from "@/components/common/FloatingActions";
import { siteConfig } from "@/lib/constants";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading"
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

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
      <body className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
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
