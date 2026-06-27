import { useRouter } from "next/router";

const projectPrefixes = [
  "/melvin-jones-repol",
  "/la-dolce-vita",
  "/ironpulse-gym",
];

export function useBasePath() {
  const router = useRouter();
  const prefix = projectPrefixes.find((p) => router.pathname.startsWith(p));
  return prefix ?? "";
}
