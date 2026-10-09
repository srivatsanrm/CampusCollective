/**
 * SPECTRUM — Join Spectrum Interactive Modal
 * Multi-step student recruitment & onboarding flow.
 */
function initJoinModal() {
  const modalHTML = `
  <div id="join-modal-backdrop" class="fixed inset-0 bg-neutral-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-all duration-300">
    <div id="join-modal-panel" class="bg-white border border-neutral-200 rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl transform scale-95 transition-all duration-300 max-h-[90vh] overflow-y-auto relative">
      <!-- Close Button -->
      <button id="close-join-modal" class="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 transition-colors p-2 rounded-lg hover:bg-neutral-100">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <!-- Modal Header -->
      <div class="mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-wider uppercase mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          Recruitment Open · SRM Ramapuram
        </div>
        <h3 class="text-2xl font-bold tracking-tight text-neutral-900">Find Your Place in the Spectrum</h3>
        <p class="text-sm text-neutral-600 mt-1">Join our multidisciplinary collective of builders, designers, and organizers.</p>
      </div>

      <!-- Application Form -->
      <form id="spectrum-join-form" onsubmit="handleJoinSubmit(event)">
        <!-- Step 1: Personal Details -->
        <div id="form-step-1" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" required placeholder="e.g. Aditi Sharma" class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
            </div>
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Register Number *</label>
              <input type="text" required placeholder="e.g. RA2311003010..." class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">SRM Student Email *</label>
              <input type="email" required placeholder="as1234@srmist.edu.in" class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
            </div>
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input type="tel" required placeholder="+91 98765 43210" class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Department / Major *</label>
              <select required class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
                <option value="">Select Department</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="AIDS">AI & Data Science</option>
                <option value="MECH">Mechanical Engineering</option>
                <option value="BBA_MBA">Management Studies</option>
                <option value="OTHER">Other Department</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Year of Study *</label>
              <select required class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>

          <!-- Domain Selection -->
          <div class="pt-2">
            <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Primary Domain of Interest *</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="CREATIVE" required class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">CREATIVE</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="TECHNICAL" class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">TECHNICAL</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="OPERATIONS" class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">OPERATIONS</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="PR" class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">PR</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="BUSINESS" class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">BUSINESS</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 border border-neutral-200 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50/30 transition-colors">
                <input type="radio" name="domain" value="CAPTURE" class="accent-red-600">
                <span class="text-xs font-semibold text-neutral-900">CAPTURE</span>
              </label>
            </div>
          </div>

          <!-- Portfolio / Links -->
          <div>
            <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Portfolio / GitHub / LinkedIn / Behance</label>
            <input type="url" placeholder="https://..." class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all">
          </div>

          <!-- Motivation -->
          <div>
            <label class="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">Why Spectrum? (Tell us what drives you) *</label>
            <textarea rows="3" required placeholder="What kind of projects or events do you want to build with us?" class="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all resize-none"></textarea>
          </div>

          <button type="submit" class="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 text-sm">
            <span>Submit Application</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

        <!-- Success Confirmation State (Hidden initially) -->
        <div id="join-success-state" class="hidden text-center py-8 space-y-4">
          <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h4 class="text-2xl font-bold text-neutral-900">Application Received!</h4>
          <p class="text-neutral-600 text-sm max-w-md mx-auto">
            Welcome to the threshold of Spectrum. Our domain leads review incoming applications every week. Keep an eye on your SRM student inbox for the interview invite.
          </p>
          <div class="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://www.instagram.com/spectrumclub.official/" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 border border-neutral-300 hover:border-neutral-900 rounded-lg text-xs font-semibold text-neutral-900 transition-colors">
              Follow on Instagram →
            </a>
            <button type="button" onclick="closeJoinModal()" class="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors">
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  `;

  // Inject modal into DOM if not present
  if (!document.getElementById('join-modal-backdrop')) {
    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div.firstElementChild);
  }

  // Bind close triggers
  const backdrop = document.getElementById('join-modal-backdrop');
  const closeBtn = document.getElementById('close-join-modal');

  if (closeBtn) closeBtn.onclick = closeJoinModal;
  if (backdrop) {
    backdrop.onclick = (e) => {
      if (e.target === backdrop) closeJoinModal();
    };
  }

  // Keyboard shortcut (Escape)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeJoinModal();
  });
}

function openJoinModal(preselectedDomain = null) {
  const backdrop = document.getElementById('join-modal-backdrop');
  const panel = document.getElementById('join-modal-panel');
  if (!backdrop || !panel) return;

  // Reset states
  const formStep1 = document.getElementById('form-step-1');
  const successState = document.getElementById('join-success-state');
  if (formStep1) formStep1.classList.remove('hidden');
  if (successState) successState.classList.add('hidden');

  // Preselect domain if specified
  if (preselectedDomain) {
    const radio = document.querySelector(`input[name="domain"][value="${preselectedDomain}"]`);
    if (radio) radio.checked = true;
  }

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100');
  panel.classList.remove('scale-95');
  panel.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
  const backdrop = document.getElementById('join-modal-backdrop');
  const panel = document.getElementById('join-modal-panel');
  if (!backdrop || !panel) return;

  backdrop.classList.add('opacity-0', 'pointer-events-none');
  backdrop.classList.remove('opacity-100');
  panel.classList.add('scale-95');
  panel.classList.remove('scale-100');
  document.body.style.overflow = '';
}

function handleJoinSubmit(e) {
  e.preventDefault();
  const formStep1 = document.getElementById('form-step-1');
  const successState = document.getElementById('join-success-state');
  
  if (formStep1) formStep1.classList.add('hidden');
  if (successState) successState.classList.remove('hidden');

  // Trigger celebration confetti if available or trigger custom visual
  if (window.showToast) {
    window.showToast("Application submitted successfully! Check your inbox soon.", "success");
  }
}

window.initJoinModal = initJoinModal;
window.openJoinModal = openJoinModal;
window.closeJoinModal = closeJoinModal;
window.handleJoinSubmit = handleJoinSubmit;
