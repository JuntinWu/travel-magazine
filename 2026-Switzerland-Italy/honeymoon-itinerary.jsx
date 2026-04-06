import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const CITIES = [
  { name: "蘇黎世", en: "Zürich" },
  { name: "琉森", en: "Lucerne" },
  { name: "龍疆", en: "Lungern" },
  { name: "格林德瓦", en: "Grindelwald" },
  { name: "策馬特", en: "Zermatt" },
  { name: "米蘭", en: "Milan" },
  { name: "多洛米堤", en: "Dolomites" },
  { name: "威尼斯", en: "Venice" },
];

const SECTIONS = [
  {
    dayRange: "01–03",
    dateRange: "May 14 — 16",
    title: "Lucerne Reflections",
    subtitle: "蘇黎世 · 琉森 · 龍疆",
    description:
      "從蘇黎世機場出發，穿越中世紀舊城區，沿著琉森湖畔漫步。卡貝爾橋的黃昏倒影、龍疆湖的翡翠碧綠，每一步都是瑞士最動人的序曲。",
    tags: ["Kapellbrücke", "Lungern Lake"],
    img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=80",
  },
  {
    dayRange: "04–07",
    dateRange: "May 17 — 20",
    title: "Grindelwald Heights",
    subtitle: "格林德瓦 · 少女峰 · 乳酪火鍋",
    description:
      "清晨醒來，艾格峰北壁就在窗前。搭乘齒軌列車攀上少女峰之巔，站在歐洲之頂俯瞰阿萊奇冰川。傍晚回到山中木屋，一鍋起司火鍋溫暖整個夜晚。",
    tags: ["Jungfraujoch", "Eiger North Face"],
    img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80",
  },
  {
    dayRange: "08–10",
    dateRange: "May 21 — 23",
    title: "Zermatt & The Matterhorn",
    subtitle: "策馬特 · 馬特洪峰 · 冰川天堂",
    description:
      "無車小鎮策馬特，空氣裡只有清脆的牛鈴聲。搭乘 Gornergrat 登山鐵路，馬特洪峰的金字塔輪廓在雲霧中若隱若現。海拔 3,883 公尺的冰川天堂觀景台，世界在腳下。",
    tags: ["Matterhorn", "Glacier Paradise"],
    img: "https://images.unsplash.com/photo-1529973625058-a665431e23f0?w=1200&q=80",
  },
  {
    dayRange: "11–13",
    dateRange: "May 24 — 26",
    title: "Milan Interlude",
    subtitle: "米蘭 · 大教堂 · 時尚之都",
    description:
      "從阿爾卑斯山脈南下，進入義大利的優雅心臟。米蘭大教堂的哥德式尖塔在陽光中閃耀，Galleria Vittorio Emanuele II 的玻璃穹頂下，品一杯道地的 Espresso。",
    tags: ["Duomo di Milano", "La Scala"],
    img: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=1200&q=80",
  },
  {
    dayRange: "14–16",
    dateRange: "May 27 — 29",
    title: "Dolomites Majesty",
    subtitle: "多洛米堤 · 三尖峰 · 高山公路",
    description:
      "租一台電動車，沿著傳奇的 Stelvio Pass 蜿蜒而上。多洛米堤的白色石灰岩峰群如同大地的皇冠，Tre Cime di Lavaredo 的三座尖塔在夕陽下染成玫瑰金色。",
    tags: ["Tre Cime", "Stelvio Pass"],
    img: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=1200&q=80",
  },
  {
    dayRange: "17–18",
    dateRange: "May 30 — 31",
    title: "Venetian Elegance",
    subtitle: "威尼斯 · 貢多拉 · 聖馬可",
    description:
      "蜜月的最終章，屬於漂浮之城。乘坐水上巴士穿越大運河，在聖馬可廣場聽手風琴。最後一晚，搭乘私人貢多拉穿過寧靜的小運河，讓威尼斯的月光為旅程畫下完美句點。",
    tags: ["Grand Canal", "San Marco"],
    img: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1200&q=80",
  },
];

// ─── Palette (Alpine Lens) ───────────────────────────────────────────────────
const P = {
  bg: "#121416",
  containerLow: "#1a1c1e",
  container: "#1e2022",
  containerHigh: "#282a2c",
  containerHighest: "#333537",
  primary: "#a1d1b9",
  primaryDark: "#2d5a47",
  text: "#e2e2e5",
  textSub: "#c0c8c2",
  secContainer: "#1a4e50",
  outline: "#414944",
};

// ─── Hook ────────────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.unobserve(el); } }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

