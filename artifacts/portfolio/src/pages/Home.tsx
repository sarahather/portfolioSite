import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { TravelModal } from "@/components/TravelModal";
import { WorkExpModal } from "@/components/WorkExpModal";
import {
  useListWorkExperiences,
  useListTravels,
  useListSpeakingEngagements,
  useListCrafts,
  useSubmitContact
} from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Calendar, ArrowRight, ArrowUpRight, GraduationCap, BookOpen, ExternalLink, Mail, Linkedin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  category: z.string().min(1, "Please select a category"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function Home() {
  const [selectedTravelId, setSelectedTravelId] = useState<number | null>(null);
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(null);

  const { data: experiences, isLoading: expLoading } = useListWorkExperiences();
  const { data: travels, isLoading: travelsLoading } = useListTravels();
  const { data: speaking, isLoading: speakingLoading } = useListSpeakingEngagements();
  const { data: crafts, isLoading: craftsLoading } = useListCrafts();

  const submitContact = useSubmitContact();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", category: "", subject: "", message: "" }
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    submitContact.mutate({ data }, {
      onSuccess: () => {
        toast({ title: "Message sent!", description: "Thank you for reaching out. I'll be in touch soon." });
        form.reset();
      },
      onError: () => {
        toast({ variant: "destructive", title: "Error", description: "Failed to send. Try emailing me directly at sasarahather@gmail.com" });
      }
    });
  };

  const getCategoryHelperText = (category: string) => {
    switch (category) {
      case "speaking": return "Tell me about your event, audience, and dates.";
      case "recruiting": return "I'm currently open to Staff/Principal roles.";
      case "crafts": return "Describe the custom piece you have in mind — chip bags, signage, or something else.";
      case "general": return "Just saying hi? I'd love to hear from you.";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-secondary">Hello, I'm Sarah</p>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground leading-[1.05]">
              Engineer. <br />
              <span className="text-primary italic">Designer.</span> <br />
              Explorer.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed pt-2">
              Software engineer, nonprofit co-founder, traveler, and maker of handmade things.
              I build systems that scale, communities that last, and custom chip bags that honestly might be my best work.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Somewhere between the Blue Ridge Parkway and Lake Shore Drive
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/sarah-ather/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/madebysar__/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @madebysar__
              </a>
            </div>

            <div className="pt-8 border-t border-border/60 max-w-lg">
              <div className="flex flex-wrap gap-2">
                {["Software Engineer", "Nonprofit Co-Founder", "Speaker", "Traveler", "Maker"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary bg-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] w-full max-w-md mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl -rotate-3 transform transition-transform hover:rotate-0 duration-500"></div>
            <img
              src="/images/headshot.png"
              alt="Sarah Ather"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-16 px-6 bg-muted/50 border-y border-border/40">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="shrink-0">
              <img
                src="/images/graduation.jpg"
                alt="Sarah at UIC graduation"
                className="w-28 h-28 rounded-full object-cover object-top shadow-md border-4 border-background"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Education</div>
              <div className="font-serif text-xl font-bold text-foreground mb-1">University of Illinois at Chicago</div>
              <div className="font-medium text-foreground">B.S. Computer Science · Minor in Linguistics</div>
              <div className="text-sm text-muted-foreground mt-1">Graduated May 2019 · UIC College of Engineering</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["GHC 2016 Scholarship Recipient", "UIC Startup Challenge Winner", "Think Chicago Selected Student", "White Belt Sigma Certificate"].map(a => (
                  <span key={a} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{a}</span>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <a
                href="https://engineering.uic.edu/undergraduate/w-fall22/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Featured in UIC Engineering
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-card px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-5xl font-serif">Career</h2>
            <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2 hidden md:block">Engineering & Leadership</div>
          </div>

          {expLoading ? (
            <div className="space-y-8">
              {[1, 2, 3].map(i => <Skeleton key={i} className="h-48 w-full rounded-xl" />)}
            </div>
          ) : (
            <div className="space-y-12">
              {experiences?.map((exp, idx) => (
                <div key={exp.id} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border/80 -translate-x-1/2"></div>
                  <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block w-5/12"></div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-card -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                    <div
                      className="w-full md:w-5/12 bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                      onClick={() => setSelectedWorkId(exp.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                          {exp.startDate?.slice(0, 4)} — {exp.endDate ? exp.endDate.slice(0, 4) : "Present"}
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-1">{exp.role}</h3>
                      <div className="text-muted-foreground font-medium mb-4">{exp.company} · {exp.location}</div>
                      <p className="text-sm leading-relaxed mb-6 text-foreground/80 line-clamp-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies?.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-md">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies && exp.technologies.length > 3 && (
                          <span className="px-2.5 py-1 text-muted-foreground text-xs font-medium">+{exp.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TRAVELS SECTION */}
      <section id="travels" className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="flex items-start gap-6">
              <img
                src="/images/travel-sedona.jpg"
                alt="Sarah hiking in Sedona, AZ"
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-xl shrink-0 border-2 border-primary-foreground/20"
              />
              <div>
                <h2 className="text-5xl font-serif mb-4">Wanderlust</h2>
                <p className="text-primary-foreground/80 max-w-md text-lg">
                  Collecting stories, stamps, and inspiration from around the globe. Every new city changes the way I see the world — and my work.
                </p>
              </div>
            </div>
            <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
              {travelsLoading ? "..." : `${travels?.length ?? 0}+ destinations`}
            </div>
          </div>

          {travelsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => <Skeleton key={i} className="aspect-[3/4] rounded-2xl bg-primary-foreground/10" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {travels?.slice(0, 8).map((travel) => (
                <div
                  key={travel.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                  onClick={() => setSelectedTravelId(travel.id)}
                >
                  <img
                    src={travel.coverImageUrl || "/images/travel-1.png"}
                    alt={travel.city}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                    <div className="flex items-center gap-1.5 mb-1 text-white/70 text-xs font-medium uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      {travel.country}
                    </div>
                    <h3 className="text-2xl font-serif leading-tight">{travel.city}</h3>
                    <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!travelsLoading && (travels?.length ?? 0) > 8 && (
            <div className="mt-8 text-center text-primary-foreground/60 text-sm">
              + {(travels?.length ?? 0) - 8} more destinations
            </div>
          )}
        </div>
      </section>

      {/* SPEAKING SECTION */}
      <section id="speaking" className="py-32 px-6 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <img src="/images/speaking-1.png" alt="Sarah speaking on stage" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-5xl font-serif mb-6">Voice & Vision</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              I speak about developing and valuing your perspective, building inclusive tech communities, and navigating the industry as a first-generation Muslim woman in Tech.
              I've also been known to emcee a wedding or two.
            </p>

            <div className="space-y-6 mb-12">
              {speakingLoading ? (
                <Skeleton className="h-32 w-full rounded-xl" />
              ) : (
                speaking?.map(talk => (
                  <div key={talk.id} className="border-b border-border/80 pb-6 group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{talk.format ? talk.format.charAt(0).toUpperCase() + talk.format.slice(1) : ""}</div>
                        <h4 className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-snug">{talk.talkTitle}</h4>
                        <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
                          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {talk.eventName}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {talk.location}</span>
                        </div>
                      </div>
                      {talk.recordingUrl && (
                        <a href={talk.recordingUrl} target="_blank" rel="noreferrer" className="shrink-0 p-3 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm" title="Watch recording">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <a href="#contact" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/30">
              Book Me to Speak
            </a>
          </div>
        </div>
      </section>

      {/* CRAFTS SECTION */}
      <section id="crafts" className="py-32 px-6 bg-muted relative overflow-hidden">
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-serif mb-6">Handmade Studio</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Custom chip bags, bespoke signage, party favor bundles, and more — all designed from scratch.
              Explore the work at{" "}
              <a href="https://www.instagram.com/madebysar__/" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">
                @madebysar__
              </a>
            </p>
          </div>

          {craftsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => <Skeleton key={i} className="aspect-square rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {crafts?.slice(0, 6).map((craft, idx) => (
                <div key={craft.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-background shadow-lg">
                  <img
                    src={craft.imageUrl || "/images/craft-chips-bag.jpg"}
                    alt={craft.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-secondary font-bold text-xs uppercase tracking-widest mb-1">{craft.category}</div>
                    <h4 className="text-white font-serif text-2xl">{craft.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
              Commission a Custom Piece
            </a>
          </div>
        </div>
      </section>

      {/* WRITING SECTION */}
      <section id="writing" className="py-32 px-6 bg-background">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16 max-w-6xl mx-auto">
            <h2 className="text-5xl font-serif">Written Words</h2>
            <div className="text-sm uppercase tracking-widest text-muted-foreground hidden md:block">Thoughts & Essays</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { label: "Career & Leadership", topic: "On mentorship, intern programs, and what nobody tells you about climbing the ladder." },
              { label: "Travel & Identity", topic: "Dispatches from 30+ destinations — what it means to move through the world as yourself." },
              { label: "Building in Community", topic: "Lessons from co-founding a nonprofit, organizing tech talks, and making space where there wasn't one." },
            ].map(({ label, topic }) => (
              <div key={label} className="bg-card border border-dashed border-border/80 rounded-3xl p-8 flex flex-col gap-4 opacity-80">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">{label}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic}</p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Essay Coming Soon</span>
                </div>
              </div>
            ))}
          </div>

          {/* Publications */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-muted/50 rounded-2xl border border-border/50 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Publication</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Featured in UIC Engineering</h3>
                <p className="text-muted-foreground text-sm max-w-lg">
                  Published in the University of Illinois at Chicago's Engineering undergraduate newsletter — spotlighting student and alumni work in tech and research.
                </p>
              </div>
              <a
                href="https://engineering.uic.edu/undergraduate/w-fall22/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                Read it <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-7xl font-serif mb-8 leading-tight">Let's build something.</h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Speaking opportunities, engineering roles, custom craft commissions, or just a conversation — I'm always open to what's interesting.
            </p>

            <div className="space-y-5 text-primary-foreground mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Somewhere between the Blue Ridge Parkway & Lake Shore Drive</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:sasarahather@gmail.com" className="font-medium hover:underline">sasarahather@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a href="https://www.linkedin.com/in/sarah-ather/" target="_blank" rel="noreferrer" className="font-medium hover:underline">linkedin.com/in/sarah-ather</a>
              </div>
            </div>

            <a
              href="https://calendly.com/sasarahather/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-all shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call via Calendly
            </a>
          </div>

          <div className="bg-card text-foreground p-10 md:p-12 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full -z-10 blur-2xl opacity-40"></div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background border-border/50 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-background border-border/50 focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Inquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border/50 focus:border-primary h-12">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="speaking">Speaking Engagement</SelectItem>
                          <SelectItem value="recruiting">Recruiting / Opportunities</SelectItem>
                          <SelectItem value="crafts">Custom Craft Commission</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-xs text-primary font-medium mt-2">
                        {getCategoryHelperText(field.value)}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} className="bg-background border-border/50 focus:border-primary h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share the details..."
                          className="min-h-[140px] bg-background border-border/50 focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-14 bg-foreground hover:bg-primary text-background hover:text-primary-foreground font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-primary/30"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Or email me directly at{" "}
                  <a href="mailto:sasarahather@gmail.com" className="text-primary font-semibold hover:underline">
                    sasarahather@gmail.com
                  </a>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-muted-foreground bg-card border-t border-border/30">
        <div className="font-serif font-bold text-2xl text-foreground mb-3">Sarah Ather</div>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/sarah-ather/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/madebysar__/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:sasarahather@gmail.com" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm font-medium uppercase tracking-widest">© {new Date().getFullYear()} · Engineer · Designer · Explorer</p>
      </footer>

      {/* MODALS */}
      <TravelModal
        id={selectedTravelId}
        open={!!selectedTravelId}
        onOpenChange={(o) => !o && setSelectedTravelId(null)}
      />
      <WorkExpModal
        id={selectedWorkId}
        open={!!selectedWorkId}
        onOpenChange={(o) => !o && setSelectedWorkId(null)}
      />
    </div>
  );
}
