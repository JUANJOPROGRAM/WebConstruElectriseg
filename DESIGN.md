---
name: ConstruElectriseg
description: Presentación clara de especialidades, fotografías de trabajo y contacto.
colors:
  paper: "#f2f7fc"
  surface: "#ffffff"
  about-wash: "#2d2d2d"
  about-ink: "#f4f4f4"
  about-muted: "#c9c9c9"
  nav-surface: "rgba(67,67,67,.92)"
  ink: "#0c2035"
  ink-soft: "#42566c"
  muted: "#52667a"
  technical-blue: "#0066cc"
  deep-blue: "#064785"
  light-blue: "#dceeff"
  signal-red: "#ff0015"
  brand-red: "#c90012"
  red-light: "#ff7580"
  whatsapp-green: "#25d366"
  blur-light: "rgba(237,242,248,.82)"
  blur-dark: "rgba(13,32,53,.78)"
  form-bg: "#f7faff"
  form-stroke: "#b8c9d8"
  map-surface: "#dce8f1"
  service-hero-base: "#092b4d"
  service-hero-scrim: "rgba(5,25,47,.87)"
  footer: "#0b223b"
typography:
  display:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.45vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 6.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 4.4vw, 4.35rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
rounded:
  panel: "36px"
  card: "28px"
  control: "999px"
  field: "18px"
  field-message: "20px"
  index: "30px"
  small-card: "22px"
  photo: "34px"
  services-hero: "42px"
  cta-card: "40px"
spacing:
  page-gutter: "clamp(20px, 5vw, 76px)"
  content-max: "1380px"
  section: "clamp(78px, 10vw, 144px)"
  sm: "16px"
  md: "22px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.technical-blue}"
    textColor: "{colors.surface}"
    typography: "700 1rem/1.2 Barlow, Arial, sans-serif"
    rounded: "{rounded.control}"
    padding: "14px 23px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.deep-blue}"
  button-contact:
    backgroundColor: "{colors.technical-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
    height: "44px"
  input-field:
    backgroundColor: "#f7faff"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 16px"
    height: "52px"
---

# Design System: ConstruElectriseg

## Overview

**Creative North Star: "Precisión en obra"**

La presencia visual convierte Inicio en una presentación editorial de la oferta: un titular amplio comparte protagonismo con fotografías publicadas en una composición conectada. Servicios continúa el recorrido con una portada fotográfica y un índice que cambia una ficha activa con imágenes y detalles. La información publicada y la evidencia visual siguen siendo el contenido central.

La voz permanece técnica, profesional y contemporánea. Barlow, azules de marca y superficies claras mantienen el carácter reconocible; los radios amplios y el blurmorfismo aportan profundidad a la navegación y a los rótulos fotográficos. El rojo señal sigue identificando el nombre de marca. La frase «Precisión en obra» funciona como encuadre durable solo cuando acompaña esta presentación sin añadir una promesa comercial.

**Key Characteristics:**
- Azul técnico para acciones, enlaces e índice seleccionado; rojo para el nombre de marca.
- Fotografías publicadas en superficies amplias, redondeadas y conectadas.
- Barlow de titulares grandes con texto de lectura sobrio.
- Blurmorfismo: la navegación flotante usa gris neutro translúcido y blur; el menú móvil usa un velo gris claro semitransparente y blur visible para mantener legibles las opciones mientras se reconoce el contenido posterior desenfocado.
- El bloque grafito de «¿Quiénes somos?» hasta Visión da un peso visual continuo al propósito de la empresa.
- El catálogo conserva las especialidades publicadas y señala las fichas de plantilla.

## Colors

La paleta conserva el azul técnico y el rojo señal de marca sobre papel azul pálido, superficies blancas y tinta azul carbón; un gris grafito neutro y sin matiz azul unifica «¿Quiénes somos?», Misión y Visión; el verde identifica WhatsApp.

### Primary
- **Azul técnico**: acciones principales, estado seleccionado del índice, foco visible y enlaces funcionales.
- **Azul profundo**: interacción de botones y texto de enlace sobre superficies claras.
- **Azul claro**: enlaces secundarios y superficies de apoyo.

### Secondary
- **Rojo señal**: énfasis de la palabra ELECTRISEG en la marca; no compite con las acciones azules.
- **Rojo de marca**: tono más oscuro aplicado al nombre sobre superficies claras.
- **Rojo claro**: versión de la marca sobre fondos oscuros.

### Tertiary
- **Verde WhatsApp**: acceso de contacto flotante.

