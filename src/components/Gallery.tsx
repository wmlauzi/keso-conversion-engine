/**
 * Gallery section — showcase of previous KESO work across cleaning, catering and decoration.
 * Uses a responsive masonry-style grid with hover lift and category tags.
 */
import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import cleaning1 from "@/assets/gallery-cleaning-1.jpg";
import cleaning2 from "@/assets/gallery-cleaning-2.jpg";
import catering1 from "@/assets/gallery-catering-1.jpg";
import catering2 from "@/assets/gallery-catering-2.jpg";
import decor1 from "@/assets/gallery-decor-1.jpg";
import decor2 from "@/assets/gallery-decor-2.jpg";

const items = [
  { src: cleaning1, alt: "KESO team cleaning a modern office in Malawi", tag: "Cleaning", span: "md:row-span-2" },
  { src: decor1, alt: "Elegant wedding hall decoration by KESO", tag: "Decoration", span: "" },
  { src: catering1, alt: "Outdoor wedding buffet catered by KESO", tag: "Catering", span: "" },
  { src: cleaning2, alt: "Spotless living room after KESO deep cleaning", tag: "Cleaning", span: "" },
  { src: catering2, alt: "Corporate event buffet by KESO catering", tag: "Catering", span: "md:row-span-2" },
  { src: decor2, alt: "Birthday party balloon arch and stage by KESO", tag: "Decoration", span: "" },
] as const;

const Gallery = () => (
  <section id="gallery" className="py-20 md:py-28 bg-muted/40" aria-labelledby="gallery-heading">
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Portfolio</p>
        <h2 id="gallery-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
          A Look at Our Previous Work
        </h2>
        <p className="text-muted-foreground mt-4">
          Real events, real spaces, real results — see what we've delivered for clients across Malawi.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px]">
        {items.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-2xl shadow-md border border-border ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {item.tag}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={whatsappLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
        >
          Request a Similar Project on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
