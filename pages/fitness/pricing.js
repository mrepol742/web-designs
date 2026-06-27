import { useState } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PricingCard from "./components/PricingCard";

const plans = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "2 group classes per week",
      "Basic fitness assessment",
      "Free WiFi",
    ],
    highlighted: false,
    aosEffect: "fade-up",
  },
  {
    name: "Pro",
    price: 59,
    period: "month",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/month",
      "Sauna & steam room access",
      "Nutrition consultation",
      "Priority class booking",
      "IronPulse app access",
    ],
    highlighted: true,
    aosEffect: "zoom-in",
  },
  {
    name: "Elite",
    price: 99,
    period: "month",
    features: [
      "Everything in Pro",
      "4 personal training sessions/month",
      "Custom meal plan",
      "Recovery zone access",
      "Guest passes (2/month)",
      "VIP locker rental",
      "24/7 gym access",
      "Merchandise discount (20%)",
    ],
    highlighted: false,
    aosEffect: "fade-up",
  },
];

const faqs = [
  {
    q: "Is there a joining fee?",
    a: "No joining fees, no hidden costs. What you see is what you pay. Cancel anytime.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, you can freeze your membership for up to 3 months per year at no extra charge.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Absolutely. We offer 15% off any plan with a valid student ID. Contact us for details.",
  },
  {
    q: "What are the gym hours?",
    a: "Mon–Fri: 5AM–11PM | Sat: 6AM–10PM | Sun: 7AM–9PM. Elite members get 24/7 access.",
  },
  {
    q: "Can I bring a friend?",
    a: "Pro members get 1 guest pass/month, Elite members get 2. Or buy a day pass for $15.",
  },
  {
    q: "Is personal training included?",
    a: "Basic: no. Pro: 1 session/month. Elite: 4 sessions/month. Additional sessions available at $60/hour.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Pricing — IronPulse Gym</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fire-red/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p
            className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3"
            data-aos="fade-down"
          >
            Membership
          </p>
          <h1
            className="heading-uppercase text-5xl md:text-7xl mb-4"
            data-aos="zoom-in"
          >
            Choose Your <span className="text-fire-gradient">Plan</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            No contracts. No gimmicks. Just straight-up value for every fitness
            level.
          </p>
          <div className="fire-divider w-24 mx-auto mt-8" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* All plans include */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h3 className="heading-uppercase text-2xl mb-6">
            Every Plan Includes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Free WiFi", "Clean Showers", "Parking", "Water Stations"].map(
              (item, i) => (
                <div key={i} className="card-dark !p-4">
                  <svg
                    className="w-6 h-6 text-fire-red mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
              FAQ
            </p>
            <h2 className="heading-uppercase text-3xl md:text-4xl">
              Got Questions?
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-dark !p-0 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-bold text-sm uppercase tracking-wider pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-fire-red flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-iron-muted pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
