export default function ServiceCard({
  icon,
  title,
  description,
  capabilities,
  aos,
  aosDelay,
}) {
  return (
    <div
      data-aos={aos || "fade-up"}
      data-aos-delay={aosDelay || "0"}
      data-aos-duration="600"
      className="card-dark p-8 group hover:border-industrial/40 transition-all duration-500 relative overflow-hidden"
    >
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-industrial/10 border-l-[64px] border-l-transparent group-hover:border-t-industrial/25 transition-all duration-500" />
      </div>

      {/* Icon */}
      <div className="w-14 h-14 bg-industrial/10 border border-industrial/30 flex items-center justify-center mb-6 group-hover:bg-industrial/20 transition-colors duration-300">
        <div className="text-industrial text-2xl">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-3 group-hover:text-industrial transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-steel-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Capabilities */}
      {capabilities && capabilities.length > 0 && (
        <div>
          <h4 className="font-heading text-xs uppercase tracking-widest text-industrial mb-3">
            Capabilities
          </h4>
          <ul className="space-y-2">
            {capabilities.map((cap, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-steel-300 text-sm"
              >
                <span className="w-1.5 h-1.5 bg-industrial shrink-0" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
