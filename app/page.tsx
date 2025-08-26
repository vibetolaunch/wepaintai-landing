import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <a href="/" className="flex items-center gap-2" aria-label="wepaint.ai home">
            <Image src="/logo.svg" alt="wepaint.ai" width={120} height={40} priority />
          </a>
          <Button asChild size="sm">
            <a href="https://app.wepaint.ai">Try Beta</a>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Create. Paint. Edit. <br/>— with AI Help
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            right in your browser and fully open source. 
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://app.wepaint.ai">Try Beta</a>
            </Button>
            <a
              href="https://github.com/wepaintai/wepaintai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View GitHub
            </a>
          </div>
        </section>

        {/* Product preview section */}
        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
              In-app preview
            </div>

            <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/50">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden />
                </div>
                <div className="text-xs text-muted-foreground">app.wepaint.ai</div>
                <div className="w-14" aria-hidden />
              </div>

              {/* Aspect video container */}
              <div className="aspect-video bg-black">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="wepaint.ai product preview video"
                >
                  <source src="/demo-vid-landing.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Preview of the beta editor experience.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl p-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} wepaint.ai
        </div>
      </footer>
    </div>
  )
}
