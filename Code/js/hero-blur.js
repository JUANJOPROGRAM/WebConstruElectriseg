document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const slogan = hero?.querySelector('.hero-slogan-card');
  if (!hero || !slogan) return;
  let frame = 0;
  const updateBlur = () => {
    frame = 0;
    const h = hero.getBoundingClientRect();
    const s = slogan.getBoundingClientRect();
    if (!h.width || !h.height || !s.width) return;
    const x = s.left - h.left + s.width / 2;
    const y = s.top - h.top + s.height / 2;
    hero.style.setProperty('--blur-x', x + 'px');
    hero.style.setProperty('--blur-y', y + 'px');
    hero.style.setProperty('--blur-rx', Math.min(h.width * .49, s.width * .72 + 60) + 'px');
    hero.style.setProperty('--blur-ry', (s.height * .8 + 52) + 'px');
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(updateBlur); };
  schedule();
  window.addEventListener('resize', schedule, {passive:true});
  window.addEventListener('load', schedule, {once:true});
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    observer.observe(slogan);
  }
});