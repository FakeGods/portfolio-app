function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute right-0 top-48 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
