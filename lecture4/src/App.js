import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import Contect from "./components/Contect";
import RestaurantMenu from "./components/RestaurantMenu";

// Main component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

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
        path:"/contect",
        element:<Contect />
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
