import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Zap,
} from "lucide-react";
import { notFound } from "next/navigation";

import { MarketingNavbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { mentors } from "@/lib/data";

export default async function MentorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const mentor = mentors.find((item) => item.id === id);

  if (!mentor) notFound();

  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(mentor.price);

  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar active="Mentors" />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-28 lg:grid-cols-12">

        <section className="space-y-8 lg:col-span-8">

          <Card className="overflow-hidden rounded-3xl">
            <div className="h-48 bg-gradient-to-r from-primary via-primary/80 to-secondary" />

            <CardContent className="-mt-16 space-y-6 p-8">

              <Avatar
                src={mentor.image}
                alt={mentor.name}
                size="xl"
                className="border-4 border-white shadow-lg"
              />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                <div>

                  <Badge tone="success">
                    <Award size={14} className="mr-2" />
                    Mentor Terverifikasi
                  </Badge>

                  <h1 className="mt-4 text-4xl font-bold">
                    {mentor.name}
                  </h1>

                  <p className="mt-2 text-lg text-on-surface-variant">
                    {mentor.role}
                  </p>

                  <p className="font-medium text-primary">
                    {mentor.company}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-6 text-sm text-on-surface-variant">

                    <span className="flex items-center gap-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {mentor.rating} ({mentor.reviews} ulasan)
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {mentor.experience}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      Indonesia
                    </span>

                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">

              <h2 className="text-2xl font-bold">
                Tentang Mentor
              </h2>

              <p className="leading-8 text-on-surface-variant">
                {mentor.bio}
              </p>

              <p className="leading-8 text-on-surface-variant">
                Setiap sesi mentoring dirancang secara personal berdasarkan
                tujuan belajar, pengalaman, dan tantangan yang sedang kamu
                hadapi sehingga hasil mentoring lebih maksimal.
              </p>

            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="mb-5 text-2xl font-bold">
                Keahlian
              </h2>
              <div className="flex flex-wrap gap-3">
                {mentor.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}

                <Badge>Code Review</Badge>
                <Badge>Mock Interview</Badge>
                <Badge>Portfolio Review</Badge>
              </div>

            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  Ulasan Mentee
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                >
                  Lihat Semua
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">
                    Dimas Prasetyo
                  </h3>
                  <p className="mt-2 text-on-surface-variant">
                    Mentornya sangat komunikatif dan memberikan banyak insight
                    mengenai dunia kerja Frontend Developer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Nabila Putri
                  </h3>
                  <p className="mt-2 text-on-surface-variant">
                    Setelah sesi mentoring saya jadi lebih percaya diri saat
                    interview dan berhasil memperbaiki portofolio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
                <aside className="space-y-6 lg:col-span-4">

          <Card className="sticky top-28 rounded-3xl">
            <CardContent className="space-y-6 p-6">

              <div>
                <p className="text-sm text-on-surface-variant">
                  Biaya Mentoring
                </p>

                <h2 className="mt-2 text-4xl font-bold text-primary">
                  {price}
                </h2>

                <p className="text-sm text-on-surface-variant">
                  per sesi (60 menit)
                </p>
              </div>

              <div className="rounded-2xl bg-primary-fixed p-5">
                <p className="flex items-center gap-2 font-semibold text-primary">
                  <Zap size={18} />
                  Jadwal Terdekat
                </p>

                <p className="mt-2 text-sm">
                  Besok • 19.00 WIB
                </p>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">
                  Pilih Durasi
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="secondary">
                    60 Menit
                  </Button>

                  <Button variant="outline">
                    30 Menit
                  </Button>
                </div>
              </div>

              <div className="space-y-3">

                <p className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={18}
                  />
                  Review portofolio
                </p>

                <p className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={18}
                  />
                  Rekaman sesi
                </p>

                <p className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={18}
                  />
                  Catatan & rekomendasi
                </p>

                <p className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="text-emerald-600"
                    size={18}
                  />
                  Konsultasi karier
                </p>

              </div>

              <Button
                href="/book-session"
                className="w-full"
              >
                Jadwalkan Sesi
                <ArrowRight size={18} />
              </Button>

            </CardContent>
          </Card>

        </aside>

      </main>

      <Footer />
    </div>
  );
}