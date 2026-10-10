/**
 * CAMPUS COLLECTIVE — Gallery Data
 * Centralized archive of event photographs, club moments, and behind-the-scenes.
 * All image URLs can be replaced with official club photographs easily.
 */
const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Late Night Hackathon Sprint",
    category: "Hackathons",
    caption: "Teams brainstorming and writing code into the early hours during the prototype build phase.",
    date: "Annual Hackathon",
    domain: "TECHNICAL",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: true
  },
  {
    id: "gal-2",
    title: "UI/UX System Design Workshop",
    category: "Workshops",
    caption: "Hands-on collaborative design prototyping session exploring typography and layout hierarchies.",
    date: "Design Masterclass",
    domain: "CREATIVE",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
    featuredTeaser: true
  },
  {
    id: "gal-3",
    title: "Auditorium Keynote & Orientation",
    category: "Campus Events",
    caption: "Welcoming incoming students to the collective inside the Main Auditorium.",
    date: "Community Launch",
    domain: "OPERATIONS",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: true
  },
  {
    id: "gal-4",
    title: "Final Pitch Presentation to Jury",
    category: "Competitions",
    caption: "Student founders pitching their strategic solution during the rapid problem-solving challenge.",
    date: "Strategy Sprint",
    domain: "BUSINESS",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait",
    featuredTeaser: true
  },
  {
    id: "gal-5",
    title: "Core Operations & Stage Command",
    category: "Behind the Scenes",
    caption: "Operations and stage management leads keeping event timelines and audio-visuals synchronized.",
    date: "Tech Symposium",
    domain: "OPERATIONS",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: false
  },
  {
    id: "gal-6",
    title: "Capture Team Live Production",
    category: "Behind the Scenes",
    caption: "The media production squad setting up gimbals and cinematic lighting rigs across the arena.",
    date: "Media Showcase",
    domain: "CAPTURE",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: false
  },
  {
    id: "gal-7",
    title: "Developer Debugging Circle",
    category: "Hackathons",
    caption: "Mentors and student developers untangling distributed state and smart contract interfaces.",
    date: "Hackathon Night",
    domain: "TECHNICAL",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: false
  },
  {
    id: "gal-8",
    title: "Domain Leads Brainstorming Session",
    category: "Team Moments",
    caption: "Cross-domain leads discussing event agendas, sponsorship roadmaps, and campus outreach.",
    date: "Leadership Council",
    domain: "PR",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: false
  },
  {
    id: "gal-9",
    title: "Award Ceremony & Recognition",
    category: "Campus Events",
    caption: "Celebrating student winners with trophies, cash prizes, and certificates of excellence.",
    date: "Awards Night",
    domain: "OPERATIONS",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    featuredTeaser: false
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GALLERY_DATA;
}
