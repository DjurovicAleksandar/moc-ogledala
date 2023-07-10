import { useState } from "react";
import { motion } from "framer-motion";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

import Layout from "../../auxiliary__components/Layout";
import AnimatedText from "../../auxiliary__components/AnimatedText";

import thumb2 from "../../../assets/images//services/meditation/free_meditations/thumb2.jpg";
import thumb4 from "../../../assets/images//services/meditation/free_meditations/thumb4.jpg";
import thumb5 from "../../../assets/images//services/meditation/free_meditations/thumb5.jpg";
import thumb6 from "../../../assets/images//services/meditation/free_meditations/thumb6.jpg";
import thumb7 from "../../../assets/images//services/meditation/free_meditations/thumb7.jpg";
import thumb8 from "../../../assets/images//services/meditation/free_meditations/thumb8.jpg";

import iconPlay from "../../../assets/images/services/meditation/play.png";

import meditationImg from "../../../assets/images/services/meditation/med/med1.jpg";
import meditationHeader from "../../../assets/images//services/meditation/meditationHeader.jpg";
import TransitionEffect from "../../auxiliary__components/TransitionEffect";
import FadeInWhenVisible from "../../auxiliary__components/FadeInWhenVisible";

function meditation() {
  const videoArr = [
    { title: "Vreme otpuštanja", id: "NL3P9q5Jqp8", thumb: thumb2 },
    { title: "Pojačaj radost u svom životu", id: "70PkeOLXURE", thumb: thumb4 },
    { title: "Pojačaj ljubav u sebi", id: "ZNLswUXz4ls", thumb: thumb5 },
    { title: "Proubudi sebe u sebi", id: "kyfsI8nXzZI", thumb: thumb6 },
    { title: "Otvori vrata obilju", id: "u0CsKwfoCgo", thumb: thumb7 },
    { title: "Probudi talenat u sebi", id: "lIv-DPA4d1s", thumb: thumb8 },
  ];

  const [isOpen, setIsOpen] = useState(new Array(videoArr.length).fill(false));

  const openModal = (index) => {
    setIsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <Layout className="">
      <TransitionEffect />
      <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
        <img
          src={meditationHeader}
          alt="Peat header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-end p-4">
          <div className="lg:mr-28 flex flex-col items-center justify-center gap-4">
            <AnimatedText
              text="Nauči da se opustiš i rešiš stresa"
              className="text-2xl sm:text-5xl text-right sm:w-[500px]"
            />
            <h3 className="text-base lg:text-lg text-[#8c7a73] text-justify font-medium w-[300px] self-end">
              Vođeno putovanje kroz sadašnji trenutak.
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

      <div className="p-4 flex flex-col items-center justify-center  tracking-wider">
        <FadeInWhenVisible>
          <p className="text-lg font-light mb-10 sm:w-[600px] lg:w-[900px] italic text-center">
            Kada meditiramo, kreiramo dalekosežne i dugotrajne koristi u svoje
            živote: snižavamo nivo stresa, spoznajemo svoju bol, bolje se
            povezujemo, poboljšavamo fokus i ljubazniji smo prema sebi.
            Dozvolite nam da vas provedemo kroz osnove u našem novom pažljivom
            vodiču o tome kako meditirati.
          </p>
          <ul className="flex flex-col gap-2 w-full font-bold sm:w-[600px] lg:w-[800px] ">
            <li className="">
              <a
                className="text-pastelRed font-medium"
                href="#whatismeditation"
              >
                Šta je meditacija?
              </a>
              <div className="w-full bg-pastelRed h-[1px] my-1" />
            </li>
            <li className="">
              <a className="text-pastelBlue font-medium" href="#whytomeditate">
                Zašto meditirati?
              </a>
              <div className="w-full bg-pastelBlue h-[1px] my-1" />
            </li>
            <li className="">
              <a className="text-oliveDark font-medium" href="#howtomeditate">
                Kako meditirati?
              </a>
              <div className="w-full bg-oliveDark h-[1px] my-1" />
            </li>
            <li className="">
              <a className="text-yellowDark font-medium" href="#freemditations">
                Besplatne meditacije
              </a>
              <div className="w-full bg-yellowDark h-[1px] my-1" />
            </li>
          </ul>

          <img
            src={meditationImg}
            alt="Meditation"
            className="w-[310px] sm:w-[600px] lg:w-[800px]  object-cover mx-auto my-2"
          />
        </FadeInWhenVisible>
        {/* Sta je meditacija */}
        <FadeInWhenVisible>
          <section className="my-6 text-pastelRed" id="whatismeditation">
            <h2 className="text-4xl font-bold mb-2 ">Šta je meditacija?</h2>
            <h3 className="text-xl font-light mb-2 ">
              Kratko objašnjenje postupka
            </h3>
            <div className="w-full bg-pastelRed h-[5px] my-3 sm:w-[600px] lg:w-[800px] " />
            <p className="sm:w-[600px] lg:w-[800px]  text-base font-medium text-justify">
              Kako se uči meditacija? U meditaciji svesnosti učimo kako da
              obratimo pažnju na disanje dok ulazi i izlazi, i primetimo kada um
              odluta sa ovog zadatka.
              <span className="block my-2">
                {" "}
                Ova praksa vraćanja pažnje na disanje jača mišiće pažnje i
                svesnosti. Kada obratimo pažnju na svoje disanje, učimo kako da
                se vratimo i ostanemo u sadašnjem trenutku - da se ukotvimo ovde
                i sada namerno, bez sudjenja.
              </span>
              Ideja iza svesnosti deluje jednostavno - ali vežbanje zahteva
              strpljenje.
            </p>
          </section>
        </FadeInWhenVisible>
        {/* Zašto meditirati */}
        <FadeInWhenVisible>
          <section className="my-6 text-pastelBlue" id="whytomeditate">
            <h2 className="text-4xl font-bold mb-2 ">Zašto meditirati?</h2>
            <h3 className="text-xl font-light mb-2 ">
              Spisak prednosti koje su povezane sa učenjem meditacije.
            </h3>
            <div className="w-full bg-pastelBlue h-[5px] my-3 sm:w-[600px] lg:w-[800px] " />
            <p className="text-base font-medium text-justify sm:w-[600px] lg:w-[800px] ">
              Iako meditacija nije lek za sve, ona sigurno može da vam pruži
              nešto preko potrebnog prostora u vašem životu. Ponekad je to sve
              što nam treba da donesemo bolje izbore za sebe, svoje porodice i
              naše zajednice. A najvažniji alati koje možete poneti sa sobom u
              praksu meditacije su malo strpljenja, malo ljubaznosti prema sebi
              i udobno mesto za sedenje.
              <span className="block my-2">
                Kada meditiramo, ubrizgavamo dalekosežne i dugotrajne koristi u
                svoje živote. I bonus: nije vam potrebna dodatna oprema ili
                skupo članstvo.
              </span>
              Evo pet razloga za meditaciju:
            </p>
            <ol className="list-decimal sm:w-[600px] lg:w-[800px] ">
              <li>Razumevanje vašeg bola</li>
              <li>Smanjite stres</li>
              <li>Povežite se bolje</li>
              <li>Poboljšajte fokus</li>
              <li>Smanjite brbljanje mozga</li>
            </ol>
          </section>
        </FadeInWhenVisible>

        {/* Kako meditirati */}
        <FadeInWhenVisible>
          <section className="my-6 text-oliveDark" id="howtomeditate">
            <h2 className="text-4xl font-bold mb-2 ">Kako meditirati?</h2>
            <h3 className="text-xl font-light mb-2 ">
              Meditacija je nešto što može svako, a evo i kako.
            </h3>
            <div className="w-full bg-oliveDark h-[5px] my-3 sm:w-[600px] lg:w-[800px] " />
            <p className="text-base font-medium text-justify sm:w-[600px] lg:w-[800px] ">
              Meditacija je jednostavnija (i teža) nego što većina ljudi misli.
              Pročitajte ove korake, uverite se da ste negde gde možete da se
              opustite u ovom procesu, podesite tajmer i pokušajte
              <span className="block my-2">
                1) Pronađite mesto za sedenje koje vam deluje mirno i tiho.
              </span>
              <span className="block my-2">
                2) Ako tek počinjete, može vam pomoći da odaberete kratko vreme,
                na primer pet ili 10 minuta.
              </span>
              <span className="block my-2">
                3) Možete sedeti u stolici sa nogama na podu, možete sedeti
                labavo prekriženih nogu, možete klečati — sve je u redu. Samo se
                uverite da ste stabilni i u poziciji u kojoj možete da ostanete
                neko vreme.
              </span>
              <span className="block my-2">
                4) Pratite osećaj svog daha dok ulazi i izlazi.
              </span>
              <span className="block my-2">
                5) Neizbežno, vaša pažnja će napustiti dah i odlutati na druga
                mesta. Kada primetite da vam je um odlutao – za nekoliko
                sekundi, minut, pet minuta – jednostavno vratite pažnju na dah.
              </span>
              <span className="block my-2">
                6) Ne osuđujte sebe ili opsednite sadržajem misli u kojima ste
                se izgubili. Samo se vratite.
              </span>
              <span className="block mt-2 mb-4">
                7) Kada budete spremni, nežno podignite pogled (ako su vam oči
                zatvorene, otvorite ih). Odvojite trenutak i primetite sve
                zvukove u okruženju. Obratite pažnju na to kako se vaše telo
                trenutno oseća. Obratite pažnju na svoje misli i emocije.
              </span>
              To je to! To je praksa. Usredsređujete svoju pažnju, vaš um luta,
              vraćate je i trudite se da to učinite što je moguće ljubaznije
              (koliko puta je potrebno).To je to! To je praksa. Usredsređujete
              svoju pažnju, vaš um luta, vraćate je i trudite se da to učinite
              što je moguće ljubaznije (koliko puta je potrebno).
            </p>
          </section>
        </FadeInWhenVisible>
        {/* Besplatne meditacije */}
        <FadeInWhenVisible>
          <section className="my-6 text-yellowDark" id="freemditations">
            <h2 className="text-4xl font-bold mb-2 ">Besplatne meditacije</h2>
            <h3 className="text-xl font-light mb-2 ">
              Prepustite se nekoj od mojih meditacija.
            </h3>
            <div className="w-full bg-yellowDark h-[5px] my-3 sm:w-[600px] lg:w-[800px] " />
            <div className="my-5 lg:grid grid-cols-2 lg:w-[800px] ">
              {videoArr.map(({ title, id, thumb }, i) => {
                return (
                  <div className="" key={id}>
                    <h2 className="mx-auto text-xl font-bold my-4 text-center text-yellowDark">
                      {title}
                    </h2>
                    <div className="relative lg:w-[380px] mx-auto">
                      <img
                        alt={title}
                        src={thumb}
                        className="w-full mb-2 lg:w-[380px] lg:mx-auto"
                      />

                      <button
                        className="btn__glow mx-auto mt-2 absolute w-full h-full inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => openModal(i)}
                      >
                        <img className="w-12" src={iconPlay} alt="play" />
                      </button>
                    </div>
                    <ModalVideo
                      channel="youtube" //
                      isOpen={isOpen[i]}
                      videoId={id} //
                      onClose={() =>
                        setIsOpen((prevState) => {
                          const newState = [...prevState];
                          newState[i] = false;
                          return newState;
                        })
                      }
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInWhenVisible>
      </div>
    </Layout>
  );
}

export default meditation;
