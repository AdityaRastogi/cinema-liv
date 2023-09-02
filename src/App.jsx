import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Error from "./components/Error";
import Splash from "./components/Splash";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="h-screen w-screen bg-black">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

//Routing config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
    errorElement: <Error />,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <Error />,
  },
]);

export default App;
