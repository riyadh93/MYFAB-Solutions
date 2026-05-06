"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type View = "filaments" | "resins";

const filaments = [
  {
    id: "pla-plus",
    name: "PLA+",
    subtitle: "Display / Hobby / Basic Parts",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    stat1Label: "Ease Of Use",
    stat1Value: "Easy",
    stat2Label: "Finish",
    stat2Value: "Clean",
    description:
      "A simple option for display pieces, desk items, and ideas you want to prototype quickly without extra complexity.",
    badge: null,
    colorDot: (
      <>
        <span className="h-4 w-4 rounded-full border border-[#333333] bg-white" />
        <span className="h-4 w-4 rounded-full border border-[#333333] bg-neutral-500" />
      </>
    ),
  },
  {
    id: "petg",
    name: "PETG",
    subtitle: "Functional / Durable / Everyday",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
    stat1Label: "Strength",
    stat1Value: "High",
    stat2Label: "Weather",
    stat2Value: "Good",
    description:
      "A reliable all-rounder for mounts, covers, organizers, containers, and custom pieces that need a bit more toughness.",
    badge: (
      <div className="rounded-full bg-[#2b4b72] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9cc7ff]">
        In Stock
      </div>
    ),
    colorDot: null,
  },
  {
    id: "tpu",
    name: "TPU Flexible",
    subtitle: "Soft Touch / Bendable",
    image:
      "https://images.unsplash.com/photo-1616627454755-6d4fdbd6c0aa?auto=format&fit=crop&w=1200&q=80",
    stat1Label: null,
    stat1Value: null,
    stat2Label: null,
    stat2Value: null,
    isFlexCard: true,
    flexLabel: "Flexibility",
    flexValue: "80A",
    flexWidth: "78%",
    description:
      "Best for grips, protective pads, soft cases, and parts that need to bend instead of snap.",
    badge: null,
    colorDot: (
      <span className="h-4 w-4 rounded-full border border-[#333333] bg-neutral-200" />
    ),
    highlighted: true,
  },
  {
    id: "abs",
    name: "ABS",
    subtitle: "Impact Friendly",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5907?auto=format&fit=crop&w=1200&q=80",
    stat1Label: "Impact",
    stat1Value: "Good",
    stat2Label: "Heat",
    stat2Value: "Better",
    description:
      "A stronger choice for enclosures, utility items, and practical parts that may deal with more wear.",
    badge: (
      <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">
        Low Stock
      </span>
    ),
    colorDot: null,
  },
  {
    id: "nylon",
    name: "Nylon",
    subtitle: "Wear Resistant",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    stat1Label: "Durability",
    stat1Value: "High",
    stat2Label: "Wear",
    stat2Value: "Low",
    description:
      "Useful for mechanical-style parts, moving pieces, and jobs where long-term toughness matters most.",
    badge: null,
    colorDot: (
      <span className="h-4 w-4 rounded-full border border-[#333333] bg-[#4b8ee8]" />
    ),
  },
];

