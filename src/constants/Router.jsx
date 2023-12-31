import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import View from "../pages/View";
import Edit from "../pages/Edit";
import Add from "../pages/Add";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/view/:id",
    element: <View />,
  },
  {
    path: "/Edit/:id",
    element: <Edit />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);
