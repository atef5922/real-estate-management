import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { blogs } from "@/data/blogs";

export function BlogPreview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Market Insights"
            title="Latest Real Estate Articles"
            description="Buyer education content that helps the site feel trustworthy, premium, and sales-ready."
          />
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-gold-500 hover:text-navy-950">
            Read Blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <article key={blog.id} className="overflow-hidden rounded-lg border border-borderSoft bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="relative aspect-[1.45]">
                <Image src={blog.image} alt={blog.title} fill sizes="(min-width: 1280px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <span className="rounded-sm bg-gold-500/12 px-2.5 py-1 text-xs font-bold text-gold-500">{blog.category}</span>
                <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug text-slateText">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-gold-500">{blog.title}</Link>
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-mutedText">{blog.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-mutedText">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gold-500" />
                    {blog.publishedAt}
                  </span>
                  <Link href={`/blog/${blog.slug}`} className="font-semibold text-navy-950 hover:text-gold-500">
                    Read
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
