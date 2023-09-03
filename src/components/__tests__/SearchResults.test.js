/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { FEATURED_DATA } from "../../utils/testsMocks/featuredData";
import SearchResults from "../SearchResults";

describe("Search Results", () => {
  test("should Load", async () => {
    const searchResults = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <SearchResults searchResults={FEATURED_DATA} />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await searchResults();

    const searchResultsPage = getByTestId("search-results");
    expect(searchResultsPage).toBeDefined();
  });
  test("should have 2 movie Cards", async () => {
    const searchResults = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <SearchResults searchResults={FEATURED_DATA} />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getAllByTestId } = await searchResults();

    const movieCards = getAllByTestId("movie-card");
    expect(movieCards.length).toBeDefined();
  });
  describe("Movie Card", () => {
    test("should have image", async () => {
      const searchResults = async () =>
        await act(async () =>
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <SearchResults searchResults={FEATURED_DATA} />
              </Provider>
            </BrowserRouter>,
          ),
        );

      const { getAllByTestId } = await searchResults();

      const movieCardImage = getAllByTestId("movie-card-image");
      expect(movieCardImage[0]).toBeDefined();
    });
    test("1st should have title as (String)Barbie", async () => {
      const searchResults = async () =>
        await act(async () =>
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <SearchResults searchResults={FEATURED_DATA} />
              </Provider>
            </BrowserRouter>,
          ),
        );

      const { getAllByTestId } = await searchResults();

      const movieCardsTitle = getAllByTestId("movie-card-title");
      expect(movieCardsTitle[0].innerHTML).toBe("Barbie");
    });
  });
});
