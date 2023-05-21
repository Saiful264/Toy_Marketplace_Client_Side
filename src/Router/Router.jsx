import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import SingleToyPage from "../pages/SingleToyPage/SingleToyPage";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";
import PrivateRouter from "./PrivateRouter";

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
          path: "/singleToy/:id",
          element: <PrivateRouter><SingleToyPage/></PrivateRouter>,
          loader: ({params})=> fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: "/alltoys",
          element: <AllToys/>,
          loader: ()=> fetch('http://localhost:5000/alltoy')
        },{
          path: "/addtoy",
          element: <PrivateRouter><AddAToy/></PrivateRouter>
        },{
          path: "/mytoys",
          element: <PrivateRouter><MyToys/></PrivateRouter>
        },
        {
          path: "/updateMyToy/:id",
          element: <PrivateRouter><UpdateMyToy/></PrivateRouter>,
          loader: ({params}) => params.id
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
  ]);

export default router;