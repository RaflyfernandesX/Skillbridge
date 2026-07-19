import { AppNavbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function AppShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar />

      <main className="min-h-screen transition-all duration-300 lg:ml-64">
        <AppNavbar title={title} />

        <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}