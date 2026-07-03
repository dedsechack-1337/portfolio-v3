"use client";

import { useEffect, useState } from "react";

const LINES = [
  { t: "amit@dedsec:~$ whoami", c: "text-mint" },
  { t: "Cybersecurity Engineer | Ethical Hacker | IoT & AI Security", c: "text-muted" },
  { t: "amit@dedsec:~$ nmap -sV --top-ports 5 target.candidate", c: "text-mint" },
  { t: "22/tcp   open  ssh       CEH-Certified", c: "text-grass" },
  { t: "80/tcp   open  http      CCNA Grade-A", c: "text-grass" },
  { t: "443/tcp  open  https     ISOEH O+ Grade", c: "text-grass" },
  { t: "9000/tcp open  ai-ml     TensorFlow / scikit-learn", c: "text-grass" },
  { t: "31337/tcp open ctf       1st Prize Winner", c: "text-grass" },
  { t: "amit@dedsec:~$ cat status.txt", c: "text-mint" },
  { t: "> Actively seeking SOC Analyst / Pentester roles", c: "text-bright" },
  { t: "> Response time: < 24h", c: "text-bright" },
];

export default function TerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const delay = LINES[visible].t.startsWith("amit@") ? 550 : 260;
    const timer = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className="w-full max-w-[460px] rounded-xl border border-border bg-panel shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[0.7rem] text-muted">
          recon.sh — dedsec@amit
        </span>
      </div>
      <div className="p-5 font-mono text-[0.78rem] leading-relaxed min-h-[300px]">
        {LINES.slice(0, visible).map((l, i) => (
          <div key={i} className={l.c}>
            {l.t}
          </div>
        ))}
        {visible < LINES.length && (
          <span className="inline-block w-2 h-4 bg-grass animate-blink align-middle" />
        )}
      </div>
    </div>
  );
}
