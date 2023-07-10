import Layout from "../../auxiliary__components/Layout";
import AnimatedText from "../../auxiliary__components/AnimatedText";

import barsHeader from "../../../assets/images/services/bars/bars.jpg";

import growth from "../../../assets/images/services/bars/barsGrid/growth.png";
import creative from "../../../assets/images/services/bars/barsGrid/creative.png";
import change from "../../../assets/images/services/bars/barsGrid/change.png";
import selfcare from "../../../assets/images/services/bars/barsGrid/selfcare.png";
import key from "../../../assets/images/services/bars/barsGrid/key.png";
import development from "../../../assets/images/services/bars/barsGrid/development.png";
import TransitionEffect from "../../auxiliary__components/TransitionEffect";
import FadeInWhenVisible from "../../auxiliary__components/FadeInWhenVisible";

function bars() {
  return (
    <Layout className="">
      <TransitionEffect />
      <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
        <img
          src={barsHeader}
          alt="Bars header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-end p-4">
          <div className="lg:mr-28 flex flex-col items-center justify-center gap-4">
            <AnimatedText
              text="Otključavanje unutrašnje harmonije dodirom"
              className="text-2xl sm:text-5xl text-right sm:w-[500px] "
            />
            <h3 className="text-base lg:text-lg text-[#8c7a73] text-justify font-medium w-[300px] self-end">
              Put do ravnoteže, lečenja i transformacije.
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
        <div className="p-4 tracking-wider sm:grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-x-6 gap-y-6">
          {/* 1 */}

          <div className="text-cyan-100 min-h-[300px] bg-purpleDark flex gap-4 items-center justify-between rounded-md col-span-2 p-8 hover:scale-105 duration-300 ease-linear">
            <img className="w-1/2" alt="growth" src={growth} />
            <div className="flex items-center flex-col">
              <h3 className="text-base italic font-light">
                Otključavanje vašeg potencijala
              </h3>
              <h2 className="text-4xl lg:text-6xl font-black mb-10">
                Access Bars
              </h2>

              <p className="text-xs text-left font-medium">
                Otkrijte transformativnu moć Access Bars-a, nežne terapije
                dodirom koja oslobađa ograničavajuća uverenja i emocije
                uskladištene u telu. Otključajte svoj pravi potencijal i
                doživite duboke promene u svesti.{" "}
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="text-purpleDark min-h-[300px] bg-orange-100 row-span-2 flex flex-col items-center justify-center rounded-lg p-8 hover:scale-105 duration-300 ease-linear">
            <img className="" alt="growth" src={creative} />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-10 text-center">
                Access Bars <br /> Umetnost
              </h2>
              <p className="text-xs text-center font-medium w-1/2">
                Iskusite umetnost Access Bars-a, neinvazivne tehnike koja
                aktivira 32 tačke na glavi kako bi raspršila elektromagnetni
                naboj misli, osećanja i emocija. Uravnotežite svoju energiju,
                promovišete opuštanje i iskoristite svoju unutrašnju mudrost.
              </p>
            </div>
          </div>

          {/* 3 */}

          <div className="text-oliveDark min-h-[300px] row-span-2 sm:flex sm:gap-x-6 sm:gap-y-6 col-span-2">
            <div className="w-full lg:w-1/2  h-full hover:scale-105 duration-300 ease-linear sm:flex flex-col gap-6">
              <div className="w-full h-1/2 bg-orange-200 rounded-lg p-8">
                <img className="w-1/2 mx-auto" alt="growth" src={change} />
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-xl sm:text-4xl lg:text-5xl font-black mb-10 text-center">
                    Transformiši se
                  </h2>
                  <p className="text-xs text-center font-medium w-4/5">
                    Prihvatite transformativni potencijal Access Bars-a dok
                    oslobađate stare obrasce i pozdravljate pozitivne promene.
                    Čišćenjem energetskih blokada, Access Bars otvara vrata
                    novim mogućnostima i osnažuje lični rast.
                  </p>
                </div>
              </div>
              <div className="hover:scale-105 duration-300 ease-linear w-full h-1/2 bg-violet-300 rounded-lg p-8 pt-0 text-blue-800">
                <img className="mx-auto" alt="growth" src={key} />
                <div className="">
                  <h2 className="text-lg lg:text-2xl font-black text-center">
                    Otključajte svoj puni potencijal, oslobodite se ograničenja
                    i pozovite veću lakoću i radost u svoj život.
                  </h2>
                  <button className="mx-auto my-4 hover:rounded-full text-xs lg:text-base hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear  border-[1px] border-dark px-2 py-1 lg:px-4 lg:py-2 flex items-center justify-center gap-2">
                    Vaša transformacija vas čeka!
                  </button>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 duration-300 ease-linear w-full lg:w-1/2 h-full bg-red-200 flex flex-col items-center justify-center rounded-lg p-8">
              <img className="" alt="growth" src={selfcare} />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-10 text-center text-purple-950">
                  Briga o sebi
                </h2>
                <p className="text-xs text-center font-medium w-4/5 text-purple-950">
                  Negujte svoje blagostanje uz Access Bars, moćan modalitet za
                  brigu o sebi. Duboko se opustite dok nežni dodir stimuliše
                  Bars tačke, promovišući mentalnu jasnoću, smanjujući stres i
                  podstičući osećaj mira.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}

          <div className="min-h-[300px] bg-oliveDark rounded-lg p-8 flex items-center justify-between hover:scale-105 duration-300 ease-linear">
            <div className="flex flex-col items-center justify-start h-full">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-10 text-center text-orange-100">
                Lični razvoj
              </h2>
              <p className="text-xs text-center font-medium w-1/2 text-orange-100">
                Aktiviranjem određenih tačaka na glavi olakšava promene u
                različitim aspektima života, uključujući odnose, kreativnost,
                obilje i još mnogo toga.
              </p>
            </div>

            <div className="flex flex-col items-center justify-end h-full">
              <img
                className="mx-auto w-[2000px]"
                alt="growth"
                src={development}
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </Layout>
  );
}

export default bars;
