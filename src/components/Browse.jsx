import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchPage from "./SearchPage";

const Browse = () => {
  const showSearchPage = useSelector((store) => store.search.showSearchPage);
  return (
    <div className="">
      <Header />
      {showSearchPage ? <SearchPage /> : <MainContainer />}
    </div>
  );
};
export default Browse;