const moreFilaments = [
  { name: "PLA", sub: "Basic / Low Warp", s1l: "Ease", s1v: "Very Easy", s2l: "Warp", s2v: "Low", desc: "The simplest choice for everyday prints, decor pieces, prototypes, and beginner-friendly projects.", badge: <div className="rounded-full bg-[#2b4b72] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9cc7ff]">In Stock</div> },
  { name: "PLA Pro", sub: "Basic / Stronger", s1l: "Strength", s1v: "Higher", s2l: "Use", s2v: "General", desc: "A tougher PLA-style option when you want the same easy workflow with better everyday durability.", badge: null },
  { name: "Silk PLA", sub: "Aesthetic / Shiny", s1l: "Finish", s1v: "Glossy", s2l: "Best For", s2v: "Display", desc: "Made for decorative prints and gifts where the final look matters more than rugged performance.", badge: null },
  { name: "Matte PLA", sub: "Aesthetic / Non-Glossy", s1l: "Finish", s1v: "Soft Matte", s2l: "Look", s2v: "Clean", desc: "Useful for cleaner-looking models, product mockups, and modern decorative pieces with less shine.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">Low Stock</span> },
  { name: "ABS+", sub: "Engineering / Improved ABS", s1l: "Warp", s1v: "Lower", s2l: "Heat", s2v: "Good", desc: "A more user-friendly ABS style material when you want strength and heat resistance with less printing drama.", badge: <div className="rounded-full bg-[#2b4b72] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9cc7ff]">In Stock</div> },
  { name: "ASA", sub: "Outdoor / UV Resistant", s1l: "Sunlight", s1v: "Stable", s2l: "Use", s2v: "Outdoor", desc: "A good fit for outdoor labels, brackets, covers, and parts that need to handle sun exposure better than ABS.", badge: null },
  { name: "Polycarbonate", sub: "Industrial / High Heat", s1l: "Heat", s1v: "High", s2l: "Strength", s2v: "Very High", desc: "Best for demanding jobs where you care about heat resistance, stiffness, and stronger functional performance.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">Special Order</span> },
  { name: "PP", sub: "Chemical Resistant", s1l: "Chemicals", s1v: "Good", s2l: "Flex", s2v: "Moderate", desc: "Useful for containers, living-hinge style parts, and jobs that may see moisture or chemical contact.", badge: null },
  { name: "PEEK / PEI", sub: "Ultra High-End", s1l: "Grade", s1v: "Premium", s2l: "Access", s2v: "Rare", desc: "Advanced high-end options typically used only for specialty requirements rather than standard consumer projects.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">By Request</span> },
  { name: "TPE", sub: "Flexible / Soft", s1l: "Softness", s1v: "Higher", s2l: "Feel", s2v: "Rubbery", desc: "Softer than TPU and helpful when you want a more rubber-like touch for grips, pads, or wearable parts.", badge: null },
  { name: "Wood-Filled PLA", sub: "Specialty / Texture", s1l: "Look", s1v: "Wood-Like", s2l: "Best For", s2v: "Decor", desc: "Chosen for decorative pieces when you want a warmer natural look instead of a standard plastic finish.", badge: null },
  { name: "Carbon Fiber Blend", sub: "Composite / Stiff", s1l: "Rigidity", s1v: "High", s2l: "Finish", s2v: "Matte", desc: "Available in PLA-CF, PETG-CF, or Nylon-CF when you want a stiffer part with a more technical finish.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">By Request</span> },
  { name: "Specialty Effects", sub: "Glow / Marble / Color Shift", s1l: "Styles", s1v: "Many", s2l: "Focus", s2v: "Visual", desc: "Includes glow-in-the-dark, UV or temperature color-changing, marble effect, metal-filled, and glass fiber options.", badge: null },
];

