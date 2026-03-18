import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Code2,
  Brain,
  Rocket,
  Trophy,
  Users,
  FileText,
  Sparkles,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const profile = {
  name: "Rayeesa Mahmood",
  title: "Computer Science Engineer · AI & Web Developer",
  shortTitle: "AI x Web Developer",
  email: "rayeesamahmood8098@gmail.com",
  phone: "+91 7893095403",
  location: "Hyderabad, Telangana",
  github: "https://github.com/RayeesaMahmood",
  linkedin: "https://linkedin.com/in/rayeesa-mahmood",
  summary:
    "Computer Science Engineer with hands-on experience in full-stack web development, hackathon operations, research-backed AI projects, and technical leadership. I build user-focused digital products, organize high-energy tech communities, and explore intelligent systems that solve real problems.",
  intro:
    "Bold. Curious. Analytical. Creative. Built for AI roles, web development roles, and everything in between.",
};

const stats = [
  { value: "8.66", label: "GPA / 10" },
  { value: "8+", label: "Featured Projects" },
  { value: "2", label: "Hackathons Organized" },
  { value: "12+", label: "Leadership / Event Roles" },
];

const tags = [
  "AI Systems",
  "Full Stack",
  "Java",
  "Python",
  "Firebase",
  "Research",
  "Hackathons",
  "Leadership",
  "Responsive UI",
  "Problem Solving",
];

const skills = [
  {
    title: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "C"],
  },
  {
    title: "Web Development",
    icon: <Rocket className="h-5 w-5" />,
    items: ["React", "Frontend Development", "Backend Development", "Responsive Web Design", "Node.js", "REST Concepts"],
  },
  {
    title: "AI / Research",
    icon: <Brain className="h-5 w-5" />,
    items: ["Multi-Agent Systems", "Healthcare AI", "AQI Monitoring", "Intelligent Systems", "Research Writing", "Problem Analysis"],
  },
  {
    title: "Tools & Platforms",
    icon: <Sparkles className="h-5 w-5" />,
    items: ["Git", "GitHub", "Firebase", "VS Code", "MySQL", "Anaconda"],
  },
];

