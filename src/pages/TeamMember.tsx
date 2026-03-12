import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { getInitials, peopleGroups } from "@/content/aboutPeople";
import type { Person, PeopleGroup } from "@/content/aboutPeople";
import { ArrowLeft, ArrowRight, Briefcase, TrendingUp } from "lucide-react";

const findPersonBySlug = (
  slug: string
): { person: Person; group: PeopleGroup } | null => {
  for (const group of peopleGroups) {
    for (const person of group.people) {
      if (person.slug === slug) {
        return { person, group };
      }
    }
  }
  return null;
};

const TeamMember = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/team" replace />;

  const result = findPersonBySlug(slug);
  if (!result) return <Navigate to="/team" replace />;

  const { person, group } = result;
  const headshot = person.headshot;
  const hasAccolades = Boolean(person.accolades?.length);
  const membersWithProfiles = group.people.filter(
    (member): member is Person & { slug: string } => Boolean(member.slug)
  );
  const currentMemberIndex = membersWithProfiles.findIndex(
    (member) => member.slug === person.slug
  );
  const nextMember =
    currentMemberIndex >= 0 && currentMemberIndex < membersWithProfiles.length - 1
      ? membersWithProfiles[currentMemberIndex + 1]
      : null;
  const bioParagraphs = (person.fullBio || person.bio)
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const sideDetails = [
    {
      title: "Leadership Snapshot",
      icon: <Briefcase className="h-4.5 w-4.5 text-buttered-rum" aria-hidden="true" />,
      items: person.leadershipSnapshot ?? [],
    },
    {
      title: "Impact & Focus",
      icon: <TrendingUp className="h-4.5 w-4.5 text-buttered-rum" aria-hidden="true" />,
      items: person.impactFocus ?? [],
    },
  ].filter((detail) => detail.items.length > 0);

  return (
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-primary text-primary-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(184,138,77,0.2),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_78%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1120px] px-6 lg:px-12">
          <Link
            to="/team#team-people"
            state={{ restoreTeamScroll: true }}
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-primary-foreground/75 hover:text-primary-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Team
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <ScrollReveal className="lg:order-2" direction="right">
              <h1 className="text-3xl md:text-5xl leading-tight mb-5">
                {person.name}
              </h1>
              <p className="font-subhead text-sm md:text-base uppercase tracking-widest text-buttered-rum">
                {person.role}
              </p>
              <div className="mt-5 mb-6 h-px w-16 bg-buttered-rum/90" />
              <p className="font-body text-base md:text-lg text-primary-foreground/78 leading-relaxed max-w-[56ch]">
                {person.bio}
              </p>
            </ScrollReveal>
            <ScrollReveal className="lg:order-1" delay={0.12} direction="left">
              <div className="aspect-[4/5] rounded-sm overflow-hidden w-full max-w-[420px] lg:max-w-[460px] mr-auto">
                {headshot ? (
                  <img
                    src={headshot}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/75 flex items-center justify-center">
                    <span className="font-subhead text-5xl md:text-6xl text-primary-foreground/90">
                      {getInitials(person.name)}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="member-story" className="scroll-mt-40 py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div
              className={`grid grid-cols-1 gap-10 lg:gap-12 ${
                sideDetails.length > 0
                  ? "lg:grid-cols-[300px_minmax(0,1fr)] max-w-[1120px] mx-auto"
                  : ""
              }`}
            >
              {sideDetails.length > 0 && (
                <aside className="space-y-6 lg:max-w-[300px]">
                  {sideDetails.map((detail) => (
                    <article
                      key={detail.title}
                      className="rounded-sm border border-buttered-rum/45 bg-card p-6"
                    >
                      <h3 className="font-subhead text-xl text-foreground flex items-center gap-2.5">
                        {detail.icon}
                        {detail.title}
                      </h3>
                      <ul className="mt-5 list-disc pl-5 space-y-2.5 marker:text-foreground/40">
                        {detail.items.map((item) => (
                          <li key={item} className="font-body text-sm text-muted-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </aside>
              )}

              <div className={sideDetails.length > 0 ? "max-w-[70ch]" : "max-w-[70ch] mx-auto"}>
                <h2 className="text-3xl md:text-4xl leading-tight mb-8">
                  Story
                </h2>
                <div className="space-y-7">
                  {bioParagraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-body text-base md:text-lg text-muted-foreground leading-[1.9]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {hasAccolades && (
                  <div id="member-accolades" className="scroll-mt-40 mt-12">
                    <p className="font-label text-xs uppercase tracking-widest text-buttered-rum mb-4">
                      Accolades
                    </p>
                    <ul className="list-disc pl-6 space-y-2.5">
                      {person.accolades.map((accolade, i) => (
                        <li key={i} className="font-body text-base text-muted-foreground">
                          {accolade}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {nextMember && (
                  <div className="mt-12 pt-8 border-t border-foreground/15">
                    <p className="font-label text-xs uppercase tracking-widest text-buttered-rum mb-4">
                      Continue Reading
                    </p>
                    <Link
                      to={`/team/${nextMember.slug}`}
                      className="btn-cta-v2-inverse inline-flex items-center gap-2 text-xs px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-buttered-rum focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Next profile: {nextMember.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Get to know the full team
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
              Explore the people and partners behind PALMYRA Siargao, or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/team#team-people"
                state={{ restoreTeamScroll: true }}
                className="btn-cta-dark-secondary w-full sm:w-[256px] text-sm px-8 py-3"
              >
                Back to Team
              </Link>
              <Link
                to="/connect"
                className="btn-cta-v1 w-full sm:w-[256px] text-sm px-8 py-3"
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

export default TeamMember;
