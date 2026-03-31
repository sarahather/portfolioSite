import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetWritingPost, getGetWritingPostQueryKey } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen } from "lucide-react";

export function WritingModal({ id, open, onOpenChange }: { id: number | null, open: boolean, onOpenChange: (open: boolean) => void }) {
  const { data, isLoading } = useGetWritingPost(id as number, {
    query: {
      enabled: !!id && open,
      queryKey: getGetWritingPostQueryKey(id as number)
    }
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-card border-border/50 max-h-[85vh] overflow-y-auto">
        {isLoading || !data ? (
          <div className="space-y-4 pt-6">
            <Skeleton className="h-64 w-full rounded-xl" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-48 w-full" />
          </div>
        ) : (
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
