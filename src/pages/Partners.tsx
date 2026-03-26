import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Handshake, Building2, GraduationCap, Gavel } from "lucide-react";

const partners = [
    {
        name: "Kirori Mal College (KMC)",
        detail: "University of Delhi",
        type: "Academic Partner",
        logo: "/assets/logos/kmc.jpg",
        icon: GraduationCap,
        description: "Kirori Mal College (KMC), is recognized for its academic excellence, with a NAAC A++ accreditation and a 4th rank in the NIRF rankings among India’s top colleges."
    },
    {
        name: "Power Foundation of India",
        detail: "Ministry of Power, GOI",
        type: "Institutional Partner",
        logo: "/assets/logos/pfi.png",
        icon: Building2,
        description: "A Ministry of Power think tank driving India’s 500GW renewable target. Advancing evidence-based research to decarbonize the grid and optimize energy transitions for a Viksit Bharat."
    },
    {
        name: "Hanns Seidel Foundation",
        detail: "International Organization",
        type: "Strategic Partner",
        logo: "/assets/logos/hss.jpg",
        icon: Handshake,
        description: "The Hanns Seidel Foundation, founded in 1967, is a German political foundation working for international cooperation. At present, It is engaged in the implementation of over 80 projects across 50 countries worldwide."
    },
    {
        name: "Department of Industries, Govt. of NCT of Delhi",
        detail: "Department of Industries",
        type: "Policy Partner",
        logo: "/assets/logos/delhi-industries.jpg",
        icon: Gavel,
        description: "Powering Delhi’s 7.5 million MSMEs through innovation-led policies. Facilitating national credit ecosystem to maximize MSME output, exports, and urban entrepreneurship."
    },
    {
        name: "Department of Industries, Government of Bihar",
        detail: "Incubation and Funding Partner",
        type: "Regional Partner",
        logo: "/assets/logos/bihar-industries.jpg",
        icon: Building2,
        description: "Architecting a modern industrial renaissance. Attracting over 1,500 new companies and making Bihar a lucrative destination for start-ups."
    }
];

const Partners = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-navy py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-12 h-1 bg-secondary mb-6" />
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Institutional Engagement</h1>
                        <p className="text-white/80 max-w-2xl text-lg leading-relaxed font-light">
                            Partnering with leading academic, governmental, and international institutions to drive evidence-based policy reform.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-10">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-10 bg-card border border-border rounded-3xl transition-all shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden border border-border/50">
                                {partner.logo ? (
                                    <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-2" />
                                ) : (
                                    <partner.icon className="h-8 w-8 text-secondary" />
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-heading font-bold mb-2">{partner.name}</h2>
                                <div className="text-sm font-medium text-muted-foreground mb-4">{partner.detail}</div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Partners;
