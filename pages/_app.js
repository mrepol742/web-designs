import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import ContactPopup from "./components/ContactPopup";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isRestaurant = router.pathname.startsWith("/la-dolce-vita");
  const isFitness = router.pathname.startsWith("/ironpulse-gym");
  const isTravel = router.pathname.startsWith("/wanderlust-diaries");
  const isCakeShop = router.pathname.startsWith("/sweet-bliss-bakery");
  const isLawRealty = router.pathname.startsWith("/sterling-and-associates");
  const isMotorShop = router.pathname.startsWith("/turbomax-auto-parts");
  const isTravelAgency = router.pathname.startsWith("/voyage-and-co-travel");
  const isDentalClinic = router.pathname.startsWith(
    "/brightsmile-dental-clinic",
  );
  const isTransport = router.pathname.startsWith("/swifthaul-logistics");
  const isManufacturing = router.pathname.startsWith("/apex-manufacturing-co");
  const isFoodBev = router.pathname.startsWith("/harvest-kitchen");
  const isBioscience = router.pathname.startsWith("/bionex-labs");
  const isGrocery = router.pathname.startsWith("/freshmart-grocery");
  const isFoodStore = router.pathname.startsWith("/the-pantry");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    if (isRestaurant) {
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
    } else if (isDentalClinic) {
      import("@/pages/brightsmile-dental-clinic/styles/globals.css");
    } else if (isTransport) {
      import("@/pages/swifthaul-logistics/styles/globals.css");
    } else if (isManufacturing) {
      import("@/pages/apex-manufacturing-co/styles/globals.css");
    } else if (isFoodBev) {
      import("@/pages/harvest-kitchen/styles/globals.css");
    } else if (isBioscience) {
      import("@/pages/bionex-labs/styles/globals.css");
    } else if (isGrocery) {
      import("@/pages/freshmart-grocery/styles/globals.css");
    } else if (isFoodStore) {
      import("@/pages/the-pantry/styles/globals.css");
    }
  }, [
    isRestaurant,
    isFitness,
    isTravel,
    isCakeShop,
    isLawRealty,
    isMotorShop,
    isTravelAgency,
    isDentalClinic,
    isTransport,
    isManufacturing,
    isFoodBev,
    isBioscience,
    isGrocery,
    isFoodStore,
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
