export default function EventCard({ event, aos = "fade-up" }) {
  const spotsLeft = event.capacity - event.registered;

  return (
    <div
      data-aos={aos}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gold/10"
    >
      {/* Date badge */}
      <div className="relative">
        <div className="h-44 bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center">
          <div className="text-center text-cream">
            <div className="text-4xl mb-1">{event.emoji}</div>
            <div className="font-display text-lg font-semibold">
              {event.tagline}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 left-6 bg-gold text-burgundy-800 rounded-xl px-4 py-2 shadow-lg text-center">
          <div className="text-xs font-bold uppercase tracking-wider">
            {event.month}
          </div>
          <div className="text-2xl font-display font-bold leading-none">
            {event.day}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-8">
        <div className="flex items-center gap-2 text-xs text-gold-dark mb-2">
          <span>🕐 {event.time}</span>
          <span>•</span>
          <span>{event.duration}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-burgundy-800 mb-2">
          {event.title}
        </h3>

        <p className="text-sm text-burgundy-800/60 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-burgundy-800">
              ${event.price.toFixed(2)}
            </span>
            <span className="text-xs text-burgundy-800/50 ml-1">/ person</span>
          </div>
          <div className="text-right">
            <div
              className={`text-sm font-semibold ${spotsLeft <= 5 ? "text-red-600" : "text-green-700"}`}
            >
              {spotsLeft} spots left
            </div>
            <div className="text-[11px] text-burgundy-800/40">
              of {event.capacity} total
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-burgundy-800 text-cream font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold hover:text-burgundy-800 transition-all duration-300 hover:shadow-lg">
          Reserve Your Spot
        </button>
      </div>
    </div>
  );
}
