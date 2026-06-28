"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { navItems, pageLinks, propertyMenuItems, siteConfig } from "@/lib/constants";

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-navy-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed right-0 top-0 z-[91] flex h-full w-[min(92vw,390px)] flex-col bg-white shadow-premium">
          <div className="flex items-center justify-between border-b border-borderSoft p-5">
            <Logo />
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto p-5">
            <div className="space-y-2">
              {navItems.map((item) => {
                if (item.label === "Properties") {
                  return (
                    <details key={item.label} className="group rounded-md border border-borderSoft">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold text-navy-950">
                        Properties
                        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-borderSoft p-2">
                        {propertyMenuItems.map((link) => (
                          <Dialog.Close asChild key={link.label}>
                            <Link href={link.href} className="block rounded-md px-3 py-2 text-sm text-mutedText hover:bg-slate-100 hover:text-navy-950">
                              {link.label}
                            </Link>
                          </Dialog.Close>
                        ))}
                      </div>
                    </details>
                  );
                }

                if (item.label === "Pages") {
                  return (
                    <details key={item.label} className="group rounded-md border border-borderSoft">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold text-navy-950">
                        Pages
                        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-borderSoft p-2">
                        {pageLinks.map((link) => (
                          <Dialog.Close asChild key={link.label}>
                            <Link href={link.href} className="block rounded-md px-3 py-2 text-sm text-mutedText hover:bg-slate-100 hover:text-navy-950">
                              {link.label}
                            </Link>
                          </Dialog.Close>
                        ))}
                      </div>
                    </details>
                  );
                }

                return (
                  <Dialog.Close asChild key={item.label}>
                    <Link href={item.href} className="block rounded-md border border-borderSoft px-4 py-3 font-semibold text-navy-950 hover:border-gold-400 hover:bg-gold-500/10">
                      {item.label}
                    </Link>
                  </Dialog.Close>
                );
              })}
            </div>

            <Button asChild className="mt-6 w-full">
              <Link href="/dashboard">Add Property</Link>
            </Button>

            <div className="mt-8 space-y-3 rounded-lg bg-slate-50 p-4 text-sm text-mutedText">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-500" />
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp} className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold-500" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 border-t border-borderSoft p-5 text-navy-950">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
