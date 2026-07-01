export default function ProductCard({
  image,
  name,
  description,
  specs,
  moq,
  aos,
  aosDelay,
}) {
  return (
    <div
      data-aos={aos || "zoom-in"}
      data-aos-delay={aosDelay || "0"}
      data-aos-duration="600"
      className="card-dark overflow-hidden group hover:border-industrial/40 transition-all duration-500"
    >
      {/* Image Placeholder */}
      <div className="relative h-56 bg-steel-700/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="text-center">
              <svg
                className="w-16 h-16 text-steel-600 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              <span className="text-steel-500 font-heading text-xs uppercase tracking-widest">
                {name}
              </span>
            </div>
          )}
        </div>
        {moq && (
          <div className="absolute top-4 right-4 bg-industrial text-steel-900 px-3 py-1">
            <span className="font-heading text-xs uppercase tracking-wider font-bold">
              MOQ: {moq}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-2 group-hover:text-industrial transition-colors">
          {name}
        </h3>
        <p className="text-steel-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Specs */}
        {specs && specs.length > 0 && (
          <div className="border-t border-steel-700/50 pt-4">
            <h4 className="font-heading text-xs uppercase tracking-widest text-industrial mb-3">
              Specifications
            </h4>
            <div className="space-y-2">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-steel-500">{spec.label}</span>
                  <span className="text-steel-300 font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
