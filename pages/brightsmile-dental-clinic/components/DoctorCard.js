export default function DoctorCard({
  name = "",
  specialty,
  qualifications = [],
  experience,
  photo,
  bio,
  availableDays = [],
  index,
}) {
  return (
    <div
      className="card overflow-hidden group"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      {/* Photo Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-teal-50 to-medical-blue rounded-2xl mb-5 overflow-hidden flex items-center justify-center">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-medical-teal to-teal-400 flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-500">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl">
          <span className="text-xs font-bold text-medical-teal">
            {experience}+ years
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm font-medium text-medical-teal">{specialty}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {qualifications.map((q, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-teal-50 text-medical-teal text-xs font-semibold rounded-lg"
            >
              {q}
            </span>
          ))}
        </div>

        <p className="text-sm text-medical-muted leading-relaxed">{bio}</p>

        {/* Available Days */}
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            Available
          </p>
          <div className="flex flex-wrap gap-1.5">
            {availableDays.map((day, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
