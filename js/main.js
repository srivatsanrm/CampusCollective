/**
 * CAMPUS COLLECTIVE — Core Application Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lightbox
  if (window.initLightbox) window.initLightbox();

  // 2. Initialize Three.js 3D Object in Hero
  const canvasContainer = document.getElementById('hero-3d-container');
  if (canvasContainer && window.initHero3D) {
    window.initHero3D('hero-3d-container');
  }

  // 3. Navbar Sticky & Blur Effect
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 4. Mobile Menu Navigation
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobile = document.getElementById('close-mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'translate-x-full');
      }, 10);
    });
  }

  if (closeMobile && mobileMenu) {
    const hideMobile = () => {
      mobileMenu.classList.add('opacity-0', 'translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 250);
    };
    closeMobile.addEventListener('click', hideMobile);
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', hideMobile);
    });
  }

  // 5. Render Homepage Interactive Domains
  renderInteractiveDomains();

  // 6. Render Homepage Gallery Teaser
  renderHomepageGallery();

  // 7. Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      if (window.showToast) {
        window.showToast("Your message has been sent to our team. We'll get back to you shortly!", "success");
      }
    });
  }
});

/**
 * Render Interactive Domains ("Different Skills. One Collective.")
 */
function renderInteractiveDomains() {
  const container = document.getElementById('domains-interactive-container');
  if (!container || typeof DOMAINS_DATA === 'undefined') return;

  let activeIndex = 0;

  function updateActiveDomain(index) {
    activeIndex = index;
    const d = DOMAINS_DATA[index];

    // Highlight row
    document.querySelectorAll('.domain-nav-item').forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('bg-neutral-900', 'text-white');
        item.classList.remove('text-neutral-500', 'hover:bg-neutral-100');
        const arrow = item.querySelector('.domain-arrow');
        if (arrow) arrow.classList.remove('opacity-0');
      } else {
        item.classList.remove('bg-neutral-900', 'text-white');
        item.classList.add('text-neutral-500', 'hover:bg-neutral-100');
        const arrow = item.querySelector('.domain-arrow');
        if (arrow) arrow.classList.add('opacity-0');
      }
    });

    // Update Detail Panel
    const detailPanel = document.getElementById('domain-detail-display');
    if (detailPanel) {
      detailPanel.innerHTML = `
        <div class="h-full flex flex-col justify-between p-6 md:p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden transition-all duration-300">
          <!-- Subtle Glow Accent -->
          <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-red-600/20 blur-3xl pointer-events-none"></div>

          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono font-semibold uppercase tracking-wider">
                ${d.badge}
              </span>
              <span class="text-xs font-mono text-neutral-400">DOMAIN 0${index + 1} / 06</span>
            </div>
            
            <h3 class="text-3xl font-display font-bold tracking-tight text-white mb-3">${d.name}</h3>
            <p class="text-neutral-300 text-sm leading-relaxed mb-6">${d.description}</p>
            
            <div class="space-y-4 mb-2">
              <div class="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">Key Responsibilities</div>
              <ul class="space-y-2">
                ${d.responsibilities.map(r => `
                  <li class="flex items-start gap-2.5 text-xs text-neutral-300">
                    <span class="text-red-500 font-bold mt-0.5">•</span>
                    <span>${r}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="pt-6 border-t border-neutral-800 flex items-center justify-between">
            <span class="text-xs font-mono text-neutral-400">STUDENT COLLECTIVE</span>
            <a href="./domains.html" class="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors">
              <span>View domain overview</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      `;
    }
  }

  // Render left list
  const listHTML = DOMAINS_DATA.map((d, idx) => `
    <button onclick="window.selectDomain(${idx})" class="domain-nav-item w-full text-left p-4 md:p-5 rounded-xl transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-neutral-200">
      <div>
        <div class="text-[11px] font-mono text-red-500 font-semibold mb-0.5">0${idx + 1}</div>
        <div class="text-xl md:text-2xl font-display font-bold tracking-tight">${d.name}</div>
        <div class="text-xs text-neutral-400 mt-1 line-clamp-1">${d.summary}</div>
      </div>
      <svg class="domain-arrow w-5 h-5 text-red-500 transition-opacity opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  `).join('');

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-5 space-y-2">
        ${listHTML}
      </div>
      <div id="domain-detail-display" class="lg:col-span-7 min-h-[460px]">
        <!-- Active detail panel rendered below -->
      </div>
    </div>
  `;

  window.selectDomain = updateActiveDomain;
  updateActiveDomain(0);
}

/**
 * Render Homepage Gallery Teaser (3-4 images)
 */
function renderHomepageGallery() {
  const container = document.getElementById('homepage-gallery-teaser');
  if (!container || typeof GALLERY_DATA === 'undefined') return;

  const teasers = GALLERY_DATA.filter(g => g.featuredTeaser).slice(0, 4);

  container.innerHTML = teasers.map((g, idx) => `
    <div onclick="openLightbox(${idx})" class="group relative rounded-xl overflow-hidden cursor-pointer aspect-video bg-neutral-900">
      <img src="${g.image}" alt="${g.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      <div class="absolute bottom-3 left-4 right-4 text-white">
        <span class="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider">${g.category}</span>
        <h4 class="text-sm font-bold tracking-tight mt-1 line-clamp-1">${g.title}</h4>
      </div>
    </div>
  `).join('');
}
