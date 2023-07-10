import React from "react";

function ReadMoreModal({ bookDescription, isOpen, setIsOpen }) {
  return (
    <div className="fixed z-50 inset-0 h-full  bg-light/30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-4/5 md:w-[600px] text-justify py-20 px-8 text-xs md:text-base modal">
        <p className="font-medium w-4/5  italic mx-auto">{bookDescription}</p>
        <button
          className="w-fit block mx-auto mt-28 hover:rounded-full hover:bg-dark/75 hover:border-transparent hover:text-light duration-100 ease-linear border-[1px] border-dark px-4 py-2"
          onClick={() => setIsOpen(false)}
        >
          Zatvori
        </button>
      </div>
    </div>
  );
}

export default ReadMoreModal;
