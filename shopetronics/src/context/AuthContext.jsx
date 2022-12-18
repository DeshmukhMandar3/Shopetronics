import React from "react";

export const AuthContext=React.createContext();

export default function AuthContextProvider({children}){
    const [isAuth,SetAuth]=React.useState(false);
    const [username,setName]=React.useState("");
    const [Price,setPrice]=React.useState(0);
    const [Count,setCount]=React.useState(0);


    function LoginUser(val){
        console.log(val,"login val");
        setName(val);
        SetAuth(true);
       
    }

    function Increase(price,count){
        price=price.toFixed(2);
        setPrice(price);
        setCount(count);
    }



    return(
        <AuthContext.Provider value={{isAuth,Increase,Price,Count,LoginUser,username}}>{children}</AuthContext.Provider>
        
    )
}