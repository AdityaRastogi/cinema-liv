import MovieCard from "./MovieCard";

const MovieList = ({ rowTitle, movies }) => {
  if (!movies) return;

  return (
    <div className="px-6 absolute bottom-20">
      <h1 className="text-white py-8 font-bold text-3xl pl-8">{rowTitle}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex pl-8">
          {movies.map((movie) => (
            <MovieCard key={movie?.imdbID} data={{ poster: movie?.Poster }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
