import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  ArrowUpRight,
  Cpu,
  Rocket,
  Wrench,
  Waves,
  Gamepad2,
  Bot,
  GitBranch,
  MapPin,
  Languages,
  Footprints,
  BookOpen,
  Plane,
} from "lucide-react";

/* ============================================================================
   EDITABLE CONTENT
   Everything on the page is driven from the data below. To add a new project,
   push a new object into ONGOING_PROJECTS or COMPLETED_PROJECTS. To add a new
   role, push a new object into EXPERIENCE. Nothing else needs to change.
============================================================================ */

const PROFILE = {
  name: "Max Black",
  title: "Robotics, Embedded Systems, and Autonomous Control",
  location: "Charlottesville, VA",
  bio: "I'm a mechanical engineering student with a background in physical AI, autonomous control, and embedded systems. I have a deep passion for learning and love to challenge myself, whether that's coding in a new language or learning to speak a one. When I'm not in school or on a project, I love to run, bike, climb, read, and watch a movies!",
  status: "BUILDING // UVA MECH-E + CS, '27",
  email: "maxblack1222@gmail.com",
  linkedin: "https://www.linkedin.com/in/maxblack29",
  github: "https://github.com/maxblack29",
};

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Order = most recent first. This drives the vertical timeline.
const EXPERIENCE = [
  {
    id: "mcdean",
    org: "M.C. Dean",
    role: "Project Controls Engineering Intern",
    dates: "Jun 2026 — Present",
    tag: "Automation / Project Management",
    summary:
      "Modernizing legacy reporting and project risk workflows with automation and LLMs.",
    details: [
      "Architected a Python data-extraction pipeline integrated with Claude to fully automate the company's monthly reporting cycle, cutting turnaround by a week.",
      "Built a custom Monte Carlo simulation engine to model probabilistic schedule outcomes and improve forecasting accuracy.",
      "Engineered an LLM-driven Schedule Risk Analysis tool that accelerates project timeline evaluations.",
    ],
    stack: ["Python", "Claude API", "Automation", "Monte Carlo", "SRA"],
  },
  {
    id: "cral",
    org: "CRAL Lab, UVA",
    role: "Autonomous Control Systems Researcher",
    dates: "Feb 2026 — Present",
    tag: "Robotics / Controls",
    summary:
      "Researching Vector-Field Control Barrier Functions for high-speed collision avoidance under Dr. Rohan Chandra.",
    details: [
      "Compared traditional distance-based CBFs against Vector-Field CBFs for high-speed collision avoidance.",
      "Formulated and integrated kinematic constraints — deceleration limits, velocity bounds, effective inertia — to guarantee forward invariance in dynamic environments.",
      "Results better represent how VFCBF can be applied to autonomous driving and obstacle detection.",
    ],
    stack: ["Python", "Kinematics", "Dynamics", "Linear Algebra"],
  },
  {
    id: "reacting-flow",
    org: "UVA Reacting Flow Laboratory",
    role: "Detonation Research Assistant & SWE Intern",
    dates: "May 2025 — Oct 2025",
    tag: "Research / Automation",
    summary:
      "Automated experiment control for a hypersonic detonation facility.",
    details: [
      "Built a Python/Qt GUI to automate experiment control, halving required personnel and improving test repeatability. Presented the system to UVA engineering faculty.",
      "Integrated solenoid valves with a National Instruments DAQ and Alicat mass-flow controllers, cutting manual intervention by 75%.",
      "Built a companion tkinter GUI to streamline troubleshooting for the Alicat controllers.",
    ],
    stack: ["Python", "Qt", "tkinter", "NI DAQ", "Control Systems"],
  },
  {
    id: "victor",
    org: "VICTOR Lab, UVA",
    role: "Robotics Research Assistant",
    dates: "Aug 2024 — Jan 2025",
    tag: "Robotics / Research",
    summary:
      "Naval Research–sponsored Hybrid Humanoid Robot for stair navigation aboard Navy vessels.",
    details: [
      "Collaborated with a multidisciplinary team of master's students and postdocs to design a humanoid robot capable of autonomously navigating shipboard stairways.",
      "Designed a biologically-inspired hand-to-wheel mechanism using pneumatic actuation to improve stair-climbing performance.",
    ],
    stack: ["Soft Robotics", "Pneumatics", "Mechanism Design"],
  },
  {
    id: "motorsports",
    org: "Virginia Motorsports Education",
    role: "Mechanical Engineer",
    dates: "Aug 2023 — May 2024",
    tag: "Mechanical",
    summary:
      "Low Voltage sub-team: driver display design, powertrain and braking research.",
    details: [
      "Contributed to driver display design and supported powertrain and braking system research for UVA's competitive motorsports team.",
    ],
    stack: ["Mechanical Design"],
  },
];

