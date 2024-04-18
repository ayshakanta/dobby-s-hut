import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateProfile from "../components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../components/AboutUs";
import ShowProperty from "../pages/Home/ShowProperty";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/resorts.json"),
      },
      {
        path: "/resort/:id",
        element: (
          <PrivateRoute>
            <ShowProperty></ShowProperty>
          </PrivateRoute>
        ),
        loader: () => fetch("/resorts.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
