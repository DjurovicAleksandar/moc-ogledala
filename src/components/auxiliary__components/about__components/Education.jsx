import { useRef } from "react";
import Details from "./Details";
import { motion, useScroll } from "framer-motion";

import coach1 from "../../../assets/images/about/education/coach1.jpg";
import coach2 from "../../../assets/images/about/education/coach2.jpg";
import bars from "../../../assets/images/about/education/bars.jpg";

function Education() {
  const edu = [
    {
      position: "Profesionalni coach",
      company: "GB Talent coaching academy APICA",
      time: "19/4/2022",
      address: "Online 10 meseci",
      description:
        "Profesionalni Talent coach upisana u couching organizaciju APICA kao aktivan član.",
      img: coach1,
    },
    {
      position: "Veštine za online svet",
      company: "Business akcelerator sa Nedom Zelevom",
      time: "16/6/2022",
      address: "Online program",
      description:
        "Stekla sam internet veštine, ojačala sam kreativnost i autentičnost u objavama na društvenim mrezama.",
      img: coach2,
    },
    {
      position: "Access Bars - Bars praktičar",
      company: "Online obuka sa Vesnom kostić",
      time: "12/06/2020",
      address: "Online obuka u trajanju od 8h",
      description:
        "Sa ovom obukom sam naučila da sebi i drugima radim tretmane, dodirom na 32 tačke na glavi, pored toga i Access Bars kliring.",
      img: bars,
    },
    {
      position: "Access Bars - Bars praktičar",
      company: "Online obuka sa Brankom Radolović",
      time: "06/06/2021",
      address: "Online obuka u trajanju od 8h",
      description:
        "Sa ovom obukom sam naučila da sebi i drugima radim tretmane, dodirom na 32 tačke na glavi, pored toga i Access Bars kliring.",
      img: bars,
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h3 className="text-base lg:text-2xl font-light w-full text-center text-oliveDark ">
        Znanje koje sam stekla
      </h3>
      <h2 className="text-purpleDark font-black capitalize text-base lg:text-8xl w-full text-center">
        Edukacija
      </h2>
      <main
        ref={ref}
        className="w-full lg:w-[75%] mx-auto flex lg:relative lg:block "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="invisible  h-full lg:visible absolute left-[1.1rem] top-0 w-[4px] bg-purpleDark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between gap-10 mt-9 ml-9">
          {edu.map(
            ({ position, company, time, address, description, img }, index) => {
              return (
                <Details
                  key={`${position} + ${index}`}
                  position={position}
                  company={company}
                  time={time}
                  address={address}
                  description={description}
                  img={img}
                />
              );
            }
          )}
        </ul>
      </main>
    </div>
  );
}

export default Education;