### Neutral
- **Papel azul pálido**: fondo general y marco claro de la galería.
- **Grafito neutro de propósito** (`#2d2d2d`): fondo compartido, rectangular y sin tinte azul, desde «¿Quiénes somos?» hasta el final de Visión; usa texto claro y gris neutro para el encabezado y su descripción.
- **Gris humo de navegación** (`rgba(67,67,67,.92)`): superficie gris neutra de la navegación flotante, ligeramente más oscura que la referencia, con blur de fondo de 30px.
- **Superficie blanca**: fichas e inputs.
- **Tinta azul carbón**: encabezados y texto principal.
- **Tinta suave**: descripciones y texto secundario.
- **Tinta auxiliar**: textos de apoyo y placeholders.
- **Blur claro** y **blur azul oscuro**: superficies translúcidas en la navegación, etiquetas y contadores; usar `backdrop-filter` de 24–30px con saturación discreta.

### Named Rules
**The Blue Leads Rule.** Usa azul para orientar acciones y estados; deja el rojo para el nombre de marca y el verde para WhatsApp.

## Typography

**Display Font:** Barlow (with Arial, sans-serif fallback)

**Body Font:** Barlow (with Arial, sans-serif fallback)

**Character:** Barlow comunica precisión contemporánea con titulares compactos y pesados. El mismo rostro acompaña párrafos, índices y formularios para mantener unidad entre presentación y consulta.

### Hierarchy
- **Display** (700, fluido desde 3.5rem hasta 6rem, line-height .91): titular dominante de Inicio; se reduce y refluye en móvil.
- **Headline** (700, fluido desde 3.2rem hasta 6rem, line-height .94): apertura fotográfica de Servicios.
- **Title** (700, fluido desde 2.35rem hasta 4.35rem, line-height .99): encabezados de sección.
- **Body** (400, 17px, line-height 1.55): lectura general; descripciones usan interlineado más amplio y ancho limitado.
- **Label** (700, .95rem): etiquetas del formulario e índice de especialidades.

### Named Rules
**The Evidence First Rule.** Mantén los titulares dominantes y la descripción a escala legible, vinculada al contenido y a las fotografías publicadas.

## Layout

El contenido usa márgenes laterales fluidos de 20px a 76px y un ancho de hasta 1380px; las secciones abren su espacio entre 78px y 144px. En Inicio, texto y acción preceden una composición de tres fotografías superpuestas en escritorio. El bloque grafito de propósito comienza en «¿Quiénes somos?» y termina después de Visión, con las tarjetas blancas destacadas sobre ese fondo oscuro. Hasta 1050px se estrecha el espacio; hasta 760px el texto queda encima de una galería horizontal con desplazamiento y ajuste por foto (`scroll-snap-type: x mandatory`). En anchos inferiores a 390px, la galería y etiquetas vuelven a compactarse.

Servicios presenta una fotografía de portada redondeada, seguida por un registro de dos columnas: índice vertical y ficha activa. El índice queda fijo durante el recorrido en escritorio; hasta 1050px la ficha pasa a una columna, y hasta 760px el índice se vuelve una fila horizontal desplazable antes de la ficha. El formulario usa dos columnas de campos y se apila a una columna en móvil. El mapa conserva el iframe de Google Maps con una alternativa de dirección y enlace a Maps debajo; si el iframe no carga, esa alternativa sigue visible. La primera foto de Servicios se carga con prioridad alta y `loading="eager"`; las imágenes restantes usan carga diferida. El pie pasa de cuatro columnas a dos y luego a una.

## Elevation & Depth

El sistema combina capas tonales, blurmorfismo y sombras suaves. Las sombras separan la cápsula de navegación, las fotografías, las fichas y las acciones flotantes; no sustituyen el contraste de texto. La navegación gris neutra usa desenfoque de 30px; el panel de menú móvil usa una base clara translúcida (`rgba(238,243,248,.56)`) y desenfoque de 54px para que el contenido posterior siga perceptible, pero se lea claramente desenfocado. Los índices, etiquetas y controles flotantes usan desenfoque de 20–30px con contraste suficiente para mantener su lectura.

### Shadow Vocabulary
- **Panel fotográfico** (`0 24px 70px rgba(13,43,73,.13)`): eleva la imagen principal y la ficha de servicio.
- **Navegación difusa** (`0 18px 50px rgba(8,12,18,.3)`): separa la cápsula carbón del contenido con una sombra ambiental amplia.
- **WhatsApp flotante** (`0 12px 32px rgba(12,31,24,.24)`): mantiene visible el acceso persistente.
- **Ficha de misión y visión** (`0 20px 58px rgba(15,45,73,.08)`): separa los registros de propósito del lienzo.

## Shapes

