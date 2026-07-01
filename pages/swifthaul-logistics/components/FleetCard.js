import ProjectLink from "@/components/ProjectLink";

export default function FleetCard({
  name,
  type,
  capacity,
  dimensions,
  features,
  delay = 0,
}) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="group bg-navy-800/50 border border-navy-700/50 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Photo placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center overflow-hidden">
        <div className="text-navy-600 group-hover:text-accent/30 transition-colors">
          <svg
            className="w-24 h-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </div>
        <div className="absolute top-3 right-3 px-3 py-1 bg-accent/90 text-white text-xs font-bold uppercase tracking-wider rounded">
          {type}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold tracking-wide text-white mb-4">
          {name}
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-navy-900/50 rounded-lg p-3">
            <span className="text-navy-500 text-xs uppercase tracking-wider block">
              Capacity
            </span>
            <span className="text-white font-semibold text-sm">{capacity}</span>
          </div>
          <div className="bg-navy-900/50 rounded-lg p-3">
            <span className="text-navy-500 text-xs uppercase tracking-wider block">
              Dimensions
            </span>
            <span className="text-white font-semibold text-sm">
              {dimensions}
            </span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {features.map((f, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-navy-700/50 text-navy-300 text-xs rounded-full border border-navy-600/50"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        <ProjectLink
          href="/contact"
          className="block w-full py-3 bg-accent hover:bg-accent-dark text-white text-sm font-bold uppercase tracking-wider rounded text-center transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Book Now
        </ProjectLink>
      </div>
    </div>
  );
}
