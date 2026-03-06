import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Neecop</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            In collaboration with Kirori Mal College (University of Delhi), we are shaping India's future through rigorous energy research and inclusive policy engagement.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Neecop Consultants Pvt. Ltd. is a hybrid policy–strategy institution operating at the intersection of governance reform,
            policy research, and international economic dialogue.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We combine academic research rigor with large-scale field survey execution capability and institutional strategy advisory to support evidence-based decision-making across public systems and emerging sectors.
            Currently operating across Delhi–NCR and expanding toward pan-India engagements, Neecop builds structured platforms that translate research into reform.
          </p>

          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Strategic Domains</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Governance & Infrastructure Policy", desc: "District-level diagnostics, regulatory assessments, and large-scale primary field research." },
              { title: "Startup & Innovation Ecosystem Policy", desc: "State-level startup ecosystem analysis, reform benchmarking, and consultation frameworks." },
              { title: "International Economic & Policy Dialogue", desc: "Structured academic–policy platforms for comparative research and international engagement." }
            ].map((domain, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                <h4 className="font-heading font-bold text-secondary mb-3">{domain.title}</h4>
                <p className="text-sm text-muted-foreground">{domain.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Approach</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-secondary/5 rounded-2xl border border-secondary/20 font-heading font-bold text-secondary uppercase tracking-wider text-sm md:text-base">
            <span>Field Evidence</span>
            <span className="text-muted-foreground">→</span>
            <span>Institutional Consultation</span>
            <span className="text-muted-foreground">→</span>
            <span>Policy Structuring</span>
            <span className="text-muted-foreground">→</span>
            <span>Reform Roadmapping</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide evidence-based policy research that empowers decision-makers to build a sustainable and innovative India." },
            { icon: Eye, title: "Our Vision", desc: "To become India's leading think-tank for energy policy and innovation ecosystem analysis by 2030." },
            { icon: Heart, title: "Our Values", desc: "Rigorous research, policy impact, transparency, and commitment to sustainable growth." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
