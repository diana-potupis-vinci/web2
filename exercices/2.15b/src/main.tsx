import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import HomePage from "./components/Pages/HomePage.tsx";
import CinemaPage from "./components/Pages/CinemaPage.tsx";
import MovieListPage from "./components/Pages/MovieListPage.tsx";
import AddMoviePage from "./components/Pages/AddMoviePage.tsx";
import MoviePage from "./components/Pages/MoviePage.tsx";
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
      {
        path: "addmovie",
        element: <AddMoviePage />,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
