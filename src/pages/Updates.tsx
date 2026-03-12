import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { updatesContent } from "@/content/updatesContent";

const Updates = () => {
  const timelineTrackRef = useRef<HTMLDivElement | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineCount = updatesContent.timeline.length;

  const isCircleFilled = (index: number) => {
    if (timelineCount <= 1) return timelineProgress >= 0.5;
    const threshold = index === 0 ? 0.06 : index / (timelineCount - 1);
    return timelineProgress >= threshold;
  };

  useEffect(() => {
    let rafId = 0;
    let framePending = false;

    const updateTimelineProgress = () => {
      framePending = false;
      const track = timelineTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const anchorY = window.innerHeight * 0.44; // A bit above center for more intuitive progress
      const usableHeight = Math.max(rect.height, 1);
      const rawProgress = (anchorY - rect.top) / usableHeight;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setTimelineProgress((prev) =>
        Math.abs(prev - clampedProgress) < 0.001 ? prev : clampedProgress,
      );
    };

    const scheduleUpdate = () => {
      if (framePending) return;
      framePending = true;
      rafId = window.requestAnimationFrame(updateTimelineProgress);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <main className="pt-24">
      {/* ── Section 1: Overview + Current Status ── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              {updatesContent.hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl leading-tight mb-8 max-w-3xl">
              {updatesContent.hero.title}
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              {updatesContent.hero.description}
            </p>
          </ScrollReveal>
          <div className="mb-6 flex justify-end">
            <p className="font-body text-sm text-muted-foreground">
              Last verified: {updatesContent.status.lastVerified}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-sm border border-buttered-rum/40 bg-[#F4F6F3] p-8 h-full shadow-[0_14px_35px_rgba(21,47,36,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(21,47,36,0.12)]">
                <span className="absolute left-0 right-0 top-0 h-1 bg-buttered-rum" />
                <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Current Phase
                </p>
                <p className="font-heading text-2xl md:text-[1.9rem] leading-tight text-foreground">
                  {updatesContent.status.currentPhase.title}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-3">
                  Buyer/Investor note: Planning and coordination are active ahead of major execution milestones.
                </p>
                <p className="font-body text-sm text-muted-foreground mt-6 border-t border-foreground/10 pt-4">
                  Date Started: {updatesContent.status.currentPhase.dateStarted}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="group relative overflow-hidden rounded-sm border border-primary/40 bg-[#F4F6F3] p-8 h-full shadow-[0_14px_35px_rgba(21,47,36,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(21,47,36,0.12)]">
                <span className="absolute left-0 right-0 top-0 h-1 bg-primary" />
                <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Next Milestone
                </p>
                <p className="font-heading text-2xl md:text-[1.9rem] leading-tight text-foreground">
                  {updatesContent.status.nextMilestone.title}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-3">
                  Buyer/Investor note: Permit and compliance progress is the next key confidence checkpoint.
                </p>
                <p className="font-body text-sm text-muted-foreground mt-6 border-t border-foreground/10 pt-4">
                  Planned Date: {updatesContent.status.nextMilestone.plannedDate}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Timeline ── */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl leading-tight mb-14 max-w-2xl">
            Project timeline
          </h2>
          <div ref={timelineTrackRef} className="relative">

          {/* Mobile timeline */}
          <div className="md:hidden relative max-w-2xl">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-primary-foreground/20" />
            <div
              className="absolute left-2 top-0 w-px bg-buttered-rum"
              style={{ height: `${timelineProgress * 100}%` }}
            />
            <div className="space-y-8">
              {updatesContent.timeline.map((item, i) => (
                <article key={`${item.title}-${item.date}`} className="relative pl-10">
                  <span
                    className={`absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-buttered-rum transition-colors duration-200 ${
                      isCircleFilled(i) ? "bg-buttered-rum" : "bg-primary"
                    }`}
                  />
                  <p className="font-heading text-2xl leading-none mb-3 text-primary-foreground/90">
                    {item.date}
                  </p>
                  <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--buttered-rum-light))] mb-2">
                    {item.type}
                  </p>
                  <h3 className="text-xl leading-tight mb-3">{item.title}</h3>
                  <p className="font-body text-base text-primary-foreground/75 leading-relaxed">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20 -translate-x-1/2" />
            <div
              className="absolute left-1/2 top-0 w-px bg-buttered-rum -translate-x-1/2"
              style={{ height: `${timelineProgress * 100}%` }}
            />
            {updatesContent.timeline.map((item, i) => (
              <article key={`${item.title}-${item.date}`} className="relative grid grid-cols-[1fr_auto_1fr] items-start py-10 lg:py-12">
                <div className="pr-12 text-right">
                  <p className="font-heading text-4xl lg:text-5xl leading-none text-primary-foreground/90">
                    {item.date}
                  </p>
                </div>

                <div className="relative z-10 flex justify-center pt-2">
                  <span
                    className={`h-5 w-5 rounded-full border-4 border-buttered-rum transition-colors duration-200 ${
                      isCircleFilled(i) ? "bg-buttered-rum" : "bg-primary"
                    }`}
                  />
                </div>

                <div className="pl-12">
                  <p className="font-label text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--buttered-rum-light))] mb-2">
                    {item.type}
                  </p>
                  <h3 className="text-2xl leading-tight mb-4">{item.title}</h3>
                  <p className="font-body text-lg text-primary-foreground/75 leading-relaxed max-w-xl">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: CTA ── */}
      <section className="py-24 lg:py-36 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              For Investors
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Subscribe for investor-focused updates and request the investor brief directly from the team.
            </p>
            <Link
              to="/connect?type=investor"
              className="inline-flex items-center justify-center font-label text-sm uppercase tracking-widest border border-primary bg-primary text-primary-foreground px-8 py-3 transition-all duration-300 hover:border-buttered-rum hover:bg-buttered-rum hover:text-white"
            >
              Get Investor Updates
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Updates;
