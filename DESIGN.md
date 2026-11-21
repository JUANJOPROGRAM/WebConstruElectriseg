---
name: ConstruElectriseg
description: Sistema visual web de ingeniería técnica con fotografía de proyectos, azul de acción y superficies claras.
colors:
  technical-blue: "#0066cc"
  signal-red: "#ff0015"
  blue-hover: "#005bb5"
  whatsapp-green: "#25d366"
  light-canvas: "#fbfbfd"
  ink: "#1d1d1f"
  muted-ink: "#86868b"
  paper-white: "#ffffff"
  charcoal-surface: "#161617"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    letterSpacing: "0.18em"
rounded:
  sm: "10px"
  control: "16px"
  nav: "20px"
  card: "24px"
  card-large: "30px"
  pill: "980px"
spacing:
  sm: "14px"
  md: "20px"
  lg: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.technical-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-contact:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.nav}"
    padding: "8px 16px"
  input-field:
    backgroundColor: "rgba(255, 255, 255, 0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 20px"
---

# Design System: ConstruElectriseg

## Overview

**Creative North Star: "Precisión en obra"**

The visual system presents a technical, professional, contemporary engineering company. It pairs real project photography with clear service information, a light neutral content canvas, dark navigation, and blue action cues. The home hero uses a large project photograph with a dark overlay and a red wordmark accent. The services page uses a pale blue-white field, restrained geometric rings, and a practical catalogue of photographic cards.

Depth stays restrained and atmospheric: translucent navigation and light card shadows create separation while keeping the work photographs and service copy prominent. Components should feel solid and technical, with readable labels and familiar actions. No visual anti-reference has been confirmed. Inter is the declared typeface; the home page imports it from Google Fonts, while the services page declares the same stack without loading that font itself, so it can fall back to a system sans-serif.

**Key Characteristics:**
- Technical blue identifies primary actions, links, and service accents.
- Signal red is a focused accent in the home wordmark.
- Project photography anchors the home hero and service catalogue.
- Large, tightly tracked Inter headings pair with compact uppercase labels.
- Soft blur and ambient shadows separate translucent or elevated layers.
- Rounded pill actions sit alongside generously rounded cards and fields.

## Colors

The palette centers on a saturated engineering blue, with a red wordmark accent, a WhatsApp green contact utility, and cool light and charcoal neutrals.

