export const PREDEFINED_MOVIES = ["tt0993846", "tt1517268"];

export const API_KEY = "6c3a2d45";
export const BASE_URL = "https://www.omdbapi.com/";

export const API_KEY_PARAM = "?apiKey=";
export const SEARCH_TITLE_API_PARAM = "&s=";
export const SEARCH_ID_API_PARAM = "&i=";
export const SEARCH_PLOT_API_PARAM = "&plot=";
export const SEARCH_TYPE_MOVIE_PARAM = "&type=movie";

export const SEARCH_API_WITH_TITLE =
  BASE_URL +
  API_KEY_PARAM +
  API_KEY +
  SEARCH_TYPE_MOVIE_PARAM +
  SEARCH_TITLE_API_PARAM;
export const SEARCH_API_WITH_ID =
  BASE_URL +
  API_KEY_PARAM +
  API_KEY +
  SEARCH_TYPE_MOVIE_PARAM +
  SEARCH_ID_API_PARAM;

export const LANG = {
  en: {
    general: {
      readMore: "Read More",
      readLess: "Read Less",
      plotFull: "full",
      plotShort: "short",
    },
    movieDetail: {
      back: "Back",
      actors: "Actors",
      writers: "Writers",
      genres: "Genres",
      type: "Type: ",
      releasedIn: "Released In: ",
      rated: "Rated: ",
      awards: "Awards: ",
    },
    searchPage: {
      placeholder: "Search for any title.",
      buttonText: "Search",
      noResultsHeading: "No Results Found!!!",
      noResultsSubText:
        "Please search for correct movie title e.g. Dumb and Dumber",
      searchResultsHeading: "Search Results",
      plot: "Plot",
    },
  },
};

export const PLOTS = [
  { identifier: "short", name: "Short" },
  { identifier: "full", name: "Full" },
];
