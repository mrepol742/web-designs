export default function ServiceCard({ service }) {
  return (
    <div data-aos="fade-up" className="card-industrial group flex gap-5">
      {/* Icon */}
      <div className="flex-shrink-0 w-16 h-16 bg-neon/10 rounded-sm flex items-center justify-center text-3xl group-hover:bg-neon/20 transition-colors">
        {service.icon}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading uppercase text-sm tracking-wider text-white group-hover:text-neon transition-colors">
              {service.name}
            </h3>
            <p className="text-steel text-xs mt-1 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-3">
          <span className="text-neon font-heading text-sm tracking-wider">
            {service.priceRange}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-steel bg-gunmetal-500 px-2 py-0.5 rounded-sm">
            ⏱ {service.time}
          </span>
        </div>
      </div>
    </div>
  );
}
