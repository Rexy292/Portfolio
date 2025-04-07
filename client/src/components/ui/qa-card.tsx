import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface QACardProps {
  question: string;
  answer: string | React.ReactNode;
  isDefaultOpen?: boolean;
  className?: string;
}

const QACard = ({ 
  question, 
  answer, 
  isDefaultOpen = false,
  className = ""
}: QACardProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className={`rounded-lg p-4 transition-all duration-300 ${isOpen ? 'bg-primary/10' : 'bg-background/30'} ${className}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
    >
      <motion.button
        className="w-full flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="font-medium text-lg text-left">{question}</span>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center h-6 w-6 text-primary"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4 overflow-hidden text-gray-300"
          >
            {typeof answer === "string" ? (
              <p>{answer}</p>
            ) : (
              answer
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QACard;
