import { slides } from "../../data/const";

import { motion } from "framer-motion";

export function AnimatedSlider() {
  const duplictedSlides = [...slides, ...slides];
  const times = window.screen.width > "800" ? slides.length : 2;

  return (
    <div className="animated-slider-wrapper overflow-hidden h-16 w-screen bg-base-300  md:-mx-20 flex flex-col items-start justify-center">
      <motion.div
        className="flex w-screen"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 16,
            repeat: Infinity,
          },
        }}
      >
        {/*render duplicted list*/}
        {duplictedSlides.map((s, i) => {
          return (
            <div
              key={i}
              className="flex-shrink-0 "
              style={{ width: `${100 / times}%` }}
            >
              <div className="slide flex  overflow-hidden   items-center justify-center h-full">
                {<s.icon className="mx-2 text-primary" />}

                {s.description}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
