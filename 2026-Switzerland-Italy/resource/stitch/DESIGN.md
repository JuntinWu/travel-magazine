# Design System Specification: High-End Editorial Immersion

## 1. Overview & Creative North Star: "The Alpine Lens"
This design system is built to dissolve the barrier between the user and the destination. Our Creative North Star is **The Alpine Lens**—an approach that treats the screen not as a container, but as a high-end viewfinder. 

We reject the "boxed-in" nature of traditional web grids. Instead, we favor an editorial, immersive layout where high-fidelity photography serves as the foundation, and UI elements float as "frosted" overlays. By utilizing intentional asymmetry and tonal depth, we create a digital experience that feels as expansive and premium as a luxury travel monograph.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated extraction of the natural world, moving from the deep shadows of a coniferous forest to the ethereal glow of a mountain sunrise.

### Surface Hierarchy & The "No-Line" Rule
To maintain an organic, premium feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background shifts or light-play.
*   **The Layering Principle:** Use `surface-container` tiers (Lowest to Highest) to create "nested" depth. For example, place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **The Glass & Gradient Rule:** Use Glassmorphism for floating UI. Apply `surface` colors at 40-60% opacity with a `backdrop-blur` (12px–20px). This allows the colors of the travel photography to bleed through, ensuring the UI feels integrated into the environment.

### Signature Textures
*   **Primary CTAs:** Use a subtle linear gradient from `primary` (#a1d1b9) to `primary-container` (#2d5a47) at a 135-degree angle to add "soul" and dimension.
*   **Overlays:** Use `surface_dim` (#121416) at 30% opacity as a full-screen scrim behind text to ensure legibility over vibrant imagery.

---

## 3. Typography: Editorial Precision
We utilize a dual-sans-serif pairing to balance high-fashion editorial impact with modern functional legibility.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Voice." Used for destination names and evocative titles. The wide apertures and modern geometry of Plus Jakarta Sans convey a sense of breath and luxury.
*   **Body & Labels (Manrope):** Our "Workhorse." Manrope’s clean, technical structure provides high readability for travel itineraries and logistical details, even when placed over blurred backgrounds.

**Hierarchy Strategy:** 
*   Use `display-lg` for hero headlines with a negative letter-spacing (-0.02em) to create a tight, professional "magazine" look.
*   Use `label-md` in all-caps with increased letter-spacing (0.1em) for metadata like altitudes, coordinates, or dates.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital" for this system. We mimic the way light passes through ice and mist.

*   **Ambient Shadows:** When a floating effect is required, shadows must be extra-diffused. Use a blur of 30px–50px with an opacity of 6% using the `on-surface` color. This creates a soft "glow" rather than a hard shadow.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines.
*   **Glassmorphism Depth:** Elements closer to the user (like a booking modal) should have a higher blur value and a lighter `surface-variant` tint compared to background elements.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), white text, `xl` (0.75rem) roundedness. No border.
*   **Secondary (Frosted):** `surface-variant` at 20% opacity, `backdrop-blur: 10px`, white text.
*   **Tertiary:** Ghost style. No fill, `label-md` typography, with a `primary` color underline that expands on hover.

### Cards & Imagery
*   **The Full-Bleed Rule:** Images should always touch at least two edges of their container.
*   **Content Separation:** Forbid divider lines. Use `surface-container-low` for the card body and `surface-container-high` for the header area to create a natural break.

### Signature Component: The "Perspective Chip"
*   Used for tags (e.g., "Dolomites", "Summer"). These are semi-transparent `secondary-container` pills with a `glass` effect. They should feel like physical glass markers placed over a map.

### Input Fields
*   **Styling:** Transparent backgrounds with a `surface-container-highest` bottom-only stroke (Ghost Border style). Focus states transition the stroke to `primary` with a soft outer glow.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace asymmetry. Offset a `headline-lg` to the left while placing the `body-lg` descriptive text in a narrow column on the right.
*   **Do** use "Breathing Room." Increase the standard spacing between sections by 1.5x to evoke the scale of the landscapes being showcased.
*   **Do** ensure text contrast. If an image is too bright, apply a `surface-dim` gradient overlay behind the typography.

### Don’t:
*   **Don’t** use 100% black. Use `surface` (#121416) to keep shadows and depths feeling "filmic" rather than "flat."
*   **Don’t** use standard `md` or `lg` roundedness for all elements. Use `full` (pill-shape) for interactive tags and `xl` for large containers to keep the UI feeling soft and approachable.
*   **Don’t** use divider lines. If content feels cluttered, increase the vertical whitespace (from the spacing scale) rather than adding a line.