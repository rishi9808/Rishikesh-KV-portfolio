import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
};

export const DATA = {
  name: "Rishikesh",
  initials: "K V",
  url: "https://dillion.io",
  location: "Kerala , India",
  locationLink: "https://www.google.com/maps/place/kerala",
  description:
    "Software Research Engineer and freelancer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I love building stuffs in code and have a passion for learning and sharing my knowledge with others. I have a strong background in software development and have worked on a variety of projects. I am always looking for new opportunities to learn and grow. In the past, [I pursued a degree in computer science and engineering](/#education), [interned at  tech companies in the field of AI and web development](/#education), and [competed in over 2 hackathons for fun](/#hackathons).",
  avatarUrl: "/profile.jpeg",
  skills: ["React", "Typescript", "Node.js", "Python", "Figma", "MongoDB"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rishikeshkaroth@gmail.com",
    tel: "+91 7994887566",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishi9808",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishikesh-kv/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RishikeshKV1",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rishikeshkaroth@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ERPGUlf",
      href: "https://cloud.erpgulf.com/",
      badges: [],
      location: "Remote",
      title: "Software Research Engineer",
      logoUrl: "/erpgulf.png",
      start: "July 2024",
      end: "Present",
      description:
        "Building a ERP and Cloud service platform for small and medium businesses. I am responsible for designing and implementing the frontend architecture, building reusable components, and integrating with backend services.",
    },
    {
      company: "GreenInk",
      badges: [],
      href: "https://www.greenink.pro/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/greenink.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Developed a LMS application and also mentored junior developers in frontend development.",
    },
    {
      company: "Brandism",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/brandism.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed a custom web application for the client using React and Node.js",
    },
    {
      company: "convai Innovation",
      href: "https://convaiinnovations.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/convai_innovations_logo.svg",
      start: "January 2019",
      end: "April 2019",
      description: "Learned about AI and LLMs ",
    },
    {
      company: "GTECH Mulearn GCEK",
      href: "https://learn.mulearn.org/",
      badges: [],
      location: "Government College Of Engineering Kannur",
      title: "Web development Interest Group Lead",
      logoUrl: "/µLearn.webp",
      start: "January 2018",
      end: "April 2018",
      description: "Mentored junior developers in web development ",
    },
  ],
  education: [
    {
      school: "Government College Of Engineering Kannur",
      href: "https://www.gcek.ac.in/",
      degree: "Computer Science and Engineering",
      logoUrl: "/gcek.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Chinmaya Vidyala",
      href: "https://uwaterloo.ca",
      degree: "Higher secondary",
      logoUrl: "/waterloo.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Claudion",
      href: "https://saudi.claudion.com/portal-home",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description: "Saas platform for managing cloud resources and services.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://saudi.claudion.com/portal-home",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Claudion.png",
    } as Project,
    {
      title: "Iggzy App",
      href: "https://iggzy.app",
      dates: "Jul 2025 - Sep 2025",
      active: true,
      description:
        "Saas platform for freelancers and solopreneurs for invoicing and project management.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Firebase",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://iggzy.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Iggzy.png",
    } as Project,
    {
      title: "Astrabiz",
      href: "https://astrabiz.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Landing page for a digital agency that provides web development and digital marketing services. The website is built using Next.js and Tailwind CSS.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://astrabiz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Astrabiz-1.png",
    } as Project,
    {
      title: "PDFGenie",
      href: "https://chat-with-pdf-gules.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a RAG based web AI application that allows users to interact with PDF documents using natural language.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI",
        "Convex",
        "Langchain",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat-with-pdf-gules.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishi9808/PDFGenie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "/pdfgenie.webm",
    } as Project,
    {
      title: "Imagine AI",
      href: "https://dashing-dodol-5dead0.netlify.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["React js", "Tailwind Css", "OpenAI", "Cloudinary"],
      links: [
        {
          type: "Website",
          href: "https://dashing-dodol-5dead0.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/imagineAi.png",
    } as Project,
    {
      title: "Alowishus Cafe Website",
      href: "https://alowishus-catering.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a website for a local cafe. The website is built using Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://alowishus-catering.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rishi9808/coffee-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cafe.png",
    } as Project,
  ],
  hackathons: [
    {
      title: "Top 100 Coders Kerala",
      dates: "November 23rd - 25th, 2022",
      location: "Huddle Global, Trivandrum",
      description:
        "Participated in a hackathon to develop innovative solutions for local businesses using AI.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "UST Global SIGHT EXPO",
      dates: "September 2023",
      location: "UST Global, Trivandrum",
      description:
        "Developed AI based Medical Scribing Assistant which helps doctors to write prescriptions and medical reports using voice commands.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Tinkerhub State level Hackathon",
      dates: "September 2020",
      location: "Government College Of Engineering Kannur",
      description:
        "Developed a clinical management system for hospitals to manage patient records, appointments, and billing.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
