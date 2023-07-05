import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 }); //initial value
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]); //Any changes in these three will cause useEffect to run

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        //ref.current is true when componenet is mounted
        // latest.toFixed(0) <=value if it's lower than value, it will run faster
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <div className="text-xl lg:text-7xl font-bold mx-auto lg:mx-0 my-5">
      <span ref={ref} className="inline-block font-bold">
        {value}
      </span>
      +
    </div>
  );
};

export default AnimatedNumber;
