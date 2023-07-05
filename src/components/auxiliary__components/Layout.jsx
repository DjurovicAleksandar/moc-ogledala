import { useEffect, useState } from "react";
// import Subscribe from "./auxiliaryComponents/Subscribe";
// import NewsletterModal from "./auxiliaryComponents/NewsletterModal";

function Layout({ children, className }) {
  //   const [showModal, setShowModal] = useState(false);
  //   const [isVissible, setIsVissible] = useState(false);

  //   useEffect(() => {
  //     const subscribeElement = document.querySelector(".subscribe");

  //     if (!subscribeElement) {
  //       setIsVissible(true);
  //     } else setIsVissible(false);
  //   }, []);
  return (
    <div
      onClick={(e) => {
        //To show or hide modal on click. If you click on anywhere what is not modal, it will close it.
        // if (
        //   e.target.id === "subscribe" ||
        //   e.target.closest("#newsletterModal")?.id === "newsletterModal"
        // )
        //   setShowModal(true);
        // else setShowModal(false);
      }}
      className={`z-0 bg-light w-full sm:mx-auto sm:w-[95%] lg:w-full  ${className} layout`}
    >
      {children}
      {/* {isVissible && (
        <Subscribe showModal={showModal} setShowModal={setShowModal} />
      )}
      {showModal && <NewsletterModal />} */}
    </div>
  );
}

export default Layout;
