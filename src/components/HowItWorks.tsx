import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Message Us", desc: "Send us a message on WhatsApp — it's quick and easy." },
  { icon: ClipboardList, title: "Tell Us What You Need", desc: "Share the details of your cleaning, catering or decoration needs." },
  { icon: CheckCircle, title: "We Deliver", desc: "Our professional team delivers excellent service, on time." },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">How It Works</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl font-extrabold text-primary/40 mb-2">0{i + 1}</div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
