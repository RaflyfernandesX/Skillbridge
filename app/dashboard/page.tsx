import {
  CalendarDays,
  ChartNoAxesCombined,
  Timer,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { MentorCard } from "@/components/cards/MentorCard";
import { SessionCard } from "@/components/cards/SessionCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { mentors, sessions } from "@/lib/data";

const stats: { title: string; subtitle: string; icon: LucideIcon }[] = [
  {
    title: "12 Sesi",
    subtitle: "Mentoring selesai bulan ini",
    icon: ChartNoAxesCombined,
  },
  {
    title: "18 Skill",
    subtitle: "Berhasil dipelajari",
    icon: Trophy,
  },
  {
    title: "47 Jam",
    subtitle: "Total waktu belajar",
    icon: Timer,
  },
];

export default function DashboardPage() {
  return (
    <AppShell title="Selamat datang kembali, Rafly 👋">
      <section className="relative overflow-hidden rounded-2xl bg-primary p-12 text-white shadow-soft">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">
            Fokus Hari Ini
          </p>

          <h2 className="mb-4 text-4xl font-bold leading-tight">
            Siap mengikuti sesi mentoring hari ini?
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Kamu memiliki sesi bersama <strong>Budi Akbar</strong> mengenai
            Review Portofolio Frontend pukul <strong>19.00 WIB</strong>.
            Siapkan pertanyaan dan project terbaikmu agar sesi berjalan lebih
            maksimal.
          </p>

          <Button href="/sessions" variant="outline">
            Lihat Jadwal
          </Button>
        </div>

        <CalendarDays className="absolute -right-10 -top-10 h-52 w-52 text-white/10" />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {stats.map(({ title, subtitle, icon: Icon }) => (
          <Card key={title}>
            <CardContent className="flex items-center gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary-fixed text-primary">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm text-on-surface-variant">{subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Mentor Rekomendasi Untukmu
            </h2>

            <p className="text-sm text-on-surface-variant">
              Dipilih berdasarkan minat dan progress belajarmu.
            </p>
          </div>

          <Button href="/explore" variant="ghost">
            Lihat Semua
          </Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {mentors.slice(0, 3).map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Sesi Mendatang</h2>

          <p className="text-sm text-on-surface-variant">
            Jangan lewatkan jadwal mentoring yang sudah kamu pesan.
          </p>
        </div>

        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </section>
    </AppShell>
  );
}