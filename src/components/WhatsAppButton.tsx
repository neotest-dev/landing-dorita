import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/51999999999?text=Hola,%20me%20gustaría%20solicitar%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300">
        <MessageCircle className="h-7 w-7" />
      </div>
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;