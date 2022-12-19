import {Text,Box,Flex,Image,Card,CardBody,Stack,Badge} from "@chakra-ui/react"
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Vaccum(){
    const [Data,setData]=React.useState([]);
    const navigate=useNavigate();
    let count=0;
    React.useEffect(()=>{
        async function getData(){
            let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/vacuum_cleaner`);
            let data=await res.json();
           // console.log("Vaccum",data);
            setData(data);
        }
        getData();
    },[])
    return(
        <Flex margin="25px" onClick={()=>{navigate("/all/vacuum_cleaner")}}>
            <Box width="40%"><Image src={"https://img.gkbcdn.com/bb/roborock-20221007152405384._p1_.jpg"}/></Box>
            <Flex width="57%" marginLeft="15px">{Data.length!=0 && Data.map((el)=>{
                count++;
                if(count<=3){
                    return (
                        <Card maxW='sm' w={"30%"} margin={"5px"}>
                        <CardBody bg="white" paddingTop="5px" textAlign="left">
                            <div>
                            <Image h={"100%"} src={el.image} alt={el.title} borderRadius='lg'/>
                            </div>
                            <Stack mt='6' spacing='1.5' marginTop="0px">
                            <Box><Badge rounded='full' paddingLeft='10px' paddingRight='10px' fontSize='13px' bg='red' color='white'>{el.discount}</Badge></Box>
                            <Box h="50px" overflow={"hidden"} color='black' fontSize='12px'>{el.title}</Box>
                            <Flex justifyContent={"space-evenly"} alignItems="center">
                                <Text color='black' fontSize='15px'>{el.sellingPrice}</Text>
                                <Text color='grey' fontSize='14px'><s>{el.MRP}</s></Text>
                            </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    );
                }

            },[])}</Flex>
            
        </Flex>
    )
}