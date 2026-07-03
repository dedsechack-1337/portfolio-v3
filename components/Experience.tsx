import { experience } from "@/data/cv";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-20 px-[6%]">
      <div className="section-label mb-3">Work History</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Experience
      </h2>
      <div className="space-y-10 border-l-2 border-border pl-8 max-w-3xl">
        {experience.map((e) => (
          <Reveal key={e.role}>
            <div className="relative">
              <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-grass shadow-[0_0_8px_#52b788]" />
              <div className="font-mono text-[0.78rem] text-grass mb-1">
                {e.period}
              </div>
              <div className="text-white font-bold mb-1">{e.role}</div>
              <div className="text-mint text-[0.85rem] mb-3">{e.org}</div>
              <ul className="space-y-1.5">
                {e.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-muted text-[0.85rem] leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-grass"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
