import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { MessageSquare, Calendar, Globe, Leaf } from "lucide-react";

const platforms = [
    {
        title: "Delhi Startup Summit",
        icon: Calendar,
        description: "Policy forums and thematic engagements convening academia, industry, and government.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Policy Roundtables",
        icon: MessageSquare,
        description: "Structured deliberations on startup reform, regulatory bottlenecks, and ease of doing business.",
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        title: "Climate Science Literacy",
        icon: Leaf,
        description: "Exhibitions and educational programs in collaboration with Hanns Seidel Foundation.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        title: "India–Europe Dialogue",
        icon: Globe,
        description: "Founding platform for cross-border research and sustained policy engagement.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    }
];

const Platforms = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-navy py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container mx-auto px-4 relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-12 h-1 bg-secondary mb-6" />
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Institutional Platforms</h1>
                        <p className="text-white/80 max-w-2xl text-lg leading-relaxed font-light">
                            Translating research into dialogue and documentation through structured public platforms and regional consultations.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {platforms.map((platform, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="premium-card bg-card border border-border rounded-3xl p-10 flex flex-col items-center text-center transition-all"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${platform.bg} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                                    <platform.icon className={`h-10 w-10 ${platform.color}`} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{platform.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {platform.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-12 bg-secondary/5 border border-secondary/20 rounded-3xl text-center"
                    >
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Building Long-term Engagement</h3>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed italic">
                            "We believe policy research must move beyond documentation — toward dialogue, deliberation, and implementation."
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Platforms;
