export default function MenuCard({
  name,
  description,
  price,
  tags = [],
  aos = "fade-up",
}) {
  const badgeClass = (tag) => {
    const t = tag.toLowerCase().replace(/[\s-]/g, "-");
    if (t === "vegan") return "badge badge-vegan";
    if (t === "gf" || t === "gluten-free") return "badge badge-gf";
    if (t === "organic") return "badge badge-organic";
    if (t === "spicy") return "badge badge-spicy";
    if (t === "dairy-free") return "badge badge-dairy-free";
    return "badge bg-gray-100 text-gray-600";
  };

  return (
    <div
      data-aos={aos}
      className="menu-card bg-white rounded-xl p-5 shadow-sm border border-green-100"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-green-700">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tags.map((tag) => (
                <span key={tag} className={badgeClass(tag)}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-lg font-bold text-wood-500 whitespace-nowrap">
          ${price}
        </span>
      </div>
    </div>
  );
}
