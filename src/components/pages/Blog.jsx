import Layout from "../auxiliary__components/Layout";
import AnimatedText from "../auxiliary__components/AnimatedText";

import blogpost from "../../assets/images/blog/blogpost.jpg";

import { motion } from "framer-motion";

import { articles } from "../config/DataBase";
import TransitionEffect from "../auxiliary__components/TransitionEffect";

function blog() {
  return (
    <Layout className="pt-16 mt-16">
      <TransitionEffect />
      <div className="mb-16 text-oliveDark text-2xl lowercase text-center w-full font-thin">
        <h3 className="mb-5">dobro došli na moj blog</h3>
        <AnimatedText
          text="Reči mogu promeniti svet"
          className="text-4xl lg:text-8xl text-center text-purpleDark"
        />
      </div>
      <div className="my-32">
        <h2 className="text-3xl lg:text-6xl text-pastelRed font-bold text-center my-20">
          Poslednje objave
        </h2>
        <ul className="w-full grid grid-cols-12 gap-1 lg:gap-12 p-4">
          {articles.map(({ articleID, name, content, shortDescription }) => {
            return (
              <motion.li
                key={articleID}
                className="col-span-12 sm:col-span 6 lg:col-span-4 p-8 bg-purpleDark relative group "
              >
                <img src={blogpost} alt="Blog post" className="w-full" />
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  className="px-6 py-4 flex flex-col items-center justify-around group-hover:z-50 absolute inset-0 bg-gradient-to-b from-dark backdrop-blur-[2px] h-full w-full "
                >
                  <h2 className="font-black text-light text-base lg:text-2xl text-center uppercase">
                    {name}
                  </h2>
                  <p className="text-light font-light text-base mt-4 text-justify">
                    {shortDescription}
                  </p>
                  <a
                    // href={`http://localhost:3000/post/${articleID + 1}`}
                    target="_blank"
                    className="underline text-[12px] lg:text-[18px] font-bold my-4 text-pastelRed w-full text-justify"
                  >
                    Pročitajte čitav članak...
                  </a>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="my-32">
        <h2 className="text-3xl lg:text-6xl text-pastelRed font-bold text-center my-20">
          Svi postovi
        </h2>
        <ul className="w-[80%] mx-auto flex flex-col items-start justify-between gap-5 ">
          {articles.map(
            ({ articleID, name, content, shortDescription, date }) => {
              return (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                  }}
                  whileHover={{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    border: "1px solid #FAA0A0",
                    color: "#FAA0A0",
                  }}
                  key={articleID}
                  className="cursor-pointer w-full shadow-lg p-8 text-oliveDark"
                >
                  <a>
                    <motion.div className="h-full w-full flex items-center justify-between">
                      <div>
                        <h2 className="font-black text-lg lg:text-2xl uppercase">
                          {name}
                        </h2>
                        <p className="text-dark/75 lg:font-light text-xs lg:text-base mt-4">
                          {shortDescription}
                        </p>
                      </div>
                      <p className="text-[18px] font-light my-4">{date}</p>
                    </motion.div>
                  </a>
                </motion.li>
              );
            }
          )}
        </ul>
      </div>
    </Layout>
  );
}
// href={`http://localhost:3000/post/${articleID + 1}`}
export default blog;
