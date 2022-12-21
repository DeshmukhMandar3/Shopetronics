import {Text,Box,Flex,Card,CardBody,Image,Stack,Badge} from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";


export default function Bestseller(){
    const [Data,setData]=React.useState([]);
    const navigate=useNavigate();
    const [Loading,setLoading]=React.useState(false);


    React.useEffect(()=>{
        async function getData(){
          setLoading(true);
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/bestsellers`);
            let data=await res.json();
          //  console.log("Bestsellers",data);
            setData(data);
          setLoading(false);
          }
        getData();
    },[]);

    function handleClick(){
        navigate('/all/bestsellers')
    }
    
    const {ClDetail}=React.useContext(AuthContext);
    function handleDetail(el){
      ClDetail(el);
      navigate("/detail");
    }


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <Box textAlign={"left"}>
            <Text as={"b"} fontSize={"xl"} margin={"20px"} onClick={handleClick}>Best sellers</Text>
            <Box padding="15px">
            {Loading ? <Flex justifyContent={"center"}><Loader/></Flex> : 
            <Carousel responsive={responsive}>{Data.length!=0 && Data.map((el)=>{
                
                return (
                    <Card maxW='sm' onClick={()=>handleDetail(el)}>
                        <CardBody bg="white">
                            <div height={"40%"}>
                            <Image h={"100%"} src={el.image} alt={el.title} borderRadius='lg'/>
                            </div>
                            <Stack mt='6' spacing='1.5'>
                            <Box><Badge rounded='full' paddingLeft='10px' paddingRight='10px' fontSize='13px' bg='red' color='white'>{el.discount}</Badge></Box>
                            <Box h="80px" overflow={"hidden"} color='black' fontSize='12px'>{el.title}</Box>
                            <Box color="black"><Star rating={(Math.random()*(5-3.5)+3.5).toFixed(1)} count={el.review} /></Box>
                            <Text color='black' fontSize='15px'>{el.sellingPrice}</Text>
                            <Text color='grey' fontSize='14px'><s>{el.MRP}</s></Text>
                            </Stack>
                        </CardBody>
                    </Card>
                );
            })}</Carousel> }
            </Box>
            
        </Box>
    )
}