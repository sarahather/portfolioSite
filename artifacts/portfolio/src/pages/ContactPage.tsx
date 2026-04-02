import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Linkedin, Calendar } from "lucide-react";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    if (!FORMSPREE_FORM_ID) {
      toast({ title: "Configuration error", description: "Contact form is not configured yet.", variant: "destructive" });
      return;
    }

    setIsPending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        form.reset();
      } else {
        toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-4">Get in Touch</div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">Let's build something.</h1>
          <p className="text-primary-foreground/90 text-xl max-w-2xl leading-relaxed">
            Speaking opportunities, engineering roles, custom craft commissions, or just a conversation — I'm always open to what's interesting.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="space-y-5 text-foreground mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Raleigh, NC & Chicago, IL <span className="font-normal text-sm text-muted-foreground ml-1">· open to travel</span></span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <a href="https://www.linkedin.com/in/sarah-ather/" target="_blank" rel="noreferrer" className="font-medium hover:text-primary transition-colors">
                  linkedin.com/in/sarah-ather
                </a>
              </div>
            </div>

            <a
              href="https://calendly.com/sasarahather/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call via Calendly
            </a>

            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border/50">
              <div className="font-serif text-lg font-bold mb-2">What I'm open to</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Speaking engagements & panels",
                  "Engineering roles & consulting",
                  "Custom craft commissions",
                  "Mentorship conversations",
                  "Community collaborations",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border/50 p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-8">Send a message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="your@email.com" type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="subject" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inquiry Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Speaking Engagement">Speaking Engagement</SelectItem>
                        <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                        <SelectItem value="Craft Commission">Craft Commission</SelectItem>
                        <SelectItem value="Collaboration / Partnership">Collaboration / Partnership</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl><Textarea placeholder="Tell me what you have in mind..." rows={6} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
