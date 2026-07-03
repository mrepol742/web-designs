export default function DealCard({
  name,
  image,
  originalPrice = 0,
  salePrice = 0,
  unit,
  aos,
  aosDelay,
}) {
  const pct = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  return (
    <div
      data-aos={aos || "zoom-in"}
      data-aos-delay={aosDelay || "0"}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative bg-gradient-to-br from-orange-50 to-green-50 h-44 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          -{pct}%
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-xs text-gray-400 mb-3">{unit}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-extrabold text-green-600">
            ${salePrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
