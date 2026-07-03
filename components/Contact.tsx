"use client";

import { profile } from "@/data/cv";

const links = [
  { icon: "✉", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "☎", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: "◈", label: "GitHub", value: profile.githubHandle, href: profile.github },
  { icon: "in", label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
  { icon: "⌨", label: "LeetCode", value: profile.leetcodeHandle, href: profile.leetcode },
  { icon: "♫", label: "YouTube", value: profile.youtubeHandle, href: profile.youtube },
];

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Job opportunity"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="bg-bg py-20 px-[6%]">
      <div className="section-label mb-3">Get In Touch</div>
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-white mb-10 tracking-tight">
        Contact <span className="text-grass">Me</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-muted text-[0.95rem] leading-relaxed mb-4">
            I&apos;m actively looking for{" "}
            <strong className="text-grass">
              Cybersecurity internships, SOC Analyst, and Penetration Tester
              roles
            </strong>
            . If you're an HR or hiring manager — I'd love to hear from you.
          </p>
          <p className="text-muted text-[0.95rem] leading-relaxed mb-6">
            Whether it&apos;s a full-time role, internship, freelance security
            assessment, or just a conversation — feel free to reach out.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 bg-panel border border-border rounded-lg px-4 py-3 hover:border-grass transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[rgba(82,183,136,0.1)] text-grass flex items-center justify-center font-mono text-sm shrink-0">
                  {l.icon}
                </span>
                <span className="flex flex-col overflow-hidden">
                  <span className="text-[0.68rem] text-muted uppercase tracking-wide">
                    {l.label}
                  </span>
                  <span className="text-[0.82rem] text-white truncate">
                    {l.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-panel border border-border rounded-lg p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.75rem] text-muted mb-1.5">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-bg2 border border-border rounded-md px-3 py-2.5 text-white text-[0.88rem] outline-none focus:border-grass"
              />
            </div>
            <div>
              <label className="block text-[0.75rem] text-muted mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-bg2 border border-border rounded-md px-3 py-2.5 text-white text-[0.88rem] outline-none focus:border-grass"
              />
            </div>
          </div>
          <div>
            <label className="block text-[0.75rem] text-muted mb-1.5">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Job opportunity / Collaboration"
              className="w-full bg-bg2 border border-border rounded-md px-3 py-2.5 text-white text-[0.88rem] outline-none focus:border-grass"
            />
          </div>
          <div>
            <label className="block text-[0.75rem] text-muted mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role or project..."
              className="w-full bg-bg2 border border-border rounded-md px-3 py-2.5 text-white text-[0.88rem] outline-none focus:border-grass resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-[0.85rem] bg-grass text-bg hover:bg-mint transition-colors"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