Las superficies principales usan esquinas amplias: paneles de 36px, tarjetas de 28px, portada de Servicios de 42px y controles plenamente redondos. El bloque de propósito y el footer son las únicas superficies principales rectangulares; el bloque oscuro abarca de «¿Quiénes somos?» hasta Visión. Fotos y contenido se recortan dentro de paneles; la galería de Inicio usa marcos claros alrededor de las dos fotografías secundarias en escritorio, que se convierten en diapositivas amplias en móvil. El índice tiene su propio contenedor redondeado, y los botones y chips de navegación emplean forma de cápsula. Campos de formulario son redondeados pero no circulares.

## Motion

Los bloques de texto, fotografías y superficies aparecen al entrar en el área de lectura durante el scroll. Cada revelado usa opacidad y un desplazamiento vertical corto de 12–14px, con una duración de 460–540ms. La observación se hace una sola vez por elemento y no oculta contenido hasta que JavaScript inicializa el observador. Con `prefers-reduced-motion: reduce`, el revelado queda desactivado, las transiciones y animaciones se eliminan y el contenido permanece visible.

## Components

### Buttons
- **Character:** acciones azules sólidas, cómodas y redondeadas.
- **Shape:** cápsula (999px).
- **Primary:** azul técnico, texto blanco, 14px 23px de padding y altura mínima de 52px.
- **Hover / Focus:** azul profundo, leve elevación y anillo de foco visible de 3px.
- **Navigation contact:** misma acción en formato compacto, altura mínima de 44px.
- **Service link:** cápsula azul clara con texto azul profundo; se vuelve azul con texto blanco al pasar.

### Cards / Containers
- **Corner Style:** panel amplio (36px) y tarjeta (28px); móvil reduce algunos paneles a 29–32px.
- **Background:** blanco, papel azul pálido, blur claro o azul profundo según jerarquía; el bloque de propósito usa grafito con contenido claro.
- **Shadow Strategy:** elevación ambiental; la ficha activa usa una sombra más marcada que los registros de propósito.
- **Border:** líneas translúcidas suaves en navegación e índice; las fichas principales no llevan borde visible.
- **Internal Padding:** controlado por `clamp`, con espacios de 25px a 72px según superficie y pantalla.

### Inputs / Fields
- **Style:** fondo casi blanco, línea azul grisácea de 1px, esquinas de 18px, padding de 13px 16px y altura mínima de 52px; el mensaje usa 20px.
- **Focus:** borde azul y halo suave de 4px.
- **Disabled:** fondo gris azulado y texto auxiliar.

### Navigation
- **Style:** cápsula gris neutra translúcida pegada al inicio de la página con blur de 30px, texto claro y sombra ambiental.
- **Typography:** Barlow 700; en el navbar carbón, la página actual y hover se identifican en azul claro. Dentro del menú móvil claro, usan azul técnico.
- **Mobile:** botón circular de menú y panel gris claro translúcido debajo de la cápsula; el blur de 54px mantiene visibles las formas del contenido posterior, claramente desenfocadas. Los enlaces se apilan y la acción de contacto ocupa el ancho disponible.

### Home Photo Collage
- Tres fotografías publicadas de tamaños distintos forman una galería conectada a la derecha del texto. La foto principal lleva una leyenda de procedencia; las dos imágenes secundarias se solapan en diagonal. Un rótulo blurmórfico enlaza con el catálogo.
- En móvil, el texto y la acción preceden una galería horizontal desplazable; cada imagen ocupa una diapositiva amplia con `scroll-snap-align: start`.

### Service Index and Record
- El índice selecciona una sola especialidad a la vez; teclado, flechas y Home/End permiten recorrerlo. En móvil, las opciones se desplazan horizontalmente.
- La ficha activa combina fotografía, descripción publicada y enlace de consulta. Los controles circulares de galería muestran la posición y cambian las fotos manualmente.
- Las cuatro fichas de plantilla muestran una nota de pendiente y no presentan enlace para cotizar.

## Do's and Don'ts

### Do:
- **Do** mantener el nombre, datos de contacto, mapa, fotografías, especialidades y formulario publicados.
- **Do** usar azul para acciones y estados; rojo para marca y verde para WhatsApp.
- **Do** conservar las fotografías como superficies dominantes de Inicio y Servicios.
- **Do** mantener visibles el foco de teclado y el movimiento reducido.
- **Do** preservar las fichas pendientes como plantillas y no como servicios confirmados.

### Don't:
- **Don't** volver a una navegación opaca, retículas de fichas cuadradas o radios pequeños como lenguaje de las superficies principales.
- **Don't** inventar servicios, certificaciones, clientes, cifras, cobertura o resultados.
- **Don't** extender «Precisión en obra» a una promesa de desempeño no confirmada.
- **Don't** usar el rojo como color principal de acción ni el blur de modo que reduzca la legibilidad.
