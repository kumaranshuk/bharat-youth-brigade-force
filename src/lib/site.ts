export const siteConfig = {
  name: "Bhartiya Yuva Shakti Sangathan",
  nameHindi: "भारतीय युवा शक्ति संगठन",
  shortName: "BYSS",
  tagline: "The youth of India. One network. One purpose.",
  description:
    "Bhartiya Yuva Shakti Sangathan is a national platform bringing young people across India together to connect, participate, lead and build meaningful change.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://byssorg.com",
  ogImage: "/og.png",
  email: "support@byssorg.com",
  phone: "+91 00000 00000",
  philosophy: ["Youth", "Unity", "Action", "Development", "Nation Building"],
  social: {
    instagram: "https://instagram.com/",
    x: "https://x.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Chapters", href: "/chapters" },
  { label: "Stories", href: "/stories" },
  { label: "Impact", href: "/impact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Movement",
    items: [
      { label: "About", href: "/about" },
      { label: "Our Mission", href: "/mission" },
      { label: "Leadership", href: "/leadership" },
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    title: "Participate",
    items: [
      { label: "Programs", href: "/programs" },
      { label: "Events", href: "/events" },
      { label: "Find a Chapter", href: "/chapters" },
      { label: "Join the Movement", href: "/join" },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "Stories", href: "/stories" },
      { label: "Resources", href: "/resources" },
      { label: "Search", href: "/search" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Trust",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];
