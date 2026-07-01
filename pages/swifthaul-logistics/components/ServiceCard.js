export default function ServiceCard({
  icon,
  title,
  description,
  features,
  priceRange,
  delay = 0,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 lg:p-8 hover:border-accent/50 hover:bg-navy-800 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <div className="text-accent text-2xl">{icon}</div>
      </div>

      <h3 className="font-heading text-xl font-bold tracking-wide text-white mb-3">
        {title}
      </h3>
      <p className="text-navy-400 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-navy-300"
            >
              <svg
                className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {priceRange && (
        <div className="pt-4 border-t border-navy-700/50">
          <span className="text-navy-500 text-xs uppercase tracking-wider">
            Starting from
          </span>
          <p className="text-accent font-heading text-2xl font-bold">
            {priceRange}
          </p>
        </div>
      )}
    </div>
  );
}
