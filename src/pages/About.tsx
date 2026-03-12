import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import aboutIntro from "@/assets/pages/about/about-intro.webp";
import visionNature from "@/assets/pages/about/vision-nature.webp";
import visionStillness from "@/assets/pages/about/vision-stillness.webp";
import visionElegance from "@/assets/pages/about/vision-elegance.webp";
import visionCulture from "@/assets/pages/about/vision-culture.webp";
import visionWarmth from "@/assets/pages/about/vision-warmth.webp";
import placeLocation from "@/assets/pages/about/place-location.webp";
import galleryAbout from "@/assets/pages/about/gallery/about.webp";
import galleryBoardwalk from "@/assets/pages/about/gallery/boardwalk.webp";
import galleryCascading from "@/assets/pages/about/gallery/cascading.webp";
import galleryClubhouse from "@/assets/pages/about/gallery/clubhouse.webp";
import galleryCommercialSide from "@/assets/pages/about/gallery/commercial-side.webp";
import galleryCommercialTouristView from "@/assets/pages/about/gallery/commercial-tourist-view.webp";
import galleryCommercial from "@/assets/pages/about/gallery/commerical.webp";
import galleryCondo from "@/assets/pages/about/gallery/condo.webp";
import galleryConnect from "@/assets/pages/about/gallery/connect.webp";
import galleryDropoff from "@/assets/pages/about/gallery/dropoff.webp";
import galleryHouses from "@/assets/pages/about/gallery/houses.webp";
import galleryReception from "@/assets/pages/about/gallery/reception.webp";

const values = [
  {
    title: "Nature",
    desc: "Every design decision defers to the island, its canopy, coast, and calm.",
    img: visionNature,
    alt: "Sunlight filtering through tropical jungle canopy",
  },
  {
    title: "Stillness",
    desc: "Spaces are shaped by quiet intention, not excess.",
    img: visionStillness,
    alt: "Minimalist open-air pavilion overlooking the ocean",
  },
  {
    title: "Elegance",
    desc: "Tropical modernism refined through restraint and natural materials.",
    img: visionElegance,
    alt: "Modern tropical architecture with natural wood and stone",
  },
  {
    title: "Culture",
    desc: "Siargao heritage is woven into community, not treated as decoration.",
    img: visionCulture,
    alt: "Filipino fishermen on traditional boat at sunrise",
  },
  {
    title: "Warmth",
    desc: "Filipino hospitality remains at the center of every interaction.",
    img: visionWarmth,
    alt: "Fresh tropical fruit served with care",
  },
];

const architecturalGallery = [
  { src: galleryAbout, alt: "Architectural overview perspective of PALMYRA Siargao" },
  { src: galleryBoardwalk, alt: "Boardwalk architectural perspective" },
  { src: galleryCascading, alt: "Cascading water and landscape perspective" },
  { src: galleryClubhouse, alt: "Clubhouse architectural perspective" },
  { src: galleryCommercialSide, alt: "Commercial strip side elevation perspective" },
  { src: galleryCommercialTouristView, alt: "Commercial and tourist-facing area perspective" },
  { src: galleryCommercial, alt: "Commercial zone architectural perspective" },
  { src: galleryCondo, alt: "Condominium building perspective" },
  { src: galleryConnect, alt: "Pedestrian connectivity perspective" },
  { src: galleryDropoff, alt: "Main drop-off and arrival perspective" },
  { src: galleryHouses, alt: "Residential houses perspective" },
  { src: galleryReception, alt: "Reception area architectural perspective" },
];

const About = () => {
  return (
    <main className="pt-[88px]">
      {/* ── Section 1: Intro ── */}
      <section id="about-intro" className="scroll-mt-40 py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                About Us
              </p>
              <h1 className="text-3xl md:text-5xl leading-tight mb-8">
                Born from reverence for a place unlike any other
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                PALMYRA Siargao began as a question: what would it mean to build something truly worthy of Siargao? Not to impose upon the island, but to listen to it and let its rhythm shape every decision.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                The result is a sanctuary where modern comfort meets island soul, and where stewardship, design, and community are treated as one discipline.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} direction="right">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={aboutIntro}
                  alt="Aerial view of a tropical island with turquoise waters and lush palm trees"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: Values ── */}
      <section id="about-values" className="scroll-mt-40 py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center">
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-16 max-w-3xl mx-auto">
              What Guides Every Decision We Make
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.05}>
                <article className="group border border-primary-foreground/20 bg-primary-foreground/[0.04] h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={value.img}
                      alt={value.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="font-subhead text-xs uppercase tracking-widest text-[hsl(var(--buttered-rum-light))] mb-3">
                      0{index + 1}
                    </p>
                    <h3 className="text-2xl leading-tight mb-3 text-[hsl(var(--buttered-rum-light))]">{value.title}</h3>
                    <p className="font-body text-sm text-primary-foreground/78 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Place ── */}
      <section id="about-place" className="scroll-mt-40 py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src={placeLocation}
                  alt="Aerial view of Siargao island coastline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12} direction="right">
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">
                The Place
              </p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-6">
                Barangay Cancohoy, Del Carmen
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
                PALMYRA Siargao sits 7–10 minutes from Sayak Airport, near the Port of Del Carmen and inter-island ferry terminals, balancing island serenity with practical connectivity.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Del Carmen remains deeply connected to nature and community, a setting that anchors PALMYRA Siargao's long-term vision for thoughtful island living.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Architectural Gallery ── */}
      <section id="about-gallery" className="scroll-mt-40 pt-16 bg-deep-fir text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <p className="font-subhead text-xs uppercase tracking-widest text-[hsl(var(--buttered-rum-light))] mb-4">
              Architectural Perspectives
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-4">
              A visual preview of PALMYRA Siargao
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed">
              Conceptual views showing key spaces across arrival, residences, amenities, and commercial areas.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {architecturalGallery.map((image, index) => (
            <ScrollReveal key={image.alt} delay={index * 0.03}>
              <figure className="aspect-[4/3] overflow-hidden rounded-sm border border-primary-foreground/12 bg-primary-foreground/[0.04]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Meet the team behind PALMYRA Siargao
            </h2>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-12">
              Explore the leadership, technical specialists, and partner companies shaping PALMYRA Siargao from concept to delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/team"
                className="btn-cta-v1 w-full sm:w-[220px] text-sm px-8 py-3"
              >
                View Team
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

export default About;
