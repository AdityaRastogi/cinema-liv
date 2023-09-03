/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import FeaturedList from "../FeaturedList";
import { FEATURED_DATA } from "../../utils/testsMocks/featuredData";



describe("FeaturedList", () => {
    test("should load", async () => {
        const featuredList = async () =>
            await act(async () =>
                render(
                    <BrowserRouter>
                        <Provider store={appStore}>
                            <FeaturedList movies={FEATURED_DATA} />
                        </Provider>
                    </BrowserRouter>,
                ),
            );

        const { getByTestId } = await featuredList();
        const featuredListPage = getByTestId("featured-list");
        expect(featuredListPage).toBeDefined();

    });
    test("should have 2 featured cards", async () => {
        const featuredList = async () =>
            await act(async () =>
                render(
                    <BrowserRouter>
                        <Provider store={appStore}>
                            <FeaturedList movies={FEATURED_DATA} />
                        </Provider>
                    </BrowserRouter>,
                ),
            );

        const { getAllByTestId } = await featuredList();

        const featuredListCards = getAllByTestId("featured-card");
        expect(featuredListCards.length).toBe(2);
    });
    describe("Features Card", () => {
        test("1st Card should have title and year as (string)Barbie(2023)", async () => {
            const featuredList = async () =>
                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <FeaturedList movies={FEATURED_DATA} />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getAllByTestId } = await featuredList();

            const featuredListCardTitleYear = getAllByTestId("featured-card-title-year");
            expect(featuredListCardTitleYear[0].innerHTML).toBe("Barbie(2023)");
        });
        test("2nd Card should have title and year as (string)The Wolf of Wall Street(2013)", async () => {
            const featuredList = async () =>
                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <FeaturedList movies={FEATURED_DATA} />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getAllByTestId } = await featuredList();

            const featuredListCardTitleYear = getAllByTestId("featured-card-title-year");
            expect(featuredListCardTitleYear[1].innerHTML).toBe("The Wolf of Wall Street(2013)");
        });
        test("1st Card should have awards as (string)2 wins & 1 nomination", async () => {
            const featuredList = async () =>
                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <FeaturedList movies={FEATURED_DATA} />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getAllByTestId } = await featuredList();

            const featuredListCardAwards = getAllByTestId("featured-card-awards");
            expect(featuredListCardAwards[0].innerHTML).toBe("2 wins &amp; 1 nomination");
        });
        test("should have plot with readMorereadLess", async () => {
            const featuredList = async () =>
                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <FeaturedList movies={FEATURED_DATA} />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getAllByTestId } = await featuredList();

            const featuredListCardReadMoreReadLess = getAllByTestId("read-more-read-less");
            expect(featuredListCardReadMoreReadLess).toBeDefined();
        });
        test("should have plot with (String)Read More button and on click should change to (String)Read Less button", async () => {
            const featuredList = async () =>
                await act(async () =>
                    render(
                        <BrowserRouter>
                            <Provider store={appStore}>
                                <FeaturedList movies={FEATURED_DATA} />
                            </Provider>
                        </BrowserRouter>,
                    ),
                );

            const { getAllByTestId } = await featuredList();

            const featuredListCardReadMoreReadLessButton = getAllByTestId("read-button");
            expect(featuredListCardReadMoreReadLessButton[0].innerHTML).toBe("Read More");

            fireEvent.click(featuredListCardReadMoreReadLessButton[0])
            expect(featuredListCardReadMoreReadLessButton[0].innerHTML).toBe("Read Less");
        });
    })

});
