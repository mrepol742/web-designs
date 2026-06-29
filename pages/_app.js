import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import ContactPopup from "./components/ContactPopup";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPortfolio = router.pathname.startsWith("/melvin-jones-repol");
  const isRestaurant = router.pathname.startsWith("/la-dolce-vita");
  const isFitness = router.pathname.startsWith("/ironpulse-gym");
  const isTravel = router.pathname.startsWith("/wanderlust-diaries");
  const isCakeShop = router.pathname.startsWith("/sweet-bliss-bakery");
  const isLawRealty = router.pathname.startsWith("/sterling-and-associates");
  const isMotorShop = router.pathname.startsWith("/turbomax-auto-parts");
  const isTravelAgency = router.pathname.startsWith("/voyage-and-co-travel");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    if (isPortfolio) {
      import("@/pages/melvin-jones-repol/styles/globals.css");
    } else if (isRestaurant) {
      import("@/pages/la-dolce-vita/styles/globals.css");
    } else if (isFitness) {
      import("@/pages/ironpulse-gym/styles/globals.css");
    } else if (isTravel) {
      import("@/pages/wanderlust-diaries/styles/globals.css");
    } else if (isCakeShop) {
      import("@/pages/sweet-bliss-bakery/styles/globals.css");
    } else if (isLawRealty) {
      import("@/pages/sterling-and-associates/styles/globals.css");
    } else if (isMotorShop) {
      import("@/pages/turbomax-auto-parts/styles/globals.css");
    } else if (isTravelAgency) {
      import("@/pages/voyage-and-co-travel/styles/globals.css");
    }
  }, [
    isPortfolio,
    isRestaurant,
    isFitness,
    isTravel,
    isCakeShop,
    isLawRealty,
    isMotorShop,
    isTravelAgency,
  ]);

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => AOS.refresh(), 100);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <ContactPopup />
    </>
  );
}
