import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";

const menuSections = [
  {
    title: "Antipasti",
    subtitle: "Appetizers",
    description: "Begin your journey with flavors that awaken the palate.",
    items: [
      {
        name: "Bruschetta Classica",
        price: "14",
        description:
          "Grilled ciabatta topped with heirloom tomatoes, fresh basil, garlic, and aged balsamic reduction.",
      },
      {
        name: "Carpaccio di Manzo",
        price: "18",
        description:
          "Paper-thin slices of prime beef with arugula, shaved Parmigiano, capers, and truffle aioli.",
      },
      {
        name: "Calamari Fritti",
        price: "16",
        description:
          "Crispy tender calamari rings served with spicy marinara and lemon-garlic aioli.",
      },
      {
        name: "Burrata e Prosciutto",
        price: "19",
        description:
          "Creamy burrata cheese with 24-month aged Parma ham, roasted peppers, and extra virgin olive oil.",
      },
      {
        name: "Carpaccio di Polpo",
        price: "17",
        description:
          "Seared octopus with cannellini beans, cherry tomatoes, olives, and citrus vinaigrette.",
      },
      {
        name: "Arancini",
        price: "13",
        description:
          "Golden fried risotto balls filled with mozzarella and ragù, served with arrabbiata sauce.",
      },
    ],
  },
  {
    title: "Primi Piatti",
    subtitle: "Pasta & Risotto",
    description: "Handmade daily, our pasta is the soul of the menu.",
    items: [
      {
        name: "Tagliatelle al Ragù",
        price: "24",
        description:
          "Wide ribbon pasta with slow-braised Bolognese, San Marzano tomatoes, and Parmigiano.",
      },
      {
        name: "Cacio e Pepe",
        price: "20",
        description:
          "Classic Roman pasta with Pecorino Romano, cracked black pepper, and silky tonnarelli.",
      },
      {
        name: "Truffle Risotto",
        price: "28",
        description:
          "Arborio rice with porcini mushrooms, white truffle oil, and aged Parmigiano-Reggiano.",
      },
      {
        name: "Linguine alle Vongole",
        price: "26",
        description:
          "Fresh clams with white wine, garlic, chili flakes, and parsley over linguine.",
      },
      {
        name: "Gnocchi al Pesto",
        price: "22",
        description:
          "Pillowy potato gnocchi tossed in house-made basil pesto with toasted pine nuts.",
      },
      {
        name: "Pappardelle al Cinghiale",
        price: "27",
        description:
          "Wide pasta ribbons with slow-cooked wild boar ragù, rosemary, and juniper berries.",
      },
    ],
  },
  {
    title: "Secondi",
    subtitle: "Main Courses",
    description:
      "Masterfully prepared proteins, each a celebration of Italian tradition.",
    items: [
      {
        name: "Osso Buco alla Milanese",
        price: "36",
        description:
          "Braised veal shank in white wine, tomatoes, and gremolata over saffron risotto.",
      },
      {
        name: "Branzino al Forno",
        price: "32",
        description:
          "Whole Mediterranean sea bass roasted with lemon, capers, and fresh herbs.",
      },
      {
        name: "Bistecca alla Fiorentina",
        price: "48",
        description:
          "Dry-aged T-bone steak, 600g, grilled over charcoal with rosemary and olive oil.",
      },
      {
        name: "Pollo al Marsala",
        price: "28",
        description:
          "Pan-seared chicken breast in Marsala wine sauce with cremini mushrooms.",
      },
      {
        name: "Saltimbocca alla Romana",
        price: "34",
        description:
          "Veal cutlets wrapped with prosciutto and sage in a white wine butter sauce.",
      },
      {
        name: "Melanzane alla Parmigiana",
        price: "22",
        description:
          "Layered eggplant with San Marzano tomatoes, fresh mozzarella, and basil. (V)",
      },
    ],
  },
  {
    title: "Dolci",
    subtitle: "Desserts",
    description: "End your meal on a sweet note — because life is short.",
    items: [
      {
        name: "Tiramisù",
        price: "14",
        description:
          "The classic: espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
      },
      {
        name: "Panna Cotta",
        price: "12",
        description:
          "Vanilla bean cream custard with seasonal berry compote and fresh mint.",
      },
      {
        name: "Cannoli Siciliani",
        price: "13",
        description:
          "Crispy ricotta-filled shells with candied orange, chocolate chips, and pistachios.",
      },
      {
        name: "Affogato al Caffè",
        price: "11",
        description:
          "Vanilla gelato drowned in hot espresso with a biscotti on the side.",
      },
      {
        name: "Torta Caprese",
        price: "14",
        description:
          "Warm flourless chocolate-almond cake with whipped cream and dark chocolate shavings.",
      },
    ],
  },
  {
    title: "Bevande",
    subtitle: "Drinks",
    description: "Curated wines, handcrafted cocktails, and Italian classics.",
    items: [
      {
        name: "Aperol Spritz",
        price: "15",
        description:
          "Aperol, Prosecco, and soda water with an orange slice — the perfect aperitivo.",
      },
      {
        name: "Negroni",
        price: "16",
        description:
          "Gin, Campari, and sweet vermouth, stirred to perfection and served on the rocks.",
      },
      {
        name: "Limoncello Fizz",
        price: "14",
        description:
          "House-made limoncello with Prosecco and a sprig of fresh thyme.",
      },
      {
        name: "Espresso Martini",
        price: "17",
        description:
          "Vodka, Kahlúa, and freshly pulled espresso, shaken until velvety.",
      },
      {
        name: "Italian Red — Chianti Classico",
        price: "16",
        description:
          "A glass of elegant Sangiovese from Tuscany. Cherry, leather, and soft tannins.",
      },
      {
        name: "Italian White — Pinot Grigio",
        price: "14",
        description:
          "Crisp and refreshing from the Veneto. Green apple, pear, and mineral finish.",
      },
    ],
  },
];

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu — La Dolce Vita</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darkbrown">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-4">
            La Dolce Vita
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-4">
            Our Menu
          </h1>
          <div className="gold-divider" />
          <p className="font-serif text-cream/60 italic text-lg mt-6">
            A curated journey through the flavors of Italy, crafted with
            seasonal ingredients and timeless techniques.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section, sIdx) => (
        <section
          key={section.title}
          className={`py-20 ${sIdx % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <p className="font-sans text-gold tracking-[0.3em] uppercase text-xs mb-2">
                {section.subtitle}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-darkbrown">
                {section.title}
              </h2>
              <div className="gold-divider" />
              <p className="font-sans text-darkbrown/60 mt-4 max-w-lg mx-auto">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, i) => (
                <MenuCard
                  key={item.name}
                  {...item}
                  aosAnimation={
                    i % 3 === 0
                      ? "fade-up"
                      : i % 3 === 1
                        ? "zoom-in"
                        : "slide-up"
                  }
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom note */}
      <section className="py-16 bg-darkbrown">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-sans text-cream/50 text-sm leading-relaxed">
            All prices are in USD and subject to applicable taxes. Our menu
            changes seasonally to showcase the freshest ingredients. Please
            inform your server of any allergies or dietary requirements.
            <span className="text-gold block mt-2">
              (V) Vegetarian · (GF) Gluten-Free Options Available
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
