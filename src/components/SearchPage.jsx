import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <div>
      <div className="absolute w-full -z-10"></div>
      <SearchBar />
      {/* <GptSearchBar />
        <GptMovieSuggestion /> */}
    </div>
  );
};

export default SearchPage;
