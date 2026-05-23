/* ============================================================
   AfyaTech — WhatsApp Floating Widget · JS
   Phone: +254743336009
   ============================================================ */

(function () {
  const WA_NUMBER = '254743336009';
  const WA_MESSAGE = encodeURIComponent(
    'Hello AfyaTech 👋 I found you on your website and would like to learn more about your AI healthcare solutions.'
  );
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  // Current time greeting
  function greeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning!';
    if (h < 17) return 'Good afternoon!';
    return 'Good evening!';
  }

  // Inject HTML
  const widget = document.createElement('div');
  widget.className = 'wa-widget';
  widget.innerHTML = `
    <!-- Chat panel -->
    <div class="wa-panel" id="wa-panel" role="dialog" aria-label="WhatsApp chat" aria-modal="true">
      <div class="wa-panel__head">
        <div class="wa-panel__avatar"><i class="fa-brands fa-whatsapp"></i></div>
        <div>
          <p class="wa-panel__name">AfyaTech Support</p>
          <span class="wa-panel__status">Typically replies within minutes</span>
        </div>
        <button class="wa-panel__close" id="wa-close" aria-label="Close WhatsApp chat">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="wa-panel__body">
        <div class="wa-msg">
          <p>${greeting()} 👋</p>
          <p>Welcome to <strong>AfyaTech</strong> — AI-powered healthcare for East Africa.</p>
          <p>How can we help you today? Tap the button below to start chatting with our team on WhatsApp.</p>
          <span class="wa-msg__time">${new Date().toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
      <div class="wa-panel__footer">
        <a class="wa-panel__cta" href="${WA_LINK}" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat with AfyaTech">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
      </div>
    </div>

    <!-- FAB toggle -->
    <button class="wa-fab" id="wa-fab" aria-label="Open WhatsApp chat" aria-expanded="false">
      <i class="fa-brands fa-whatsapp"></i>
      <i class="fa-solid fa-xmark"></i>
      <span class="wa-tooltip" id="wa-tooltip">Chat with us!</span>
    </button>
  `;

  document.body.appendChild(widget);

  const fab     = document.getElementById('wa-fab');
  const panel   = document.getElementById('wa-panel');
  const closeBtn = document.getElementById('wa-close');
  const tooltip = document.getElementById('wa-tooltip');

  // Hide tooltip after 5 s or on first open
  const tooltipTimer = setTimeout(() => tooltip.classList.add('hidden'), 5000);

  function openPanel() {
    panel.classList.add('open');
    fab.classList.add('active');
    fab.setAttribute('aria-expanded', 'true');
    tooltip.classList.add('hidden');
    clearTimeout(tooltipTimer);
    // Remember user has interacted
    try { sessionStorage.setItem('wa_opened', '1'); } catch (_) {}
  }

  function closePanel() {
    panel.classList.remove('open');
    fab.classList.remove('active');
    fab.setAttribute('aria-expanded', 'false');
  }

  function togglePanel() {
    panel.classList.contains('open') ? closePanel() : openPanel();
  }

  fab.addEventListener('click', togglePanel);
  closeBtn.addEventListener('click', closePanel);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  // Auto-open after 8 s on first visit to the site
  try {
    if (!sessionStorage.getItem('wa_opened')) {
      setTimeout(openPanel, 8000);
    }
  } catch (_) {}
})();
