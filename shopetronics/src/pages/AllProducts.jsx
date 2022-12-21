import React from "react";
import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";
import  LargeWithAppLinksAndSocial from "../components/Footer"
import {Box, SimpleGrid, Card, CardBody, Image, Stack, Badge,Text,Button,Flex} from "@chakra-ui/react"
import Star from "../components/Star"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";


export default function AllProducts(){
    const {category} =useParams();
    const [Data,setData]=React.useState([]);
    const {Increase}=React.useContext(AuthContext); 
    const navigate=useNavigate();
    const [page,setPage]=React.useState(1);
    const [Total,setTotal]=React.useState(1);
    const [Loading,setLoading]=React.useState(false);
    const [Cart,setCart]=React.useState([]);

    //Pagination
    React.useEffect(()=>{
        async function getData(){
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/${category}`);
            let data=await res.json();
            setTotal(Math.ceil(data.length/12));
           }
           getData();
    },[])






    const {ClDetail}=React.useContext(AuthContext);
    function handleDetail(el){
      ClDetail(el);
      navigate("/detail");
    }
   
    
    React.useEffect(()=>{
       async function getData(){
        setLoading(true);
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/${category}?_page=${page}&_limit=12`);
        let data=await res.json();
       // console.log("all Products",data);
        setData(data);
        setLoading(false);
       }
       getData();
    },[page])


    
    React.useEffect(()=>{
       updateCart();
    },[])

    //add to cart
    async function handleClick(el){
        let PatchID=0;
        console.log(Cart.length);
        
         let flag=false;
       
        for(let i=0; i<Cart.length; i++){
            console.log(Cart[i].title,"element.title",el.title,"el.title");
            if(Cart[i].title===el.title){
                el.count=(Cart[i].count+1);
                console.log(el.count,"el.count");
                PatchID=Cart[i].id;
                flag=true;
            }
        } 
        if(!flag){
            el.count=1;
        }
       
       if(flag){
        console.log("patch")
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${PatchID}`,{
            method:'PATCH',
            body:JSON.stringify(el),
            headers:{
                'Content-Type':'application/JSON'
            }
        });}
        else{
            let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`,{
                method:'POST',
                body:JSON.stringify(el),
                headers:{
                    'Content-Type':'application/JSON'
                }
            });
        
        }

       updateCart();
       
       
    }

    
   async function updateCart(){
        let price=0;
        let count=0;
        let sp=0;

        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`);
        let data=await res.json();
        setCart(data);
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
            <Box>{Loading ? <Flex width="100%" height="400px" justifyContent={"center"} alignItems="center"><Loader/></Flex> : 
                 <SimpleGrid columns={4} spacing={10} padding="25px">{
                    Data.length!=0 && Data.map((el)=>{

                        return (
                            <Card maxW='sm' >
                                <CardBody bg="white">
                                    <div height={"30%"}>
                                    <Image h={"100%"} src={el.image} alt={el.title} borderRadius='lg'onClick={()=>handleDetail(el)}/>
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
                    
                </SimpleGrid> }
                <Flex justifyContent={"center"} margin={"15px"}>
                    <Button bg={"skyblue"} disabled={page<=1} onClick={()=>setPage(page-1)} margin={"8px"}>Previous</Button>
                    <Button margin={"8px"} bg={"rgb(30,128,253)"} color={"white"}>{page}</Button>
                    <Button bg={"skyblue"} disabled={page==Total} onClick={()=>setPage(page+1)} margin={"8px"}>Next</Button>
                </Flex>
            </Box>
            <LargeWithAppLinksAndSocial/>
        </Box>
    );
}