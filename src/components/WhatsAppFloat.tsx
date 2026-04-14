/**
 * Floating WhatsApp button — always visible, bottom-right.
 */
import { motion } from "framer-motion";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WhatsAppFloat = () => (
  <motion.a
    href={whatsappLink(WA_MESSAGES.general)}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-xl hover:brightness-110 transition"
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon className="w-7 h-7 fill-whatsapp-foreground" />
  </motion.a>
);

export default WhatsAppFloat;
