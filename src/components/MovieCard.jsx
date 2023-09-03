import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_API_WITH_ID,
  SEARCH_PLOT_API_PARAM,
} from "../utils/appConstants";
import { capitaliseFirstChar } from "../utils/helperFunctions";
import {
  addMovieDetails,
  addShowMovieDetailPage,
} from "../utils/storeslices/moviesSlice";

const MovieCard = ({ poster, type, title, year, imdbId }) => {
  const dispatch = useDispatch();
  const plotValue = useSelector((store) => store.search.searchPlot);
  const handleSelectMovie = () => {
    dispatch(addShowMovieDetailPage(true));
    fetchMovieDetails();
  };

  const fetchMovieDetails = async () => {
    const movieDetails = await fetch(
      `${SEARCH_API_WITH_ID}${imdbId}${SEARCH_PLOT_API_PARAM}${plotValue}`,
    );
    const movieDetailsJson = await movieDetails.json();
    dispatch(addMovieDetails(movieDetailsJson));
  };

  return (
    <div data-testid="movie-card" className="relative pr-0 md:pr-4 mb-20 cursor-pointer border mr-4 rounded">
      <img
        data-testid="movie-card-image"
        alt="poster"
        className="w-full md:w-56 md:h-5/6 brightness-50 hover:brightness-100 border hover:border-pink"
        src={poster}
        onClick={handleSelectMovie}
      ></img>

      <span className="inline-flex absolute top-0 items-center justify-center px-2 py-2 text-xs w-[90] h-8 font-bold  text-white bg-pink">
        {capitaliseFirstChar(type)}
        <span className="text-xs font-normal ">({year})</span>
      </span>
      <div className="text-white absolute w-full text-light">
        <h3 data-testid="movie-card-title" className="font-bold mt-4">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
