export default function ServiceCard({
  icon,
  title,
  description,
  turnaround,
  index,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-bio-teal/5 to-transparent rounded-bl-full" />

      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-bio-teal/10 to-bio-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <div
            className="text-bio-teal"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </div>

        <h3 className="text-xl font-bold text-bio-navy mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold text-bio-teal bg-bio-teal/5 px-3 py-2 rounded-lg w-fit">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {turnaround}
        </div>
      </div>
    </div>
  );
}
