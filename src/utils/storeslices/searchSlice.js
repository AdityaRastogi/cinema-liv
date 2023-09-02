const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchPage: false,
    searchResults: null,
    searchError: false,
    searchPlot: "short",
  },
  reducers: {
    toggleShowSearchPage: (state, action) => {
      state.showSearchPage = !state.showSearchPage;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addSearchError: (state, action) => {
      state.searchError = action.payload;
    },
    addSearchPlot: (state, action) => {
      state.searchPlot = action.payload;
    },
  },
});

export const {
  toggleShowSearchPage,
  addSearchResults,
  addSearchError,
  addSearchPlot,
} = searchSlice.actions;
export default searchSlice.reducer;
