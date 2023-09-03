/* eslint-disable testing-library/prefer-screen-queries */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import Splash from "../Splash";
import { FEATURED_DATA } from "../../utils/testsMocks/featuredData";
beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(FEATURED_DATA[1]),
  });
});

describe("Splash Page", () => {
  test("should load", async () => {
    const splash = async () =>
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Splash />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await splash();

    const splashPage = getByTestId("splash-page");
    expect(splashPage).toBeDefined();
  });
  test("should have logo", async () => {
    const splash = async () =>
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () =>
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Splash />
            </Provider>
          </BrowserRouter>,
        ),
      );

    const { getByTestId } = await splash();

    const splashLogo = getByTestId("logo");
    expect(splashLogo).toBeDefined();
  });
});
