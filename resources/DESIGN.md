# Design System: High-End Editorial Dark Mode

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Midnight Curator."** 

We are moving away from the "app-like" density of traditional digital products and toward the expansive, breathing rhythm of a high-end physical travel magazine. This system rejects the rigid, boxed-in constraints of the web in favor of **intentional asymmetry**, **tonal depth**, and **cinematic scale**. 

By utilizing ultra-dark surfaces and glassmorphism, we create a digital environment that feels like a private lounge at night—sophisticated, immersive, and quiet. Our goal is to guide the user’s eye through a narrative, not just a list of features.

---

## 2. Colors & Surface Hierarchy
This system uses a palette of deep, nocturnal tones punctuated by luminous, bioluminescent accents.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or components. Structure is created through **Tonal Separation**. Use background shifts (e.g., placing a `surface-container-low` section against a `surface` background) to signify a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of tinted glass.
- **Base Layer:** `surface` (#111317) or `surface-dim`.
- **Secondary Sections:** `surface-container-low` (#1a1c20).
- **Interactive Cards:** `surface-container` (#1e2024).
- **Elevated Overlays:** `surface-container-high` (#282a2e).

### The Glass & Gradient Rule
To achieve a "signature" feel, floating elements (modals, navigation bars, hovering cards) must utilize **Glassmorphism**:
- **Background:** `surface-variant` at 60% opacity.
- **Effect:** `backdrop-blur` (16px to 32px).
- **Accents:** Use a subtle linear gradient from `primary` (#48fdd2) to `primary-container` (#00e0b7) at a 45-degree angle for primary CTAs to give them a "lit-from-within" glow.

---

## 3. Typography
The typography is the voice of the curator. We pair the geometric elegance of **Plus Jakarta Sans** with the utilitarian clarity of **Inter**.

- **Display & Headlines (Plus Jakarta Sans):** These are our "hero" moments. Use `display-lg` for destination titles. Bold, wide tracking, and intentional kerning create an authoritative, editorial presence.
- **Body & Titles (Inter):** Used for narrative and information. The `body-lg` (1rem) is the workhorse. It provides a neutral, high-legibility contrast to the expressive headlines.
- **Labeling:** Small, all-caps labels using `label-md` with increased letter spacing (0.05em) should be used for metadata like "5 MIN READ" or "LAVISH STAYS."

---

## 4. Elevation & Depth
In this system, depth is a feeling, not a drop shadow.

### The Layering Principle
Achieve "lift" by stacking container tiers. An editorial card (`surface-container-highest`) placed on a `surface-container-low` section creates a natural, soft hierarchy without the need for structural lines.

### Ambient Shadows
If an element must float (e.g., a "Book Now" floating action button), use **Ambient Shadows**:
- **Color:** A tinted version of `surface-container-lowest` (dark navy/black).
- **Settings:** Extra-diffused (Blur: 40px, Spread: -5px) at 12% opacity. Never use hard, grey shadows.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a **Ghost Border**:
- **Token:** `outline-variant` (#3b4a44).
- **Opacity:** 15%. This creates a suggestion of an edge rather than a hard boundary.

---

## 5. Components

### Editorial Cards
Cards are the heart of the magazine.
- **Style:** No borders. Large corner radius (`xl`: 0.75rem).
- **Imagery:** Use full-bleed imagery with a `surface-container-lowest` gradient overlay at the bottom to ensure `on-surface` text remains legible.
- **Interaction:** On hover, the card should subtly scale (1.02x) and the backdrop-blur should increase.

### Split-Screen Sections
Break the scroll with 50/50 split sections. One side carries a high-resolution, high-contrast image; the other carries a `surface-container-low` background with a `display-md` headline. This breaks the "template" look and feels like a magazine spread.

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `full` (9999px) roundedness.
- **Secondary:** Glassmorphic fill (20% opacity `surface-variant` with blur), `primary` text.
- **Tertiary:** No background. `label-md` styling with a subtle `primary` underline.

### Vertical Timeline Elements
Used for itineraries. Use a 2px track in `outline-variant` at 20% opacity. The "nodes" should be glowing `primary` dots. Avoid heavy boxes; let the typography and the vertical line lead the way.

### Inputs & Fields
- **Background:** `surface-container-lowest`.
- **Active State:** Change background to `surface-container-high` and add a `primary` "glow" (2px blur) rather than a solid border.

---

## 6. Do's and Don'ts

### Do
- **Do** use whitespace (spacing scale `32px` to `64px`) to separate major editorial thoughts.
- **Do** use `primary` (#48fdd2) sparingly. It is a "light source," not a background color.
- **Do** overlap elements. Let a title bleed slightly over the edge of an image to create an "asymmetrical" custom feel.

### Don't
- **Don't** use 100% white (#FFFFFF). Use `on-surface` (#e2e2e8) for a softer, premium look that is easier on the eyes in dark mode.
- **Don't** use dividers or horizontal rules. Use a change in surface color (`surface` to `surface-container-low`) instead.
- **Don't** use standard "drop shadows" on cards. Rely on tonal shifts and glassmorphism for elevation.