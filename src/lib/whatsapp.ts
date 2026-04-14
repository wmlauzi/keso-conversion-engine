/**
 * WhatsApp integration utilities for KESO.
 * All outbound messages are sanitized via encodeURIComponent to prevent injection.
 */

const WHATSAPP_NUMBER = "265885706875";

/**
 * Generates a safe WhatsApp click-to-chat URL.
 * @param message - Pre-filled message text (will be URI-encoded)
 */
export const whatsappLink = (message: string): string => {
  const sanitized = message.replace(/[<>"'&]/g, ""); // Strip HTML-sensitive chars
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(sanitized)}`;
};

/** Pre-defined WhatsApp messages for each service */
export const WA_MESSAGES = {
  general: "Hello KESO, I would like to book a service.",
  cleaning: "Hello KESO, I want cleaning services.",
  catering: "Hello KESO, I need catering for an event.",
  decoration: "Hello KESO, I need decoration services.",
} as const;
