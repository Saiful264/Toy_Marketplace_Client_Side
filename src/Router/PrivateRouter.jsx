/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRouter = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <button className="btn btn-square loading"></button>
     }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace/>;
};

export default PrivateRouter;