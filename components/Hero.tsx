import { profile } from "@/data/cv";
import TypedTitle from "./TypedTitle";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-[6%] pt-28 pb-16 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(82,183,136,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 fade-up">
        <div className="section-label mb-5">Cybersecurity Engineer</div>
        <h1 className="text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-white mb-2">
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-grass">{profile.name.split(" ")[1]}.</span>
        </h1>
        <div className="mb-6">
          <TypedTitle titles={profile.taglines} />
        </div>
        <p className="text-muted max-w-[480px] text-[0.95rem] leading-[1.75] mb-8">
          CEH-certified security engineer who breaks systems before real
          attackers do. Specialising in Web &amp; Network Pentesting, SOC
          Operations, Malware Analysis, and AI-driven threat defence.
          Builder of open-source security tools. 6th Sem SGPA:{" "}
          <strong className="text-grass">9.50</strong>.
        </p>
        <div className="flex flex-wrap gap-2 mb-9">
          {profile.badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1 border border-border rounded font-mono text-[0.72rem] font-semibold text-grass bg-[rgba(82,183,136,0.06)] whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-[0.85rem] bg-grass text-bg hover:bg-mint hover:-translate-y-0.5 transition-all"
          >
            GitHub Projects ↗
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-[0.85rem] border border-grass text-grass hover:bg-[rgba(82,183,136,0.1)] hover:-translate-y-0.5 transition-all"
          >
            Hire Me →
          </a>
        </div>
      </div>

      <div className="relative z-10 fade-up flex justify-center">
        <TerminalCard />
      </div>
    </section>
  );
}
