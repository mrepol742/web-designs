import Link from "next/link";
import { useBasePath } from "@/hooks/useBasePath";

export default function ProjectLink({ href, children, ...props }) {
  const base = useBasePath();

  // Already absolute (http/https) or already prefixed — leave it alone
  const resolved =
    href.startsWith("http") || href.startsWith(base)
      ? href
      : `${base}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <Link href={resolved} {...props}>
      {children}
    </Link>
  );
}