### Primary
- **Azul técnico** (#0066cc): Primary buttons, service links, form focus, and highlighted service headings.

### Secondary
- **Rojo señal** (#ff0015): Emphasis within the home-page wordmark.
- **Azul de interacción** (#005bb5): Darker hover state for the primary action.

### Tertiary
- **Verde WhatsApp** (#25d366): Floating WhatsApp contact action and its hover state.

### Neutral
- **Lienzo casi blanco** (#fbfbfd): Default page background.
- **Tinta carbón** (#1d1d1f): Main text on light surfaces.
- **Tinta gris** (#86868b): Muted body copy and secondary information.
- **Blanco papel** (#ffffff): Light cards, navigation contact action, and reversed text.
- **Superficie carbón** (#161617): Footer, dark mission card, and translucent navigation base.

### Named Rules
**The Blue for Action Rule.** Reserve blue for the primary action and technical links; keep the red accent concentrated in the wordmark as it is in the current home page.

## Typography

**Display Font:** Inter (with the system sans-serif stack as fallback)  
**Body Font:** Inter (with the system sans-serif stack as fallback)  
**Label/Mono Font:** Inter for compact uppercase section labels; no separate mono face is defined.

**Character:** A geometric, contemporary sans-serif supports technical headings and straightforward service copy. Strong heading weights and tight tracking give the identity its most assertive typographic moments.

### Hierarchy
- **Display** (800, 4.5rem): Home-page wordmark heading on wide screens; it reduces to a fluid 1.2–2.5rem range on small screens.
- **Headline** (800, clamp(2.6rem, 6vw, 5.2rem), 1.08 line-height): Services page hero heading.
- **Title** (700, clamp(1.9rem, 3.6vw, 3rem), 1.15 line-height): Section headings on the services page. Other section headings use 2.5rem.
- **Body** (400, 1rem, 1.5 line-height): General copy; longer service and explanatory paragraphs use about 1.6–1.75 line-height.
- **Label** (800, 0.72rem, 0.18em tracking, uppercase): Small service and section eyebrows.

### Named Rules
**The Evidence First Rule.** Use bold display type for the company and page headings; keep detailed service descriptions at body scale so they remain easy to scan.

## Layout

The home page uses a centered content container capped at 1200px with 20px horizontal insets and 80px vertical section padding. Its hero spans the viewport and is image-led. The services catalogue expands to a 1540px maximum with responsive side insets. Its grid uses three columns above 1050px, two columns from 769px through 1050px, and one column at 768px and below. At mobile widths, page sections reduce their vertical padding and the service cards retain a single-column reading order.

The underlying spacing rhythm repeats 14px, 20px, and 40px intervals, with 80px section spacing on wide screens. The first service card follows the same card hierarchy as the rest in the final CSS rules. The fixed navigation has a centered 1200px inner row; on narrow screens it becomes a full-screen dark menu.

## Elevation & Depth

The system uses layered surfaces rather than hard outlines: a translucent dark navigation bar, restrained white cards, image overlays, and ambient shadows. Blur belongs to translucent surfaces or duplicated image backgrounds; the service photography itself stays contained and legible. Shadows describe separation and atmosphere, with stronger depth reserved for the service detail modal and floating contact action.

### Shadow Vocabulary
- **Glass surface** (0 10px 30px rgba(0,0,0,0.02)): Very soft separation on shared glass cards.
- **Service card at rest** (0 12px 35px rgba(22,43,68,0.06)): Ambient separation on white catalogue cards.
- **Service detail dialog** (0 30px 100px rgba(0,0,0,0.35)): Stronger containment for the modal.

### Named Rules
**The Soft Separation Rule.** Keep default shadows diffuse and quiet; use pronounced depth only when an overlay or floating control must separate clearly from the page.

## Shapes

Actions use a full pill radius (980px on the shared primary button), while the navigation contact action uses a compact rounded rectangle (20px). Cards use broad corners (24–30px), fields use 16px corners, and gallery thumbnails use smaller 10px corners. Photo frames clip to the card shape. Borders are thin and low-contrast on light cards, with translucent white borders on dark or glass surfaces.

## Components

### Primary Button
- **Character:** Solid, technical, and direct.
- **Shape:** Full pill (980px).
- **Primary:** Technical blue background with white text; 14px by 28px padding and 600 weight.
- **Hover / Focus:** Hover deepens the blue and scales to 1.03. Keyboard focus should remain visibly identifiable.

### Navigation Contact Action
- **Character:** Clear, high-contrast contact shortcut.
- **Shape:** Rounded rectangle (20px).
- **Primary:** White background, dark text, 8px by 16px padding; on mobile it grows to 12px by 32px.
- **Hover:** Changes to a cool light gray and scales slightly.

### Cards / Containers
- **Corner Style:** Shared surfaces use 24px; catalogue cards use 26px.
- **Background:** Shared glass cards use translucent white; mission content is charcoal and vision content is white. Service catalogue cards use solid white.
- **Shadow Strategy:** Soft ambient shadows at rest, with a stronger shadow and small upward motion on service-card hover.
- **Border:** Thin translucent or cool-gray outlines.
- **Internal Padding:** General glass cards use 40px; service copy uses responsive padding around 24–38px.

### Inputs / Fields
- **Style:** Translucent white background, thin light border, 16px corners, and 15px by 20px padding.
- **Focus:** Background becomes more opaque; the border turns technical blue and a subtle blue ring appears.

### Navigation
- **Style:** Fixed dark translucent bar with a 20px backdrop blur and a fine lower border.
- **Typography:** Light text with reduced opacity for inactive links; active and hovered links use full white opacity.
- **Mobile:** A hamburger opens a full-screen near-black translucent menu with vertically spaced links.

### Service Card
- **Character:** Solid, technical frame for real service photography and concise information.
- **Shape:** Rounded white card with a lightly defined border.
- **Image:** Contain the source photograph over its blurred, darkened duplicate background.
- **Hover / Focus:** Lift slightly with a stronger soft shadow; keyboard focus uses a blue outline.

## Do's and Don'ts

### Do:
- **Do** use the selected technical-blue and signal-red names and roles consistently.
- **Do** use the project photographs as evidence of work and preserve their original aspect ratios in contained image frames.
- **Do** keep service information clear and readable on light neutral surfaces.
- **Do** use blur on a separate background layer so primary copy and photographs remain sharp.
- **Do** keep primary actions pill-shaped and use rounded card and field shapes from the observed system.

### Don't:
- **Don't** invent client logos, testimonials, certifications, or project outcomes; use only evidence present in the project and confirmed by the user.
- **Don't** spread the signal-red accent across every action; its current role is the home wordmark.
- **Don't** apply blur or filters to the content-bearing text layer.
