import { achievements } from "@/data/cv";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-bg py-20 px-[6%]">
      <div className="section-label mb-3">Recognition</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Achievements &amp; <span className="text-grass">Competitions</span>
      </h2>
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {achievements.map((a) => (
          <Reveal key={a.title}>
            <div className="flex gap-4 bg-panel border border-border rounded-lg p-5 h-full hover:border-grass transition-colors">
              <div className="text-2xl text-grass shrink-0">{a.icon}</div>
              <div>
                <div className="text-white font-bold text-[0.9rem] mb-1">
                  {a.title}
                </div>
                <div className="text-muted text-[0.8rem] leading-relaxed">
                  {a.sub}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
