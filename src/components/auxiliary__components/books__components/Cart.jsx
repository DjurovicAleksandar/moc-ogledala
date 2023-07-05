import React, { useEffect, useState } from "react";

function Cart() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submit logic, such as adding the selected option to the cart
    console.log("Selected Option:", selectedOption);
  };

  useEffect(() => {
    setSelectedOption("Meko izdanje");
  }, []);

  return (
    <>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        <div className="group w-[80%] flex items-center justify-between">
          <label
            className="group-hover:text-cyan-900 "
            style={{
              color: selectedOption === "Meko izdanje" && "rgb(14,116,144",
              opacity: selectedOption === "Meko izdanje" && 0.7,
            }}
          >
            <input
              type="radio"
              value="Meko izdanje"
              checked={selectedOption === "Meko izdanje"}
              onChange={handleOptionChange}
              className="mr-4"
            />
            Meko izdanje
            <span
              className="text-xs text-gray-600 block font-medium group-hover:text-cyan-900 mt-2"
              style={{
                color: selectedOption === "Meko izdanje" && "rgb(14,116,144",
                opacity: selectedOption === "Meko izdanje" && 0.7,
              }}
            >
              Kvalitetno izdanje na papiru A3 formata, sa mekim koricama.
            </span>
          </label>
          <div>
            <p
              className="text-gray-800 text-xl font-medium group-hover:text-cyan-900"
              style={{
                color: selectedOption === "Meko izdanje" && "rgb(14,116,144",
                opacity: selectedOption === "Meko izdanje" && 0.7,
              }}
            >
              10 &euro;
            </p>
          </div>
        </div>
        <div className="group w-[80%] flex items-center justify-between">
          <label
            className="group-hover:text-cyan-900"
            style={{
              color: selectedOption === "eBook" && "rgb(14,116,144",
              opacity: selectedOption === "eBook" && 0.7,
            }}
          >
            <input
              type="radio"
              value="eBook"
              checked={selectedOption === "eBook"}
              onChange={handleOptionChange}
              className="mr-4"
            />
            Eknjiga
            <span
              className="text-xs text-gray-600 block font-medium group-hover:text-cyan-900 mt-2"
              style={{
                color: selectedOption === "eBook" && "rgb(14,116,144",
                opacity: selectedOption === "eBook" && 0.7,
              }}
            >
              Kvalitetan digitalni primjerak u PDF formatu.
            </span>
          </label>
          <div>
            <p
              className="text-gray-800 text-xl font-medium group-hover:text-cyan-900"
              style={{
                color: selectedOption === "eBook" && "rgb(14,116,144",
                opacity: selectedOption === "eBook" && 0.7,
              }}
            >
              4 &euro;
            </p>
          </div>
        </div>

        <input
          className="hover:rounded-full hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear border-[1px] border-dark px-4 py-2 mt-4"
          type="submit"
          value={
            selectedOption === "eBook"
              ? "Nastavi sa kupovinom"
              : "Naručite knjigu"
          }
        />
      </form>
      <button className="block mx-auto hover:rounded-full hover:bg-dark hover:border-transparent hover:text-light duration-100 ease-linear border-[1px] border-dark px-4 py-2 mt-28">
        Preuzmi deo knjige
      </button>
    </>
  );
}

export default Cart;
