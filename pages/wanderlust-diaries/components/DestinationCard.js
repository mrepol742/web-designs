import ProjectLink from "@/components/ProjectLink";

export default function DestinationCard({
  name = '',
  country,
  description,
  image,
  slug,
}) {
  return (
    <ProjectLink href={`/destinations#${slug || name.toLowerCase()}`}>
      <div
        className="destination-card group h-96 cursor-pointer"
        data-aos="fade-up"
      >
        {/* Image Placeholder */}
        <div className="card-image absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, #0f766e 0%, #14b8a6 40%, #d4a574 100%)`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white/60">
                <svg
                  className="w-16 h-16 mx-auto mb-3 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">{name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="card-content">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-sand-400/90 text-white uppercase tracking-wider mb-3">
              {country}
            </span>
            <h3 className="text-2xl font-[Playfair_Display] font-bold text-white mb-2">
              {name}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>
            <span className="inline-flex items-center text-ocean-300 text-sm font-semibold group-hover:text-white transition-colors">
              Explore
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </ProjectLink>
  );
}
