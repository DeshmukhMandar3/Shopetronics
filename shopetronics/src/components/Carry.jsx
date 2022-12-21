import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box,Image,Card,CardBody,Stack,Text,Flex} from '@chakra-ui/react'
import React from "react"
import { useNavigate,Navigate } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";

export default function Carry(){
    const [Data,setData]=React.useState([]);
    const {ClDetail} =React.useContext(AuthContext);
    const [Loading,setLoading]=React.useState(false);
    const navigate=useNavigate();

    React.useEffect(()=>{
        async function getData(){
          setLoading(true);
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/New_for_you`);
            let data=await res.json();
            //console.log("NewForYou",data);
            setData(data);
            setLoading(false);
        }
        getData();
    },[]);

    function handleClick(){
      navigate('/all/New_for_you');
    }

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
          items: 3
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

      return (
        <Box display={"flex"} alignItems={"center"} marginTop={"20px"} padding={"4px"}>
        <Box><Image w={"110%"} h="300px" src={'https://img.gkbcdn.com/bn/2212/300x380-638d8ff32b40c93c747240ee._p1_.jpg'} onClick={handleClick}/></Box>
        {Loading ? <Flex width="75%" justifyContent={"center"} alignItems="center"><Loader/></Flex> : 
        <Box w="75%" >
        <Carousel responsive={responsive}>
            {
                Data.length!=0 && Data.map((el)=>{
                    return (
                    <Card maxW='sm' key={el.title} height={"300px"} >
                            <CardBody bg={"white"} height={"300px"} onClick={()=>handleDetail(el)}>
                                <Box h={"40%"}>
                                <Image h={"100%"} src={el.image} borderRadius='lg' display={"block"} margin={"auto"}/>
                                </Box>
                                {/* <Stack mt='6' spacing='3'> */}
                                <Box h={"40%"}color="black" fontSize="13px" overflow={"hidden"} margin={"10px"}>{el.title}</Box>
                                <Box h={"10%"}  color='black' fontSize='15px' marginLeft={"10px"}><b>{el.sellingPrice}</b></Box>
                                {/* </Stack> */}
                            </CardBody>
                            </Card>
                    
                    );
                })

            } 
        </Carousel>
        </Box>}  
        </Box>
      );
}