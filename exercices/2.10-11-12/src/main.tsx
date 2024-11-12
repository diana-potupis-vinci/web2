import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import HomePage from "./components/Pages/HomePage.tsx";
import CinemaPage from "./components/Pages/CinemaPage.tsx";
import MovieListPage from "./components/Pages/MovieListPage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movielist",
        element: <MovieListPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
