import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function LoginForm() {
  return (
    <Card className="w-full max-w-md rounded-3xl shadow-xl border border-outline-variant">
      <CardContent className="space-y-6 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Selamat Datang 👋
          </h1>

          <p className="mt-2 text-on-surface-variant">
            Masuk ke akun SkillBridge untuk melanjutkan sesi mentoringmu.
          </p>
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="nama@email.com"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Masukkan password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input
              type="checkbox"
              className="rounded"
            />
            Ingat saya
          </label>

          <a
            href="#"
            className="font-medium text-primary hover:underline"
          >
            Lupa Password?
          </a>
        </div>

        <Button
          href="/dashboard"
          className="w-full"
        >
          Masuk
          <ArrowRight size={18} />
        </Button>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-primary-fixed p-3 text-sm text-primary">
          <ShieldCheck size={18} />
          Login aman dengan enkripsi SSL.
        </div>

        <p className="text-center text-sm text-on-surface-variant">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Daftar Gratis
          </a>
        </p>
      </CardContent>
    </Card>
  );
}

export function RegisterForm() {
  return (
    <Card className="w-full max-w-md rounded-3xl shadow-xl border border-outline-variant">
      <CardContent className="space-y-6 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Buat Akun Baru
          </h1>

          <p className="mt-2 text-on-surface-variant">
            Bergabung dengan ribuan mentor dan talenta digital Indonesia.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Nama Depan"
            placeholder="Rafly"
          />

          <Input
            label="Nama Belakang"
            placeholder="Fernandes"
          />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="nama@email.com"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Minimal 8 karakter"
        />

        <label className="flex items-start gap-3 text-sm text-on-surface-variant">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 rounded"
          />

          <span>
            Saya menyetujui
            <span className="font-semibold text-primary">
              {" "}Syarat & Ketentuan{" "}
            </span>
            serta
            <span className="font-semibold text-primary">
              {" "}Kebijakan Privasi
            </span>
            .
          </span>
        </label>

        <Button
          href="/dashboard"
          className="w-full"
        >
          Daftar Sekarang
        </Button>

        <div className="flex items-center justify-center gap-2 rounded-xl bg-primary-fixed p-3 text-sm text-primary">
          <ShieldCheck size={18} />
          Data akun tersimpan dengan aman.
        </div>

        <p className="text-center text-sm text-on-surface-variant">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Masuk
          </a>
        </p>
      </CardContent>
    </Card>
  );
}