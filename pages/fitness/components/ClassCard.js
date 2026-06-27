export default function ClassCard({ name, time, trainer, difficulty, description, icon }) {
  const badgeClass = {
    Beginner: 'badge-beginner',
    Intermediate: 'badge-intermediate',
    Advanced: 'badge-advanced',
    Expert: 'badge-expert',
  }[difficulty] || 'badge-beginner';

  return (
    <div className="card-dark group" data-aos="fade-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-fire-red/20 to-fire-orange/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider text-lg">{name}</h3>
            <p className="text-gray-400 text-sm">{time}</p>
          </div>
        </div>
        <span className={`badge ${badgeClass}`}>{difficulty}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-iron-muted">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-fire-red/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-fire-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span className="text-sm text-gray-300">{trainer}</span>
        </div>
        <button className="text-fire-red text-sm font-bold uppercase tracking-wider hover:text-fire-orange transition-colors">
          Book →
        </button>
      </div>
    </div>
  );
}
