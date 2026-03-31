import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetTravel, getGetTravelQueryKey } from "@workspace/api-client-react";
import type { ItineraryDay } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin } from "lucide-react";

export function TravelModal({ id, open, onOpenChange }: { id: number | null, open: boolean, onOpenChange: (open: boolean) => void }) {
  const { data, isLoading } = useGetTravel(id as number, {
    query: {
      enabled: !!id && open,
      queryKey: getGetTravelQueryKey(id as number)
    }
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border/50 max-h-[85vh] overflow-y-auto">
        {isLoading || !data ? (
          <div className="space-y-4 pt-6">
            <Skeleton className="h-64 w-full rounded-xl" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-24 w-full" />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-3xl font-serif">{data.city}, {data.country}</DialogTitle>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                <span>{data.region ? `${data.region} • ` : ''}{data.visitedYear}</span>
              </div>
            </DialogHeader>
            <div className="mt-6 space-y-8">
              <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-sm">
                <img src={data.coverImageUrl || "/images/travel-1.png"} alt={data.city} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-3">The Experience</h4>
                <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
              </div>
              
              {data.highlights && data.highlights.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif mb-3">Highlights</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {data.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              )}
              
              {data.itinerary && data.itinerary.length > 0 && (
                <div>
                  <h4 className="text-xl font-serif mb-4">Itinerary</h4>
                  <div className="space-y-6">
                    {data.itinerary.map((day: ItineraryDay) => (
                      <div key={day.day} className="border-l-2 border-primary/30 pl-4 pb-2">
                        <div className="font-bold text-lg mb-1 text-foreground">Day {day.day}: {day.title}</div>
                        <ul className="text-muted-foreground space-y-1 text-sm list-disc pl-4 mb-2">
                          {day.activities.map((act: string, i: number) => <li key={i}>{act}</li>)}
                        </ul>
                        {day.tips && <div className="text-xs bg-muted/50 p-3 rounded-md text-muted-foreground italic mt-2">Tip: {day.tips}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {data.practicalInfo && (
                <div className="bg-secondary/10 p-5 rounded-xl border border-secondary/20">
                  <h4 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wider">Practical Info</h4>
                  <p className="text-sm text-secondary/90 leading-relaxed whitespace-pre-wrap">{data.practicalInfo}</p>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
