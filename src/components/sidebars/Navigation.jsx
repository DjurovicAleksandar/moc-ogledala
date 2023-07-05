import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import facebook from "../../assets/images/socials/facebook.png";
import instagram from "../../assets/images/socials/instagram.png";
import linkedin from "../../assets/images/socials/linkedin.png";
import youtube from "../../assets/images/socials/youtube.png";

import logo from "../../assets/images/logo.png";
import { useState } from "react";

function NavigationBar({ animationVariants }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const pageNav = [
    { title: "Početna", href: "/" },
    { title: "O meni", href: "/o-meni" },
    {
      title: "Usluge",
      href: "#",
      submenu: [
        {
          title: "Meditacija",
          href: "/meditacija",
        },
        {
          title: "PEAT",
          href: "/peat-tehnika",
        },
        {
          title: "BARS",
          href: "/bars-tehnika",
        },
        {
          title: "Coaching",
          href: "/coaching",
        },
      ],
    },
    { title: "Knjige", href: "/knjige" },
    { title: "Blog", href: "/blog" },
    { title: "Kontakt", href: "/kontakt" },
  ];

  const socials = [
    {
      src: linkedin,
      href: "https://www.linkedin.com/in/zvezdana-milojkovic-53343569/",
    },
    {
      src: facebook,
      href: "https://www.facebook.com/groups/701406467469760",
    },
    {
      src: instagram,
      href: "https://www.instagram.com/zvezdanazveki/",
    },
    {
      src: youtube,
      href: "https://www.youtube.com/channel/UCYtFIwGSYUKjH5JdmUsVKig",
    },
  ];

  return (
    <motion.div
      className={`fixed top-0 z-[2000] font-medium w-full  sm:mx-auto`}
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      transition={animationVariants.transition}
    >
      <div className="w-full relative  lg:px-4 py-8 flex items-center justify-between">
        <div className="w-[5rem] sm:w-[7rem] lg:w-[10rem] px-2">
          <img className="w-full  translate-x-[-30%]" alt="Logo" src={logo} />
        </div>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="text-xs sm:hidden text-oliveDark"
        >
          Meni
        </button>
        <nav className={`hidden sm:flex ranslate-x-[-30%]`}>
          {pageNav.map((e, i) => {
            return (
              <div
                key={i}
                className={`${
                  i !== pageNav.length - 1 && "mr-4"
                } relative group text-xs lg:text-[14px] group`}
              >
                <Link to={e.href}>{e.title}</Link>
                {e.submenu ? (
                  <ul
                    className={`absolute top-5 left-0 right-0 z-[100] hidden ${
                      e.submenu && "group-hover:block"
                    }`}
                  >
                    {e.submenu.map((dropdown, i) => {
                      return (
                        <motion.li whileHover={{ scale: 1.1 }} key={i}>
                          <Link to={dropdown.href}>{dropdown.title}</Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                ) : null}

                <span
                  className={`absolute inline-block left-0 -bottom-0.5 h-[0.5px] group-hover:w-full duration-300 ease-in-out bg-dark ${
                    location.pathname === e.href ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </div>
            );
          })}
        </nav>

        {showMenu && (
          <nav
            className={`fixed w-full h-[30vh] bg-oliveDark sm:hidden text-white  flex flex-col items-center justify-center gap-10 z-[2000]`}
          >
            <div className="flex">
              {pageNav.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i !== pageNav.length - 1 && "mr-4"
                    } relative group text-xs lg:text-[14px] group`}
                  >
                    <Link to={e.href}>{e.title}</Link>
                    {e.submenu ? (
                      <ul
                        className={`absolute top-5 left-0 right-0 z-[100] hidden ${
                          e.submenu && "group-hover:block"
                        }`}
                      >
                        {e.submenu.map((dropdown, i) => {
                          return (
                            <motion.li whileHover={{ scale: 1.1 }} key={i}>
                              <Link to={dropdown.href}>{dropdown.title}</Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    ) : null}

                    <span
                      className={`absolute inline-block left-0 -bottom-0.5 h-[0.5px] group-hover:w-full duration-300 ease-in-out bg-dark ${
                        location.pathname === e.href ? "w-full" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              className="rounded-full border-white border-[1px] px-3 py-1 hover:bg-white hover:text-oliveDark hover:border-oliveDark cursor-pointer ease-linear duration-300"
              onClick={() => setShowMenu(false)}
            >
              X
            </button>
          </nav>
        )}

        <nav
          className="flex gap-1 px-2 lg:px-0
      "
        >
          {socials.map((social) => {
            return (
              <motion.a
                key={social.src + 1}
                href={social.href}
                target={"_blank"}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={social.src}
                  alt={social.src.slice(social.src.lastIndexOf("/") + 1)}
                  className="w-[1rem] sm:w-[1.2rem] lg:w-[1.4rem]"
                />
              </motion.a>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}

export default NavigationBar;
