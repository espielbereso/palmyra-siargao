import ScrollReveal from "@/components/ScrollReveal";
import visionNature from "@/assets/pages/about/vision-nature.webp";
import visionStillness from "@/assets/pages/about/vision-stillness.webp";
import visionElegance from "@/assets/pages/about/vision-elegance.webp";
import visionCulture from "@/assets/pages/about/vision-culture.webp";
import visionWarmth from "@/assets/pages/about/vision-warmth.webp";
import placeLocation from "@/assets/pages/about/place-location.webp";

const visionValues = [
  { title: "Nature", desc: "Every design decision defers to the island — its canopy, its coast, its calm.", img: visionNature, alt: "Sunlight filtering through tropical jungle canopy" },
  { title: "Stillness", desc: "Spaces shaped not by excess, but by the absence of distraction.", img: visionStillness, alt: "Minimalist open-air pavilion overlooking the ocean" },
  { title: "Elegance", desc: "Tropical modernism refined through restraint and natural materials.", img: visionElegance, alt: "Modern tropical architecture with natural wood and stone" },
  { title: "Culture", desc: "Siargao's heritage woven into the community — not as a theme, but as a truth.", img: visionCulture, alt: "Filipino fishermen on traditional boat at sunrise" },
  { title: "Warmth", desc: "Filipino hospitality at the heart of every encounter.", img: visionWarmth, alt: "Fresh tropical fruit served with care" },
];

const Story = () => {
  return (
    <main className="pt-24">
      {/* ── Section 1: Story Intro ── */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">Our Story</p>
            <h1 className="text-3xl md:text-5xl leading-tight mb-8">
              Born from reverence for a place unlike any other
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              PALMYRA Siargao began as a question: what would it mean to build something truly worthy of Siargao? Not to impose upon the island, but to listen to it — to let its rhythms, its light, and its spirit shape every decision.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              The answer is a sanctuary — a place where modern comfort meets island soul, where architecture breathes with the landscape, and where community is cultivated with the same care as the land itself.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Vision Sequence ── */}
      <section className="py-24 lg:py-36 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl mb-20 max-w-xl">Five truths that guide everything we build</h2>
          </ScrollReveal>
          <div className="space-y-24">
            {visionValues.map((value, i) => (
              <ScrollReveal key={i} delay={0.05}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-3">0{i + 1}</p>
                    <h3 className="text-2xl md:text-3xl mb-4">{value.title}</h3>
                    <p className="font-body text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-md">{value.desc}</p>
                  </div>
                  <div className={`aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img src={value.img} alt={value.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Place Narrative ── */}
      <section className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img src={placeLocation} alt="Aerial view of Siargao island coastline" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">The Place</p>
              <h2 className="text-3xl md:text-4xl leading-tight mb-6">
                Barangay Cancohoy, Del Carmen
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Nestled in the municipality of Del Carmen on Siargao Island, PALMYRA Siargao sits just 7–10 minutes from Sayak Airport. The site is close to the Port of Del Carmen and ferry terminals, connecting residents to the wider island and beyond.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                Del Carmen is the gateway to the Siargao's mangrove forests — the largest in the Philippines — and a community rooted in fishing, farming, and a deep connection to the sea.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Sustainability + WELLBUILD ── */}
      <section className="py-24 lg:py-36 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <ScrollReveal>
            <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">Built Responsibly</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-8">
              WELLBUILD Development Corporation
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              PALMYRA Siargao is brought to life by WELLBUILD Development Corporation, a firm committed to building with integrity, environmental sensitivity, and lasting quality. WELLBUILD approaches every project with a philosophy of stewardship — ensuring that what is built today will be valued for generations.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sustainability is not an add-on — it is embedded in the design, materials, construction methods, and community planning of PALMYRA Siargao from the ground up.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Story;
