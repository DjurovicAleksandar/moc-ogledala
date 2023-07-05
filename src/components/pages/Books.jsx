import { useState } from "react";

import { motion } from "framer-motion";

import Layout from "../auxiliary__components/Layout";
import AnimatedText from "../auxiliary__components/AnimatedText";
import Cart from "../auxiliary__components/books__components/Cart";

import book3 from "../../assets/images/books/book3.jpg";
import book1 from "../../assets/images/books/book1.jpg";
import book2 from "../../assets/images/books/book2.jpg";
import book3A from "../../assets/images/books/book3A.jpg";

function book() {
  const [isOpen, setIsOpen] = useState(false);
  const [choosenBook, setChoosenBook] = useState(null);

  const books = [
    {
      bookID: 0,
      bookSrc: book1,
      bookName: "Moja životna priča",
      shortDescription: "Moja zivotna priča” autentična autobiografska knjiga.",
      bookDescription:
        "“Moja zivotna priča” autentična autobiografska knjiga. Ispovest jedne uplašene devojčice koja je naučila da zivi svoje snove. 2020-a je godina sve više mi se mota po glavi da napišem svoj prvenac “Moja zivotna priča”, pisala sam neke redove u grupi “Kako zavoleti sebe-Stella”, bilo je to ogorčeno i nesigurno pisanje. Dešavaju mi se razne edukacije u medjuvremenu i počinjem da rasipam pisanje preko e-maila, nesigurnost…tek kada sam sa starijom ćerkom započela pisanje i posle preko kompjutera preradu osvestila sam zašto ranije nije išlo. Krajem 2020 godine sam završila knjigu, 2021 godine u martu bilo je prvo izdanje a u novembru iste godine drugo izdanje…sada sa izdavačkom kućom Draslar. Sve uz pomoć starije ćerke. Dali će imati još neko svoje izdanje pokazaće vreme. ",
    },

    {
      bookID: 1,
      bookSrc: book2,
      bookName: "U susret svesnosti",
      shortDescription: "U susret svesnosti” je motivaciona knjiga.",
      bookDescription:
        "“U susret svesnosti” je motivaciona knjiga, hrabrost da podelim moje iskustvo kroz tehnike, alate za lični rast i razvoj i mudrosti mog kraja. 2020 gidina, pandemija…ni iz dvorišta nisi mogao nigde da izadješ. Počela sam da pišem u svesci neke teme…čini se ni od kuda. Pisala sam svaki dan…nisam ni čitala šta sam pisala…ruka je sama pisala. Starija ćerka je imala za zadatak da iz sveske prepiše na kompjuter, njen laptop jer mi tada stari kompjuter nije radio…ništa ne zaustavlja proces ako nešto treba da se desi. Po prvi put čujem od starije ćerke “mama ponosna sam na tebe”, inače teze iskaze emociju…suze su mi lile. Dok sam preradila teme na kompjuteru osvestila sam zašto je to rekla. Tako nastaje druga knjiga “U susret svesnosti” koja i nije baš dozivela uspeh…nikad se ne zna. Moze čak da dozivi neko novo izdanje. Ima tu svačega ispod. ",
    },
    {
      bookID: 2,
      bookSrc: book3A,
      bookName: "Hvala Nebesima na svim Čudesima",
      shortDescription:
        "Hvala Nebesima na svim Čudesima je motivaciona i autobigrafska knjiga.",
      bookDescription:
        "“Hvala Nebesima na svim Čudesima” je motivaciona i autobiografska knjiga sa inspirativnim temama iz stvarnog zivota, moj pogled na zivot. 2020 godina teče…lavina reči izvire iz moje duše…kao da mi je neko isčupao nevidljivi čep. Pišem i ne vraćam se nazad da pročitam…samo pišem. Teme “Jedna pred spavanje” i “Verujem” izlazile su same dan po dan kao da mi neko šapuće…tiho, najtiše…mozda je to bio šapat duše. Kada sam prelistala šta sam napisala prvo sam mislila da knjigu nazovem “Jedana pred spavanje” a da posebno ide “Verujem”, nije mi se dalo. Prebacila sam sve u jedno i dalje sam razmišljala koje ime da bude…tu od ❤ zahvaljujem teta Spomi za ideju od koje od početka nije odstupala a to je “Hvala Nebesima na svim Čudesima”…rečenica koju zivim punim plućima. Stvarno kada sam stavila “pravo” ime pokrenulo se sve…tako je sama knjiga pokrenula lavinu pozitivnog. ",
    },
  ];

  const bookDescription = [
    "“Moja zivotna priča” autentična autobiografska knjiga. Ispovest jedne uplašene devojčice koja je naučila da zivi svoje snove. 2020-a je godina sve više mi se mota po glavi da napišem svoj prvenac “Moja zivotna priča”, pisala sam neke redove u grupi “Kako zavoleti sebe-Stella”, bilo je to ogorčeno i nesigurno pisanje. Dešavaju mi se razne edukacije u medjuvremenu i počinjem da rasipam pisanje preko e-maila, nesigurnost…tek kada sam sa starijom ćerkom započela pisanje i posle preko kompjutera preradu osvestila sam zašto ranije nije išlo. Krajem 2020 godine sam završila knjigu, 2021 godine u martu bilo je prvo izdanje a u novembru iste godine drugo izdanje…sada sa izdavačkom kućom Draslar. Sve uz pomoć starije ćerke. Dali će imati još neko svoje izdanje pokazaće vreme.",
  ];

  return (
    <>
      {/* MODAL */}
      {isOpen && (
        <div className="fixed z-50 inset-0 h-full  bg-light/30 backdrop-blur-sm flex items-center justify-center">
          <div className="w-4/5 md:w-[600px] text-justify py-20 px-8 text-xs md:text-base modal">
            <p className="font-medium w-4/5  italic mx-auto">
              {books[choosenBook].bookDescription}
            </p>
            <button
              className="w-fit block mx-auto mt-28 hover:rounded-full hover:bg-dark/75 hover:border-transparent hover:text-light duration-100 ease-linear border-[1px] border-dark px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Zatvori
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      <Layout className="pt-16 mt-16 bg-light/90">
        <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full font-thin">
          <h3 className="mb-5 text-base">Detaljni uvid u moj svet.</h3>
          <AnimatedText
            text="Knjige"
            className="text-4xl lg:text-8xl text-center"
          />
        </div>
        {/* Header */}
        <div className="w-full  lg:flex items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tweek" }}
            className="relative w-full lg:w-1/2"
          >
            <div className="w-[1px] h-full bg-dark absolute -left-5 -translate-x-1/2 hidden lg:block " />
            <div className="text__container p-4">
              <h4 className="text-gray-400 font-light text-xs lg:text-2xl">
                Doživite čudesno
              </h4>
              <h3 className="text-gray-500 font-normal text-xl lg:text-4xl mb">
                Uronite u transformativni svet u mojoj najnovijoj knjizi:
              </h3>
              <h2 className="text-dark/75 font-bold text-2xl lg:text-8xl">
                Hvala nebesima na svim čudesima
              </h2>
            </div>
          </motion.div>
          {/* Book */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tweek" }}
            className="w-full lg:w-w-1/2 relative"
          >
            <img
              className="w-[10rem] lg:w-[30rem] mx-auto h-auto z-50 shadow-2xl shadow-dark"
              src={book3}
              alt="Hvala nebesima na svim čudesima"
            />

            <div className="absolute bottom-5 w-full flex items-center justify-center gap-10 mt-5 ">
              <a
                className="text-xs lg:text-2xl rounded-full bg-dark text-light duration-100 ease-linear px-4 py-2 flex items-center justify-center gap-2 hover:scale-110 active:scale-90"
                href="tel:00393772648078"
                target="_blank"
              >
                Naručite
                <span className="">&#128214;</span>
              </a>
              <a
                className="text-xs lg:text-2xl rounded-full bg-dark text-light duration-100 ease-linear px-4 py-2 flex items-center justify-center gap-2 hover:scale-110 active:scale-90"
                href="mailto:zvezdana.stella@gmail.com"
                target="_blank"
              >
                Preuzmite deo <span className="">&#10507;</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="my-32">
          <p className="text-gray-400 font-bold text-xs text-center mb-4">
            Putem pera sebe ostavljam na papiru.
          </p>
          <h2 className="text__container text-center w-full text-4xl lg:text-6xl font-black mb-28">
            Moje knjige
          </h2>
          {/* Books */}
          {books.map(
            ({
              bookID,
              bookName,
              shortDescription,
              bookDescription,
              bookSrc,
            }) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, type: "spring" }}
                  key={bookID}
                  className="lg:flex items-start justify-between mb-8 border-t-[1px] border-dark/75 py-10"
                >
                  <div className="w-full lg:w-[25rem] sm:flex lg:block p-4">
                    <img
                      className="w-full h-auto"
                      src={bookSrc}
                      alt={bookName}
                    />
                    <button
                      className="text-xs sm:ml-20 my-5 text-center blcok w-full lg:hidden "
                      onClick={() => {
                        setChoosenBook(bookID);
                        setIsOpen(true);
                      }}
                    >
                      {shortDescription}
                      <br />
                      <span className="underline font-medium">
                        Pročitajte više...
                      </span>
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="font-black text-2xl lg:text-6xl mb-5 lg:w-[600px]">
                      {bookName}
                    </h2>
                    <button
                      className="text-xs hidden lg:inline-block"
                      onClick={() => {
                        setChoosenBook(bookID);
                        setIsOpen(true);
                      }}
                    >
                      {shortDescription}
                      <span className="underline font-medium">
                        Pročitajte više...
                      </span>
                    </button>
                    <p className="w-full text-right text-xs text-gray-800 mt-5">
                      Zvezdana Milojković Tujić
                    </p>
                    {/* Radio */}
                    <Cart />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Layout>
    </>
  );
}

export default book;
