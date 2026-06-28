import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";

const posts = [
  {
    title: "48 Hours in Tokyo: A Complete Guide",
    category: "Asia",
    excerpt:
      "From serene temples to neon-lit streets — how to make the most of a weekend in Japan's capital.",
    author: "Emma Rodriguez",
    date: "Mar 15, 2026",
    readTime: "8 min",
    thumbnail: "/blog/tokyo.jpg",
  },
  {
    title: "Hidden Beaches of Bali You Won't Find on Instagram",
    category: "Southeast Asia",
    excerpt:
      "Skip the crowds at Kuta. These secret coves are where locals actually swim.",
    author: "Jake Morrison",
    date: "Mar 8, 2026",
    readTime: "6 min",
    thumbnail: "/blog/bali.jpg",
  },
  {
    title: "Iceland's Ring Road: A 10-Day Road Trip Itinerary",
    category: "Europe",
    excerpt:
      "Waterfalls, glaciers, hot springs, and volcanic landscapes — the ultimate driving route.",
    author: "Sofia Lindgren",
    date: "Feb 28, 2026",
    readTime: "12 min",
    thumbnail: "/blog/iceland.jpg",
  },
  {
    title: "Morocco on a Budget: How to Spend $30/Day",
    category: "Africa",
    excerpt:
      "Riads, tagine, and Sahara sunsets — Morocco is one of the most affordable destinations on earth.",
    author: "Omar Benali",
    date: "Feb 20, 2026",
    readTime: "7 min",
    thumbnail: "/blog/morocco.jpg",
  },
  {
    title: "The Ultimate Packing List for Any Climate",
    category: "Tips",
    excerpt:
      "One bag, any destination. Here's how to pack light without leaving essentials behind.",
    author: "Emma Rodriguez",
    date: "Feb 12, 2026",
    readTime: "5 min",
    thumbnail: "/blog/packing.jpg",
  },
  {
    title: "Train Travel Through Switzerland Is Pure Magic",
    category: "Europe",
    excerpt:
      "Glacier Express, Jungfrau, and Lauterbrunnen — why trains beat planes in the Alps.",
    author: "Jake Morrison",
    date: "Feb 4, 2026",
    readTime: "9 min",
    thumbnail: "/blog/switzerland.jpg",
  },
  {
    title: "Solo Female Travel: Safety Tips That Actually Work",
    category: "Tips",
    excerpt: "Practical advice from women who've been to 50+ countries alone.",
    author: "Sofia Lindgren",
    date: "Jan 28, 2026",
    readTime: "10 min",
    thumbnail: "/blog/solo.jpg",
  },
  {
    title: "Peru Beyond Machu Picchu: The Sacred Valley Guide",
    category: "South America",
    excerpt:
      "Rainbow Mountain, Ollantaytambo, and local markets — the Inca Trail is just the beginning.",
    author: "Omar Benali",
    date: "Jan 20, 2026",
    readTime: "8 min",
    thumbnail: "/blog/peru.jpg",
  },
];

const categories = [
  "All",
  "Asia",
  "Europe",
  "Southeast Asia",
  "Africa",
  "South America",
  "Tips",
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog — Wanderlust Diaries</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            data-aos="fade-up"
          >
            Travel Stories
          </h1>
          <p
            className="text-gray-500 text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tips, guides, and stories from the road.
          </p>
          <div
            className="flex flex-wrap gap-2 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((c) => (
              <button
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-600 hover:bg-[#0d9488] hover:text-white hover:border-[#0d9488] transition-all"
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <BlogCard
                key={p.title}
                {...p}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
