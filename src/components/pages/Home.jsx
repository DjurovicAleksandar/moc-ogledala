import mirrorImg from "../../assets/images/home/mirror.jpg";
import AnimatedText from "../auxiliary__components/AnimatedText";
import Layout from "../auxiliary__components/Layout";
import Testimonials from "../auxiliary__components/home__components/Testimonials";

import mirror from "../../assets/images/home/mirror.jpg";
function Home() {
  return (
    <>
      <Layout className="flex flex-col items-center justify-center">
        <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
          <img
            src={mirror}
            alt="Bars header"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 w-full h-full flex items-center justify-end">
            <div className="bg-red-200/50 rounded-full flex flex-col lg:flex-row items-center justify-around">
              <div className="lg:w-1/2 flex flex-col items-center justify-center self-center text-black/70 font-medium">
                <AnimatedText
                  text="MEDITACIJA PEAT BARS COACHING"
                  className="text-2xl lg:text-6xl text-center lg:text-right"
                />
                <h3 className="text-base lg:text-2xl capitalize text-center mt-5 sm:mt-0 mb-20 sm:mb-5 lg:text-right w-full">
                  &#9788; Harmonija duha, reči i misli &#9788;
                </h3>
                <p className="text-black/70 font-medium w-[310px] sm:w-[30rem] text-right lg:self-end text-xs lg:text-base p-1">
                  Ovde ćete pronaći izvor inspiracije i alate za unutrašnji rast
                  i transformaciju. Kroz meditaciju, PEAT, tehnike Bars-a i
                  coaching, naučićete kako da pronađete mir, oslobodite se
                  negativnih obrasaca i postignete sklad u svom umu, telu i
                  duši.
                </p>
                <div className="w-full flex items-center justify-center lg:justify-end  gap-5 lg:gap-10 mt-10 md:mt-5 p-2">
                  <a
                    className="btn text-xs lg:text-base  hover:text-light flex items-center justify-center gap-2"
                    href="tel:00393772648078"
                    target="_blank"
                  >
                    Besplatna seansa
                    <span className="text-xs lg:text-2xl">&#9743;</span>
                  </a>
                  <a
                    className="btn  text-xs lg:text-base  hover:text-light  flex items-center justify-center gap-2"
                    href="mailto:zvezdana.stella@gmail.com"
                    target="_blank"
                  >
                    Email
                    <span className="text-xs lg:text-2xl">&#9993;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </Layout>
    </>
  );
}

export default Home;
