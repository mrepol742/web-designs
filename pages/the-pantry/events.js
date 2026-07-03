import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";

const events = [
  {
    title: "Wine & Cheese Tasting Night",
    tagline: "A Journey Through Europe",
    emoji: "🍷",
    month: "Jun",
    day: "14",
    time: "7:00 PM",
    duration: "2.5 hours",
    description:
      "Sample six curated wines paired with artisan cheeses from France, Italy, and Spain. Our sommelier guides you through flavor profiles, regions, and perfect pairings. Includes a take-home pairing guide.",
    price: 65.0,
    capacity: 30,
    registered: 22,
  },
  {
    title: "Cheese Pairing Workshop",
    tagline: "Build Your Board",
    emoji: "🧀",
    month: "Jun",
    day: "21",
    time: "6:30 PM",
    duration: "2 hours",
    description:
      "Learn to build a stunning charcuterie board from scratch. We cover cheese selection, accompaniments, knife skills, and presentation. Take home your board and a bag of goodies.",
    price: 55.0,
    capacity: 20,
    registered: 18,
  },
  {
    title: "Summer Cooking Class",
    tagline: "Mediterranean Nights",
    emoji: "👨‍🍳",
    month: "Jul",
    day: "5",
    time: "6:00 PM",
    duration: "3 hours",
    description:
      "Chef Marco leads a hands-on Mediterranean dinner class. Menu: fresh pasta from scratch, pan-seared branzino, seasonal salad, and homemade panna cotta. Wine included.",
    price: 95.0,
    capacity: 16,
    registered: 11,
  },
  {
    title: "Chocolate & Wine Pairing",
    tagline: "Sweet Indulgence",
    emoji: "🍫",
    month: "Jul",
    day: "12",
    time: "7:00 PM",
    duration: "2 hours",
    description:
      "Explore the art of pairing single-origin chocolates with dessert wines. Five flights featuring Ecuadorian, Madagascan, and Venezuelan cacao. A decadent evening.",
    price: 50.0,
    capacity: 24,
    registered: 8,
  },
  {
    title: "Olive Oil Masterclass",
    tagline: "Liquid Gold",
    emoji: "🫒",
    month: "Jul",
    day: "19",
    time: "5:00 PM",
    duration: "1.5 hours",
    description:
      "Learn to taste, identify, and select premium extra virgin olive oils. Compare oils from Greece, Italy, and Spain. Includes a guided tasting of 8 oils and artisan bread.",
    price: 40.0,
    capacity: 20,
    registered: 6,
  },
  {
    title: "Private Events Night",
    tagline: "Your Own Private Pantry",
    emoji: "✨",
    month: "Aug",
    day: "2",
    time: "6:00 PM",
    duration: "3 hours",
    description:
      "Rent our event space for a private gathering. Custom menu, dedicated staff, and full shop access. Perfect for birthdays, anniversaries, or corporate team events. Groups of 10-40.",
    price: 0,
    capacity: 40,
    registered: 0,
  },
];

export default function Events() {
  return (
    <>
      <Head>
        <title>Events — The Pantry</title>
        <meta
          name="description"
          content="Join our wine tastings, cheese workshops, cooking classes, and private events at The Pantry."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-burgundy-800 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <span className="text-gold text-sm uppercase tracking-[4px]">
            Join Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mt-3 mb-4">
            Upcoming <span className="text-gold italic">Events</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Tastings, workshops, and experiences designed for curious palates.
            Limited spots — book early.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard
              key={event.title}
              event={event}
              aos={
                i % 3 === 0 ? "fade-up" : i % 3 === 1 ? "zoom-in" : "flip-up"
              }
            />
          ))}
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-20 bg-burgundy-800">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="zoom-in"
        >
          <span className="text-6xl mb-6 block">🎉</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Host a Private Event
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto mb-8">
            Our tasting room is available for private gatherings, corporate
            events, and celebrations. Custom menus, dedicated staff, and full
            shop access.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gold text-burgundy-800 font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-sm"
          >
            Inquire Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
