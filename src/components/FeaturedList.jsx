import FeaturedCard from "./FeaturedCard";

const FeaturedList = ({ movies }) => {
  if (!movies) return;
  return (
    <div data-testid="featured-list" className="grid grid-cols-12">
      {movies.map((movie, index) => (
        <div
          key={"movies-featured-list" + index}
          className="col-span-8 lg:col-span-6"
        >
          <FeaturedCard key={movie?.imdbID} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedList;