// Projects still active / in progress.
const ONGOING_PROJECTS = [
  {
    id: "vfcbf",
    icon: Waves,
    title: "Vector-Field Control Barrier Functions",
    org: "CRAL Lab · UVA",
    period: "Feb 2026 — Present",
    description:
      "Comparing traditional distance-based CBFs against Vector-Field CBFs for high-speed collision avoidance, with kinematic constraints (deceleration limits, velocity bounds, effective inertia) to guarantee forward invariance.",
    stack: ["Python", "Kinematics", "Linear Algebra", "Controls"],
    category: "Robotics",
  },
];

// Wrapped-up builds. Note: the LLM-driven SRA tool is intentionally left out
// here since it's already covered in the Experience timeline above.
const COMPLETED_PROJECTS = [
  {
    id: "hybrid-humanoid-robot",
    icon: Bot,
    title: "Hybrid Humanoid Robot for Shipboard Stair Navigation",
    org: "VICTOR Lab · UVA",
    period: "Aug 2024 — Jan 2025",
    description:
      "Naval Research–sponsored humanoid robot designed to autonomously navigate shipboard stairways. Collaborated with a multidisciplinary team of master's students and postdocs, and designed a biologically-inspired hand-to-wheel mechanism using pneumatic actuation to improve stair-climbing performance.",
    stack: ["Soft Robotics", "Pneumatics", "Mechanism Design", "SolidWorks"],
    category: "Robotics",
    media: {
      content: [
        "During my second year of college, I got involved with the Victor Lab at UVA to learn what the mechanical design side of robotics looked like. Over the semester, I developed a few biologically inspired hand-to-wheel mechanisms with a focus around pneumatically actuated fingers.",
        "I learned what it was like to work in a truly fast paced environment. Everyday I'd go in, sit next to my postdoc, design for hours in SolidWorks, present my current inspiration, and pivot based on his feedback. There was always something to tweak and improve, which increased my interest in the field.",
        "I had a couple noteworthy designs throughout the semester. My first iteration was truly something. I was new to solidworks and design and it was clear...",
        {
          src: "/hybrid-humanoid-robot/v1-first-iteration.png",
          alt: "First-iteration SolidWorks cross-section of the hand-to-wheel mechanism",
        },
        "By the middle of the semester, I was preparing to take my CSWA and was drastically more confident in my modeling abilities.",
        {
          src: "/hybrid-humanoid-robot/v2-exploded-view.png",
          alt: "Exploded view of the mid-semester design, reliant on hinges and electromagnets",
        },
        "However, I'd overengineered the mechanism severely. I was completely reliant on mechanical hinges, electromagnets, and perfect tolerances. In my final design, I went back to the basics. Since I was on crunch time, I sketched up a cad quickly and began iterating through my pneumatically actuated finger design.",
        {
          src: "/hybrid-humanoid-robot/v3-soft-finger.png",
          alt: "Final pneumatically actuated soft finger design",
        },
        "Who would've thought that I'd spend my final few weeks in the US 3d printing and creating soft fingers? Certainly not me, but that's what I did.",
        {
          src: "/hybrid-humanoid-robot/physical-prototype.jpg",
          alt: "3D-printed soft finger prototype, about 50% complete",
        },
        "By the time the semester was over, I had completed around 50% of the physical prototype before we ran into material delays. This project is a large part of why I'm so passionate about research and robotics today.",
      ],
    },
  },
  {
    id: "spin2-game",
    icon: Gamepad2,
    title: "Field Rush",
    org: "Mechatronics",
    period: "May 2026",
    description:
      "Built an interactive game from scratch on the Parallax Propeller 2, implementing an I2C protocol to interface an external game controller with the microcontroller. Leveraged the Propeller 2's multi-core architecture to run game logic, user input, and rendering as fully isolated parallel processes across separate cogs — achieving deterministic timing and zero-latency performance without an OS or scheduler to lean on.",
    stack: ["Spin2", "Propeller 2", "I2C", "Parallel Processing", "Embedded Systems"],
    category: "Embedded",
    media: {
      video: "/field-rush/gameplay.mp4",
      content: [
        "In the spring of my third year, I took a course called Mechatronics. Essentially, this was electronics 101 for mechanical engineers, a crash course to get us mechE's familiar with what mechatronic systems look like. Our final project, which ultimately took around a month, was creating a video game meant to run within the dialog box of the Propeller 2 using Spin2, the chip's native language.",
        "By using I2C to connect and communicate to an old wii remote, my partner and I created a mashup of Space Invaders and Galaga, with a twist. The programming of the game was 10x more tedious than coding with a true high level language. The spin2 architecture forced me to learn core management, when to start a new cog, how I could create multiple timers and actions, and (worst of all) bit math.",
        {
          src: "/field-rush/field-rush-gameplay.jpg",
          alt: "Gameplay screenshot showing the Virginia end zone with an FSU logo target",
        },
        "The game was based off of the field rush during the Virginia vs. Florida State game in the fall of 2025 with, undebatably, the best field rush the ACC has ever seen. If you \"upset\" the Florida bench by shooting the FSU logo 5 times, a field rush initiates.",
        {
          src: "/field-rush/field-rush-fieldstorm.jpg",
          alt: "Pixel-art crowd rushing the field",
        },
        "Given the time, we might've made this look a bit better..",
        "The game itself, although incredibly frustrating at times, truly taught me the importance of organized and thoughtful code. Especially when you began incorporating positional math and counting pixels on the screen, some of those Spin2 lines were ridiculously long. However, this project was incredibly rewarding. The game was coded by my partner and I, not AI, and it felt good to be creative while truly testing ourselves. An example of how the game movement worked is attached below.",
      ],
    },
  },
  {
    id: "thermal-bottle",
    icon: Wrench,
    title: "Transient Heat Transfer Optimization",
    org: "UVA Engineering Design Competition",
    period: "May 2026",
    description:
      "Designed and built a thermally insulating water bottle from the ground up for a university-wide transient heat-transfer design competition, modeling heat loss over time to drive material and geometry choices — placed 1st out of 25 competing teams.",
    stack: ["Heat Transfer", "Mechanical Design", "Thermal Modeling", "Scripting"],
    category: "Mechanical",
  },
  {
    id: "detonation-gui",
    icon: Cpu,
    title: "Hypersonic Detonation Facility Automation",
    org: "Reacting Flow Laboratory · UVA",
    period: "May 2025 — Oct 2025",
    description:
      "A Python/Qt GUI that automates control of a hypersonic detonation experiment, integrating solenoid valves, an NI DAQ system, and Alicat mass-flow controllers to cut manual intervention by 75%.",
    stack: ["Python", "Qt", "NI DAQ", "Alicat"],
    category: "Software",
    media: {
      content: [
        "Since my first year, I had been curious about software engineering and computer science. I liked the problem solving aspect, it felt like a puzzle. Engineering is a creative outlet, and when I think of the projects I want to create, most use a computer as its medium.",
        "The summer of my 2nd year, I was involved in Dr. Chloe Dedic's Reacting Flow lab. My main goal that summer was to automate a detonation experiment. There was a control system consisting of mass flow controllers, which allowed for different fuel mixtures, solenoids, meant for directional control of the fuel, and an NI DAQ, the data acquisition system. I created a few GUI's using Qt and tkinter, the control code, and began working on automated data extraction and analysis.",
        {
          src: "/detonation-gui/gui-screenshot.png",
          alt: "Qt control GUI showing MFC controllers, solenoid states, and test controls",
        },
        "By the end of the summer, I had cut the necessary research personnel down from five experimenters to one, and the one researcher didn't even need to be in the room. They only needed a computer with all the physical connections. These detonations were incredibly loud, and this manpower reduction was a huge increase in safety. Overall, the lab encouraged more exploration of embedded systems and controls. I enjoyed seeing the code that I wrote map to a physical movement, like opening a mass flow controller or sending power to a solenoid.",
        "Not only did the lab continue to feed my interest in software, but my love for research grew stronger as well. How could you not be interested in creating a shockwave that propagates faster than the speed of sound?",
        {
          src: "/detonation-gui/detonation-photo.jpg",
          alt: "Detonation experiment firing inside the test enclosure",
        },
      ],
    },
  },
  {
    id: "cavsat",
    icon: Rocket,
    title: "CavSat Telemetry Visualization Suite",
    org: "UVA CavSat",
    period: "Jan 2024 — May 2026",
    description:
      "Python GUI frameworks to manage, visualize, and track simulated telemetry data for a 6U CubeSat designed to monitor ozone depletion in low Earth orbit.",
    stack: ["Python", "GUI Development", "Data Visualization"],
    category: "Aerospace / Software",
  },
];

