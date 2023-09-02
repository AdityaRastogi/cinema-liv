const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchPage: false,
    searchResults: null,
  },
  reducers: {
    toggleShowSearchPage: (state, action) => {
      state.showSearchPage = !state.showSearchPage;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { toggleShowSearchPage, addSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
