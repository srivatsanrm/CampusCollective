/**
 * SPECTRUM — Minimal Toast Notification System
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';
  toast.className = `transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto p-4 rounded-xl border shadow-xl flex items-center gap-3 text-xs font-medium ${
    isSuccess 
      ? 'bg-neutral-900 border-neutral-800 text-white' 
      : 'bg-white border-neutral-200 text-neutral-900'
  }`;

  const icon = isSuccess 
    ? `<span class="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[11px] font-bold">✓</span>`
    : `<span class="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 text-[11px] font-bold">i</span>`;

  toast.innerHTML = `
    ${icon}
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  }, 10);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.showToast = showToast;
