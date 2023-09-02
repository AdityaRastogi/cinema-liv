import { imageUrlFormatter } from "../utils/appConstants";

const FeaturedCard = ({ movie }) => {
  return (
    <div className="w-full bg-gradient-to-tl bg-black">
      <div className="cursor-pointer w-screen lg:w-full h-screen">
        <img
          alt="poster"
          className="w-screen h-full brightness-50"
          src={imageUrlFormatter(movie?.Poster)}
        ></img>
        <div className="absolute text-white top-[30%] p-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">{movie?.Title}({movie?.Year})</h1>
        <p className="my-4 mx-1 w-1/3">{movie?.Plot}</p>
        <h1 className="text-3xl">🏆: <span className="text-xl">{movie?.Awards}</span></h1>
        
        </div>
        
      </div>
    </div>
  );
};

export default FeaturedCard;
