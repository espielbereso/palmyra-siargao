import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const siteUrl = "https://palmyrasiargao.com";
const siteName = "PALMYRA Siargao";
const ogImage = `${siteUrl}/og-image.jpg`;
const imageAlt =
  "PALMYRA Siargao island sanctuary residences in Del Carmen, Siargao";
const lastmod = "2026-06-11";

const projectDescription =
  "PALMYRA Siargao is a conscious island sanctuary and integrated resort-residence project in Barangay Cancohoy, Del Carmen, Siargao Island, Philippines. It is a project of WELLBUILD Development Corporation.";

const teamMembers = [
  ["lynie", "Lynie Espiel-Bereso, MiM", "Chairman & Chief Executive Officer"],
  ["deborah", "Dr. Deborah Micah Espiel Bereso", "Vice-Chairman"],
  [
    "boboy",
    'Engr. Eglesciano "Boboy" S. Bereso',
    "Chief Safety & Compliance Officer and Senior Technical Advisor",
  ],
  ["peter", "Peter L. Nystrom", "Chief Corporate Social Responsibility Officer"],
  ["jedfrey", "Jedfrey Tan", "Chief Revenue Officer"],
  ["lani", 'Laarni "Lani" De Leon', "Chief Administrative Officer"],
  ["mabel", "Mabel De Leon", "Chief Brokerage Relations Officer"],
  ["alain", "Alain De Leon", "Chief Security Officer"],
  ["david", "David Moore", "Chief Security Officer"],
  ["belle", "Marilou Belle Moore", "Chief Human Resources Officer"],
  ["ryan", "Ryan Catubig", "Principal Architect"],
  ["john", "John Lopo", "Certified Public Accountant"],
  ["torreon", "Atty. Israelito P. Torreon", "Legal Counsel"],
];

const baseRoutes = [
  {
    path: "/",
    title: "PALMYRA Siargao | Resort and Residences in Del Carmen",
    description:
      "Discover PALMYRA Siargao, a conscious island sanctuary and integrated resort-residence project in Del Carmen, Siargao Island, Philippines.",
    priority: "1.0",
    changefreq: "weekly",
    type: "website",
  },
  {
    path: "/about",
    title: "About PALMYRA Siargao | Vision, Values, and Place",
    description:
      "Learn the PALMYRA Siargao vision, values, and location in Del Carmen. See how design, stewardship, and community shape the project.",
    priority: "0.9",
    changefreq: "monthly",
    type: "article",
  },
  {
    path: "/team",
    title: "Team and Partners | PALMYRA Siargao",
    description:
      "Meet the leadership team, technical experts, and partner companies behind PALMYRA Siargao Resort and Residences.",
    priority: "0.8",
    changefreq: "monthly",
    type: "profile",
  },
  {
    path: "/residences",
    title: "Residences | PALMYRA Siargao Resort and Residences",
    description:
      "Explore PALMYRA Siargao residences, unit types, amenities, site highlights, and phased plans for refined tropical island living in Del Carmen.",
    priority: "0.9",
    changefreq: "monthly",
    type: "article",
  },
  {
    path: "/updates",
    title: "Project Updates | PALMYRA Siargao",
    description:
      "Track verified PALMYRA Siargao project milestones, current phase, and upcoming development updates.",
    priority: "0.9",
    changefreq: "weekly",
    type: "article",
  },
  {
    path: "/connect",
    title: "Connect With PALMYRA Siargao",
    description:
      "Contact the PALMYRA Siargao team for project inquiries, updates, and next steps.",
    priority: "0.8",
    changefreq: "monthly",
    type: "website",
  },
];

const routes = [
  ...baseRoutes,
  ...teamMembers.map(([slug, name, role]) => ({
    path: `/team/${slug}`,
    title: `${name} | PALMYRA Siargao Team`,
    description: `${name} serves as ${role} for PALMYRA Siargao and WELLBUILD Development Corporation's integrated resort-residence project.`,
    priority: "0.7",
    changefreq: "monthly",
    type: "profile",
    person: { name, role },
  })),
];

