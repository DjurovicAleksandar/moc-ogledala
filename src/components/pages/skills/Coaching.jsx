import Layout from "../../auxiliary__components/Layout";

import coachingHeader from "../../../assets/images/services/coaching/coachingHeader.jpg";
import AnimatedText from "../../auxiliary__components/AnimatedText";

import section2 from "../../../assets/images/services/coaching/section2.jpg";
import Card from "../../auxiliary__components/coaching__components/Card";

import setgoals from "../../../assets/images/services/coaching/setgoals.png";
import actionplan from "../../../assets/images/services/coaching/actionplan.png";
import consistentaction from "../../../assets/images/services/coaching/consistentaction.png";

function Coaching() {
  const coachingRoad = [
    {
      title: "Postavi jasne ciljeve",
      href: setgoals,
      text: "Jasno definišite svoje ciljeve i težnje. Odvojite vreme da identifikujete šta uspeh znači za vas i postavite specifične, merljive, ostvarive, relevantne i vremenski ograničene (SMART) ciljeve. Jasan pravac će vam pomoći da ostanete fokusirani i motivisani tokom svog putovanja.",
    },
    {
      title: "Kreiraj plan akcije",
      href: actionplan,
      text: "Kada postavite svoje ciljeve, napravite detaljan plan akcije. Podelite svoje ciljeve na manje korake kojima se može upravljati i ocrtajte zadatke, resurse i vremenske okvire potrebne za postizanje svake prekretnice. Dobro struktuiran plan će vam pružiti mapu puta i pomoći vam da ostanete organizovani i odgovorni.",
    },
    {
      title: "Budi istrajan i konzistentan",
      href: consistentaction,
      text: "Za uspeh je potreban dosledan trud i istrajnost. Preduzmite akcije na svom planu dosledno, čak i kada ste suočeni sa preprekama ili preprekama. Ostanite disciplinovani, održavajte pozitivan način razmišljanja i budite prilagodljivi da prilagodite svoj pristup ako je potrebno. Doslednim malim koracima napred, napredovaćete ka svojim ciljevima i na kraju postići uspeh.",
    },
  ];

  return (
    <Layout className="">
      <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
        <img
          src={coachingHeader}
          alt="Coaching header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-end p-4">
          <div className="lg:mr-28 flex flex-col items-center justify-center gap-4">
            <AnimatedText
              text="Otključajte svoj puni potencijal"
              className="text-2xl sm:text-5xl text-right sm:w-[500px]"
            />
            <h3 className="text-base lg:text-lg text-[#8c7a73] text-justify font-medium w-[300px] self-end">
              Transformišite svoj život uz presonalni coaching
            </h3>
            <a
              className="btn text-base lg:text-lg font-medium flex items-center justify-center gap-2 w-fit self-end"
              href="tel:00393772648078"
              target="_blank"
            >
              Book
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mb-16">
        <div className="hidden sm:block">
          <img src={section2} alt="section2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 p-8 lg:p-0">
          {coachingRoad.map(({ title, text, href }, i) => {
            return (
              <Card key={i + title} title={title} text={text} href={href} />
            );
          })}
        </div>
      </div>
      <div className="my-24 text-center md:flex lg:flex-col items-center justify-center italic text-oliveDark">
        <p className="w-4/5 mx-auto">
          <span className="inline-block bg-purpleDark p-2 my-1 mx-2">
            {" "}
            Da li ste spremni da svoj lični rast i razvoj podignete na sledeći
            nivo?
          </span>
          <span className="inline-block bg-pastelBlue p-2 my-1 mx-2">
            Otključajte svoj puni potencijal i ostvarite svoje ciljeve uz naše
            ekskluzivne treninge.
          </span>
          <span className="inline-block bg-pastelRed p-2 my-1 mx-2">
            {" "}
            Bez obzira da li težite ka napredovanju u karijeri, poboljšanju
            odnosa ili poboljšanju blagostanja, naši iskusni treneri su tu da
            vas vode na svakom koraku.{" "}
          </span>
          <span className="inline-block bg-yellow-300 p-2 my-1 mx-2">
            Ne propustite ovu priliku da promenite svoj život. Zakažite svoju
            trenersku sesiju sada i krenite na put samootkrivanja i uspeha. Moć
            promene je u vašim rukama.
          </span>
          <span className="inline-block bg-oliveDark p-2 text-yellowDark my-1 mx-2">
            Kliknite na dugme ispod da biste započeli svoje trenersko putovanje.
          </span>
        </p>

        <button className="btn mt-10">Book</button>
      </div>
    </Layout>
  );
}

export default Coaching;
