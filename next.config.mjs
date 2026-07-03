/**
 * Next.js config tuned for a static export deployed to GitHub Pages.
 *
 * IMPORTANT — before you deploy:
 * Set REPO_NAME below to your GitHub repository name (the part after
 * github.com/<user>/ ). This becomes the basePath, e.g. if your repo is
 * https://github.com/dedsechack-1337/portfolio, set REPO_NAME = "portfolio".
 *
 * If you are deploying to a "User/Organization" page repo named
 * exactly "<username>.github.io", leave REPO_NAME as an empty string,
 * because that kind of repo is served from the domain root (no basePath).
 */
const REPO_NAME = "portfolio";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions && REPO_NAME ? `/${REPO_NAME}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
