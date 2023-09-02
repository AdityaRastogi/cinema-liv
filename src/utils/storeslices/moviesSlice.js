const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    featuredMovies: null,
  },
  reducers: {
    addFeaturedMovies: (state, action) => {
      state.featuredMovies = action.payload;
    },
  },
});

export const { addFeaturedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
