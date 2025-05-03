import { createBrowserRouter } from "react-router";
import App from "./App";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AddFilmPage from "./pages/AddFilmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/addFilm", element: <AddFilmPage />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
