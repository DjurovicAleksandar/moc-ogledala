import { useRef } from "react";
import EducationIcon from "./EducationIcon";
import { motion } from "framer-motion";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
  img,
}) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="mx-auto w-[60%]">
      <EducationIcon reference={ref} />
      <motion.div
        className="flex flex-col items-start justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <h3 className="capitalize font-bold text-base lg:text-2xl text-oliveDark">
          {position}&nbsp;
          <a
            className="text-pastelRed capitalize text-base lg:text-xl"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-light text-gray-800  text-xs lg:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-base lg:text-lg text-purpleDark">
          {description}
        </p>
        <img className="w-full" src={img} alt={position} />
      </motion.div>
    </li>
  );
};

export default Details;
