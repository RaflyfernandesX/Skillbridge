import { Search, SlidersHorizontal } from "lucide-react";
import { MarketingNavbar } from "@/components/layout/Navbar";
import { MentorCard } from "@/components/cards/MentorCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { mentors } from "@/lib/data";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar />

      <main className="pt-20">
        <section className="border-b border-outline-variant bg-surface-container-low py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold">
              Temukan Mentor Terbaik untuk Kariermu
            </h1>

            <p className="mb-8 max-w-3xl text-on-surface-variant">
              Pilih mentor profesional dari berbagai perusahaan teknologi
              Indonesia untuk membantu meningkatkan skill, membangun portofolio,
              mempersiapkan interview, hingga merancang perjalanan kariermu.
            </p>

            <div className="relative max-w-2xl">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-outline"
                size={20}
              />

              <input
                className="h-14 w-full rounded-xl border border-outline-variant bg-white pl-14 pr-5 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Cari berdasarkan skill, perusahaan, atau posisi..."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Frontend",
                "Backend",
                "UI/UX",
                "Product",
                "Mobile",
                "AI",
              ].map((tag, index) => (
                <Button
                  key={tag}
                  variant={index === 0 ? "secondary" : "outline"}
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-3">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <SlidersHorizontal size={20} />
              Filter Mentor
            </h2>

            <div>
              <label className="mb-3 block text-sm font-medium">
                Kisaran Harga
              </label>

              <input
                type="range"
                min="100000"
                max="500000"
                defaultValue="200000"
                className="w-full accent-primary"
              />

              <div className="mt-2 flex justify-between text-sm text-on-surface-variant">
                <span>Rp100rb</span>
                <span>Rp500rb+</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">Ketersediaan</p>

              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked />
                Online Sekarang
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" />
                Akhir Pekan
              </label>
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium">
                Bidang
              </label>

              <select className="w-full rounded-xl border border-outline-variant p-3">
                <option>Semua Bidang</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>UI/UX</option>
                <option>Mobile</option>
                <option>Product</option>
              </select>
            </div>

            <Card>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">
                  Butuh mentoring untuk tim?
                </h3>

                <p className="text-sm text-on-surface-variant">
                  SkillBridge menyediakan program mentoring khusus perusahaan
                  untuk meningkatkan kemampuan tim teknologi.
                </p>

                <Button className="w-full">
                  Hubungi Kami
                </Button>
              </CardContent>
            </Card>
          </aside>

          <section className="space-y-6 lg:col-span-9">
            <div className="flex items-center justify-between">
              <p className="text-on-surface-variant">
                Menampilkan{" "}
                <strong className="text-on-surface">
                  {mentors.length}
                </strong>{" "}
                mentor
              </p>

              <Button variant="ghost" size="sm">
                Urutkan: Paling Populer
              </Button>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {mentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}