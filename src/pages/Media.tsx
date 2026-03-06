import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Image as ImageIcon } from "lucide-react";

// Placeholder for media images - typically these would be passed or imported
const mediaCategories = [
    "Institutional Launch",
    "Startup Summit",
    "Policy Roundtables",
    "Field Research",
    "International Dialogues"
];

const Media = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 tracking-tight italic">Media & Outreach</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            A visual record of our institutional milestones and policy engagements.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {["All", ...mediaCategories].map((cat, idx) => (
                        <button key={idx} className={`px-6 py-2 rounded-full border border-border text-sm font-bold transition-all ${idx === 0 ? 'bg-secondary text-secondary-foreground border-secondary' : 'hover:border-secondary text-muted-foreground hover:text-secondary'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="aspect-square bg-muted rounded-2xl overflow-hidden group relative border border-border"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 italic">
                                <ImageIcon className="h-16 w-16" />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                                    <Camera className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-white font-heading font-bold">Research Milestone {i}</h3>
                                <p className="text-white/70 text-sm">Policy Roundtable Engagement</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Media;
