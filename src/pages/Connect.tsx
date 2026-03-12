import { useSearchParams } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import InlineForm from "@/components/InlineForm";
import connect from "@/assets/pages/connect/connect.webp";

const Connect = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") === "investor" ? "investor" : "general";
  const isInvestor = defaultType === "investor";

  return (
    <main className="pt-20">
      {/* ── Section 1: Warm Invitation ── */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl xl:max-w-6xl xl:grid xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center xl:gap-14">
            <div>
              <ScrollReveal className="text-center xl:text-left mb-12" direction="left">
                <p className="font-subhead text-xs uppercase tracking-widest text-buttered-rum mb-4">Connect with Us</p>
                <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                  {isInvestor ? "Investor Inquiries" : "Connect with PALMYRA Siargao"}
                </h1>
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {isInvestor
                    ? "Request investor updates and key project details."
                    : "Share your inquiry and our team will get back to you soon."}
                </p>
              </ScrollReveal>

              {/* ── Section 2: Inline Form ── */}
              <ScrollReveal delay={0.1} className="mx-auto max-w-lg xl:mx-0" direction="left">
                <InlineForm variant="page" defaultType={defaultType as "general" | "investor"} />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.14} className="hidden xl:block xl:justify-self-center" direction="right">
              <div className="rounded-sm overflow-hidden border border-foreground/12">
                <img
                  src={connect}
                  alt="Siargao coastline view"
                  className="h-[560px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Connect;
