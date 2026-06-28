import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import BlogCard from "./components/BlogCard";
import NewsletterCTA from "./components/NewsletterCTA";

const featuredDestinations = [
  {
    name: "Bali",
    country: "Indonesia",
    description:
      "Emerald rice terraces, ancient temples, and sunsets that set the ocean on fire.",
    slug: "bali",
  },
  {
    name: "Japan",
    country: "Japan",
    description:
      "A hypnotic blend of neon-lit cities, serene temples, and centuries-old traditions.",
    slug: "japan",
  },
  {
    name: "Iceland",
    country: "Iceland",
    description:
      "Land of fire and ice — geysers, glaciers, and the northern lights dancing overhead.",
    slug: "iceland",
  },
  {
    name: "Santorini",
    country: "Greece",
    description:
      "White-washed villages cascading down volcanic cliffs into the Aegean Sea.",
    slug: "santorini",
  },
];

const latestPosts = [
  {
    title: "48 Hours in Tokyo: A Complete Guide",
    excerpt:
      "From the electric energy of Shibuya crossing to the quiet beauty of Meiji Shrine — everything you need for a perfect weekend in Japan's capital.",
    date: "Jul 12, 2024",
    category: "City Guide",
    author: "Maya Chen",
    readTime: 8,
    slug: "48-hours-tokyo",
  },
  {
    title: "The Hidden Beaches of Portugal's Algarve Coast",
    excerpt:
      "Forget the crowded resorts. We tracked down seven secluded coves where turquoise water meets golden cliffs and you might just have the place to yourself.",
    date: "Jul 5, 2024",
    category: "Beach",
    author: "Leo Rossi",
    readTime: 6,
    slug: "hidden-beaches-algarve",
  },
  {
    title: "Trekking to Machu Picchu: What Nobody Tells You",
    excerpt:
      "The Inca Trail is magical — but altitude sickness, blistered feet, and overcrowded ruins catch most people off guard. Here's the honest guide.",
    date: "Jun 28, 2024",
    category: "Adventure",
    author: "Amara Osei",
    readTime: 10,
    slug: "trekking-machu-picchu",
  },
];

const stats = [
  { value: "47", label: "Countries Explored" },
  { value: "200+", label: "Stories Published" },
  { value: "12K", label: "Community Members" },
  { value: "6", label: "Years of Wandering" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Wanderlust Diaries — Travel, Blog & Adventure</title>
      </Head>

      <Header />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, #134e4a 0%, #0d9488 30%, #14b8a6 60%, #d4a574 100%)",
              }}
            />
            {/* Overlay pattern */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-float hidden lg:block" />
          <div
            className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-sand-400/10 animate-float hidden lg:block"
            style={{ animationDelay: "2s" }}
          />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-up" data-aos-delay="200">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/10">
                ✦ Est. 2019 — Stories from 47 countries
              </span>
            </div>

            <h1
              className="font-[Playfair_Display] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Wanderlust
              <br />
              <span className="text-sand-200">Diaries</span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Honest stories, practical guides, and unfiltered adventures from
              every corner of the globe. Because travel should be about the
              journey, not the highlight reel.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="/destinations" className="btn-sand">
                Explore Destinations
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/blog"
                className="btn-outline border-white text-white hover:bg-white hover:text-ocean-700"
              >
                Read the Blog
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                <div className="w-1 h-3 rounded-full bg-white/60 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="text-3xl md:text-4xl font-bold text-ocean-600 font-[Playfair_Display]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Destinations ── */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
                Where to next?
              </span>
              <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                Featured Destinations
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDestinations.map((dest) => (
                <DestinationCard key={dest.slug} {...dest} />
              ))}
            </div>
          </div>
        </section>

        {/* ── About Preview ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Placeholder */}
              <div className="relative" data-aos="slide-right">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #d4a574 0%, #0d9488 100%)",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white/40">
                      <svg
                        className="w-24 h-24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Floating card */}
                <div
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 hidden md:block"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="text-2xl font-bold text-ocean-600">47</div>
                  <div className="text-sm text-gray-500">
                    Countries & counting
                  </div>
                </div>
              </div>

              {/* Text */}
              <div data-aos="fade-up">
                <span className="text-sand-400 text-sm font-semibold uppercase tracking-widest">
                  Our Story
                </span>
                <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                  We Believe Travel Changes Everything
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Wanderlust Diaries started in 2019 with a one-way ticket to
                    Southeast Asia and a battered laptop. What began as a
                    personal travel journal quickly grew into a community of
                    curious, adventurous souls.
                  </p>
                  <p>
                    We share honest stories — the spectacular and the mundane,
                    the perfect sunset and the missed flight. Because real
                    travel isn&apos;t always Instagram-perfect, and that&apos;s
                    what makes it beautiful.
                  </p>
                </div>
                <a href="/about" className="btn-primary mt-8">
                  Read Our Full Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Latest Blog Posts ── */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16"
              data-aos="fade-up"
            >
              <div>
                <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
                  From the Journal
                </span>
                <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                  Latest Stories
                </h2>
              </div>
              <a href="/blog" className="btn-outline text-nowrap">
                View All Posts
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <NewsletterCTA />
      </main>

      <Footer />
    </>
  );
}
