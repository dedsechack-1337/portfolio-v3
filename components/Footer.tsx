import { profile } from "@/data/cv";

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-border text-muted text-[0.8rem]">
      <p>
        Designed &amp; built by <span className="text-grass">{profile.name}</span> ·{" "}
        {profile.title} · {profile.location}
      </p>
      <p className="mt-2">
        {profile.githubHandle} · {profile.email}
      </p>
    </footer>
  );
}
