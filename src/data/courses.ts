const imgGraphicDesign =
  "https://www.figma.com/api/mcp/asset/6188dcce-e472-4fdc-9fcc-39589840876d";
const imgGraphicDesignOverlay =
  "https://www.figma.com/api/mcp/asset/25e8227a-674d-485e-afdb-3a77a37cda6a";
const imgDigitalMarketing =
  "https://www.figma.com/api/mcp/asset/62bd03c7-52ad-48b2-b698-442b7ec77b94";
const imgWebDevelopment =
  "https://www.figma.com/api/mcp/asset/4ea26847-a53b-40ae-838e-7537bd29ad1a";
const imgModulesIcon =
  "https://www.figma.com/api/mcp/asset/785f4460-3400-4038-94ea-51f8ffdc3291";
const imgDurationIcon =
  "https://www.figma.com/api/mcp/asset/f32565a6-9f24-4f82-a03d-3660fd91ff67";
const imgCertificateIcon =
  "https://www.figma.com/api/mcp/asset/5a8cc306-2c87-4492-83df-006c6bb0376b";

export const courseMeta = [
  { icon: imgModulesIcon, label: "10 Modules" },
  { icon: imgDurationIcon, label: "3 Months" },
  { icon: imgCertificateIcon, label: "Certificate" },
];

type CourseModule = {
  title: string;
  summary: string;
};

type CourseTrainer = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Course = {
  slug: string;
  tag: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  overlayImage?: string;
  alt: string;
  imageClassName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  feeLabel: string;
  duration: string;
  sessionDuration: string;
  classSchedule: string;
  mode: string;
  enrolled: string;
  overviewTitle: string;
  overviewParagraph: string;
  outcomes: string[];
  modules: CourseModule[];
  featureColumns: { title: string; items: string[] }[];
  trainers: CourseTrainer[];
};

