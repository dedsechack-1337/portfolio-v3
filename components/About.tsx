import { profile } from "@/data/cv";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-bg2 py-20 px-[6%]">
      <div className="section-label mb-3">Who I Am</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        About <span className="text-grass">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="text-muted leading-[1.8] text-[0.95rem] space-y-4">
          <p>{profile.summary}</p>
          <p>
            Based in{" "}
            <strong className="text-grass font-semibold">
              {profile.location}
            </strong>
            , I&apos;m actively seeking{" "}
            <strong className="text-grass font-semibold">
              SOC Analyst, Penetration Tester, and Cybersecurity Engineer
            </strong>{" "}
            roles where I can turn hard-won lab skills into production
            security outcomes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((s) => (
            <Reveal key={s.t}>
              <div className="bg-panel border border-border rounded-lg p-5 hover:border-grass transition-colors h-full">
                <span className="block font-mono text-[1.8rem] font-bold text-grass mb-1">
                  {s.n}
                </span>
                <span className="text-[0.78rem] text-muted">{s.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
