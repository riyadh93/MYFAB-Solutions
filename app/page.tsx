import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-176.75 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9-5rpKqV497E7M9uy-cCVEjX7Ea09DkSndnH2yxwZhR6uVOcS4wMIZPz7cQmkBndYhL1u10iVv-12K_4j_iPqh2dLxWnqznUD5cAfrwpeeB9zn6oNsDfB-RNcEEVVY07rNFUKcCwuEwntwdTahQGmOZTzZTMvROmlTxsvtIq89s-wyTp3a6P1unKaC77X8SW3eqvCwCWRaZ5oS0cJkcUYxOiO_y9CnuhV99P3Xl3_VItzlS-r9XxZWz0z9fpCGL_ggFymMzDcZzOh"
            alt="Industrial 3D printer nozzle extruding filament"
            fill
            priority
            className="object-cover grayscale opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-20 grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <div className="md:col-span-8 flex flex-col gap-sm">
            <div className="flex items-center gap-xs">
              <span className="w-12 h-px bg-primary" />
              <span className="font-label-mono text-label-mono text-primary uppercase">
                Custom 3D Printing Made Simple
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface leading-none">
              3D printing for personal ideas, gifts, and custom parts
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
              From display models and decorative pieces to practical household
              parts, we help turn your ideas into custom prints that look good
              and work well.
            </p>
            <div className="flex flex-wrap gap-md mt-8">
              <Link
                href="/contact"
                className="bg-primary-container text-on-primary-fixed font-label-mono text-label-mono px-xl py-sm uppercase tracking-widest inner-shadow-tactile hover:brightness-110 active:scale-95 transition-all inline-block"
              >
                Start Your Build
              </Link>
              <Link
                href="/materials"
                className="border border-outline text-on-surface font-label-mono text-label-mono px-xl py-sm uppercase tracking-widest hover:bg-surface-variant active:scale-95 transition-all inline-block"
              >
                Browse Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface-container-low border-y border-neutral-800 py-md">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Resolution", value: "50 MICRONS" },
            { label: "Build Volume", value: "300 mm³" },
            { label: "Materials", value: "24+ TYPES" },
            { label: "Lead Time", value: "48 HOURS" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-label-mono text-primary text-xs uppercase opacity-60">
                {stat.label}
              </span>
              <span className="font-headline-md text-headline-md">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work */}
      <section className="py-xl max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-xs mb-lg">
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight">
            Our Work
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-200">
          <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden tonal-layer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdA36ujpgWuZGpNThKC3V33nB6jnj5k6QhymTQNb0A_GayUE2eWPds2Te5hhDRYTwMrCtyWV3cilCeU-nXbUOHkHzzNzqEUwXWWPae49xoZ1rK-fdPA4MZsKdb3GR7vdVi2iItG9ZnjCv705Yz5_Yvm3hEjsnmZmBwlEtTIkiu1o_v7jevSvz2RuFXj6ara6LQiuZTO8Wt5evjIypHdh_pTnjwtBWSzJ5P9MfaKJZkiBfWZc3ofQC72XB4hKAZxfAcxI-dTl6N3dBm"
              alt="Performance Intake Manifold"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 p-lg">
              <div className="flex items-center gap-xs mb-base">
                <span className="px-2 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase">
                  Industrial
                </span>
                <span className="text-on-surface-variant font-label-mono text-xs uppercase">
                  Automotive Engineering
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white">
                Performance Intake Manifold
              </h3>
            </div>
          </div>
          <div className="md:col-span-5 md:row-span-1 group relative overflow-hidden tonal-layer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjtADMnmLPa-kF1mRUuLYO8HcRdR4NGC_K_mUaHSWItdhAmpq-OcsXz8njNRE2GM-yItNerDOcpHPl-UepqaGmcTz5ne_bio86p-lipSuSv2PJW8JDSB0e7xxpx4zxQbcFMdnoKXpiLxnbB7QFkDs_-9b-1NSmaLVdC5CWAYdAlsQZVCnVPfsP64QYOlnd505vGxqRd7xFxPtIJc4tv1qvVrj-bcps_XH_6MgyMqtSPw475HnW-cfnIog3JlFArJDh_-LmPSGu_xV0"
              alt="Patient-Specific Orthopedic Guide"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 p-md">
              <span className="text-on-surface-variant font-label-mono text-xs uppercase">
                Medical Grade SLA
              </span>
              <h3 className="font-headline-md text-headline-md text-white text-lg">
                Patient-Specific Orthopedic Guide
              </h3>
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden tonal-layer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6S26h5iOE0s4n99r4P5LsIlaeNFyNTGn81x4rqoA94OTCCnevXLMHJCN347KlUAn7RQw4LY6z0xzVTrX4SBMrJb-TK7wcWejxfjQeLlY4DxrMJVRHOVO2cLYa3W2zxp-DWAk5cda3JvXEEFss76eC465W0DCGouAHLoY2LV5IHJt_1CrKNzYcCtE4sAwVGyOIXmAUf8x8YlfUHQImf5S5YJBOLOsYFkR8fo7pkOddwRf7XPqoQM1D2ld5-lBKZ88QG0zL0k00B3ln"
              alt="3D printed interlocking gears"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="md:col-span-3 md:row-span-1 group relative overflow-hidden tonal-layer rounded-lg">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtzKelpTRFPWvHgkQFC2tn1zozDVh1WdocHEGxjFAaUmzQdHJeQKYbs5CKVh1TScisCgIyF46TeAamOsWha8reL05PZUzQoFp5IlOXkHCU6syk-J3sRbCmFNydGGrbXjSjnJ_HMV4cEVyQKLYFAVKSqK939k8hqwmO5VzBuGhM2hl1Tym6eBfCNkfBn_64vQCEF83gNtQkUhykaNrrasoa9DR6ufW5BkAkN4H63WEAIy2npqGsfxTEgZgy4S_jXZIpaWgmV3q7__S6"
              alt="Architectural miniature models"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-md">
              <h3 className="font-label-mono text-sm text-white uppercase tracking-wider">
                Bio-Medical Prototyping
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl bg-primary-container text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-sm">
              Ready to build?
            </h2>
            <p className="font-body-lg text-on-primary-container">
              Upload your .STL or .OBJ files today for an instant quote and
              technical feasibility assessment from our specialized engineers.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-on-primary text-primary-fixed px-xl py-md font-label-mono text-label-mono uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform active:scale-95 inline-block whitespace-nowrap"
          >
            Upload Files Now
          </Link>
        </div>
        <div className="absolute right-[-10%] top-0 h-full w-1/3 skew-x-[-20deg] bg-on-primary/10" />
      </section>
    </main>
  );
}
