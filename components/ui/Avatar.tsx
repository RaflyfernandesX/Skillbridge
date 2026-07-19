import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
  xl: "h-28 w-28"
};

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden rounded-full border border-outline-variant bg-surface-container", sizes[size], className)}>
      {src ? <Image src={src} alt={alt} fill sizes="112px" className="object-cover" /> : <span className="flex h-full w-full items-center justify-center font-bold text-primary">{alt.charAt(0)}</span>}
    </div>
  );
}
