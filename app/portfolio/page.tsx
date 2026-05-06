"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Category = "all" | "medical" | "automotive" | "other";

const projects = [
  {
    id: 1,
    category: "automotive" as Category,
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIdi6QTiOEIwnpln7-Sj8qP6fFDLFlKnF7sw49WXdGYLPSl_NBscUX497ZzSy_uLsIaHOgVqxUvgNJ65YiUbvQgmJK8c_T7JnMwpAbKoV1bIb8fhYbKIE5FZUnubFbtvbeBw3kP7pHvGruh5Akdr-qmfcE29h1HZ6mFwvGcuAeXrl3nC4evhkVoS227gWdzvEZoGNSLcA5t8-giCKM6rjklb9PcMZqC4or8bYnTYlWF0osJno7fZTnPCyJ8ZyyiBtcTEzXw_91edwl",
    alt: "Industrial Turbine Blade",
    badge: "Featured Case Study",
    title: "Advanced Turbine Blade",
    description:
      "Material: Titanium Alloy (Ti6Al4V), Resolution: 30 microns. Optimized for high-thermal stress environments.",
    span: "md:col-span-8",
    progress: null,
  },
  {
    id: 2,
    category: "other" as Category,
    featured: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOAyS89ucnvWtAa4Z77OhufLBoeGYw7V8dQGJiE6wYtJsNA2J5JhqUcuWzp7TayMCSEXjQ5y5z-R2k39DD5ZtXXT1lW2p6YGQXrz0xl4AlXNUk5bbSKlB2jhsNJauTB0fJyhp79FKcjLxA3owNm6lM1vT7CzcyAGjQoKcs-avmYXVuypcOxCTkHivK7cU4QIg5rfZMRT51ugtuXvhsh2Q9szyppzw33ZosCrvmfsHbY0divioCDJHB0UACG2FtnIDQR4SFA-j9X2mB",
    alt: "Architectural Model",
    badge: null,
    title: "Architectural Model",
    description: "Material: White Resin, Resolution: 50 microns",
    span: "md:col-span-4",
    progress: "w-full",
  },
  {
    id: 3,
    category: "automotive" as Category,
    featured: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGiei_GTv1ZJdudvM9O478gnkpcsDRvixOHokttU8zvFkkdAvtBLKUgZJTPSsXtI8jyglsgHV_Opg3rtrhQJZuSsvgMGsTIgvkY-MLlGKcdFlSkRMzLPBnR0ij2_JOKsjIoLnfIk3q9XbUdbs5WjPHZsx7WMYQWeVSwCj3HdXCcb-nMhpQGOAPUL_M2BQqgco9JEL8VztfLAFPBYkiYSCt0enuEIATpek3m-dVk1JmGf95HCqqNco92rcc2bCdwI2_8YUTym03635M",
    alt: "Planetary Gearset",
    badge: null,
    title: "Planetary Gearset",
    description: "Material: PA-12 Nylon, Resolution: 100 microns",
    span: "md:col-span-4",
    progress: "w-3/4",
  },
  {
    id: 4,
    category: "medical" as Category,
    featured: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtt4020ZhrY86XoP3qnMa2Uxp9URHaWCGMz8mxYZzZ1wslgsygRdtHdcts6U2rJxLlkFivEIm0kts7hr40FHdj58tHtpEuFLSETVNK0OGtinco_C3s31mEC3qEw4gjgt2Z9YD_HXNOG1Xhm27_Bn9Lhcw62gHEzkM7rRGkBjYh6dImGH1dG8K3oLFBiUi33sFBoDAapKiO8N5iu2csPJJLiUIqtnK4aNBkkBssc0LBikidk7WMZHMB6mJFb6e9tbdB87QwUP1Io9nH",
    alt: "Cranial Implant",
    badge: null,
    title: "Cranial Implant",
    description: "Material: PEEK Biocompatible, SLM Process",
    span: "md:col-span-4",
    progress: "w-full",
  },
  {
    id: 5,
    category: "automotive" as Category,
    featured: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_TGCndlz5o46SC7OeWRnC37JnmU6dDyXyRdZsv6tuTLkbugnA-Q7dbNQ3AMwxsN5KaecczuyuZ3EbRMlTDT3IcOU_YxbUqysKdWE1LqmQghQs1QqoHG8Nx51Ltqy0xdjtwsQo2czasZDoYU4QJafGPvRhFlPSrCm2ZMRCwILh0iM4sOgnBLj_7DsI3L_QIIbvBGgoIaaJ9wJ7JFsfgSESotao1iRpISb3reoULqbURLlpi6PSfSPL6mA4hh1BQiYVLJxC17U-8zyK",
    alt: "Intake Manifold",
    badge: null,
    title: "Intake Manifold",
    description: "Material: Carbon-Fiber Nylon (CF-PA12)",
    span: "md:col-span-4",
    progress: "w-1/2",
  },
  {
    id: 6,
    category: "other" as Category,
    featured: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP0QprixpaOxJzYh02xYGfR_Y_Uzn8giP-lFbPigB9CC24TDRn2yKdJUNuYegaXnlNeU95xLICcCi4wnSNd3hpAFm2nYC4Mguxl4PByLHzuowNLIpd_1reKXpEtSLHqkz1Y3cHGzHmXzDRVdGFc__6jicdBO0Y2-tJEclkqnL66f2iAAOcmuhySQb8tu-5MX_1bguXbwCTdqrQ8xv3L60iHcy68VXyud98tTXzLBQqBeHhubLmegywa-O646FshfUDJm1PBh2NA9eb",
    alt: "UAV Chassis",
    badge: null,
    title: "UAV Chassis",
    description: "Material: SLS Polypropylene, Ultralight",
    span: "md:col-span-4",
    progress: "w-full",
  },
];

