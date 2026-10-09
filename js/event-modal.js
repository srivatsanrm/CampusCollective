/**
 * SPECTRUM — Event Detail & Quick Registration Modal
 */
function initEventModal() {
  const modalHTML = `
  <div id="event-modal-backdrop" class="fixed inset-0 bg-neutral-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
    <div id="event-modal-panel" class="bg-white border border-neutral-200 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl transform scale-95 transition-all duration-300 max-h-[90vh] overflow-y-auto relative">
      <!-- Close Button -->
      <button id="close-event-modal" class="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 transition-colors p-2 rounded-lg hover:bg-neutral-100 z-10">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <!-- Event Content Container -->
      <div id="event-modal-content">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  </div>
  `;

  if (!document.getElementById('event-modal-backdrop')) {
    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div.firstElementChild);
  }

  const backdrop = document.getElementById('event-modal-backdrop');
  const closeBtn = document.getElementById('close-event-modal');

  if (closeBtn) closeBtn.onclick = closeEventModal;
  if (backdrop) {
    backdrop.onclick = (e) => {
      if (e.target === backdrop) closeEventModal();
    };
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEventModal();
  });
}

function openEventModal(eventId) {
  const backdrop = document.getElementById('event-modal-backdrop');
  const panel = document.getElementById('event-modal-panel');
  const container = document.getElementById('event-modal-content');
  if (!backdrop || !panel || !container || typeof EVENTS_DATA === 'undefined') return;

  const event = EVENTS_DATA.find(e => e.id === eventId) || EVENTS_DATA[0];

  container.innerHTML = `
    <!-- Event Banner -->
    <div class="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
      <img src="${event.bannerImage}" alt="${event.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
      
      <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded bg-red-600 text-white font-mono text-[11px] font-bold tracking-wider uppercase">${event.type}</span>
          <span class="px-2.5 py-1 rounded bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-neutral-300 font-mono text-[11px] font-medium tracking-wider uppercase">${event.domain}</span>
        </div>
        <span class="text-xs font-mono font-medium text-neutral-300">${event.status.toUpperCase()}</span>
      </div>
    </div>

    <!-- Header Details -->
    <div class="mb-5">
      <h3 class="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">${event.title}</h3>
      <p class="text-sm font-medium text-red-600 mt-1">${event.tagline}</p>
    </div>

    <!-- Metadata Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-neutral-50 border border-neutral-200/80 rounded-xl mb-6 text-xs">
      <div>
        <span class="text-neutral-500 font-medium block">Date & Time</span>
        <span class="font-semibold text-neutral-900 mt-0.5 block">${event.date}</span>
      </div>
      <div>
        <span class="text-neutral-500 font-medium block">Campus Venue</span>
        <span class="font-semibold text-neutral-900 mt-0.5 block">${event.venue}</span>
      </div>
      <div>
        <span class="text-neutral-500 font-medium block">Eligibility</span>
        <span class="font-semibold text-neutral-900 mt-0.5 block">${event.teamSize} · All SRM Students</span>
      </div>
    </div>

    <!-- Description -->
    <div class="space-y-4 mb-6 text-sm text-neutral-700 leading-relaxed">
      <p>${event.description}</p>
      
      <!-- Key Highlights -->
      <div>
        <h4 class="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2">Event Highlights & Focus Areas</h4>
        <ul class="space-y-1.5">
          ${event.highlights.map(h => `
            <li class="flex items-start gap-2 text-neutral-600">
              <span class="text-red-600 font-bold mt-0.5">•</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Perks & Awards -->
      <div class="p-3.5 bg-neutral-100/80 rounded-lg border border-neutral-200 flex flex-col sm:flex-row gap-3">
        <div class="flex-1">
          <span class="text-[11px] font-bold tracking-wider uppercase text-neutral-500 block">Prizes & Recognition</span>
          <span class="text-xs font-semibold text-neutral-900 mt-0.5 block">${event.prizes}</span>
        </div>
        <div class="flex-1 sm:border-l sm:border-neutral-200 sm:pl-3">
          <span class="text-[11px] font-bold tracking-wider uppercase text-neutral-500 block">Accreditation</span>
          <span class="text-xs font-semibold text-neutral-900 mt-0.5 block">${event.certificate}</span>
        </div>
      </div>
    </div>

    <!-- Quick Registration Form -->
    <div id="event-reg-section" class="border-t border-neutral-200 pt-5">
      <h4 class="font-bold text-sm tracking-tight text-neutral-900 mb-3">Reserve Your Student Spot</h4>
      <form onsubmit="handleEventRegister(event, '${event.id}')" class="space-y-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" required placeholder="Full Name" class="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600">
          <input type="text" required placeholder="SRM Reg Number" class="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="email" required placeholder="SRM Email (student@srmist.edu.in)" class="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600">
          <input type="tel" required placeholder="WhatsApp Contact" class="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600">
        </div>
        <button type="submit" class="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2">
          <span>Confirm RSVP · Free Admission</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </form>
    </div>

    <!-- Pass Confirmation View (Hidden initially) -->
    <div id="event-pass-confirmed" class="hidden text-center py-6">
      <div class="inline-flex p-3 rounded-full bg-red-50 text-red-600 mb-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h4 class="text-xl font-bold text-neutral-900">Registration Confirmed!</h4>
      <p class="text-xs text-neutral-600 mt-1 max-w-sm mx-auto">
        Your spot has been allocated. A pass code has been dispatched to your registered SRM email ID.
      </p>
      
      <!-- Digital Ticket Badge -->
      <div class="mt-4 p-4 border border-dashed border-red-300 bg-red-50/50 rounded-xl max-w-md mx-auto text-left font-mono">
        <div class="flex justify-between items-center text-xs border-b border-red-200 pb-2 mb-2">
          <span class="font-bold text-red-600">SPECTRUM ENTRY PASS</span>
          <span class="text-neutral-500">SRM RAMAPURAM</span>
        </div>
        <div class="text-xs text-neutral-800 font-semibold">${event.title}</div>
        <div class="text-[11px] text-neutral-600 mt-1">Pass ID: SPEC-${Math.floor(100000 + Math.random() * 900000)}</div>
      </div>

      <button type="button" onclick="closeEventModal()" class="mt-5 px-6 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
        Close Pass
      </button>
    </div>
  `;

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100');
  panel.classList.remove('scale-95');
  panel.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const backdrop = document.getElementById('event-modal-backdrop');
  const panel = document.getElementById('event-modal-panel');
  if (!backdrop || !panel) return;

  backdrop.classList.add('opacity-0', 'pointer-events-none');
  backdrop.classList.remove('opacity-100');
  panel.classList.add('scale-95');
  panel.classList.remove('scale-100');
  document.body.style.overflow = '';
}

function handleEventRegister(e, eventId) {
  e.preventDefault();
  const regSection = document.getElementById('event-reg-section');
  const passSection = document.getElementById('event-pass-confirmed');
  if (regSection) regSection.classList.add('hidden');
  if (passSection) passSection.classList.remove('hidden');

  if (window.showToast) {
    window.showToast("Event ticket issued! Check your email.", "success");
  }
}

window.initEventModal = initEventModal;
window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;
window.handleEventRegister = handleEventRegister;
