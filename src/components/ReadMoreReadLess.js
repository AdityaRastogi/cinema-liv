import { useState } from "react";
import { LANG } from "../utils/appConstants";

const ReadMoreReadLess = ({ plot }) => {
  const [readMore, setReadMore] = useState(true);
  const plotValue = readMore ? plot.substring(0, 200) + "..." : plot;
  const textsGeneral = LANG.en.general;
  const buttonText = readMore ? textsGeneral.readMore : textsGeneral.readLess;

  const toggleReadMoreLess = () => {
    setReadMore(!readMore);
  };

  return (
    <div className=" flex flex-wrap w-full">
      <p className="my-4 mx-1 w-[200%] text-xs md:text-sm lg:text-xl">
        {plotValue}
      </p>
      <button
        className="underline bg-pink bg-opacity-30 text-white px-4 py-2 mb-4"
        onClick={toggleReadMoreLess}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
