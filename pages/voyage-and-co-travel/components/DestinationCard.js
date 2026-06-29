export default function DestinationCard({ destination, index }) {
  const { name, country, duration, price, image, description } = destination;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
    >
      {/* Image Placeholder */}
      <div className="aspect-[4/5] image-placeholder">
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-900/30 to-transparent z-10" />

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-sunset-500 text-white text-xs font-semibold rounded-full shadow-lg">
            Popular
          </span>
        </div>

        {/* Price badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="text-ocean-800 text-xs font-bold">
              From ${price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <svg
            className="w-16 h-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-sunset-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-white/80 text-sm">{country}</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {name}
          </h3>
          <p className="text-white/70 text-sm mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {duration}
            </div>
            <span className="text-sunset-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              View Details
              <svg
                className="w-4 h-4"
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
