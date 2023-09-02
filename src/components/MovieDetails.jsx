import { useDispatch, useSelector } from "react-redux";
import { imageUrlFormatter } from "../utils/helperFunctions";
import { addShowMovieDetailPage } from "../utils/storeslices/moviesSlice";
import { capitaliseFirstChar } from "../utils/helperFunctions";
import InfoButton from "./InfoButton";
import { LANG } from "../utils/appConstants";

const MovieDetails = () => {
  const movieDetail = useSelector((store) => store?.movies?.movieDetails);
  const dispatch = useDispatch();

  if (!movieDetail) return;
  const genres = movieDetail?.Genre.split(",");
  const writers = movieDetail?.Writer.split(",");
  const actors = movieDetail?.Actors.split(",");
  const handleBack = () => {
    dispatch(addShowMovieDetailPage(false));
  };

  return (
    <div className="w-screen  text-white p-10 relative">
      <button
        className="underline-offset-2 px-4 cursor-pointer right-10 top-0 absolute text-white rounded text-xl"
        onClick={handleBack}
      >
        ⇦ {LANG.en.movieDetail.back}
      </button>

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3">
          <div className="  justify-center flex w-full">
            <img
              alt="poster"
              className="w-80 h-1/6"
              src={imageUrlFormatter(movieDetail?.Poster)}
            ></img>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 m-4">
              <h1 className="text-xl md:text-2xl lg:text-7xl font-bold">
                {movieDetail?.Title}
              </h1>
              <p className="w-full mt-8">{movieDetail?.Plot}</p>
              <InfoButton title={LANG.en.movieDetail.genres} infoAbout={genres} />

              <InfoButton title={LANG.en.movieDetail.writers} infoAbout={writers} />
              <InfoButton title={LANG.en.movieDetail.actors} infoAbout={actors} />
            </div>
            <div className="col-span-12 lg:col-span-3 mt-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold m-4 mt-4">
                {movieDetail?.imdbRating} ⭐{" "}
              </h2>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold m-4 mt-4">
                {LANG.en.movieDetail.type}
                <span className="font-normal text-pink">
                  {capitaliseFirstChar(movieDetail?.Type)}
                </span>
              </h2>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold m-4 mt-4">
              {LANG.en.movieDetail.releasedIn}
                <span className="font-normal text-pink">
                  {movieDetail?.Year}
                </span>
              </h2>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold m-4 mt-4">
              {LANG.en.movieDetail.rated}
                <span className="font-normal text-pink">
                  {movieDetail?.Rated}
                </span>
              </h2>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold m-4 mt-4">
              {LANG.en.movieDetail.awards}
                <span className="font-normal text-pink">
                  {movieDetail?.Awards}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
