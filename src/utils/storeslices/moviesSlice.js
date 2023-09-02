const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    featuredMovies: null,
    showMovieDetailPage: false,
    movieDetails: null
  },
  reducers: {
    addFeaturedMovies: (state, action) => {
      state.featuredMovies = action.payload;
    },
    addShowMovieDetailPage: (state, action) => {
      state.showMovieDetailPage = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { addFeaturedMovies, addShowMovieDetailPage, addMovieDetails } =
  moviesSlice.actions;
export default moviesSlice.reducer;
