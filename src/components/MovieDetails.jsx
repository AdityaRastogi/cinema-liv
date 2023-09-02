import { useSelector } from "react-redux";

const MovieDetails = () => {
    const movieDetail= useSelector(store=>store?.movies?.movieDetails)
  return <div className="text-white">
    <h1>{movieDetail?.Title}</h1>
  </div>;
};

export default MovieDetails;
