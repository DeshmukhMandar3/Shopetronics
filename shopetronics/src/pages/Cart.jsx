import React from "react";
import Navbar from "../components/Navbar";
import  LargeWithAppLinksAndSocial from "../components/Footer"
import {Box, SimpleGrid, Card, CardBody, Image, Stack, Badge,Text,Button,Flex,Table,Thead,Tbody,Tr,Td,Th,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper} from "@chakra-ui/react"
import Star from "../components/Star"
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import CartNavbar from "../components/CartNavbar";
import { useNavigate } from "react-router-dom";


export default function Cart(){
    const [Data,setData]=React.useState([]);
    let price=0;
    let count=0;
    let sp=0;

    const {Increase,Count,Price}=React.useContext(AuthContext);
    const [Loading,setLoading]=React.useState(false);
    


    Data.length!=0 && Data.map((el)=>{
        count=count+el.count;
        
        //price string to number conversion
        let ans=(el.sellingPrice).split("");
        ans.shift();
        sp=ans.join("")
        sp=+(sp);
        price+=sp;
        price.toFixed(2);
        price=(price*el.count);
    })

    React.useEffect(()=>{
            Increase(price,count);
    },[price,count])

    React.useEffect(()=>{
       getData();
    },[])
      

    
    async function getData(){
        setLoading(true);
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart`);
        let data=await res.json();
        //console.log("all Products",data);
        setData(data)
        setLoading(false);
       }


     async function DeleteItem(el){
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${el.id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/JSON",
            }
        });
        let data=await res.json();
        getData();

    }

    const navigate=useNavigate();
        function Proceed(){
            navigate('/checkout');
            // Data.map((el)=>{
            //     ClearData(el.id);
            // })
        }
    
        //Clear Cart Data
    //     async function ClearData(id){
    //     let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${id}`,{
    //         method:'DELETE'
    //     });
    //     let data=await res.json();
    //     console.log(data);
    //     getData();
        
    // }
    
    //Increase or Decrease in Quantity
   async function handleQuantity(e,el){
       
        el.count=+(e);
        
        let res=await fetch(`https://my-mock-server-etjr.onrender.com/cart/${el.id}`,{
                method:'PATCH',
                body:JSON.stringify(el),
                headers:{
                    'Content-Type':'application/JSON'
        }
        });
        let data=await res.json();
        getData();
    }
    



    return(
        <Box>
            <Navbar/>
            {CartNavbar(25)}
            <Box>  
            {Loading ? <Flex width="100%" height="400px" justifyContent={"center"} alignItems="center"><Loader/></Flex> : 
                    <Table variant='simple' margin={"auto"} width={"95%"}>
                        <Thead>
                        <Tr>
                            <Th>Product</Th>
                            <Th>Details</Th>
                            <Th>Quantity</Th>
                            <Th>Unit Price</Th>
                            <Th>Operation</Th>
                        </Tr>
                        </Thead>
                        <Tbody >
                        {Data.length!=0 && Data.map((el)=>{ 
                         
                            return (
                            <Tr width="100%" >
                                <Td w={"20%"}><Image src={el.image}/></Td>
                                <Td>{el.title}</Td>
                                <Td>
                                <Box width={"40%"}>
                                    <NumberInput defaultValue={el.count} min={1} max={10} onChange={(e)=>handleQuantity(e,el)} >
                                        <NumberInputField  />
                                        <NumberInputStepper  >
                                            <NumberIncrementStepper  />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                </Td>
                                <Td>{el.sellingPrice}</Td>
                                <Td><Button onClick={()=>{DeleteItem(el)}} bg={"tomato"} color="white">Delete</Button></Td>
                            </Tr> )
                        })}
                        <Tr fontSize={"20px"}>
                            <Td><b>No of Items: &nbsp;{Count}</b></Td>
                            <Td><b>Total Price : <span style={{color:"red"}}>₹&nbsp;{Price}</span></b></Td>
                            <Td><Button bg={"green"} _hover={{bg:"green"}} color={"white"} onClick={Proceed} disabled={Data.length==0}>Proceed to Checkout</Button></Td>
                        </Tr>
                        </Tbody>
                    </Table> }
            
            </Box>  
            <LargeWithAppLinksAndSocial/>
        </Box>
    );
}