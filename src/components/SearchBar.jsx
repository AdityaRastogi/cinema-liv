import { useRef } from "react";
import { useDispatch } from "react-redux";
import { LANG, PLOTS, SEARCH_API_WITH_TITLE } from "../utils/appConstants";
import { checkSpecialChar } from "../utils/helperFunctions";
import { addShowMovieDetailPage } from "../utils/storeslices/moviesSlice";
import {
  addSearchError,
  addSearchPlot,
  addSearchResults,
} from "../utils/storeslices/searchSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const plot = useRef(null);
  const texts = LANG.en.searchPage;
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addShowMovieDetailPage(false));
    dispatch(addSearchResults(null));
    const searchTerm = searchText.current.value;
    const plotValue = plot.current.value;
    if (searchTerm.length === 0) {
      dispatch(addSearchError(true));
      return;
    } else {
      dispatch(addSearchError(false));
    }
    dispatch(addSearchPlot(plotValue));
    searchMovies(searchTerm);
  };

  const searchMovies = async (searchTerm) => {
    const movieDetails = await fetch(`${SEARCH_API_WITH_TITLE}${searchTerm}`);
    const movieDetailsJson = await movieDetails.json();
    dispatch(addSearchResults(movieDetailsJson));
  };
  return (
    <div
      data-testid="search-bar"
      className="pt-[20%] lg:pt-[5%] flex justify-center px-2 md:px-8"
    >
      <form
        className="bg-black w-full lg:w-1/2 grid grid-cols-12 bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          data-testid="search-bar-input"
          ref={searchText}
          type="text"
          className="p-2 md:p-4 m-2 md:m-4 col-span-12 z-50"
          placeholder={texts.placeholder}
          onChange={(e) => checkSpecialChar(e)}
        ></input>
        <div className="justify-between flex">
          <label className="text-white p-2 my-4 ml-2 -mr-2 font-bold">
            {texts.plot}
          </label>
          <select
            ref={plot}
            className="p-2 m-4 md:m-4 rounded-lg  bg-white-900 text-black col-span-4 md:col-span-4 lg:col-span-2 cursor-pointer"
          >
            {PLOTS.map((plot) => (
              <option key={plot.identifier} value={plot.identifier}>
                {plot.name}
              </option>
            ))}
          </select>
          <button
            data-testid="search-bar-button"
            className=" py-2 m-4 px-4 bg-pink rounded-lg text-white font-bold col-span-4 md:col-span-2"
            onClick={handleSearch}
          >
            {texts.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
