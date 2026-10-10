import type { Program } from "@/types";

// NOTE: Demo-labeled sample content for development.
// Replace with real organisational data (or connect Neon) before production.
export const programs: Program[] = [
  {
    slug: "youth-leadership",
    title: "Youth Leadership Academy",
    category: "Leadership",
    summary:
      "A structured pathway that helps young people build the confidence, communication and organising skills to lead in their communities.",
    description:
      "The Youth Leadership Academy is a mentorship-driven programme that pairs emerging leaders with experienced community organisers. Participants learn public speaking, project planning, team building and civic engagement through hands-on modules and real local initiatives.",
    status: "active",
    location: "Nationwide",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=70",
    highlights: [
      "12-week mentorship cohorts",
      "Real community projects, not just theory",
      "Peer network across states",
    ],
    outcomes: [
      "Confident public communication",
      "Ability to plan and run local initiatives",
      "A lasting leadership network",
    ],
  },
  {
    slug: "skill-development",
    title: "Skill Development Missions",
    category: "Skills",
    summary:
      "Practical, employment-relevant skill building — from digital literacy to trades — delivered close to where young people live.",
    description:
      "Skill Development Missions run focused workshops in digital skills, spoken English, financial literacy and vocational trades. Sessions are designed to be accessible, hands-on and directly connected to real opportunities.",
    status: "ongoing",
    location: "Chapter-led",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Digital & vocational tracks", "Weekend-friendly formats", "Certificates on completion"],
    outcomes: ["Job-ready practical skills", "Improved employability", "Confidence with technology"],
  },
  {
    slug: "career-employment",
    title: "Career & Employment Connect",
    category: "Careers",
    summary:
      "Guidance, mentorship and opportunity-matching to help young people find their first real break.",
    description:
      "Career & Employment Connect brings together career counselling, resume clinics, interview preparation and introductions to local employers and internships. The focus is on first-generation professionals who lack access to networks.",
    status: "active",
    location: "Nationwide",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Resume & interview clinics", "Local employer introductions", "Internship matching"],
    outcomes: ["Clarity on career paths", "Access to real opportunities", "Stronger applications"],
  },
  {
    slug: "entrepreneurship",
    title: "Young Entrepreneurs Lab",
    category: "Entrepreneurship",
    summary:
      "For young people with an idea and the drive to build it — a supportive space to test, learn and launch.",
    description:
      "The Young Entrepreneurs Lab supports early founders with idea validation, basic business skills, mentorship and small peer-funded pilots. It is designed for grassroots entrepreneurship, not just tech startups.",
    status: "upcoming",
    location: "Selected chapters",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Idea-to-pilot support", "Practical business basics", "Founder mentorship"],
    outcomes: ["Validated business ideas", "First customers", "Entrepreneurial confidence"],
  },
  {
    slug: "social-service",
    title: "Community Service Corps",
    category: "Service",
    summary:
      "Organised volunteering that channels youth energy into visible local impact — cleanliness, relief, care and support drives.",
    description:
      "The Community Service Corps mobilises volunteers for local service — from cleanliness and plantation drives to disaster relief support and elderly care. It is about showing up consistently and building a culture of service.",
    status: "ongoing",
    location: "Chapter-led",
    image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Regular service drives", "Disaster-response volunteers", "Local partnerships"],
    outcomes: ["Visible community impact", "A culture of service", "Stronger neighbourhoods"],
  },
  {
    slug: "education-awareness",
    title: "Education & Awareness",
    category: "Education",
    summary:
      "Peer-led education support and awareness campaigns on the issues that matter most to young India.",
    description:
      "Education & Awareness runs peer tutoring, scholarship guidance and awareness campaigns on health, rights, safety and the environment. Young people teaching and informing other young people.",
    status: "active",
    location: "Nationwide",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Peer tutoring", "Scholarship guidance", "Awareness campaigns"],
    outcomes: ["Better learning outcomes", "Informed communities", "Access to opportunity"],
  },
  {
    slug: "community-development",
    title: "Community Development Projects",
    category: "Development",
    summary:
      "Locally-identified projects that improve everyday life — planned, owned and delivered by young people.",
    description:
      "Community Development Projects begin with young people identifying a real local need — a library, a sports space, a water point — and organising to deliver it with community and partner support.",
    status: "ongoing",
    location: "Chapter-led",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Community-identified needs", "Youth-owned delivery", "Partner support"],
    outcomes: ["Tangible local improvements", "Ownership & pride", "Sustainable projects"],
  },
  {
    slug: "volunteer-programs",
    title: "Volunteer Network",
    category: "Volunteering",
    summary:
      "A simple way to give a few hours to something bigger — matched to causes and events near you.",
    description:
      "The Volunteer Network makes it easy to contribute time to events, drives and campaigns. Volunteers are matched to opportunities by location and interest, with clear roles and recognition.",
    status: "active",
    location: "Nationwide",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Flexible time commitment", "Clear volunteer roles", "Recognition & references"],
    outcomes: ["Meaningful contribution", "New skills & friends", "Community connection"],
  },
  {
    slug: "national-campaigns",
    title: "National Campaigns",
    category: "Campaigns",
    summary:
      "Coordinated nationwide drives that let thousands of young people act together on a shared theme.",
    description:
      "National Campaigns bring chapters across India together around a shared theme for a set period — cleanliness, road safety, digital awareness, environment — turning many small local actions into visible national momentum.",
    status: "upcoming",
    location: "Nationwide",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=70",
    highlights: ["Synchronised nationwide action", "Shared themes", "Collective visibility"],
    outcomes: ["National-scale participation", "Shared identity", "Momentum for change"],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
