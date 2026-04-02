import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { workExperiences } from "@workspace/content";
import { Building2 } from "lucide-react";

export function WorkExpModal({ id, open, onOpenChange }: { id: number | null, open: boolean, onOpenChange: (open: boolean) => void }) {
  const data = id ? workExperiences.find(e => e.id === id) ?? null : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-card border-border/50">
        {!data ? null : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-4 mb-2">
                {data.logoUrl ? (
                  <img src={data.logoUrl} alt={data.company} className="w-12 h-12 rounded-lg shadow-sm" />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <DialogTitle className="text-2xl font-serif">{data.role}</DialogTitle>
                  <div className="text-primary font-medium text-sm mt-1">{data.company} • {data.location}</div>
                </div>
              </div>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {data.startDate} — {data.endDate || "Present"}
              </div>
              <p className="text-foreground leading-relaxed text-lg">{data.description}</p>
              
              {data.highlights && data.highlights.length > 0 && (
                <div>
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Key Contributions</h4>
                  <ul className="list-disc pl-5 text-[15px] text-foreground/80 space-y-2">
                    {data.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              )}
              
              {data.technologies && data.technologies.length > 0 && (
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
