import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import SingleToyPage from "../pages/SingleToyPage/SingleToyPage";
import AllToys from "../pages/AllToys/AllToys";

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
          path: "/alltoys",
          element: <AllToys/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
  ]);

export default router;