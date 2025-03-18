import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const AnimatedRocket = ({ children }) => {
  return (
    <motion.div
      className="flex w-screen"
      animate={{
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 8,
          repeat: Infinity,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRocket;
