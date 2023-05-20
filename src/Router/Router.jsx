import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import SingleToyPage from "../pages/SingleToyPage/SingleToyPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },{
          path: "/register",
          element: <Register/>
        },
        {
          path: "/singleToy",
          element: <SingleToyPage/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
  ]);

export default router;