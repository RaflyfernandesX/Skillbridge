import {
  Camera,
  Mail,
  MapPin,
  Trophy,
  Briefcase,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { user } from "@/lib/data";

const highlights: {
  title: string;
  value: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Bidang",
    value: "Frontend Developer",
    icon: Trophy,
  },
  {
    title: "Email",
    value: "rafly@email.com",
    icon: Mail,
  },
  {
    title: "Domisili",
    value: "Jakarta, Indonesia",
    icon: MapPin,
  },
];

export default function ProfilePage() {
  return (
    <AppShell title="Profil Saya">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Profil Saya
        </h1>

        <p className="text-on-surface-variant">
          Kelola informasi akun dan pantau perkembangan belajar bersama mentor.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-12">

        <Card className="lg:col-span-4 rounded-3xl">
          <CardContent className="space-y-6 p-8 text-center">

            <div className="relative mx-auto w-fit">

              <Avatar
                src={user.image}
                alt={user.name}
                size="xl"
              />

              <button className="absolute bottom-1 right-1 rounded-full bg-primary p-2 text-white shadow-lg">
                <Camera size={16} />
              </button>

            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {user.name}
              </h2>

              <p className="text-on-surface-variant">
                {user.role}
              </p>
            </div>

            <p className="text-sm text-on-surface-variant">
              Antusias membangun aplikasi web modern dan terus
              mengembangkan kemampuan melalui sesi mentoring
              bersama praktisi industri teknologi Indonesia.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-surface-container-low p-4">
                <h3 className="text-3xl font-bold text-primary">
                  18
                </h3>

                <p className="text-sm text-on-surface-variant">
                  Sesi Selesai
                </p>
              </div>

              <div className="rounded-2xl bg-surface-container-low p-4">
                <h3 className="text-3xl font-bold text-primary">
                  42
                </h3>

                <p className="text-sm text-on-surface-variant">
                  Jam Belajar
                </p>
              </div>

            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
              ].map((skill) => (
                <Badge key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>

          </CardContent>
        </Card>

        <Card className="lg:col-span-8 rounded-3xl">
          <CardContent className="space-y-6 p-8">

            <div className="flex flex-wrap gap-3">

              {[
                "Informasi",
                "Keamanan",
                "Preferensi",
                "Notifikasi",
              ].map((tab, index) => (
                <Badge
                  key={tab}
                  tone={index === 0 ? "primary" : "neutral"}
                  className="normal-case px-4 py-2"
                >
                  {tab}
                </Badge>
              ))}

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <Input
                label="Nama Lengkap"
                defaultValue={user.name}
              />

              <Input
                label="Email"
                defaultValue="rafly@email.com"
              />

              <Input
                label="Domisili"
                defaultValue="Jakarta, Indonesia"
              />

              <Input
                label="Portofolio"
                defaultValue="raflyfernandes.dev"
              />

            </div>

            <Button>
              Simpan Perubahan
            </Button>

          </CardContent>
        </Card>

      </section>

      <section className="grid gap-6 md:grid-cols-3">

        {highlights.map(({ title, value, icon: Icon }) => (
          <Card
            key={title}
            className="rounded-2xl"
          >
            <CardContent className="space-y-4 p-6">

              <Icon
                className="text-primary"
                size={30}
              />

              <p className="text-sm text-on-surface-variant">
                {title}
              </p>

              <h3 className="text-xl font-bold">
                {value}
              </h3>

            </CardContent>
          </Card>
        ))}

        <Card className="rounded-2xl">
          <CardContent className="space-y-4 p-6">

            <Briefcase
              className="text-primary"
              size={30}
            />

            <p className="text-sm text-on-surface-variant">
              Mentor Favorit
            </p>

            <h3 className="text-xl font-bold">
              Budi Santoso
            </h3>

          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="space-y-4 p-6">

            <CalendarDays
              className="text-primary"
              size={30}
            />

            <p className="text-sm text-on-surface-variant">
              Bergabung Sejak
            </p>

            <h3 className="text-xl font-bold">
              Juli 2026
            </h3>

          </CardContent>
        </Card>

      </section>
    </AppShell>
  );
}