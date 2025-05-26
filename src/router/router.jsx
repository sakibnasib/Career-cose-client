import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner";
import Banner2 from "../pages/Home/Banner2";
import Register from "../pages/Register/Register";
import SingIn from "../pages/SingnIn/SingIn";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component: Home, },
      { path: "/register", Component: Register },
      { path: "/singIn", Component: SingIn },
    ],
  },
]);
export default router;
