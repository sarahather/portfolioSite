import { useRoute, Link } from "wouter";
import { useGetTravel, useListTravels } from "@workspace/api-client-react";
import type { ItineraryDay } from "@workspace/api-client-react";
import { NavBar } from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, MapPin, Calendar, Star } from "lucide-react";
import { slugify } from "@/lib/slugify";

export default function TravelCityPage() {
  const [, params] = useRoute("/travels/:slug");
  const urlSlug = params?.slug ?? "";

  const { data: allTravels } = useListTravels();
  const matched = allTravels?.find(t => slugify(t.city) === urlSlug);
  const id = matched?.id ?? null;

  const { data, isLoading } = useGetTravel(id as number, {
    query: { enabled: !!id },
  });

  const isResolving = !allTravels || (!!id && isLoading);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {isResolving ? (
        <div className="pt-24 pb-16 container mx-auto max-w-4xl px-6 space-y-6">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-[480px] w-full rounded-2xl" />
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ) : !data ? (
        <div className="pt-40 text-center text-muted-foreground">
          <p className="text-xl">City not found.</p>
          <Link href="/travels" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Travels
          </Link>
        </div>
      ) : (
        <>
          <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
            <img
              src={data.coverImageUrl || "/images/travel-1.png"}
              alt={data.city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <Link
                href="/travels"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Travels
              </Link>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">{data.city}</h1>
              <div className="flex items-center gap-4 mt-3 text-white/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {data.country}{data.region ? ` · ${data.region}` : ""}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {data.visitedYear}
                </span>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-4xl px-6 py-14 space-y-16">

            <p className="text-xl text-muted-foreground leading-relaxed font-serif">{data.summary}</p>

            {(data as any).secondaryImageUrl && (
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={data.coverImageUrl || ""} alt={data.city} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={(data as any).secondaryImageUrl} alt={`${data.city} — more`} className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {data.highlights && data.highlights.length > 0 && (
              <div>
                <h2 className="text-3xl font-serif mb-8">Highlights</h2>
                <div className="grid gap-4">
                  {data.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border/50 rounded-2xl">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.itinerary && data.itinerary.length > 0 && (
              <div>
                <h2 className="text-3xl font-serif mb-8">Itinerary</h2>
                <div className="space-y-6">
                  {data.itinerary.map((day: ItineraryDay) => (
                    <div key={day.day} className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground font-bold">
                        {day.day}
                      </div>
                      <div className="font-bold text-xl mb-2">{day.title}</div>
                      <ul className="text-muted-foreground space-y-1.5 list-disc pl-5 mb-3">
                        {day.activities.map((act: string, i: number) => <li key={i}>{act}</li>)}
                      </ul>
                      {day.tips && (
                        <div className="text-sm bg-muted/50 p-3 rounded-xl text-muted-foreground italic">
                          Tip: {day.tips}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.practicalInfo && (
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8">
                <h2 className="text-lg font-bold text-secondary uppercase tracking-wider mb-4">Practical Info</h2>
                <p className="text-secondary/90 leading-relaxed whitespace-pre-wrap">{data.practicalInfo}</p>
              </div>
            )}

            <div className="pt-4">
              <Link
                href="/travels"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all travels
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
