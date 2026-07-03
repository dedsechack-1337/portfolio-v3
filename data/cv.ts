export const profile = {
  name: "Amit Roy",
  title: "Cybersecurity Engineer",
  taglines: [
    "Ethical Hacker & Penetration Tester",
    "SOC Analyst & Threat Hunter",
    "Malware Analyst & Reverse Engineer",
    "IoT & Hardware Security Engineer",
    "AI/ML Security Researcher",
    "Open Source Security Builder",
  ],
  location: "Ashoknagar, West Bengal",
  email: "amitroy9091988431@gmail.com",
  phone: "+91 9091988431",
  github: "https://github.com/dedsechack-1337",
  githubHandle: "github.com/dedsechack-1337",
  linkedin: "https://linkedin.com/in/dedsechaack1337",
  linkedinHandle: "linkedin.com/in/dedsechaack1337",
  leetcode: "https://leetcode.com/u/amitroy1337/",
  leetcodeHandle: "leetcode.com/u/amitroy1337",
  youtube: "https://youtube.com/@arproduction8597",
  youtubeHandle: "youtube.com/@arproduction8597",
  summary:
    "CEH-certified Ethical Hacker and Cybersecurity Engineer with 1+ years of hands-on experience across Web Application & Network Penetration Testing, reverse engineering, malware analysis, AI-driven security tooling, and IoT/embedded systems security. Self-taught polyglot programmer in 28+ languages with a strong mathematical foundation — excelling in algorithm design, cryptography, and AI/ML modelling. Builder of open-source security tools (SIEM, SOC tooling, phishing detection, malware AI). First-Prize CTF winner. Passionate about offensive security, IoT/electronics, and AI-integrated threat defence — backed by a structured 4-year Honours syllabus spanning networking, forensics, cloud, and AI in cybersecurity.",
  badges: [
    "CEHP Certified",
    "CCNA Grade A",
    "ISOEH O+ Grade",
    "MeitY — Govt of India",
    "CTF 1st Prize Winner",
    "28+ Languages",
  ],
  stats: [
    { n: "1+ yrs", t: "Hands-on Security Experience" },
    { n: "9.50", t: "6th Sem SGPA" },
    { n: "28+", t: "Programming Languages" },
    { n: "33+", t: "GitHub Repositories" },
  ],
};

export const skillCategories = [
  {
    title: "Primary Programming Languages",
    hot: true,
    tags: ["Python", "Java", "Go", "C", "C++", "JavaScript", "Assembly", "TypeScript", "Kotlin", "Rust"],
  },
  {
    title: "Scripting Languages",
    hot: true,
    tags: ["Bash", "PowerShell", "Batch Script", "VBScript"],
  },
  {
    title: "Additional Languages",
    hot: false,
    tags: ["PHP", "Ruby", "Perl", "Lua", "Lisp", "C# (.NET)", "R", "MATLAB", "Zig", "Swift", "Nim", "Scala", "Objective-C", "HTML", "CSS"],
  },
  {
    title: "Cybersecurity & Offensive Tools",
    hot: true,
    tags: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Aircrack-ng", "Nikto", "SQLMap", "Hydra", "John the Ripper", "Ghidra", "IDA Pro", "Volatility", "Snort", "Splunk", "YARA Rules", "Kali Linux", "ParrotOS"],
  },
  {
    title: "Networking & Infrastructure",
    hot: false,
    tags: ["TCP/IP", "Switching & Routing (CCNA)", "Linux Administration", "Windows Server 2019/2022", "Firewall & IDS/IPS", "VPN", "DNS/DHCP", "Linux Network Services"],
  },
  {
    title: "Security Domains",
    hot: true,
    tags: ["Web App Pentesting (OWASP Top 10)", "Network Pentesting", "Reverse Engineering", "Malware Analysis", "Digital Forensics", "SOC Operations", "Cryptography", "Vulnerability Analysis", "Social Engineering & OSINT", "Steganography", "Blockchain Security"],
  },
  {
    title: "DevSecOps / DevOps",
    hot: true,
    tags: ["CI/CD Security (GitHub Actions, Jenkins)", "SAST / DAST Integration", "Container Security (Docker)", "Infrastructure as Code Security", "Shift-Left Security", "Vulnerability Management Pipelines", "Secure SDLC (SSDLC)", "Ansible", "Kubernetes", "YAML/JSON"],
  },
  {
    title: "AI / ML",
    hot: true,
    tags: ["Machine Learning", "Neural Networks", "NLP for Threat Detection", "Anomaly Detection", "AI-powered Malware Classification", "TensorFlow", "scikit-learn"],
  },
  {
    title: "IoT & Electronics",
    hot: true,
    tags: ["Arduino", "Raspberry Pi", "RFID/NFC Systems", "IoT Firmware Analysis & Exploitation", "IoT Security", "Sensor Networks", "Fundamentals of Electronics", "Embedded C & Assembly", "Circuit Design"],
  },
  {
    title: "Cloud & Virtualisation",
    hot: true,
    tags: ["Cloud Security", "Virtualisation Technology", "Windows Server Management", "Security Audit & Compliance", "Digital Watermarking"],
  },
  {
    title: "Architecture & Design",
    hot: true,
    tags: ["Cybersecurity System Architecture", "System Design", "Network Architecture", "Zero-Trust Design", "OS Internals (Linux & Windows)", "Secure SDLC", "DSA & Algorithm Design", "Mathematics (Cryptography, AI/ML, DSA)"],
  },
  {
    title: "Frameworks & Dev Tools",
    hot: false,
    tags: ["React", "Next.js", "Django", "Flask", "Bootstrap", "Tailwind CSS", "Node.js", "Vue.js", "Vite", "jQuery", "Git", "VS Code"],
  },
];

