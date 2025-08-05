
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1},
  exit: { opacity: 0},
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

const PageWrapper = ({ children }) => {
  return (
<motion.div
  className="w-full min-h-screen overflow-hidden overflow-y-auto"
  initial="initial"
  animate="animate"
  exit="exit"
  variants={pageVariants}
  transition={pageTransition}
>
  {children}
</motion.div>

  );
};

export default PageWrapper;
