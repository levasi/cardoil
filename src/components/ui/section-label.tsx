import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  withLine?: boolean;
}

export function SectionLabel({
  children,
  className,
  light = false,
  withLine = false,
}: SectionLabelProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className={cn("flex items-center gap-3", withLine && "w-full")}>
        {withLine && (
          <span
            className={cn("h-px flex-1 bg-border", light && "bg-white/20")}
            aria-hidden
          />
        )}
        <p className={cn("label-section", light && "text-brand")}>{children}</p>
        {withLine && (
          <span
            className={cn("h-px flex-1 bg-border", light && "bg-white/20")}
            aria-hidden
          />
        )}
      </div>
      {!withLine && (
        <span
          className={cn("h-px w-12 bg-brand", light && "bg-brand/60")}
          aria-hidden
        />
      )}
    </div>
  );
}
