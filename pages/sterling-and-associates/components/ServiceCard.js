export default function ServiceCard({ service, index }) {
  const { icon, title, description } = service || {
    icon: "",
    title: "",
    description: "",
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm card-hover group"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-navy-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
        <span className="text-gold-400 text-2xl group-hover:text-navy-900 transition-colors duration-300">
          {icon}
        </span>
      </div>

      <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      <div className="mt-6">
        <span className="text-gold-600 text-sm font-medium group-hover:text-gold-700 transition-colors flex items-center space-x-1">
          <span>Learn More</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
