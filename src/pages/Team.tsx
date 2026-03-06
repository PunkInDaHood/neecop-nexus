import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { User, Linkedin } from "lucide-react";

const Team = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Team</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            Meet the policy experts, researchers, and strategists shaping our vision.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-48 h-48 rounded-full bg-muted overflow-hidden mb-6 border-4 border-transparent group-hover:border-secondary transition-all relative">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                                    <User className="h-24 w-24" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-1 group-hover:text-secondary transition-colors italic uppercase tracking-tight">Executive Member {i}</h2>
                            <div className="text-secondary font-semibold text-sm mb-4 uppercase tracking-widest">Policy Strategy</div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                                Dedicated to bridging the gap between rigorous academic research and actionable public governance reform.
                            </p>
                            <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 border-2 border-dashed border-border rounded-3xl text-center"
                >
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 italic">Join Our Mission</h3>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        We are constantly looking for Research Consultants and Field Investigators to join our expanding Pan-India engagements.
                    </p>
                </motion.div>
            </SectionWrapper>
        </div>
    );
};

export default Team;
