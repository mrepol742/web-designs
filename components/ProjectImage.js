import Image from "next/image";
import { useBasePath } from "@/hooks/useBasePath";

export default function ProjectImage({ src, ...props }) {
  const base = useBasePath();

  const resolved =
    src.startsWith("http") || src.startsWith(base)
      ? src
      : `${base}${src.startsWith("/") ? src : `/${src}`}`;

  return <Image src={resolved} {...props} />;
}