const resins = [
  {
    name: "Standard Resin",
    sub: "Clear / Grey / White",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53ZhceYCjtI6Miv1CCSOEkTKy_V1Mtz4nCOCu0yQJxq-M55wrGdRJ1Zmj03RpiI-eqGSSsFNCCKJ19sjONIcYsYfERzV7LshwZTRytTB4Yx3XZUrl6ny23WFnmjbAZ3coe1ZFklzR6Qk6RBzJCNbwBdw5wHJcVbbex6tcZVsShShffKSDeXAZ2RaMQgVXe4WVLH5rxO1dBLfQrO5JyMVMCbnQOMGcue0xixiriq5ilUOvYnQc6Q24-Ajf-uU6DsTTNwIGWq22BoRW",
    s1l: "Tensile Strength", s1v: "65 MPa", s2l: "Heat Deflect", s2v: "75 °C",
    desc: "A popular resin for visual prototypes and detailed models with a clean surface and crisp small features.",
    badge: null, highlighted: false,
  },
  {
    name: "Tough 2000 Resin",
    sub: "Stronger Detailed Parts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53ZhceYCjtI6Miv1CCSOEkTKy_V1Mtz4nCOCu0yQJxq-M55wrGdRJ1Zmj03RpiI-eqGSSsFNCCKJ19sjONIcYsYfERzV7LshwZTRytTB4Yx3XZUrl6ny23WFnmjbAZ3coe1ZFklzR6Qk6RBzJCNbwBdw5wHJcVbbex6tcZVsShShffKSDeXAZ2RaMQgVXe4WVLH5rxO1dBLfQrO5JyMVMCbnQOMGcue0xixiriq5ilUOvYnQc6Q24-Ajf-uU6DsTTNwIGWq22BoRW",
    s1l: "Elongation", s1v: "48%", s2l: "Impact", s2v: "High",
    desc: "A stronger resin choice for parts that still need a nice finish but must handle more use than standard display prints.",
    badge: <div className="absolute left-5 top-5 z-10 border border-[#d4b04c] bg-black/80 px-3 py-1 font-space-grotesk text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4b04c]">High Impact</div>,
    highlighted: false,
  },
  {
    name: "Flexible 80A Resin",
    sub: "Soft Touch / Elastomeric",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwmyfV0KU1w9jZFBJ1v3l37zwnp4vWnL0M8e4lNVP8hOjH5RziQeNfV1N8rF8ZzB5zQ9wq1A2lXhB7B8qjBIfRzQ2S6Lwqk7KSkZFxVd8nD2dYjv8W3eV8r8AkWbYw5k0d4MTu2E2Fq4X2rj9UQjAs7_2h8jWzq1QjQmK2gM0PzvRr6wq0sR7Oa4q2WJQf1sD8HfTtC4",
    s1l: null, s1v: null, s2l: null, s2v: null,
    isFlexCard: true, flexLabel: "Shore Hardness", flexValue: "80A", flexWidth: "79%",
    desc: "Useful for soft grips, flexible seals, wearable details, and custom pieces that should feel less rigid.",
    badge: null, highlighted: true,
  },
  {
    name: "Durable Resin",
    sub: "Wear Resistant",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5d2AqYw2Y5v5O5AJ1qG3N4pQb6wq2m7b2d7n1xQ0vQ2eL5aY6d0o8m2W9J5Z4W8mS2rQ0b1fG6gJ2cG2xN8oC9gA1zK2fR7zB1aH0qM5xD8fN7mA2gM3wV9xL7tD5uP6",
    s1l: "Friction", s1v: "Low", s2l: "Ductility", s2v: "High",
    desc: "Helpful for moving parts, squeeze-style pieces, and projects where a little flex and wear resistance are useful.",
    badge: null, highlighted: false,
  },
  {
    name: "Castable Wax Resin",
    sub: "Jewelry / Dental",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB53ZhceYCjtI6Miv1CCSOEkTKy_V1Mtz4nCOCu0yQJxq-M55wrGdRJ1Zmj03RpiI-eqGSSsFNCCKJ19sjONIcYsYfERzV7LshwZTRytTB4Yx3XZUrl6ny23WFnmjbAZ3coe1ZFklzR6Qk6RBzJCNbwBdw5wHJcVbbex6tcZVsShShffKSDeXAZ2RaMQgVXe4WVLH5rxO1dBLfQrO5JyMVMCbnQOMGcue0xixiriq5ilUOvYnQc6Q24-Ajf-uU6DsTTNwIGWq22BoRW",
    s1l: "Ash Content", s1v: "0.1%", s2l: "Detail", s2v: "Ultra",
    desc: "Best when you need fine details for molds, jewelry-style pieces, or highly precise small-format presentation work.",
    badge: null, highlighted: false,
  },
];

