# SPECTRUM — SRM Institute of Science and Technology, Ramapuram

> **"Where Ideas Find Their Color."**  
> A multidisciplinary student community bringing together technology, creativity, business, media, and operations through events, workshops, hackathons, and collaborative campus experiences.

---

## 🎨 Visual Identity & Design Principles
- **Aesthetic**: Modern startup / creative-tech collective (Clean, minimal, premium, youthful, slightly futuristic).
- **Primary Color Palette**:
  - **Electric Crimson**: `#E11D48` (Primary accent)
  - **Pure White**: `#FFFFFF` / Light Canvas `#FAFAFA`
  - **Charcoal / Carbon**: `#09090B` / `#18181B` (Typography & high-contrast elements)
  - **Muted Zinc**: `#71717A` / Hairline borders `#E4E4E7`
- **Interactive 3D**: Bespoke WebGL 3D refractive spectrum prism rendered using Three.js in the hero section, responding dynamically to user cursor movement.

---

## 🏛️ The 6 Operating Domains
1. **CREATIVE**: Visual design, UI/UX systems, 3D typography, branding.
2. **PR**: Corporate sponsorships, keynote speakers, public storytelling, media relations.
3. **OPERATIONS**: Event logistics, stagecraft, auditorium coordination, execution.
4. **TECHNICAL**: Web platforms, hackathon infrastructure, AI/ML workshops.
5. **BUSINESS**: Financial modeling, startup pitch competitions, strategic growth.
6. **CAPTURE**: Photography, cinematography, event aftermovies, visual documentation.

---

## 🚀 How to Run Locally

### Quick Start (Zero Build Required)
You can view the site instantly using any modern browser or local static server:

```bash
# Option 1: Python HTTP Server
python3 -m http.server 3000

# Option 2: Open directly in your browser
open index.html
```
Then navigate to: `http://localhost:3000`

---

## 📂 Project Architecture

```
spectrum-srm/
├── index.html                   # Flagship interactive homepage with 3D canvas
├── about.html                   # Deep dive into club manifesto & ethos
├── domains.html                 # Comprehensive 6-domain breakdown
├── events.html                  # Full events exploration & RSVP pass generation
├── gallery.html                 # Visual archive with masonry layout & Lightbox
├── contact.html                 # Contact hub, campus coordinates & FAQ
├── css/
│   └── styles.css               # Design system, typography, hairline borders, glow
└── js/
    ├── config.js                # Centralized site settings & official links
    ├── domains-data.js          # Domain definitions, tools, and responsibilities
    ├── events-data.js           # Sample events (Hackathons, Workshops, Sprints)
    ├── gallery-data.js          # Visual archive images, categories, and captions
    ├── three-spectrum.js        # Three.js 3D WebGL Spectrum Prism object
    ├── join-modal.js            # Multi-step recruitment application modal
    ├── event-modal.js           # Event details modal & digital pass generator
    ├── lightbox.js              # Fullscreen image viewer with keyboard navigation
    ├── toast.js                 # Toast alert system
    └── main.js                  # Navbar blur, mobile drawer, interactive tab controllers
```

---

## 🔄 Replacing Placeholder Assets
- **Logo**: The temporary mark is located in the navbar and footer. Replace with the official SVG in `index.html`, `events.html`, etc.
- **Events**: Modify `js/events-data.js` to add, update, or remove live events.
- **Gallery**: Update `js/gallery-data.js` with your official campus photos.
- **Socials & Contacts**: Edit `js/config.js` to update emails, campus addresses, and social handles.

---

## 🔗 Official Club Presence
- **LinkedIn**: [Spectrum SRM](https://www.linkedin.com/company/spectrum-srm/posts/)
- **Instagram**: [@spectrumclub.official](https://www.instagram.com/spectrumclub.official/)
- **Institution**: SRM Institute of Science and Technology, Ramapuram Campus, Chennai.
