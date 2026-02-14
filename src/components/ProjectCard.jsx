function ProjectCard({ title, description, tags }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
