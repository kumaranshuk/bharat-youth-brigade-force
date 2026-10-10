import type { Chapter } from "@/types";

// NOTE: Demo-labeled sample content for development.
export const chapters: Chapter[] = [
  {
    slug: "delhi-central",
    name: "Delhi Central Chapter",
    state: "Delhi",
    district: "New Delhi",
    city: "New Delhi",
    pincode: "110001",
    coordinator: "Chapter Coordination Team",
    contactPublic: "delhi@byssorg.com",
    established: "2025",
    description:
      "The Delhi Central Chapter anchors leadership programming and national campaigns, hosting regular workshops and service drives across the capital.",
    focusAreas: ["Leadership", "Careers", "Campaigns"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "mumbai-west",
    name: "Mumbai West Chapter",
    state: "Maharashtra",
    district: "Mumbai Suburban",
    city: "Mumbai",
    pincode: "400058",
    coordinator: "Chapter Coordination Team",
    contactPublic: "mumbai@byssorg.com",
    established: "2025",
    description:
      "A high-energy chapter focused on skills, entrepreneurship and coastal cleanliness drives across the western suburbs.",
    focusAreas: ["Skills", "Entrepreneurship", "Service"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "bengaluru-east",
    name: "Bengaluru East Chapter",
    state: "Karnataka",
    district: "Bengaluru Urban",
    city: "Bengaluru",
    pincode: "560038",
    coordinator: "Chapter Coordination Team",
    contactPublic: "bengaluru@byssorg.com",
    established: "2025",
    description:
      "Home to the Young Founders community, this chapter blends entrepreneurship, technology skills and mentorship.",
    focusAreas: ["Entrepreneurship", "Skills", "Careers"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "pune-city",
    name: "Pune City Chapter",
    state: "Maharashtra",
    district: "Pune",
    city: "Pune",
    pincode: "411004",
    coordinator: "Chapter Coordination Team",
    contactPublic: "pune@byssorg.com",
    established: "2025",
    description:
      "A student-heavy chapter running weekend skill missions, peer tutoring and community development projects.",
    focusAreas: ["Skills", "Education", "Development"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "hyderabad-south",
    name: "Hyderabad South Chapter",
    state: "Telangana",
    district: "Hyderabad",
    city: "Hyderabad",
    pincode: "500034",
    coordinator: "Chapter Coordination Team",
    contactPublic: "hyderabad@byssorg.com",
    established: "2025",
    description:
      "Focused on digital awareness campaigns and career readiness for first-generation professionals.",
    focusAreas: ["Campaigns", "Careers", "Education"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "jaipur-central",
    name: "Jaipur Central Chapter",
    state: "Rajasthan",
    district: "Jaipur",
    city: "Jaipur",
    pincode: "302001",
    coordinator: "Chapter Coordination Team",
    contactPublic: "jaipur@byssorg.com",
    established: "2025",
    description:
      "Known for large plantation and cleanliness drives alongside heritage-city community projects.",
    focusAreas: ["Service", "Development", "Volunteering"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "varanasi-city",
    name: "Varanasi City Chapter",
    state: "Uttar Pradesh",
    district: "Varanasi",
    city: "Varanasi",
    pincode: "221001",
    coordinator: "Chapter Coordination Team",
    contactPublic: "varanasi@byssorg.com",
    established: "2025",
    description:
      "Riverfront service, education support and awareness campaigns anchor this active eastern-UP chapter.",
    focusAreas: ["Service", "Education", "Awareness"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "guwahati-metro",
    name: "Guwahati Metro Chapter",
    state: "Assam",
    district: "Kamrup Metropolitan",
    city: "Guwahati",
    pincode: "781005",
    coordinator: "Chapter Coordination Team",
    contactPublic: "guwahati@byssorg.com",
    established: "2025",
    description:
      "Bringing north-east youth together through sport, volunteering and leadership development.",
    focusAreas: ["Community", "Volunteering", "Leadership"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "kolkata-central",
    name: "Kolkata Central Chapter",
    state: "West Bengal",
    district: "Kolkata",
    city: "Kolkata",
    pincode: "700016",
    coordinator: "Chapter Coordination Team",
    contactPublic: "kolkata@byssorg.com",
    established: "2025",
    description:
      "A culturally vibrant chapter combining education support, arts and community development.",
    focusAreas: ["Education", "Development", "Community"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "ahmedabad-west",
    name: "Ahmedabad West Chapter",
    state: "Gujarat",
    district: "Ahmedabad",
    city: "Ahmedabad",
    pincode: "380015",
    coordinator: "Chapter Coordination Team",
    contactPublic: "ahmedabad@byssorg.com",
    established: "2025",
    description:
      "Entrepreneurship-forward chapter with a strong volunteer network and skilling missions.",
    focusAreas: ["Entrepreneurship", "Skills", "Volunteering"],
    memberCount: 0,
    image:
      "https://images.unsplash.com/photo-1610123598147-6b1a2b7b0c8e?auto=format&fit=crop&w=1200&q=70",
  },
];

export function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export const chapterStates = Array.from(new Set(chapters.map((c) => c.state))).sort();
