import { useRouter } from "next/router";

const projectPrefixes = [
  "/melvin-jones-repol",
  "/la-dolce-vita",
  "/ironpulse-gym",
  "/wanderlust-diaries",
  "/sweet-bliss-bakery",
  "/sterling-and-associates",
  "/turbomax-auto-parts",
  "/voyage-and-co-travel"
];

export function useBasePath() {
  const router = useRouter();
  const prefix = projectPrefixes.find((p) => router.pathname.startsWith(p));
  return prefix ?? "";
}