const moreResins = [
  { name: "High-Detail Resin", sub: "Miniatures / Models", s1l: "Detail", s1v: "Very Fine", s2l: "Surface", s2v: "Smooth", desc: "Ideal for miniatures, display figures, and small models that need crisp edges and fine visual detail.", badge: <div className="rounded-full bg-[#2b4b72] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9cc7ff]">In Stock</div> },
  { name: "Engineering Resin", sub: "Strong / Durable", s1l: "Strength", s1v: "High", s2l: "Use", s2v: "Functional", desc: "A stronger all-round resin for parts that still need a clean finish but should handle more practical use.", badge: null },
  { name: "High Temperature Resin", sub: "Heat Resistant", s1l: "Heat", s1v: "High", s2l: "Fit", s2v: "Stable", desc: "Best for resin parts that may see higher temperatures than standard display or desk-use prints.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">By Request</span> },
  { name: "Rigid Resin", sub: "Stiff Parts", s1l: "Stiffness", s1v: "High", s2l: "Feel", s2v: "Firm", desc: "A good pick when you want a harder, stiffer resin part with less flex under normal handling.", badge: null },
  { name: "Elastic Resin", sub: "Soft / Stretchable", s1l: "Stretch", s1v: "High", s2l: "Feel", s2v: "Soft", desc: "Softer than standard flexible resin and useful for stretchable details or very soft touch points.", badge: null },
  { name: "Water-Washable Resin", sub: "Easy Cleanup", s1l: "Cleanup", s1v: "Simple", s2l: "Use", s2v: "General", desc: "Helpful when you want easier post-processing and do not want to rely on IPA for cleanup.", badge: <div className="rounded-full bg-[#2b4b72] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9cc7ff]">In Stock</div> },
  { name: "Low-Odor Resin", sub: "Reduced Smell", s1l: "Odor", s1v: "Lower", s2l: "Use", s2v: "General", desc: "A more comfortable option when you want the resin look with a less noticeable smell during handling.", badge: null },
  { name: "Dental Resin", sub: "Medical / Dental Use", s1l: "Precision", s1v: "High", s2l: "Type", s2v: "Specialty", desc: "A specialty material intended for highly precise dental-style models and professional-use workflows.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">By Request</span> },
  { name: "Clear Resin", sub: "Transparent Parts", s1l: "Look", s1v: "Clear", s2l: "Finish", s2v: "Polishable", desc: "Useful for transparent or translucent parts where light transmission and visual clarity matter more than strength.", badge: null },
  { name: "Ceramic-Filled Resin", sub: "Specialty Blend", s1l: "Texture", s1v: "Special", s2l: "Use", s2v: "Niche", desc: "A specialty option for unique surface feel and niche project requirements where a standard resin is not the goal.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">Special Order</span> },
  { name: "Biocompatible Resin", sub: "Specialty / Certified Use", s1l: "Category", s1v: "Medical", s2l: "Access", s2v: "By Request", desc: "Reserved for specialized medical-style workflows where certified material behavior matters more than general appearance.", badge: <span className="rounded-full bg-[#253246] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8fb4e8]">Special Order</span> },
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#333333] bg-[#121212] p-3">
      <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-neutral-500">{label}</p>
      <p className="font-space-grotesk text-2xl text-[#d4b04c]">{value}</p>
    </div>
  );
}