export const projects = [
  {
    icon: "🛡️",
    name: "malware-guardAI",
    desc: "AI-powered malware analysis engine that classifies and dissects malicious binaries using machine learning. Delivers automated threat reports — reduces analyst workload by automating static & dynamic analysis pipelines.",
    tags: ["Python", "AI/ML", "YARA Rules", "Malware Analysis"],
    note: "Applies AI in Cyber Security (Sem 8) and Data Security & Analytics (Sem 8) to a real-world production security tool.",
  },
  {
    icon: "📡",
    name: "PhoenixSIEM",
    desc: "Self-learning SIEM platform that ingests multi-source logs, detects anomalies, and surfaces prioritised alerts via an adaptive ML model. Cuts SOC alert fatigue by auto-filtering false positives.",
    tags: ["TypeScript", "SOC", "AI/ML", "SIEM"],
    note: "Bridges SOC Management (Sem 6), AI in Cyber Security (Sem 8), and Virtualisation Technology (Sem 8) into a full-stack security product.",
  },
  {
    icon: "🎣",
    name: "PhishguardAI",
    desc: "Real-time phishing URL & email detector using NLP and heuristics to catch zero-day phishing campaigns before credential exposure occurs.",
    tags: ["Python", "NLP", "Threat Intel", "ML"],
    note: "Applies AI in Cyber Security (Sem 8) and Cryptography & Network Security (Sem 6) in an end-to-end threat intelligence pipeline.",
  },
  {
    icon: "🔍",
    name: "network_scanner",
    desc: "Full-featured network reconnaissance tool — sweeps subnets, fingerprints services, detects open ports & OS signatures, outputs structured JSON for SIEM/VAPT workflows.",
    tags: ["Python", "Network Recon", "Pentesting"],
    note: "Applies Data Security & Analytics (Sem 8) and Network Security Essentials (Sem 5) to automate reconnaissance workflows.",
  },
  {
    icon: "📡",
    name: "RFID Cloner",
    desc: "Custom-built RFID cloning device (125kHz EM4100 & MIFARE Classic) demonstrating physical access control vulnerabilities — used in live security awareness demos.",
    tags: ["Arduino", "C", "IoT Security", "Hardware"],
    note: "Reflects IoT Security (Sem 7) and Cyber Security Law & IPR (Sem 8) — real-world hardware attack surfaces.",
  },
];

