import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";

const categories = [
  {
    name: "🥤 Smoothies & Juices",
    items: [
      {
        name: "Green Goddess Smoothie",
        description: "Spinach, mango, banana, chia seeds & coconut water",
        price: "8.95",
        tags: ["Vegan", "GF", "Organic"],
      },
      {
        name: "Berry Blast",
        description: "Mixed berries, açaí, almond milk, flaxseed, honey",
        price: "9.50",
        tags: ["GF"],
      },
      {
        name: "Tropical Sunrise",
        description: "Pineapple, passion fruit, banana, lime, turmeric",
        price: "8.95",
        tags: ["Vegan", "GF"],
      },
      {
        name: "Cold-Pressed Citrus Sunrise",
        description: "Orange, grapefruit, carrot, turmeric & ginger",
        price: "7.50",
        tags: ["Vegan", "GF", "Organic"],
      },
      {
        name: "Beetroot Reviver",
        description: "Beet, apple, ginger, lemon, celery",
        price: "8.00",
        tags: ["Vegan", "GF", "Dairy-Free"],
      },
    ],
  },
  {
    name: "🥗 Salads",
    items: [
      {
        name: "Harvest Garden Salad",
        description:
          "Mixed greens, roasted squash, cranberries, pecans, maple vinaigrette",
        price: "11.00",
        tags: ["Vegan", "GF"],
      },
      {
        name: "Kale Caesar",
        description:
          "Tuscan kale, shaved parmesan, sourdough croutons, house Caesar dressing",
        price: "10.50",
        tags: ["Organic"],
      },
      {
        name: "Mediterranean Bowl",
        description:
          "Arugula, quinoa, cucumber, tomato, olives, feta, lemon-herb dressing",
        price: "12.00",
        tags: ["GF"],
      },
      {
        name: "Thai Crunch Salad",
        description:
          "Napa cabbage, edamame, carrots, peanuts, sesame-ginger dressing",
        price: "11.50",
        tags: ["Vegan", "Spicy"],
      },
    ],
  },
  {
    name: "🥘 Power Bowls",
    items: [
      {
        name: "Quinoa Power Bowl",
        description:
          "Organic quinoa, roasted veggies, tahini dressing, avocado, microgreens",
        price: "12.50",
        tags: ["Vegan", "GF"],
      },
      {
        name: "Teriyaki Buddha Bowl",
        description:
          "Brown rice, tofu, pickled radish, edamame, teriyaki glaze, sesame seeds",
        price: "13.00",
        tags: ["Vegan", "Dairy-Free"],
      },
      {
        name: "Sweet Potato & Black Bean Bowl",
        description:
          "Roasted sweet potato, black beans, corn, lime crema, cilantro",
        price: "11.95",
        tags: ["GF"],
      },
      {
        name: "Salmon Nourish Bowl",
        description:
          "Wild salmon, brown rice, avocado, cucumber, pickled ginger, miso dressing",
        price: "15.50",
        tags: ["GF", "Dairy-Free"],
      },
      {
        name: "Açaí Sunrise Bowl",
        description:
          "Blended açaí, banana, granola, fresh berries, coconut flakes, honey",
        price: "10.95",
        tags: ["GF", "Organic"],
      },
    ],
  },
  {
    name: "🥪 Sandwiches & Toast",
    items: [
      {
        name: "Wild Mushroom Toast",
        description:
          "Sourdough, sautéed mushrooms, truffle oil, microgreens, parmesan",
        price: "11.00",
        tags: ["Organic"],
      },
      {
        name: "Turkey Avocado Club",
        description: "Herb turkey, avocado, bacon, tomato, greens on ciabatta",
        price: "12.95",
        tags: [],
      },
      {
        name: "Caprese Panini",
        description:
          "Fresh mozzarella, heirloom tomato, basil, balsamic glaze on focaccia",
        price: "10.50",
        tags: ["Vegetarian"],
      },
      {
        name: "BBQ Pulled Jackfruit",
        description:
          "Shredded jackfruit, tangy BBQ sauce, slaw, pickles on a brioche bun",
        price: "11.50",
        tags: ["Vegan"],
      },
      {
        name: "Almond Butter & Banana",
        description:
          "House-ground almond butter, banana, honey, hemp seeds on multigrain",
        price: "8.50",
        tags: ["Vegan", "Dairy-Free"],
      },
    ],
  },
  {
    name: "☕ Hot Drinks",
    items: [
      {
        name: "Lavender Oat Latte",
        description: "Espresso, oat milk, house lavender syrup, dried lavender",
        price: "5.50",
        tags: ["Vegan"],
      },
      {
        name: "Golden Turmeric Latte",
        description:
          "Steamed oat milk, turmeric, cinnamon, ginger, black pepper, maple",
        price: "5.95",
        tags: ["Vegan", "GF"],
      },
      {
        name: "Matcha Ceremony",
        description:
          "Ceremonial-grade matcha, your choice of milk, light sweetener",
        price: "6.00",
        tags: ["Vegan", "GF", "Organic"],
      },
      {
        name: "Chai Masala",
        description:
          "House-spiced chai concentrate, steamed milk, cardamom, clove",
        price: "4.95",
        tags: ["GF"],
      },
      {
        name: "Pour Over Coffee",
        description:
          "Single-origin Ethiopian Yirgacheffe, hand-poured, notes of citrus & floral",
        price: "4.50",
        tags: ["Vegan", "GF", "Organic"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu — Harvest Kitchen</title>
      </Head>
      <Header />

      {/* Page Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 text-white text-center px-4">
        <h1
          data-aos="fade-up"
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          Our Menu
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-green-100 text-lg max-w-xl mx-auto"
        >
          Seasonal, organic, and crafted fresh every morning. Prices are
          inclusive of tax.
        </p>
      </section>

      {/* Menu Sections */}
      {categories.map((cat, ci) => (
        <section key={cat.name} className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              data-aos="fade-up"
              className="font-serif text-2xl md:text-3xl font-bold text-green-700 mb-8 text-center"
            >
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item, ii) => (
                <MenuCard
                  key={item.name}
                  {...item}
                  aos={ci % 2 === 0 ? "fade-up" : "zoom-in"}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}
