import { Globe2, Moon, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <AppShell title="Settings">
      <div>
        <h1 className="text-headline-xl">Settings</h1>
        <p className="text-body-md text-on-surface-variant">Tune security, appearance, language, and content preferences.</p>
      </div>
      <section className="grid gap-lg lg:grid-cols-2">
        <Card><CardContent className="space-y-lg"><div className="flex items-center gap-md"><ShieldCheck className="text-primary" /><div><h2 className="text-headline-lg">Account Security</h2><p className="text-body-md text-on-surface-variant">Password reset and two-factor authentication</p></div></div><div className="flex items-center justify-between rounded-xl bg-surface-container-low p-md"><div><p className="font-semibold">Password Reset</p><p className="text-label-md text-on-surface-variant">Last changed 3 months ago</p></div><Button variant="outline">Update</Button></div><div className="flex items-center justify-between rounded-xl bg-surface-container-low p-md"><div><p className="font-semibold">Two-Factor Authentication</p><p className="text-label-md text-on-surface-variant">Enabled via Authenticator App</p></div><Button variant="outline">Disable</Button></div></CardContent></Card>
        <Card><CardContent className="space-y-lg"><div className="flex items-center gap-md"><Moon className="text-primary" /><div><h2 className="text-headline-lg">Interface Preferences</h2><p className="text-body-md text-on-surface-variant">Adjust the appearance of SkillBridge</p></div></div><label className="flex items-center justify-between rounded-xl bg-surface-container-low p-md"><span>Dark Mode</span><input type="checkbox" className="rounded-full text-primary" /></label><label className="block rounded-xl bg-surface-container-low p-md"><span className="mb-sm flex items-center gap-sm font-semibold"><Globe2 size={18} /> Language</span><select className="w-full rounded-lg border-outline-variant bg-white"><option>English (US)</option><option>Spanish</option><option>French</option><option>German</option></select></label></CardContent></Card>
        <Card className="lg:col-span-2"><CardContent className="space-y-lg"><div className="flex items-center gap-md"><SlidersHorizontal className="text-primary" /><div><h2 className="text-headline-lg">Content Filters</h2><p className="text-body-md text-on-surface-variant">Auto-filter sessions based on skill level</p></div></div><div className="flex flex-wrap gap-sm">{["Beginner", "Intermediate", "Advanced", "Expert"].map((level, index) => <Badge key={level} tone={index === 3 ? "primary" : "neutral"} className="normal-case">{level}</Badge>)}</div><Button>Save Preferences</Button></CardContent></Card>
      </section>
    </AppShell>
  );
}
