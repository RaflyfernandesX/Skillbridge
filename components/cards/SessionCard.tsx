import { Calendar, Clock, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import type { Session } from "@/types";

export function SessionCard({ session }: { session: Session }) {
  const statusLabel =
    session.status === "upcoming"
      ? "Mendatang"
      : session.status === "completed"
      ? "Selesai"
      : "Dibatalkan";

  return (
    <Card className="rounded-2xl border border-outline-variant transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary-fixed text-primary">
            <Calendar size={24} />
          </div>

          <div>
            <Badge tone={session.status === "upcoming" ? "success" : "neutral"}>
              {statusLabel}
            </Badge>

            <h3 className="mt-3 text-xl font-bold">
              {session.title}
            </h3>

            <p className="mt-1 text-sm text-on-surface-variant">
              Bersama <strong>{session.mentor}</strong>
            </p>

            <p className="text-sm text-on-surface-variant">
              {session.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="rounded-xl bg-surface-container px-4 py-3">
            <p className="font-semibold">{session.date}</p>

            <div className="mt-1 flex items-center gap-2 text-sm text-on-surface-variant">
              <Clock size={15} />
              {session.time}
            </div>
          </div>

          <Button
            variant={session.status === "upcoming" ? "secondary" : "outline"}
          >
            {session.action}
          </Button>

          <button
            aria-label="Menu sesi"
            className="rounded-full p-2 transition hover:bg-surface-container"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}