export const experience = [
  {
    period: "2019 – 2020",
    role: "Cybersecurity Intern — Ethical Hacking Division",
    org: "Indian Cyber Security Solutions · ISO 27001 & 9001:2015 Certified",
    points: [
      "Performed web application pentests (OWASP Top 10) — delivered risk-rated vulnerability reports with remediation roadmaps.",
      "Executed network pentests using Metasploit & Nmap; discovered and disclosed high-severity CVE-class issues.",
      "Won 1st Prize in the company CTF Competition (Aug 2022) among professional cybersecurity practitioners.",
      "Earned CEHP (Reg: ICSS369034002019) and CCNA Grade A (Reg: ICSS36903292019) through the ISO-accredited programme.",
    ],
  },
  {
    period: "2024 · 6 Months",
    role: "IT Cell Intern — Cybersecurity",
    org: "Brainware University, Kolkata",
    points: [
      "Monitored the university network using Wireshark & Snort in a SOC-like environment.",
      "Conducted internal vulnerability assessments; remediated critical misconfigurations.",
      "Delivered security awareness workshops to 100+ staff on phishing and incident response.",
    ],
  },
  {
    period: "Apr – Aug 2024",
    role: "Technical Staff — Earn While You Learn Scheme",
    org: "Brainware University · Ref: BWU/REG/ELS/STD/01042024/08",
    points: [
      "Competitively selected from a limited merit cohort for paid technical support within the university IT department.",
      "Performance evaluated monthly by department supervisors; recognised for SGPA 9.50 and technical excellence.",
    ],
  },
];

export const certifications = [
  { issuer: "Indian Cyber Security Solutions", name: "CEHP — Certified Ethical Hacking Professional", reg: "Reg: ICSS369034002019 · Nov 2019" },
  { issuer: "Indian Cyber Security Solutions", name: "CCNA — Cisco Certified Network Associate (Grade A)", reg: "Reg: ICSS36903292019 · Feb 2019" },
  { issuer: "TCM Security", name: "Practical Ethical Hacking — The Complete Course", reg: "11 Nov 2020" },
  { issuer: "ISOEH · EC-Council Accredited", name: "Ethical Hacking Industrial Training — O+ Grade", reg: "Reg: ISOEH/EH/24/1670 · Jul–Aug 2024" },
  { issuer: "ISOEH · EC-Council Accredited", name: "Network Penetration Testing Level-1 — O+ Grade", reg: "Reg: ISOEH/NP/25/1843 · Jan 2025" },
  { issuer: "MeitY · Government of India", name: "Cyber Hygiene Practices — ISEA", reg: "Reg: MeitY/ISEA/WCHP/023098 · 20 Oct 2022" },
  { issuer: "TryHackMe", name: "Advent of Cyber 2025 — 24 Challenges Completed", reg: "THM-AQA6PIKKLL · 7 Jan 2026" },
  { issuer: "APLL Learning Solutions", name: "IT-SMART — Distinction Grade", reg: "Cert No. 1790437 · Oct 2017" },
];

export const achievements = [
  { icon: "★", title: "1st Prize — CTF Competition", sub: "Indian Cyber Security Solutions · 14 Aug 2022 · Won among professional cybersecurity practitioners" },
  { icon: "◆", title: "Kolkata Police & IEMLabs Hackathon 2022", sub: "Netaji Indoor Stadium, Kolkata · 29 Jul 2022 · City-level cybersecurity competition" },
  { icon: "◆", title: "BrainCon 2024 — TechFusion", sub: "Brainware University (IIC, MoE) · 18 May 2024 · Commendable performance recognised" },
  { icon: "◆", title: "Brainware-CTF (CyberYami / BCC)", sub: "Brainware Cyber Club · 30 Nov 2023 · Certificate of Appreciation" },
  { icon: "❄", title: "TryHackMe — Advent of Cyber 2025", sub: "24/24 challenges completed · AI, web, forensics, network analysis · THM-AQA6PIKKLL" },
  { icon: "◆", title: "Earn While You Learn — Merit Selection", sub: "Brainware University · Apr–Aug 2024 · Competitive merit cohort selection" },
  { icon: "⚡", title: "33+ Public GitHub Repositories", sub: "5+ actively maintained open-source cybersecurity tools with community recognition" },
  { icon: "🌐", title: "Self-Taught Polyglot Programmer", sub: "28+ programming languages · avg. 21–30 days per language · systems, data science & mobile" },
];

