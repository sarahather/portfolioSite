import { NavBar } from "@/components/NavBar";
import { speakingEngagements } from "@workspace/content";
import { Calendar, MapPin, ExternalLink, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-card border-b border-border/40">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Voice & Vision</div>
            <h1 className="text-6xl md:text-7xl font-serif mb-6">Speaking</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I speak about developing and valuing your perspective, building inclusive tech communities, and navigating the industry as a first-generation Muslim woman in Tech.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg">
              Book Me to Speak
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
            <img src="/images/speaking-google.jpg" alt="Sarah speaking at Google" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif mb-12">Engagements</h2>
          <div className="space-y-8">
            {speakingEngagements.map(talk => (
              <div key={talk.id} className="flex flex-col md:flex-row gap-6 bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {talk.imageUrl && (
                  <div className="md:w-48 shrink-0">
                    <img src={talk.imageUrl} alt={talk.talkTitle ?? ""} className="w-full h-48 md:h-full object-cover" />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center flex-1">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                    {talk.format ? talk.format.charAt(0).toUpperCase() + talk.format.slice(1) : ""}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{talk.talkTitle}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium mb-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{talk.eventName}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{talk.location}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{talk.description}</p>
                  <div className="flex gap-4">
                    {talk.recordingUrl && (
                      <a href={talk.recordingUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors">
                        <Youtube className="w-4 h-4" /> Watch Recording
                      </a>
                    )}
                    {talk.slidesUrl && (
                      <a href={talk.slidesUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" /> View Slides
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif mb-6">Interested in having me speak?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            I speak at conferences, company events, university panels, and community gatherings. Topics include inclusive tech, first-gen career navigation, and building communities that last.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-all shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
