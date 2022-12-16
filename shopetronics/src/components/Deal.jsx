import {Text,Box,Flex,Card,CardBody,Image,Stack,Badge,Heading,Slider,SliderTrack,SliderFilledTrack,Tag} from "@chakra-ui/react";
import React from "react";
export default function Deal(){
    let count=0;
    const [Data,setData]=React.useState(null);

    React.useEffect(()=>{
        async function getData(){
            let res=await fetch(`http://localhost:8080/deal_of_the_day`);
            let data=await res.json();
            console.log(data);
            setData(data);
          }
        getData();
      },[])
    return (
        <Box textAlign={"left"}>
         <Text fontSize="lg" as="b" margin="25px">Deal of the Day</Text>
         <Flex margin="25px" cursor={"pointer"}>{Data && Data.map((el)=>{
            let num=Math.random()*200;
            num=num.toFixed(0);
            count++;
            if(count<=6){
            return (
            <Card maxW='sm' key={el.flash_li_imgsrc}>
                <CardBody bg="white" color="black">
                    <Image
                    src={el.flash_li_imgsrc}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    width="60%"
                    display="block"
                    margin="auto"
                    marginBottom="5px"
                    />
                    <Stack mt='6' spacing='3' margin="0px">
                    <Tag colorScheme="red" fontSize="12px" width="50%">{el.flash_li_off}</Tag>
                    <Flex justifyContent="space-between">
                        <Text color='blue.600' fontSize='14px'>{el.flash_li_price}</Text>
                        <Text color='gray.500' fontSize='14px'><s>{el.flash_li_price2}</s></Text>
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