const WHATSAPP_NUMBER = "265885706875";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  general: "Hello KESO, I would like to book a service.",
  cleaning: "Hello KESO, I want cleaning services.",
  catering: "Hello KESO, I need catering for an event.",
  decoration: "Hello KESO, I need decoration services.",
} as const;
