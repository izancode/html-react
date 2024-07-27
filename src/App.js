import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import BodyTwo from "./components/BodyTwo";
import useOnlineStatus from "./utils/useOnlineStatus";
/*

Chunking
Code Splitting
Dynamic Bundling


*/
const AppLayoutComponets = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div>
        <Header />
        <h1>
          Looks Like you're offline!! Please check your internet connection
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponets />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/bodytwo",
        element: <BodyTwo />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
