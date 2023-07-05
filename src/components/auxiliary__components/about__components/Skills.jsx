import { motion } from "framer-motion";

import meditation from "../../../assets/images/about/skills/meditation.jpg";
import bars from "../../../assets/images/about/skills/bars.jpg";
import coaching from "../../../assets/images/about/skills/coaching.jpg";
import peat from "../../../assets/images/about/skills/peat.jpg";

function Skills() {
  const skillList = [
    {
      title: "Meditacija",
      subtitle: "pronađi unutrašnji mir",

      src: meditation,
      text: "Opuštajuća meditacija za unutrašnji mir i harmoniju. Pronađite trenutak za sebe i zaronite u duboku smirenost. Otkrijte blagostanje i ravnotežu dok se povezujete sa sopstvenim disanjem i oslobađate stresa.",
    },
    {
      title: "BARS",
      subtitle: "dodir koji liječi",

      src: bars,
      text: "BARS tehnika je blaga i efikasna tehnika koja opušta um i telo. Kroz nežno dodirivanje tačaka na glavi, BARS oslobađa stres, umanjuje anksioznost i podstiče duboku relaksaciju. Otkrijte blagodeti ove tehnike za vaše celokupno blagostanje.",
    },
    {
      title: "PEAT",
      subtitle: "postigni emotivni balans",

      src: peat,
      text: "PEAT terapija je inovativna tehnika za oslobađanje emocionalnih blokada. Kroz kombinaciju disanja i vizualizacije, PEAT pomaže u transformaciji traumatičnih iskustava i postizanju unutrašnjeg mira i ravnoteže.",
    },
    {
      title: "Coaching",
      subtitle: "napreduj kroz izazove",

      src: coaching,
      text: "Koučing je podrška i inspiracija za postizanje željenih ciljeva i lični razvoj. Kroz efikasne tehnike i motivacioni pristup, kouč vam pomaže da otkrijete svoj potencijal, prevaziđete prepreke i ostvarite životnu transformaciju. Budite najbolja verzija sebe!",
    },
  ];

  const animationVariants = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1, type: "spring" },
  };

  return (
    <>
      <h3 className="text-gray-900  text-base lg:text-2xl font-light w-full text-center mt-64 mb-4">
        Kroz rad sa mnom do zdravog duha.s
      </h3>
      <h2 className="text-dark/50 font-black capitalize text-5xl lg:text-8xl w-full text-center">
        Vještine
      </h2>
      <div className="lg:grid grid-cols-8 items-center justify-center">
        {skillList.map(({ title, subtitle, src, text }, index) => {
          return (
            <motion.div
              key={`${title}-${index}`}
              className="col-span-8 lg:col-span-4 flex flex-col items-center justify-center text-justify p-4 mt-24 shadow-dark shadow-2xl text-oliveDark"
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition="transition"
            >
              <div className="flex items-center justify-around w-3/4 text-center">
                <div>
                  <h2 className="text-base lg:text-2xl font-black uppercase text-pastelRed">
                    {title}
                  </h2>
                  <h3 className="text-xs lg:text-xl font-medium lowercase text-pastelBlue">
                    {subtitle}
                  </h3>
                </div>
              </div>

              <img
                alt={title}
                src={src}
                className="aspect-square w-[15rem] lg:w-[20rem] h-auto opacity-95 rounded-md my-5"
              />
              <div className="lg:w-3/4 text-base lg:text-xl p-4 shadow-dark/10 shadow-inner">
                <p>{text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
