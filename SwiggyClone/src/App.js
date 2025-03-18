import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Header from "./components/header/Header";
import Body from "./components/Body";
import About from "./components/header/About";
import Error from "./components/Errors/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import Contect from "./components/header/Contect";
import RestaurantMenu from "./components/restaurant_menu/RestaurantMenu";
import appStore from "./redux_store/appStore";
import Cart from "./components/header/Cart";
// This component run inside RouterProvider components
const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-gray-600 text-black ">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

/**
 * lazy Loading (Dynamic loading)
 * in this loading type component when load
 * then that uses other wise not loaded
 * (This is boost application performance)
 */
const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading component</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
