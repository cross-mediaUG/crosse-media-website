export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Glowing orbs for futuristic effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo/Brand */}
        <div className="mb-12 inline-block">
          <div className="relative">
            <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight">
              CROSS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                MEDIA
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
        </div>

        {/* Status message */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <div className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Work in Progress</span>
          </div>

          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Wir arbeiten gerade an etwas Großartigem. Unsere neue Website wird bald verfügbar sein.
          </p>

          <div className="pt-4">
            <p className="text-sm text-zinc-500 font-mono">{"// Building the future of cross media"}</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
          <div
            className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </main>
  )
}
