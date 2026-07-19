import { ArrowLeft, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { MarketingNavbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { mentors } from "@/lib/data";

export default function CheckoutPage() {
  const mentor = mentors[0];
  return (
    <div className="min-h-screen bg-background">
      <MarketingNavbar active="Pricing" />
      <main className="mx-auto grid max-w-6xl gap-gutter px-md py-28 lg:grid-cols-12 sm:px-xl">
        <section className="space-y-lg lg:col-span-7">
          <Button href="/book-session" variant="ghost"><ArrowLeft size={18} /> Back</Button>
          <Card><CardContent className="space-y-lg"><h1 className="text-headline-xl">Complete Your Payment</h1><div className="grid gap-md sm:grid-cols-2"><Button variant="outline">Apple Pay</Button><Button variant="outline">PayPal</Button></div><div className="flex items-center gap-md text-label-sm text-on-surface-variant"><span className="h-px flex-1 bg-outline-variant" /> OR PAY WITH CARD <span className="h-px flex-1 bg-outline-variant" /></div><Input label="Cardholder Name" placeholder="Alex Rivers" /><div className="relative"><Input label="Card Number" placeholder="4242 4242 4242 4242" /><CreditCard className="absolute bottom-3 right-md text-outline" size={20} /></div><div className="grid gap-md sm:grid-cols-2"><Input label="Expiration" placeholder="12 / 28" /><Input label="CVC" placeholder="123" /></div><label className="flex items-center gap-sm text-label-md text-on-surface-variant"><input type="checkbox" className="rounded text-primary" defaultChecked /> Save card information for future sessions</label><Button className="w-full"><Lock size={18} /> Pay $120.00</Button><div className="flex gap-lg text-label-md text-on-surface-variant"><span className="flex items-center gap-xs"><ShieldCheck size={18} /> SSL Secured</span><span className="flex items-center gap-xs"><ShieldCheck size={18} /> PCI Compliant</span></div></CardContent></Card>
        </section>
        <aside className="lg:col-span-5">
          <Card className="sticky top-28"><CardContent className="space-y-lg"><h2 className="text-headline-lg">Selected Session</h2><div className="rounded-2xl bg-surface-container-low p-lg"><p className="font-semibold">Advanced System Architecture</p><p className="text-body-md text-on-surface-variant">Mentor: {mentor.name}</p><p className="text-label-md text-on-surface-variant">{mentor.role} at {mentor.company}</p></div>{[["1x Mentorship Session (1hr)", "$150.00"], ["Platform Fee", "$10.00"], ["Early Bird Discount", "-$40.00"]].map(([k, v]) => <div key={k} className="flex justify-between"><span className="text-on-surface-variant">{k}</span><strong className={v.startsWith("-") ? "text-emerald-600" : ""}>{v}</strong></div>)}<div className="flex justify-between border-t border-outline-variant pt-md text-headline-lg"><span>Total Amount</span><span>$120.00</span></div></CardContent></Card>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
