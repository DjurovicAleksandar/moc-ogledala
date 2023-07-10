import "react-modal-video/css/modal-video.min.css";

import Layout from "../../auxiliary__components/Layout";
import AnimatedText from "../../auxiliary__components/AnimatedText";
import TransitionEffect from "../../auxiliary__components/TransitionEffect";

import peatHeader from "../../../assets/images/services/peat/peatHeader.jpg";

import peat3 from "../../../assets/images/services/peat/peat3.jpg";
import peat4 from "../../../assets/images/services/peat/peat4.jpg";
import peat5 from "../../../assets/images/services/peat/peat5.jpg";
import FadeInWhenVisible from "../../auxiliary__components/FadeInWhenVisible";

function peat() {
  return (
    <Layout className="">
      <TransitionEffect />
      <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
        <img
          src={peatHeader}
          alt="Peat header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-end p-4">
          <div className="lg:mr-28 flex flex-col items-center justify-center gap-4">
            <AnimatedText
              text="Poveži se sa unutrašnjim svetom"
              className="text-2xl sm:text-5xl text-right sm:w-[500px]"
            />
            <h3 className="text-base lg:text-lg text-[#8c7a73] text-justify font-medium w-[300px] self-end">
              PEAT tehnika predstavlja moćan pristup za lični rast i
              samopromenu. Njen potencijal da se bavi duboko usađenim emotivnim
              obrascima i olakša unutrašnju transformaciju čini je neprocenjivim
              resursom za pojedince koji žele da otključaju svoj puni
              potencijal.
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
      <FadeInWhenVisible>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-10 w-full font-bold sm:w-[600px] lg:w-[800px] mx-auto">
          <li className="">
            <a className="text-purpleDark font-medium" href="#innerconnection">
              Povezivanje sa unutrašnjim izvorom promene.
            </a>
            <div className="w-full bg-purpleDark h-[1px] my-1" />
          </li>
          <li className="">
            <a className="text-oliveDark font-medium" href="#emotionfree">
              Oslobađanje emotivnih blokada.
            </a>
            <div className="w-full bg-oliveDark h-[1px] my-1" />
          </li>
          <li className="">
            <a className="text-yellowDark font-medium" href="#personalgrowth">
              Put ka ličnom razvoju!
            </a>
            <div className="w-full bg-yellowDark h-[1px] my-1" />
          </li>
        </ul>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="flex justify-between items-center gap-10 p-4 mt-12">
          <div className="w-full h-auto">
            <div className="w-full bg-purpleDark h-[1px] my-3 " />
            <img
              src={peat5}
              alt="Peat5"
              className="w-[310px] sm:w-[600px] lg:w-[800px]  object-cover mx-auto my-8 shadow-sm rounded-sm"
            />
            <div className="w-full bg-purpleDark h-[1px] my-3 " />
          </div>
          <section className="my-6 text-purpleDark" id="innerconnection">
            <h2 className="text-4xl font-bold mb-2 ">
              Povezivanje sa unutrašnjim izvorom promene
            </h2>
            <h3 className="text-xl font-light mb-2 ">
              Uvod u PEAT psihologiju
            </h3>
            <div className="w-full bg-purpleDark h-[1px] my-3 sm:w-[600px] lg:w-[800px]" />
            <p className="sm:w-[600px] lg:w-[800px]  text-base font-medium text-justify">
              PEAT (Primordialna aktivacija energije i transcendencija) metoda
              psihologije predstavlja moćan i inovativan pristup ličnoj
              transformaciji i samootkrivanju.
              <span className="block my-2">
                {" "}
                Razvijena od strane srpskog psihologa Živorada Slavinskog, PEAT
                kombinuje elemente psihologije, energetske terapije i
                spiritualnosti kako bi se nosio sa duboko usađenim obrascima i
                oslobodio emotivne blokade.
              </span>
              Zajedno ćemo se dublje upustiti u suštinu PEAT metode i njeno
              potencijalno dejstvo na pojedince koji traže lični rast.
            </p>
          </section>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="flex justify-between items-center gap-10 p-4">
          <section className="my-6 text-oliveDark" id="personalgrowth">
            <h2 className="text-4xl font-bold mb-2 ">
              Oslobađanje emotivnih blokada
            </h2>
            <h3 className="text-xl font-light mb-2 ">Prednosti PEAT metode</h3>
            <div className="w-full bg-oliveDark h-[1px] my-3" />
            <p className="sm:w-[600px] lg:w-[800px]  text-base font-medium text-justify">
              Emocionalno isceljenje: PEAT pomaže pojedincima da se suoče sa
              nerešenim emocijama i traumama, omogućavajući duboko emocionalno
              isceljenje i oslobađanje od prošlih iskustava.
              <span className="block my-2">
                Samootkrivanje: Kroz istraživanje polariteta, pojedinci dobijaju
                vredne uvide u svoju unutrašnju dinamiku, sistem verovanja i
                obrasce ponašanja.
              </span>
              Lična transformacija: Identifikacijom i oslobađanjem nesvesnih
              blokada, PEAT metoda otvara vrata za duboku ličnu transformaciju i
              samorealizaciju.
            </p>
          </section>

          <div className="w-full h-auto">
            <div className="w-full bg-oliveDark h-[1px] my-3 " />
            <img
              src={peat3}
              alt="Peat3"
              className="w-[310px] sm:w-[600px] lg:w-[800px]  object-cover mx-auto my-8 shadow-sm rounded-sm"
            />
            <div className="w-full bg-oliveDark h-[1px] my-3 " />
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section
          className="my-12 mx-0 flex flex-col items-center text-yellowDark"
          id="emotionfree"
        >
          <h2 className="text-4xl font-bold mb-2">Put ka ličnom razvoju</h2>
          <h3 className="text-xl font-light mb-2 ">
            Implementacija PEAT metode
          </h3>

          <p className="sm:w-[600px] lg:w-[800px]  text-base font-medium text-justify">
            Kako biste iskusili blagodeti PEAT metode, preporučuje se da se
            obratite sertifikovanim PEAT praktičarima koji će vam pružiti
            podršku i vođstvo tokom procesa.
            <span className="block my-2">
              PEAT se može primenjivati individualno ili u grupama, u zavisnosti
              od ličnih preferencija i potreba.
            </span>
            Pozivam vas da se pridružite jedinstvenim seansama PEAT psihologije
            koje vodim. Ako ste spremni za duboku unutrašnju transformaciju i
            oslobađanje od emotivnih blokada, ove seanse su za vas.{" "}
          </p>

          <div>
            <div className="w-full bg-yellowDark h-[1px] mt-10 sm:w-[600px] lg:w-[800px]" />
            <img
              src={peat4}
              alt="Peat4"
              className="w-[310px] sm:w-[600px] lg:w-[800px]  object-cover mx-auto my-8 shadow-sm rounded-sm"
            />
            <div className="w-full bg-yellowDark h-[1px] my-3 sm:w-[600px] lg:w-[800px]" />
            <a
              className="hover:rounded-full text-base lg:text-lg font-medium border-yellowDark hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear  border-[1px]  px-2 py-1 lg:px-4 lg:py-2 flex items-center justify-center gap-2 w-fit mx-auto my-8"
              href="tel:00393772648078"
              target="_blank"
            >
              Zakažite seansu.
            </a>
          </div>
        </section>
      </FadeInWhenVisible>
    </Layout>
  );
}

export default peat;
