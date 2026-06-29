export default function GalleryCard({ item, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-bakery shadow-sweet hover:shadow-sweet-lg transition-all duration-500"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      {/* Image Placeholder */}
      <div className="aspect-[3/4] bg-gradient-to-br from-blush-light via-frosting to-cream flex items-center justify-center">
        <span className="text-8xl group-hover:scale-125 transition-transform duration-700">
          {item.emoji}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/40 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-500
                      flex flex-col justify-end p-6">
        <p className="font-script text-blush text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {item.caption}
        </p>
        <p className="font-body text-cream/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {item.description}
        </p>
      </div>
    </div>
  );
}
