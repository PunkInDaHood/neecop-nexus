import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required maxLength={100} />
                <Input type="email" placeholder="Email Address" required maxLength={255} />
              </div>
              <Input placeholder="Organization" maxLength={100} />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="researcher">Researcher / Academic</SelectItem>
                  <SelectItem value="policymaker">Policy Maker / Govt. Official</SelectItem>
                  <SelectItem value="startup">Startup Founder</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="student">Student / Aspiring Entrepreneur</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Your message..." rows={5} required maxLength={1000} />
              <Button type="submit" disabled={loading} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                <Send className="h-4 w-4" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@neecop.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/neecop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:underline transition-all"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-xl overflow-hidden h-64">
              <iframe
                title="Neecop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
