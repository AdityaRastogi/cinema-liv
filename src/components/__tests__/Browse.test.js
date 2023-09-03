/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Browse from "../Browse";

describe("Browse Page", () => {
  test("should load", async () => {
    const browse = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Browse />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await browse();

    const browsePage = getByTestId("browse-page");
    expect(browsePage).toBeDefined();
  });
  test("should have header", async () => {
    const browse = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Browse />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await browse();

    const header = getByTestId("header");
    expect(header).toBeDefined();
  });
  test("should have main container", async () => {
    const browse = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Browse />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await browse();

    const mainContainer = getByTestId("main-container-page");
    expect(mainContainer).toBeDefined();
  });
  test("should have search page on click of search button in header", async () => {
    const browse = async () =>
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Browse />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await browse();
    const headerSearchButton = getByTestId("header-search-home-button");

    fireEvent.click(headerSearchButton);
    const searchPage = getByTestId("search-page");
    expect(searchPage).toBeDefined();
  });
  describe("Browse Page should have main container", () => {});
});
