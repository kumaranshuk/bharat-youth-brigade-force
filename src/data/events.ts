import type { OrgEvent } from "@/types";

// NOTE: Demo-labeled sample content for development.
export const events: OrgEvent[] = [
  {
    slug: "national-youth-leadership-summit",
    title: "National Youth Leadership Summit 2026",
    category: "Leadership",
    summary:
      "A flagship gathering of young leaders from every region to learn, connect and set the year's shared agenda.",
    description:
      "The National Youth Leadership Summit brings together chapter leaders and emerging changemakers for two days of workshops, keynotes and planning. Expect practical leadership sessions, cross-state networking and the launch of the year's national campaign.",
    date: "2026-09-19T09:30:00+05:30",
    endDate: "2026-09-20T18:00:00+05:30",
    mode: "in-person",
    city: "New Delhi",
    state: "Delhi",
    venue: "Talkatora Indoor Stadium",
    organiser: "BYSS National Team",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "skill-up-weekend-pune",
    title: "Skill-Up Weekend: Digital Skills",
    category: "Skills",
    summary: "A hands-on weekend of digital literacy, spoken English and interview readiness.",
    description:
      "A practical, beginner-friendly weekend focused on the digital and communication skills that open doors. Bring a notebook and curiosity — laptops provided where needed.",
    date: "2026-08-30T10:00:00+05:30",
    mode: "in-person",
    city: "Pune",
    state: "Maharashtra",
    venue: "Community Hall, Kothrud",
    organiser: "BYSS Pune Chapter",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "clean-river-drive-varanasi",
    title: "Clean River Community Drive",
    category: "Service",
    summary: "Join hundreds of volunteers for a morning of cleanliness and awareness along the riverfront.",
    description:
      "A community service drive combining a riverfront cleanup with an awareness walk. Gloves, bags and refreshments provided. Families welcome.",
    date: "2026-09-06T06:30:00+05:30",
    mode: "in-person",
    city: "Varanasi",
    state: "Uttar Pradesh",
    venue: "Assi Ghat",
    organiser: "BYSS Varanasi Chapter",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "young-founders-meetup-bengaluru",
    title: "Young Founders Meetup",
    category: "Entrepreneurship",
    summary: "An evening for early founders to share ideas, find collaborators and learn from mentors.",
    description:
      "A relaxed evening of lightning pitches, mentor tables and honest conversation about building something from scratch. Whether you have an idea or just curiosity, come along.",
    date: "2026-09-12T17:30:00+05:30",
    mode: "in-person",
    city: "Bengaluru",
    state: "Karnataka",
    venue: "Innovation Hub, Indiranagar",
    organiser: "BYSS Bengaluru Chapter",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "careers-webinar-first-job",
    title: "Careers Webinar: Landing Your First Job",
    category: "Careers",
    summary: "A live online session on resumes, interviews and finding opportunities without a network.",
    description:
      "An online webinar with a live Q&A covering how to build a strong resume, prepare for interviews and find your first real opportunity — designed for first-generation professionals.",
    date: "2026-08-28T19:00:00+05:30",
    mode: "online",
    city: "Online",
    state: "Nationwide",
    organiser: "BYSS Careers Team",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "tree-plantation-drive-jaipur",
    title: "Green Jaipur Plantation Drive",
    category: "Service",
    summary: "Help plant and adopt native saplings across the city with local partners.",
    description:
      "A plantation drive focused on native species, with each volunteer group adopting saplings to care for over the season. A small action that compounds over years.",
    date: "2026-09-27T07:00:00+05:30",
    mode: "in-person",
    city: "Jaipur",
    state: "Rajasthan",
    venue: "Central Park",
    organiser: "BYSS Jaipur Chapter",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
  {
    slug: "digital-awareness-campaign-launch",
    title: "Digital Awareness Campaign Launch",
    category: "Campaigns",
    summary: "The kickoff of a nationwide drive on online safety and digital rights.",
    description:
      "A hybrid launch event connecting chapters across the country as they begin a coordinated campaign on online safety, misinformation and digital rights.",
    date: "2026-10-02T11:00:00+05:30",
    mode: "hybrid",
    city: "Hyderabad",
    state: "Telangana",
    venue: "City Convention Centre + Online",
    organiser: "BYSS National Team",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: false,
  },
  {
    slug: "youth-sports-day-guwahati",
    title: "Community Youth Sports Day",
    category: "Community",
    summary: "A day of sport, energy and belonging open to young people across the city.",
    description:
      "An inclusive sports day bringing young people together for friendly competition, teamwork and fun. All skill levels welcome — the point is showing up together.",
    date: "2026-09-14T08:00:00+05:30",
    mode: "in-person",
    city: "Guwahati",
    state: "Assam",
    venue: "Sarusajai Stadium Grounds",
    organiser: "BYSS Guwahati Chapter",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=70",
    registrationOpen: true,
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export const eventCategories = Array.from(new Set(events.map((e) => e.category))).sort();
