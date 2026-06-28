import ProjectLink from "@/components/ProjectLink";

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  author,
  readTime,
  slug,
}) {
  return (
    <article className="blog-card group" data-aos="fade-up">
      {/* Thumbnail */}
      <div className="blog-thumb relative h-56 overflow-hidden">
        <div
          className="placeholder-img transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #d4a574 100%)`,
          }}
        >
          <div className="text-center text-white/50">
            <svg
              className="w-12 h-12 mx-auto opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="category-tag">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
          <time dateTime={date}>{date}</time>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{readTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="font-[Playfair_Display] text-xl font-bold text-gray-900 mb-3 group-hover:text-ocean-600 transition-colors line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 text-xs font-bold">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-sm font-medium text-gray-600">{author}</span>
          </div>
          <ProjectLink
            href={`/blog#${slug || "post"}`}
            className="text-ocean-600 text-sm font-semibold hover:text-ocean-700 transition-colors inline-flex items-center gap-1"
          >
            Read
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </ProjectLink>
        </div>
      </div>
    </article>
  );
}
