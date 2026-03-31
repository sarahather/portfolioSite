import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { TravelModal } from "@/components/TravelModal";
import { useListTravels } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin } from "lucide-react";

export default function TravelsPage() {
  const [selectedTravelId, setSelectedTravelId] = useState<number | null>(null);
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const { data: travels, isLoading } = useListTravels();

  const ASIA = ["Japan", "South Korea", "Malaysia", "Singapore", "Indonesia"];
  const EUROPE = ["Italy", "Norway", "Switzerland", "Spain", "France", "United Kingdom"];
  const AMERICAS = ["Canada", "Mexico"];

  const regions = ["All", "USA", "Asia", "Europe", "Americas"];

  const filtered = travels?.filter(t => {
    if (activeRegion === "All") return true;
    if (activeRegion === "Asia") return ASIA.includes(t.country ?? "");
    if (activeRegion === "Europe") return EUROPE.includes(t.country ?? "");
    if (activeRegion === "Americas") return AMERICAS.includes(t.country ?? "");
    return !ASIA.includes(t.country ?? "") && !EUROPE.includes(t.country ?? "") && !AMERICAS.includes(t.country ?? "");
  });

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start gap-6">
            <img src="/images/travel-sedona.jpg" alt="Sarah hiking in Sedona" className="w-24 h-24 rounded-2xl object-cover shadow-xl shrink-0 border-2 border-primary-foreground/20" />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Wanderlust</div>
              <h1 className="text-6xl md:text-7xl font-serif mb-4">Travels</h1>
              <p className="text-primary-foreground/80 text-xl max-w-2xl leading-relaxed">
                {isLoading ? "..." : `${travels?.length ?? 0}+ destinations`} and counting. Every trip teaches me something I bring back to my work, my community, and my perspective.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 bg-muted/40 border-b border-border/50 sticky top-16 z-30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 flex-wrap">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeRegion === region ? "bg-primary text-primary-foreground shadow-md" : "bg-background border border-border text-foreground/70 hover:border-primary/40"}`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => <Skeleton key={i} className="aspect-[3/4] rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered?.map((travel) => (
                <div
                  key={travel.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setSelectedTravelId(travel.id)}
                >
                  <img
                    src={travel.coverImageUrl || "/images/travel-sedona.jpg"}
                    alt={travel.city ?? ""}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-serif font-bold text-lg leading-tight">{travel.city}</div>
                    <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{travel.country}</span>
                      {travel.visitedYear && <span>· {travel.visitedYear}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <TravelModal id={selectedTravelId} open={!!selectedTravelId} onOpenChange={(o) => !o && setSelectedTravelId(null)} />
    </div>
  );
}
