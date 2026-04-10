import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
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
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
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
                alt={s.title}
                loading="lazy"
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
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.336-2.207l-.442-.354-2.648.888.888-2.648-.354-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                {s.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
