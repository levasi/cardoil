import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
