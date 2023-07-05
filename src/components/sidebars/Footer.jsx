import { Link } from "react-router-dom";
import Layout from "../auxiliary__components/Layout";
import { motion } from "framer-motion";
import footerHeader from "../../assets/images/about/aboutHeader.jpg";

function Footer() {
  const footerNav = [
    { title: "Početna", href: "/" },
    { title: "Omeni", href: "/o-meni" },
    { title: "Usluge", href: "#" },
    { title: "Knjige", href: "/knjige" },
    { title: "Blog", href: "/blog" },
    { title: "Kontakt", href: "/kontakt" },
  ];

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const socials = [
    {
      src: "/images/svgs/linkedin.png",
      href: "https://www.linkedin.com/in/zvezdana-milojkovic-53343569/",
    },
    {
      src: "/images/svgs/facebook.png",
      href: "https://www.facebook.com/groups/701406467469760",
    },
    {
      src: "/images/svgs/instagram.png",
      href: "https://www.instagram.com/zvezdanazveki/",
    },
    {
      src: "/images/svgs/youtube.png",
      href: "https://www.youtube.com/channel/UCYtFIwGSYUKjH5JdmUsVKig",
    },
  ];

  return (
    <footer className="w-full h-[200px] border-t-[1px] border-oliveDark text-black/80 font-medium text-xs relative">
      <div className="absolute inset-0">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-0 gap-4 p-2 ">
          <p className="lg:w-[600px] text-[10px] lg:text-base">
            <span className="mb-1 inline-block">
              {" "}
              © 2023 Moć ogledala. Sva prava zadržana.{" "}
            </span>
            <br />
            Ova stranica je izvor za unutrašnji razvoj i inspiraciju. Uz moju
            podršku kroz meditacije, PEAT, BARS-e i coaching, želim da vam
            pomognemo na vašem putu transformacije.
          </p>
          <ul className="flex items-center text-[10px] lg:text-base justify-center gap-2 order-first sm:order-second">
            {footerNav.map((e, i) => {
              return (
                <motion.li
                  onClick={() => {
                    if (e.href === "#") scrollToTop();
                    else window.location.href = e.href;
                  }}
                  whileHover={{ scale: 1.1, color: "#ff6961" }}
                  key={e.title + i}
                  className="hover:scale-110 duration-100 ease-linear my-1 lg:my-0 cursor-pointer"
                >
                  <Link
                    // key={i + "-" + e.title}

                    // path={e.href}
                    className={`${i !== footerNav.length - 1 && "lg:mr-2"}`}
                  >
                    {e.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="h-[1px] bg-dark w-full my-2">&nbsp;</div>
        <div className="w-full flex items-center justify-center py-2">
          <a target="_blank" href="https://aleksandardjurovic.netlify.app/">
            Copyright © Developed by Aleksandar Đurović
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
