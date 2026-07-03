import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen bg-cream text-gray-800 font-sans">
      <Header />
      <main className="min-h-[70vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
