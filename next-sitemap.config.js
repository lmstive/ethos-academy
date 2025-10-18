/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://example.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  exclude: ["/404", "/500"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Ajusta prioridades de páginas importantes
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    if (["/aulas", "/contato"].includes(path)) priority = 0.9;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
