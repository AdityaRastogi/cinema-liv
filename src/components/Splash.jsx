import logo from "../assets/images/app-logo.png";
import useFeaturedMovies from "../utils/customHooks/useFeaturedMovies";

const Splash = () => {
  useFeaturedMovies(); // Get featured Movies

  return (
    <div data-testid="splash-page" className="grid h-screen place-items-center">
      <img
        data-testid="logo"
        className="w-full lg:w-1/2 animate-pulse"
        alt="logo"
        src={logo}
      ></img>
    </div>
  );
};

export default Splash;