const coreCourses: Course[] = [
  {
    slug: "mastering-graphic-designing",
    tag: "Graphic Designing",
    title: "Mastering Graphic Designing",
    shortTitle: "Graphic Design Mastery",
    description:
      "Build strong design fundamentals, master industry tools, and create portfolio-ready work with real-world briefs.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
    heroEyebrow: "Career-Focused Design Program",
    heroTitle: "Mastering Graphic Designing for Real Client Work",
    heroDescription:
      "A mentor-led graphic design track built to move beginners from software basics to polished portfolio pieces, campaign assets, and client-ready presentation skills.",
    feeLabel: "Admission Fee Just ₹1000",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    classSchedule: "Monday to Friday",
    mode: "Offline + Mentor Support",
    enrolled: "350+ Learners",
    overviewTitle: "What you'll learn",
    overviewParagraph:
      "Learn core visual communication, typography, layout systems, branding, and production workflows through guided assignments that reflect real agency and freelance scenarios.",
    outcomes: [
      "Design polished social posts, flyers, and campaign graphics",
      "Use Adobe tools with stronger speed, structure, and confidence",
      "Create portfolio-ready branding and presentation case studies",
      "Work with briefs, revisions, and delivery formats used in real projects",
    ],
    modules: [
      {
        title: "Design Foundations & Visual Thinking",
        summary:
          "Understand layout, spacing, composition, balance, contrast, hierarchy, and the principles behind clear visual communication.",
      },
      {
        title: "Typography, Grids & Color Systems",
        summary:
          "Build stronger type pairing instincts, responsive grid habits, and practical color systems for digital and brand use cases.",
      },
      {
        title: "Photoshop & Illustrator Workflow",
        summary:
          "Use core toolsets to retouch images, build graphic assets, shape illustrations, and create reusable design files efficiently.",
      },
      {
        title: "Branding & Identity Applications",
        summary:
          "Translate strategy into logos, brand elements, supporting assets, and multi-surface systems that feel consistent.",
      },
      {
        title: "Portfolio Projects & Presentation",
        summary:
          "Turn your strongest work into polished case studies with rationale, mockups, and presentation framing for hiring conversations.",
      },
    ],
    featureColumns: [
      {
        title: "Program Structure",
        items: [
          "Designed for beginners and early-career creatives",
          "Project-based assignments every week",
          "Dedicated mentor review and correction",
          "Portfolio-focused output, not just software practice",
        ],
      },
      {
        title: "Career Support",
        items: [
          "Resume and portfolio review support",
          "Mock interview preparation for design roles",
          "Guidance for freelance and agency workflows",
          "Help positioning your projects for hiring conversations",
        ],
      },
    ],
    trainers: [
      {
        name: "Nihal Rahman",
        role: "Senior Brand Designer",
        bio: "Works across brand identity systems, campaign design, and portfolio coaching for early-career designers.",
        image: "/images/hero-1.png",
      },
      {
        name: "Anjana Fathima",
        role: "Visual Communication Mentor",
        bio: "Focuses on typography, layout clarity, and presentation-ready design systems for digital brands.",
        image: "/images/who-we-are.png",
      },
    ],
  },
  {
    slug: "mastering-digital-marketing",
    tag: "Digital Marketing",
    title: "Mastering Digital Marketing",
    shortTitle: "Digital Marketing Mastery",
    description:
      "Build strong campaign thinking, platform fluency, and execution skills that translate into portfolio-ready results.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
    heroEyebrow: "Mentor-Led Growth Program",
    heroTitle: "Mastering Digital Marketing for Measurable Brand Growth",
    heroDescription:
      "A practical program for learners who want to understand content, performance, reporting, and campaign planning through structured, job-oriented execution.",
    feeLabel: "Admission Fee Just ₹1000",
    duration: "3 Months",
    sessionDuration: "2 Hours Daily",
    classSchedule: "Monday to Friday",
    mode: "Offline + Live Practice",
    enrolled: "420+ Learners",
    overviewTitle: "What you'll learn",
    overviewParagraph:
      "Learn the systems behind content strategy, platform execution, paid campaign thinking, reporting, and growth-focused communication that supports real businesses.",
    outcomes: [
      "Plan and execute digital campaigns with clearer structure",
      "Develop reporting habits tied to outcomes and optimization",
      "Create content systems for social, paid, and organic channels",
      "Build portfolio-ready campaign exercises and strategy presentations",
    ],
    modules: [
      {
        title: "Digital Marketing Foundations",
        summary:
          "Understand core channels, customer journeys, messaging, positioning, and the role each platform plays in a growth strategy.",
      },
      {
        title: "Content Strategy & Social Execution",
        summary:
          "Create content calendars, content pillars, post structures, and channel-aware formats with real workflow discipline.",
      },
      {
        title: "Performance Marketing Essentials",
        summary:
          "Learn campaign setup logic, targeting, creative testing, optimization loops, and the metrics that matter most.",
      },
      {
        title: "Analytics & Reporting",
        summary:
          "Read campaign data, build summary reports, and translate numbers into next actions with stronger decision-making clarity.",
      },
      {
        title: "Campaign Presentation & Portfolio",
        summary:
          "Package your campaign thinking into presentations, dashboards, and case-study style outputs that support hiring conversations.",
      },
    ],
    featureColumns: [
      {
        title: "Program Structure",
        items: [
          "Built for beginners, freelancers, and career switchers",
          "Hands-on assignments tied to campaign logic",
          "Mentor review on planning, content, and reporting",
          "Portfolio-first approach to execution and presentation",
        ],
      },
      {
        title: "Career Support",
        items: [
          "Mock interviews for digital marketing roles",
          "LinkedIn and resume guidance",
          "Career conversations around in-house vs agency tracks",
          "Support translating project work into job-ready proof",
        ],
      },
    ],
    trainers: [
      {
        name: "Teena Rahul",
        role: "Growth Marketing Mentor",
        bio: "Specializes in campaign strategy, paid acquisition, and portfolio-building for early digital marketers.",
        image: "/images/hero-2.png",
      },
      {
        name: "Midhun Paul",
        role: "Performance Marketing Lead",
        bio: "Focuses on measurement, optimization frameworks, and hands-on execution across modern digital channels.",
        image: "/images/hero-3.png",
      },
    ],
  },
  {
    slug: "mastering-web-development",
    tag: "Web Development",
    title: "Mastering Web Development",
    shortTitle: "Web Development Mastery",
    description:
      "Build strong coding fundamentals, modern workflows, and project-based confidence with real-world web briefs.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
    heroEyebrow: "Project-Driven Coding Program",
    heroTitle: "Mastering Web Development with Real Product Workflows",
    heroDescription:
      "A practical development track focused on responsive UI, clean component systems, frontend fundamentals, and product-style project delivery.",
    feeLabel: "Admission Fee Just ₹1000",
    duration: "4 Months",
    sessionDuration: "2 Hours Daily",
    classSchedule: "Monday to Friday",
    mode: "Offline + Guided Builds",
    enrolled: "390+ Learners",
    overviewTitle: "What you'll learn",
    overviewParagraph:
      "Learn HTML, CSS, JavaScript, responsive development, component thinking, and frontend workflow habits through structured builds that look and feel production-ready.",
    outcomes: [
      "Build responsive landing pages and UI sections cleanly",
      "Understand component structure and reusable frontend patterns",
      "Use modern workflow habits for iteration, polish, and delivery",
      "Create portfolio-ready projects that feel closer to product work",
    ],
    modules: [
      {
        title: "Web Foundations & Semantic Structure",
        summary:
          "Cover HTML structure, accessibility basics, clean markup habits, and the foundations needed for maintainable interfaces.",
      },
      {
        title: "Styling Systems & Responsive Layout",
        summary:
          "Work through spacing, typography, responsive grids, cards, sections, and visual polish using modern CSS patterns.",
      },
      {
        title: "JavaScript Interaction & UI Logic",
        summary:
          "Add state, event handling, small interactions, toggles, filtering, and the logic needed to make interfaces feel real.",
      },
      {
        title: "Component-Based Development",
        summary:
          "Break interfaces into reusable components and connect them into cohesive page builds with cleaner structure and reuse.",
      },
      {
        title: "Project Delivery & Portfolio Framing",
        summary:
          "Package your strongest builds into portfolio-ready projects with attention to UI polish, explanation, and delivery quality.",
      },
    ],
    featureColumns: [
      {
        title: "Program Structure",
        items: [
          "Hands-on frontend builds from the first phase",
          "Realistic section and page-level implementation exercises",
          "Mentor feedback on code quality and UI polish",
          "Portfolio output that mirrors product implementation work",
        ],
      },
      {
        title: "Career Support",
        items: [
          "Interview prep for junior web and frontend roles",
          "Review of project explanation and code walkthrough skills",
          "Guidance on portfolio presentation and hiring readiness",
          "Support translating static builds into stronger case studies",
        ],
      },
    ],
    trainers: [
      {
        name: "Sabir K",
        role: "Frontend Engineer",
        bio: "Works on UI systems, responsive builds, and practical frontend mentoring with a product implementation focus.",
        image: "/images/hero-3.png",
      },
      {
        name: "Fathima Nisa",
        role: "UI Development Mentor",
        bio: "Focuses on layout systems, frontend polish, and helping learners present projects with stronger clarity.",
        image: "/images/hero-1.png",
      },
    ],
  },
];

