import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Grace M.", text: "Great service, very professional! KESO cleaned our office and it looked brand new.", rating: 5 },
  { name: "James C.", text: "Affordable and reliable team. The catering for our wedding was absolutely amazing.", rating: 5 },
  { name: "Tionge K.", text: "The decoration for our corporate event was stunning. Highly recommend KESO!", rating: 5 },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-card">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What People Say</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">Testimonials</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-bold text-foreground text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
