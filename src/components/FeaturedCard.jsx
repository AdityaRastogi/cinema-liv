import { imageUrlFormatter } from "../utils/helperFunctions";
import ReadMoreReadLess from "./ReadMoreReadLess";

const FeaturedCard = ({ movie }) => {
  const { Poster, Title, Year, Plot, Awards } = movie;

  return (
    <div data-testid="featured-card" className="relative w-full">
      <div className="cursor-pointer w-screen lg:w-full h-screen">
        <img
          alt="poster"
          className="w-screen h-full brightness-50"
          src={imageUrlFormatter(Poster)}
        ></img>
        <div className="absolute text-white top-[30%] p-8 w-screen lg:w-full -mx-1 md:mx-4">
          <h1
            data-testid="featured-card-title-year"
            className="font-bold text-xl md:text-3xl lg:text-5xl"
          >
            {Title}({Year})
          </h1>
          <ReadMoreReadLess plot={Plot} />
          <h1 className="text-sm md:text-2xl lg:text-3xl">
            🏆:{" "}
            <span
              data-testid="featured-card-awards"
              className="text-xs md:text-lg lg:text-xl"
            >
              {Awards}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
