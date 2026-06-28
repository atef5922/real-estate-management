import { cn } from "@/lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-slate-200", className)} />;
}

export function PropertyCardSkeleton() {
  return (
    <div className="rounded-lg border border-borderSoft bg-white p-3 shadow-sm">
      <LoadingSkeleton className="h-56 w-full" />
      <div className="space-y-3 p-3">
        <LoadingSkeleton className="h-5 w-2/3" />
        <LoadingSkeleton className="h-4 w-full" />
        <LoadingSkeleton className="h-4 w-5/6" />
        <LoadingSkeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
