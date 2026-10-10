import type { Story } from "@/types";

// NOTE: Demo-labeled sample content for development. Names and details are illustrative.
export const stories: Story[] = [
  {
    slug: "priya-first-workshop-to-coordinator",
    name: "Priya",
    role: "Student → Chapter Volunteer Lead",
    location: "Pune, Maharashtra",
    category: "Leadership",
    excerpt:
      "She came to one weekend workshop unsure of herself. A year later she coordinates volunteers for city-wide drives.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=70",
    quote: "I didn't know I could lead until people trusted me to.",
    body: {
      started:
        "Priya was a second-year college student who signed up for a single skills weekend, mostly out of curiosity and a little nervousness about speaking in groups.",
      did:
        "She kept showing up — first as a participant, then helping organise, then leading volunteer teams for cleanliness and education drives across her city.",
      changed:
        "Today she coordinates dozens of volunteers, mentors newcomers, and says the biggest change is internal: she now assumes she can figure things out.",
    },
  },
  {
    slug: "arjun-idea-to-first-customers",
    name: "Arjun",
    role: "Young Founder",
    location: "Bengaluru, Karnataka",
    category: "Entrepreneurship",
    excerpt:
      "An idea for a low-cost repair service turned into a real small business with help from the founders' community.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=70",
    quote: "The idea was mine. The courage to start came from the people around me.",
    body: {
      started:
        "Arjun had an idea and a lot of doubt. He'd never met anyone who had actually started something of their own.",
      did:
        "Through the Young Entrepreneurs Lab he validated his idea, learned the basics, and ran a small pilot with support from peer founders.",
      changed:
        "He now serves paying customers in his neighbourhood and mentors the next cohort of first-time founders.",
    },
  },
  {
    slug: "meera-teaching-what-she-learned",
    name: "Meera",
    role: "Peer Tutor",
    location: "Varanasi, Uttar Pradesh",
    category: "Education",
    excerpt:
      "She struggled with English in school. Now she teaches it to younger students every weekend.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=70",
    quote: "Teaching someone else is how I finally understood it myself.",
    body: {
      started:
        "Meera almost gave up on English, convinced it wasn't for people like her.",
      did:
        "She joined peer tutoring — first to learn, then to teach — and built a small weekend class for younger students in her locality.",
      changed:
        "Her students are improving, and so is she. She's now planning to become a teacher.",
    },
  },
  {
    slug: "rohan-service-that-stuck",
    name: "Rohan",
    role: "Community Service Volunteer",
    location: "Jaipur, Rajasthan",
    category: "Service",
    excerpt:
      "A one-time cleanup drive became a habit — and then a movement in his own neighbourhood.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1000&q=70",
    quote: "We stopped waiting for someone else to fix our street.",
    body: {
      started:
        "Rohan joined a plantation drive on a friend's suggestion, expecting to attend once.",
      did:
        "He kept coming back, then started organising monthly drives and adopting green spaces with a small crew.",
      changed:
        "His locality now has a volunteer group that maintains parks and runs regular service days.",
    },
  },
  {
    slug: "fatima-first-job",
    name: "Fatima",
    role: "First-generation Professional",
    location: "Hyderabad, Telangana",
    category: "Careers",
    excerpt:
      "No network, no roadmap — just a resume clinic and an introduction that opened the first door.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=70",
    quote: "I just needed one person to show me the door existed.",
    body: {
      started:
        "Fatima was the first in her family to look for an office job and had no idea where to begin.",
      did:
        "She attended a careers webinar and a resume clinic, practised interviews, and got introduced to a local employer.",
      changed:
        "She landed her first role and now volunteers at the same clinics that helped her.",
    },
  },
  {
    slug: "dev-sports-to-belonging",
    name: "Dev",
    role: "Community Member",
    location: "Guwahati, Assam",
    category: "Community",
    excerpt:
      "A sports day gave a quiet teenager a team, a routine and a reason to keep showing up.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=70",
    quote: "For the first time, I felt like I was part of something.",
    body: {
      started:
        "Dev was withdrawn and spent most of his time alone after school.",
      did:
        "He came to a community sports day, joined a team, and gradually took part in more chapter activities.",
      changed:
        "He now helps organise sports days and says the sense of belonging changed everything for him.",
    },
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
