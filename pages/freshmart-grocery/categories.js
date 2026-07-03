import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const categoryData = [
  {
    icon: "🍎",
    title: "Fruits & Vegetables",
    color: "from-green-50 to-green-100",
    items: [
      { name: "Organic Bananas", price: 1.49, unit: "per lb" },
      { name: "Avocados (Hass)", price: 1.99, unit: "each" },
      { name: "Baby Spinach", price: 3.49, unit: "5 oz bag" },
      { name: "Red Bell Peppers", price: 1.29, unit: "each" },
      { name: "Russet Potatoes", price: 4.99, unit: "5 lb bag" },
      { name: "Strawberries", price: 4.99, unit: "1 lb box" },
      { name: "Broccoli Crowns", price: 2.49, unit: "per lb" },
      { name: "Fuji Apples", price: 2.99, unit: "per lb" },
    ],
  },
  {
    icon: "🥛",
    title: "Dairy & Eggs",
    color: "from-blue-50 to-blue-100",
    items: [
      { name: "Whole Milk", price: 3.99, unit: "gallon" },
      { name: "Large Eggs (Grade A)", price: 3.49, unit: "dozen" },
      { name: "Greek Yogurt Plain", price: 5.99, unit: "32 oz" },
      { name: "Cheddar Cheese Block", price: 4.49, unit: "8 oz" },
      { name: "Unsalted Butter", price: 4.99, unit: "1 lb" },
      { name: "Heavy Cream", price: 3.79, unit: "pint" },
      { name: "Cream Cheese", price: 2.99, unit: "8 oz" },
      { name: "Cottage Cheese", price: 3.49, unit: "16 oz" },
    ],
  },
  {
    icon: "🥩",
    title: "Meat & Seafood",
    color: "from-red-50 to-red-100",
    items: [
      { name: "Chicken Breast Boneless", price: 5.99, unit: "per lb" },
      { name: "Atlantic Salmon Fillet", price: 11.99, unit: "per lb" },
      { name: "Ground Beef 85/15", price: 5.49, unit: "per lb" },
      { name: "Pork Tenderloin", price: 4.99, unit: "per lb" },
      { name: "Shrimp Peeled Deveined", price: 9.99, unit: "per lb" },
      { name: "Turkey Breast Deli", price: 7.49, unit: "per lb" },
      { name: "Ribeye Steak", price: 14.99, unit: "per lb" },
      { name: "Tilapia Fillets", price: 6.99, unit: "per lb" },
    ],
  },
  {
    icon: "🍞",
    title: "Bakery",
    color: "from-amber-50 to-amber-100",
    items: [
      { name: "Sourdough Loaf", price: 4.99, unit: "per loaf" },
      { name: "Whole Wheat Bread", price: 3.49, unit: "per loaf" },
      { name: "Croissants", price: 4.99, unit: "4-pack" },
      { name: "Chocolate Chip Muffins", price: 5.49, unit: "4-pack" },
      { name: "Bagels Assorted", price: 4.49, unit: "6-pack" },
      { name: "Cinnamon Rolls", price: 5.99, unit: "4-pack" },
      { name: "French Baguette", price: 2.99, unit: "each" },
      { name: "Multigrain Rolls", price: 3.99, unit: "6-pack" },
    ],
  },
  {
    icon: "🥤",
    title: "Beverages",
    color: "from-purple-50 to-purple-100",
    items: [
      { name: "Orange Juice Fresh Squeezed", price: 5.99, unit: "52 oz" },
      { name: "Sparkling Water Variety", price: 5.49, unit: "12-pack" },
      { name: "Cold Brew Coffee", price: 6.99, unit: "32 oz" },
      { name: "Almond Milk Unsweetened", price: 3.49, unit: "half gallon" },
      { name: "Green Tea Organic", price: 4.49, unit: "20 bags" },
      { name: "Apple Juice", price: 3.99, unit: "64 oz" },
      { name: "Coconut Water", price: 2.99, unit: "16.9 oz" },
      { name: "Kombucha Ginger", price: 3.99, unit: "16 oz" },
    ],
  },
  {
    icon: "🍿",
    title: "Snacks",
    color: "from-yellow-50 to-yellow-100",
    items: [
      { name: "Tortilla Chips", price: 3.99, unit: "13 oz" },
      { name: "Mixed Nuts Unsalted", price: 8.99, unit: "16 oz" },
      { name: "Granola Bars Variety", price: 5.49, unit: "6-pack" },
      { name: "Dark Chocolate Bar", price: 3.49, unit: "3.5 oz" },
      { name: "Popcorn Microwave", price: 4.29, unit: "3-pack" },
      { name: "Hummus Classic", price: 4.49, unit: "10 oz" },
      { name: "Rice Cakes", price: 2.99, unit: "8.5 oz" },
      { name: "Trail Mix Energy", price: 6.99, unit: "12 oz" },
    ],
  },
  {
    icon: "🧊",
    title: "Frozen",
    color: "from-cyan-50 to-cyan-100",
    items: [
      { name: "Frozen Pizza Margherita", price: 6.99, unit: "each" },
      { name: "Ice Cream Vanilla", price: 5.49, unit: "pint" },
      { name: "Frozen Vegetables Mix", price: 2.99, unit: "16 oz" },
      { name: "Frozen Berries Blend", price: 4.99, unit: "12 oz" },
      { name: "Fish Sticks", price: 5.99, unit: "10.8 oz" },
      { name: "Chicken Tenders", price: 6.49, unit: "25 oz" },
      { name: "Frozen Waffles", price: 3.99, unit: "10-pack" },
      { name: "Edamame Shelled", price: 3.49, unit: "12 oz" },
    ],
  },
  {
    icon: "🌿",
    title: "Organic",
    color: "from-emerald-50 to-emerald-100",
    items: [
      { name: "Organic Quinoa", price: 6.99, unit: "16 oz" },
      { name: "Organic Kale Bunch", price: 2.99, unit: "each" },
      { name: "Organic Chicken Thighs", price: 7.99, unit: "per lb" },
      { name: "Organic Tomato Sauce", price: 3.99, unit: "24 oz" },
      { name: "Organic Honey", price: 8.99, unit: "16 oz" },
      { name: "Organic Oatmeal", price: 4.49, unit: "18 oz" },
      { name: "Organic Peanut Butter", price: 5.99, unit: "16 oz" },
      { name: "Organic Brown Rice", price: 3.99, unit: "2 lb" },
    ],
  },
];

export default function Categories() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Head>
        <title>Categories — FreshMart Grocery</title>
        <meta
          name="description"
          content="Browse all grocery categories at FreshMart — from fresh produce to frozen meals."
        />
      </Head>

      <Header />

      {/* Page header */}
      <section className="bg-gradient-to-r from-green-500 to-orange-500 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2" data-aos="fade-up">
          Our Categories 🥗
        </h1>
        <p className="text-white/80" data-aos="fade-up" data-aos-delay="80">
          Browse 500+ products across 8 departments
        </p>
      </section>

      {/* Category tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          data-aos="fade-up"
        >
          {categoryData.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          key={active}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${categoryData[active].color} p-6`}>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {categoryData[active].icon} {categoryData[active].title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {categoryData[active].items.length} products available
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {categoryData[active].items.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.unit}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                    Add 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
