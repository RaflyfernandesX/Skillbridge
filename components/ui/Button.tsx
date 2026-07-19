"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-soft hover:shadow-lift",
  secondary: "bg-primary text-white shadow-soft hover:shadow-lift",
  outline: "border border-outline-variant bg-white text-on-surface hover:border-primary hover:text-primary",
  ghost: "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
  danger: "bg-error text-white shadow-soft"
};

const sizes = {
  sm: "h-9 px-md text-label-sm",
  md: "h-11 px-lg text-label-md",
  lg: "h-14 px-2xl text-headline-lg"
};

export function Button({ href, className, children, variant = "primary", size = "md", ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-sm rounded-xl font-semibold transition focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.span whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={styles}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <button className={styles} {...props}>
        {children}
      </button>
    </motion.span>
  );
}
