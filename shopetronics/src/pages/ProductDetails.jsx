import React from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import LargeWithAppLinksAndSocial from "../components/Footer";
import {Badge, Box, Text, Button,Flex,Image} from "@chakra-ui/react";
import Star from "../components/Star";

export default function ProductDetails(){
    const {Product,Increase} = React.useContext(AuthContext);
    const [Cart,setCart]=React.useState([]);
    console.log(Product);


    React.useEffect(()=>{
        getCart();
    },[]);

    async function getCart(){
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`);
        let data=await res.json();
        setCart(data);
    }


    async function handleClick(){
        let flag=false;
        let el=Product;
        let PatchID;
        Cart.map((element)=>{
            if(element.title==el.title){
               el.count=(element.count+1);
               flag=true;
               PatchID=element.id
            }
        })
        if(!flag){
            el.count=1;
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`,{
            method:'POST',
            body:JSON.stringify(el),
            headers:{
                'Content-Type':'application/JSON'
            }
        }); }
        else{
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${PatchID}`,{
            method:'PATCH',
            body:JSON.stringify(el),
            headers:{
                'Content-Type':'application/JSON'
            }
        });

    }
   
    updateCart();
    getCart();
 }

    
   async function updateCart(){
        let price=0;
        let count=0;
        let sp=0;

        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`);
        let data=await res.json();
        //console.log(data);
        data.map((el)=>{ 
            count=count+el.count;
            let ans=(el.sellingPrice).split("");
            ans.shift();
            sp=ans.join("")
            sp=+(sp);
            price+=sp;
            price.toFixed(2);
            price=(price*el.count);
            // console.log(count);
            // console.log(price);
        })

        Increase(price,count);

   }
    
    return(
        <Box>
            <Navbar/>
             <Flex margin={"35px"}>
                <Box width={"50%"} marginRight={"15px"}><Image width={"80%"} display={"block"} marign={"auto"} src={Product.image}/></Box>
                <Box margin={"15px"}>
                    <Text as={"b"} fontSize={"18px"} marginTop={"8px"} >{Product.title}</Text>
                    <Box marginTop={"8px"}><Star rating={(Math.random()*(5-3.5)+3.5).toFixed(1)} count={Product.review || (Math.random()*(150-25)+25).toFixed(0)} /></Box>
                    {Product.discount ? <Box marginTop={"8px"}><Badge fontSize={"15px"} bg={"red"} color={"white"}>{Product.discount}</Badge></Box> : null}
                    <Flex marginTop={"8px"} alignItems={"center"}>
                        <Text as={"b"} fontSize={"20px"}>{Product.sellingPrice}</Text>
                        <Text as={"b"} fontSize={"15px"} marginLeft={"10px"} color={"grey"}><s>{Product.MRP}</s></Text>
                    </Flex>
                        <Text marginTop={"8px"}>Ship From : China</Text>
                    <Flex marginTop={"8px"}> 
                        <Button marginRight={"15px"} bg={"rgb(30,128,253)"} color={"white"} _hover={{bg:"rgb(30,128,253)",color:"blue"}}>Buy Now</Button>
                        <Button bg={"skyblue"} color={"blue"} onClick={handleClick}>Add To Cart</Button>
                    </Flex>
                    
                </Box>
             </Flex>
            <LargeWithAppLinksAndSocial/>
        </Box>
    )
}