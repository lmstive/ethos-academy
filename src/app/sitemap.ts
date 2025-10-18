export const runtime = "nodejs";
export const dynamic = "force-static";

// Use seu domínio aqui (troque quando tiver domínio próprio)
const BASE_URL = "https://ethos-academy.vercel.app";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified: now },
    { url: `${BASE_URL}/aulas`, lastModified: now },
    { url: `${BASE_URL}/professores`, lastModified: now },
    { url: `${BASE_URL}/planos`, lastModified: now },
    { url: `${BASE_URL}/contato`, lastModified: now },
  ];
}
