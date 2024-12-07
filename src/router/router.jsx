import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main-page-layout";
import App from "../pages/App";
import Cart from "../pages/Cart";

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
        element: <Cart />,
      }
    ],
  },
]);

export default router;
