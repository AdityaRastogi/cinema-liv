import { useNavigate } from "react-router-dom";
import { addFeaturedMovies } from "../storeslices/moviesSlice";

const { useEffect } = require("react");
const { useDispatch } = require("react-redux");
const {
  PREDEFINED_MOVIES,
  SEARCH_API_WITH_ID,
  SEARCH_PLOT_API_PARAM,
  LANG,
} = require("../appConstants");

const useFeaturedMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeaturedMovies();
  }, []);

  const fetchFeaturedMovies = async () => {
    const featuredMovies = [];
    for (let i = 0; i < PREDEFINED_MOVIES.length; i++) {
      const movieDetails = await fetch(
        `${SEARCH_API_WITH_ID}${PREDEFINED_MOVIES[i]}${SEARCH_PLOT_API_PARAM}${LANG.en.general.plotFull}`,
      );

      const movieDetailsJson = await movieDetails.json();
      featuredMovies.push(movieDetailsJson);
    }
    if (featuredMovies.length) {
      dispatch(addFeaturedMovies(featuredMovies));
      navigate("/browse");
    }
  };
};

export default useFeaturedMovies;
