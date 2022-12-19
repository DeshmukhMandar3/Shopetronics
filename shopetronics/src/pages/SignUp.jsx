import {Box,Image,FormControl,FormLabel,Input,Checkbox,Flex,Alert,AlertIcon} from "@chakra-ui/react"
import AuthNavbar from "../components/AuthNavbar"
import React from "react";
import {useNavigate,Link} from 'react-router-dom'
export default function SignUp(){
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [username,setUsername]=React.useState("");
    const [condition,setCondition]=React.useState(false);
    const navigate=useNavigate();

    console.log(password,email);

    async function handleSubmit(e){
        e.preventDefault();
        let send={
            username,email,password
        }

        let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/auth`,{
            method:"POST",
            body:JSON.stringify(send),
            headers:{
                "Content-Type":"application/JSON"
            }
        });

        let data=await res.json();
        console.log(data);

        setUsername("");
        setEmail("");
        setPassword("");
        setCondition(false);
        alert("registration successful");
        navigate("/login");


    
    }


    return(
        <Box>
            <AuthNavbar/>
            <Box w="400px" margin="auto" marginTop="25px" borderRadius={"15px"} padding="25px" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                    <form onSubmit={handleSubmit}>
                        <FormControl >
                            <Flex justifyContent="space-between"><FormLabel>Create Your Account</FormLabel> <Link to="/login">Sign In</Link></Flex>
                            <Input value={username} onChange={(e)=>setUsername(e.target.value)}margin="10px" type='text' placeHolder="Nick name" />
                            <Input value={email} onChange={(e)=>setEmail(e.target.value)} margin="10px" type='email' placeHolder='Email address'/>
                            <Input value={password} onChange={(e)=>setPassword(e.target.value)} margin="10px" type='password' placeHolder='Password'/>
                            <Checkbox isChecked={condition} onChange={()=>{setCondition(!condition)}}>I agree to Shopetronics' Terms of Use & Privacy Policy.</Checkbox>
                            <Input margin="10px" type="submit" bg="rgb(30,128,253)" color="white" cursor="pointer"/>
                        </FormControl>
                    </form>
            </Box>
        </Box>
    )
}