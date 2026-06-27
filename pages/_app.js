import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPortfolio = router.pathname.startsWith("/portfolio");
  const isRestaurant = router.pathname.startsWith("/restaurant");
  const isFitness = router.pathname.startsWith("/fitness");

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
      import("@/pages/portfolio/styles/globals.css");
    } else if (isRestaurant) {
      import("@/pages/restaurant/styles/globals.css");
    } else if (isFitness) {
      import("@/pages/fitness/styles/globals.css");
    }
  }, [isPortfolio, isRestaurant, isFitness]);

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => AOS.refresh(), 100);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return <Component {...pageProps} />;
}