export const education = [
  {
    degree: "BSc (H) — Advanced Networking & Cyber Security (ANCS)",
    inst: "Brainware University, Barasat, Kolkata · Roll: 23010348145 · Reg: 23013003403",
    detail: "Specialisations: AI/ML · Cryptography · SOC Management · Windows Server · Cloud Security · Digital Forensics · IoT Security",
    grade: "9.50",
    year: "6th Sem SGPA · 2023–Present",
    extra: "90.50% · Overall till 6th Sem: 82.38%",
  },
  {
    degree: "Higher Secondary — Engineering & Technology (Vocational)",
    inst: "Ashoknagar Boys Secondary School · WB State Council of Technical & Vocational Education · Roll: 221079114013",
    detail: "Discipline: Engineering & Technology (ETCM)",
    grade: "79.60%",
    year: "Grade A · 2022–2023",
  },
  {
    degree: "Secondary Examination (Madhyamik Pariksha)",
    inst: "Ashoknagar Boys Secondary School · WBBSE · Roll: 204301B",
    detail: "",
    grade: "457/700",
    year: "Overall Grade A · 2014–2015",
  },
];

// New: academic syllabus mapping, present in the latest CV but missing from the old site.
export const academicCoverage = [
  { sem: "Sem 1 · Foundations", topics: "Computer Networks · PC Maintenance · Fundamentals of Electronics · Computer Peripherals & OS" },
  { sem: "Sem 2 · Linux & Security Basics", topics: "Linux Administration · Cyber Security Lab · Principles of Programming · Security Overview" },
  { sem: "Sem 3 · Network Security & Pentesting", topics: "Switching & Routing · Vulnerability Analysis & Penetration Testing · Information Security Management" },
  { sem: "Sem 4 · Web Security & Databases", topics: "Windows Server Administration · Web Application Penetration Testing · Database Management System" },
  { sem: "Sem 5 · Advanced Networking", topics: "Network Security Essentials · Linux Network Service Management · Blockchain & Cryptocurrency · Digital Watermarking & Steganography" },
  { sem: "Sem 6 · AI/ML & SOC", topics: "Windows Server Management · Security Operations Center Management · AI & Machine Learning · Cryptography & Network Security" },
  { sem: "Sem 7 · Cloud, Forensics & IoT (Hons)", topics: "Security Audit & Compliances · Cloud Security · Digital Forensics · IoT Security" },
  { sem: "Sem 8 · AI Security & Cyber Law (Hons)", topics: "Data Security & Analytics · AI in Cyber Security · Virtualisation Technology · Cyber Security Law & IPR" },
];

export const hobbies = [
  { icon: "♫", name: "Guitar & Music", desc: "Self-taught guitarist sharing performances on YouTube @arproduction8597. Fingerstyle and electric." },
  { icon: "🎛️", name: "EDM Production & DJ", desc: "Composes original EDM tracks and mixes using DAWs. Passionate about music synthesis, sound design, and live mixing." },
  { icon: "⚡", name: "Electronics & IoT Tinkering", desc: "Builds custom hardware with Arduino & Raspberry Pi — from RFID security tools to sensor networks and embedded systems." },
];

// New: soft skills, present in CV but missing from the old site.
export const softSkills = [
  "Analytical Thinking",
  "Rapid Self-Learning",
  "Problem Solving",
  "Communication",
  "Adaptability",
  "Decision Making",
  "Multi-tasking",
  "Attention to Detail",
  "Team Collaboration",
  "Creative Thinking",
];

// New: spoken languages, present in CV but missing from the old site.
export const spokenLanguages = [
  { lang: "Bengali", level: "Native" },
  { lang: "English", level: "Professional" },
  { lang: "Hindi", level: "Conversational" },
];
