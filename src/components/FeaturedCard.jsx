import { imageUrlFormatter } from "../utils/helperFunctions";

const FeaturedCard = ({ movie }) => {
  const { Poster, Title, Year, Plot, Awards } = movie;
  const readMore = Plot.substring(0, 200) + "...Read More";
  const readLess = Plot + "...ReadLess";
  return (
    <div className="relative w-full bg-gradient-to-tl bg-black">
      <div className="cursor-pointer w-screen lg:w-full h-screen">
        <img
          alt="poster"
          className="w-screen h-full brightness-50"
          src={imageUrlFormatter(Poster)}
        ></img>
        <div className="absolute text-white top-[30%] p-8">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">
            {Title}({Year})
          </h1>
          <p className="my-4 mx-1 w-full lg:w-full">{readMore}</p>
          <h1 className="text-sm md:text-2xl lg:text-3xl">
            🏆: <span className="text-xs md:text-lg lg:text-xl">{Awards}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
