import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-cleaning.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="KESO professional cleaning team" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest mb-4"
      >
        Services Beyond Your Expectations
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-section-dark-foreground max-w-3xl text-balance"
      >
        Professional Cleaning, Catering & Decoration Services in Malawi
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-section-dark-foreground/70 max-w-xl"
      >
        Reliable. Affordable. Done Right.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href={whatsappLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground hover:brightness-110 transition shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.336-2.207l-.442-.354-2.648.888.888-2.648-.354-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Book on WhatsApp
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-lg border-2 border-section-dark-foreground/30 px-8 py-4 text-base font-semibold text-section-dark-foreground hover:bg-section-dark-foreground/10 transition"
        >
          View Services
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 flex items-center gap-3"
      >
        <div className="flex -space-x-2">
          {[0,1,2].map(i => (
            <div key={i} className="w-8 h-8 rounded-full bg-primary/80 border-2 border-section-dark flex items-center justify-center text-xs font-bold text-primary-foreground">
              {["K","E","S"][i]}
            </div>
          ))}
        </div>
        <p className="text-sm text-section-dark-foreground/60">
          Trusted by homes & businesses across Malawi
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
