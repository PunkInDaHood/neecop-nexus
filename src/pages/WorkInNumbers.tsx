import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, Home, ClipboardCheck, Globe2, FileSpreadsheet } from "lucide-react";

const stats = [
    {
        icon: Home,
        value: "5,000+",
        label: "Households Surveyed",
        detail: "Extensive fieldwork across Delhi–NCR to evaluate public service delivery.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Users,
        value: "10,000+",
        label: "Stakeholders Engaged",
        detail: "Deep engagement across policy consultations, industry roundtables, and academic forums.",
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        icon: ClipboardCheck,
        value: "Multi-District",
        label: "Governance Diagnostics",
        detail: "Comprehensive baseline assessments of infrastructure and institutional performance.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        icon: Globe2,
        value: "International",
        label: "Policy Roundtables",
        detail: "Quarterly deliberations on fiscal federalism and global economic cooperation.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: FileSpreadsheet,
        value: "Structured",
        label: "Reform Frameworks",
        detail: "Development of actionable policy structuring and reform roadmapping.",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];

const WorkInNumbers = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 italic">Our Work in Numbers</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            Quantifying our impact across governance reform, policy research, and international dialogue.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <stat.icon className={`h-7 w-7 ${stat.color}`} />
                            </div>
                            <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                            <div className="text-lg font-heading font-semibold text-secondary mb-4">{stat.label}</div>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {stat.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default WorkInNumbers;
