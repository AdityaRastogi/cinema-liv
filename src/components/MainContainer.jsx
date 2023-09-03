import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeaturedList from "./FeaturedList";

const MainContainer = () => {
  const navigate = useNavigate();
  const featuredMovies = useSelector((store) => store.movies.featuredMovies);
  useEffect(() => {
    if (!featuredMovies) navigate("/");
  }, []);
  return (
    <div data-testid="main-container-page">
      <FeaturedList movies={featuredMovies} />
    </div>
  );
};
export default MainContainer;
