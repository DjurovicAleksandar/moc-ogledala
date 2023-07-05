import Layout from "../../auxiliary__components/Layout";

import coachingHeader from "../../../assets/images/services/coaching/coachingHeader.jpg";
import AnimatedText from "../../auxiliary__components/AnimatedText";

function Coaching() {
  return (
    <Layout className="">
      <div className="mb-16 text-gray-900 text-2xl lowercase text-center w-full h-screen font-thin relative">
        <img
          src={coachingHeader}
          alt="Bars header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex items-center justify-end">
          <div className="mr-28 flex flex-col items-center justify-center gap-4">
            <AnimatedText
              text="Otključavanje unutrašnje harmonije dodirom"
              className="text-2xl sm:text-5xl text-right sm:w-[500px]"
            />
            <h3 className="text-base lg:text-lg text-[#8c7a73] text-justify font-medium w-[300px] self-end">
              Put do ravnoteže, lečenja i transformacije.
            </h3>
            <a
              className="hover:rounded-full text-base lg:text-lg font-medium hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear  border-[1px] border-dark px-2 py-1 lg:px-4 lg:py-2 flex items-center justify-center gap-2 w-fit self-end"
              href="tel:00393772648078"
              target="_blank"
            >
              book
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Coaching;
