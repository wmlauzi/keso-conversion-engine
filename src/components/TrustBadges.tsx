/**
 * Trust badges — quick trust indicators below the hero.
 */
import { motion } from "framer-motion";
import { Clock, DollarSign, Users, ThumbsUp } from "lucide-react";

const badges = [
  { icon: Clock, label: "Reliable & On Time" },
  { icon: DollarSign, label: "Affordable Pricing" },
  { icon: Users, label: "Professional Team" },
  { icon: ThumbsUp, label: "Customer Satisfaction Focus" },
] as const;

const TrustBadges = () => (
  <section className="py-12 md:py-16 bg-card border-b border-border" aria-label="Why choose KESO">
    <div className="container">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 list-none p-0">
        {badges.map((b, i) => (
          <motion.li
            key={b.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-semibold text-sm md:text-base text-foreground">{b.label}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBadges;
