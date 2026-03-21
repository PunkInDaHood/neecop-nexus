import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { LayoutDashboard, Landmark, Newspaper, ArrowRight, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    slug: "ncr-energy",
    icon: Zap,
    title: "NCR Energy Research Program",
    desc: "A joint research program with Kirori Mal College, surveying 100+ villages across NCR, Haryana, UP, and Rajasthan. We are mapping power usage patterns and the impact of smart meters, decentralized renewables, and battery storage systems on rural energy stability.",
  },
  {
    slug: "india-europe-dialogue",
    icon: Globe,
    title: "India Europe Economic Policy Dialogue",
    desc: "A strategic research platform bridging academic insights from Kirori Mal College with international policy frameworks. We focus on enhancing bilateral trade foundations, green energy cooperation, and technological research in AI and Semiconductors.",
  },
  {
    slug: "delhi-startup-policy",
    icon: Landmark,
    title: "Draft Delhi Startup Policy 2025",
    desc: "Facilitating high-level stakeholder research to propose a ₹200-crore Startup VC Fund, founder stipends (₹30k/50k), and 100% patent reimbursements. Our goal is to nurture 5,000+ startups in AI, Green Energy, and Drones by 2035.",
  },
];

const Initiatives = () => {
  return (
    <>
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-12 h-1 bg-secondary mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Our Work</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed font-light">
            Strategic programs designed to drive systemic change in India's startup ecosystem through rigorous field research and institutional consultation.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.title} className="premium-card bg-card rounded-xl p-8 md:p-12 shadow-card border border-border">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                  <Button variant="link" className="p-0 text-secondary gap-1" asChild>
                    <Link to={`/initiatives/${item.slug}`}>Learn More <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Initiatives;
