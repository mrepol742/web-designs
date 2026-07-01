export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating = 5,
  delay = 0,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 lg:p-8"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-navy-300 text-sm leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-navy-700/50">
        <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-accent font-heading font-bold text-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{name}</p>
          <p className="text-navy-500 text-xs">
            {role}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
