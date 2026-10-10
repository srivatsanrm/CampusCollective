/**
 * CAMPUS COLLECTIVE — Fullscreen Gallery Lightbox
 */
let currentLightboxIndex = 0;
let currentGalleryList = [];

function initLightbox() {
  const lightboxHTML = `
  <div id="collective-lightbox" class="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 opacity-0 pointer-events-none transition-all duration-300">
    <!-- Top Bar -->
    <div class="flex items-center justify-between text-white z-10">
      <div id="lightbox-counter" class="font-mono text-xs text-neutral-400">01 / 09</div>
      <button id="close-lightbox-btn" class="p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <!-- Center Stage -->
    <div class="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
      <!-- Previous Button -->
      <button id="prev-lightbox-btn" class="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-red-600 text-white transition-all transform hover:scale-105">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>

      <!-- Active Image -->
      <div class="max-h-[75vh] max-w-5xl w-full flex items-center justify-center">
        <img id="lightbox-image" src="" alt="" class="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300">
      </div>

      <!-- Next Button -->
      <button id="next-lightbox-btn" class="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-red-600 text-white transition-all transform hover:scale-105">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>

    <!-- Bottom Caption Bar -->
    <div class="max-w-2xl mx-auto w-full text-center text-white z-10 pb-2">
      <div class="flex items-center justify-center gap-2 mb-1.5">
        <span id="lightbox-tag" class="px-2 py-0.5 rounded bg-red-600/90 text-white font-mono text-[10px] uppercase font-bold tracking-wider">HACKATHON</span>
        <span id="lightbox-date" class="text-xs text-neutral-400 font-mono">ANNUAL 2026</span>
      </div>
      <h4 id="lightbox-title" class="text-lg md:text-xl font-bold tracking-tight">Late Night Hackathon Sprint</h4>
      <p id="lightbox-caption" class="text-xs text-neutral-400 mt-1">Teams brainstorming and writing code into the early hours.</p>
    </div>
  </div>
  `;

  if (!document.getElementById('collective-lightbox')) {
    const div = document.createElement('div');
    div.innerHTML = lightboxHTML;
    document.body.appendChild(div.firstElementChild);
  }

  const lightbox = document.getElementById('collective-lightbox');
  const closeBtn = document.getElementById('close-lightbox-btn');
  const prevBtn = document.getElementById('prev-lightbox-btn');
  const nextBtn = document.getElementById('next-lightbox-btn');

  if (closeBtn) closeBtn.onclick = closeLightbox;
  if (prevBtn) prevBtn.onclick = showPrevLightbox;
  if (nextBtn) nextBtn.onclick = showNextLightbox;

  window.addEventListener('keydown', (e) => {
    const lb = document.getElementById('collective-lightbox');
    if (!lb || lb.classList.contains('pointer-events-none')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
  });
}

function openLightbox(index, itemsList = null) {
  if (typeof GALLERY_DATA === 'undefined') return;
  currentGalleryList = itemsList || GALLERY_DATA;
  currentLightboxIndex = index >= 0 && index < currentGalleryList.length ? index : 0;

  const lightbox = document.getElementById('collective-lightbox');
  if (!lightbox) return;

  updateLightboxContent();

  lightbox.classList.remove('opacity-0', 'pointer-events-none');
  lightbox.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
  const item = currentGalleryList[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-image');
  const counter = document.getElementById('lightbox-counter');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const tag = document.getElementById('lightbox-tag');
  const date = document.getElementById('lightbox-date');

  if (img) img.src = item.image;
  if (counter) counter.innerText = `${String(currentLightboxIndex + 1).padStart(2, '0')} / ${String(currentGalleryList.length).padStart(2, '0')}`;
  if (title) title.innerText = item.title;
  if (caption) caption.innerText = item.caption;
  if (tag) tag.innerText = item.category;
  if (date) date.innerText = item.date;
}

function showPrevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

function showNextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryList.length;
  updateLightboxContent();
}

function closeLightbox() {
  const lightbox = document.getElementById('collective-lightbox');
  if (!lightbox) return;

  lightbox.classList.add('opacity-0', 'pointer-events-none');
  lightbox.classList.remove('opacity-100');
  document.body.style.overflow = '';
}

window.initLightbox = initLightbox;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
