import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/552799999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.5)] transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsappLogo weight="fill" className="w-8 h-8" />
      
      {/* Ripple Effect Background */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
    </motion.a>
  );
}
