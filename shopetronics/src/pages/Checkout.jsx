import Navbar from "../components/Navbar";
import CartNavbar from "../components/CartNavbar";
import LargeWithAppLinksAndSocial from "../components/Footer";
import {Box,Flex,Text,Input,FormControl,Button} from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function Checkout(){
    const [filled,setFilled]=React.useState(false);

    const {Price,Count}=React.useContext(AuthContext);

    function handleClick(){
        let Form =document.querySelector(".form");
        Form.reset();
    }

    function handleSubmit(e){
        e.preventDefault();
        setFilled(true);
    }

    const navigate=useNavigate();


    return(
        <Box>
            <Navbar/>
            {CartNavbar(50)}
            <Box margin="25px"> <Text as={"b"} fontSize="xl">Shipping Details</Text></Box>
            <Box width={"80%"} margin={"auto"} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding={"25px"}>
               <form className="form" onSubmit={handleSubmit}>
               <FormControl>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>First Name:</Text>
                        <Input type='text' width={"60%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>Last Name:</Text>
                        <Input type='text' width={"60%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>Country:</Text>
                        <Input type='text' width={"30%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>State/Province/County:</Text>
                        <Input type='text' width={"30%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>City:</Text>
                        <Input type='text' width={"30%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>Zip/Postal code:</Text>
                        <Input type='text' width={"30%"} border={"solid black"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>Address Line 1:</Text>
                        <Input type='text' width={"70%"} border={"solid black"} placeholder={"street address, company name, PO, etc"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}>Address Line 2:</Text>
                        <Input type='text' width={"70%"} border={"solid black"} placeholder={"Apartment, suit, floor"}/>
                    </Flex>
                    <Flex alignItems={"center"}  margin={"15px"}>
                        <Text display={"inline"} w={"30%"} textAlign="right" marginRight={"8px"}><span style={{color:"red"}}>*</span>Phone Number:</Text>
                        <Input type='number' width={"30%"} border={"solid black"}/>
                    </Flex>
                    <Flex justifyContent={"space-evenly"} margin={"25px"}>
                        <Input type={"submit"} value={"SAVE"} bg="rgb(30,128,253)" w="30%" color="white"/>
                        <Button w="30%" onClick={handleClick}>CANCEL</Button>
                    </Flex>
                </FormControl>
               </form>
            </Box>
            <Box textAlign={"right"} width={"80%"} margin={"auto"} boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" padding={"25px"}>
            <Text margin="8px">No of Items :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {Count}</Text>
            <Text margin="8px">Subtotal :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ₹&nbsp;{Price}</Text>
            <Text margin="8px">Shipping Cost: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹ 0.00</Text>
            <Text margin="8px">Total :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹&nbsp;<span style={{color:"red"}}>{Price}</span></Text>
            <Button bg="rgb(30,128,253)" color="white" onClick={()=>navigate("/payment")} disabled={!filled}>Continue to Pay</Button>
            </Box>



            <LargeWithAppLinksAndSocial/>
        </Box>
    )
}