const timeline = [
  {
    period: "2023 – 2025",
    title: "Technical Head · CodeWave Hub Community",
    points: [
      "Led technical initiatives, Learnathon sessions, and Python workshops.",
      "Mentored juniors and coordinated hands-on learning activities.",
      "Helped organize Telangana-level HackPrix hackathons.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Treasurer · IEEE Student Branch",
    points: [
      "Managed treasury responsibilities and supported student branch operations.",
      "Contributed to technical events, coordination, and documentation.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "HR & Documentation · Lords E-Cell",
    points: [
      "Handled documentation, outreach, and event execution for entrepreneurship initiatives.",
      "Worked closely with teams, faculty coordinators, and mentors.",
    ],
  },
  {
    period: "2025",
    title: "Judge · Mentor · Organizer · APP FUSION Hackathon",
    points: [
      "Mentored teams, evaluated ideas, and supported event operations under pressure.",
      "Balanced judging, speaker engagement, and execution responsibilities together.",
    ],
  },
];

const projects = [
  {
    title: "AI Doctor",
    category: "AI / Healthcare",
    type: "Backend + Intelligent Assistant",
    description:
      "A Python-based medical assistant that analyzes symptoms, medical data, and images to generate preliminary health insights. Focused on backend stability, smoother data processing, and better error handling for image-based inputs.",
    stack: ["Python", "Backend Development", "Healthcare AI"],
    github: "https://github.com/RayeesaMahmood/Ai-doctor-py",
    live: "",
  },
  {
    title: "RayCare",
    category: "Full Stack / Healthcare",
    type: "Hospital Queue Management",
    description:
      "A healthcare queue management platform that enables patient registration, appointment booking, queue tracking, and AI-assisted guidance to improve hospital efficiency and user experience.",
    stack: ["Full Stack Development", "Firebase", "Healthcare UX"],
    github: "",
    live: "https://raycare.vercel.app/",
  },
  {
    title: "HackPrix Website",
    category: "Web / Events",
    type: "Hackathon Portal",
    description:
      "A responsive sample website for a hackathon featuring event details, organizer gallery, participant resources, and an interactive F1-inspired schedule for sessions and deadlines.",
    stack: ["Web Development", "UI Design", "Event Platforms"],
    github: "",
    live: "https://hackprix-2025.vercel.app/",
  },
  {
    title: "RERA Resource Platform",
    category: "EdTech / Web",
    type: "Student Resource Hub",
    description:
      "A learning companion for computer science students with notes, roadmaps, and curated resources for web development, Java, C, and other core domains.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RayeesaMahmood/RERA",
    live: "https://rayeesamahmood.github.io/RERA/",
  },
  {
    title: "Bizzapt Enterprises",
    category: "Freelance / Business Web",
    type: "Professional Business Portal",
    description:
      "A freelance business website designed with a modern layout, interactive sections, and responsive presentation for services, careers, feedback, and contact workflows.",
    stack: ["HTML", "Tailwind CSS", "Responsive Design"],
    github: "",
    live: "https://service-lac-seven.vercel.app/",
  },
  {
    title: "Aqrasfi Brand Website",
    category: "Freelance / Brand Web",
    type: "Jewelry Brand Presence",
    description:
      "A public-facing website for a jewelry brand concept, planned in 2025 and launched in 2026, designed to build a clean online identity and product-focused digital presence.",
    stack: ["Brand Web Design", "Frontend", "Launch Execution"],
    github: "",
    live: "https://aqrasfi.github.io/aqrasfi/",
  },
  {
    title: "DevQueens Website",
    category: "Web / Events",
    type: "College Hackathon Website",
    description:
      "A dynamic hackathon website developed on request for a college event, built to present schedules, announcements, and event branding in a polished responsive format.",
    stack: ["React", "Frontend", "Event Design"],
    github: "",
    live: "https://devqueens-hp884kx5z-rayeesamahmoods-projects.vercel.app/",
  },
  {
    title: "Multi-Agent AQI Monitoring",
    category: "AI / Research",
    type: "Mini Project",
    description:
      "A multi-agent framework integrating IoT sensors, satellite streams, and government AQI sources to monitor pollution in real time, predict trends, and generate personalized health advice.",
    stack: ["AI", "Multi-Agent Systems", "Research"],
    github: "",
    live: "",
  },
];

const certifications = [
  "CS50’s Introduction to Computer Science",
  "APP FUSION 2025 · Judge & Mentor",
  "E-Summit 24 · Organizer Contribution",
  "National Entrepreneurship Challenge",
  "Hacktoberfest",
  "IEEE Events & Technical Participation",
  "CodeWaveHub Certificate of Appreciation",
];

const research = [
  {
    title: "RayCare: AI-Enabled Hospital Queue Management System",
    meta: "ORCHIDS · Research Publication",
  },
  {
    title: "Multi-Agent Framework for Real-Time AQI Monitoring and Personalized Health Advice",
    meta: "Conference / Research Work",
  },
];

const education = [
  {
    school: "Lords Institute of Engineering & Technology",
    detail: "B.E. in Computer Science Engineering · GPA: 8.66/10",
    period: "2023 – 2026",
  },
  {
    school: "Iqbalia Junior College",
    detail: "Mathematics, Physics, Chemistry · GPA: 8.8/10",
    period: "2020 – 2022",
  },
  {
    school: "Nalanda Public School (ICSE)",
    detail: "GPA: 8.8/10",
    period: "2008 – 2020",
  },
];

const internships = [
  {
    title: "Web Development / Python Intern · IntenCode, Hyderabad",
    duration: "6 months",
  },
  {
    title: "Full Stack Web Development Intern · LIET, Hyderabad",
    duration: "6 months",
  },
];

const navLinks = [
  "About",
  "Projects",
  "Skills",
  "Research",
  "Leadership",
  "Contact",
];

function SectionTitle({ kicker, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-500">{kicker}</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">{description}</p> : null}
    </div>
  );
}

function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, white 0.6px, transparent 0.8px), radial-gradient(circle at 80% 30%, white 0.6px, transparent 0.8px), radial-gradient(circle at 40% 70%, white 0.6px, transparent 0.8px)",
        backgroundSize: "26px 26px, 34px 34px, 22px 22px",
      }}
    />
  );
}