const notFoundRoute = {
  path: "/404",
  title: "Page Not Found | PALMYRA Siargao",
  description: "The page you requested could not be found.",
  type: "website",
  noindex: true,
};

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const absoluteUrl = (routePath) =>
  routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: [
    "PALMYRA Siargao Resort and Residences",
    "PALMYRA Siargao Residences",
  ],
  url: `${siteUrl}/`,
  logo: ogImage,
  description: projectDescription,
  parentOrganization: {
    "@type": "Organization",
    name: "WELLBUILD Development Corporation",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Project inquiries",
    url: `${siteUrl}/connect`,
    areaServed: "PH",
    availableLanguage: ["en"],
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "@id": `${siteUrl}/#project`,
  name: "PALMYRA Siargao Resort and Residences",
  alternateName: ["PALMYRA Siargao", "PALMYRA Siargao Residences"],
  url: `${siteUrl}/`,
  image: ogImage,
  description: projectDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Barangay Cancohoy",
    addressLocality: "Del Carmen",
    addressRegion: "Surigao del Norte",
    addressCountry: "PH",
  },
  containedInPlace: {
    "@type": "Place",
    name: "Siargao Island",
    address: {
    "@type": "PostalAddress",
      addressRegion: "Surigao del Norte",
      addressCountry: "PH",
    },
  },
  parentOrganization: {
    "@id": `${siteUrl}/#organization`,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Low-rise residences",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Pools and wellness decks",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Clubhouse and social lounges",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Food village and dining concepts",
      value: true,
    },
  ],
  keywords: [
    "Siargao residences",
    "Del Carmen resort residences",
    "PALMYRA Siargao",
    "WELLBUILD Development Corporation",
    "integrated resort and residences",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: `${siteUrl}/`,
  inLanguage: "en",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  about: {
    "@id": `${siteUrl}/#project`,
  },
};

const breadcrumbItemsForPath = (routePath) => {
  if (routePath === "/") return [];
  if (routePath.startsWith("/team/")) {
    const member = teamMembers.find(([slug]) => routePath.endsWith(`/${slug}`));
    return [
      ["Home", "/"],
      ["Team", "/team"],
      [member?.[1] ?? "Team Member", routePath],
    ];
  }

  const labels = {
    "/about": "About",
    "/team": "Team",
    "/residences": "Residences",
    "/updates": "Project Updates",
    "/connect": "Connect",
  };

  return [
    ["Home", "/"],
    [labels[routePath] ?? "Page", routePath],
  ];
};

const schemaForRoute = (route) => {
  const url = absoluteUrl(route.path);
  const graph = [
    organizationSchema,
    projectSchema,
    websiteSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: route.title,
      description: route.description,
      url,
      inLanguage: "en",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#project`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ];

  const breadcrumbItems = breadcrumbItemsForPath(route.path);
  if (breadcrumbItems.length > 1) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map(([name, itemPath], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: absoluteUrl(itemPath),
      })),
    });
  }

  if (route.person) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url,
      name: route.title,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@type": "Person",
        name: route.person.name,
        jobTitle: route.person.role,
        worksFor: {
          "@type": "Organization",
          name: "WELLBUILD Development Corporation",
        },
      },
    });
  }

  return graph;
};

const upsertTag = (html, selectorRegex, replacement) => {
  if (selectorRegex.test(html)) {
    return html.replace(selectorRegex, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
};

const setTitle = (html, title) =>
  html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

const setMeta = (html, attribute, key, content) => {
  const replacement = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  const regex = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, "i");
  return upsertTag(html, regex, replacement);
};

const setCanonical = (html, href) => {
  const replacement = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  return upsertTag(html, /<link\s+rel="canonical"[^>]*>/i, replacement);
};

const setJsonLd = (html, graph) => {
  const replacement = `<script id="seo-jsonld-global" type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  })}</script>`;

  return html.replace(
    /<script\s+id="seo-jsonld-global"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    replacement,
  );
};

const htmlForRoute = (template, route) => {
  const url = absoluteUrl(route.path === "/404" ? "/" : route.path);
  const robots = route.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  let html = template;
  html = setTitle(html, route.title);
  html = setCanonical(html, url);
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "name", "robots", robots);
  html = setMeta(html, "name", "googlebot", robots);
  html = setMeta(html, "name", "application-name", siteName);
  html = setMeta(html, "name", "theme-color", "#172f24");
  html = setMeta(html, "property", "og:type", route.type);
  html = setMeta(html, "property", "og:locale", "en_US");
  html = setMeta(html, "property", "og:site_name", siteName);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:image", ogImage);
  html = setMeta(html, "property", "og:image:url", ogImage);
  html = setMeta(html, "property", "og:image:type", "image/jpeg");
  html = setMeta(html, "property", "og:image:width", "1200");
  html = setMeta(html, "property", "og:image:height", "630");
  html = setMeta(html, "property", "og:image:alt", imageAlt);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:domain", "palmyrasiargao.com");
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = setMeta(html, "name", "twitter:image", ogImage);
  html = setMeta(html, "name", "twitter:image:alt", imageAlt);
  html = setJsonLd(html, schemaForRoute(route));
  return html;
};

const writeRouteHtml = async (template, route) => {
  const html = htmlForRoute(template, route);
  const targetPath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : route.path === "/404"
        ? path.join(distDir, "404.html")
        : path.join(distDir, route.path.slice(1), "index.html");

  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, html, "utf8");
};

const writeSitemap = async () => {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join("\n");

  await writeFile(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    "utf8",
  );
};

const main = async () => {
  const template = await readFile(path.join(distDir, "index.html"), "utf8");

  for (const route of routes) {
    await writeRouteHtml(template, route);
  }

  await writeRouteHtml(template, notFoundRoute);
  await writeSitemap();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
