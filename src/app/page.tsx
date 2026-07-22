export default function Home() {
  return (
    <>
      <header className="w-full border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2.5 text-foreground">
            <svg
              viewBox="0 0 120 300"
              fill="none"
              aria-label="MIRC logo"
              role="img"
              className="h-9 w-auto"
            >
              <path
                d="M 42 8 C 38 10 34 14 30 20 C 26 28 22 36 20 46 C 18 56 16 68 15 78 C 14 88 12 100 11 112 C 10 124 9 136 10 148 C 11 160 12 170 14 180 C 16 190 18 198 20 206 C 22 214 24 220 26 226 C 28 232 32 240 38 250 C 42 258 48 268 55 280 L 58 290 L 60 286 C 62 280 64 274 66 268 C 70 258 74 248 76 238 C 78 228 80 218 82 208 C 83 200 84 192 85 184 C 86 176 86 168 86 160 L 86 148 C 86 140 86 132 88 124 C 90 116 92 108 94 100 L 96 90 C 98 82 100 74 100 66 C 100 58 98 52 96 48 C 92 40 88 36 82 32 C 78 28 72 26 66 22 C 60 16 54 12 48 10 C 46 9 44 8 42 8 Z"
                stroke="currentColor"
                strokeWidth={3.5}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <circle cx="14" cy="188" r="4" fill="currentColor" opacity={0.4} />
              <circle cx="82" cy="138" r="3" fill="currentColor" opacity={0.3} />
            </svg>
            <span className="font-serif text-lg font-semibold tracking-tight">
              MIRC
            </span>
          </a>
          <nav className="flex gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#" className="hover:text-foreground">
              Filler
            </a>
            <a href="#" className="hover:text-foreground">
              Filler
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Lorem ipsum dolor sit
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder
            copy for the landing page.
          </p>

          <div className="mx-auto mt-12 max-w-sm rounded-lg border border-border bg-surface px-6 py-5">
            <h3 className="font-serif text-lg font-semibold tracking-tight">
              Highlight
            </h3>
          </div>
        </section>

        <section id="about" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              About APR
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
