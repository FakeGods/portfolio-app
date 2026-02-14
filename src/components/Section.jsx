function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default Section
