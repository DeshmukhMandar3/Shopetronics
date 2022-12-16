import {Box,Text} from "@chakra-ui/react";
import React from "react";
import Carry from "./Carry";

export default function NewForYou(){
   
    return(
        <Box textAlign={"left"} margin={"25px"}>
             <Text fontSize="xl" as="b" >New For You</Text>
        <Carry/>
        </Box>
    )
}


