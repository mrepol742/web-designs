import Head from 'next/head';
import ProjectLink from '@/components/ProjectLink';
import Header from './components/Header';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';

const featuredDishes = [
  {
    name: 'Truffle Risotto',
    price: '$28',
    description: 'Arborio rice slow-cooked with porcini mushrooms, white truffle oil, and aged Parmigiano-Reggiano.',
  },
  {
    name: 'Osso Buco',
    price: '$36',
    description: 'Braised veal shank in white wine, tomatoes, and gremolata, served over saffron risotto.',
  },
  {
    name: 'Branzino al Forno',
    price: '$32',
    description: 'Whole Mediterranean sea bass roasted with lemon, capers, and fresh herbs.',
  },
];

const testimonials = [
  {
    name: 'Isabella Marchetti',
    text: 'The truffle risotto transported me straight to Milan. Absolutely the finest Italian dining I\'ve experienced outside of Italy. Every bite was perfection.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    text: 'We celebrated our anniversary here and it was magical. The ambiance, the wine selection, and the osso buco — all exceptional. A true gem.',
    rating: 5,
  },
  {
    name: 'Sofia Chen',
    text: 'From the warm greeting to the last bite of tiramisu, everything was flawless. The chef\'s attention to detail is remarkable.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>La Dolce Vita — Authentic Italian Restaurant</title>
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-parallax overflow-hidden">
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkbrown/80 via-darkbrown/70 to-darkbrown/90" />
        <div className="absolute inset-0 bg-darkbrown/40" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/10 rounded-full" />
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-gold/5 rounded-full" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <p className="font-sans text-gold tracking-[0.4em] uppercase text-sm mb-6">
            Est. 1998 · Downtown New York
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-tight mb-6">
            La Dolce<br />
            <span className="text-gold italic">Vita</span>
          </h1>
          <div className="gold-divider mx-auto my-8" />
          <p className="font-serif text-xl md:text-2xl text-cream/70 italic mb-10 max-w-xl mx-auto">
            Where every meal is a celebration of life, love, and the art of Italian cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ProjectLink href="/reservations" className="btn-gold">
              Reserve Your Table
            </ProjectLink>
            <ProjectLink href="/menu" className="btn-outline text-cream hover:text-white border-cream/30 hover:border-gold hover:bg-gold">
              Explore Our Menu
            </ProjectLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-4">Welcome</p>
          <h2 className="section-heading">A Taste of Italy<br />in Every Bite</h2>
          <div className="gold-divider" />
          <p className="section-subheading mt-6">
            At La Dolce Vita, we believe food is more than sustenance — it is memory, tradition, and art.
            Our kitchen honors centuries of Italian culinary heritage while embracing the finest local ingredients.
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-darkbrown">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-4">From Our Kitchen</p>
            <h2 className="section-heading text-cream">Featured Dishes</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <div
                key={dish.name}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="group bg-darkbrown-medium rounded-sm border border-gold/10 overflow-hidden
                           hover:border-gold/30 transition-all duration-500"
              >
                {/* Image placeholder */}
                <div className="h-56 bg-gradient-to-br from-darkbrown to-darkbrown-medium flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                  <svg className="w-16 h-16 text-gold/30 group-hover:text-gold/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546M9 6v2m6-2v2m-3-2v2M3 17h18M6 3v2m12-2v2M6 17v4m12-4v4" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-gold text-lg font-semibold">{dish.price}</span>
                  </div>
                  <p className="font-sans text-cream/50 text-sm mt-3 leading-relaxed">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink href="/menu" className="btn-outline text-cream">
              View Full Menu
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-aos="flip-left">
              <div className="bg-darkbrown/5 rounded-sm p-12 flex items-center justify-center aspect-square">
                <div className="text-center">
                  <svg className="w-24 h-24 text-gold/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <p className="font-serif text-2xl text-darkbrown italic">&ldquo;Cooking is love made visible&rdquo;</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-4">Our Philosophy</p>
              <h2 className="section-heading">Farm to Table,<br />Heart to Soul</h2>
              <div className="gold-divider !mx-0" />
              <p className="font-sans text-darkbrown/70 leading-relaxed mt-6">
                We source our ingredients from local farms and trusted Italian purveyors.
                Our extra virgin olive oil comes directly from a family estate in Puglia.
                Our cheeses are aged to perfection in our own cellar.
              </p>
              <p className="font-sans text-darkbrown/70 leading-relaxed mt-4">
                Every morning, our bread is freshly baked. Every evening, our pasta is handmade.
                This is not just cooking — this is a commitment to authenticity that you can taste in every bite.
              </p>
              <ProjectLink href="/about" className="btn-gold mt-8 inline-block">
                Our Full Story
              </ProjectLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-darkbrown">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-4">What Guests Say</p>
            <h2 className="section-heading text-cream">Cherished Memories</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} aosAnimation="slide-up" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(26,15,10,0.3),transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
          <h2 className="font-serif text-3xl md:text-5xl text-darkbrown mb-6">
            Your Table Awaits
          </h2>
          <p className="font-sans text-darkbrown/80 text-lg mb-10 max-w-xl mx-auto">
            Join us for an unforgettable evening of exceptional food, fine wine, and warm Italian hospitality.
          </p>
          <ProjectLink href="/reservations" className="bg-darkbrown text-gold hover:bg-darkbrown-light font-sans font-bold py-3 px-8 rounded-sm tracking-wider uppercase text-sm transition-all duration-300">
            Make a Reservation
          </ProjectLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
