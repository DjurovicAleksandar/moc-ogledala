import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Meditation from "../pages/skills/Meditation";
import Bars from "../pages/skills/Bars";
import Peat from "../pages/skills/Peat";
import Coaching from "../pages/skills/Coaching";
import Books from "../pages/Books";
import Blog from "../pages/Blog";
import Navigation from "../sidebars/Navigation";
import Footer from "../sidebars/Footer";
import Contact from "../pages/Contact";
import { useEffect, useRef, useState } from "react";

const Root = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScroll = useRef(window.scrollY);

  const [animationVariants, setAnimationVariants] = useState({
    initial: { y: 0, opacity: 1 },
    whileInView: { y: -200, opacity: 0 },
    transition: { duration: 1, type: "smooth" },
  });

  const handleScroll = () => {
    if (window.scrollY <= lastScroll.current) setScrollDirection("up");
    else setScrollDirection("down");

    lastScroll.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "up" || window.scrollY === 0) {
      setAnimationVariants({
        initial: { y: -200, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, type: "smooth" },
      });
    } else {
      setAnimationVariants({
        initial: { y: 0, opacity: 1 },
        animate: { y: -200, opacity: 0 },
        transition: { duration: 1, type: "smooth" },
      });
    }
  }, [scrollDirection]);
  return (
    <div className="relative">
      <Navigation animationVariants={animationVariants} />
      <Outlet context={[]} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* This is the first thing what user sees when he visit the app */}
      <Route index element={<Home />} />
      {/* Pages */}
      <Route path="/o-meni" element={<About />} />
      {/* Skills */}
      <Route path="/meditacija" element={<Meditation />} />
      <Route path="/bars-tehnika" element={<Bars />} />
      <Route path="/peat-tehnika" element={<Peat />} />
      <Route path="/coaching" element={<Coaching />} />
      {/* Pages */}
      <Route path="/knjige" element={<Books />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/kontakt" element={<Contact />} />
    </Route>
  )
);

export default router;
