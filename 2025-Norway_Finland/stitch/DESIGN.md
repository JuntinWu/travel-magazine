# Design System Document: Arctic Etherealism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Frozen Horizon."** 

We are moving away from the "boxy" nature of standard travel booking sites. Instead of a rigid grid of information, we treat the interface as a vast, open landscape. The goal is to evoke the stillness of a Nordic winter—calm, expansive, and premium. We break the "template" look by utilizing heavy asymmetric whitespace, overlapping "ice-sheet" layers, and a high-contrast typography scale that feels more like a luxury editorial magazine than a utility app.

By prioritizing tonal depth over structural lines, we create an interface that doesn't just display a travel itinerary; it invites the user into the atmosphere of the destination.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the transition from the deep polar night to the vibrant pulse of the Aurora.

### The Color Roles
*   **Primary (`primary_container`: #0A192F):** The foundational "Polar Night." Use this for deep immersive sections and background foundations.
*   **Secondary (`secondary`: #C6C6C7):** The "Mist." Used for supporting elements and secondary actions that shouldn't compete with the ice.
*   **Tertiary/Accent (`tertiary`: #00E0B7):** The "Aurora." This is a high-energy color reserved strictly for the most important interaction points (CTAs, active paths, or live updates).
*   **Neutral (`surface_container` family):** Various weights of snow and ice to define hierarchy without using ink.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. We define space through "Tonal Carving." 
*   A section ends because the background shifts from `surface` (#0E141A) to `surface_container_low` (#161C22). 
*   If a visual break is needed, use a wide gap of whitespace (32px or 64px) rather than a horizontal rule.

### The "Glass & Gradient" Rule
To mimic the translucency of ice:
*   **Floating Elements:** Use `surface_variant` (#2F353C) at 40% opacity with a `20px` backdrop-blur. This creates a "Glassmorphism" effect that allows the underlying gradients to bleed through.
*   **Signature Textures:** Apply a linear gradient from `primary_container` (#0A192F) to `surface` (#0E141A) at a 135-degree angle for hero sections to provide a sense of infinite depth.

---

## 3. Typography: Editorial Authority
We use typography to drive the narrative. The contrast between the geometric strength of **Plus Jakarta Sans** (Display) and the functional clarity of **Inter** (Body) creates an authoritative yet modern voice.

*   **Display & Headlines (Plus Jakarta Sans):** These are your "Vistas." Use `display-lg` for destination names and `headline-lg` for day-by-day headers. Use tight letter-spacing (-0.02em) for headlines to create a bespoke, high-end feel.
*   **Body & Titles (Inter):** These are your "Guides." They must be highly legible. Use `body-lg` for itinerary descriptions with generous line-height (1.6) to prevent the "wall of text" effect.
*   **Labels:** Use `label-md` in uppercase with increased letter-spacing (+0.05em) for metadata like "FLIGHT DURATION" or "TEMPERATURE."

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not "shadowed"—it is "layered."

### The Layering Principle
Think of the UI as stacked sheets of glass. 
1.  **Base Layer:** `surface` (The foundation).
2.  **Section Layer:** `surface_container_low` (Subtle shift for content grouping).
3.  **Active Card Layer:** `surface_container_high` (Elevates an itinerary item).
4.  **Interaction Layer:** `surface_bright` (Indicates a hovered or active state).

### Ambient Shadows
Traditional drop shadows are forbidden. If a floating element (like a mobile nav bar) requires lift, use an **Ambient Bloom**:
*   **Color:** `primary_fixed` (#D6E3FF) at 5% opacity.
*   **Blur:** 40px.
*   **Spread:** 0px.
This creates a soft glow rather than a dark "muddy" shadow.

### The "Ghost Border" Fallback
If accessibility requirements demand a border for an input or button, use the `outline_variant` (#44474D) set to **15% opacity**. It should be felt, not seen.

---

## 5. Components & Interaction Patterns

### Buttons
*   **Primary:** A solid `tertiary` (#00E0B7) fill with `on_tertiary` (#00382C) text. Roundedness: `md` (0.375rem).
*   **Secondary (Ghost):** No fill. A `ghost border` (outline-variant at 20%) with `primary` text.
*   **Tertiary:** Text only, using `label-md` styling with a small `tertiary` dot icon to the right.

### Itinerary Cards & Lists
*   **No Dividers:** Never use a line between itinerary items. Use a `surface_container_lowest` (#080F14) background for the card and 24px of vertical padding.
*   **Glass Effect:** Use the Glassmorphism rule (40% opacity + blur) for "Transport Mode" chips (Plane, Ferry) to make them look like they are etched into the ice.

### Inputs & Search
*   **The "Arctic Field":** Inputs should use `surface_container_highest` (#2F353C) with no border. On focus, the background transitions to a subtle gradient of `primary_container` and the text color shifts to `tertiary`.

### Custom Navigation: The "Horizon Bar"
Instead of a standard top nav, use a bottom-fixed "Horizon Bar" for mobile-first utility. Use a 60% transparent `surface_container` with a heavy backdrop-blur (30px) to allow the itinerary content to scroll behind it beautifully.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a headline on the left and the body text on the right with a large gutter.
*   **Use Scale:** Make destination names (`display-lg`) massive to create a sense of awe.
*   **Use Subtle Animation:** Animate "Aurora" gradients with a very slow (20s) pulse to simulate the Northern Lights in the background.

### Don't:
*   **Don't use pure black:** It kills the "Deep Arctic Blue" atmosphere. Always use `surface` (#0E141A).
*   **Don't use hard corners:** Use the `md` (0.375rem) or `lg` (0.5rem) roundedness scale to soften the "frozen" aesthetic.
*   **Don't crowd the content:** If a screen feels full, it's wrong. Double the padding. The "Nordic" feeling comes from the luxury of space.