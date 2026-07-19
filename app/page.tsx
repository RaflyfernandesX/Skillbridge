import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Palette,
  Star,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import { MarketingNavbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/layout/Animated";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { categories, mentors } from "@/lib/data";

const icons = [Code2, Palette, TrendingUp, WalletCards];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar />

      <main className="pt-20">

        <section className="hero-gradient overflow-hidden py-24 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

            <FadeIn>

              <Badge className="mb-6 normal-case px-4 py-2">
                <Star
                  size={15}
                  className="mr-2 fill-primary"
                />
                Platform Mentoring Karier Indonesia
              </Badge>

              <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-tight lg:text-7xl">
                Bangun Karier Impian Bersama
                <span className="text-primary">
                  {" "}Mentor Profesional Indonesia.
                </span>
              </h1>

              <p className="mx-auto mb-10 max-w-3xl text-lg text-on-surface-variant lg:text-xl">
                Terhubung dengan mentor berpengalaman dari Gojek,
                Tokopedia, Traveloka, Ruangguru, Xendit, dan berbagai
                perusahaan teknologi lainnya melalui sesi mentoring
                1-on-1 yang fleksibel.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/explore" size="lg">
                  Cari Mentor
                </Button>

                <Button
                  href="/register"
                  variant="outline"
                  size="lg"
                >
                  Menjadi Mentor
                </Button>
              </div>

            </FadeIn>

            <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">

              {[
                ["120+", "Mentor Aktif"],
                ["2.800+", "Sesi Mentoring"],
                ["1.500+", "Mentee Terbantu"],
                ["4.9★", "Rating Pengguna"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-4xl font-bold text-primary">
                    {value}
                  </h3>

                  <p className="mt-2 text-sm text-on-surface-variant">
                    {label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-12 flex items-end justify-between">

            <div>
              <h2 className="text-4xl font-bold">
                Kategori Mentoring
              </h2>

              <p className="mt-2 text-on-surface-variant">
                Pilih bidang yang ingin kamu pelajari bersama mentor terbaik.
              </p>
            </div>

            <Button
              href="/explore"
              variant="ghost"
            >
              Lihat Semua
              <ArrowRight size={18} />
            </Button>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => {

              const Icon = icons[index] ?? BriefcaseBusiness;

              return (
                <Card
                  key={category.title}
                  className="transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="space-y-5">

                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm text-on-surface-variant">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-primary">
                      {category.count}
                      <ArrowRight size={16} />
                    </div>

                  </CardContent>
                </Card>
              );
            })}

          </div>

        </section>

        <section className="bg-surface-container-low py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">

              <h2 className="text-4xl font-bold">
                Mentor Pilihan
              </h2>

              <p className="mt-2 text-on-surface-variant">
                Belajar langsung dari praktisi teknologi berpengalaman.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {mentors.map((mentor) => (

                <Card
                  key={mentor.id}
                  className="overflow-hidden transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="space-y-5">

                    <div
                      className="h-52 rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${mentor.image})`,
                      }}
                    />

                    <div>

                      <h3 className="text-xl font-bold">
                        {mentor.name}
                      </h3>

                      <p className="text-sm text-on-surface-variant">
                        {mentor.role}
                      </p>

                      <p className="text-sm font-medium text-primary">
                        {mentor.company}
                      </p>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {mentor.skills
                        .slice(0, 2)
                        .map((skill) => (
                          <Badge key={skill}>
                            {skill}
                          </Badge>
                        ))}

                    </div>

                    <Button
                      href={`/mentors/${mentor.id}`}
                      variant="outline"
                      className="w-full"
                    >
                      Lihat Profil
                    </Button>

                  </CardContent>
                </Card>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}