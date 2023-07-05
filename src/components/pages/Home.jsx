import mirrorImg from "../../assets/images/home/mirror.jpg";
import AnimatedText from "../auxiliary__components/AnimatedText";
import Layout from "../auxiliary__components/Layout";
import Testimonials from "../auxiliary__components/home__components/Testimonials";

function Home() {
  return (
    <>
      <Layout className="flex flex-col items-center justify-center pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 flex flex-col items-center justify-center self-center ">
            <AnimatedText
              text="MEDITACIJA PEAT BARS COACHING"
              className="text-2xl lg:text-6xl text-center lg:text-right"
            />
            <h3 className="text-gray-900 text-base lg:text-2xl capitalize text-center mt-5 sm:mt-0 mb-20 sm:mb-5 lg:text-right w-full">
              &#9788; Harmonija duha, reči i misli &#9788;
            </h3>
            <p className="text-gray-900 w-[310px] sm:w-[30rem] text-justify lg:self-end text-xs lg:text-base p-1">
              Ovde ćete pronaći izvor inspiracije i alate za unutrašnji rast i
              transformaciju. Kroz meditaciju, PEAT, tehnike Bars-a i coaching,
              naučićete kako da pronađete mir, oslobodite se negativnih obrasaca
              i postignete sklad u svom umu, telu i duši.
            </p>
            <div className="w-full flex items-center justify-center lg:justify-end  gap-5 lg:gap-10 mt-10 md:mt-5 p-2">
              <a
                className="hover:rounded-full text-xs lg:text-base hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear  border-[1px] border-dark px-2 py-1 lg:px-4 lg:py-2 flex items-center justify-center gap-2"
                href="tel:00393772648078"
                target="_blank"
              >
                Zakažite besplatnu seansu{" "}
                <span className="text-xs lg:text-2xl">&#9743;</span>
              </a>
              <a
                className="hover:rounded-full text-xs lg:text-base hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear border-[1px] border-dark  px-2 py-1 lg:px-4 lg:py-2 flex items-center justify-center gap-2"
                href="mailto:zvezdana.stella@gmail.com"
                target="_blank"
              >
                Pošaljite email{" "}
                <span className="text-xs lg:text-2xl">&#9993;</span>
              </a>
            </div>
          </div>
          <div className="min-w-[19rem] w-1/2">
            <img
              src={mirrorImg}
              alt="profile"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        <Testimonials />
      </Layout>
    </>
  );
}

export default Home;
