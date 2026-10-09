/**
 * SPECTRUM — Events Data
 * Centralized list of upcoming, ongoing, and past sample events.
 */
const EVENTS_DATA = [
  {
    id: "spectrum-hack",
    title: "Spectrum Hack 2026",
    tagline: "36-Hour National Student Hackathon",
    type: "HACKATHON",
    domain: "TECHNICAL",
    date: "Upcoming · Mid Term 2026",
    time: "36 Hours (Continuous)",
    venue: "Main Auditorium & Tech Labs, SRM Ramapuram",
    status: "upcoming",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description: "A flagship student hackathon focused on building innovative solutions across AI, open infrastructure, Web3, and sustainable smart cities. Collaborate in cross-functional teams to build real prototypes under the mentorship of industry engineers.",
    prizes: "Exciting Cash Pool + Sponsor Goodies + Fast-track Internships",
    certificate: "Verified Certificate of Participation & Excellence",
    teamSize: "2 - 4 Members",
    registrationStatus: "Open for Pre-Registration",
    highlights: [
      "Mentorship rounds with senior software architects",
      "API bounties and developer swag bundles",
      "Complimentary high-speed Wi-Fi and food support",
      "Opportunity to pitch to seed investors and incubators"
    ]
  },
  {
    id: "create-connect",
    title: "Create / Connect",
    tagline: "Creative Collaboration & Design Sprint",
    type: "WORKSHOP",
    domain: "CREATIVE",
    date: "Upcoming · Weekend Edition",
    time: "10:00 AM - 4:00 PM IST",
    venue: "Design Studio, SRM Ramapuram Campus",
    status: "upcoming",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    description: "An intensive hands-on creative workshop and networking experience designed for UI/UX designers, visual artists, and brand strategists. Learn to formulate cohesive design systems, build interactive prototypes, and collaborate directly with engineers.",
    prizes: "Curated Design Kits + Featured Showcase on Spectrum Channels",
    certificate: "Certificate of Completion from Spectrum Design Guild",
    teamSize: "Individual / Pairs",
    registrationStatus: "Registration Open",
    highlights: [
      "Mastering modern design systems in Figma",
      "Micro-interactions and motion design principles",
      "Portfolio critique and design review clinic",
      "Cross-domain ideation mixer"
    ]
  },
  {
    id: "spectrum-sprint",
    title: "Spectrum Sprint",
    tagline: "Fast-Paced Problem Solving & Strategy Challenge",
    type: "COMPETITION",
    domain: "BUSINESS",
    date: "Upcoming · Inter-College Challenge",
    time: "9:30 AM - 5:00 PM IST",
    venue: "Seminar Hall 1, SRM Ramapuram",
    status: "upcoming",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: "A fast-paced challenge testing students on strategic thinking, rapid problem decomposition, business model generation, and stage pitching. Teams are handed unannounced real-world case challenges and given 4 hours to craft their solution deck.",
    prizes: "Cash Awards + Trophy + Executive Mentorship",
    certificate: "Official Certificate of Merit and Strategic Excellence",
    teamSize: "3 Members",
    registrationStatus: "Registration Open",
    highlights: [
      "Unannounced high-impact corporate case study",
      "Live 5-minute lightning pitch round before panel of judges",
      "Q&A grilling round simulating venture investor diligence",
      "Comprehensive feedback scoresheets for all finalists"
    ]
  },
  {
    id: "build-with-ai",
    title: "Build With AI",
    tagline: "Practical AI Tooling, Agents & LLM Applications",
    type: "WORKSHOP",
    domain: "TECHNICAL",
    date: "Upcoming · Tech Session",
    time: "2:00 PM - 5:30 PM IST",
    venue: "Advanced Computing Lab, SRM Ramapuram",
    status: "upcoming",
    featured: true,
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "A practical developer workshop exploring modern AI development: building custom autonomous agents, function calling, RAG pipelines, and embedding models. Move beyond chat prompts and build software that interacts with the real world.",
    prizes: "API Credits + Spectrum AI Builder Badges",
    certificate: "Certificate of Practical AI Engineering",
    teamSize: "Individual",
    registrationStatus: "Limited Seats",
    highlights: [
      "Hands-on codebase walkthrough of agent architectures",
      "Building a working multi-modal knowledge assistant",
      "Best practices for latency, token budgeting, and reliability",
      "Free workshop repository with deployable starter templates"
    ]
  },
  {
    id: "cinematic-capture-masterclass",
    title: "Cinematic Capture & Frame",
    tagline: "Visual Storytelling, Stage Lighting & Aftermovie Production",
    type: "WORKSHOP",
    domain: "CAPTURE",
    date: "Past Event · Successful Edition",
    time: "Full Day Bootcamp",
    venue: "Media Center, SRM Ramapuram",
    status: "past",
    featured: false,
    bannerImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    description: "A high-octane masterclass on gimbal movement, framing, multi-cam live coverage, and DaVinci Resolve color workflows conducted by seasoned student videographers.",
    prizes: "Best Visual Reel Spotlight Award",
    certificate: "Certificate of Production Proficiency",
    teamSize: "Individual",
    registrationStatus: "Completed",
    highlights: [
      "Live camera rig handling & lighting setups",
      "Color grading raw footage for maximum punch",
      "Sound design and audio syncing techniques"
    ]
  },
  {
    id: "pr-summit",
    title: "Spectrum PR & Outreach Summit",
    tagline: "Corporate Sponsorship & Public Dialogue",
    type: "COMPETITION",
    domain: "PR",
    date: "Past Event · Campus Series",
    time: "Afternoon Session",
    venue: "MBA Conference Hall, SRM Ramapuram",
    status: "past",
    featured: false,
    bannerImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    description: "Interactive session on drafting corporate sponsorship proposals, pitch deck negotiation tactics, and handling public communication for large-scale college fests.",
    prizes: "Outstanding Pitch Commendation",
    certificate: "Certificate of Communications Leadership",
    teamSize: "Individual / Pairs",
    registrationStatus: "Completed",
    highlights: [
      "Cold outreach frameworks with high response rates",
      "Mock corporate negotiation roleplay",
      "Brand crisis communication case study"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EVENTS_DATA;
}
