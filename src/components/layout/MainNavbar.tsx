"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BarChart3, Calculator, ChevronDown, ChevronRight, Heart, Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { usePropertyState } from "@/components/providers/PropertyStateProvider";
import { navItems, pageLinks, propertyMenuItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

function CountPill({ value }: { value: number }) {
  return (
    <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-navy-950">
      {value}
    </span>
  );
}

function IconTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-[90] -translate-x-1/2 whitespace-nowrap rounded-sm border border-navy-950/10 bg-navy-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-premium transition group-hover:opacity-100 group-focus-visible:opacity-100">
      {label}
      <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-navy-950" />
    </span>
  );
}

function NavDropdown({
  label,
  links,
  active,
  pathname
}: {
  label: string;
  links: { label: string; href: string }[];
  active: boolean;
  pathname: string;
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          "group relative inline-flex h-10 items-center gap-1 rounded-sm px-3 text-sm font-semibold tracking-[0.01em] text-navy-950 outline-none transition-all duration-200 hover:text-gold-500 data-[state=open]:text-gold-500",
          "before:absolute before:inset-x-2 before:top-0 before:h-px before:rounded-full before:bg-gold-400 before:opacity-0 before:transition",
          "after:absolute after:left-1/2 after:top-full after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-navy-850 after:opacity-0 after:transition",
          active && "bg-navy-850 text-white shadow-[0_8px_18px_rgba(6,26,45,0.14)] hover:text-white data-[state=open]:text-white before:opacity-100 after:opacity-100"
        )}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          sideOffset={18}
          collisionPadding={18}
          className="premium-menu-content z-[120] w-72 overflow-hidden rounded-lg border border-borderSoft bg-white/[0.98] p-2 shadow-premium backdrop-blur-xl"
        >
          <div className="border-b border-borderSoft px-3 py-3">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-500">
              {label === "Properties" ? "Explore Inventory" : "Client Pages"}
            </p>
            <p className="mt-1 text-xs text-mutedText">
              {label === "Properties" ? "Premium property categories" : "Helpful real estate tools"}
            </p>
          </div>
          {links.map((link) => {
            const linkPath = link.href.split("?")[0];
            const isCurrentLink =
              label === "Pages" && (pathname === linkPath || pathname.startsWith(`${linkPath}/`));

            return (
              <DropdownMenu.Item key={link.label} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "group/item mt-1 flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold text-slate-600 outline-none transition hover:bg-gold-500/10 hover:text-navy-950 focus:bg-gold-500/10 focus:text-navy-950",
                    isCurrentLink && "bg-gradient-to-r from-gold-500/14 to-transparent text-navy-950 shadow-[inset_3px_0_0_rgba(201,151,63,0.9)]"
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-gold-500",
                      isCurrentLink && "text-gold-500"
                    )}
                  />
                </Link>
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className="fill-white" width={18} height={9} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
    router.push(`/properties?keyword=${encodeURIComponent(query)}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" aria-label="Search properties">
          <Search className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-navy-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-32 z-[91] w-[min(92vw,620px)] -translate-x-1/2 rounded-lg bg-white p-5 shadow-premium">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-heading text-3xl font-semibold text-slateText">
              Search Premium Properties
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close search">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </div>
          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by area, type, project, or agent"
            />
            <Button type="submit">Search</Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function isDirectNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MainNavbar() {
  const pathname = usePathname();
  const { wishlist, compare } = usePropertyState();
  const pagesActive = pageLinks.some((link) => {
    const linkPath = link.href.split("?")[0];
    return pathname === linkPath || pathname.startsWith(`${linkPath}/`);
  });

  return (
    <div className="relative z-[80] border-b border-borderSoft bg-white/95 shadow-[0_10px_30px_rgba(6,26,45,0.08)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-3 xl:flex">
          {navItems.map((item) => {
            if (item.label === "Properties") {
              return (
                <NavDropdown
                  key={item.label}
                  label="Properties"
                  links={propertyMenuItems}
                  active={pathname === "/properties" || pathname.startsWith("/properties/")}
                  pathname={pathname}
                />
              );
            }

            if (item.label === "Pages") {
              return (
                <NavDropdown
                  key={item.label}
                  label="Pages"
                  links={pageLinks}
                  active={pagesActive}
                  pathname={pathname}
                />
              );
            }

            const active = isDirectNavActive(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative flex h-10 items-center rounded-sm px-3 text-sm font-semibold tracking-[0.01em] text-navy-950 transition-all duration-200 hover:text-gold-500",
                  "before:absolute before:inset-x-2 before:top-0 before:h-px before:rounded-full before:bg-gold-400 before:opacity-0 before:transition",
                  "after:absolute after:left-1/2 after:top-full after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-navy-850 after:opacity-0 after:transition",
                  active && "bg-navy-850 text-white shadow-[0_8px_18px_rgba(6,26,45,0.14)] hover:text-white before:opacity-100 after:opacity-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <SearchDialog />
            <Button
              asChild
              variant="outline"
              size="icon"
              className="group relative border-gold-500/35 text-gold-500 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              aria-label="Mortgage / EMI Calculator"
            >
              <Link href="/#mortgage-calculator">
                <Calculator className="h-5 w-5" />
                <IconTooltip label="Mortgage / EMI Calculator" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="group relative border-gold-500/35 text-navy-950 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              aria-label="Saved properties"
            >
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <CountPill value={wishlist.length} />
                <IconTooltip label="Saved Properties" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="group relative border-gold-500/35 text-navy-950 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              aria-label="Compare properties"
            >
              <Link href="/compare">
                <BarChart3 className="h-5 w-5" />
                <CountPill value={compare.length} />
                <IconTooltip label="Compare Properties" />
              </Link>
            </Button>
            <Button asChild className="hidden xl:inline-flex">
              <Link href="/dashboard">
                Add Property
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
