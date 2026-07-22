export default function Home() {
  return (
    <>
      <header className="w-full border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="font-serif text-lg font-semibold tracking-tight">
            MIRC
          </span>
          <nav className="flex gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="/apr/index.html" className="hover:text-foreground">
              APR
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
