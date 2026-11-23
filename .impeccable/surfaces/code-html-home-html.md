---
version: 1
slug: "code-html-home-html"
primary_target: "Code/html/home.html"
related_targets: ["Code/html/servicios.html"]
---

## Scope
Rediseño de Inicio y Servicios como recorrido comercial continuo. Modo Persuade. Audiencias: clientes residenciales, pequeños negocios y organizaciones públicas o privadas.

## Direction contract
THESIS: ConstruElectriseg presenta una empresa de ingeniería y construcción con una interfaz contemporánea y clara: primero el propósito, después evidencia fotográfica y finalmente contacto.

OWN-WORLD: Azul técnico y rojo señal conservan la identidad. La base usa grises neutros, tinta oscura y fotografía propia. Una franja fija gris carbón con glassmorphism organiza la navegación; el menú móvil intensifica el blur para desenfocar el contenido posterior. La retícula es de 12 columnas con gutters de 24px y márgenes de 80px en escritorio; cuatro columnas en móvil. Onest lidera la tipografía, con Barlow local como respaldo. Las tarjetas y fotografías usan radios amplios; el footer es recto.

STORY: Home abre con un split screen y revelado del titular, presenta la respuesta publicada a «¿Quiénes somos?», alterna Misión y Visión con fotografías, y continúa con ubicación y formulario. El título de contacto va centrado encima del formulario, que ocupa diez columnas en escritorio y cuatro en móvil. Servicios presenta un hero, fotografías de trabajo en orden aleatorio en un carrusel manual y las diez fichas completas en el documento, guiadas por un scrollspy sticky. Seis fichas tienen contenido y cuatro se mantienen identificadas como plantillas pendientes.

FIRST VIEWPORT: Franja fija con marca y enlaces Home, Servicios y Contáctanos. En escritorio, texto dominante en una mitad y fotografía real en la otra; en móvil se apilan en cuatro columnas. CTA de contacto enlaza con el formulario final.

FORM: Construcción code-first con HTML, CSS y JavaScript del proyecto. El carrusel no avanza solo. El scrollspy enlaza a las fichas y marca la visible sin ocultar las demás. Titular, descripción y CTA del hero se revelan en secuencia vertical y la foto principal entra con un wipe horizontal; `prefers-reduced-motion` retira el movimiento. El hero de Servicios revela su contenido con un enfoque suave y escalonado; otras secciones entran brevemente al desplazarse y la transición entre páginas es horizontal.

FINISH: Conservar rutas, textos, imágenes, formulario conectado a EmailJS, mapa, contactos, logo, aviso legal y todas las acciones ya publicadas.

## Constraints
No inventar los servicios pendientes, certificaciones, cifras, clientes, resultados ni cobertura. Mantener las etiquetas de formulario, foco visible, menú accesible por teclado y fotos existentes de `Resource/images`.

## Unresolved
Las fichas 7–10 continúan esperando su contenido definitivo.
