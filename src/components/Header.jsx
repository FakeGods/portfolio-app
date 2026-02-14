const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          Studio
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-200 md:inline-flex"
          href="#contact"
        >
          Work
        </a>
      </div>
    </header>
  )
}

export default Header