export default function RayeesaPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", "AI / Healthcare", "AI / Research", "Full Stack / Healthcare", "Web / Events", "EdTech / Web", "Freelance / Business Web", "Freelance / Brand Web"],
    []
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = activeCategory === "All" || project.category === activeCategory;
      const text = `${project.title} ${project.description} ${project.stack.join(" ")} ${project.type}`.toLowerCase();
      const queryMatch = text.includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.20),transparent_25%),linear-gradient(to_bottom,#0a0a0a,#050505)]" />
      <Noise />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-red-500">code · chaos · craft</p>
            <h1 className="text-lg font-black uppercase tracking-[0.2em] text-white">Rayeesa</h1>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-full bg-red-600 px-5 text-white hover:bg-red-500">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-500"
              >
                Cyber Minimal Portfolio
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[7rem]"
              >
                {profile.name}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-5 flex flex-wrap items-center gap-3"
              >
                <span className="rounded-full border border-red-500/30 bg-red-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                  {profile.shortTitle}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{profile.location}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
              >
                {profile.intro}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
              >
                {profile.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full bg-red-600 px-6 text-white hover:bg-red-500">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/5">
                  <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                </Button>
              </motion.div>

              <div className="mt-10 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-300 hover:bg-white/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-red-950/20">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-red-500">target roles</p>
                        <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.16em] text-white">AI + Web</h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-zinc-500" />
                        <span className="h-3 w-3 rounded-full bg-zinc-700" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-white/10">
                    {stats.map((item) => (
                      <div key={item.label} className="bg-black/70 p-6">
                        <p className="text-4xl font-black text-white sm:text-5xl">{item.value}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6">
                    <div className="rounded-[1.5rem] border border-red-500/20 bg-red-600/5 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">identity</p>
                      <p className="mt-4 text-lg font-bold uppercase tracking-[0.12em] text-white">
                        Bold · Curious · Creative · Analytical
                      </p>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        From clubs and hackathons to research and real-world websites, this portfolio is designed to show both engineering range and personal style.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/40 py-4">
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex w-max gap-6 px-4"
            >
              {[...tags, ...tags, ...tags].map((item, index) => (
                <span key={`${item}-${index}`} className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  / {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="Origin Story"
              title="From Curious Student to Builder"
              description="I started engineering because I was fascinated by what happens behind the screen — how code turns logic into something visible, useful, and real. That curiosity pushed me into clubs, tech communities, public speaking, hackathons, event management, research, and product building. Over time, I moved from learning through seniors to leading teams, mentoring peers, organizing hackathons, and building projects that combine utility with ambition."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: <GraduationCap className="h-6 w-6" />,
                  title: "Student Mindset",
                  text: "I learn aggressively — through courses, projects, community work, and deep curiosity about how systems really work.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Leadership Energy",
                  text: "I grew into leadership through clubs, documentation work, operations, technical sessions, and hackathon execution.",
                },
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Dual Focus",
                  text: "I am targeting both AI and web development roles, with project experience across healthcare systems, event platforms, and research-driven work.",
                },
              ].map((item) => (
                <Card key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 text-red-400">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-[0.08em] text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="Selected Work"
              title="Projects with range"
              description="A mix of AI experiments, healthcare systems, student platforms, event websites, and freelance work. Built to show both creativity and execution."
            />

            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                      activeCategory === category
                        ? "border-red-500 bg-red-600 text-white"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="w-full lg:w-72">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="rounded-full border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <motion.div key={project.title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                  <Card className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-red-500/40 hover:bg-white/[0.05]">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-red-400">{project.category}</p>
                          <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-white">{project.title}</h3>
                        </div>
                        <div className="rounded-full border border-white/10 p-2 text-zinc-400 group-hover:text-white">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>

                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">{project.type}</p>
                      <p className="text-sm leading-7 text-zinc-400">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <Badge key={item} className="rounded-full border border-white/10 bg-black/50 text-zinc-300">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3 pt-4">
                        {project.live ? (
                          <Button asChild size="sm" className="rounded-full bg-red-600 text-white hover:bg-red-500">
                            <a href={project.live} target="_blank" rel="noreferrer">
                              Live <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
                        {project.github ? (
                          <Button asChild size="sm" variant="outline" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/5">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              Code <Github className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="Capability Stack"
              title="Skills engineered for product building"
              description="My stack spans Java and Python fundamentals, responsive frontend development, backend-oriented thinking, research-driven AI exploration, and the tools needed to ship work efficiently."
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => (
                <Card key={skill.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 text-red-400">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-[0.08em] text-white">{skill.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-zinc-300">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="AI Focus"
              title="Research, intelligent systems, and real use cases"
              description="To support AI-focused applications, this section emphasizes healthcare intelligence, multi-agent systems, analytical thinking, and research-backed project direction."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="rounded-[2rem] border border-red-500/20 bg-red-600/[0.05]">
                <CardContent className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Why AI roles fit me</p>
                  <div className="mt-6 space-y-4 text-sm leading-8 text-zinc-300">
                    <p>
                      I am deeply interested in how intelligent systems can solve real human problems, especially in healthcare, environmental monitoring, and decision support.
                    </p>
                    <p>
                      My project direction already reflects this: medical assistants, AI-enabled queue systems, and multi-agent AQI intelligence. I enjoy analytical problem solving, system design thinking, and turning ambitious ideas into practical prototypes.
                    </p>
                    <p>
                      I am actively growing toward AI engineering through Python, research exposure, backend logic, and experimentation with emerging development workflows.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                {research.map((paper) => (
                  <Card key={paper.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white">
                        <FileText className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-[0.05em] text-white">{paper.title}</h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-500">{paper.meta}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="Leadership Mode"
              title="Community, execution, and ownership"
              description="I did not only build projects — I also helped build teams, events, learning spaces, and technical communities."
            />

            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6">
                {timeline.map((item) => (
                  <Card key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                    <CardContent className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-400">{item.period}</p>
                      <h3 className="mt-3 text-xl font-black uppercase tracking-[0.06em] text-white">{item.title}</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 text-red-400">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Achievements & Recognition</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {certifications.map((item) => (
                        <Badge key={item} className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-zinc-300">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Internships</h3>
                    <div className="mt-5 space-y-4">
                      {internships.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-500">{item.duration}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              kicker="Education"
              title="Academic path"
              description="Strong academic consistency, practical project work, and a mindset built around learning by doing."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <Card key={item.school} className="rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">{item.period}</p>
                    <h3 className="mt-3 text-xl font-black uppercase tracking-[0.06em] text-white">{item.school}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Card className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-600/[0.08] to-white/[0.03]">
              <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">Contact</p>
                  <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
                    Let’s build something sharp, scalable, and real.
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-300 sm:text-base">
                    I’m open to AI roles, web development roles, internships, freelance projects, and collaborative product opportunities.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    { icon: <Mail className="h-5 w-5" />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
                    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "RayeesaMahmood", href: profile.github },
                    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "rayeesa-mahmood", href: profile.linkedin },
                    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: profile.location, href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/30 p-4 transition hover:border-red-500/40 hover:bg-black/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-red-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{item.label}</p>
                          <p className="mt-1 font-semibold text-white">{item.value}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-zinc-500" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
