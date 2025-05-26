import { createBrowserRouter } from "react-router";
import App from "./App";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AddFilmPage from "./pages/AddFilmPage";
import FavoritesPage from "./pages/FavoritePage";
import FilmPage from "./pages/FilmPage";
import EditPage from "./pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/addFilm", element: <AddFilmPage />},
      { path: "/film/:id", element: <FilmPage />},
      { path: "/favorites", element: <FavoritesPage />},
      { path: "/edit/:id", element: <EditPage />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
