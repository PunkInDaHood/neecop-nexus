import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
    {
        title: "Power Supply Project Launch",
        guest: "Shri Manohar Lal Khattar Ji",
        date: "2024",
        location: "New Delhi",
        description: "Official launch of the NCR Energy baseline assessment framework."
    },
    {
        title: "Delhi Startup Summit",
        guest: "Policy Experts & Industry Leaders",
        date: "2025",
        location: "Delhi",
        description: "A high-level convening to discuss the implementation of the Delhi Startup Policy."
    },
    {
        title: "India–Europe Economic Dialogue",
        guest: "International Scholars",
        date: "Quarterly",
        location: "Hybrid / Delhi",
        description: "Sustained academic–policy platform for comparative research on fiscal federalism."
    },
    {
        title: "Climate Science Literacy Exhibition",
        guest: "General Public & Students",
        date: "2024",
        location: "National Capital Region",
        description: "Educational program on sustainability and climate science policy."
    }
];

const Events = () => {
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
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Events & Roundtables</h1>
                        <p className="text-white/80 max-w-2xl text-lg leading-relaxed font-light">
                            Convening dialogue through structured forums and institutional thematic engagements across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card group bg-card border border-border rounded-3xl overflow-hidden transition-all shadow-sm"
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest leading-none">
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                        <MapPin className="h-3 w-3" /> {event.location}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-secondary transition-colors">{event.title}</h2>
                                <div className="flex items-center gap-2 mb-6 text-sm text-foreground/80 font-medium">
                                    <Users className="h-4 w-4 text-secondary" /> Key Guest: {event.guest}
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    {event.description}
                                </p>
                                <Link 
                                    to={`/media?category=${(
                                        event.title === "Power Supply Project Launch" ? "Energy+%26+Power+2026" :
                                        event.title === "Delhi Startup Summit" ? "Startup+Summit" :
                                        event.title === "India–Europe Economic Dialogue" ? "Global+Dialogues" :
                                        "Policy+Roundtables"
                                    )}`} 
                                    className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                                >
                                    View Gallery <ExternalLink className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Events;
