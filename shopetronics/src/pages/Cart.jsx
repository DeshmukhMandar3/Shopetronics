import React from "react";
import Navbar from "../components/Navbar";
import  LargeWithAppLinksAndSocial from "../components/Footer"
import {Box, SimpleGrid, Card, CardBody, Image, Stack, Badge,Text,Button,Flex} from "@chakra-ui/react"
import Star from "../components/Star"
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'


export default function Cart(){
    const [Data,setData]=React.useState([]);
    let price=0;
    let count=0;
    let sp=0;

    const {Increase,Count,Price}=React.useContext(AuthContext);
    


    let ans= Data.length!=0 && Data.map((el)=>{
        count++;
        
        //price string to number conversion
        let ans=(el.sellingPrice).split("");
        ans.shift();
        sp=ans.join("")
        sp=+(sp);
        price+=sp;
        price.toFixed(2);
        
       

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
                    <Flex>
                        <Button bg={"tomato"} color={"white"} onClick={()=>{DeleteItem(el)}}>Delete</Button>
                    </Flex>
                    </Stack>
                </CardBody>
            </Card>
        );

    })

    React.useEffect(()=>{
            Increase(price,count);
    },[price,count])

    React.useEffect(()=>{
       getData();
    },[])
      

    
    async function getData(){
        let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/cart/`);
        let data=await res.json();
        console.log("all Products",data);
        setData(data)
        
       }


     function DeleteItem(el){
        // let sp=(el.sellingPrice).split("");
        // sp.shift();
        // let ans=sp.join("");
        // ans=+(ans);
        // console.log("ans",ans);

        // Increase((Price-ans),(Count-1))

        axios.delete(`https://vivacious-moth-jewelry.cyclic.app/cart/${el.id}`);
        // let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/cart/${el.id}`,{
        //     method:'DELETE',
        //     headers:{
        //         'Accept': 'application/json',
        //         "Content-Type":"application/JSON",
        //     }
        // });
        // let data=await res.json();
        getData();

    }

        function Proceed(){
            Data.map((el)=>{
                ClearData(el.id);
            })
        }
    
        async function ClearData(id){
        let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/cart/${id}`,{
            method:'DELETE'
        });
        let data=await res.json();
        console.log(data);
        getData();
        
    }
    

    return(
        <Box>
            <Navbar/>
            <Flex justifyContent={"space-between"}>
                <Box paddingLeft="25px"><Button bg={"green"} _hover={{bg:"green"}} color={"white"} onClick={Proceed} disabled={Data.length==0}>Proceed to Checkout</Button></Box>
                <Box textAlign="right" paddingRight="25px">
                    <Text as="b">Number of Items :&nbsp;&nbsp;&nbsp; {Count}</Text><br/>
                    <Text as="b">Total Price :&nbsp;&nbsp;&nbsp; ₹{Price}</Text>
                </Box>
            </Flex>
            <Box>
                <SimpleGrid columns={4} spacing={10} padding="25px">{
                   ans

                }
                    
                </SimpleGrid>
            </Box>
            <LargeWithAppLinksAndSocial/>
        </Box>
    );
}