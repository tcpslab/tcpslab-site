"use client";

import { useEffect, useRef } from "react";

type Layout = {
  key: "desktop" | "mobile";
  W: number;
  H: number;
  FS: number;
  LINES: string[];
  BASES: number[];
  SUB_FS: number;
  SUB_LINES: string[];
  SUB_BASES: number[];
  focusLine: number;
};

const DESKTOP: Layout = {
  key: "desktop",
  W: 1920,
  H: 1080,
  FS: 108,
  LINES: ["Terramechanics and", "Cyber-Physical Systems Lab"],
  BASES: [505, 648],
  SUB_FS: 36,
  SUB_LINES: [
    "Department of Convergence Biosystems Engineering, Chonnam National University",
  ],
  SUB_BASES: [730],
  focusLine: 1,
};

const MOBILE: Layout = {
  key: "mobile",
  W: 1080,
  H: 1920,
  FS: 92,
  LINES: ["Terramechanics", "and", "Cyber-Physical", "Systems Lab"],
  BASES: [760, 872, 984, 1096],
  SUB_FS: 92 / 3,
  SUB_LINES: [
    "Department of Convergence Biosystems Engineering,",
    "Chonnam National University",
  ],
  SUB_BASES: [1190, 1234],
  focusLine: 3,
};

const DUR = 7;
const DENSITY = 6;
const COLORS = [
  "#4B3A24",
  "#5C4326",
  "#6B4F2E",
  "#7A5A33",
  "#8F6D40",
  "#5C4326",
  "#9C5B33",
];
const Easing = {
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
};
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type CanvasCtx = CanvasRenderingContext2D & { letterSpacing?: string };

function setType(g: CanvasCtx, layout: Layout) {
  g.textAlign = "center";
  g.textBaseline = "alphabetic";
  g.font = `600 ${layout.FS}px Raleway, "Helvetica Neue", Arial, sans-serif`;
  try {
    g.letterSpacing = `${(-0.03 * layout.FS).toFixed(2)}px`;
  } catch {}
}

type Particle = {
  x: number;
  y: number;
  r: number;
  c: string;
  delay: number;
  dur: number;
  fall: number;
  ring: boolean;
  line: number;
};

type Neighbor = { q: Particle; ux: number; uy: number; w: number };
type Impact = { ti: number; e: number; nbs: Neighbor[] };
type Model = {
  layout: Layout;
  pts: Particle[];
  impacts: Impact[];
  F: { x: number; y: number };
};

function buildParticles(layout: Layout, step: number): Model {
  const { W, H } = layout;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d", { willReadFrequently: true }) as CanvasCtx;
  const rand = mulberry32(2026);
  const pts: Particle[] = [];

  layout.LINES.forEach((line, li) => {
    g.clearRect(0, 0, W, H);
    g.fillStyle = "#000";
    setType(g, layout);
    g.fillText(line, W / 2, layout.BASES[li]);
    const data = g.getImageData(0, 0, W, H).data;
    for (let y = 0; y < H; y += step) {
      for (let x = 0; x < W; x += step) {
        if (data[(y * W + x) * 4 + 3] > 128) {
          const cr = rand();
          pts.push({
            x: x + (rand() - 0.5) * 2,
            y: y + (rand() - 0.5) * 2,
            r: 2.4 + rand() * 1.5,
            c: COLORS[(cr * COLORS.length) | 0],
            delay: -1,
            dur: 0.4,
            fall: 420,
            ring: false,
            line: li,
          });
        }
      }
    }
  });

  const focus = pts.filter((p) => p.line === layout.focusLine);
  const maxX2 = Math.max(...focus.map((p) => p.x));
  const focusEdge = focus.filter((p) => p.x >= maxX2 - 112);
  let last = focusEdge[0];
  for (const p of focusEdge) if (p.y < last.y) last = p;
  const pool = focusEdge.filter((p) => p !== last);
  const missing: Particle[] = [];
  for (let i = 0; i < 8 && pool.length; i++) {
    missing.push(pool.splice((rand() * pool.length) | 0, 1)[0]);
  }
  missing.forEach((p, i) => {
    p.delay = 0.4 + i * 0.33 + rand() * 0.08;
    p.dur = 0.42 + rand() * 0.1;
    p.fall = 420 + rand() * 260;
    p.ring = true;
  });
  last.delay = 3.35;
  last.dur = 0.45;
  last.fall = 580;
  last.ring = true;

  const R = 30;
  const impacts: Impact[] = missing.concat([last]).map((p) => {
    const ti = p.delay + p.dur;
    const nbs: Neighbor[] = [];
    for (const q of pts) {
      if (q === p) continue;
      const settled = q.delay < 0 || q.delay + q.dur <= ti;
      if (!settled) continue;
      const dx = q.x - p.x,
        dy = q.y - p.y;
      const d = Math.hypot(dx, dy);
      if (d < R) {
        const inv = d > 0.5 ? 1 / d : 0;
        nbs.push({
          q,
          ux: d > 0.5 ? dx * inv : Math.cos(rand() * 6.283),
          uy: d > 0.5 ? dy * inv : Math.sin(rand() * 6.283),
          w: Math.pow(1 - d / R, 1.5),
        });
      }
    }
    return { ti, e: 5.5 + p.fall / 90, nbs };
  });

  let fx = 0,
    fy = 0;
  for (const p of focusEdge) {
    fx += p.x;
    fy += p.y;
  }
  return {
    layout,
    pts,
    impacts,
    F: { x: fx / focusEdge.length, y: fy / focusEdge.length },
  };
}

