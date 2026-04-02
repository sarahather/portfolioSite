import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { WorkExpModal } from "@/components/WorkExpModal";
import { workExperiences } from "@workspace/content";
import { ArrowUpRight, BookOpen, ExternalLink, MapPin } from "lucide-react";

export default function ExperiencePage() {
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="pt-28 pb-16 px-6 bg-card border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Career</div>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Six years building software, leading interns, co-founding a nonprofit, and learning something new every single sprint.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {workExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedWorkId(exp.id)}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                      {exp.startDate?.slice(0, 4)} — {exp.endDate ? exp.endDate.slice(0, 4) : "Present"}
                      {exp.current && <span className="ml-2 text-secondary">· Current</span>}
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h2>
                    <div className="text-muted-foreground font-medium flex items-center gap-2">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span>·</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6">{exp.description}</p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/50 border-t border-border/40">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="shrink-0">
              <img src="/images/graduation.jpg" alt="Sarah at UIC graduation" className="w-28 h-28 rounded-full object-cover object-top shadow-md border-4 border-background" />
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
              <a href="https://engineering.uic.edu/undergraduate/w-fall22/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors">
                <BookOpen className="w-4 h-4" />
                Featured in UIC Engineering
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WorkExpModal id={selectedWorkId} open={!!selectedWorkId} onOpenChange={(o) => !o && setSelectedWorkId(null)} />
    </div>
  );
}
