import { NavBar } from "@/components/NavBar";
import { useListCrafts } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

export default function CraftsPage() {
  const { data: crafts, isLoading } = useListCrafts();

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-card border-b border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Handmade</div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Crafts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Custom chip bags, event signage, gift sets, and tablescapes — made with care and designed from scratch. Everything is custom; nothing is templated.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => <Skeleton key={i} className="aspect-square rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {crafts?.map(craft => (
                <div key={craft.id} className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={craft.imageUrl || "/images/craft-chips-bag.jpg"}
                      alt={craft.name ?? ""}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-secondary px-3 py-1 rounded-full">
                        {craft.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-serif font-bold mb-3">{craft.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{craft.description}</p>
                    {craft.tags && craft.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {craft.tags.map(tag => (
                          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/10 border-t border-border/40">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Commissions</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Want something custom?</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Chip bags, signage, gift boxes, tablescapes — all made to order and designed around your vision. Let's talk about what you have in mind.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg">
            Request a Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
