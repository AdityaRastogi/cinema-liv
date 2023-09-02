import FeaturedCard from "./FeaturedCard";

const FeaturedList = ({ rowTitle, movies }) => {
  if (!movies) return;
  return (
    <div className="grid grid-cols-12">
      {movies.map((movie) => (
        <div className="col-span-8 lg:col-span-6">
          <FeaturedCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedList;
