import { useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import SearchBar from "./SearchBar";
import SearchError from "./SearchError";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const searchError = useSelector((store) => store.search.searchError);
  const searchResults = useSelector((store) => store.search.searchResults);
  const showMovieDetailPage = useSelector(
    (store) => store.movies.showMovieDetailPage,
  );
  return (
    <div>
      <div className="absolute w-full z-50 "></div>
      <SearchBar />
      {!showMovieDetailPage && (
        <div className="flex justify-center ">
          {searchError && <SearchError />}
          {searchResults && (
            <SearchResults searchResults={searchResults?.Search} />
          )}
        </div>
      )}

      {showMovieDetailPage && <MovieDetails />}
    </div>
  );
};

export default SearchPage;
