import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/Body";
import About from "./components/header/About";
import Error from "./components/Errors/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import Contect from "./components/header/Contect";
import RestaurantMenu from "./components/restaurant_menu/RestaurantMenu";

// This component run inside RouterProvider components
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
