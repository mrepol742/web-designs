export default function TestimonialCard({ testimonial }) {
  const { quote, name, title, initials } = testimonial || {
    quote: "",
    name: "",
    title: "",
    initials: "",
  };

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 card-hover">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-gold-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
        <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
          <span className="text-gold-400 font-serif font-semibold text-sm">
            {initials}
          </span>
        </div>
        <div>
          <p className="font-semibold text-navy-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
}
