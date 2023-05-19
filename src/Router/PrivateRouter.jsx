/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();


    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace/>;
};

export default PrivateRouter;