/**
 * CTA section — strong conversion push with WhatsApp link.
 */
import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-secondary text-secondary-foreground" aria-label="Call to action">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Need Help? Let&apos;s Get Started Today
        </h2>
        <p className="text-secondary-foreground/60 text-lg max-w-lg mx-auto mb-8">
          Whether it&apos;s cleaning, catering or decoration — we&apos;re just a message away.
        </p>
        <a
          href={whatsappLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground hover:brightness-110 transition shadow-lg"
        >
          <WhatsAppIcon />
          Chat on WhatsApp Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
