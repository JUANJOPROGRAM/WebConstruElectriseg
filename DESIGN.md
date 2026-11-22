---
name: ConstruElectriseg
description: Sistema visual de Inicio y Servicios: evidencia real, navegación clara y contacto accesible.
---

# Sistema visual: ConstruElectriseg

## Dirección

**Precisión en obra.** La interfaz presenta primero la especialidad, luego la evidencia fotográfica y finalmente la ruta para consultar. La voz visual es técnica, profesional y contemporánea. La composición usa ritmo tipográfico y encuadres reales para dar movimiento sin ornamentación gratuita.

## Colores

- **Azul técnico `#0066cc`:** acción principal, selección y foco.
- **Azul profundo `#004f9f`:** interacción y enlaces sobre superficies claras.
- **Rojo señal `#ff0015`:** nombre de marca; no compite con las acciones.
- **Papel `#f4f5f4`, superficie `#ffffff`, tinta `#1d1d1f`:** lienzo, tarjetas y texto.
- **Grafito `#2d2d2d`:** bloque rectangular continuo de Quiénes somos, Misión y Visión.
- **Verde WhatsApp `#25d366`:** acceso de contacto.

El nav es una franja fija de ancho completo, en gris carbón neutro translúcido con `backdrop-filter`; conserva la lectura sin flotar como cápsula. En teléfono, el panel hamburguesa intensifica el blur para desenfocar el contenido posterior al abrirse. Las superficies de contenido son sólidas; el desenfoque queda limitado al nav, menú móvil, controles sobre fotografía y mensajes flotantes.

## Tipografía

- **Onest:** única familia para títulos, lectura, navegación y controles; pesos 400–700.
- Los titulares usan tamaño fluido, interlineado compacto y tracking negativo. El texto corrido mantiene escala cómoda e interlineado amplio.
- Barlow permanece como fuente de respaldo local. Onest se carga desde Google Fonts.

## Marco y superficies

- Contenedor común de hasta 1360px con márgenes laterales fluidos.
- Paneles y fotos principales: radio de 32px; controles y campos: 16px; acciones: cápsula.
- Las fotografías publicadas son protagonistas, recortadas con `object-fit: cover` y sin inclinaciones.
- Inicio: presentación de la empresa a la izquierda y galería jerarquizada a la derecha; en teléfono, contenido primero y galería después.
- Servicios: portada fotográfica, índice de especialidades y ficha con galería y texto; en teléfono, índice horizontal y ficha apilada.
- Contacto agrupa ubicación y formulario en dos paneles. El pie de página es rectangular.

## Componentes y estados

- Botón principal azul con etiqueta blanca; acción de contacto usa el mismo tratamiento.
- Enlaces de navegación tienen subrayado de estado y actual. El menú móvil conserva una superficie oscura, redondeada y desenfocada al desplegarse.
- El índice de servicios mantiene roles de pestaña, navegación con flechas y estado seleccionado.
- Galerías: controles anterior/siguiente con etiqueta accesible, contador y transición de desplazamiento.
- Campos: etiquetas visibles, borde neutro, fondo claro, foco azul y estado deshabilitado legible.
- Todos los estados de foco son visibles; los controles táctiles conservan al menos 44px de alto.

## Movimiento

- La portada entra una vez con opacidad y desplazamiento corto.
- El contenido marcado con `data-reveal` aparece una vez al entrar en pantalla, con opacidad y desplazamiento de 10–12px. Esta decisión conserva la preferencia de movimiento en scroll ya establecida para el proyecto.
- Navegación, botones y galerías responden con transiciones cortas de opacidad, color y transform; no se animan medidas de layout.
- `prefers-reduced-motion` elimina desplazamientos y deja todo el contenido visible.

## Contenido que se conserva

Las rutas, el texto publicado, el logotipo, el mapa, el formulario conectado a EmailJS, el número de WhatsApp, las fotos de `Resource/images`, las fichas publicadas y las plantillas pendientes no se reescriben.
