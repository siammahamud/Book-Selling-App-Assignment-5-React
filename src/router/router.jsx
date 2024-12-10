import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main-page-layout";
import App from "../pages/App";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./privateRoute";
import Login from "../pages/Login";
import Reset from "../pages/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "cart",
        element: <PrivateRoutes> <Cart /></PrivateRoutes> 
      },
      
    ],
  },
  {
    path:"sign-up",
    element:<SignUp/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"reset",
    element:<Reset/>
  }
]);

export default router;
