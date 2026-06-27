export default function MenuCard({ name, price, description, aosAnimation = 'fade-up' }) {
  return (
    <div
      data-aos={aosAnimation}
      className="group bg-cream-light rounded-sm border border-gold/10 p-6
                 hover:shadow-xl hover:border-gold/30 transition-all duration-500"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-xl text-darkbrown group-hover:text-gold transition-colors">
            {name}
          </h3>
          <p className="font-sans text-sm text-darkbrown/60 mt-2 leading-relaxed">
            {description}
          </p>
        </div>
        <span className="font-serif text-xl text-gold font-semibold whitespace-nowrap">
          ${price}
        </span>
      </div>
      {/* Decorative line */}
      <div className="mt-4 border-b border-dashed border-gold/20" />
    </div>
  );
}
