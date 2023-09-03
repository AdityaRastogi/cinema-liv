/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { FEATURED_DATA } from "../../utils/testsMocks/featuredData";
import SearchPage from "../SearchPage";
beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(FEATURED_DATA[1])
    })
});

describe("Search Page", () => {
    test("should have Search Bar", async () => {
        const search = async () =>

            await act(async () =>
                render(
                    <BrowserRouter>
                        <Provider store={appStore}>
                            <SearchPage />
                        </Provider>
                    </BrowserRouter>,
                ),
            );

        const { getByTestId } = await search();

        const searchBar = getByTestId("search-bar");
        expect(searchBar).toBeDefined();
    });

    describe("Search Bar", () => {
        test("should have input field", async () => {
            const search = async () =>

                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <SearchPage />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getByTestId } = await search();

            const searchBarInput = getByTestId("search-bar-input");
            expect(searchBarInput).toBeDefined();
        });
        test("should have search button", async () => {
            const search = async () =>

                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <SearchPage />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getByTestId } = await search();

            const searchBarButton = getByTestId("search-bar-button");
            expect(searchBarButton).toBeDefined();
        });
        test("should show error when searchterm is empty and search button is clicked", async () => {
            const search = async () =>

                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <SearchPage />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getByTestId } = await search();

            const searchBarButton = getByTestId("search-bar-button");
            const searchInput = getByTestId("search-bar-input")
            searchInput.nodeValue = "Wolf"

            fireEvent.click(searchBarButton)


            const searchError = getByTestId("search-error");
            expect(searchError).toBeDefined();

            const searchErrorHeading = getByTestId("search-error-heading");
            expect(searchErrorHeading).toBeDefined();
        });
    })

});
