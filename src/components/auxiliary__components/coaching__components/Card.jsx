import coaching from "../../../assets/images/services/coaching/section2.jpg";

function Card({ title, text, href }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-gray-200 bg-oliveDark rounded-lg shadow md:flex-row md:max-w-xl p-4 hover:bg-oliveDark/90 ">
        <div className="lg:w-[100rem] rounded-t-lg flex items-center">
          <img className="object-cover w-full" src={href} alt={title + "png"} />
        </div>
        <div className="p-4 leading-normal">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-purpleDark text-center">
            {title}
          </h5>
          <p className="mb-3 font-normal text-pastelRed text-xs md:text-base w-[200px]">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
