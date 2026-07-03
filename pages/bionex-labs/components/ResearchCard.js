export default function ResearchCard({
  title,
  description,
  publications,
  index,
  icon,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-2 bg-gradient-to-r from-bio-teal to-bio-navy" />

      <div className="p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 bg-bio-teal/10 rounded-xl flex items-center justify-center group-hover:bg-bio-teal group-hover:text-white transition-colors">
            <span
              className="text-bio-teal group-hover:text-white transition-colors"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-bio-navy">
              {publications}
            </span>
            <p className="text-xs text-gray-400 font-medium">Publications</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-bio-navy mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