const SKILLS = {
  Languages: ["Python", "MATLAB", "Java", "R", "HTML/CSS"],
  "Frameworks & Tools": [
    "React",
    "Tailwind",
    "Qt",
    "Tkinter",
    "Git",
    "Claude API",
  ],
  "Engineering Software": [
    "SolidWorks",
    "Fusion 360",
    "LabVIEW",
    "Primavera P6",
  ],
  Hardware: [
    "Arduino",
    "Microcontrollers",
    "Spin2 / Propeller 2",
    "NI DAQ",
    "Solenoid Control",
  ],
  "Engineering Concepts": [
    "Autonomous Control Systems",
    "Control Barrier Functions",
    "Soft Robotics",
    "Kinematics & Dynamics",
    "Multibody Mechanics and Design",
  ],
};

const BEYOND_THE_LAB = [
  {
    icon: Footprints,
    label: "Currently training for the Richmond Marathon.",
  },
  {
    icon: Languages,
    label:
      "Avid language learner (ACTFL Advanced Low in Spanish), currently looking to learn Italian.",
  },
  {
    icon: BookOpen,
    label: "Reading: Kafka on the Shore by Haruki Murakami.",
  },
  {
    icon: Plane,
    label:
      "Spent spring 2025 studying abroad — I absolutely love to travel.",
  },
];

