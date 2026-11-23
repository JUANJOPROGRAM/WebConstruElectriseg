---
name: ConstruElectriseg
description: Sistema visual para presentar servicios, evidencia de obra y contacto de forma clara y contemporánea.
---

# Sistema visual: ConstruElectriseg

## Dirección

**Precisión en obra.** La web conecta la presentación de la empresa con evidencia fotográfica, un catálogo completo y una ruta clara de contacto. La voz es técnica, profesional y contemporánea; la fotografía real da contexto sin convertir la interfaz en un catálogo genérico.

## Color y tipografía

- Azul técnico `#0066cc` para acciones, enlaces activos y foco; azul profundo `#004f9f` para interacción sobre fondos claros.
- Rojo señal `#ff0015` se reserva para el nombre de marca. WhatsApp conserva su verde `#25d366`.
- Papel neutro `#f5f6f4`, blanco `#ffffff`, tinta `#181b1f` y gris carbón `#2d2d2d` para la sección de Quiénes somos, Misión y Visión.
- La franja fija usa carbón `rgba(37,39,41,.86)` con blur. El menú móvil usa carbón translúcido con blur más intenso para desenfocar el contenido que queda detrás.
- Onest es la tipografía principal, con Barlow local como respaldo. Titulares amplios y compactos; cuerpo legible con interlineado generoso.

## Retícula y composición

- Escritorio: retícula de 12 columnas, gutters de 24px y márgenes laterales de 80px; el contenido se limita a 1600px.
- Móvil: retícula de 4 columnas y márgenes laterales de 24px; se mantienen gutters de 24px para proteger el ancho de lectura.
- La barra de navegación es una franja fija de ancho completo. Inicio abre con titular y fotografía a dos columnas; después alterna bloques de lectura, propósito, ubicación y formulario.
- Servicios abre con un hero fotográfico, una galería horizontal manual en orden aleatorio y fichas apiladas. El índice sticky acompaña el scroll y marca la ficha visible.
- En contacto, el título centrado se sitúa encima del formulario para mantener una sola columna visual y evitar un vacío lateral; el formulario ocupa diez columnas en escritorio y el ancho completo en móvil.
- Radios amplios se reservan para fotos, tarjetas y acciones. El footer mantiene bordes rectos a todo lo ancho.

## Interacción y movimiento

- En Inicio, titular, descripción y CTA se revelan al cargar con un único stagger vertical; la foto principal entra con un wipe horizontal. El hero de Servicios entra con un enfoque suave y sus textos aparecen en secuencia; las páginas usan una transición horizontal breve entre documentos donde View Transitions está disponible.
- El menú hamburguesa anuncia su estado, cierra al elegir un enlace o pulsar Escape, y conserva el foco visible.
- Los carruseles se controlan manualmente y no avanzan solos. Los controles de galería conservan nombres accesibles y contador.
- El contenido entra al desplazarse con un movimiento corto; `prefers-reduced-motion` elimina el desplazamiento y deja todo visible.
- El scrollspy es una navegación por anclas, no oculta fichas: las diez entradas siguen presentes y las cuatro plantillas se identifican como pendientes.

## Contenido que se conserva

Se mantienen el logotipo, textos publicados, rutas, mapa, dirección, correo, teléfono, formulario y conexión EmailJS, enlaces de contacto, fotos de `Resource/images`, seis especialidades completas, las cuatro plantillas pendientes y la información legal del footer. No se inventan servicios ni datos comerciales.
