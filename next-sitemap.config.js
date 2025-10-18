/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://ethos-academy.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  exclude: ["/404", "/500"],
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  // Customização para prioridades das páginas principais
  transform: async (config, path) => {
    let priority = 0.7;

    if (path === "/") priority = 1.0;
    if (["/aulas", "/contato", "/professores"].includes(path)) priority = 0.9;

    return {
      loc: `${siteUrl}${path}`,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