/* ============================================================================
   STYLE TOKENS — the "blueprint" system
   Paper background, near-black ink, a single deep control-system blue, and a
   sparing amber marker used only for emphasis (like a schematic annotation).
============================================================================ */

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --paper: #FAFAF6;
    --paper-dim: #F2F1E9;
    --ink: #15181D;
    --muted: #6B6F76;
    --line: #DEDCD0;
    --accent: #24417A;
    --accent-bright: #2F6FE0;
    --flag: #C9822E;
  }
  .font-display { font-family: 'Space Grotesk', sans-serif; }
  .font-body { font-family: 'Inter', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }

  .blueprint-grid {
    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .node-diamond {
    transform: rotate(45deg);
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
  }
`;

/* ============================================================================
   NAV
============================================================================ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    if (window.location.hash.startsWith("#project/")) {
      window.location.hash = href;
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 font-body transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--paper)]/90 backdrop-blur border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("#top")}
          className="font-display font-semibold text-lg tracking-tight text-[var(--ink)] flex items-center gap-2"
        >
          <span className="w-2 h-2 rotate-45 bg-[var(--accent)] inline-block" />
          Max Black
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent-bright)] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-[var(--ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[var(--paper)] border-b border-[var(--line)] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-mono text-sm uppercase tracking-widest text-[var(--muted)] text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ============================================================================
   HERO
============================================================================ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--flag)] animate-pulse" />
          {PROFILE.status}
        </div>

        <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-[var(--ink)] leading-[0.98] tracking-tight max-w-3xl">
          {PROFILE.name}
        </h1>
        <p className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-[var(--accent-bright)] mt-5">
          {PROFILE.title}
        </p>

        <p className="font-body text-[var(--muted)] text-lg leading-relaxed max-w-2xl mt-8">
          {PROFILE.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[var(--ink)] text-[var(--paper)] px-5 py-3 hover:bg-[var(--accent)] transition-colors duration-200"
          >
            <Mail size={15} />
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-[var(--line)] px-4 py-3 hover:border-[var(--ink)] transition-colors duration-200"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-[var(--line)] px-4 py-3 hover:border-[var(--ink)] transition-colors duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   SECTION HEADER (shared)
============================================================================ */

function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-px bg-[var(--accent)]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-[var(--ink)] tracking-tight">
        {title}
      </h2>
      {blurb && (
        <p className="font-body text-[var(--muted)] mt-3 max-w-xl">{blurb}</p>
      )}
    </div>
  );
}

/* ============================================================================
   EXPERIENCE — vertical "signal trace" timeline
============================================================================ */

function TimelineItem({ item, isLast }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-10 md:pl-14">
      {!isLast && (
        <span className="absolute left-[7px] md:left-[11px] top-6 bottom-[-2.5rem] w-px bg-[var(--line)]" />
      )}
      <span className="absolute left-0 md:left-1 top-1.5 w-4 h-4 node-diamond border-2 border-[var(--accent)] bg-[var(--paper)]" />

      <button
        onClick={() => setExpanded((v) => !v)}
        className="text-left w-full group pb-10"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            {item.dates}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--flag)] border border-[var(--flag)]/40 px-2 py-0.5">
            {item.tag}
          </span>
        </div>

        <h3 className="font-display font-semibold text-xl md:text-2xl text-[var(--ink)] mt-2 flex items-center gap-2 group-hover:text-[var(--accent-bright)] transition-colors duration-200">
          {item.role}
          <ArrowUpRight
            size={18}
            className={`transition-transform duration-200 ${
              expanded ? "rotate-45" : ""
            }`}
          />
        </h3>
        <p className="font-mono text-sm text-[var(--accent)] mt-1">{item.org}</p>
        <p className="font-body text-[var(--muted)] mt-3 max-w-xl">
          {item.summary}
        </p>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 mb-4">
              {item.details.map((d, i) => (
                <li
                  key={i}
                  className="font-body text-sm text-[var(--muted)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--accent)]/40"
                >
                  {d}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] bg-[var(--paper-dim)] px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]/70 mt-2 inline-block">
          {expanded ? "Hide details" : "View details"}
        </span>
      </button>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeader
        eyebrow="Log"
        title="Experience"
        blurb="Reverse-chronological, like a well-kept lab notebook. Tap any entry to expand."
      />
      <div>
        {EXPERIENCE.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   PROJECTS — grid of cards
============================================================================ */

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <a
      href={`#project/${project.id}`}
      className="group relative bg-[var(--paper)] p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-[6px_6px_0_0_var(--accent)]"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 flex items-center justify-center border border-[var(--line)] text-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--paper)] group-hover:border-[var(--accent)]">
          <Icon size={18} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
          {project.category}
        </span>
      </div>

      <h3 className="font-display font-semibold text-[var(--ink)] leading-snug text-lg">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-[var(--accent)] mt-1">
        {project.org} · {project.period}
      </p>

      <p className="font-body text-[var(--muted)] leading-relaxed mt-4 flex-1 text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[var(--line)]">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] bg-[var(--paper-dim)] px-2 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  );
}

