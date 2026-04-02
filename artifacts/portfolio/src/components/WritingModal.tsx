import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { writings } from "@workspace/content";
import type { Writing } from "@workspace/content";
import { BookOpen } from "lucide-react";

export function WritingModal({ id, open, onOpenChange }: { id: number | null, open: boolean, onOpenChange: (open: boolean) => void }) {
  const data: Writing | null = id ? writings.find(w => w.id === id) ?? null : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card border-border/50 max-h-[85vh] overflow-y-auto">
        {!data ? null : (
          <>
            <div className="space-y-6">
              {data.imageUrl && (
                <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-sm mt-2">
                  <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
                </div>
              )}
              <DialogHeader>
                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>{data.readingTimeMinutes} min read</span>
                  {data.publishedAt && <span>• {data.publishedAt}</span>}
                </div>
                <DialogTitle className="text-3xl md:text-5xl font-serif leading-tight">{data.title}</DialogTitle>
              </DialogHeader>
              
              <div className="prose prose-stone dark:prose-invert max-w-none mt-8 font-sans text-foreground/90 text-lg leading-relaxed">
                {data.content.split("\n").map((paragraph, i) =>
                  paragraph.trim() ? (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ) : (
                    <br key={i} />
                  )
                )}
              </div>
              
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border/50">
                  {data.tags.map((t: string) => (
                    <span key={t} className="px-4 py-1.5 bg-muted text-muted-foreground text-xs rounded-full font-medium uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
