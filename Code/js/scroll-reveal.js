(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const items = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = Math.min(Number(entry.target.dataset.revealDelay) || 0, 180);
      entry.target.style.setProperty('--reveal-delay', delay + 'ms');
      entry.target.classList.add('is-revealed');
      activeObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  items.forEach(item => observer.observe(item));
  document.documentElement.classList.add('has-scroll-reveal');
})();
