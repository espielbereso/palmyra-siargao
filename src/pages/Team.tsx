import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { getInitials, partnerCompanies, peopleGroups } from "@/content/aboutPeople";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Briefcase, Cog, Compass, Scale, Users } from "lucide-react";
import teamIntro from "@/assets/pages/team/team-intro.webp";
import orgChartImage from "@/assets/pages/team/wdc-palmyra-org-chart.png";

// Partner logo imports
import logoWellbuild from "@/assets/pages/team/partners/wellbuild-logo.png";
import logoRbcatubig from "@/assets/pages/team/partners/rbcatubig-architects-logo.png";
import logoLopo from "@/assets/pages/team/partners/lopo-ortega-and-co-cpa-logo.webp";


const groupIcons: Record<string, LucideIcon> = {
  "WELLBUILD Leadership": Users,
  "Design & Architecture": Compass,
  "Engineering & Technical": Cog,
  "Finance, Legal & Compliance": Scale,
  "Project Delivery & Operations": Briefcase,
};

const partnerLogoMap: Record<string, string> = {
  "WELLBUILD Development Corporation": logoWellbuild,
  "RBCatubig Architects": logoRbcatubig,
  "Lopo, Ortega and Co., CPA": logoLopo,
};

const Team = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { restoreTeamScroll?: boolean } | null;
    if (!state?.restoreTeamScroll) return;

    const savedScroll = sessionStorage.getItem("teamScrollY");
    sessionStorage.removeItem("teamScrollY");
    if (!savedScroll) return;

    const top = Number(savedScroll);
    if (Number.isNaN(top)) return;

    const timerId = window.setTimeout(() => {
      window.scrollTo({ top, left: 0, behavior: "auto" });
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [location.state]);

  const handleProfileOpen = () => {
    sessionStorage.setItem("teamScrollY", String(window.scrollY));
  };

  return (
    <main className="pt-[88px]">
      {/* Section 1: Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="lg:order-1" direction="left">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Meet the Team
              </p>
              <h1 className="text-3xl md:text-5xl leading-tight mb-8">
                The people and partners shaping PALMYRA Siargao
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                PALMYRA Siargao is built by a cross-disciplinary team spanning leadership, architecture, engineering, finance, legal, and operations, working in one coordinated delivery model.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                This page provides a clear view of key organizations and specialists involved in project delivery.
              </p>
            </ScrollReveal>
            <ScrollReveal className="lg:order-2" delay={0.12} direction="right">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src={teamIntro}
                  alt="Professional team collaborating in a modern tropical office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Companies */}
      <section id="team-partners" className="scroll-mt-40 py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              Partner Companies
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6 max-w-3xl">
              Key organizations involved in project delivery
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-3xl mb-14">
              PALMYRA Siargao is delivered through trusted partners across development, architecture, planning, and financial oversight.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {partnerCompanies.map((company, index) => (
              <ScrollReveal key={company.name} delay={index * 0.05}>
                <article className="h-full border border-primary-foreground/20 bg-primary-foreground/[0.04] p-6 flex flex-col">
                  <div className="mb-6 h-32 md:h-36 px-1 md:px-2 flex items-center justify-center">
                    {partnerLogoMap[company.name] ? (
                      <img
                        src={partnerLogoMap[company.name]}
                        alt={`${company.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-label text-[10px] uppercase tracking-[0.18em] text-primary/60">
                        Logo Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl leading-tight mb-2">{company.name}</h3>
                  <p className="font-label text-xs uppercase tracking-widest text-[hsl(var(--buttered-rum-light))] mb-4">
                    {company.role}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/75 leading-relaxed mb-6 min-h-[66px]">
                    {company.description}
                  </p>
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-auto font-label text-xs text-center uppercase tracking-widest border border-primary-foreground/30 px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                    >
                      VISIT WEBSITE
                    </a>
                  ) : (
                    <Link
                      to="/connect"
                      className="inline-block mt-auto font-label text-xs uppercase tracking-widest border border-primary-foreground/30 px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                    >
                      VISIT WEBSITE
                    </Link>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: People */}
      <section id="team-people" className="scroll-mt-40 py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              People Involved
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6 max-w-3xl">
              Team, Technical Experts, and Project Leaders
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-16">
              Every phase of PALMYRA Siargao is supported by specialists who ensure design quality, operational discipline, and long-term value.
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {peopleGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <ScrollReveal delay={groupIndex * 0.04}>
                  <div className="flex items-center gap-3 mb-3">
                    {(() => {
                      const Icon = groupIcons[group.title] ?? Users;
                      return <Icon className="h-5 w-5 shrink-0 text-buttered-rum" aria-hidden="true" />;
                    })()}
                    <h3 className="text-2xl md:text-3xl leading-tight">{group.title}</h3>
                  </div>
                  <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                    {group.description}
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
                  {group.people.map((person, personIndex) => {
                    const isClickable = Boolean(person.slug);
                    const card = (
                      <article className="group relative overflow-hidden rounded-sm border border-foreground/10 bg-foreground/5 aspect-[4/5]">
                        {person.headshot ? (
                          <img
                            src={person.headshot}
                            alt={person.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-primary/75 flex items-center justify-center">
                            <span className="font-subhead text-3xl md:text-4xl text-primary-foreground/90">
                              {getInitials(person.name)}
                            </span>
                          </div>
                        )}
                        {isClickable && (
                          <ArrowUpRight
                            className="absolute bottom-4 right-4 z-10 h-6 w-6 text-primary-foreground/95 transition-transform duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                          <h4 className="font-subhead text-lg leading-tight text-primary-foreground mb-2">
                            {person.name}
                          </h4>
                          <p className="font-label text-[11px] uppercase tracking-widest text-primary-foreground/85 max-w-[95%]">
                            {person.role}
                          </p>
                        </div>
                      </article>
                    );

                    return (
                      <ScrollReveal key={`${group.title}-${person.name}`} delay={personIndex * 0.03}>
                        {person.slug ? (
                          <Link
                            to={`/team/${person.slug}`}
                            className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-buttered-rum focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            onClick={handleProfileOpen}
                          >
                            {card}
                          </Link>
                        ) : (
                          card
                        )}
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Organizational Chart */}
      {/* <section id="team-org-chart" className="mb-24 lg:mb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <div
                className="mx-auto mb-12 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                aria-hidden="true"
              />
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Organizational Structure
              </p>
              <h4 className="text-2xl md:text-3xl leading-tight mb-6">
                WELLBUILD x PALMYRA Siargao Organizational Chart
              </h4>
              <figure className="mx-auto max-w-6xl rounded-sm border border-foreground/15 bg-foreground/[0.03] overflow-hidden">
                <a
                  href={orgChartImage}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                  aria-label="Open organizational chart in full size"
                >
                  <img
                    src={orgChartImage}
                    alt="WELLBUILD Development Corporation x PALMYRA Siargao Resort and Residences organizational chart"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </a>
              </figure>
              <p className="mt-4 font-label text-[11px] uppercase tracking-widest text-muted-foreground">
                Click image to view full size
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section> */}


      {/* Section 5: CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">Explore the residences at PALMYRA Siargao</h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
              See the residential offerings, unit types, and lifestyle features designed for long-term island living.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/residences"
                className="btn-cta-v1 w-full sm:w-[256px] text-sm px-8 py-3"
              >
                Explore Residences
              </Link>
              <Link
                to="/connect"
                className="btn-cta-dark-secondary w-full sm:w-[256px] text-sm px-8 py-3"
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

export default Team;
