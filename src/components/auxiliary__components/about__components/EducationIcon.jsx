import { motion, useScroll } from "framer-motion";

function EducationIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-purpleDark -translate-x-1/2">
      <svg width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-purpleDark stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[1px] fill-light"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-pastelRed animate-pulse"
        />
      </svg>
    </figure>
  );
}

export default EducationIcon;