export const courses: Course[] = [
  ...coreCourses,
  {
    ...coreCourses[0],
    slug: "graphic-design-for-social-media",
    title: "Graphic Design for Social Media",
    shortTitle: "Social Media Design",
    description:
      "Learn to create fast, polished visual content for campaigns, brands, and digital-first communication.",
    heroTitle: "Graphic Design for Social Media That Feels Brand-Ready",
    heroDescription:
      "A practical, output-first track focused on social formats, visual consistency, campaign speed, and stronger presentation for digital-first brands.",
  },
  {
    ...coreCourses[1],
    slug: "performance-marketing-essentials",
    title: "Performance Marketing Essentials",
    shortTitle: "Performance Marketing",
    description:
      "Understand paid campaigns, measurement, audience targeting, and optimization through practical assignments.",
    heroTitle: "Performance Marketing Essentials for Better Campaign Decisions",
    heroDescription:
      "Learn the language of paid growth, campaign structure, testing, and reporting through guided execution and clearer performance thinking.",
  },
  {
    ...coreCourses[2],
    slug: "frontend-web-foundations",
    title: "Frontend Web Foundations",
    shortTitle: "Frontend Foundations",
    description:
      "Build responsive interfaces, clean components, and real web projects with structured mentor guidance.",
    heroTitle: "Frontend Web Foundations for Cleaner, More Confident Builds",
    heroDescription:
      "A structured coding track focused on responsive layouts, UI sections, component thinking, and implementation habits that feel job-relevant.",
  },
  {
    ...coreCourses[0],
    slug: "branding-and-visual-identity",
    title: "Branding and Visual Identity",
    shortTitle: "Branding & Identity",
    description:
      "Create identity systems, brand assets, and presentation-ready outputs that reflect practical industry workflows.",
    heroTitle: "Branding and Visual Identity with Real Presentation Quality",
    heroDescription:
      "Move beyond isolated visuals and learn how to build identity systems, branded assets, and stronger client-facing presentation work.",
  },
  {
    ...coreCourses[1],
    slug: "content-and-social-strategy",
    title: "Content and Social Strategy",
    shortTitle: "Content Strategy",
    description:
      "Plan content with platform-specific thinking and produce work that supports measurable brand growth.",
    heroTitle: "Content and Social Strategy for Consistent Digital Growth",
    heroDescription:
      "Build the planning mindset behind stronger digital content systems, platform-specific execution, and measurable communication outcomes.",
  },
  {
    ...coreCourses[2],
    slug: "responsive-website-production",
    title: "Responsive Website Production",
    shortTitle: "Responsive Production",
    description:
      "Translate design into working pages, build layouts cleanly, and strengthen development confidence through projects.",
    heroTitle: "Responsive Website Production with Better Frontend Workflow Discipline",
    heroDescription:
      "Learn how to turn design intent into clean responsive builds with stronger structure, layout thinking, and practical delivery habits.",
  },
  {
    ...coreCourses[0],
    slug: "portfolio-design-projects",
    title: "Portfolio Design Projects",
    shortTitle: "Portfolio Projects",
    description:
      "Develop presentation-quality case studies and polished pieces that help your portfolio feel job-ready.",
    heroTitle: "Portfolio Design Projects that Feel Hiring-Ready",
    heroDescription:
      "Focus on curation, presentation, mockups, and stronger storytelling so your design work reads as clear, credible, and job-ready.",
  },
  {
    ...coreCourses[1],
    slug: "digital-campaign-planning",
    title: "Digital Campaign Planning",
    shortTitle: "Campaign Planning",
    description:
      "Learn how to build campaign structures, align messaging, and track outcomes across core channels.",
    heroTitle: "Digital Campaign Planning with Better Structure and Reporting Logic",
    heroDescription:
      "Understand how campaigns are shaped, sequenced, executed, and evaluated so your marketing work becomes clearer and more strategic.",
  },
  {
    ...coreCourses[2],
    slug: "full-website-build-workflow",
    title: "Full Website Build Workflow",
    shortTitle: "Website Build Workflow",
    description:
      "Move from fundamentals to finished projects using practical planning, coding, and delivery workflows.",
    heroTitle: "Full Website Build Workflow from Foundations to Delivery",
    heroDescription:
      "Build stronger implementation discipline by moving through planning, section builds, polish, and final project presentation with guidance.",
  },
  {
    ...coreCourses[0],
    slug: "creative-design-systems",
    title: "Creative Design Systems",
    shortTitle: "Design Systems",
    description:
      "Understand repeatable systems, consistency, and layout thinking while building design outputs for real use cases.",
    heroTitle: "Creative Design Systems for Consistency and Speed",
    heroDescription:
      "Learn how repeatable layout logic, reusable patterns, and stronger visual systems create more scalable design work.",
  },
  {
    ...coreCourses[1],
    slug: "analytics-for-growth",
    title: "Analytics for Growth",
    shortTitle: "Analytics for Growth",
    description:
      "Build comfort with reporting, interpretation, and marketing decisions grounded in campaign performance.",
    heroTitle: "Analytics for Growth with Clearer Reporting and Insight",
    heroDescription:
      "Strengthen your confidence with dashboards, reporting, interpretation, and growth decisions grounded in practical metrics.",
  },
  {
    ...coreCourses[2],
    slug: "practical-ui-development",
    title: "Practical UI Development",
    shortTitle: "Practical UI Dev",
    description:
      "Strengthen UI implementation skills through component-based builds and responsive project work.",
    heroTitle: "Practical UI Development with Real Section-Level Build Practice",
    heroDescription:
      "Improve your frontend implementation quality through repeated UI builds, cleaner structure, and more deliberate visual polish.",
  },
  {
    ...coreCourses[0],
    slug: "visual-communication-practice",
    title: "Visual Communication Practice",
    shortTitle: "Visual Communication",
    description:
      "Refine layout, typography, and concept presentation through guided assignments and review loops.",
    heroTitle: "Visual Communication Practice for Stronger Presentation and Clarity",
    heroDescription:
      "Sharpen your control over layout, concept framing, typography, and communication so the work lands more clearly and confidently.",
  },
  {
    ...coreCourses[1],
    slug: "platform-execution-lab",
    title: "Platform Execution Lab",
    shortTitle: "Execution Lab",
    description:
      "Get hands-on with execution tasks, optimization habits, and marketing workflows that support employability.",
    heroTitle: "Platform Execution Lab for Hands-On Campaign Confidence",
    heroDescription:
      "Build comfort with the repetition, optimization, and execution detail that stronger digital marketing work actually demands.",
  },
  {
    ...coreCourses[2],
    slug: "project-based-web-practice",
    title: "Project-Based Web Practice",
    shortTitle: "Web Practice Projects",
    description:
      "Use real briefs to improve coding accuracy, workflow confidence, and portfolio-ready development output.",
    heroTitle: "Project-Based Web Practice with Realistic Frontend Briefs",
    heroDescription:
      "Translate repeated build practice into cleaner frontend execution, stronger confidence, and better portfolio-ready work.",
  },
];
