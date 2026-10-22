document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('.service-card')];
  const hero = document.querySelector('.services-hero');
  if (hero && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = 0;
    hero.addEventListener('pointermove', event => {
      if (raf) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 22;
      const y = ((event.clientY - rect.top) / rect.height - .5) * 18;
      raf = requestAnimationFrame(() => {
        hero.style.setProperty('--orbit-x', x.toFixed(1) + 'px');
        hero.style.setProperty('--orbit-y', y.toFixed(1) + 'px');
        raf = 0;
      });
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--orbit-x', '0px');
      hero.style.setProperty('--orbit-y', '0px');
    });
  }
  if (!cards.length) return;

  const modal = document.createElement('div');
  modal.className = 'service-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="service-modal__backdrop" data-close></div>
    <section class="service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" tabindex="-1">
      <button class="service-modal__close" type="button" aria-label="Cerrar detalles" data-close>&times;</button>
      <div class="service-modal__layout">
        <div class="service-modal__gallery">
          <div class="service-modal__stage">
            <div class="service-modal__blur"></div>
            <img class="service-modal__photo" alt="">
            <button type="button" class="service-modal__arrow service-modal__arrow--prev" aria-label="Imagen anterior">&#10094;</button>
            <button type="button" class="service-modal__arrow service-modal__arrow--next" aria-label="Imagen siguiente">&#10095;</button>
            <span class="service-modal__counter" aria-live="polite"></span>
          </div>
          <div class="service-modal__thumbs" aria-label="Seleccionar fotografía"></div>
        </div>
        <div class="service-modal__details">
          <span class="service-modal__eyebrow">NUESTROS SERVICIOS</span>
          <h2 id="service-modal-title"></h2>
          <p class="service-modal__intro">Conoce los trabajos y las soluciones que ofrecemos para tu proyecto.</p>
          <h3>¿Qué incluye este servicio?</h3>
          <ul class="service-modal__features"></ul>
          <a href="home.html#contacto" class="btn-primary service-modal__quote">Solicitar cotización &rarr;</a>
        </div>
      </div>
    </section>`;
  document.body.appendChild(modal);

  const dialog = modal.querySelector('.service-modal__dialog');
  const photo = modal.querySelector('.service-modal__photo');
  const blur = modal.querySelector('.service-modal__blur');
  const thumbs = modal.querySelector('.service-modal__thumbs');
  const counter = modal.querySelector('.service-modal__counter');
  let activeImages = [];
  let currentImage = 0;
  let previousFocus = null;
  let closeTimeout = null;

  function renderImage() {
    if (!activeImages.length) return;
    const image = activeImages[currentImage];
    photo.src = image.src;
    photo.alt = image.alt;
    blur.style.backgroundImage = 'url("' + image.src.replace(/"/g, '%22') + '")';
    counter.textContent = (currentImage + 1) + ' / ' + activeImages.length;
    [...thumbs.children].forEach((button, index) => {
      button.classList.toggle('is-active', index === currentImage);
      button.setAttribute('aria-pressed', String(index === currentImage));
    });
  }

  function changeImage(step) {
    currentImage = (currentImage + step + activeImages.length) % activeImages.length;
    renderImage();
  }

  function closeModal() {
    if (modal.getAttribute('aria-hidden') === 'true' || modal.classList.contains('is-closing')) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    modal.classList.add('is-closing');
    const finish = () => {
      modal.setAttribute('aria-hidden', 'true');
      modal.classList.remove('is-open', 'is-closing');
      document.body.classList.remove('service-modal-open');
      photo.removeAttribute('src');
      blur.style.backgroundImage = '';
      if (previousFocus && previousFocus.isConnected) previousFocus.focus();
      closeTimeout = null;
    };
    if (reducedMotion) finish();
    else closeTimeout = window.setTimeout(finish, 270);
  }

  function openModal(card) {
    if (closeTimeout !== null) { clearTimeout(closeTimeout); closeTimeout = null; }
    modal.classList.remove('is-open', 'is-closing');
    previousFocus = document.activeElement;
    activeImages = [...card.querySelectorAll('.carousel-slide img')].map(image => ({
      src: image.currentSrc || image.src, alt: image.alt || 'Fotografía del servicio'
    }));
    if (!activeImages.length) return;
    currentImage = 0;
    modal.querySelector('#service-modal-title').textContent = card.querySelector('h3')?.textContent || 'Servicio';
    const features = modal.querySelector('.service-modal__features');
    features.replaceChildren();
    card.querySelectorAll('.service-content li').forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.textContent;
      features.appendChild(li);
    });
    thumbs.replaceChildren();
    activeImages.forEach((image, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'service-modal__thumb';
      button.setAttribute('aria-label', 'Ver fotografía ' + (index + 1));
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = '';
      img.loading = 'lazy';
      button.appendChild(img);
      button.addEventListener('click', () => { currentImage = index; renderImage(); });
      thumbs.appendChild(button);
    });
    const multiple = activeImages.length > 1;
    modal.querySelectorAll('.service-modal__arrow').forEach(button => { button.hidden = !multiple; });
    thumbs.hidden = !multiple;
    renderImage();
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('service-modal-open');
    dialog.focus();
    requestAnimationFrame(() => modal.classList.add('is-open'));
  }

  modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', closeModal));
  modal.querySelector('.service-modal__arrow--prev').addEventListener('click', () => changeImage(-1));
  modal.querySelector('.service-modal__arrow--next').addEventListener('click', () => changeImage(1));
  document.addEventListener('keydown', event => {
    if (modal.getAttribute('aria-hidden') === 'true') return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') changeImage(-1);
    if (event.key === 'ArrowRight') changeImage(1);
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll('button:not([hidden]), a[href]')].filter(el => el.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });

  cards.forEach(card => {
    const track = card.querySelector('.carousel-track');
    const slides = [...card.querySelectorAll('.carousel-slide')];
    if (!track || !slides.length) return;
    let index = 0, timer = null;
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (img) slide.style.backgroundImage = 'url("' + img.getAttribute('src').replace(/"/g, '%22') + '")';
    });
    const move = () => {
      index = (index + 1) % slides.length;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
    };
    const stop = () => {
      clearInterval(timer); timer = null;
      index = 0; track.style.transform = 'translateX(0)';
    };
    card.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1 && !timer) timer = setInterval(move, 2800);
    });
    card.addEventListener('mouseleave', stop);
    card.addEventListener('focusout', event => { if (!card.contains(event.relatedTarget)) stop(); });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Ver detalles de ' + (card.querySelector('h3')?.textContent || 'servicio'));
    card.addEventListener('click', event => {
      if (event.target.closest('a, button')) return;
      stop(); openModal(card);
    });
    card.addEventListener('keydown', event => {
      if (event.target !== card || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault(); stop(); openModal(card);
    });
    const hint = document.createElement('span');
    hint.className = 'service-card__hint';
    hint.textContent = 'Ver detalles y fotografías  ↗';
    card.querySelector('.service-content')?.insertBefore(hint, card.querySelector('.service-link'));
  });
});