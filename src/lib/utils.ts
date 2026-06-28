import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBDT(value: number, suffix = "") {
  return `৳ ${new Intl.NumberFormat("en-IN").format(value)}${suffix}`;
}

export function compactBDT(value: number) {
  if (value >= 10000000) {
    return `৳ ${(value / 10000000).toFixed(value % 10000000 === 0 ? 0 : 1)} Cr`;
  }

  if (value >= 100000) {
    return `৳ ${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 1)} Lac`;
  }

  return formatBDT(value);
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getUniqueValues<T>(items: T[], getter: (item: T) => string) {
  return Array.from(new Set(items.map(getter))).sort();
}
