import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Compass, Layers3, MapPinned, ShieldCheck, Waves, Users, UtensilsCrossed } from "lucide-react";
import residencesOverview from "@/assets/pages/residences/residences-overview.webp";
import amenitiesImg from "@/assets/pages/residences/amenities.webp";
import unitStudio from "@/assets/pages/residences/unit-studio.webp";
import unitJunior1br from "@/assets/pages/residences/unit-junior-1br.webp";
import unit1br from "@/assets/pages/residences/unit-1br.webp";
import unit2br from "@/assets/pages/residences/unit-2br.webp";

const unitImages = [unitStudio, unitJunior1br, unit1br, unit2br];

const keyStats = [
  {
    value: "1.8 ha",
    label: "Land area",
    detail: "4.5 acres in Del Carmen",
    icon: MapPinned,
  },
  {
    value: "200+",
    label: "Residential units",
    detail: "Studio to 2-bedroom",
    icon: Building2,
  },
  {
    value: "5",
    label: "Low-rise buildings",
    detail: "Gated and security-focused",
    icon: Layers3,
  },
  {
    value: "2 phases",
    label: "Planned rollout",
    detail: "Delivered over 4-5 years",
    icon: Compass,
  },
];

const unitTypes = [
  {
    type: "Studio",
    desc: "Compact island living designed for efficiency, ease, and everyday light.",
    fit: "Ideal for first-time owners and short-term stays",
  },
  {
    type: "Junior 1-Bedroom",
    desc: "A step up in flexibility with more room for focused work and rest.",
    fit: "Ideal for remote professionals and long weekends",
  },
  {
    type: "1-Bedroom",
    desc: "Balanced comfort and privacy with a layout that supports daily rhythm.",
    fit: "Ideal for couples and extended island living",
  },
  {
    type: "2-Bedroom",
    desc: "Generous space for families, guests, or a dual live-and-host setup.",
    fit: "Ideal for family use and premium rental positioning",
  },
];

const amenities = [
  {
    title: "Pools and wellness decks",
    desc: "Water, movement, and recovery zones that support daily well-being.",
    icon: Waves,
  },
  {
    title: "Clubhouse and social lounges",
    desc: "Shared spaces for community gatherings and relaxed remote work.",
    icon: Users,
  },
  {
    title: "Food village and dining",
    desc: "Curated concepts including restaurants, cafe formats, and island flavors.",
    icon: UtensilsCrossed,
  },
  {
    title: "24/7 safety and stewardship",
    desc: "Security-oriented operations with long-term care in design and upkeep.",
    icon: ShieldCheck,
  },
];

const Residences = () => {
  return (
    <main className="pt-[88px]">
      {/* ── Section 1: Intro ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Explore The Residences
              </p>
              <h1 className="text-3xl md:text-5xl leading-tight mb-8">
                Island living, thoughtfully composed
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                PALMYRA Siargao Residences is Siargao's first integrated low-rise resort and residential community, designed to blend tropical stillness with refined everyday comfort.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                Across 1.8 hectares, each building and unit type is planned to support both lifestyle use and long-term value, with delivery paced in phases.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="aspect-[3/4] md:aspect-[4/3] rounded-sm overflow-hidden">
                <img src={residencesOverview} alt="Tropical modern low-rise residential building" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: At A Glance ── */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center">
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              Residences At A Glance
            </p>
            <h2 className="text-3xl md:text-5xl leading-tight mb-8 max-w-4xl mx-auto">
              A low-rise community shaped for calm, quality, and continuity
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-3xl mx-auto">
              From site planning to phased delivery, PALMYRA Siargao Residences balances scale and intimacy for residents, second-home buyers, and long-term stakeholders.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {keyStats.map((item) => (
                <div key={item.label} className="px-2 lg:px-4 text-center">
                  <item.icon className="h-5 w-5 text-[hsl(var(--buttered-rum-light))] mb-3 mx-auto" aria-hidden="true" />
                  <p className="font-heading text-3xl md:text-4xl text-[hsl(var(--buttered-rum-light))] mb-2">
                    {item.value}
                  </p>
                  <p className="font-label text-[11px] uppercase tracking-[0.16em] text-primary-foreground/72">
                    {item.label}
                  </p>
                  <p className="font-body text-xs text-primary-foreground/65 mt-2">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 3: Unit Types ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              Unit Types
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6 max-w-3xl">
              Homes for different rhythms of island living
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-14">
              Every layout is planned for tropical ventilation, natural light, and practical flexibility, from compact units to family-ready homes.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 auto-rows-fr gap-6">
            {unitTypes.map((unit, index) => (
              <ScrollReveal key={unit.type} delay={index * 0.06}>
                <article className="h-full md:min-h-[290px] border border-buttered-rum/45 bg-white overflow-hidden">
                  <div className="flex h-full flex-col sm:flex-row">
                    <div className="sm:w-2/5 min-h-[170px] sm:min-h-full border-b sm:border-b-0 sm:border-r border-foreground/10">
                      <img src={unitImages[index]} alt={`${unit.type} interior`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="sm:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                      <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-3">
                        0{index + 1}
                      </p>
                      <h3 className="text-2xl leading-tight mb-3">{unit.type}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                        {unit.desc}
                      </p>
                      <p className="font-label text-[11px] uppercase tracking-[0.14em] text-buttered-rum">
                        {unit.fit}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Amenities & Lifestyle ── */}
      <section className="py-20 lg:py-28 bg-background border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.1} direction="left">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img src={amenitiesImg} alt="Luxury tropical resort pool and clubhouse" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Lifestyle & Amenities
              </p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-8">
                A life designed around well-being
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Amenities are curated around daily rhythm and community flow, not excess, so residents can move between rest, wellness, and gathering with ease.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <article key={amenity.title} className="border border-foreground/10 bg-white px-4 py-4">
                    <div className="flex items-start gap-3">
                      <amenity.icon className="h-4.5 w-4.5 text-buttered-rum shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-subhead text-sm mb-1">{amenity.title}</h3>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">{amenity.desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Stay informed through project updates
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
              Track confirmed milestones, timeline progress, and official announcements as PALMYRA Siargao moves toward opening.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/updates"
                className="btn-cta-v1 w-full sm:w-[220px] text-sm px-8 py-3"
              >
                View Updates
              </Link>
              <Link
                to="/connect"
                className="btn-cta-dark-secondary w-full sm:w-[220px] text-sm px-8 py-3"
              >
                Connect With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Residences;
