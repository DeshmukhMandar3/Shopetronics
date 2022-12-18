import {Text,Box,Flex,Card,CardBody,Image,Stack,Badge,Heading,Slider,SliderTrack,SliderFilledTrack,Tag} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Deal(){
    let count=0;
    const [Data,setData]=React.useState(null);
    const navigate=useNavigate();
    React.useEffect(()=>{
        async function getData(){
            let res=await fetch(`http://localhost:8080/deal_of_the_day`);
            let data=await res.json();
           // console.log(data);
            setData(data);
          }
        getData();
      },[]);

      function handleClick(){
         navigate("/all/deal_of_the_day");
      }

    return (
        <Box textAlign={"left"} >
         <Text fontSize="lg" as="b" margin="25px">Deal of the Day</Text>
         <Flex margin="25px" cursor={"pointer"} onClick={handleClick}>{Data && Data.map((el)=>{
            let num=Math.random()*200;
            num=num.toFixed(0);
            count++;
            if(count<=6){
            return (
            <Card maxW='sm' key={el.title}>
                <CardBody bg="white" color="black">
                    <Image
                    src={el.image}
                    alt={el.title}
                    borderRadius='lg'
                    width="60%"
                    display="block"
                    margin="auto"
                    marginBottom="5px"
                    />
                    <Stack mt='6' spacing='3' margin="0px">
                        <div>
                    <Badge fontSize="12px"rounded="full" paddingLeft="5px" paddingRight="5px" bg="red" color="white">{el.discount}</Badge></div>
                    <Flex justifyContent="space-between">
                        <Text color='blue.600' fontSize='14px'>{el.sellingPrice}</Text>
                        <Text color='gray.500' fontSize='14px'><s>{el.MRP}</s></Text>
                    </Flex>
                    <Flex justifyContent="space-evenly">
                        <Slider aria-label='slider-ex-2' colorScheme='pink' max={200} value={num} isReadOnly={true} width="60%"><SliderTrack bg="pink"><SliderFilledTrack bg="red" /></SliderTrack></Slider>
                        <Text fontSize={"12px"}>{num} Left</Text>
                    </Flex>
                    </Stack>
                </CardBody>
  
            </Card> ); }
         })}</Flex>
        </Box>
    )
}