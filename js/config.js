/**
 * CAMPUS COLLECTIVE — Collegiate Club Website Template & Product Demo
 * Centralized Site Configuration
 * Update this file to modify global site metadata, branding, social URLs, and contact info.
 */
const SITE_CONFIG = {
  clubName: "CAMPUS COLLECTIVE",
  tagline: "A home for every student community.",
  subTagline: "More Than a Club. A Collective of Ideas.",
  institution: "Metropolitan University",
  campus: "Student Activity Center & Innovation Hub",
  affiliation: "A multidisciplinary student collective uniting creators, builders, and leaders.",
  vision: "Bringing together technology, creativity, business, media, and operations through events, workshops, hackathons, competitions, and collaborative experiences.",
  email: "hello@campuscollective.example",
  socials: {
    linkedin: "https://www.linkedin.com/company/campus-collective-demo",
    instagram: "https://www.instagram.com/campuscollective.demo/",
    github: "https://github.com/campus-collective",
    discord: "https://discord.gg/campuscollective"
  },
  location: {
    venue: "Student Activity Center",
    address: "Campus Innovation Center, University Square",
    landmark: "Auditorium Complex & Maker Lab"
  },
  brandColors: {
    primary: "#E11D48",
    dark: "#09090B",
    subtle: "#FAFAFA"
  },
  logoPath: "./assets/campus-collective-logo.svg",
  copyrightYear: 2026
};

// Export for module/script usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
