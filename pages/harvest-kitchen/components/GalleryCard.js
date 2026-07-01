export default function GalleryCard({
  title,
  color = "bg-green-200",
  aos = "fade-up",
  aspectClass = "aspect-square",
}) {
  return (
    <div
      data-aos={aos}
      className="rounded-xl overflow-hidden shadow-sm border border-green-100 group"
    >
      <div
        className={`${color} ${aspectClass} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Placeholder pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M100 30 Q130 70 100 110 Q70 70 100 30Z"
              fill="currentColor"
              opacity="0.2"
            />
          </svg>
        </div>
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300 relative z-10">
          🍽️
        </span>
      </div>
      {title && (
        <div className="p-3 bg-white">
          <p className="text-sm font-medium text-green-700">{title}</p>
        </div>
      )}
    </div>
  );
}
