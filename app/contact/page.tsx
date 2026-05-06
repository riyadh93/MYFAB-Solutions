export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-xl px-margin max-w-[1440px] mx-auto w-full">
      {/* Header */}
      <header className="mb-xl max-w-3xl">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-sm">
          CONTACT{" "}
          <span className="text-primary-fixed-dim">TECHNICAL SUPPORT</span>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary">
          We&apos;re here to help with personal projects, custom gifts, product
          ideas, and choosing the right material for your print.
        </p>
      </header>

      <div
        className="grid grid-cols-1 gap-md"
        style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
      >
        {/* Contact Info */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          <div className="bg-surface-container p-lg border border-zinc-800 shadow-sm">
            <span className="material-symbols-outlined text-primary-fixed-dim mb-sm">
              location_on
            </span>
            <h3 className="font-headline-md text-headline-md mb-xs">
              MYFAB SOLUTIONS
            </h3>
            <p className="font-body-md text-secondary leading-relaxed">
              4790, Jalan Oz 29
              <br />
              Ozana Villas Bukit Katil
              <br />
              Ayer Keroh
            </p>
          </div>

          <div className="bg-surface-container p-lg border border-zinc-800 shadow-sm space-y-md">
            <div className="flex items-center gap-sm">
              <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center border border-zinc-700">
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  mail
                </span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-zinc-500 uppercase">
                  Project Inquiries
                </p>
                <p className="font-body-md text-on-background">
                  riyadish@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center border border-zinc-700">
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  call
                </span>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-zinc-500 uppercase">
                  Direct Terminal
                </p>
                <p className="font-body-md text-on-background">
                  +6017-3032265
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-lg border border-zinc-800 border-dashed">
            <p className="font-label-mono text-label-mono text-primary-fixed-dim mb-sm uppercase tracking-widest">
              Operation_Status
            </p>
            <div className="flex justify-between items-center py-2 border-b border-zinc-800">
              <span className="font-body-md text-secondary">Mon - Saturday</span>
              <span className="font-label-mono text-on-background">
                0800 - 2200
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-body-md text-secondary">Sunday</span>
              <span className="font-label-mono text-on-background">
                Maintenance
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container p-lg border border-zinc-800 shadow-lg relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg className="w-full h-full text-primary-fixed-dim" viewBox="0 0 100 100">
                <circle cx="100" cy="0" fill="currentColor" r="100" />
              </svg>
            </div>
            <form className="space-y-md relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-mono text-label-mono text-zinc-500 uppercase">
                    Operator_Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-surface-container-lowest border border-zinc-800 focus:border-primary-fixed-dim focus:ring-0 text-on-background p-sm font-body-md transition-colors"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-mono text-label-mono text-zinc-500 uppercase">
                    Communication_Link
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="w-full bg-surface-container-lowest border border-zinc-800 focus:border-primary-fixed-dim focus:ring-0 text-on-background p-sm font-body-md transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-mono text-label-mono text-zinc-500 uppercase">
                  Inquiry_Type
                </label>
                <select className="w-full bg-surface-container-lowest border border-zinc-800 focus:border-primary-fixed-dim focus:ring-0 text-on-background p-sm font-body-md transition-colors appearance-none">
                  <option>Custom Print Request</option>
                  <option>Gift or Display Piece</option>
                  <option>Material Advice</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="font-label-mono text-label-mono text-zinc-500 uppercase">
                  Message_Payload
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe your technical requirements..."
                  className="w-full bg-surface-container-lowest border border-zinc-800 focus:border-primary-fixed-dim focus:ring-0 text-on-background p-sm font-body-md transition-colors"
                />
              </div>
              <div className="space-y-xs">
                <label className="font-label-mono text-label-mono text-zinc-500 uppercase">
                  Upload_File
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer bg-surface-container-lowest border border-dashed border-zinc-700 text-zinc-300 p-sm font-body-md transition-colors file:mr-4 file:border-0 file:bg-primary-container file:px-4 file:py-2 file:text-on-primary-fixed file:font-label-mono file:uppercase hover:border-primary-fixed-dim"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-fixed font-headline-md py-md flex items-center justify-center gap-sm hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-wider group"
              >
                Transmit Data
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-12 mt-gutter">
          <div className="grid gap-md lg:grid-cols-[1.45fr_0.55fr]">
            <div className="relative bg-surface-container-highest h-[500px] border border-zinc-800 overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=4790%2C%20Jalan%20Oz%2029%2C%20Ozana%20Villas%20Bukit%20Katil%2C%20Ayer%20Keroh%2C%2075450%20Melaka&output=embed"
              />
            </div>
            <aside className="border border-zinc-800 bg-surface-container p-lg shadow-2xl flex flex-col justify-between gap-md">
              <div className="space-y-sm">
                <p className="font-label-mono text-label-mono text-primary-fixed-dim uppercase tracking-widest">
                  Map Pinpoint
                </p>
                <h3 className="font-headline-md text-headline-md">
                  MyFab Solutions
                </h3>
                <p className="font-body-md text-secondary leading-relaxed">
                  4790, Jalan Oz 29
                  <br />
                  Ozana Villas Bukit Katil
                  <br />
                  Ayer Keroh, 75450 Melaka
                </p>
                <p className="font-body-md text-secondary">
                  Interactive Google Maps is pinned to the address above for
                  exact navigation.
                </p>
              </div>
              <div className="space-y-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    location_on
                  </span>
                  <span className="font-body-md text-on-background">
                    Ayer Keroh, Melaka
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4790%2C%20Jalan%20Oz%2029%2C%20Ozana%20Villas%20Bukit%20Katil%2C%20Ayer%20Keroh%2C%2075450%20Melaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-sm bg-primary-container text-on-primary-fixed px-4 py-3 font-label-mono uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Open In Google Maps
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
