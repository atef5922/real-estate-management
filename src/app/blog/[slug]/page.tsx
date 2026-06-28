import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Tag } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return createMetadata({ title: "Blog Not Found", description: "The requested article could not be found." });
  }

  return createMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blog/${blog.slug}`,
    image: blog.image
  });
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const related = blogs.filter((item) => item.id !== blog.id && item.category === blog.category).slice(0, 2);

  return (
    <>
      <section className="bg-slate-50 py-8">
        <div className="container">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: blog.title }]} />
        </div>
      </section>
      <article className="bg-white py-12">
        <div className="container max-w-5xl">
          <div className="text-center">
            <span className="rounded-sm bg-gold-500/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-500">{blog.category}</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-slateText lg:text-6xl">
              {blog.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-mutedText">{blog.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-mutedText">
              <span className="flex items-center gap-2">
                <Image src={blog.author.image} alt={blog.author.name} width={36} height={36} className="rounded-full" />
                {blog.author.name}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold-500" />
                {blog.publishedAt}
              </span>
              <span>{blog.readTime}</span>
            </div>
          </div>
          <div className="relative mt-10 aspect-[1.9] overflow-hidden rounded-lg shadow-premium">
            <Image src={blog.image} alt={blog.title} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
          </div>
          <div className="prose prose-slate mx-auto mt-10 max-w-3xl">
            {blog.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 rounded-sm border border-borderSoft px-3 py-1.5 text-sm text-mutedText">
                <Tag className="h-3.5 w-3.5 text-gold-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
      {related.length ? (
        <section className="bg-slate-50 py-16">
          <div className="container max-w-5xl">
            <h2 className="font-heading text-3xl font-semibold text-slateText">Related Posts</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="rounded-lg border border-borderSoft bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                  <p className="text-sm font-semibold text-gold-500">{post.category}</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-slateText">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mutedText">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
