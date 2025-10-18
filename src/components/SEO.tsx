import React from "react";

/**
 * Componente de SEO somente para injetar JSON-LD (schema.org) no <head>.
 * Como é Server Component, pode ler SITE_URL do .env normalmente.
 */
export default function SEO() {
  const siteUrl =
    (process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://example.com").replace(/\/$/, "");

  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation", // pode trocar para "LocalBusiness" se preferir
    "@id": `${siteUrl}/#business`,
    name: "ETHOS JIU JITSU ACADEMY",
    url: siteUrl,
    telephone: "+55 45 99846-1866",
    image: [`${siteUrl}/logo.png`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Jorge Lacerda, 1151",
      addressLocality: "Cascavel",
      addressRegion: "PR",
      postalCode: "00000-000",
      addressCountry: "BR",
    },
    // sameAs: ["https://instagram.com/...", "https://facebook.com/..."],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
