import { Clock, Star } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import type { Mentor } from "@/types";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  const price = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(mentor.price);

const statusColor =
  mentor.status === "Online"
    ? "bg-emerald-500"
    : "bg-amber-500";

const statusLabel =
  mentor.status === "Online"
    ? "Online"
    : "Sedang Sibuk";

  return (
    <Card className="group overflow-hidden rounded-2xl border border-outline-variant transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar
              src={mentor.image}
              alt={mentor.name}
              size="lg"
              className="ring-2 ring-primary/10"
            />

            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${statusColor}`} />
                <span className="text-xs font-medium text-on-surface-variant">
                {statusLabel}
                </span>
              </div>

              <h3 className="text-xl font-bold">{mentor.name}</h3>

              <p className="text-sm text-on-surface-variant">
                {mentor.role}
              </p>

              <p className="text-sm font-medium text-primary">
                {mentor.company}
              </p>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-xl font-bold text-primary">{price}</h3>
            <p className="text-xs text-on-surface-variant">
              / sesi mentoring
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {mentor.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-on-surface-variant">
          {mentor.bio}
        </p>

        <div className="grid grid-cols-2 gap-4 rounded-xl bg-surface-container p-4">
          <div>
            <p className="text-xs text-on-surface-variant">
              Rating
            </p>

            <div className="mt-1 flex items-center gap-1">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="font-semibold">{mentor.rating}</span>
              <span className="text-xs text-on-surface-variant">
                ({mentor.reviews})
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs text-on-surface-variant">
              Pengalaman
            </p>

            <div className="mt-1 flex items-center gap-1">
              <Clock size={16} />
              <span className="font-semibold">
                {mentor.experience}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            href={`/mentors/${mentor.id}`}
            variant="outline"
            className="flex-1"
          >
            Lihat Profil
          </Button>

          <Button
            href="/book-session"
            className="flex-1"
          >
            Jadwalkan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}