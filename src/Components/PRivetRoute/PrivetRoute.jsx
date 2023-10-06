/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {currentuser} = useContext(AuthContext)
    if(currentuser.email){
        return children
    }
    return <Navigate to={'/signIn'} ></Navigate>
};

export default PrivetRoute;