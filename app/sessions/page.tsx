import {
  CalendarClock,
  Clock,
  GraduationCap,
  Timer,
} from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { SessionCard } from "@/components/cards/SessionCard";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { sessions } from "@/lib/data";

export default function SessionsPage() {
  return (
    <AppShell title="Sesi Mentoring Saya">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Sesi Mentoring
        </h1>

        <p className="text-on-surface-variant">
          Kelola seluruh jadwal mentoring, lihat riwayat sesi, dan pantau perkembangan belajarmu.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Badge tone="primary" className="normal-case px-4 py-2">
          Mendatang
        </Badge>

        <Badge tone="neutral" className="normal-case px-4 py-2">
          Selesai
        </Badge>

        <Badge tone="neutral" className="normal-case px-4 py-2">
          Dibatalkan
        </Badge>
      </div>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-2xl bg-primary text-white shadow-lg">
          <CardContent className="space-y-3 p-6">
            <CalendarClock size={34} />

            <p className="text-sm opacity-80">
              Sesi Berikutnya
            </p>

            <h2 className="text-3xl font-bold">
              14 Menit Lagi
            </h2>

            <p className="text-sm opacity-80">
              Bersama mentor Frontend Developer
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="space-y-3 p-6">
            <GraduationCap
              size={34}
              className="text-primary"
            />

            <p className="text-sm text-on-surface-variant">
              Total Sesi
            </p>

            <h2 className="text-3xl font-bold">
              24
            </h2>

            <p className="text-sm text-on-surface-variant">
              Sesi mentoring telah diselesaikan
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="space-y-3 p-6">
            <Timer
              size={34}
              className="text-primary"
            />

            <p className="text-sm text-on-surface-variant">
              Total Jam Belajar
            </p>

            <h2 className="text-3xl font-bold">
              36,5 Jam
            </h2>

            <p className="text-sm text-on-surface-variant">
              Belajar bersama mentor profesional
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Daftar Sesi
          </h2>

          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Clock size={16} />
            {sessions.length} sesi tersedia
          </div>
        </div>

        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
          />
        ))}
      </section>
    </AppShell>
  );
}