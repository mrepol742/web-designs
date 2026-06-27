export default function PricingCard({ name, price, period, features, highlighted, aosEffect }) {
  return (
    <div
      className={`relative card-dark ${highlighted ? 'border-fire-red glow-red scale-105' : ''}`}
      data-aos={aosEffect || 'fade-up'}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-fire-red to-fire-orange text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-lg font-black uppercase tracking-wider mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-black text-fire-gradient">${price}</span>
          <span className="text-gray-400 text-sm">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <svg className="w-5 h-5 text-fire-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full ${highlighted ? 'btn-fire' : 'btn-outline-fire'} text-sm`}>
        Get Started
      </button>
    </div>
  );
}
