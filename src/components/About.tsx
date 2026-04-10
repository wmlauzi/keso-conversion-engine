import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">About KESO</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          KESO is a registered Malawian-owned company providing professional cleaning, catering, and decoration services for homes, offices, and events across Malawi. We bring together a talented, skilled team dedicated to delivering remarkable services — on time and within budget.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {["Professionalism", "Time Management", "Creativity", "Innovation"].map((v) => (
          <div key={v} className="rounded-xl bg-card border border-border p-5">
            <p className="font-bold text-foreground">{v}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
