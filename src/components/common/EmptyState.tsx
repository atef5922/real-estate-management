import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-borderSoft bg-white p-10 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/12 text-gold-500">
        <Building2 className="h-7 w-7" />
      </div>
      <h2 className="mt-5 font-heading text-3xl font-semibold text-slateText">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-mutedText">{description}</p>
      {actionLabel && actionHref ? (
        <Button asChild className="mt-6">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      ) : null}
    </div>
  );
}
