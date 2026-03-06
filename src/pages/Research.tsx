import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { FileText, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const researchItems = [
    {
        title: "Power Supply Reform Proposal",
        type: "Technical Proposal",
        date: "2024",
        description: "Detailed roadmap for evaluating electricity supply performance across NCR districts."
    },
    {
        title: "Startup Policy Framework",
        type: "Policy Proposal",
        date: "2025",
        description: "Structured inputs for the Draft Delhi Startup Policy 2025."
    },
    {
        title: "Ecosystem Mapping Report",
        type: "Research Paper",
        date: "2025",
        description: "Comprehensive analysis of startup reform benchmarking and market linkages."
    },
    {
        title: "Climate Literacy Brief",
        type: "White Paper",
        date: "2024",
        description: "Documentation from the Climate Science Literacy Exhibition series."
    }
];

const Research = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Research & Publications</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            Evidence-based insights that drive institutional reform and governance strengthening.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid gap-6">
                    {researchItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 bg-card border border-border rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-secondary transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                                    <FileText className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">{item.type}</span>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </div>
                                    <h2 className="text-xl font-heading font-bold mb-2 group-hover:text-secondary transition-colors">{item.title}</h2>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-6 gap-2" asChild>
                                    <Link to="/contact">
                                        Access <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Research;
