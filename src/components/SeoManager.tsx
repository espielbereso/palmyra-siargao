import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { peopleGroups } from "@/content/aboutPeople";
import type { Person } from "@/content/aboutPeople";

type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  type: "website" | "article" | "profile";
  noindex?: boolean;
  schema?: Record<string, unknown>[];
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const SITE_URL = "https://palmyrasiargao.com";
const SITE_NAME = "PALMYRA Siargao";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const membersBySlug = peopleGroups
  .flatMap((group) => group.people)
  .filter((person): person is Person & { slug: string } => Boolean(person.slug))
  .reduce<Record<string, Person & { slug: string }>>((acc, person) => {
    acc[person.slug] = person;
    return acc;
  }, {});

const getAbsoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

const getMetaForRoute = (pathname: string, search: string): SeoMeta => {
  if (pathname === "/") {
    return {
      title: "PALMYRA Siargao | Luxury Island Sanctuary Residences",
      description:
        "Discover PALMYRA Siargao, a conscious island sanctuary of luxury residences in Del Carmen, Siargao Island, Philippines.",
      canonicalPath: "/",
      type: "website",
    };
  }

  if (pathname === "/about") {
    return {
      title: "About PALMYRA Siargao | Vision, Values, and Place",
      description:
        "Learn the PALMYRA Siargao vision, values, and location in Del Carmen. See how design, stewardship, and community shape the project.",
      canonicalPath: "/about",
      type: "article",
    };
  }

  if (pathname === "/team") {
    return {
      title: "Team and Partners | PALMYRA Siargao",
      description:
        "Meet the leadership team, technical experts, and partner companies behind PALMYRA Siargao Resort and Residences.",
      canonicalPath: "/team",
      type: "profile",
    };
  }

  if (pathname.startsWith("/team/")) {
    const slug = pathname.replace("/team/", "").split("/")[0];
    const person = membersBySlug[slug];

    if (person) {
      const canonicalPath = `/team/${person.slug}`;
      const canonicalUrl = getAbsoluteUrl(canonicalPath);

      return {
        title: `${person.name} | PALMYRA Siargao Team`,
        description: person.bio,
        canonicalPath,
        type: "profile",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: canonicalUrl,
            name: `${person.name} | ${SITE_NAME} Team`,
            isPartOf: {
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            },
            mainEntity: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              description: person.bio,
              worksFor: {
                "@type": "Organization",
                name: "WELLBUILD Development Corporation",
              },
            },
          },
        ],
      };
    }
  }

  if (pathname === "/residences") {
    return {
      title: "Residences | PALMYRA Siargao",
      description:
        "Explore PALMYRA Siargao residences, unit types, amenities, and project highlights for refined tropical island living.",
      canonicalPath: "/residences",
      type: "article",
    };
  }

  if (pathname === "/updates") {
    return {
      title: "Project Updates | PALMYRA Siargao",
      description:
        "Track verified PALMYRA Siargao project milestones, current phase, and upcoming development updates.",
      canonicalPath: "/updates",
      type: "article",
    };
  }

  if (pathname === "/connect") {
    const isInvestor = new URLSearchParams(search).get("type") === "investor";

    return {
      title: isInvestor
        ? "Investor Inquiries | PALMYRA Siargao"
        : "Connect With PALMYRA Siargao",
      description: isInvestor
        ? "Request investor updates and project details from the PALMYRA Siargao team."
        : "Contact the PALMYRA Siargao team for project inquiries, updates, and next steps.",
      canonicalPath: "/connect",
      type: "website",
    };
  }

  return {
    title: "Page Not Found | PALMYRA Siargao",
    description: "The page you requested could not be found.",
    canonicalPath: pathname,
    type: "website",
    noindex: true,
  };
};

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  if (pathname === "/") return [{ name: "Home", path: "/" }];

  if (pathname.startsWith("/team/")) {
    const slug = pathname.replace("/team/", "").split("/")[0];
    const person = membersBySlug[slug];
    if (!person) return [];
    return [
      { name: "Home", path: "/" },
      { name: "Team", path: "/team" },
      { name: person.name, path: `/team/${slug}` },
    ];
  }

  const labelMap: Record<string, string> = {
    "/about": "About",
    "/team": "Team",
    "/residences": "Residences",
    "/updates": "Project Updates",
    "/connect": "Connect",
  };

  const label = labelMap[pathname];
  if (!label) return [];

  return [
    { name: "Home", path: "/" },
    { name: label, path: pathname },
  ];
};

const upsertMeta = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const upsertJsonLd = (id: string, payload: Record<string, unknown>[]) => {
  let tag = document.getElementById(id) as HTMLScriptElement | null;
  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(payload);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = getMetaForRoute(location.pathname, location.search);
    const canonicalUrl = getAbsoluteUrl(meta.canonicalPath);

    document.title = meta.title;
    upsertCanonical(canonicalUrl);

    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "googlebot", meta.noindex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:type", meta.type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:url", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:type", "image/jpeg");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta(
      "property",
      "og:image:alt",
      "PALMYRA Siargao island sanctuary residences",
    );

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
    upsertMeta(
      "name",
      "twitter:image:alt",
      "PALMYRA Siargao island sanctuary residences",
    );

    const breadcrumbItems = getBreadcrumbs(location.pathname);
    const commonSchema: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: meta.title,
        description: meta.description,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    ];

    if (breadcrumbItems.length > 1) {
      commonSchema.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: getAbsoluteUrl(item.path),
        })),
      });
    }

    const schema = meta.schema ? [...commonSchema, ...meta.schema] : commonSchema;
    upsertJsonLd("seo-jsonld-page", schema);
  }, [location.pathname, location.search]);

  return null;
};

export default SeoManager;
