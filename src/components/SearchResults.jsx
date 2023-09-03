import { LANG } from "../utils/appConstants";
import MovieCard from "./MovieCard";
import SearchError from "./SearchError";

const SearchResults = ({ searchResults }) => {
  if (!searchResults) return <SearchError />;
  const texts = LANG.en.searchPage;
  const topFiveResults = searchResults.slice(0, 5);
  return (
    <div data-testid="search-results" className="w-full lg:absolute top-[40%]  mx-4 p-4 rounded-lg ">
      <h1 className="text-white font-bold text-xl md:text-2xl w-full text-center">
        {texts.searchResultsHeading}
      </h1>
      <div className="flex w-full px-8 pt-4 flex-wrap justify-center ">
        {topFiveResults.map((result) => (
          <MovieCard
            key={result?.imdbID}
            poster={result?.Poster}
            imdbId={result?.imdbID}
            type={result?.Type}
            year={result?.Year}
            title={result?.Title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
