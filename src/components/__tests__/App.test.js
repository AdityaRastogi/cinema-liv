/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */

import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import App from "../../App";

describe("App", () => {
    test("should load", async () => {
        const app = async () =>

            await act(async () =>
                render(

                    <Provider store={appStore}>
                        <App />
                    </Provider>

                ),
            );

        const { getByTestId } = await app();

        const applayout = getByTestId("app");
        expect(applayout).toBeDefined();
    });

});
