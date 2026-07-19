import {
  ArrowRight,
  Briefcase,
  Calendar,
  Info,
  Video,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

import { MarketingNavbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { mentors } from "@/lib/data";

export default function BookSessionPage() {
  const mentor = mentors[0];

  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(mentor.price);

  const slots = [
    "09.00",
    "10.30",
    "13.00",
    "15.00",
    "16.30",
    "19.00",
  ];

  const sessionTypes: {
    title: string;
    body: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Video Call",
      body: "Sesi mentoring 1-on-1 secara online.",
      icon: Video,
    },
    {
      title: "Review Portofolio",
      body: "Diskusi dan evaluasi project yang kamu miliki.",
      icon: Briefcase,
    },
    {
      title: "Mock Interview",
      body: "Simulasi interview teknis dan HR.",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar active="Sesi" />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-28 lg:grid-cols-12">

        <section className="space-y-8 lg:col-span-8">

          <div className="grid grid-cols-3 gap-3 text-center text-sm font-medium">
            <div className="rounded-full bg-primary py-3 text-white">
              Mentor
            </div>

            <div className="rounded-full bg-primary py-3 text-white">
              Jadwal
            </div>

            <div className="rounded-full bg-surface-container py-3">
              Pembayaran
            </div>
          </div>

          <Card>
            <CardContent className="p-6">

              <h1 className="mb-6 text-3xl font-bold">
                Pilih Jenis Mentoring
              </h1>

              <div className="grid gap-4 md:grid-cols-3">
                {sessionTypes.map(({ title, body, icon: Icon }, index) => (
                  <div
                    key={title}
                    className={`rounded-2xl border p-5 transition ${
                      index === 0
                        ? "border-primary bg-primary/5"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    <Icon
                      size={30}
                      className="mb-4 text-primary"
                    />

                    <h3 className="font-semibold">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm text-on-surface-variant">
                      {body}
                    </p>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">

              <div className="mb-6 flex items-center gap-3">
                <Calendar className="text-primary" />
                <h2 className="text-2xl font-bold">
                  Pilih Jadwal
                </h2>
              </div>

              <div className="rounded-2xl border border-outline-variant p-6">

                <h3 className="text-center text-xl font-semibold">
                  Juli 2026
                </h3>

                <div className="mt-6 grid grid-cols-7 gap-3">
                  {Array.from({ length: 21 }, (_, i) => (
                    <button
                      key={i}
                      className={`rounded-xl p-3 transition ${
                        i === 11
                          ? "bg-primary text-white"
                          : "hover:bg-surface-container"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

              </div>

              <h3 className="mt-8 mb-4 font-semibold">
                Jam yang tersedia
              </h3>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {slots.map((slot) => (
                  <Button
                    key={slot}
                    variant={
                      slot === "13.00"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {slot} WIB
                  </Button>
                ))}
              </div>

            </CardContent>
          </Card>

        </section>

        <aside className="lg:col-span-4">

          <Card className="sticky top-28 rounded-3xl">
            <CardContent className="space-y-6 p-6">

              <h2 className="text-2xl font-bold">
                Ringkasan Pemesanan
              </h2>

              <div className="flex items-center gap-4">
                <Avatar
                  src={mentor.image}
                  alt={mentor.name}
                />

                <div>
                  <h3 className="font-semibold">
                    {mentor.name}
                  </h3>

                  <p className="text-sm text-on-surface-variant">
                    {mentor.role}
                  </p>

                  <p className="text-sm text-primary">
                    {mentor.company}
                  </p>
                </div>
              </div>

              {[
                ["Jenis Sesi", "Video Call"],
                ["Durasi", "60 Menit"],
                ["Tanggal", "20 Juli 2026"],
                ["Waktu", "13.00 WIB"],
                ["Biaya Mentor", price],
                ["Biaya Layanan", "Gratis"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-t border-outline-variant pt-3"
                >
                  <span className="text-on-surface-variant">
                    {k}
                  </span>

                  <strong>{v}</strong>
                </div>
              ))}

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>{price}</span>
              </div>

              <Button
                href="/checkout"
                className="w-full"
              >
                Lanjut ke Pembayaran
                <ArrowRight size={18} />
              </Button>

              <div className="flex gap-3 rounded-xl bg-surface-container p-4 text-sm text-on-surface-variant">
                <Info size={18} />
                Pembayaran akan diproses setelah mentor menerima permintaan mentoring.
              </div>

            </CardContent>
          </Card>

        </aside>

      </main>

      <Footer />
    </div>
  );
}