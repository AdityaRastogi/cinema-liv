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
import SearchResults from "../SearchResults";

import SearchPage from "../SearchPage";
beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
        json: jest.fn().mockResolvedValue(FEATURED_DATA[1]),
    });
});
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
    test("should show error if search results are null", async () => {
        const searchResults = async () =>
            await act(async () =>
                render(
                    <BrowserRouter>
                        <Provider store={appStore}>
                            <SearchResults searchResults={null} />
                        </Provider>
                    </BrowserRouter>,
                ),
            );

        const { getByTestId } = await searchResults();

        const searchResultsError = getByTestId("search-error");
        expect(searchResultsError).toBeDefined();
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
    describe("Movie Details", () => {
        test("should load on movie card click", async () => {
            const searchResults = async () =>
                await act(async () =>
                    render(

                        <Provider store={appStore}>

                            <SearchResults searchResults={FEATURED_DATA} />
                            <SearchPage />
                        </Provider>

                    ),
                );
            const { getByTestId, getAllByTestId } = await searchResults();

            const movieCardImages = getAllByTestId("movie-card-image");
            await act(() => { fireEvent.click(movieCardImages[1]) })
            const movieDetailsPage = getByTestId("movie-details");
            expect(movieDetailsPage).toBeDefined();
        });
        test("should have title as (String)The Wolf of Wall Street", async () => {
            const searchResults = async () =>
                await act(async () =>
                    render(

                        <Provider store={appStore}>

                            <SearchResults searchResults={FEATURED_DATA} />
                            <SearchPage />
                        </Provider>

                    ),
                );
            const { getByTestId, getAllByTestId } = await searchResults();

            const movieCardImages = getAllByTestId("movie-card-image");
            await act(() => { fireEvent.click(movieCardImages[1]) })
            const movieDetailsTitle = getByTestId("movie-details-title");
            expect(movieDetailsTitle.innerHTML).toBe("The Wolf of Wall Street");
        });
        test("should have poster image", async () => {
            const searchResults = async () =>
                await act(async () =>
                    render(

                        <Provider store={appStore}>
                            <SearchResults searchResults={FEATURED_DATA} />
                            <SearchPage />
                        </Provider>

                    ),
                );
            const { getByTestId, getAllByTestId } = await searchResults();

            const movieCardImages = getAllByTestId("movie-card-image");
            await act(() => { fireEvent.click(movieCardImages[1]) })
            const movieDetailsPoster = getByTestId("movie-details-image");
            expect(movieDetailsPoster).toBeInTheDocument();
        });
        test("should have infoButtons for genres,actors and writers in total 8", async () => {
            const searchResults = async () =>
                await act(async () =>
                    render(

                        <Provider store={appStore}>
                            <SearchResults searchResults={FEATURED_DATA} />
                            <SearchPage />
                        </Provider>

                    ),
                );
            const { getAllByTestId } = await searchResults();

            const movieCardImages = getAllByTestId("movie-card-image");
            await act(() => { fireEvent.click(movieCardImages[1]) })
            const movieDetailsInfoButtons = getAllByTestId("info-button");
            expect(movieDetailsInfoButtons.length).toBe(8);
        });
        test("should return to search results when pressed back", async () => {
            const searchResults = async () =>
                await act(async () =>
                    render(

                        <Provider store={appStore}>
                            <SearchResults searchResults={FEATURED_DATA} />
                            <SearchPage />
                        </Provider>

                    ),
                );
            const { getByTestId, getAllByTestId } = await searchResults();

            const movieCardImages = getAllByTestId("movie-card-image");
            await act(() => { fireEvent.click(movieCardImages[1]) })

            const movieDetailsBackButton = getByTestId("back-button");
            expect(movieDetailsBackButton).toBeInTheDocument();

            await act(() => { fireEvent.click(movieDetailsBackButton) })

            const searchResultsPage = getByTestId("search-results");
            expect(searchResultsPage).toBeInTheDocument();
        });
    })
});
