document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const index = document.querySelector('#service-index');
  const tablist = index?.querySelector('.service-index__items');
  if (!cards.length || !index || !tablist) return;

  const tabs = [];
  let selected = 0;

  function selectService(nextIndex, moveFocus) {
    selected = nextIndex;
    cards.forEach((card, cardIndex) => {
      const active = cardIndex === selected;
      card.hidden = !active;
      tabs[cardIndex].setAttribute('aria-selected', String(active));
      tabs[cardIndex].tabIndex = active ? 0 : -1;
      tabs[cardIndex].classList.toggle('is-active', active);
    });
    if (moveFocus) tabs[selected].focus();
  }

  function makeArrow(direction, title) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'service-gallery-control service-gallery-control--' + direction;
    button.setAttribute('aria-label', (direction === 'prev' ? 'Fotografía anterior de ' : 'Fotografía siguiente de ') + title);
    button.innerHTML = direction === 'prev'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    return button;
  }

  cards.forEach((card, cardIndex) => {
    const heading = card.querySelector('.service-content h3');
    const title = heading?.textContent.trim() || 'Servicio';
    const isTemplate = card.dataset.template === 'true';
    const tab = document.createElement('button');
    const cardId = 'service-record-' + (cardIndex + 1);
    const tabId = 'service-tab-' + (cardIndex + 1);

    tab.type = 'button';
    tab.id = tabId;
    tab.role = 'tab';
    tab.setAttribute('aria-controls', cardId);
    tab.setAttribute('aria-selected', String(cardIndex === 0));
    tab.tabIndex = cardIndex === 0 ? 0 : -1;
    tab.textContent = isTemplate ? 'Ficha de plantilla ' + String(cardIndex - 5).padStart(2, '0') : title;
    if (isTemplate) tab.setAttribute('aria-label', 'Ficha de plantilla pendiente por completar, servicio ' + (cardIndex + 1));
    tab.addEventListener('click', () => selectService(cardIndex, false));
    tab.addEventListener('keydown', event => {
      let next = selected;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (selected + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (selected - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectService(next, true);
    });
    tabs.push(tab);
    tablist.appendChild(tab);

    card.id = cardId;
    card.setAttribute('role', 'tabpanel');
    card.setAttribute('aria-labelledby', tabId);
    card.tabIndex = 0;
    card.hidden = cardIndex !== 0;

    if (isTemplate) {
      card.classList.add('is-template');
      const content = card.querySelector('.service-content');
      const note = document.createElement('p');
      note.className = 'service-template-note';
      note.textContent = 'Ficha de plantilla pendiente por completar.';
      content?.insertBefore(note, heading);
      card.querySelector('.service-link')?.remove();
    }

    const track = card.querySelector('.carousel-track');
    const slides = Array.from(card.querySelectorAll('.carousel-slide'));
    if (!track || slides.length < 2) return;

    const previous = makeArrow('prev', title);
    const next = makeArrow('next', title);
    const count = document.createElement('span');
    count.className = 'service-gallery-count';
    count.setAttribute('role', 'status');
    count.setAttribute('aria-live', 'polite');
    const gallery = card.querySelector('.service-img-wrapper');
    gallery.append(previous, next, count);
    let current = 0;

    function showImage(nextIndex) {
      current = (nextIndex + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      slides.forEach((slide, slideIndex) => slide.setAttribute('aria-hidden', String(slideIndex !== current)));
      count.textContent = (current + 1) + ' / ' + slides.length;
    }

    previous.addEventListener('click', () => showImage(current - 1));
    next.addEventListener('click', () => showImage(current + 1));
    track.setAttribute('aria-label', 'Fotografías de ' + title);
    showImage(0);
  });

  index.classList.add('is-ready');
  selectService(0, false);
});
