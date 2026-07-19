import Image from "next/image";
import { RegisterForm } from "@/components/forms/AuthCard";
import { logoUrl } from "@/lib/data";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-2">
      <section className="hero-gradient hidden flex-col justify-between p-2xl lg:flex">
        <Image src={logoUrl} alt="SkillBridge logo" width={48} height={48} />
        <div className="max-w-xl">
          <h1 className="mb-md text-display-lg">Create your mentorship operating system.</h1>
          <p className="text-body-lg text-on-surface-variant">Join over 10,000+ experts and learners building sharper careers through direct guidance.</p>
        </div>
        <p className="text-label-md text-on-surface-variant">Privacy Policy • Support • Cookie Policy</p>
      </section>
      <section className="flex items-center justify-center p-md">
        <RegisterForm />
      </section>
    </main>
  );
}