function ProjectSubsection({ eyebrow, title, projects }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-4 h-px bg-[var(--accent)]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </span>
        <h3 className="font-display font-semibold text-xl text-[var(--ink)] ml-1">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-[var(--line)]"
    >
      <SectionHeader
        eyebrow="Builds"
        title="Projects"
        blurb="A working set of the systems, tools, and mechanisms I've built across labs, internships, and weekends."
      />
      <ProjectSubsection
        eyebrow="In progress"
        title="Ongoing projects"
        projects={ONGOING_PROJECTS}
      />
      <ProjectSubsection
        eyebrow="Shipped"
        title="Completed projects"
        projects={COMPLETED_PROJECTS}
      />
    </section>
  );
}

/* ============================================================================
   PROJECT DETAIL — standalone "blog" page for a single project
   To publish real content for a project, add a `media` object to its entry
   in ONGOING_PROJECTS / COMPLETED_PROJECTS:
     media: {
       video: "https://www.youtube.com/embed/VIDEO_ID", // or a local file, e.g. "/project/clip.mp4"
       content: [
         "A paragraph of body text.",
         { src: "/path/to/shot.png", alt: "..." },
         "Another paragraph — renders after the image above.",
       ],
     }
   `content` renders top-to-bottom in the order given, so mix strings
   (paragraphs) and { src, alt } objects (images) freely to interleave them.
   `video` always renders last, below all of `content`. A URL starting with
   "http" embeds as an iframe (YouTube/Vimeo); anything else is treated as a
   local video file and rendered with a native <video> tag. Until `video` or
   `content` is set, this page shows the "Updates coming soon" placeholder.
============================================================================ */

