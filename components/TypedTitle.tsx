"use client";

import { useEffect, useState } from "react";

export default function TypedTitle({ titles }: { titles: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let ti = 0;
    let ci = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const cur = titles[ti];
      if (!deleting) {
        ci++;
        setText(cur.slice(0, ci));
        if (ci === cur.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        ci--;
        setText(cur.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ti = (ti + 1) % titles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 65);
    }

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, [titles]);

  return (
    <span className="font-mono text-mint text-[clamp(1rem,1.8vw,1.25rem)]">
      {text}
      <span className="text-grass animate-blink">_</span>
    </span>
  );
}
