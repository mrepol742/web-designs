export default function PackageCard({ pkg, index }) {
  const { name, duration, price, description, highlights, inclusions, tag } =
    pkg;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover group"
    >
      {/* Top accent */}
      <div className="h-1.5 bg-gradient-to-r from-sunset-500 to-sunset-300" />

      {/* Tag */}
      {tag && (
        <div className="absolute top-5 right-5 z-10">
          <span className="px-3 py-1 bg-ocean-800 text-white text-xs font-semibold rounded-full">
            {tag}
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Package icon */}
        <div className="w-14 h-14 rounded-xl bg-sunset-50 flex items-center justify-center mb-5 group-hover:bg-sunset-100 transition-colors duration-300">
          <svg
            className="w-7 h-7 text-sunset-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {name === "Romantic Getaway" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            )}
            {name === "Family Adventure" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            )}
            {name === "Solo Explorer" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
            {name === "Luxury Escape" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            )}
          </svg>
        </div>

        <h3 className="text-2xl font-display font-bold text-ocean-800 mb-2">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-5">{description}</p>

        {/* Duration & Price */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg
              className="w-4 h-4 text-sunset-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {duration}
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400">From</span>
            <p className="text-2xl font-bold text-ocean-800">
              ${price.toLocaleString()}
            </p>
            <span className="text-xs text-gray-400">per person</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-ocean-800 uppercase tracking-wider mb-3">
            Highlights
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">{highlights}</p>
        </div>

        {/* Inclusions */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-ocean-800 uppercase tracking-wider mb-3">
            What&apos;s Included
          </h4>
          <ul className="space-y-2">
            {inclusions.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <svg
                  className="w-4 h-4 text-sunset-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button className="w-full btn-primary justify-center">
          Explore Package
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
