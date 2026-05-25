/**
 * Contact section — modern, tight, conversion-focused.
 */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

type ContactItem = {
  icon: typeof Phone;
  label: string;
  lines?: string[];
  email?: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+265 885 706 875", "+265 993 076 071"],
  },
  {
    icon: Mail,
    label: "Email",
    email: "Solomonmagawa76@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    lines: ["Blantyre, Chirimba Road", "Opposite Mlombwa CCAP"],
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-20 pt-12 pb-16 md:pt-16 md:pb-20 bg-background"
    aria-labelledby="contact-heading"
  >
    <div className="container max-w-5xl">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-10 md:mb-12"
      >
        <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight"
        >
          Contact Us
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          We&apos;re ready to help you convert your KESO products quickly and reliably.
        </p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {contactInfo.map((c, i) => (
          <motion.address
            key={c.label}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group relative rounded-2xl bg-card border border-border/60 p-7 text-center not-italic shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <c.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="font-bold text-foreground text-base mb-2 tracking-tight">
              {c.label}
            </p>
            <div className="space-y-1">
              {"email" in c && c.email ? (
                <a
                  href={`mailto:${c.email}`}
                  className="text-muted-foreground/90 text-sm hover:text-primary transition-colors break-all"
                >
                  {c.email}
                </a>
              ) : (
                c.lines?.map((line) => (
                  <p key={line} className="text-muted-foreground/90 text-sm">
                    {line}
                  </p>
                ))
              )}
            </div>
          </motion.address>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
