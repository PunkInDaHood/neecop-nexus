import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const scoopEditions = [
    {
        id: 12,
        date: "Feb 2026",
        title: "Leadership Shifts & Disruption",
        items: [
            { subtitle: "Tata Sons in Transition", text: "Vice-chairman Vijay Singh steps down as the group navigates an RBI-mandated IPO deadline." },
            { subtitle: "Rupee Pressures", text: "Foreign outflows and tariff tensions push the currency closer to its all-time low." },
            { subtitle: "AI Disruption", text: "Replit’s billion-dollar leap highlights the accelerating disruption in tech ecosystems." }
        ]
    },
    {
        id: 11,
        date: "Jan 2026",
        title: "Transparency & AI Infrastructure",
        items: [
            { subtitle: "SEBI Pushes Transparency", text: "New rules mandate AIFs to upload NAVs within 15 days, strengthening investor trust." },
            { subtitle: "AI Infrastructure Boom", text: "Equinix launches a ₹574 crore AI-ready data center in Chennai." },
            { subtitle: "Urban Company IPO", text: "Shares debut with a 57% pop on Dalal Street, signaling strong market interest." }
        ]
    },
    {
        id: 10,
        date: "Dec 2025",
        title: "Policy Shifts & Tech Milestones",
        items: [
            { subtitle: "Trump's H1-B Bombshell", text: "Visa fee hikes shake up the Indian IT talent pipeline and strategic hiring." },
            { subtitle: "Chennai’s Digital First", text: "City launches 'Chennai One', India’s first unified transport app platform." },
            { subtitle: "Car Market Revival", text: "GST cuts slash small car prices, sparking hopes for a demand rebound." }
        ]
    },
    {
        id: 9,
        date: "Nov 2025",
        title: "Global Trade & Space Missions",
        items: [
            { subtitle: "Apple’s India Bet", text: "Tech giant partners with 17 Indian firms to cut its global dependence." },
            { subtitle: "Gaganyaan Momentum", text: "Astronaut training for India’s first human spaceflight progresses with full energy." },
            { subtitle: "India–Australia Pact", text: "Landmark deal to ease organic product trade, benefiting farmers and exporters." }
        ]
    },
    {
        id: 6,
        date: "Oct 2025",
        title: "Education & Financial Milestones",
        items: [
            { subtitle: "Delhi's Ed-Tech Leap", text: "Teachers begin training in artificial intelligence to modernize classrooms." },
            { subtitle: "Adani Green's Loan", text: "Secured first offshore financing deal of $250 million from global banks." },
            { subtitle: "Ola Electric's Innovation", text: "Becomes first Indian auto-maker to receive certification for indigenously developed ferrite motors." }
        ]
    },
    {
        id: 2,
        date: "Sept 2025",
        title: "Business & Market Developments",
        items: [
            { subtitle: "Namo Bharat Rail", text: "Transport specialists visit India's Namo Bharat rapid rail corridor to study RRTS tech." },
            { subtitle: "Kotak Mahindra Shares", text: "Market shifts following quarterly profit reports and banking sector trends." },
            { subtitle: "Dunzo Leadership Change", text: "Leadership transitions at the intersection of e-commerce and logistics." }
        ]
    }
];

const News = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-gradient-hero py-24">
                <div className="container mx-auto px-4">
                    <Button variant="ghost" className="text-white mb-8 gap-2 hover:bg-white/10" asChild>
                        <Link to="/"><ArrowLeft className="h-4 w-4" /> Back Home</Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">The Neecop Scoop</h1>
                    <p className="text-primary-foreground/70 max-w-2xl text-lg">
                        Curated insights on the forces shaping India's economic, business, and technological landscape.
                    </p>
                </div>
            </section>

            <SectionWrapper>
                <div className="space-y-12 max-w-5xl mx-auto">
                    {scoopEditions.map((edition, idx) => (
                        <motion.div
                            key={edition.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
                        >
                            <div className="p-8 border-b border-border bg-muted/30 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Newspaper className="h-5 w-5 text-secondary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-foreground">Edition #{edition.id}: {edition.title}</h2>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                                    <Calendar className="h-4 w-4" /> {edition.date}
                                </div>
                            </div>
                            <div className="p-8 grid md:grid-cols-3 gap-6">
                                {edition.items.map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <h3 className="font-heading font-bold text-primary leading-tight">🔹 {item.subtitle}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default News;
