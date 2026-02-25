import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import ParticleNetwork from "@/components/ParticleNetwork";
import { Rocket, Users, TrendingUp, Globe, Shield, Zap, Target, Lightbulb, ArrowRight, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const services = [
  { icon: Rocket, title: "Startup Support & Consulting", desc: "End-to-end guidance for early-stage startups from ideation to scale." },
  { icon: TrendingUp, title: "Funding & Investor Connect", desc: "Bridge the gap between promising startups and the right investors." },
  { icon: Globe, title: "Ecosystem Platforms", desc: "Digital tools and dashboards to streamline your startup journey." },
  { icon: Users, title: "Community & Networking", desc: "Connect with founders, mentors, and industry leaders across India." },
];

const initiatives = [
  { title: "NCR Energy Research Initiative", desc: "Data-driven energy policy research launched by the Ministry of Power to steer India's sustainable ecosystem.", cta: "Explore Initiative" },
  { title: "Delhi Startup Policy 2025", desc: "Co-creating an inclusive startup ecosystem through high-level consultative roundtables and policy dialogues.", cta: "Learn More" },
  { title: "The Neecop Scoop", desc: "Latest: TCS disputes contract loss, India's first smart payment ring, and UPI's biometric payment revolution.", cta: "Read Updates" },
];

const whyChoose = [
  { icon: Shield, title: "Trusted Network", desc: "Backed by credible mentors, investors, and policy advisors." },
  { icon: Target, title: "Focused Impact", desc: "Tailored support for startups at every stage of growth." },
  { icon: Lightbulb, title: "Innovation-Driven", desc: "Fostering breakthrough ideas through structured programs." },
  { icon: Zap, title: "Fast Execution", desc: "Rapid deployment of resources and connections when you need them." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder, EduTech Innovations", quote: "Neecop's ecosystem gave us the connections and mentorship we needed to secure our first round of funding." },
  { name: "Rahul Verma", role: "CEO, GreenMove Solutions", quote: "The policy roundtables opened doors we never knew existed. Neecop is transforming how startups engage with governance." },
  { name: "Ananya Desai", role: "Co-founder, HealthBridge AI", quote: "From dashboard tools to investor introductions, Neecop has been a game-changer for our growth journey." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Startup ecosystem" className="w-full h-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </div>
        <ParticleNetwork className="z-[1]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Empowering India's{" "}
              <span className="text-gradient">Startup Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Neecop connects startups, investors, and policymakers to build a thriving innovation economy. Join India's fastest-growing startup enabler.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8" asChild>
                <Link to="/get-involved">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-base px-8" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">About Neecop</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Building bridges in India's innovation landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neecop is a startup ecosystem enabler dedicated to empowering entrepreneurs, connecting them with investors, and driving policy engagement across India. We believe in the power of community-driven innovation.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about" className="gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { num: "500+", label: "Startups Supported" },
                { num: "₹100Cr+", label: "Funding Facilitated" },
                { num: "200+", label: "Mentors & Advisors" },
                { num: "50+", label: "Events Hosted" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-bold text-secondary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Services</h2>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUpItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Initiatives */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Our Initiatives</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Driving Impact at Scale</h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {initiatives.map((item) => (
            <motion.div key={item.title} variants={fadeUpItem} className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              <Button variant="link" className="p-0 text-secondary gap-1">
                {item.cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Why Neecop</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChoose.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What Founders Say</h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUpItem} className="bg-card rounded-xl p-8 shadow-card border border-border">
              <Quote className="h-8 w-8 text-secondary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <ParticleNetwork className="z-0 opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Join India's Fastest Growing<br />Startup Ecosystem
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Whether you're a founder, investor, or partner — Neecop has a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8" asChild>
                <Link to="/get-involved">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-base px-8" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
