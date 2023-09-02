import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/app-logo.png";
import { toggleShowSearchPage } from "../utils/storeslices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showSearchPage = useSelector((store) => store.search.showSearchPage);
  const handleToggleSearch = () => {
    dispatch(toggleShowSearchPage());
  };
  return (
    <div className="header flex justify-between w-screen absolute z-10 px-2 md:px-8 md:-my-8 -my-6 bg-gradient-to-b from-black">
      <img className="w-32 md:w-40 lg:w-48" alt="logo" src={logo}></img>
      <button
        className="text-2xl md:text-3xl lg:text-4xl pr-6 text-white font-bold"
        onClick={handleToggleSearch}
      >
        {showSearchPage ? "Home" : "🔍"}
      </button>
    </div>
  );
};

export default Header;
