import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GalleryCard from "./components/GalleryCard";

const galleryItems = [
  {
    title: "Green Goddess Smoothie",
    color: "bg-gradient-to-br from-green-300 to-green-500",
    aos: "fade-up",
  },
  {
    title: "Avocado Toast Plating",
    color: "bg-gradient-to-br from-amber-200 to-amber-400",
    aos: "zoom-in",
  },
  {
    title: "Cold-Pressed Juices",
    color: "bg-gradient-to-br from-orange-200 to-orange-400",
    aos: "fade-up",
  },
  {
    title: "Quinoa Power Bowl",
    color: "bg-gradient-to-br from-lime-200 to-lime-400",
    aos: "flip-left",
  },
  {
    title: "Sourdough Bread Rack",
    color: "bg-gradient-to-br from-yellow-100 to-yellow-300",
    aos: "zoom-in",
  },
  {
    title: "Farm Harvest Display",
    color: "bg-gradient-to-br from-emerald-200 to-emerald-500",
    aos: "fade-up",
  },
  {
    title: "Berry Blast Smoothie",
    color: "bg-gradient-to-br from-purple-200 to-purple-400",
    aos: "flip-left",
  },
  {
    title: "Interior — The Barn",
    color: "bg-gradient-to-br from-stone-200 to-stone-400",
    aos: "zoom-in",
  },
  {
    title: "Wild Mushroom Toast",
    color: "bg-gradient-to-br from-amber-100 to-amber-300",
    aos: "fade-up",
  },
  {
    title: "Matcha Ceremony",
    color: "bg-gradient-to-br from-green-100 to-emerald-300",
    aos: "flip-left",
  },
  {
    title: "Açaí Sunrise Bowl",
    color: "bg-gradient-to-br from-rose-200 to-rose-400",
    aos: "zoom-in",
  },
  {
    title: "Lavender Oat Latte Art",
    color: "bg-gradient-to-br from-violet-200 to-violet-400",
    aos: "fade-up",
  },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery — Harvest Kitchen</title>
      </Head>
      <Header />

      {/* Page Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-center px-4">
        <h1
          data-aos="fade-up"
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          Gallery
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-green-100 text-lg max-w-xl mx-auto"
        >
          A peek inside Harvest Kitchen — from our kitchen to your table.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <GalleryCard
                key={item.title}
                title={item.title}
                color={item.color}
                aos={item.aos}
                aspectClass={
                  i % 3 === 0
                    ? "aspect-[4/5]"
                    : i % 3 === 1
                      ? "aspect-square"
                      : "aspect-[3/2]"
                }
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
