export default function MenuCard({ item, index }) {
  const { name, description, price, popular, emoji } = item || {
    name: "",
    description: "",
    price: 0,
    popular: false,
    emoji: "",
  };

  return (
    <div
      className="card-bakery group overflow-hidden"
      data-aos="flip-left"
      data-aos-delay={index * 100}
    >
      {/* Image Placeholder */}
      <div className="relative h-52 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-bakery bg-gradient-to-br from-blush-light to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
            {emoji}
          </span>
        </div>
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-chocolate text-cream font-display text-sm px-4 py-1.5 rounded-full shadow-choco">
          {price}
        </div>
        {/* Category Tag */}
        {popular && (
          <div className="absolute top-4 left-4 bg-blush text-chocolate-dark font-body font-bold text-xs px-3 py-1 rounded-full">
            ⭐ Popular
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-display text-xl text-chocolate mb-2 group-hover:text-caramel transition-colors">
        {name}
      </h3>
      <p className="font-body text-chocolate/70 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Price & Order */}
      <div className="flex items-center justify-between mt-auto">
        <span className="font-display text-2xl text-blush">{price}</span>
        <button
          className="bg-cream border-2 border-blush text-chocolate font-body font-bold text-sm
                           py-2 px-5 rounded-full hover:bg-blush hover:text-chocolate-dark
                           transition-all duration-300 hover:shadow-sweet"
        >
          Order 🛒
        </button>
      </div>
    </div>
  );
}