function drawFrame(ctx: CanvasCtx, t: number, model: Model) {
  const { layout, pts, impacts, F } = model;
  const { W, H } = layout;
  const dpr = 2;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const grd = ctx.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, "#FAF5EA");
  grd.addColorStop(0.55, "#F3ECDA");
  grd.addColorStop(1, "#E6D8BC");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);

  const eZ = Easing.easeInOutQuart(clamp((t - 3.9) / 1.7, 0, 1));
  const zBase = 6.6 - 0.4 * clamp(t / 3.9, 0, 1);
  const z = zBase + (1 - zBase) * eZ;
  const cx = F.x + (W / 2 - F.x) * eZ;
  const cy = F.y + 6 + (H / 2 - F.y - 6) * eZ;
  ctx.translate(W / 2, H / 2);
  ctx.scale(z, z);
  ctx.translate(-cx, -cy);

  const disp = new Map<Particle, [number, number]>();
  for (const im of impacts) {
    const age = t - im.ti;
    if (age <= 0 || age > 0.9) continue;
    const osc = Math.exp(-5.5 * age) * Math.sin(17 * age);
    if (Math.abs(osc) < 0.002) continue;
    for (const nb of im.nbs) {
      const amp = im.e * nb.w * osc;
      let d = disp.get(nb.q);
      if (!d) {
        d = [0, 0];
        disp.set(nb.q, d);
      }
      d[0] += nb.ux * amp;
      d[1] += nb.uy * amp;
    }
  }

  const fade = Easing.easeInOutQuad(clamp((t - 5.35) / 0.95, 0, 1));
  ctx.globalAlpha = 1 - fade;
  for (const p of pts) {
    const a = p.delay < 0 ? 1e9 : t - p.delay;
    if (a <= 0) continue;
    const prog = p.delay < 0 ? 1 : clamp(a / p.dur, 0, 1);
    let x = p.x;
    let y = p.y - p.fall * (1 - prog * prog);
    let rx = p.r,
      ry = p.r;
    const s = a - p.dur;
    if (p.delay >= 0 && s > 0) {
      if (s < 0.12) {
        const k = 1 - Easing.easeOutCubic(s / 0.12);
        rx = p.r * (1 + 0.38 * k);
        ry = p.r * (1 - 0.42 * k);
      } else if (s < 0.34) {
        const u = (s - 0.12) / 0.22;
        y -= 6.5 * 4 * u * (1 - u);
      } else if (s < 0.44) {
        const k = 1 - Easing.easeOutCubic((s - 0.34) / 0.1);
        rx = p.r * (1 + 0.15 * k);
        ry = p.r * (1 - 0.17 * k);
      }
    }
    const d = disp.get(p);
    if (d && (p.delay < 0 || s > 0)) {
      x += d[0];
      y += d[1];
    }
    ctx.fillStyle = p.c;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    if (p.ring && s > 0 && s < 0.4) {
      const k = s / 0.4;
      ctx.strokeStyle = `rgba(92,67,38,${(0.35 * (1 - k) * (1 - fade)).toFixed(3)})`;
      ctx.lineWidth = 1.6 / z;
      ctx.beginPath();
      ctx.arc(p.x, p.y + 1, p.r + 26 * Easing.easeOutCubic(k), 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  if (fade > 0) {
    ctx.globalAlpha = fade;
    const tg = ctx.createLinearGradient(
      0,
      layout.BASES[0] - 100,
      0,
      layout.BASES[layout.BASES.length - 1] + 8,
    );
    tg.addColorStop(0, "#372A19");
    tg.addColorStop(1, "#7A5A33");
    ctx.fillStyle = tg;
    setType(ctx, layout);
    layout.LINES.forEach((line, i) => {
      ctx.fillText(line, W / 2, layout.BASES[i]);
    });
    ctx.fillStyle = "#7A5A33";
    ctx.font = `600 ${layout.SUB_FS}px Raleway, "Helvetica Neue", Arial, sans-serif`;
    try {
      ctx.letterSpacing = `${(-0.03 * layout.SUB_FS).toFixed(2)}px`;
    } catch {}
    layout.SUB_LINES.forEach((line, i) => {
      ctx.fillText(line, W / 2, layout.SUB_BASES[i]);
    });
    try {
      ctx.letterSpacing = "0px";
    } catch {}
  }
  ctx.globalAlpha = 1;
}

function waitForFont(layout: Layout) {
  return new Promise<void>((resolve) => {
    if (!document.fonts) return resolve();
    const spec = `600 ${layout.FS}px Raleway`;
    const sample = layout.LINES.join(" ");
    const t0 = Date.now();
    (function poll() {
      if (document.fonts.check(spec, sample)) return resolve();
      if (Date.now() - t0 > 5000) return resolve();
      document.fonts
        .load(spec, sample)
        .catch(() => {})
        .then(() => {
          if (document.fonts.check(spec, sample)) resolve();
          else setTimeout(poll, 200);
        });
    })();
  });
}

const BREAKPOINT = 1024;

function pickLayout(viewportWidth: number): Layout {
  return viewportWidth < BREAKPOINT ? MOBILE : DESKTOP;
}

export default function ParticleHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d") as CanvasCtx;
    let currentLayoutKey: Layout["key"] | null = null;
    let frameId = 0;
    let cancelled = false;

    function setupCanvas(layout: Layout) {
      canvas!.width = layout.W * 2;
      canvas!.height = layout.H * 2;
      canvas!.style.width = `${layout.W}px`;
      canvas!.style.height = `${layout.H}px`;
    }

    function rescale(layout: Layout) {
      if (!wrapper) return;
      const s = Math.max(
        wrapper.clientWidth / layout.W,
        wrapper.clientHeight / layout.H,
      );
      canvas!.style.transform = `scale(${s})`;
    }

    function start(layout: Layout) {
      cancelAnimationFrame(frameId);
      setupCanvas(layout);
      rescale(layout);
      waitForFont(layout).then(() => {
        if (cancelled || currentLayoutKey !== layout.key) return;
        const model = buildParticles(layout, DENSITY);
        let startTs: number | null = null;
        function frame(ts: number) {
          if (startTs === null) startTs = ts;
          const t = Math.min((ts - startTs) / 1000, DUR);
          drawFrame(ctx, t, model);
          if (t < DUR) frameId = requestAnimationFrame(frame);
        }
        frameId = requestAnimationFrame(frame);
      });
    }

    function handleResize() {
      if (!wrapper) return;
      const layout = pickLayout(window.innerWidth);
      if (layout.key !== currentLayoutKey) {
        currentLayoutKey = layout.key;
        start(layout);
      } else {
        rescale(layout);
      }
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(wrapper);
    handleResize();

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: "#F5F0E4" }}
    >
      <canvas
        ref={canvasRef}
        style={{ transformOrigin: "center center" }}
        aria-label={`${DESKTOP.LINES.join(" ")} — ${DESKTOP.SUB_LINES.join(" ")}`}
      />
    </div>
  );
}
