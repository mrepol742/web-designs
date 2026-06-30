export default function ServiceCard({
  icon,
  name,
  description,
  priceRange,
  index,
}) {
  return (
    <div
      className="card group cursor-default"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-blue to-teal-100 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>

      {/* Description */}
      <p className="text-sm text-medical-muted leading-relaxed mb-4">
        {description}
      </p>

      {/* Price Range */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          Starting from
        </span>
        <span className="text-sm font-bold text-medical-teal">
          {priceRange}
        </span>
      </div>
    </div>
  );
}
