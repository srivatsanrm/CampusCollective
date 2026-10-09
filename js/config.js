/**
 * SPECTRUM — SRM Ramapuram
 * Centralized Site Configuration
 * Update this file to modify global site metadata, social URLs, and contact info.
 */
const SITE_CONFIG = {
  clubName: "SPECTRUM",
  tagline: "Where Ideas Find Their Color.",
  subTagline: "More Than a Club. A Spectrum of Ideas.",
  institution: "SRM Institute of Science and Technology",
  campus: "Ramapuram Campus, Chennai",
  affiliation: "A multidisciplinary student community at SRM Institute of Science and Technology, Ramapuram.",
  vision: "Bringing together technology, creativity, business, media, and operations through events, workshops, hackathons, competitions, and collaborative experiences.",
  email: "hello@spectrum-srm.example",
  socials: {
    linkedin: "https://www.linkedin.com/company/spectrum-srm/posts/",
    instagram: "https://www.instagram.com/spectrumclub.official/",
    github: "https://github.com/spectrum-srm",
    discord: "https://discord.gg/spectrumsrm"
  },
  location: {
    venue: "SRM Institute of Science and Technology",
    address: "Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089",
    landmark: "Tech Park / Main Auditorium"
  },
  copyrightYear: 2026
};

// Export for module/script usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
