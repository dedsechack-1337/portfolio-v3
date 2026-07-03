import { academicCoverage, education } from "@/data/cv";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="bg-bg2 py-20 px-[6%]">
      <div className="section-label mb-3">Academic Background</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Education
      </h2>
      <div className="space-y-4 mb-16">
        {education.map((e) => (
          <Reveal key={e.degree}>
            <div className="bg-panel border border-border rounded-lg p-6 grid md:grid-cols-[1fr_auto] gap-4 items-center">
              <div>
                <div className="text-white font-bold mb-1">{e.degree}</div>
                <div className="text-mint text-[0.85rem] mb-1">{e.inst}</div>
                {e.detail && (
                  <div className="text-muted text-[0.78rem]">{e.detail}</div>
                )}
              </div>
              <div className="text-left md:text-right">
                <div className="font-mono text-[1.5rem] font-bold text-grass">
                  {e.grade}
                </div>
                <div className="text-muted text-[0.75rem]">{e.year}</div>
                {e.extra && (
                  <div className="text-grass text-[0.75rem] mt-1">
                    {e.extra}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="section-label mb-3">4-Year Honours Syllabus</div>
      <h3 className="text-white text-xl font-bold mb-8">
        Academic Skill <span className="text-grass">Coverage</span>
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {academicCoverage.map((row) => (
          <Reveal key={row.sem}>
            <div className="bg-panel border border-border rounded-lg p-5 h-full hover:border-grass transition-colors">
              <div className="font-mono text-[0.72rem] text-grass uppercase tracking-wide mb-2">
                {row.sem}
              </div>
              <div className="text-muted text-[0.82rem] leading-relaxed">
                {row.topics}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
