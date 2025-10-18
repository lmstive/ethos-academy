export const runtime = "nodejs";
export const dynamic = "force-static";

const BASE_URL = "https://ethos-academy.vercel.app";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
