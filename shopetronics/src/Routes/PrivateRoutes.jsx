import { AuthContext } from "../context/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";
import { Children } from "react";

export default function PrivateRoutes({children}){
    const {isAuth}=React.useContext(AuthContext);
    if(!isAuth){
      return  <Navigate to="/login"/>
    }

    else{
        return children;
    }
}