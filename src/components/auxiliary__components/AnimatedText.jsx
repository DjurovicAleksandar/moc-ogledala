import { motion } from "framer-motion";

function AnimatedText({ text, className = "" }) {
  const titleText = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 3,
        staggerChildren: 0.5,
      },
    },
  };

  const words = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-2 md:flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark/50 font-black uppercase ${className}`}
        variants={titleText}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              className="inline-block"
              key={word + "-" + index}
              variants={words}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
