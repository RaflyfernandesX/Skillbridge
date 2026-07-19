import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/forms/AuthCard";
import { logoUrl } from "@/lib/data";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-2">
      <section className="hero-gradient hidden flex-col justify-between p-12 xl:p-16 lg:flex">
        <Image
          src={logoUrl}
          alt="SkillBridge logo"
          width={48}
          height={48}
        />

        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            🚀 Platform Mentoring Teknologi Indonesia
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            Bangun Karier Teknologi Bersama Mentor Profesional Indonesia
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            SkillBridge menghubungkan kamu dengan mentor berpengalaman dari
            perusahaan teknologi terkemuka di Indonesia untuk mempercepat
            perkembangan karier melalui sesi mentoring 1-on-1.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-primary">120+</h3>
              <p className="text-sm text-muted-foreground">Mentor Aktif</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">4.9★</h3>
              <p className="text-sm text-muted-foreground">
                Rating Rata-rata
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">2.800+</h3>
              <p className="text-sm text-muted-foreground">
                Sesi Mentoring
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">1.500+</h3>
              <p className="text-sm text-muted-foreground">
                Mentee Terbantu
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Dipercaya oleh mentor dari
          </p>

          <div className="mt-4 flex flex-wrap gap-5 text-sm font-semibold text-muted-foreground">
            <span>Gojek</span>
            <span>Tokopedia</span>
            <span>Traveloka</span>
            <span>Ruangguru</span>
            <span>Xendit</span>
          </div>
        </div>

        <div className="grid gap-4">
          <p className="flex items-center gap-3 text-base">
            <Star className="h-5 w-5 fill-primary text-primary" />
            Temukan mentor yang sesuai dengan tujuan kariermu.
          </p>

          <p className="flex items-center gap-3 text-base">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Jadwalkan sesi mentoring dengan proses yang mudah dan aman.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-6">
        <LoginForm />
      </section>
    </main>
  );
}