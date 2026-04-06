# Google Stitch Prompts — 蜜月旅行行程網站

> 以下提供 3 種風格方向的 prompt，貼進 Stitch 後可以快速比較，選出你最喜歡的視覺方向。

---

## 風格 A：奢華雜誌感（Editorial / Luxury）

```
A luxury editorial travel itinerary website for a honeymoon trip to Switzerland and Italy.

Hero section: full-bleed landscape photo with a thin serif title "2026 Honeymoon — Switzerland × Italy", subtitle "May 14 – 31", centered on a dark overlay. Minimal gold accent line below.

Below the hero: a horizontal route map showing city dots connected by a thin line: Zürich → Lucerne → Grindelwald → Zermatt → Milan → Dolomites → Venice.

Main content: vertical timeline layout, each day as a card with a large photo on the left, day number + city name + short description on the right. Soft cream background, dark green and gold color palette. Elegant serif font for headings, clean sans-serif for body.

Footer: a simple sign-off with flight info and packing checklist link.

Desktop layout, 1440px wide.
```

---

## 風格 B：清新手繪風（Illustrated / Whimsical）

```
A playful illustrated travel itinerary website for a honeymoon in Switzerland and Italy.

Hero section: soft watercolor mountain illustration as background, handwritten-style title "Our Honeymoon Adventure", pastel green and warm peach color scheme.

Route overview: an illustrated dotted-line path on a stylized map, with small icons for each city — a clock tower for Zürich, a wooden bridge for Lucerne, snow peaks for Grindelwald, the Matterhorn for Zermatt, a cathedral for Milan, mountain huts for Dolomites, a gondola for Venice.

Day cards: rounded corners, subtle shadow, each with a small illustrated icon, day number badge, city name, and 3-4 bullet highlights. Cards arranged in a two-column masonry grid.

Warm, inviting, storybook aesthetic. Desktop layout.
```

---

## 風格 C：沉浸式全圖（Immersive / Photo-driven）

```
An immersive photo-driven travel itinerary website for a Switzerland and Italy honeymoon trip.

Full-screen vertical scroll experience. Each day takes up one full viewport height with a stunning landscape photo as background, overlaid with a frosted glass card showing day number, city name, and key highlights.

Navigation: a sticky minimal top bar with "Day 01 ... Day 18" dots, the current day highlighted.

Color palette: extracted from nature photos — alpine green, glacier blue, Dolomite rose, Venetian teal. White text on dark overlays, frosted glass panels with backdrop blur.

Transition between days: smooth scroll-snap. Each section has a parallax photo effect.

Mobile-first responsive design, also looks great on desktop.
```

---

## 💡 使用建議

1. **三個都試一次**，每個大約 1-2 分鐘就能出結果
2. 看看哪個「感覺」最對，不用太在意細節（細節步驟二再處理）
3. 如果喜歡 A 的排版但 C 的色調，把關鍵字混搭再跑一次
4. 截圖你最喜歡的結果，回來貼給我，我在步驟二幫你精緻化成 React 元件

---

## ⚠️ Stitch 小提醒

- Stitch 匯出的是 HTML + Tailwind，不是 React，所以只當**視覺參考**用
- 如果畫面跑版，試著在 prompt 加上 `"clean layout, well-aligned, proper spacing"`
- 可以上傳參考截圖（Pinterest 旅遊網站截圖）讓 Stitch 模仿風格
