import Layout from "../auxiliary__components/Layout";
import AnimatedText from "../auxiliary__components/AnimatedText";
import AnimatedNumber from "../auxiliary__components/about__components/AnimatedNumber";
import Education from "../auxiliary__components/about__components/Education";
import Skills from "../auxiliary__components/about__components/Skills";

import profilePicture from "../../assets/images/about/zvezdana.jpg";

function About() {
  const serviceNumbers = [
    { title: "Sati rada sa klijentima", num: 950 },
    { title: "Zadovoljnih klijenata", num: 250 },
    { title: "Godina iskustva", num: 5 },
  ];

  return (
    <Layout className="pt-16 mt-16">
      <div className="mb-16 text-gray-900 text-xs lg:text-2xl lowercase text-center w-full font-medium">
        <h3 className="mb-5">Ko sam zapravo ja?</h3>
        <AnimatedText
          text="O meni"
          className="text-2xl lg:text-6xl text-center"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4">
        <img
          src={profilePicture}
          className="w-full max-w-[25rem] lg:w-[25rem] h-auto rounded-xl"
          alt="Zvezdana Milojkovic"
        />

        <div className="flex flex-col items-center justify-start text-justify mt-8">
          <h2 className="mb-4 text-base lg:text-lg font-bold uppercase text-dark/75">
            Biografija
          </h2>
          <p className="font-normal my-2 text-gray-400 text-base lg:text-lg w-[300px] lg:w-[600px]">
            Ja sam Zvezdana, kćerka, sestra, supruga, majka i baka. Porodično
            usidrena žena.
            <i> Motivator, kouč i praktičar Bars-a i PEAT-a.</i>
            Autor sam knjiga "Moja životna priča" i "U susret svesnosti". Sanjar
            i kreativni prevodilac Gaberovih ideja.Trenutno sam fokusirana na
            radionicu "Moć Ogledala" i nastavak edukacije u gestalt terapiji.
            Finansijska sloboda, stabilnost i obilje su moji ciljevi.
          </p>
          <p className="font-normal my-2 text-gray-400 text-base lg:text-lg w-[300px] lg:w-[600px]">
            Pomogla sam do sada više od 60 zena da promene svoj zivot, kroz
            couching i kroz radionicu Moć Ogledala, kroz Peat seanse, Bars
            tretmane. Ne znam realno koliko njih je dozivelo promene uz moje
            knjige i uz moje objave na društvenim mrezama.
          </p>
          <p className="font-normal text-gray-400 text-base lg:text-lg w-[300px] lg:w-[600px]">
            Ne preuveličavam svoju vrednost, već se trudim da pružim vrednost
            koja prevazilazi uloženo. Podržavam talenat i kreativnost. Nastojim
            da probudim još više inspiracije i motivacije kod osoba koje
            učestvuju u mom programu za lični rast i razvoj, "Moć Ogledala".
            Možda sam baš ja osoba koja ti može pomoći!?
            <br />
            <a
              className="hover:rounded-full hover:bg-dark hover:border-transparent hover:text-light duration-200 ease-linear border-[1px] border-dark inline-block w-full text-center mt-2 font-medium"
              href="tel:00393772648078"
              target="_blank"
              onMouseEnter={(e) => (e.target.textContent = "Pozovi")}
              onMouseLeave={(e) =>
                (e.target.textContent =
                  " Slobodno se javi za besplatnu konsultaciju!")
              }
            >
              Slobodno se javi za besplatnu konsultaciju!
            </a>
          </p>
        </div>
        {/* List */}
        <div className="col-span-2 flex flex-col items-center lg:items-end justify-between mt-4">
          {/* Item */}
          {serviceNumbers.map(({ title, num }, i) => {
            return (
              <div
                key={`${title}:${num}-${i}`}
                className="flex flex-col items-end justify-end"
              >
                <AnimatedNumber value={num} />
                <h2 className="text-xs lg:text-lg font-medium uppercase text-gray-400">
                  {title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>

      <Skills />
      <Education />
    </Layout>
  );
}

export default About;
