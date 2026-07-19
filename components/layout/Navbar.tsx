import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { logoUrl, user } from "@/lib/data";
import { cn } from "@/lib/utils";

const marketingLinks = [
  { href: "/explore", label: "Mentor" },
  { href: "/sessions", label: "Sesi" },
  { href: "/checkout", label: "Paket" },
];

export function MarketingNavbar({
  active = "Mentor",
}: {
  active?: string;
}) {
  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b border-outline-variant bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src={logoUrl}
            alt="SkillBridge"
            width={42}
            height={42}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-xl font-bold text-primary">
              SkillBridge
            </h2>

            <p className="text-xs text-on-surface-variant">
              Platform Mentoring Indonesia
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {marketingLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                active === link.label
                  ? "text-primary"
                  : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/login"
            variant="ghost"
            className="hidden md:flex"
          >
            Masuk
          </Button>

          <Button href="/register">
            Daftar
          </Button>

          <Button
            variant="ghost"
            className="h-10 w-10 px-0 md:hidden"
            aria-label="Menu"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function AppNavbar({
  title = "Selamat Datang 👋",
}: {
  title?: string;
}) {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-outline-variant bg-background/80 px-6 backdrop-blur-xl lg:px-10">
      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        <p className="text-sm text-on-surface-variant">
          Semoga harimu menyenangkan dan produktif.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notifikasi"
          className="relative rounded-xl p-3 transition hover:bg-surface-container"
        >
          <Bell size={22} />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="hidden h-10 w-px bg-outline-variant lg:block" />

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-surface-container"
        >
          <div className="hidden text-right lg:block">
            <h3 className="font-semibold">
              {user.name}
            </h3>

            <p className="text-sm text-on-surface-variant">
              {user.role}
            </p>
          </div>

          <Avatar
            src={user.image}
            alt={user.name}
          />

          <ChevronDown
            size={18}
            className="hidden lg:block"
          />
        </Link>
      </div>
    </header>
  );
}