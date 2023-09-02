export const PREDEFINED_MOVIES = ["tt0993846", "tt1517268"];

export const API_KEY = "6c3a2d45";
export const BASE_URL = "https://www.omdbapi.com/";

export const API_KEY_PARAM = "?apiKey=";
export const SEARCH_TITLE_API_PARAM = "&s=";
export const SEARCH_ID_API_PARAM = "&i=";

export const SEARCH_API_WITH_TITLE =
  BASE_URL + API_KEY_PARAM + API_KEY + SEARCH_TITLE_API_PARAM;
export const SEARCH_API_WITH_ID =
  BASE_URL + API_KEY_PARAM + API_KEY + SEARCH_ID_API_PARAM;

export const imageUrlFormatter = (url) => {
  return `${url?.split("._")[0]}.jpg`;
};

export const LANG = {
  en: {
    searchPage: {
      placeholder: "What do you want to watch today?",
      buttonText: "Search",
    },
  },
};
