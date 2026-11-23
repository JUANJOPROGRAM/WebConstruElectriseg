document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const index = document.querySelector('#service-index .service-index__items');
  const showcase = document.querySelector('#showcase-carousel');
  const track = document.querySelector('#showcase-track');
  if (!cards.length || !index) return;

  const shuffle = items => {
    const shuffled = items.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const photos = cards.filter(card => card.dataset.template !== 'true')
    .map(card => ({
      title: card.querySelector('.service-content h3')?.textContent.trim() || 'Trabajo realizado',
      image: card.querySelector('.carousel-slide img')
    }))
    .filter(item => item.image);

  if (showcase && track && photos.length) {
    shuffle(photos).forEach((photo, position) => {
      const figure = document.createElement('figure');
      figure.className = 'showcase-slide';
      const image = photo.image.cloneNode(false);
      image.loading = position < 2 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.alt = photo.image.alt.replace(/, fotografía 1$/i, '');
      const caption = document.createElement('figcaption');
      caption.textContent = photo.title;
      figure.append(image, caption);
      track.appendChild(figure);
    });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = direction => {
      const slide = track.querySelector('.showcase-slide');
      if (!slide) return;
      track.scrollBy({ left: direction * (slide.getBoundingClientRect().width + 18), behavior: reducedMotion ? 'auto' : 'smooth' });
    };
    showcase.querySelector('.showcase-control--prev')?.addEventListener('click', () => step(-1));
    showcase.querySelector('.showcase-control--next')?.addEventListener('click', () => step(1));
  }

  const makeArrow = (direction, title) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'service-gallery-control service-gallery-control--' + direction;
    button.setAttribute('aria-label', (direction === 'prev' ? 'Fotografía anterior de ' : 'Fotografía siguiente de ') + title);
    button.innerHTML = direction === 'prev'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    return button;
  };

  const navLinks = [];
  cards.forEach((card, cardIndex) => {
    const heading = card.querySelector('.service-content h3');
    const title = heading?.textContent.trim() || 'Servicio ' + (cardIndex + 1);
    const isTemplate = card.dataset.template === 'true';
    const cardId = 'servicio-' + String(cardIndex + 1).padStart(2, '0');
    card.id = cardId;
    card.setAttribute('tabindex', '-1');

    const link = document.createElement('a');
    link.className = 'service-index__link';
    link.href = '#' + cardId;
    link.textContent = isTemplate ? 'Servicio pendiente ' + String(cardIndex - 5).padStart(2, '0') : title;
    if (isTemplate) link.setAttribute('aria-label', 'Servicio ' + (cardIndex + 1) + ', ficha pendiente por completar');
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'location');
    });
    navLinks.push(link);
    index.appendChild(link);
    if (cardIndex === 0) link.setAttribute('aria-current', 'location');

    if (isTemplate) {
      card.classList.add('is-template');
      const content = card.querySelector('.service-content');
      const note = document.createElement('p');
      note.className = 'service-template-note';
      note.textContent = 'Ficha de plantilla pendiente por completar.';
      content?.insertBefore(note, heading);
      card.querySelector('.service-link')?.remove();
    }

    const gallery = card.querySelector('.service-img-wrapper');
    const track = card.querySelector('.carousel-track');
    const slides = Array.from(card.querySelectorAll('.carousel-slide'));
    if (!gallery || !track || slides.length < 2) return;

    const previous = makeArrow('prev', title);
    const next = makeArrow('next', title);
    const count = document.createElement('span');
    count.className = 'service-gallery-count';
    count.setAttribute('role', 'status');
    count.setAttribute('aria-live', 'polite');
    gallery.append(previous, next, count);
    let current = 0;
    const showImage = nextIndex => {
      current = (nextIndex + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      slides.forEach((slide, slideIndex) => slide.setAttribute('aria-hidden', String(slideIndex !== current)));
      count.textContent = (current + 1) + ' / ' + slides.length;
    };
    previous.addEventListener('click', () => showImage(current - 1));
    next.addEventListener('click', () => showImage(current + 1));
    track.setAttribute('aria-label', 'Fotografías de ' + title);
    showImage(0);
  });

  if ('IntersectionObserver' in window) {
    const activeSection = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
    cards.forEach(card => activeSection.observe(card));
  }
});
