import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Banner from "../pages/Home/Banner/Banner";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Banner/>
        },
        {
          path: "/login",
          element: <Login/>
        },{
          path: "/register",
          element: <Register/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
  ]);

export default router;