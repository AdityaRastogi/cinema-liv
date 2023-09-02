import { useRef } from "react";
import { LANG } from "../utils/appConstants";

const SearchBar = () => {
  const searchText = useRef(null);
  return (
    <div className="pt-[20%] lg:pt-[5%] flex justify-center px-2 md:px-8">
      <form
        className="bg-black w-full lg:w-1/2 grid grid-cols-12 bg-opacity-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 md:p-4 m-2 md:m-4 col-span-8 md:col-span-10"
          placeholder={LANG.en.searchPage.placeholder}
        ></input>
        <button className="col-span-4 md:col-span-2 py-2 m-4 px-4 bg-red-600 rounded-lg text-white font-bold">
        {LANG.en.searchPage.buttonText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
