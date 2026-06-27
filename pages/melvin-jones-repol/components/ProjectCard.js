export default function ProjectCard({ project = {}, aosDelay = 0 }) {
  const {
    emoji,
    featured,
    title,
    description,
    tech = [],
    liveUrl,
    repoUrl,
  } = project;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="glass-card group flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-bg-light mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </span>
        </div>
        {featured && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-neon/20 text-neon text-xs font-medium rounded-full border border-neon/30">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white group-hover:text-neon transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted text-sm mt-2 flex-1 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono bg-neon/5 text-neon/70 rounded-md border border-neon/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-neon transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>🔗</span> Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-neon transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>⚙️</span> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
