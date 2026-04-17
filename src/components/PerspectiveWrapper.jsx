import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateY: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, rotateY: 0, scale: 1 },
};

export function PerspectiveWrapper({ children }) {
  return (
    <div className="perspective-wrapper mb-10">
      <motion.div
        className="perspective-card"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
