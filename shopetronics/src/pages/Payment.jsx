import CartNavbar from "../components/CartNavbar";
import Navbar from "../components/Navbar";
import LargeWithAppLinksAndSocial from "../components/Footer";
import {Box, FormLabel,Input,Text,Flex,Alert,AlertIcon} from "@chakra-ui/react"
import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Payment(){

 const {Increase}=React.useContext(AuthContext);

 const [Cart,setCart]=React.useState([]);
 const navigate=useNavigate();

 React.useEffect(()=>{
   async function getCart(){
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`);
        let data=await res.json();
        console.log("cart",data);
        setCart(data);
    }
    getCart();
 },[])

     function handleSubmit(e){
        e.preventDefault();
        Cart.map((el)=>{
          return  DeleteIt(el.id);
        });  
        Increase(0,0);
        alert("Payment Successful!");
        navigate("/");


    }

    async function DeleteIt(id){
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${id}`,{
            method:"DELETE",
        });}

    return(
        <Box>
            <Navbar/>
            {CartNavbar(75)}    
            <Box width={"30%"} padding={"45px"} margin="auto" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                <form onSubmit={handleSubmit}>
                    <Text as="b" fontSize={"xl"}>Payment</Text>
                    
                        <FormLabel marginTop={"15px"}><span style={{color:"red"}}>*</span>Name on Card</FormLabel>
                        <Input type="text" />
                        <FormLabel marginTop={"10px"}><span style={{color:"red"}}>*</span>Card Number</FormLabel>
                        <Input placeholder="1111-2222-3333-4444"/>
                        <FormLabel marginTop={"10px"}><span style={{color:"red"}}>*</span>EXP Month</FormLabel>
                        <Input placeholder="September"/>
                        <Flex justifyContent={"space-between"}>
                            <Box width="45%">
                                <FormLabel marginTop={"10px"}><span style={{color:"red"}}>*</span>EXP YEAR</FormLabel>
                                <Input placeholder="2024"/>
                            </Box>
                            <Box width="45%">
                                <FormLabel marginTop={"10px"}><span style={{color:"red"}}>*</span>CVV</FormLabel>
                                <Input placeholder="352"/>
                             </Box>
                        </Flex>
                        <Input marginTop="25px" bg="rgb(30,128,253)" color="white" type={"submit"} value="Pay Now"/>
                    
                </form>
            </Box>

            

            <LargeWithAppLinksAndSocial/>
        </Box>
    )
}