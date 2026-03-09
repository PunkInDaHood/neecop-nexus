import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const mediaCategories = [
    "All",
    "Institutional Launch",
    "Startup Summit",
    "Policy Roundtables",
    "Field Research",
    "International Dialogues"
];

const mediaData = [
    {
        id: 1,
        category: "Startup Summit",
        title: "DSS 2025 Photo",
        image: "/assets/media/startup-summit/DSS 2025 CM Rekha Gupta Photo.jpg"
    },
    {
        id: 2,
        category: "Startup Summit",
        title: "Summit Event 1",
        image: "/assets/media/startup-summit/IMG_8929.jpg"
    },
    {
        id: 3,
        category: "Startup Summit",
        title: "Summit Event 2",
        image: "/assets/media/startup-summit/IMG_8936.jpg"
    },
    {
        id: 4,
        category: "Startup Summit",
        title: "Summit Event 3",
        image: "/assets/media/startup-summit/IMG_8937.jpg"
    },
    {
        id: 5,
        category: "Startup Summit",
        title: "Summit Event 4",
        image: "/assets/media/startup-summit/IMG_8943.jpg"
    },
    {
        id: 6,
        category: "Startup Summit",
        title: "Summit Event 5",
        image: "/assets/media/startup-summit/IMG_8960.jpg"
    },
    {
        id: 7,
        category: "Startup Summit",
        title: "Summit Event 6",
        image: "/assets/media/startup-summit/IMG_9071.jpg"
    },
    {
        id: 8,
        category: "Startup Summit",
        title: "Summit Event 7",
        image: "/assets/media/startup-summit/IMG_9095.jpg"
    },
    {
        id: 9,
        category: "Startup Summit",
        title: "Summit Event 8",
        image: "/assets/media/startup-summit/IMG_9125.jpg"
    },
    {
        id: 10,
        category: "International Dialogues",
        title: "Global Dialogue 1",
        image: "/assets/media/international-dialogues/DSC00070 (1).jpg"
    },
    {
        id: 11,
        category: "International Dialogues",
        title: "Global Dialogue 2",
        image: "/assets/media/international-dialogues/DSC00123 (1).jpg"
    },
    {
        id: 12,
        category: "International Dialogues",
        title: "Policy Discussion 1",
        image: "/assets/media/international-dialogues/DSC02331.jpg"
    },
    {
        id: 13,
        category: "International Dialogues",
        title: "Policy Discussion 2",
        image: "/assets/media/international-dialogues/DSC02332.jpg"
    },
    {
        id: 14,
        category: "International Dialogues",
        title: "International Summit 1",
        image: "/assets/media/international-dialogues/DSC02373.jpg"
    },
    {
        id: 15,
        category: "International Dialogues",
        title: "International Summit 2",
        image: "/assets/media/international-dialogues/DSC02386.jpg"
    },
    {
        id: 16,
        category: "International Dialogues",
        title: "Strategic Meeting 1",
        image: "/assets/media/international-dialogues/DSC02389.jpg"
    },
    {
        id: 17,
        category: "International Dialogues",
        title: "Strategic Meeting 2",
        image: "/assets/media/international-dialogues/DSC02390.jpg"
    },
    {
        id: 18,
        category: "International Dialogues",
        title: "Power Project Dialogue",
        image: "/assets/media/international-dialogues/Global Dialogue Neecop Power Project.jpg"
    },
    {
        id: 19,
        category: "International Dialogues",
        title: "India-Europe Dialogue",
        image: "/assets/media/international-dialogues/India-Europe Economic & Policy Dialogue (1).png"
    },
    {
        id: 20,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 1",
        image: "/assets/media/delhi-startup-roundtable/20250906_094948.jpg"
    },
    {
        id: 21,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 2",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0025.jpg"
    },
    {
        id: 22,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 3",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0028.jpg"
    },
    {
        id: 23,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 4",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0040.jpg"
    },
    {
        id: 24,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 5",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0041.jpg"
    },
    {
        id: 25,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 6",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0042.jpg"
    },
    {
        id: 26,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 7",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0045.jpg"
    },
    {
        id: 27,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 8",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0046.jpg"
    },
    {
        id: 28,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 9",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0048.jpg"
    },
    {
        id: 29,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 10",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0051.jpg"
    },
    {
        id: 30,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 11",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250910-WA0018.jpg"
    },
    {
        id: 31,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 12",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250910-WA0025.jpg"
    },
    {
        id: 32,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 13",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250910-WA0053.jpg"
    },
    {
        id: 33,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 14",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250911-WA0028.jpg"
    },
    {
        id: 34,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 1",
        image: "/assets/media/general-roundtables/FB_IMG_1772562708340.jpg.jpeg"
    },
    {
        id: 35,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 2",
        image: "/assets/media/general-roundtables/FB_IMG_1772562711614.jpg.jpeg"
    },
    {
        id: 36,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 3",
        image: "/assets/media/general-roundtables/FB_IMG_1772562714475.jpg.jpeg"
    },
    {
        id: 37,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 4",
        image: "/assets/media/general-roundtables/FB_IMG_1772562717622.jpg.jpeg"
    },
    {
        id: 38,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 5",
        image: "/assets/media/general-roundtables/FB_IMG_1772562721221.jpg.jpeg"
    },
    {
        id: 39,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 6",
        image: "/assets/media/general-roundtables/IMG-20250725-WA0029.jpg.jpeg"
    }
];

const Media = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredMedia = selectedCategory === "All"
        ? mediaData
        : mediaData.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-gradient-hero py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
                            Media & <span className="text-secondary italic">Outreach</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
                            A visual record of our institutional milestones, policy engagements, and grassroots research across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="flex flex-wrap gap-3 mb-16 justify-center">
                    {mediaCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/20 scale-105'
                                : 'border-border text-muted-foreground hover:border-secondary/50 hover:text-secondary bg-card'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredMedia.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredMedia.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-[4/3] bg-card rounded-3xl overflow-hidden group relative border border-border shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 backdrop-blur-md flex items-center justify-center mb-4">
                                            <Camera className="h-6 w-6 text-secondary" />
                                        </div>
                                        <h3 className="text-white text-xl font-heading font-bold mb-1">{item.title}</h3>
                                        <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{item.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border">
                        <ImageIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-muted-foreground">No media found</h3>
                        <p className="text-muted-foreground/70">Check back later for updates on this category.</p>
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default Media;
