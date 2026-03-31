import { Linkedin } from "lucide-react";

export function NavBar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Travels", href: "#travels" },
    { name: "Speaking", href: "#speaking" },
    { name: "Crafts", href: "#crafts" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#about" className="font-serif font-bold text-xl text-primary tracking-tighter">
          Sarah Ather
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sarah-ather/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
