import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "primary" | "secondary" | "success" | "neutral" | "warning";
};

const tones = {
  primary: "bg-primary-fixed text-primary",
  secondary: "bg-secondary-fixed text-on-secondary-fixed-variant",
  success: "bg-emerald-100 text-emerald-700",
  neutral: "bg-surface-container text-on-surface-variant",
  warning: "bg-orange-100 text-orange-700"
};

export function Badge({ className, tone = "primary", ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-full px-sm py-xs text-label-sm uppercase", tones[tone], className)} {...props} />;
}
