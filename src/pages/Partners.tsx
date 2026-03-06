import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Handshake, Building2, GraduationCap, Gavel } from "lucide-react";

const partners = [
    {
        name: "Kirori Mal College",
        detail: "University of Delhi",
        type: "Academic Partner",
        icon: GraduationCap,
        description: "Foundational partner for research coordination and the India–Europe Dialogue."
    },
    {
        name: "Power Foundation of India",
        detail: "Ministry of Power, GOI",
        type: "Institutional Partner",
        icon: Building2,
        description: "Collaborative partner for evaluation of power supply metrics across NCR."
    },
    {
        name: "Hanns Seidel Foundation",
        detail: "International Organization",
        type: "Strategic Partner",
        icon: Handshake,
        description: "Supporting the Climate Literacy initiative and International Policy Dialogues."
    },
    {
        name: "Govt. of NCT of Delhi",
        detail: "Department of Industries",
        type: "Policy Partner",
        icon: Gavel,
        description: "Collaborative engagement for startup ecosystem analysis and policy reform."
    },
    {
        name: "Department of Industries, Bihar",
        detail: "Incubation and Funding Partner",
        type: "Regional Partner",
        icon: Building2,
        description: "Strategic engagement for regional startup growth and capital flow."
    }
];

const Partners = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Collaborations & Partners</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            Partnering with leading academic, governmental, and international institutions.
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
                            className="flex gap-8 p-10 bg-card border border-border rounded-3xl group hover:border-secondary transition-all shadow-sm"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                <partner.icon className="h-8 w-8 text-secondary" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{partner.type}</span>
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
