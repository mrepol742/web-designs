export default function ProductCard({ product, aos = "fade-up" }) {
  const { emoji, name, description, badge, origin, weight, price } =
    product || {
      emoji: "",
      name: "",
      description: "",
      badge: "",
      origin: "",
      weight: "",
      price: 0,
    };

  return (
    <div
      data-aos={aos}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gold/10 hover:border-gold/30"
    >
      {/* Image placeholder */}
      <div className="h-56 bg-gradient-to-br from-burgundy-100 to-cream-dark flex items-center justify-center relative overflow-hidden">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
          {emoji}
        </span>
        {badge && (
          <span className="absolute top-3 right-3 bg-gold text-burgundy-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] uppercase tracking-wider text-gold-dark font-semibold">
            {origin}
          </span>
          <span className="text-[11px] text-burgundy-800/50">{weight}</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-burgundy-800 mb-2 group-hover:text-gold-dark transition-colors">
          {name}
        </h3>

        <p className="text-sm text-burgundy-800/60 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-burgundy-800">
            ${price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-burgundy-800 text-cream text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-gold hover:text-burgundy-800 transition-all duration-300 hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
