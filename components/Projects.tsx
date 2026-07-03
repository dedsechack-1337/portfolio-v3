import { profile, projects } from "@/data/cv";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg2 py-20 px-[6%]">
      <div className="section-label mb-3">Open Source</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Featured <span className="text-grass">Projects</span>
      </h2>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {projects.map((p) => (
          <Reveal key={p.name}>
            <div className="bg-panel border border-border rounded-[10px] p-6 h-full flex flex-col hover:border-grass transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{p.icon}</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-grass text-[0.78rem] hover:text-mint"
                >
                  github ↗
                </a>
              </div>
              <div className="font-mono text-white font-bold mb-2">
                {p.name}
              </div>
              <p className="text-muted text-[0.85rem] leading-relaxed mb-3 flex-1">
                {p.desc}
              </p>
              <p className="text-[0.72rem] text-mint/80 italic mb-3">
                {p.note}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="skill-tag hot">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="border border-dashed border-border rounded-[10px] flex items-center justify-center min-h-[220px] h-full">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-muted text-[0.85rem] mb-4">
                33+ public repositories on GitHub
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 rounded-md border border-grass text-grass text-[0.78rem] hover:bg-[rgba(82,183,136,0.1)] transition-colors"
              >
                View All →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
