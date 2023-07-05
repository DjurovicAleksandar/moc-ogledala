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
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-base lg:text-2xl">
          {position}&nbsp;
          <a
            className="text-primary capitalize text-base lg:text-xl"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-light text-gray-800  text-xs lg:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-base lg:text-lg">{description}</p>
        <img className="w-full" src={img} alt={position} />
      </motion.div>
    </li>
  );
};

export default Details;
