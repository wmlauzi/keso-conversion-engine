/**
 * Contact section — phone, email, location cards + WhatsApp CTA.
 */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+265 885 706 875", "+265 993 076 071"],
    colSpan: "",
  },
  {
    icon: Mail,
    label: "Email",
    lines: [],
    email: "Solomonmagawa76@gmail.com",
    colSpan: "",
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["Blantyre, Chirimba Road", "Opposite Mlombwa CCAP"],
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
] as const;

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-background" aria-labelledby="contact-heading">
    <div className="container max-w-4xl">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
        <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">Contact Us</h2>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {contactInfo.map((c) => (
          <address key={c.label} className={`rounded-2xl bg-card border border-border p-6 text-center not-italic ${c.colSpan}`}>
            <c.icon className="w-6 h-6 text-primary mx-auto mb-3" aria-hidden="true" />
            <p className="font-bold text-foreground mb-1">{c.label}</p>
            {"email" in c && c.email ? (
              <a href={`mailto:${c.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {c.email}
              </a>
            ) : (
              c.lines.map((line) => (
                <p key={line} className="text-muted-foreground text-sm">{line}</p>
              ))
            )}
          </address>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <a
          href={whatsappLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground hover:brightness-110 transition shadow-lg"
        >
          <WhatsAppIcon />
          Message Us on WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
