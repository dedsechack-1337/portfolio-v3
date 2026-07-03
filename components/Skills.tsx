import { skillCategories } from "@/data/cv";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-20 px-[6%]">
      <div className="section-label mb-3">Technical Arsenal</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Skills &amp; <span className="text-grass">Expertise</span>
      </h2>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {skillCategories.map((cat) => (
          <Reveal key={cat.title}>
            <div className="bg-panel border border-border rounded-[10px] p-6 hover:border-grass hover:-translate-y-1 transition-all h-full">
              <div className="font-mono text-[0.72rem] text-grass tracking-widest uppercase font-bold mb-4">
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`skill-tag ${cat.hot ? "hot" : ""}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
