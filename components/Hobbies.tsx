import { hobbies, softSkills, spokenLanguages } from "@/data/cv";
import Reveal from "./Reveal";

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-bg py-20 px-[6%]">
      <div className="section-label mb-3">Beyond Security</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Interests &amp; <span className="text-grass">Hobbies</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {hobbies.map((h) => (
          <Reveal key={h.name}>
            <div className="bg-panel border border-border rounded-lg p-6 h-full text-center hover:border-grass transition-colors">
              <span className="text-3xl block mb-3">{h.icon}</span>
              <div className="text-white font-bold mb-2">{h.name}</div>
              <div className="text-muted text-[0.82rem] leading-relaxed">
                {h.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Reveal>
          <div>
            <div className="section-label mb-4">Human Layer</div>
            <h3 className="text-white text-lg font-bold mb-5">
              Soft <span className="text-grass">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="skill-tag hot">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <div className="section-label mb-4">Communication</div>
            <h3 className="text-white text-lg font-bold mb-5">
              Languages <span className="text-grass">Spoken</span>
            </h3>
            <div className="space-y-2">
              {spokenLanguages.map((l) => (
                <div
                  key={l.lang}
                  className="flex items-center justify-between bg-panel border border-border rounded-md px-4 py-2.5"
                >
                  <span className="text-white text-[0.88rem] font-medium">
                    {l.lang}
                  </span>
                  <span className="font-mono text-[0.72rem] text-grass">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