const latticeProject = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDT_Kcuvi_u7q5nu9vaWzo7mRQlTx0bDo69DQ6Lx85FzCeQao6122rfR_tLUHNWH0KtlcRNZ5fko-uBJ7epKKKX7BYGRzbBFTU2rJmnqzBrI7bEQ_ef4tfC8yRVkbjvwhbPDPdtEYUGbk038P9NHzhyXwI1K-jZ4IX1avMaiIF3a0ERyioUXvvb03EZemRtBJigJT8O3ImgN64AniRFXEkdQG0IPJxh7mE2jru8O2Y3Y-4uzqP3wOAXd61m_sH0Qsnn9eGgkvH8RCy",
  alt: "Lattice Heat Exchanger",
};

const filters: { label: string; value: Category | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Medical", value: "medical" },
  { label: "Automotive", value: "automotive" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const visible = (cat: Category) =>
    activeFilter === "all" || activeFilter === cat;

  return (
    <main className="mt-24 max-w-[1440px] mx-auto px-6 mb-24">
      <header className="mb-16 border-l-4 border-amber-300 pl-6 py-4">
        <h1 className="font-headline-xl text-headline-xl text-on-background uppercase mb-2">
          Portfolio Gallery
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          Explore a mix of custom prints, display pieces, and practical builds
          made for everyday customers and personal projects.
        </p>
      </header>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-4 mb-10 pb-6 border-b border-zinc-800">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActiveFilter(f.value)}
            className={
              activeFilter === f.value
                ? "font-label-mono text-label-mono text-amber-200 uppercase bg-amber-300/10 px-4 py-2 border border-amber-300/20"
                : "font-label-mono text-label-mono text-zinc-400 uppercase hover:text-white cursor-pointer px-4 py-2 transition-colors"
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Featured turbine */}
        {visible("automotive") && (
          <div className="portfolio-card md:col-span-8 group relative bg-surface-container-low tactile-card overflow-hidden">
            <div className="aspect-video w-full relative">
              <Image
                src={projects[0].image}
                alt={projects[0].alt}
                fill
                className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label-mono text-[10px] text-amber-300 uppercase tracking-widest mb-2 block">
                    {projects[0].badge}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-white mb-2 uppercase">
                    {projects[0].title}
                  </h2>
                  <p className="font-body-md text-zinc-300 max-w-md">
                    {projects[0].description}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-amber-300 text-black p-3 group-hover:bg-amber-200 transition-colors">
                  <span className="material-symbols-outlined">open_in_new</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Small cards */}
        {projects.slice(1).map((project) =>
          visible(project.category) ? (
            <div
              key={project.id}
              className={`${project.span} bg-surface-container tactile-card group`}
            >
              <div className="aspect-square relative overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-white mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="font-caption text-caption text-zinc-500 uppercase tracking-wider mb-4">
                  {project.description}
                </p>
                {project.progress && (
                  <div className="h-1 w-full bg-zinc-800 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-amber-300 ${project.progress}`}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : null
        )}

        {/* Lattice item - "other" category */}
        {visible("other") && (
          <div className="md:col-span-8 bg-surface-container tactile-card group flex flex-col md:flex-row">
            <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
              <Image
                src={latticeProject.image}
                alt={latticeProject.alt}
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-zinc-900/50 backdrop-blur-sm">
              <span className="font-label-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-4">
                Specialized Engineering
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white mb-4 uppercase">
                Lattice Heat Exchanger
              </h3>
              <p className="font-body-md text-zinc-400 mb-6">
                Designed using generative algorithms to maximize surface area
                for thermal dissipation in liquid-cooled systems.
              </p>
              <ul className="space-y-2 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-300 text-sm">
                    settings
                  </span>
                  <span className="font-label-mono text-xs uppercase text-zinc-300">
                    Material: AlSi10Mg Aluminum
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-300 text-sm">
                    precision_manufacturing
                  </span>
                  <span className="font-label-mono text-xs uppercase text-zinc-300">
                    Tolerance: ±0.05mm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="mt-24 p-12 bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center">
        <h2 className="font-headline-lg text-headline-lg text-white mb-4 uppercase">
          Have a Technical Requirement?
        </h2>
        <p className="font-body-md text-zinc-400 max-w-xl mb-8">
          Our team of engineers can help you choose the right material and
          additive process for your specific application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-fixed px-8 py-3 font-space-grotesk font-bold uppercase tracking-tight active:scale-95 transition-transform inline-block"
          >
            Upload Your CAD File
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-zinc-700 text-white px-8 py-3 font-space-grotesk font-bold uppercase tracking-tight hover:bg-zinc-800 active:scale-95 transition-transform inline-block"
          >
            Consult an Engineer
          </Link>
        </div>
      </section>
    </main>
  );
}
