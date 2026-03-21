import SectionWrapper from "@/components/SectionWrapper";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const scoopData: Record<string, any> = {
    "india-europe-strategic-agenda": {
        date: "Feb 2026",
        title: "India-Europe Strategic Agenda: Trade & Technology Council",
        items: [
            { subtitle: "Strategic Agenda Pillar", text: "New cooperation roadmap focused on global connectivity, emerging technologies, and green hydrogen partnerships under the 'Strategic EU-India Agenda'." },
            { subtitle: "FTA Negotiations", text: "Joint commitment to conclude the India-EU Free Trade Agreement (FTA) by the end of 2025, following re-launched talks in 2022." },
            { subtitle: "Clean Energy Partnership", text: "Extended agenda for 2025-2028 focusing on offshore wind, battery recycling, smart grid connectivity, and the India-EU Green Hydrogen Task Force." }
        ]
    },
    "energy-baseline": {
        date: "Aug 2024 - Feb 2026",
        title: "NCR Energy Baseline: Infrastructure Modernization",
        items: [
            { subtitle: "₹3,600 Crore Investment", text: "Ministry of Power approves substantial funding for Gas Insulated Substations, network automation, and underground cabling in NCR clusters like Gurugram and Faridabad." },
            { subtitle: "Reliability Assessments", text: "Assessments show rural power availability has reached 20.6 hours and urban areas 23.8 hours, with Delhi and Haryana DISCOMs leading in reliability." },
            { subtitle: "Smart Meter Transition", text: "Rapid adoption across 35 districts facilitating real-time monitoring through the National Power Portal and the Revamped Distribution Sector Scheme (RDSS)." }
        ]
    },
    "startup-policy": {
        date: "Sept 2025",
        title: "Draft Delhi Startup Policy 2025: Co-creating Innovation",
        items: [
            { subtitle: "₹200 Crore VC Fund", text: "A strategic venture capital fund designed to provide early-stage financial backing and nurture at least 5,000 startups by 2035." },
            { subtitle: "Founder Incentives", text: "Policy highlights include 100% reimbursement on lease rentals (up to ₹10 lakh) and patent filing reimbursements (up to ₹3 lakh for international)." },
            { subtitle: "Delhi Incubation Hub", text: "Establishing a cornerstone facility for virtual incubation services, mentorship, and industry networking across 18 strategic focus areas." }
        ]
    }
};

const News = () => {
    const { id } = useParams();
    const scoop = id ? scoopData[id] : null;

    if (!scoop) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 text-foreground">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">News Edition Not Found</h1>
                    <Button asChild><Link to="/">Back Home</Link></Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-navy py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container mx-auto px-4 relative z-10 text-left">
                    <Button variant="ghost" className="text-white mb-8 gap-2 hover:bg-white/10" asChild>
                        <Link to="/"><ArrowLeft className="h-4 w-4" /> Back Home</Link>
                    </Button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                            {scoop.title}
                        </h1>
                        <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                            <Calendar className="h-4 w-4" /> {scoop.date} | The Neecop Scoop
                        </div>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {scoop.items.map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="premium-card p-8 bg-card rounded-2xl border border-border shadow-sm transition-colors"
                            >
                                <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-center gap-3">
                                    <span className="text-secondary">0{idx + 1}</span> {item.subtitle}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="premium-card mt-16 p-8 bg-muted rounded-2xl border border-border text-center">
                        <Newspaper className="h-10 w-10 text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold mb-2">Detailed Reports</h3>
                        <p className="text-muted-foreground mb-6">
                            Our research is backed by data from the Ministry of Power, National Power Portal, and Round Table consultations.
                        </p>
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="https://www.linkedin.com/company/neecop" target="_blank" rel="noopener noreferrer">
                                Follow Updates <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default News;
