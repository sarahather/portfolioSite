import { NavBar } from "@/components/NavBar";
import { BookOpen } from "lucide-react";

const placeholders = [
  {
    label: "Career & Leadership",
    topic: "On mentorship, intern programs, and learning to develop and value your own perspective in rooms that weren't built for you.",
    eta: "Coming soon",
  },
  {
    label: "Travel & Identity",
    topic: "Lessons from 30+ destinations — what people around the world are doing differently, and what I carried home with me.",
    eta: "Coming soon",
  },
  {
    label: "Building in Community",
    topic: "Lessons from co-founding a nonprofit, organizing tech talks, and making space where there wasn't one.",
    eta: "Coming soon",
  },
  {
    label: "Being First",
    topic: "What it means to be first-generation — in tech, in spaces, and in conversations about who belongs where.",
    eta: "Coming soon",
  },
  {
    label: "Craft & Intention",
    topic: "Why I make things by hand, and what designing for other people has taught me about listening.",
    eta: "Coming soon",
  },
  {
    label: "On Rest",
    topic: "A Muslim woman's guide to doing less without calling it failure.",
    eta: "Coming soon",
  },
];

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-card border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Thoughts & Essays</div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Written Words</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Essays are in progress — on career, identity, travel, and community. This is what's coming.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholders.map(({ label, topic, eta }) => (
              <div key={label} className="bg-card border border-dashed border-border/80 rounded-3xl p-8 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">{label}</div>
                <p className="text-foreground/80 leading-relaxed">{topic}</p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
