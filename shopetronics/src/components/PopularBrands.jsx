import {Text,Box,Image} from "@chakra-ui/react"
import React from "react";
export default function PopularBrands(){
    const [state,setState]=React.useState(0);

    let arr=[
        "https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg",
        "https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg",
        "https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg"
        ];
    
    React.useEffect(()=>{
        setInterval(()=>{
            setState((prev)=>prev+1);
        },5000);
    },[]);

    let src=arr[state%3];
    return(
        <Box textAlign={"left"} width={"100%"}>
            <Text as={"b"} fontSize={"xl"} margin={"25px"}>Popular</Text>
            <Box  width={"100%"} marginTop={"20px"}><Image width={"95%"} margin={"auto"} src={src}/></Box>
        </Box>
    )
}