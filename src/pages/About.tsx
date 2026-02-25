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
            We're on a mission to make India's startup ecosystem more connected, inclusive, and impactful.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Neecop is a startup ecosystem enabler based in New Delhi, India. We work at the intersection of entrepreneurship, investment, and public policy to create a thriving environment for startups to grow and succeed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded with the vision of bridging the gaps in India's startup landscape, Neecop brings together founders, investors, mentors, and policymakers under one roof — providing the resources, connections, and support needed to turn bold ideas into transformative businesses.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To democratize access to startup resources and build a policy-driven innovation ecosystem that empowers every entrepreneur in India." },
            { icon: Eye, title: "Our Vision", desc: "To become India's most trusted startup ecosystem platform, enabling 10,000+ startups to thrive by 2030." },
            { icon: Heart, title: "Our Values", desc: "Transparency, community-first thinking, innovation with impact, and relentless focus on founder success." },
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