function FilamentCard({ m }: { m: (typeof filaments)[0] }) {
  const highlighted = (m as { highlighted?: boolean }).highlighted;
  return (
    <article className={`group flex flex-col border ${highlighted ? "border-[#d4b04c]" : "border-[#333333]"} bg-[#1c1c1c] p-3 transition hover:border-[#d4b04c]`}>
      <div className="mb-4 aspect-video overflow-hidden border border-[#333333] bg-[#242424]">
        <Image
          src={m.image}
          alt={m.name}
          width={600}
          height={338}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="px-3 pb-4">
        <h2 className="font-space-grotesk text-2xl uppercase tracking-tight text-white">{m.name}</h2>
        <p className="mb-6 mt-1 font-space-grotesk text-xs uppercase tracking-[0.22em] text-neutral-500">{m.subtitle}</p>
        {(m as { isFlexCard?: boolean }).isFlexCard ? (
          <div className="mb-6 border border-[#333333] bg-[#121212] p-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>{(m as { flexLabel?: string }).flexLabel}</span>
              <span className="font-space-grotesk text-2xl normal-case tracking-normal text-[#d4b04c]">{(m as { flexValue?: string }).flexValue}</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden bg-[#333333]">
              <div className="h-full bg-[#d4b04c]" style={{ width: (m as { flexWidth?: string }).flexWidth }} />
            </div>
          </div>
        ) : (
          <div className="mb-6 grid grid-cols-2 gap-4">
            <StatCard label={m.stat1Label!} value={m.stat1Value!} />
            <StatCard label={m.stat2Label!} value={m.stat2Value!} />
          </div>
        )}
        <p className="mb-6 text-sm leading-8 text-neutral-400">{m.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">{m.colorDot ?? (m as { badge?: React.ReactNode }).badge}</div>
          <Link className="material-symbols-outlined text-neutral-500 transition group-hover:text-[#d4b04c]" href="/contact">
            arrow_forward
          </Link>
        </div>
      </div>
    </article>
  );
}

function SimpleCard({ m }: { m: (typeof moreFilaments)[0] }) {
  return (
    <article className="group flex flex-col border border-[#333333] bg-[#1c1c1c] p-3 transition hover:border-[#d4b04c]">
      <div className="px-3 pb-4 pt-2">
        <h2 className="font-space-grotesk text-2xl uppercase tracking-tight text-white">{m.name}</h2>
        <p className="mb-6 mt-1 font-space-grotesk text-xs uppercase tracking-[0.22em] text-neutral-500">{m.sub}</p>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <StatCard label={m.s1l} value={m.s1v} />
          <StatCard label={m.s2l} value={m.s2v} />
        </div>
        <p className="mb-6 text-sm leading-8 text-neutral-400">{m.desc}</p>
        <div className="flex items-center justify-between">
          <div>{m.badge}</div>
          <Link className="material-symbols-outlined text-neutral-500 transition group-hover:text-[#d4b04c]" href="/contact">
            arrow_forward
          </Link>
        </div>
      </div>
    </article>
  );
}

function ResinCard({ r }: { r: (typeof resins)[0] }) {
  return (
    <article className={`group relative flex flex-col border ${r.highlighted ? "border-[#d4b04c]" : "border-[#333333]"} bg-[#1c1c1c] p-3 transition hover:border-[#d4b04c]`}>
      {r.badge}
      <div className="mb-4 aspect-video overflow-hidden border border-[#333333] bg-[#242424]">
        <Image
          src={r.image}
          alt={r.name}
          width={600}
          height={338}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="px-3 pb-4">
        <h2 className="font-space-grotesk text-2xl uppercase tracking-tight text-white">{r.name}</h2>
        <p className="mb-6 mt-1 font-space-grotesk text-xs uppercase tracking-[0.22em] text-neutral-500">{r.sub}</p>
        {(r as { isFlexCard?: boolean }).isFlexCard ? (
          <div className="mb-6 border border-[#333333] bg-[#121212] p-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>{(r as { flexLabel?: string }).flexLabel}</span>
              <span className="font-space-grotesk text-2xl normal-case tracking-normal text-[#d4b04c]">{(r as { flexValue?: string }).flexValue}</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden bg-[#333333]">
              <div className="h-full bg-[#d4b04c]" style={{ width: (r as { flexWidth?: string }).flexWidth }} />
            </div>
          </div>
        ) : (
          <div className="mb-6 grid grid-cols-2 gap-4">
            {r.s1l && r.s1v && <StatCard label={r.s1l} value={r.s1v} />}
            {r.s2l && r.s2v && <StatCard label={r.s2l} value={r.s2v} />}
          </div>
        )}
        <p className="mb-6 text-sm leading-8 text-neutral-400">{r.desc}</p>
        <div className="flex items-center justify-between">
          <span className="h-4 w-4 rounded-full border border-[#333333] bg-neutral-200" />
          <Link className={`material-symbols-outlined transition ${r.highlighted ? "text-[#d4b04c]" : "text-neutral-500 group-hover:text-[#d4b04c]"}`} href="/contact">
            arrow_forward
          </Link>
        </div>
      </div>
    </article>
  );
}

function ComparisonCTA({ text }: { text: string }) {
  return (
    <aside className="flex min-h-[540px] flex-col justify-center border border-dashed border-[#333333] bg-[#1c1c1c] p-8 text-center">
      <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-[#d4b04c]">
        <span className="material-symbols-outlined text-4xl text-[#d4b04c]">upload_file</span>
      </div>
      <h3 className="mt-8 font-space-grotesk text-4xl uppercase leading-tight text-white md:text-5xl">
        Need a full comparison?
      </h3>
      <p className="mt-5 text-base leading-8 text-neutral-400">{text}</p>
      <Link className="mt-10 font-space-grotesk text-sm font-bold uppercase tracking-[0.28em] text-[#d4b04c]" href="/contact">
        Get Material Advice
      </Link>
    </aside>
  );
}

export default function MaterialsPage() {
  const [view, setView] = useState<View>("filaments");

  return (
    <div className="flex min-h-screen pt-20">
      {/* Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-[#333333] bg-[#1c1c1c] lg:fixed lg:bottom-0 lg:left-0 lg:top-20 lg:flex lg:flex-col">
        <div className="px-6 py-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#333333] bg-[#2a2a2a]">
              <span className="material-symbols-outlined text-[#d4b04c]">layers</span>
            </div>
            <div>
              <h2 className="font-space-grotesk text-lg uppercase tracking-wider text-[#d4b04c]">
                Material Library
              </h2>
              <p className="text-[11px] tracking-[0.12em] text-neutral-500">Technical Data Sheets</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 font-space-grotesk text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              Categories
            </p>
            <div className="space-y-2">
              {(["filaments", "resins"] as View[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  className={`flex w-full items-center gap-3 rounded-r-full px-5 py-4 text-left font-space-grotesk text-sm uppercase tracking-wider transition ${
                    view === v
                      ? "bg-[#d4b04c] text-black font-bold mr-4"
                      : "text-neutral-300 hover:bg-[#2a2a2a]"
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
                    {v === "filaments" ? "texture" : "water_drop"}
                  </span>
                  <span>{v === "filaments" ? "Filaments" : "Resins"}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 font-space-grotesk text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              Technical Filters
            </p>
            <div className="space-y-5">
              <div>
                <label className="mb-3 block font-space-grotesk text-[11px] uppercase tracking-wider text-neutral-400">
                  Strength
                </label>
                <input
                  type="range"
                  className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#353535]"
                />
              </div>
              <div>
                <label className="mb-3 block font-space-grotesk text-[11px] uppercase tracking-wider text-neutral-400">
                  Heat Resistance (°C)
                </label>
                <input
                  type="range"
                  className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#353535]"
                />
              </div>
              <div className="space-y-3">
                {["UV Resistant", "Food Safe", "Biocompatible"].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 text-xs uppercase tracking-wider text-neutral-300">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-none border-[#444444] bg-[#121212] text-[#d4b04c] focus:ring-0"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto px-6 pb-8">
          <Link
            href="/contact"
            className="block border border-[#d4b04c] px-4 py-4 text-center font-space-grotesk text-xs font-bold uppercase tracking-[0.28em] text-[#d4b04c] transition hover:bg-[#d4b04c] hover:text-black"
          >
            Order Sample Kit
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-[#131313] px-5 py-8 md:px-8 lg:ml-72">
        <div className="mx-auto max-w-6xl">
          {/* Mobile tabs */}
          <div className="mb-8 flex gap-3 lg:hidden">
            {(["filaments", "resins"] as View[]).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`rounded-full border px-4 py-3 font-space-grotesk text-xs uppercase tracking-[0.2em] transition ${
                  view === v
                    ? "border-[#d4b04c] bg-[#d4b04c] text-black font-bold"
                    : "border-[#333333] text-neutral-300"
                }`}
              >
                {v === "filaments" ? "Filaments" : "Resins"}
              </button>
            ))}
          </div>

          {/* Filaments panel */}
          {view === "filaments" && (
            <section>
              <header className="mb-10 border-l-4 border-[#d4b04c] pl-6">
                <h1 className="font-space-grotesk text-3xl uppercase tracking-tight text-white md:text-5xl">
                  Filament Materials
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-8 text-neutral-400 md:text-[17px]">
                  Strong, practical printing materials for everyday parts,
                  organizers, holders, custom accessories, and useful one-off
                  builds.
                </p>
              </header>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filaments.map((m) => (
                  <FilamentCard key={m.id} m={m} />
                ))}
                <ComparisonCTA text="Send us your design, target use, or preferred finish and we can help compare filament options for your project." />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {moreFilaments.map((m) => (
                  <SimpleCard key={m.name} m={m} />
                ))}
              </div>
            </section>
          )}

          {/* Resins panel */}
          {view === "resins" && (
            <section>
              <header className="mb-10 border-l-4 border-[#d4b04c] pl-6">
                <h1 className="font-space-grotesk text-3xl uppercase tracking-tight text-white md:text-5xl">
                  Engineered Resins
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-8 text-neutral-400 md:text-[17px]">
                  Smooth, detailed materials for miniatures, display pieces,
                  presentation models, jewelry masters, and sharper visual
                  results.
                </p>
              </header>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {resins.map((r) => (
                  <ResinCard key={r.name} r={r} />
                ))}
                <ComparisonCTA text="Upload your CAD file or tell us what you want the part to do, and we can guide you to the right resin choice." />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {moreResins.map((m) => (
                  <SimpleCard key={m.name} m={m} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
