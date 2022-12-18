import AuthNavbar from "../components/AuthNavbar"
import {Box,FormControl,FormLabel,Input,Checkbox} from "@chakra-ui/react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate,Link } from "react-router-dom";
import React from "react";

export default function Login(){
   const {isAuth,LoginUser,name}=React.useContext(AuthContext);
   const [email,setEmail]=React.useState("");
   const [password,setPassword]=React.useState("");
   const [temp,setTemp]=React.useState(null);
   const navigate=useNavigate();
   
   console.log(email,password);

    async function handleSubmit(e){
        e.preventDefault();
        let res=await fetch(`http://localhost:8080/auth`);
        let data=await res.json();
       let flag=false;
        data.map((el)=>{
            if(!flag && el.email==email && el.password==password){
                flag=true;
                LoginUser(el.username);
                console.log("user",el.username);
            }
        });
        if(flag){ alert("Login Successful"); navigate("/"); console.log("yes");}
        else if(!flag){
        alert('Wrong Email or Password');}
        
    }

    return(
        <Box>
            <AuthNavbar/>
            <Box w="400px" margin="auto" marginTop="25px" borderRadius={"15px"} padding="25px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <form onSubmit={handleSubmit}>
                        <FormControl >
                            <FormLabel>Sign In</FormLabel>
                            <Input value={email} onChange={(e)=>{setEmail(e.target.value);}} margin="10px" type='email' placeHolder='Email address'/>
                            <Input value={password} onChange={(e)=>{setPassword(e.target.value);}} margin="10px" type='password' placeHolder='Password'/>
                            <Checkbox> Keep me signed in</Checkbox>
                            <Input margin="10px" type="submit" value="Sign In" bg="rgb(30,128,253)" color="white" cursor="pointer"/>
                        </FormControl>
                    </form>
                    <Link to="/signUp">New user? Sign up</Link>
            </Box>
        </Box>
    )
}