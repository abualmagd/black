import { createBrowserRouter } from "react-router";
import Home from "./views/home";
import About from "./views/about";
import { BookCall } from "./views/bookCall";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Failed to load this page .</h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/connect",
    element: <BookCall />,
  },
]);
