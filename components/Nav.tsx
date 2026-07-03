"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] px-[5%] bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="font-mono text-[1.1rem] font-bold text-grass tracking-wide">
        amit<span className="text-muted">@</span>dedsec<span className="text-muted"> ~$</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-muted text-[0.85rem] font-medium tracking-wide hover:text-grass transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="md:hidden text-[0.78rem] px-3 py-1.5 rounded-md border border-grass text-grass"
      >
        Hire Me
      </a>
    </nav>
  );
}
