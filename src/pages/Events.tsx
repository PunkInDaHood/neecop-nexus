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
        description: "Educational initiative on sustainability and climate science policy."
    }
];

const Events = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Events & Roundtables</h1>
                        <p className="text-primary-foreground/70 max-w-2xl text-lg">
                            Conveying dialogue through structured forums and institutional thematic engagements.
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
                            className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-secondary/50 transition-all shadow-sm hover:shadow-xl"
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
                                <Link to="/media" className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
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
