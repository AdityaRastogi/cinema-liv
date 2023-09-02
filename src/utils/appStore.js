import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./storeslices/moviesSlice";
import searchReducer from "./storeslices/searchSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default appStore;
