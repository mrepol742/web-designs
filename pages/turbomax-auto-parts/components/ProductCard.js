import { useState } from "react";

export default function ProductCard({ product }) {
  const { name, description, price, badge, compat, partNumber } = product || {
    name: "",
    description: "",
    price: 0,
    badge: "",
    compat: [],
    partNumber: "",
  };

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div data-aos="zoom-in" className="card-industrial group flex flex-col">
      {/* Image Placeholder */}
      <div className="relative bg-gunmetal-500 rounded-sm h-48 flex items-center justify-center mb-4 overflow-hidden">
        <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
          ⚙️
        </div>
        {badge && (
          <span className="absolute top-3 left-3 bg-neon text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-heading uppercase text-sm tracking-wider text-white group-hover:text-neon transition-colors">
          {name}
        </h3>
        <p className="text-steel text-xs mt-1">{description}</p>

        {/* Compatibility Badges */}
        {compat && (
          <div className="flex flex-wrap gap-1 mt-3">
            {compat.map((c) => (
              <span
                key={c}
                className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-gunmetal-500 text-steel-light border border-gunmetal-100"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-neon font-heading text-xl tracking-wider">
            ${price.toFixed(2)}
          </span>
          <span className="text-steel text-[10px] uppercase">{partNumber}</span>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        className={`mt-4 w-full py-2.5 text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300 ${
          added
            ? "bg-green-600 text-white"
            : "bg-neon text-black hover:bg-white hover:shadow-lg"
        }`}
      >
        {added ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
}
