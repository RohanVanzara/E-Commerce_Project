// src/PageTransition.js
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}     // start position
      animate={{ opacity: 1, y: 0 }}       // enter animation
      exit={{ opacity: 0, y: -50 }}        // leave animation
      transition={{ duration: 0.5 }}       // speed
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
