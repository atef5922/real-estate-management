import { Award, Building2, Home, UsersRound } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const stats = [
  { label: "Properties Listed", value: 25, suffix: "K+", icon: Home },
  { label: "Happy Clients", value: 18, suffix: "K+", icon: UsersRound },
  { label: "Premium Projects", value: 150, suffix: "+", icon: Building2 },
  { label: "Years Experience", value: 10, suffix: "+", icon: Award }
];

export function Stats() {
  return (
    <section className="bg-navy-radial py-8 text-white">
      <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-4 border-white/15 lg:border-r lg:last:border-r-0">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-gold-500 text-gold-400">
              <stat.icon className="h-7 w-7" />
            </span>
            <span>
              <span className="block font-heading text-3xl font-semibold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-1 block text-sm text-white/72">{stat.label}</span>
            </span>
            {index < stats.length - 1 ? <span className="hidden" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