// ─── Sub-components ──────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span style={{
      padding: "6px 16px", background: `${P.secContainer}50`, backdropFilter: "blur(10px)",
      borderRadius: 999, fontSize: 10, fontFamily: "Manrope,sans-serif",
      letterSpacing: "0.15em", textTransform: "uppercase", color: P.textSub,
    }}>{children}</span>
  );
}

function Section({ s, i }) {
  const [ref, vis] = useFadeIn();
  const rev = i % 2 === 1;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div ref={ref} style={{
      display: "flex", flexDirection: isMobile ? "column" : rev ? "row-reverse" : "row",
      gap: isMobile ? 24 : 48, alignItems: "center", marginBottom: 128,
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(48px)",
      transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
    }}>
      {/* Image */}
      <div style={{
        flex: "1 1 55%", borderRadius: 12, overflow: "hidden",
        aspectRatio: "16/10", minHeight: 260, cursor: "pointer",
      }}>
        <img src={s.img} alt={s.title} loading="lazy" style={{
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.7s ease",
        }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.06)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Text */}
      <div style={{
        flex: "1 1 40%", textAlign: rev && !isMobile ? "right" : "left",
        display: "flex", flexDirection: "column",
        alignItems: rev && !isMobile ? "flex-end" : "flex-start",
      }}>
        {/* Day + Date */}
        <div style={{
          display: "flex", alignItems: "center", gap: 14, marginBottom: 20,
          flexDirection: rev && !isMobile ? "row-reverse" : "row",
        }}>
          <span style={{
            fontSize: 56, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
            color: `${P.primary}25`, lineHeight: 1,
          }}>{s.dayRange.split("–")[0]}</span>
          <div style={{ width: 36, height: 1, background: P.primaryDark }} />
          <span style={{
            fontSize: 12, fontFamily: "Manrope,sans-serif", letterSpacing: "0.2em",
            textTransform: "uppercase", color: P.primary,
          }}>{s.dateRange}</span>
        </div>

        <h3 style={{
          fontSize: 32, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700,
          color: "#f0fdf4", marginBottom: 6, lineHeight: 1.2,
        }}>{s.title}</h3>

        <p style={{
          fontSize: 13, color: P.primary, marginBottom: 18, letterSpacing: "0.06em",
          fontFamily: "Manrope,sans-serif",
        }}>{s.subtitle}</p>

        <p style={{
          fontSize: 15, fontFamily: "Manrope,sans-serif", color: P.textSub,
          lineHeight: 1.85, fontWeight: 300, marginBottom: 24, maxWidth: 400,
        }}>{s.description}</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: rev && !isMobile ? "flex-end" : "flex-start" }}>
          {s.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 300);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: P.bg, color: P.text, minHeight: "100vh", fontFamily: "Manrope,sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:${P.primary};color:${P.bg}}
        @keyframes breathe{0%,100%{opacity:.35}50%{opacity:.7}}
        body{overflow-x:hidden}
      `}</style>

      {/* ═══════ NAV ═══════ */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 32px",
        backdropFilter: "blur(20px)", background: scrollY > 80 ? "rgba(18,20,22,0.7)" : "transparent",
        transition: "background 0.4s",
      }}>
        <div style={{
          fontSize: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
          letterSpacing: "-0.02em", color: "#f0fdf4", textTransform: "uppercase",
        }}>ALPINIST</div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Itinerary", "Destinations", "Gallery"].map((x, i) => (
            <a key={x} href="#" style={{
              fontSize: 13, textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              color: i === 0 ? P.primary : "rgba(240,253,244,.55)",
              fontWeight: i === 0 ? 700 : 400,
              borderBottom: i === 0 ? `1px solid ${P.primary}` : "none",
              paddingBottom: 4, transition: "color .3s",
            }}>{x}</a>
          ))}
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section style={{
        position: "relative", height: "100vh", width: "100%",
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80"
            alt="Alps at dawn"
            style={{
              width: "100%", height: "120%", objectFit: "cover",
              transform: `translateY(-${scrollY * 0.3}px)`,
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, rgba(18,20,22,.15) 0%, rgba(18,20,22,.55) 65%, ${P.bg} 100%)`,
          }} />
        </div>

        <div style={{
          position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px",
          opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(32px)",
          transition: "all 1.2s cubic-bezier(.16,1,.3,1)",
        }}>
          <h1 style={{
            fontSize: "clamp(2rem,6vw,4.5rem)",
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 300,
            letterSpacing: "-0.02em", color: "white", lineHeight: 1.15, marginBottom: 14,
          }}>
            2026 Honeymoon <span style={{ opacity: .4, margin: "0 8px" }}>—</span> Switzerland × Italy
          </h1>
          <p style={{
            fontSize: "clamp(.85rem,2vw,1.25rem)",
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "rgba(240,253,244,.7)", marginBottom: 28,
          }}>May 14 – 31</p>
          <div style={{ width: 80, height: 1, background: P.primary, margin: "0 auto", opacity: .5 }} />
        </div>

        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          animation: "breathe 2.5s ease-in-out infinite", zIndex: 10,
        }}>
          <span style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>Scroll</span>
          <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom,rgba(255,255,255,.25),transparent)" }} />
        </div>
      </section>

      {/* ═══════ ROUTE ═══════ */}
      <section style={{ padding: "72px 24px", textAlign: "center", background: P.containerLow }}>
        <p style={{
          fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase",
          color: P.textSub, marginBottom: 10,
        }}>The Grand Tour</p>
        <h2 style={{
          fontSize: "clamp(1.4rem,3.5vw,2.2rem)",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400,
          fontStyle: "italic", color: "#f0fdf4", marginBottom: 40,
        }}>From the Peaks to the Floating City</h2>

        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          alignItems: "center", gap: 2, maxWidth: 820, margin: "0 auto",
        }}>
          {CITIES.map((c, i) => {
            const sMap = [0,0,0,1,2,3,4,5];
            const active = sMap[i] === Math.min(Math.floor(scrollY / 650), SECTIONS.length - 1);
            return (
              <div key={c.en} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "0 8px" }}>
                  <div style={{
                    width: active ? 11 : 7, height: active ? 11 : 7, borderRadius: "50%",
                    background: active ? P.primary : P.outline,
                    boxShadow: active ? `0 0 14px ${P.primary}55` : "none",
                    transition: "all .35s",
                  }} />
                  <span style={{
                    fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase",
                    color: active ? P.primary : P.textSub,
                    fontWeight: active ? 600 : 400, whiteSpace: "nowrap",
                  }}>{c.en}</span>
                </div>
                {i < CITIES.length - 1 && (
                  <div style={{ width: 28, height: 1, background: `linear-gradient(to right,${P.outline}80,transparent)` }} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ TIMELINE ═══════ */}
      <main style={{ position: "relative", padding: "96px 24px", maxWidth: 1140, margin: "0 auto" }}>
        {SECTIONS.map((s, i) => <Section key={s.dayRange} s={s} i={i} />)}
      </main>

      {/* ═══════ CTA ═══════ */}
      <section style={{
        padding: "112px 24px", background: P.containerHighest,
        position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: .06,
          backgroundImage: "url(https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=30)",
          backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1)",
        }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.6rem,4vw,2.6rem)",
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700,
            color: "white", marginBottom: 20, lineHeight: 1.2,
          }}>Your Legacy Journey Starts Here</h2>
          <p style={{ fontSize: 15, color: P.textSub, fontWeight: 300, lineHeight: 1.75, marginBottom: 36 }}>
            18 天，2 個國家，8 座城市。每一天都精心安排，只為在最美的光線下留下屬於你們的故事。
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: `linear-gradient(135deg,${P.primary},${P.primaryDark})`,
              color: "#002115", padding: "13px 28px", borderRadius: 12, border: "none",
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download_2</span>
              Download PDF
            </button>
            <button style={{
              backdropFilter: "blur(16px)", background: "rgba(18,20,22,.45)",
              color: "white", padding: "13px 28px", borderRadius: 12,
              border: "1px solid rgba(255,255,255,.1)",
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>share</span>
              Share Itinerary
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{
        background: "rgba(6,78,59,.12)", backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(6,78,59,.18)", padding: "44px 32px",
      }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto", display: "flex",
          justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 28,
        }}>
          <div>
            <div style={{
              fontSize: 15, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
              letterSpacing: ".15em", textTransform: "uppercase", color: "#f0fdf4", marginBottom: 10,
            }}>ALPINIST</div>
            <p style={{ fontSize: 10, color: "rgba(240,253,244,.35)", maxWidth: 280, lineHeight: 1.65 }}>
              Crafting immersive travel experiences.<br />Part of The Alpine Lens Editorial.
            </p>
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { label: "Concierge", items: ["Flight Status", "Insurance"] },
              { label: "Connect", items: ["Instagram", "Pinterest"] },
            ].map(col => (
              <div key={col.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 9, color: P.primary, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>
                  {col.label}
                </span>
                {col.items.map(t => (
                  <a key={t} href="#" style={{ fontSize: 10, color: "rgba(240,253,244,.35)", textDecoration: "none", letterSpacing: ".08em", textTransform: "uppercase" }}>{t}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: 1140, margin: "28px auto 0", borderTop: "1px solid rgba(240,253,244,.05)",
          paddingTop: 20, textAlign: "center", fontSize: 8, letterSpacing: ".2em",
          textTransform: "uppercase", color: "rgba(240,253,244,.18)",
        }}>© 2026 The Alpine Lens Editorial. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
