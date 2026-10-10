/**
 * CAMPUS COLLECTIVE — 6 Core Operating Domains
 * Centralized Domain Data
 */
const DOMAINS_DATA = [
  {
    id: "creative",
    name: "CREATIVE",
    badge: "Design & Brand Identity",
    summary: "Visual design, motion graphics, branding systems, and experiential aesthetic craft.",
    description: "The Creative domain establishes the visual voice of our collective. From event branding, UI/UX design, and 3D design to motion graphics and merchandise, this team crafts every pixel and physical artifact that students interact with.",
    responsibilities: [
      "Brand identity systems & key visual design for campus festivals",
      "UI/UX product design for club digital portals & hackathon apps",
      "Motion design, 3D typography & promotional visual assets",
      "Merchandise, poster design & creative art direction"
    ],
    tools: ["Figma", "Adobe Illustrator", "After Effects", "Blender", "Photoshop"],
    accentColor: "#E11D48",
    icon: "palette"
  },
  {
    id: "pr",
    name: "PR",
    badge: "Public Relations & Partnerships",
    summary: "Corporate sponsorships, speaker acquisition, community storytelling, and brand voice.",
    description: "The PR domain is the strategic bridge between our collective and the external world. They partner with industry sponsors, invite keynote tech leaders, foster university alliances, and craft the voice that reaches thousands across campus and beyond.",
    responsibilities: [
      "Industry sponsorship procurement & corporate relations",
      "Tech guest speaker & jury member onboarding",
      "Social media campaign strategy across LinkedIn & Instagram",
      "Press releases, newsletter curation & campus community evangelism"
    ],
    tools: ["Notion", "LinkedIn Campaign Manager", "HubSpot", "Copywriting", "Pitch Decks"],
    accentColor: "#EF4444",
    icon: "megaphone"
  },
  {
    id: "operations",
    name: "OPERATIONS",
    badge: "Event Logistics & Production",
    summary: "High-stakes event execution, stagecraft, campus logistics, and hospitality.",
    description: "Operations is the tactical backbone that powers our initiatives. From managing 36-hour hackathons and securing auditorium permissions to stage direction and participant experience, this domain turns high-concept ideas into flawless reality.",
    responsibilities: [
      "End-to-end event logistics, timeline scheduling & venue setup",
      "Campus administration liaison & permission clearance",
      "Participant registration desks, crowd control & hospitality",
      "Stage management, AV production & live crisis coordination"
    ],
    tools: ["Airtable", "Linear", "Slack", "Spreadsheets", "Logistics Playbooks"],
    accentColor: "#DC2626",
    icon: "settings"
  },
  {
    id: "technical",
    name: "TECHNICAL",
    badge: "Software, AI & Engineering",
    summary: "Full-stack development, AI/ML workshops, hackathon platform engineering, and open source.",
    description: "The Technical domain engineers the digital infrastructure of our collective and drives hands-on developer culture. They build internal platforms, judge technical submissions, and organize cutting-edge workshops on modern dev tools, AI, and systems.",
    responsibilities: [
      "Building and maintaining official web apps & platforms",
      "Technical hackathon problem statement curation & automated test suites",
      "Leading technical masterclasses in Full-Stack, AI/ML, and Cloud",
      "Mentoring student participants during campus hackathons"
    ],
    tools: ["TypeScript", "React", "Next.js", "Python", "Tailwind CSS", "Docker", "Git"],
    accentColor: "#E11D48",
    icon: "code"
  },
  {
    id: "business",
    name: "BUSINESS",
    badge: "Strategy & Finance",
    summary: "Budget modeling, event monetization, pitch competitions, and strategic growth.",
    description: "The Business domain drives the analytical and strategic thinking behind our collective. They manage event budgets, run startup pitch challenges, analyze student engagement metrics, and build sustainable frameworks for community growth.",
    responsibilities: [
      "Financial planning, budget allocation & sponsor ROI tracking",
      "Designing case-study competitions & entrepreneurship sprints",
      "Data analysis on student participation and engagement metrics",
      "Resource optimization & long-term club scaling roadmap"
    ],
    tools: ["Excel / Google Sheets", "Keynote", "Pitch Modeling", "Google Analytics"],
    accentColor: "#B91C1C",
    icon: "trending-up"
  },
  {
    id: "capture",
    name: "CAPTURE",
    badge: "Media & Cinematic Production",
    summary: "Photography, cinematography, aftermovies, and visual documentation.",
    description: "The Capture domain documents the living history of our collective. Armed with cameras, gimbals, and high-speed editing suites, they produce cinematic event aftermovies, backstage portraits, and high-resolution visual archives of every campus milestone.",
    responsibilities: [
      "Live event photography & high-energy video recording",
      "Cinematic aftermovie editing, color grading & audio mastering",
      "Behind-the-scenes documentary coverage of hackathons and build sprints",
      "Digital media archiving and high-res asset management"
    ],
    tools: ["Sony Alpha / Canon EOS", "Premiere Pro", "DaVinci Resolve", "Lightroom"],
    accentColor: "#F43F5E",
    icon: "camera"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOMAINS_DATA;
}
