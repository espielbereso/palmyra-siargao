import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { getInitials, partnerCompanies, peopleGroups } from "@/content/aboutPeople";
import type { Person } from "@/content/aboutPeople";
import teamIntro from "@/assets/pages/team/team-intro.webp";
import palmyraWordmark from "@/assets/pages/team/palmyra-wordmark-buttered-rum.png";

// Partner logo imports
import logoRbcatubig from "@/assets/pages/team/partners/rbcatubig-architects-logo.png";
import logoLopo from "@/assets/pages/team/partners/lopo-ortega-and-co-cpa-logo-horizontal.webp";
import logoTorreonLaw from "@/assets/pages/team/partners/torreon-law-horizontal.webp";
import logoWellbuildPartners from "@/assets/pages/team/partners/wellbuild-logo1-official.png";
import logoWellbuildIncorporators from "@/assets/pages/team/partners/wellbuild-logo-official.png";

const partnerLogoMap: Record<string, string> = {
  "WELLBUILD Development Corporation": logoWellbuildPartners,
  "RBCatubig Architects": logoRbcatubig,
  "Lopo, Ortega and Co., CPA": logoLopo,
  "The Law Firm of Torreon and Partners": logoTorreonLaw,
};

const allPeople = peopleGroups.flatMap((group) => group.people);

type TeamPerson = Person;

const getPerson = (namePart: string): TeamPerson | undefined =>
  allPeople.find((person) => person.name.toLowerCase().includes(namePart.toLowerCase()));

const isPerson = (person: TeamPerson | undefined): person is TeamPerson => Boolean(person);

const incorporatorChair = getPerson("Lynie");
const incorporatorBoard = [getPerson("Deborah"), getPerson("Eglesciano"), getPerson("Mabel")].filter(isPerson);
const incorporatorOfficers = [
  getPerson("Laarni"),
  getPerson("Jedfrey"),
  getPerson("Aldrin"),
  getPerson("Archimedes"),
].filter(isPerson);
const projectLead = getPerson("Torreon");
const projectTeam = [
  getPerson("Emilie"),
  getPerson("John Michael"),
  getPerson("Alain"),
  getPerson("Peter"),
].filter(isPerson);

const TeamPersonCard = ({ person }: { person: TeamPerson }) => {
  const card = (
    <article className="group relative w-full max-w-[320px] border border-buttered-rum/70 bg-white p-2 shadow-[0_10px_28px_rgba(23,47,36,0.08)]">
      <div className="aspect-[4/4.8] overflow-hidden bg-secondary">
        {person.headshot ? (
          <img
            src={person.headshot}
            alt={person.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-primary text-3xl text-primary-foreground">
            {getInitials(person.name)}
          </div>
        )}
      </div>
      <div className="px-2 pb-2 pt-3 text-center">
        <h3 className="text-sm leading-tight md:text-base">{person.name}</h3>
        <p className="mt-1 font-label text-[9px] uppercase leading-snug tracking-[0.08em] text-muted-foreground md:text-[10px]">
          {person.role}
        </p>
      </div>
    </article>
  );

  return person.slug ? (
    <Link
      to={`/team/${person.slug}`}
      className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-buttered-rum focus-visible:ring-offset-4"
      onClick={() => sessionStorage.setItem("teamScrollY", String(window.scrollY))}
    >
      {card}
    </Link>
  ) : card;
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
              PALMYRA Siargao is delivered through trusted partners across development, architecture, planning, financial stewardship, and legal oversight.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {partnerCompanies.map((company, index) => {
              const ctaLabel = company.ctaLabel ?? "VISIT WEBSITE";
              const isExternalWebsite = Boolean(company.website && /^https?:\/\//.test(company.website));

              return (
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
                        target={isExternalWebsite ? "_blank" : undefined}
                        rel={isExternalWebsite ? "noreferrer" : undefined}
                        className="inline-block mt-auto font-label text-xs text-center uppercase tracking-widest border border-primary-foreground/30 px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                      >
                        {ctaLabel}
                      </a>
                    ) : (
                      <Link
                        to="/connect"
                        className="inline-block mt-auto font-label text-xs uppercase tracking-widest border border-primary-foreground/30 px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                      >
                        {ctaLabel}
                      </Link>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Brochure-inspired organization */}
      <section id="team-people" className="scroll-mt-40 overflow-hidden bg-[#f8f7f4] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="font-subhead text-xs uppercase tracking-[0.2em] text-buttered-rum mb-4">
              The People Behind the Vision
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">Leadership and project development team</h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Meet the leaders, specialists, and partners bringing WELLBUILD Development Corporation and PALMYRA Siargao to life.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-20 max-w-7xl">
            <ScrollReveal className="text-center">
              <img
                src={logoWellbuildIncorporators}
                alt="WELLBUILD Development Corporation"
                className="mx-auto h-auto w-full max-w-[360px] object-contain"
              />
              <h3 className="mt-8 text-2xl uppercase tracking-[0.12em] md:text-3xl">The Incorporators</h3>
            </ScrollReveal>

            {incorporatorChair && (
              <ScrollReveal className="mt-8 flex justify-center">
                <TeamPersonCard person={incorporatorChair} />
              </ScrollReveal>
            )}

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
              {incorporatorBoard.map((person, index) => (
                <ScrollReveal key={person.name} delay={index * 0.06}>
                  <TeamPersonCard person={person} />
                </ScrollReveal>
              ))}
            </div>

            <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {incorporatorOfficers.map((person, index) => (
                <ScrollReveal key={person.name} delay={index * 0.06}>
                  <TeamPersonCard person={person} />
                </ScrollReveal>
              ))}
            </div>

            <div className="mx-auto my-20 h-px max-w-5xl bg-buttered-rum/35" aria-hidden="true" />

            <ScrollReveal className="text-center">
              <img
                src={palmyraWordmark}
                alt="PALMYRA Siargao"
                className="mx-auto mb-5 h-auto w-full max-w-[280px] object-contain"
              />
              <h3 className="text-2xl uppercase tracking-[0.1em] md:text-3xl">Project Development Team</h3>
            </ScrollReveal>

            {projectLead && (
              <ScrollReveal className="mt-8 flex justify-center">
                <TeamPersonCard person={projectLead} />
              </ScrollReveal>
            )}

            <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {projectTeam.map((person, index) => (
                <ScrollReveal key={`${person.name}-project`} delay={index * 0.06}>
                  <TeamPersonCard person={person} />
                </ScrollReveal>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center font-label text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
              Select a profile to learn more about each member's role and experience.
            </p>
          </div>
        </div>
      </section>


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
