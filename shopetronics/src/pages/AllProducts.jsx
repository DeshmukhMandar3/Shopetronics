import React from "react";
import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";
import  LargeWithAppLinksAndSocial from "../components/Footer"
import {Box, SimpleGrid, Card, CardBody, Image, Stack, Badge,Text,Button,Flex} from "@chakra-ui/react"
import Star from "../components/Star"
import { AuthContext } from "../context/AuthContext";
export default function AllProducts(){
    const {category} =useParams();
    const [Data,setData]=React.useState([]);
    const {Increase}=React.useContext(AuthContext); 
   
    
    React.useEffect(()=>{
       async function getData(){
        let res=await fetch(`http://localhost:8080/${category}`);
        let data=await res.json();
        console.log("all Products",data);
        setData(data);
       }
       getData();
    },[])

    async function handleClick(el){
        let res=await fetch(`http://localhost:8080/cart`,{
            method:'POST',
            body:JSON.stringify(el),
            headers:{
                'Content-Type':'application/JSON'
            }
        });

       updateCart();
    }

    
   async function updateCart(){
        let price=0;
        let count=0;
        let sp=0;

        let res=await fetch(`http://localhost:8080/cart`);
        let data=await res.json();
        //console.log(data);
        data.map((el)=>{ 
            count++;
            let ans=(el.sellingPrice).split("");
            ans.shift();
            sp=ans.join("")
            sp=+(sp);
            price+=sp;
            price.toFixed(2);
            console.log(count);
            console.log(price);
        })

        Increase(price,count);

   }

   
  




    return(
        <Box>
            <Navbar/>
            <Box>
                <SimpleGrid columns={4} spacing={10} padding="25px">{
                    Data.length!=0 && Data.map((el)=>{

                        return (
                            <Card maxW='sm' >
                                <CardBody bg="white">
                                    <div height={"30%"}>
                                    <Image h={"100%"} src={el.image} alt={el.title} borderRadius='lg'/>
                                    </div>
                                    <Stack mt='6' spacing='1.5'>
                                   if(el.discount){<Box><Badge rounded='full' paddingLeft='10px' paddingRight='10px' fontSize='13px' bg='red' color='white'>{el.discount}</Badge></Box>}
                                    <Box h="80px" overflow={"hidden"} color='black' fontSize='12px'>{el.title}</Box>
                                    <Box color="black"><Star rating={(Math.random()*(5-3.5)+3.5).toFixed(1)} count={el.review || (Math.random()*(150-25)+25).toFixed(0)} /></Box>
                                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                                        <Text color='black' fontSize='15px'>{el.sellingPrice}</Text>
                                        {el.MRP && <Text color='grey' fontSize='14px'><s>{el.MRP}</s></Text>}
                                    </Flex>
                                    <Flex justifyContent={"space-between"}>
                                        <Button fontSize={"12px"} bg={"rgb(30,128,253)"} color={"white"} _hover={{color:"blue"}}>Buy Now</Button>
                                        <Button fontSize={"12px"} bg={"skyblue"} color={"blue"} onClick={()=>{handleClick(el);}}>Add To Cart</Button>
                                    </Flex>
                                    </Stack>
                                </CardBody>
                            </Card>
                        );

                    })
                }
                    
                </SimpleGrid>
            </Box>
            <LargeWithAppLinksAndSocial/>
        </Box>
    );
}