function ProjectMedia({ project }) {
  const media = project.media;
  const video = media?.video;
  const content = media?.content ?? [];
  const hasContent = Boolean(video) || content.length > 0;

  if (!hasContent) {
    return (
      <div className="mt-16 border border-dashed border-[var(--line)] rounded-sm py-24 flex items-center justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          Updates coming soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 space-y-6 max-w-2xl">
      {content.map((block, i) =>
        typeof block === "string" ? (
          <p key={i} className="font-body text-[var(--muted)] leading-relaxed">
            {block}
          </p>
        ) : (
          <img
            key={i}
            src={block.src}
            alt={block.alt}
            className="w-full h-auto border border-[var(--line)] object-cover"
          />
        )
      )}

      {video &&
        (video.startsWith("http") ? (
          <div className="aspect-video w-full border border-[var(--line)] overflow-hidden bg-[var(--paper-dim)]">
            <iframe
              src={video}
              title={`${project.title} video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={video}
            controls
            playsInline
            className="w-full h-auto border border-[var(--line)]"
          />
        ))}
    </div>
  );
}

function ProjectDetailPage({ project }) {
  const Icon = project.icon;

  return (
    <article className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <a
        href="#projects"
        onClick={() => {
          setTimeout(() => {
            const el = document.querySelector("#projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent-bright)] transition-colors duration-200 mb-10"
      >
        <ArrowUpRight size={14} className="rotate-[225deg]" />
        Back to projects
      </a>

      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 flex items-center justify-center border border-[var(--accent)] text-[var(--accent)]">
          <Icon size={18} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
          {project.category}
        </span>
      </div>

      <h1 className="font-display font-semibold text-3xl md:text-5xl text-[var(--ink)] tracking-tight leading-tight">
        {project.title}
      </h1>
      <p className="font-mono text-sm text-[var(--accent)] mt-3">
        {project.org} · {project.period}
      </p>

      <p className="font-body text-[var(--muted)] text-lg leading-relaxed mt-8 max-w-2xl">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--line)]">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] bg-[var(--paper-dim)] px-2 py-1"
          >
            {s}
          </span>
        ))}
      </div>

      <ProjectMedia project={project} />
    </article>
  );
}

/* ============================================================================
   ABOUT / SKILLS
============================================================================ */

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-[var(--line)]"
    >
      <SectionHeader eyebrow="Spec sheet" title="Skills & background" />

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
              {group}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-body text-sm px-3 py-1.5 transition-colors duration-200 text-[var(--ink)] border border-[var(--line)] hover:border-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--line)] pt-10">
        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-5">
          Beyond the lab
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEYOND_THE_LAB.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <Icon size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <p className="font-body text-sm text-[var(--muted)] leading-relaxed">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   CONTACT / FOOTER
============================================================================ */

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[var(--accent-bright)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-bright)]">
            Get in touch
          </span>
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-2xl">
          Building something in robotics or autonomy? Let's talk.
        </h2>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[var(--paper)] text-[var(--ink)] px-5 py-3 hover:bg-[var(--accent-bright)] hover:text-[var(--paper)] transition-colors duration-200"
          >
            <Mail size={15} />
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-white/20 px-4 py-3 hover:border-white/60 transition-colors duration-200"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-white/20 px-4 py-3 hover:border-white/60 transition-colors duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-white/40 mt-16">
          <MapPin size={13} />
          {PROFILE.location}
          <span className="mx-2">·</span>
          <GitBranch size={13} />
          Built with React + Tailwind
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   APP
============================================================================ */

const ALL_PROJECTS = [...ONGOING_PROJECTS, ...COMPLETED_PROJECTS];

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

export default function Portfolio() {
  const hash = useHashRoute();
  const projectMatch = hash.match(/^#project\/(.+)$/);
  const activeProject = projectMatch
    ? ALL_PROJECTS.find((p) => p.id === projectMatch[1])
    : null;

  useEffect(() => {
    if (activeProject) window.scrollTo(0, 0);
  }, [activeProject]);

  return (
    <div className="min-h-screen bg-[var(--paper)] font-body">
      <style>{fontStyles}</style>
      <Nav />
      {activeProject ? (
        <ProjectDetailPage project={activeProject} />
      ) : (
        <>
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}
