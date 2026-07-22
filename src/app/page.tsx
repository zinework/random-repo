export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-24">
      {/* Hero — single-word focal title */}
      <section className="flex flex-col items-center text-center">
        <span className="mb-6 h-px w-16 bg-accent/50" aria-hidden />
        <h1 className="font-serif text-[clamp(2.4rem,11vw,7rem)] font-semibold leading-none tracking-tight text-accent-strong">
          Islamophobia
        </h1>
        <span className="mt-6 h-px w-16 bg-accent/50" aria-hidden />
      </section>

      {/* APR story — clickable card with an embedded live mini-view */}
      <a
        href="/apr/index.html"
        className="group relative block w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_18px_50px_-12px_rgba(20,48,77,0.28)] transition-transform duration-300 hover:-translate-y-1"
        aria-label="Open the APR story"
      >
        {/* live mini preview: iframe rendered large then scaled to fill the frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <iframe
            src="/apr/index.html"
            title="APR story preview"
            tabIndex={-1}
            aria-hidden
            scrolling="no"
            className="pointer-events-none absolute left-0 top-0 h-[320%] w-[320%] origin-top-left scale-[0.3125] border-0"
          />
          {/* click-through overlay so the whole card opens the full story */}
          <span className="absolute inset-0" aria-hidden />
        </div>

        {/* corner cue (icon only, no text) */}
        <span
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-surface shadow-md transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </span>
      </a>
    </main>
  );
}
