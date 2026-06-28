"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogs } from "@/data/blogs";

export function BlogClient() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];

  const filtered = useMemo(
    () =>
      blogs.filter((blog) => {
        const matchesCategory = category === "All" || blog.category === category;
        const matchesQuery = query
          ? [blog.title, blog.excerpt, blog.category, ...blog.tags].join(" ").toLowerCase().includes(query.toLowerCase())
          : true;
        return matchesCategory && matchesQuery;
      }),
    [category, query]
  );

  return (
    <div className="container py-14">
      <div className="flex flex-col gap-4 rounded-lg border border-borderSoft bg-white p-5 shadow-sm lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="pl-11" />
          <Search className="absolute left-4 top-3 h-5 w-5 text-mutedText" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-navy-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-gold-500/15"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((blog) => (
          <article key={blog.id} className="overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
            <div className="relative aspect-[1.42]">
              <Image src={blog.image} alt={blog.title} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <span className="rounded-sm bg-gold-500/12 px-2.5 py-1 text-xs font-bold text-gold-500">{blog.category}</span>
              <h2 className="mt-4 font-heading text-2xl font-semibold leading-snug text-slateText">
                <Link href={`/blog/${blog.slug}`} className="hover:text-gold-500">{blog.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-mutedText">{blog.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-mutedText">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold-500" />
                  {blog.publishedAt}
                </span>
                <Link href={`/blog/${blog.slug}`} className="font-semibold text-navy-950 hover:text-gold-500">
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
