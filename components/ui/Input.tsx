import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block space-y-sm">
      {label ? <span className="text-label-md text-on-surface-variant">{label}</span> : null}
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-xl border border-outline-variant bg-surface-container-low px-md text-body-md text-on-surface transition placeholder:text-outline focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20",
          className
        )}
        {...props}
      />
    </label>
  );
}
