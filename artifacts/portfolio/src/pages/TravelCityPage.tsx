import { useRoute, Link } from "wouter";
import { travels } from "@workspace/content";
import type { ItineraryDay } from "@workspace/content";
import { NavBar } from "@/components/NavBar";
import { ArrowLeft, MapPin, Calendar, Star } from "lucide-react";
import { slugify } from "@/lib/slugify";

export default function TravelCityPage() {
  const [, params] = useRoute("/travels/:slug");
  const urlSlug = params?.slug ?? "";

  const data = travels.find(t => slugify(t.city) === urlSlug) ?? null;

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {!data ? (
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

            {(() => {
              const allPhotos: string[] = [
                data.secondaryImageUrl,
                ...(data.galleryImages ?? []),
              ].filter(Boolean) as string[];
              if (allPhotos.length === 0) return null;
              if (allPhotos.length === 1) return (
                <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                  <img src={allPhotos[0]} alt={`${data.city}`} className="w-full h-full object-cover" />
                </div>
              );
              if (allPhotos.length === 2) return (
                <div className="grid grid-cols-2 gap-4">
                  {allPhotos.map((src, i) => (
                    <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={src} alt={`${data.city} ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              );
              if (allPhotos.length === 3) return (
                <div className="grid grid-cols-2 gap-4">
                  <div className="row-span-2 rounded-2xl overflow-hidden">
                    <img src={allPhotos[0]} alt={`${data.city} 1`} className="w-full h-full object-cover" />
                  </div>
                  {allPhotos.slice(1).map((src, i) => (
                    <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={src} alt={`${data.city} ${i + 2}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              );
              return (
                <div className="columns-2 gap-4 space-y-4">
                  {allPhotos.map((src, i) => (
                    <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden">
                      <img src={src} alt={`${data.city} ${i + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              );
            })()}

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
