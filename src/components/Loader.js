import { motion } from "framer-motion";

const Loader = () => {
  const loaderVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        className="w-16 h-16 bg-orange-300 rounded-full"
        variants={loaderVariants}
        animate="animate"
      />
    </div>
  );
};

export default Loader;
