/**
 * Services section — card-based layout with per-service WhatsApp CTAs.
 */
import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import cleaningImg from "@/assets/service-cleaning.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import decorImg from "@/assets/service-decor.jpg";

const services = [
  {
    title: "Cleaning Services",
    description: "House keeping, office cleaning, expert gardening, fabric & upholstery cleaning, and end-of-tenancy cleaning. Spotless results every time.",
    image: cleaningImg,
    cta: "Book Cleaning Now",
    message: WA_MESSAGES.cleaning,
  },
  {
    title: "Catering Services",
    description: "Fresh, seasonal and delicious meals for offices, weddings, corporate events, and private parties. Buffets, packed meals, and full-service catering.",
    image: cateringImg,
    cta: "Order Catering",
    message: WA_MESSAGES.catering,
  },
  {
    title: "Decoration Services",
    description: "Stunning event decoration for weddings, parties, and corporate events. Our creative team delivers the perfect look, on time and within budget.",
    image: decorImg,
    cta: "Plan My Event",
    message: WA_MESSAGES.decoration,
  },
] as const;

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background" aria-labelledby="services-heading">
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
        <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">Our Services</h2>
      </motion.header>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="group rounded-2xl overflow-hidden bg-card shadow-lg border border-border hover:shadow-xl transition-shadow"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} by KESO`}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.description}</p>
              <a
                href={whatsappLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground hover:brightness-110 transition"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                {s.cta}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
