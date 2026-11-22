# Rediseño de Inicio y Servicios

## Antes

- Capturas guardadas en `before/home-window.png` y `before/servicios-window.png` (ventana 1366 × 720 px).
- Fuente revisada: `Code/html/home.html`, `Code/html/servicios.html`, CSS compartido y controladores existentes.
- Inicio: 15 enlaces, 5 imágenes, 12 encabezados, un formulario con cuatro campos y cuatro etiquetas.
- Servicios: 23 enlaces, 36 imágenes, 18 encabezados; sin formulario.
- CSS anterior: 27,527 bytes, 217 líneas, Barlow; radios principales de 36px, 28px y 999px.
- Navegación funcional visible en fuente: logo, Inicio, Servicios, Contacto, WhatsApp; anclas de contacto y catálogo.
- Fichas funcionales visibles en fuente: índice de 10 especialidades, pestañas accesibles y flechas de galería.

## Decisiones en el orden de la habilidad

1. **Tipo:** familia Onest para toda la interfaz, con pesos diferenciados y escala fluida; Barlow local queda como respaldo.
2. **Color:** se conservan azul técnico `#0066cc` y rojo señal `#ff0015`; papel neutro, gris grafito sin tinte azul para Quiénes somos, Misión y Visión, franja fija carbón con blur.
3. **Marco:** Inicio prioriza el titular y una galería regular de fotos reales. Servicios usa una portada fotográfica y una ficha de contenido con índice. El pie queda rectangular.
4. **Estados:** hover y foco de enlaces, botones, campos, pestañas, controles de galería y menú; se preserva `prefers-reduced-motion`.
5. **Componentes:** navegación, botón, panel fotográfico, tarjeta de servicio, campos y pie siguen una escala compartida de superficies y radios.

## Movimiento

- Entrada corta de la portada, revelado de elementos durante scroll y transiciones para menú, botón y galería.
- Propiedades animadas: opacidad y transform; transición de fotos por `transform`.
- Movimiento reducido: sin desplazamientos y con el contenido siempre visible.

## Conservación

No cambian los textos, rutas, formularios, acciones de EmailJS, mapa, teléfono, logotipo, imágenes, índice ni contenidos de las fichas.

## Verificación pendiente

| Medición de fuente | Antes | Después |
| --- | ---: | ---: |
| Enlaces / imágenes / encabezados — Inicio | 15 / 5 / 12 | 15 / 5 / 12 |
| Campos etiquetados — Inicio | 4 / 4 | 4 / 4 |
| Enlaces / imágenes / encabezados — Servicios | 23 / 36 / 18 | 23 / 36 / 18 |
| Rutas y anclas locales | — | Todas las detectadas existen y los href coinciden |
| CSS compartido | 27,527 bytes; 217 líneas minificadas | 29,715 bytes; 565 líneas legibles |
| Viewport de captura | 1366 × 720 px | Pendiente |

La política del navegador bloqueó la inspección de páginas con URL `file://`. Por ello no se guardó una captura en `after/` ni se pudieron repetir los clics en navegador. El conteo estático y la revisión de diferencias de fuente no sustituyen esa comprobación visual e interactiva. `git diff --check` no reportó errores de whitespace; el CSS mantiene llaves equilibradas, colores de marca y `prefers-reduced-motion`.
