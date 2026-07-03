import { certifications } from "@/data/cv";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg2 py-20 px-[6%]">
      <div className="section-label mb-3">Credentials</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Certifications &amp; <span className="text-grass">Licences</span>
      </h2>
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {certifications.map((c) => (
          <Reveal key={c.name}>
            <div className="bg-panel border border-border rounded-lg p-5 h-full hover:border-grass transition-colors">
              <div className="font-mono text-[0.68rem] text-grass uppercase tracking-wide mb-2">
                {c.issuer}
              </div>
              <div className="text-white text-[0.9rem] font-semibold mb-2 leading-snug">
                {c.name}
              </div>
              <div className="text-muted text-[0.72rem] font-mono">
                {c.reg}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
