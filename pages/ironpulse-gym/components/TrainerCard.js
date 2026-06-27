export default function TrainerCard({
  name,
  specialty = [],
  certifications = [],
  bio,
  socialLinks,
  index,
}) {
  const gradients = [
    "from-fire-red to-fire-orange",
    "from-fire-orange to-yellow-500",
    "from-fire-red to-pink-600",
    "from-orange-500 to-red-600",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div className="card-dark group text-center" data-aos="zoom-in">
      {/* Photo Placeholder */}
      <div
        className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
      >
        <svg
          className="w-16 h-16 text-white/80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      <h3 className="text-xl font-black uppercase tracking-wider mb-1">
        {name}
      </h3>
      <p className="text-fire-red font-bold text-sm uppercase tracking-wider mb-3">
        {specialty}
      </p>

      {/* Certifications */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {certifications.map((cert, i) => (
          <span
            key={i}
            className="text-xs bg-iron-muted px-2 py-1 rounded-full text-gray-300"
          >
            {cert}
          </span>
        ))}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">{bio}</p>

      {/* Social Links */}
      {socialLinks && (
        <div className="flex justify-center gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 bg-iron-muted rounded-lg flex items-center justify-center text-gray-400 hover:text-fire-red hover:bg-fire-red/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={link} />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
