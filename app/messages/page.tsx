import { ImageIcon, MoreVertical, Paperclip, Search, Send, Smile, Video } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { mentors } from "@/lib/data";

const chats = [
  { name: "Sarah Drasner", message: "That design looks fantastic! Let's review the motion...", time: "12:45 PM", image: mentors[0].image },
  { name: "Marcus Aurelius", message: "Sent a file: Case_Study_Draft.pdf", time: "Yesterday", image: mentors[1].image },
  { name: "Elena Rodriguez", message: "I've shared the feedback on the Figma file.", time: "Mon", image: mentors[2].image }
];

export default function MessagesPage() {
  return (
    <AppShell title="Messages">
      <Card className="grid min-h-[720px] overflow-hidden lg:grid-cols-[360px_1fr]">
        <aside className="border-r border-outline-variant bg-white">
          <div className="border-b border-outline-variant p-lg">
            <h1 className="mb-md text-headline-lg">Messages</h1>
            <div className="relative"><Search className="absolute left-md top-1/2 -translate-y-1/2 text-outline" size={18} /><input className="h-11 w-full rounded-xl border-outline-variant bg-surface-container-low pl-xl" placeholder="Search" /></div>
          </div>
          {chats.map((chat, index) => <div key={chat.name} className={`flex gap-md border-b border-outline-variant p-md ${index === 0 ? "bg-primary/5" : ""}`}><Avatar src={chat.image} alt={chat.name} /><div className="min-w-0 flex-1"><div className="flex justify-between gap-md"><p className="font-semibold">{chat.name}</p><span className="text-label-sm text-on-surface-variant">{chat.time}</span></div><p className="truncate text-label-md text-on-surface-variant">{chat.message}</p></div></div>)}
        </aside>
        <section className="flex min-h-[720px] flex-col bg-surface-container-low">
          <header className="flex items-center justify-between border-b border-outline-variant bg-white p-lg"><div className="flex items-center gap-md"><Avatar src={chats[0].image} alt={chats[0].name} /><div><p className="font-semibold">{chats[0].name}</p><p className="text-label-md text-emerald-600">Active now</p></div></div><div className="flex gap-sm"><Button variant="ghost" className="h-10 w-10 px-0"><Search size={18} /></Button><Button variant="ghost" className="h-10 w-10 px-0"><Video size={18} /></Button><Button variant="ghost" className="h-10 w-10 px-0"><MoreVertical size={18} /></Button></div></header>
          <div className="flex-1 space-y-md overflow-y-auto p-lg"><p className="text-center text-label-sm text-on-surface-variant">Today</p><div className="max-w-lg rounded-2xl bg-white p-md shadow-soft"><p>Can you review the motion direction before our call?</p><span className="text-label-sm text-on-surface-variant">12:30 PM</span></div><div className="ml-auto max-w-lg rounded-2xl bg-primary p-md text-white shadow-soft"><p>Absolutely. The structure is strong, and I have two ideas for the transition states.</p><span className="text-label-sm text-white/70">12:40 PM</span></div></div>
          <footer className="border-t border-outline-variant bg-white p-lg"><div className="mb-sm rounded-xl bg-primary-fixed p-sm text-center text-label-md text-primary">Your session with Sarah expires in 25 minutes</div><div className="flex items-center gap-sm"><Button variant="ghost" className="h-11 w-11 px-0"><Paperclip size={18} /></Button><Button variant="ghost" className="h-11 w-11 px-0"><ImageIcon size={18} /></Button><input className="h-11 flex-1 rounded-xl border-outline-variant bg-surface-container-low px-md" placeholder="Write a message" /><Button variant="ghost" className="h-11 w-11 px-0"><Smile size={18} /></Button><Button className="h-11 w-11 px-0"><Send size={18} /></Button></div></footer>
        </section>
      </Card>
    </AppShell>
  );
}
