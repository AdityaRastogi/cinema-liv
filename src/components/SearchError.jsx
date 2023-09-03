import { LANG } from "../utils/appConstants";

const SearchError = () => {
  return (
    <div
      data-testid="search-error"
      className="w-[60%] md:w-1/3 absolute text-center top-[40%] bg-pink bg-opacity-30 mx-4 p-4 rounded-lg"
    >
      <h1
        data-testid="search-error-heading"
        className="text-white font-bold text-xl md:text-2xl"
      >
        {LANG?.en?.searchPage.noResultsHeading}
      </h1>
      <p className="w-full text-white font-light text-sm md:text-lg">
        {LANG?.en?.searchPage.noResultsSubText}
      </p>
    </div>
  );
};

export default SearchError;
