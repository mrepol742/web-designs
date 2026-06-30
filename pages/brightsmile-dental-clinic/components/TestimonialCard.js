export default function TestimonialCard({
  name = "",
  rating = 0,
  review = "",
  index = 0,
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="card" data-aos="fade-up" data-aos-delay={index * 100}>
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {stars.map((filled, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={filled ? "#f59e0b" : "none"}
            stroke={filled ? "#f59e0b" : "#d1d5db"}
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical-teal to-teal-400 flex items-center justify-center text-white text-sm font-bold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <span className="text-sm font-semibold text-gray-900">{name}</span>
      </div>
    </div>
  );
}
