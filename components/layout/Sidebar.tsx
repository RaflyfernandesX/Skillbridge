"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, CircleHelp, CreditCard, Home, LogOut, MessageCircle, Plus, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/sessions", label: "Sessions", icon: CalendarCheck },
  { href: "/messages", label: "Messages", icon: MessageCircle },
  { href: "/checkout", label: "Payments", icon: CreditCard },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-outline-variant bg-surface px-md py-lg lg:flex">
      <div className="mb-2xl px-md">
        <Link href="/" className="text-headline-lg font-bold text-primary">SkillBridge</Link>
        <p className="text-label-md text-on-surface-variant">Premium Mentorship</p>
      </div>
      <nav className="flex-1 space-y-xs overflow-y-auto">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-md rounded-lg px-md py-sm text-label-md transition duration-200 hover:translate-x-1 hover:bg-surface-container-low",
                active ? "border-r-4 border-primary bg-primary/10 font-semibold text-primary" : "text-on-surface-variant"
              )}
            >
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-md border-t border-outline-variant pt-lg">
        <Button href="/book-session" className="w-full"><Plus size={18} /> Book New Session</Button>
        <Link href="#" className="flex items-center gap-md rounded-lg px-md py-sm text-label-md text-on-surface-variant hover:bg-surface-container-low">
          <CircleHelp size={20} /> Help Center
        </Link>
        <Link href="/login" className="flex items-center gap-md rounded-lg px-md py-sm text-label-md text-on-surface-variant hover:bg-surface-container-low">
          <LogOut size={20} /> Logout
        </Link>
      </div>
    </aside>
  );
}
