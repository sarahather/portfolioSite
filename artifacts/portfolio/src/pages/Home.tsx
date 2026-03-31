import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { TravelModal } from "@/components/TravelModal";
import { WorkExpModal } from "@/components/WorkExpModal";
import { WritingModal } from "@/components/WritingModal";
import { 
  useGetPortfolioStats,
  useListWorkExperiences,
  useListTravels,
  useListSpeakingEngagements,
  useListCrafts,
  useListWritingPosts,
  useSubmitContact
} from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
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
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const { data: stats, isLoading: statsLoading } = useGetPortfolioStats();
  const { data: experiences, isLoading: expLoading } = useListWorkExperiences();
  const { data: travels, isLoading: travelsLoading } = useListTravels();
  const { data: speaking, isLoading: speakingLoading } = useListSpeakingEngagements();
  const { data: crafts, isLoading: craftsLoading } = useListCrafts();
  const { data: writing, isLoading: writingLoading } = useListWritingPosts();
  
  const submitContact = useSubmitContact();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    submitContact.mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send message. Please try again later.",
        });
      }
    });
  };

  const getCategoryHelperText = (category: string) => {
    switch (category) {
      case "speaking": return "Tell me about your event, audience, and dates.";
      case "recruiting": return "I'm currently open to Staff/Principal roles.";
      case "crafts": return "Describe the custom piece you have in mind.";
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
            <h1 className="text-6xl md:text-8xl font-serif text-foreground leading-[1.05]">
              Engineer. <br />
              <span className="text-primary italic">Storyteller.</span> <br />
              Maker.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed pt-4">
              I build scalable systems, craft objects with my hands, explore the world, and share what I learn along the way. Welcome to my digital studio.
            </p>
            
            {statsLoading ? (
              <Skeleton className="h-24 w-full max-w-md rounded-xl mt-8" />
            ) : stats ? (
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60 max-w-md">
                <div>
                  <div className="text-4xl font-serif text-primary">{stats.yearsExperience}+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Years Coding</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-secondary">{stats.countriesVisited}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-accent">{stats.talkCount}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Keynotes</div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5] w-full max-w-md mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl -rotate-3 transform transition-transform hover:rotate-0 duration-500"></div>
            <img 
              src="/images/hero.png" 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 bg-card px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-5xl font-serif">Career</h2>
            <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2 hidden md:block">System Architecture & Leadership</div>
          </div>
          
          {expLoading ? (
            <div className="space-y-8">
              {[1,2,3].map(i => <Skeleton key={i} className="h-48 w-full rounded-xl" />)}
            </div>
          ) : (
            <div className="space-y-12">
              {experiences?.map((exp, idx) => (
                <div key={exp.id} className="relative pl-8 md:pl-0">
                  {/* Timeline line */}
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border/80 -translate-x-1/2"></div>
                  
                  <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-card -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                    
                    <div 
                      className="w-full md:w-5/12 bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                      onClick={() => setSelectedWorkId(exp.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                          {exp.startDate} — {exp.endDate || "Present"}
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-1">{exp.role}</h3>
                      <div className="text-muted-foreground font-medium mb-4">{exp.company} • {exp.location}</div>
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
      <section id="travels" className="py-32 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-serif mb-4">Wanderlust</h2>
              <p className="text-secondary-foreground/80 max-w-md text-lg">Collecting stories and inspiration from around the globe. Every place changes the way I see code and art.</p>
            </div>
            <div className="text-sm uppercase tracking-widest text-secondary-foreground/60">Selected Destinations</div>
          </div>

          {travelsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map(i => <Skeleton key={i} className="aspect-[3/4] rounded-2xl bg-secondary-foreground/10" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {travels?.slice(0, 3).map((travel, idx) => (
                <div 
                  key={travel.id} 
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                  onClick={() => setSelectedTravelId(travel.id)}
                >
                  <img 
                    src={idx === 0 ? "/images/travel-1.png" : idx === 1 ? "/images/travel-2.png" : travel.coverImageUrl || "/images/travel-1.png"} 
                    alt={travel.city} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-white/80 text-sm font-medium uppercase tracking-wider">
                          <MapPin className="w-4 h-4" />
                          {travel.country}
                        </div>
                        <h3 className="text-4xl font-serif">{travel.city}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SPEAKING SECTION */}
      <section id="speaking" className="py-32 px-6 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <img src="/images/speaking-1.png" alt="Speaking on stage" className="w-full h-full object-cover" />
          </div>
          
          <div>
            <h2 className="text-5xl font-serif mb-6">Voice & Vision</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              I regularly speak about engineering leadership, frontend architecture, and building inclusive team cultures. 
            </p>
            
            <div className="space-y-6 mb-12">
              {speakingLoading ? (
                <Skeleton className="h-32 w-full rounded-xl" />
              ) : (
                speaking?.slice(0, 3).map(talk => (
                  <div key={talk.id} className="border-b border-border/80 pb-6 group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{talk.format}</div>
                        <h4 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">{talk.talkTitle}</h4>
                        <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-4 text-sm font-medium">
                          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {talk.date}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {talk.eventName}</span>
                        </div>
                      </div>
                      {talk.slidesUrl && (
                        <a href={talk.slidesUrl} target="_blank" rel="noreferrer" className="shrink-0 p-3 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-white transition-all shadow-sm">
                          <ArrowRight className="w-5 h-5" />
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
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-serif mb-6">Handmade Studio</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              When I'm not writing code, I'm working with my hands. A selection of artisanal goods, crafted with intention and patience.
            </p>
          </div>

          {craftsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[1,2,3,4].map(i => <Skeleton key={i} className="aspect-square rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {crafts?.slice(0, 4).map((craft, idx) => (
                <div key={craft.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-background shadow-lg">
                  <img 
                    src={idx === 0 ? "/images/craft-1.png" : idx === 1 ? "/images/craft-2.png" : craft.imageUrl || "/images/craft-1.png"} 
                    alt={craft.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{craft.category}</div>
                    <h4 className="text-white font-serif text-2xl">{craft.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center">
             <a href="#contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
              Commission a Piece
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
          
          {writingLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {[1,2].map(i => <Skeleton key={i} className="h-72 rounded-2xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {writing?.slice(0, 2).map((post, idx) => (
                <div 
                  key={post.id} 
                  className="group flex flex-col sm:flex-row gap-8 bg-card p-6 rounded-3xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPostId(post.id)}
                >
                  <div className="w-full sm:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                    <img 
                      src={idx === 0 ? "/images/writing-1.png" : "/images/writing-2.png"} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      <span>{post.readingTimeMinutes} min read</span>
                      <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                      <span className="text-muted-foreground">{post.publishedAt || "Draft"}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-auto">
                      <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:text-primary transition-colors">
                        Read essay <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-7xl font-serif mb-8 leading-tight">Let's build something beautiful.</h2>
            <p className="text-primary-foreground/90 text-xl mb-12 leading-relaxed">
              Whether it's a speaking opportunity, an engineering role, or a custom commission, I'm always open to interesting conversations.
            </p>
            
            <div className="flex items-center gap-5 text-primary-foreground">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">San Francisco, CA <span className="opacity-60">(or anywhere via internet)</span></span>
            </div>
          </div>
          
          <div className="bg-card text-foreground p-10 md:p-12 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10 blur-2xl opacity-50"></div>
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
                          <Input placeholder="Jane Doe" {...field} className="bg-background border-border/50 focus:border-primary h-12" />
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
                          <Input placeholder="jane@example.com" {...field} className="bg-background border-border/50 focus:border-primary h-12" />
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
                          <SelectItem value="recruiting">Engineering Role</SelectItem>
                          <SelectItem value="crafts">Craft Commission</SelectItem>
                          <SelectItem value="general">General Hello</SelectItem>
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
                          className="min-h-[150px] bg-background border-border/50 focus:border-primary resize-none" 
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
                  {submitContact.isPending ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-muted-foreground bg-card border-t border-border/30">
        <div className="font-serif font-bold text-2xl text-foreground mb-4">Studio.</div>
        <p className="text-sm font-medium uppercase tracking-widest">© {new Date().getFullYear()} Crafted with intention.</p>
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
      <WritingModal 
        id={selectedPostId} 
        open={!!selectedPostId} 
        onOpenChange={(o) => !o && setSelectedPostId(null)} 
      />
    </div>
  );
}
