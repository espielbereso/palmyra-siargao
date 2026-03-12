import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Award, BadgeCheck, Newspaper, TrendingUp } from "lucide-react";
import heroVideoMp4 from "@/assets/pages/home/hero-video-bg.mp4";
import brandPromise from "@/assets/pages/home/brand-promise.webp";
import tileAbout from "@/assets/pages/home/tile-about.webp";
import tileLive from "@/assets/pages/home/tile-live.webp";
import tileUpdate from "@/assets/pages/home/tile-update.webp";

const islandMomentumStats = [
  {
    stat: "#1 Island",
    desc: "Condé Nast Traveler, 2019",
    icon: Award,
  },
  {
    stat: "Top 100",
    desc: "TIME's Greatest Places, 2021",
    icon: BadgeCheck,
  },
  {
    stat: "Featured",
    desc: "Travel + Leisure, 2024",
    icon: Newspaper,
  },
  {
    stat: "300%+",
    desc: "Tourist-arrival growth, 2022–2023",
    icon: TrendingUp,
  },
];

const participationPaths = [
  {
    label: "Our Story",
    title: "About",
    desc: "Learn the vision, values, and place that shape PALMYRA Siargao, then explore the team behind the project.",
    cta: "Learn About Us",
    link: "/about",
    img: tileAbout,
    alt: "Palm-lined tropical retreat representing PALMYRA Siargao's story and vision",
    featured: false,
  },
  {
    label: "Lifestyle",
    title: "Live",
    desc: "Make the island your home, with residences designed for privacy, stillness, and long-term value.",
    cta: "Explore Residences",
    link: "/residences",
    img: tileLive,
    alt: "Modern tropical villa at dusk",
    featured: true,
  },
  {
    label: "Project Progress",
    title: "Updates",
    desc: "Follow confirmed milestones, development notes, and official project announcements in one place.",
    cta: "View Project Updates",
    link: "/updates",
    img: tileUpdate,
    alt: "Aerial view of island luxury development",
    featured: false,
  },
];

const Home = () => {
  const [isHeroVideoReady, setIsHeroVideoReady] = useState(false);

  return (
    <main>
      {/* ── Section 1: Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-deep-fir">
          <video
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHeroVideoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setIsHeroVideoReady(true)}
            aria-hidden="true"
          >
            <source src={heroVideoMp4} type="video/mp4" />
          </video>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHeroVideoReady ? "bg-deep-fir/60 opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-porcelain leading-tight mb-6">
              An island sanctuary,<br />quietly extraordinary
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-white/95 text-lg md:text-xl mb-12 drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
              Luxury residences on Siargao Island, Philippines
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <Link
              to="/connect"
              className="btn-cta-v1 text-sm md:text-base tracking-[0.22em] px-9 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              Get Project Updates
            </Link>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-porcelain/80">
          <span className="font-label text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <span className="h-8 w-px bg-porcelain/60 animate-scroll-cue" aria-hidden="true" />
        </div>
      </section>

      {/* ── Section 2: Brand Promise ── */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal delay={0.12} direction="left">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img src={brandPromise} alt="Sunlit tropical garden pathway through palm trees" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Brand Promise
              </p>
              <h2 className="text-4xl md:text-6xl leading-tight mb-8">
                A deliberate retreat<br />where nature leads
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                PALMYRA Siargao is not simply a place to live — it is a way of being. Rooted in Siargao's unhurried rhythm, each residence is designed to honour the island while offering a refined sanctuary for those who seek stillness, beauty, and belonging.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Siargao, Why Now ── */}
      <section className="py-24 lg:py-36 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center">
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              The Opportunity
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl mx-auto">
              Why Siargao. <span className="block md:inline">Why Now.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/72 leading-relaxed max-w-3xl mx-auto">
              Named one of the world's best islands by Condé Nast Traveler and TIME, Siargao is the Philippines' fastest-growing tourism destination, yet it remains beautifully underdeveloped.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {islandMomentumStats.map((item, i) => (
                <div key={i} className="text-center">
                  <item.icon className="h-5 w-5 text-[hsl(var(--buttered-rum-light))] mb-3 mx-auto" aria-hidden="true" />
                  <p className="font-heading text-3xl md:text-4xl text-[hsl(var(--buttered-rum-light))] mb-2">
                    {item.stat}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4: Live / Stay / Updates ── */}
      <section className="py-24 lg:py-32 border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="mb-16 max-w-3xl text-left">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                Choose Your Path
              </p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-6">
                3 ways to engage with PALMYRA Siargao
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you're exploring a residence, learning our story, or tracking project progress, choose the path that fits your goals.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {participationPaths.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link to={item.link} className="group block h-full">
                  <article className="h-full overflow-hidden border border-buttered-rum/50 bg-white shadow-[0_8px_24px_rgba(23,47,36,0.05)] transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col min-h-[190px] md:min-h-[205px]">
                      <p className="font-label text-[11px] uppercase tracking-[0.16em] text-buttered-rum mb-3">
                        {item.label}
                      </p>
                      <h3 className="font-heading text-2xl mb-3 group-hover:text-buttered-rum transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body text-[15px] md:text-base text-muted-foreground leading-relaxed flex-1 mb-5">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-foreground group-hover:text-buttered-rum transition-colors">
                        {item.cta}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Footer CTA ── */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Begin the conversation.
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
              Whether you're drawn to the lifestyle or the investment, we'd love to share more.
            </p>
            <Link
              to="/connect"
              className="btn-cta-v1 text-sm px-8 py-3"
            >
              Connect With Us
            </Link>
          </ScrollReveal>
          </div>
      </section>
    </main>
  );
};

export default Home;
