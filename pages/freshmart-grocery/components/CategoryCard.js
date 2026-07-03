export default function CategoryCard({
  icon,
  title,
  itemCount,
  aos,
  aosDelay,
}) {
  return (
    <div
      data-aos={aos || "fade-up"}
      data-aos-delay={aosDelay || "0"}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{itemCount} items</p>
    </div>
  );
}
