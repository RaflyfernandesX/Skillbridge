import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-md px-md py-lg text-label-md text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-primary">SkillBridge</p>
        <p>© 2024 SkillBridge. Modern SaaS Mentorship.</p>
        <div className="flex flex-wrap gap-md">
          {["Privacy Policy", "Terms of Service", "Support", "Contact"].map((item) => (
            <Link key={item} href="#" className="hover:text-primary">{item}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
