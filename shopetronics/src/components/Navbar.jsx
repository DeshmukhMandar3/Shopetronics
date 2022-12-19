import {Box,Flex, Popover, PopoverTrigger, PopoverContent, PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,Button,Text,Image,InputGroup,InputLeftAddon,Grid,Input,InputRightAddon,Select} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar(){
    const [Country,setCountry]=React.useState(null);
    const [Currency,setCurrency]=React.useState(null);
    const [cur,setCur]=React.useState("INR");
    const [ship,setShip]=React.useState('India');
    const navigate=useNavigate();
    const {Price,Count,username,isAuth} =React.useContext(AuthContext);
    
    React.useEffect(()=>{
       async function getCountry(){
            let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/country`);
            let data=await res.json();
           // console.log(data);
            setCountry(data);
        }
        getCountry();
        async function getCurrency(){
            let res=await fetch(`https://vivacious-moth-jewelry.cyclic.app/currency`);
            let data=await res.json();
            //console.log(data);
            setCurrency(data);
        }
        getCurrency();
    },[])

    //console.log(Country);
    return(
        <Flex  bg={'rgb(30,128,253)'} direction={"column"} color={"white"} marginBottom={"20px"}>
        {/* Top Box */}
            <Box display={"flex"} justifyContent={"right"} marginRight={"80px"}>
                  {/* Save 50 $ */}
                    <Popover trigger={'hover'} placement={"bottom-end"}>
                        <PopoverTrigger >
                            <Button fontSize={"12px"} _hover={{bg:"none"}} marginRight={"25px"} bg={'rgb(30,128,253)'} border={"none"} color={"white"}><span class="material-symbols-outlined">smartphone</span>Save $50 with App <span class="material-symbols-outlined">keyboard_arrow_down</span></Button>
                        </PopoverTrigger>
                        <PopoverContent color={"black"}  bg={"white"} p={"20px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} cursor={"pointer"}>
                                 <PopoverArrow bg={"white"}/>
                            <Box paddingBottom={"20px"}>
                                <Text _hover={{color:"blue",textDecoration:"underline"}}>Download app to get up to 70% off app-only deals and coupons worth $50</Text>
                                <Flex>
                                    <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"/>
                                    <Flex direction={'column'} justifyContent={"space-evenly"}>
                                        <img src={'https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg'}/>
                                        <img src={'https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg'}/>
                                        <img src={'https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg'}/>
                                    </Flex>
                                </Flex>
                                <hr/>
                                <Text _hover={{color:"blue",textDecoration:"underline"}}>Go to Mobile Site</Text>
                            </Box>
                        </PopoverContent>
                    </Popover>

                    {/* Language */}
                    <Popover trigger={'hover'}  placement={"bottom"} >
                        <PopoverTrigger >
                            <Button fontSize={"12px"}  _hover={{bg:"none"}} marginRight={"25px"} bg={'rgb(30,128,253)'} border={"none"} color={"white"}>Language<span class="material-symbols-outlined">keyboard_arrow_down</span></Button>
                        </PopoverTrigger>
                        <PopoverContent  color={"black"}  bg={"white"} px={"20px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} cursor={"pointer"} width={"125px"} fontSize={"12px"} lineHeight={"30px"}>
                                 <PopoverArrow bg={"white"}/>
                            <Box h={"220px"} overflowY={"scroll"} textAlign={"left"}>
                                <Text >English</Text>
                                <Text>Italian</Text>
                                <Text>Dutch</Text>
                                <Text>Spanish</Text>
                                <Text>French</Text>
                                <Text>Russian</Text>
                                <Text>Japanese</Text>
                                <Text>Chinese</Text>
                                <Text>Hindi</Text>
                                <Text>Bangla</Text>
                                <Text>Tamil</Text>
                            </Box>
                        </PopoverContent>
                    </Popover>

                    {/* Support Center */}

                    <Popover trigger={'hover'} >
                        <PopoverTrigger >
                            <Button fontSize={"12px"} _hover={{bg:"none"}} bg={'rgb(30,128,253)'} border={"none"} color={"white"}>Support Center<span class="material-symbols-outlined">keyboard_arrow_down</span></Button>
                        </PopoverTrigger>
                        <PopoverContent fontSize={"12px"} color={"black"}  bg={"white"} px={"20px"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} borderRadius={"5px"} cursor={"pointer"} width={"160px"}>
                                 <PopoverArrow bg={"white"}/>
                            <Box overflow={"auto"} lineHeight={"35px"}>
                                <Text display={"flex"} justifyContent={"left"} alignItems={"center"}><span class="material-symbols-outlined"> chat </span><Box width={"5px"}></Box>Live Chat</Text>
                                <Text display={"flex"} justifyContent={"left"} alignItems={"center"}><span class="material-symbols-outlined">confirmation_number </span><Box width={"5px"}></Box>  Ticket</Text>
                                <Text display={"flex"} justifyContent={"left"} alignItems={"center"}><span class="material-symbols-outlined">help </span><Box width={"5px"}></Box>  Help Center</Text>
                            </Box>
                        </PopoverContent>
                    </Popover>
            </Box>
        {/* Middle Box */}
            <Flex h="70px" alignItems={"center"} borderTop={"0.3px solid RGB(210 223 235)"} justifyContent="space-evenly">
               <Box onClick={()=>{navigate('/')}} w={"17%"} h={"100%"}><Image w={"100%"} h={"100%"} src={'https://64.media.tumblr.com/3cc401364c5c9425bd4eb71c383d5049/95991999c0eacd3a-00/s500x750/e4dbb7cecfc4aa397cffdcce758303e4bbe4d58e.pnj'}/></Box>
               {/* Search */}
               <Box marginLeft="15px">
               <InputGroup color={"grey"}>
                 <InputLeftAddon children={<Popover placement={"bottom-start"} padding={"0px"}>
                        <PopoverTrigger>
                            <Button fontSize={"12px"} marginLeft={"0px"} _hover={{bg:"none"}} >All Categories<span class="material-symbols-outlined">expand_more</span></Button>
                        </PopoverTrigger>
                        <PopoverContent width={"400px"} borderRadius={"0px"} fontSize={"12px"} lineHeight={"30px"} bg={"white"} cursor={"pointer"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
                              <Grid templateColumns='repeat(2, 1fr)' >
                                 <Box marginLeft={"15px"} color={"black"} textAlign={"left"}>
                                    <Text _hover={{color:"blue"}}>All Categories</Text>
                                    <Text _hover={{color:"blue"}}>Smart Home & Garden</Text>
                                    <Text _hover={{color:"blue"}}>Phone & Accessories</Text>
                                    <Text _hover={{color:"blue"}}>Computer, Tablets & Accessories</Text>
                                    <Text _hover={{color:"blue"}}>Wearable Devices</Text>
                                    <Text _hover={{color:"blue"}}>Automobiles & Motorcycles</Text>
                                </Box>
                                <Box marginLeft={"15px"} color={"black"} textAlign={"left"}>
                                    <Text _hover={{color:"blue"}}>Sports & Outdoors</Text>
                                    <Text _hover={{color:"blue"}}>Consumer Electronics</Text>
                                    <Text _hover={{color:"blue"}}>TV Boxes & Mini PCs</Text>
                                    <Text _hover={{color:"blue"}}>Toys & Hobbies</Text>
                                    <Text _hover={{color:"blue"}}>Security System</Text>
                                    <Text _hover={{color:"blue"}}>Fashion</Text>
                                </Box>
                               </Grid>
                    
                        </PopoverContent>
                            </Popover>}/>
                    <Input bg={"rgb(237,242,247)"} fontSize={"12px"} outline={"none"} placeholder='Search By Keywords'  />
                    <InputRightAddon  cursor={"pointer"} children={<span class="material-symbols-outlined">search</span>} />
                </InputGroup>
                </Box>

                {/* Country */}
                <Box marginLeft="15px">
                <Popover trigger={"hover"} >
                    <PopoverTrigger>
                        <Button bg={"none"} _hover={{bg:"none"}} fontSize={"13px"} color={"white"}>Ship to {ship} / {cur}<span class="material-symbols-outlined">expand_more</span></Button>
                    </PopoverTrigger>
                    <PopoverContent padding={"25px"} color={"black"} fontSize={"12px"}>
                        <PopoverArrow />
                        <Text marginTop={"20px"} textAlign={"left"}><b>Ship to</b></Text>
                        <Select placeholder={"Select Country"} fontSize={"14px"} value={ship} onChange={(e)=>{setShip(e.target.value)}}>{Country && Country.map((el)=>{
                            return <option value={el.name}>{el.name}</option>
                        })}</Select>
                        <Text marginTop={"20px"} textAlign={"left"} ><b>Currency</b></Text>
                        <Select placeholder={"Select Currency"} fontSize={"14px"} value={cur} onChange={(e)=>{setCur(e.target.value);}}>{Currency && Currency.map((el)=>{
                            return <option value={el.AlphabeticCode}>{el.AlphabeticCode}</option>
                        })}</Select>
                    </PopoverContent>
                    </Popover>
                </Box>

                {/* SignIn */}
                <Box>{isAuth ? <Text as="b">Hi {username}</Text> : 
                    <Popover trigger={"hover"}>
                        <PopoverTrigger>
                            <Button bg="none" _hover={{bg:"none"}} fontSize="13px"><span class="material-symbols-outlined">person_filled</span>Sign In</Button>
                        </PopoverTrigger>
                        <PopoverContent color="black">
                            <PopoverArrow />
                            <Box margin="25px" textAlign={"center"}>Welcome to Shopetronics</Box>
                            <Flex justifyContent={"space-evenly"} marginBottom="20px">
                                    <Button _hover={{bg:"rgb(45,123,255)"}} w='100px' bg='rgb(45,123,255)' color="white" fontSize="13px"><Link to="/SignUp">Join</Link></Button>
                                    <Button _hover={{bg:'skyblue'}} w='100px' bg='skyblue' color="blue" border="solid blue 0.5px" fontSize="13px"><Link to="/login">SignIn</Link></Button>
                            </Flex>
                        </PopoverContent>
                    </Popover> }
                </Box>
                {/* Cart */}
                <Box cursor={"pointer"} onClick={()=>{navigate("/cart")}}>
                    <Popover trigger={'hover'} >
                        <PopoverTrigger>
                            <span class="material-symbols-outlined">shopping_cart</span>
                        </PopoverTrigger>
                            <PopoverContent color="black">
                            <PopoverArrow />
                            <Flex justifyContent="space-evenly" margin="20px">
                                <Text>Items:{Count}</Text>
                                <Text>Total: ₹{Price}</Text>
                            </Flex>
                            <Button margin="20px" bg="rgb(45,123,255)" color="white" _hover={{bg:'rgb(45,123,255)'}} onClick={()=>{navigate("/cart")}}>View Cart</Button>
                            </PopoverContent>
                    </Popover>
                </Box>
            </Flex>
            <Box h="35px">
        {/*  BottomBox */}
            <Flex justifyContent={"space-evenly"} alignItems={"center"} fontSize="15px">
            <Popover trigger={"hover"} matchWidth={true} placement={"bottom-start"}>
                <PopoverTrigger >
                    <Button bg="none" _hover={{bg:'none'}}><span class="material-symbols-outlined">menu</span>Categories</Button>
                </PopoverTrigger>
                <PopoverContent width="250px" p="10px" fontSize="13px" lineHeight="30px" borderRadius="none" color="black" textAlign="left">
                    <Text _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Local Warehouses</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Sports & Outdoors</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Smart Home & Garden</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Consumer Electronics</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Generator & Portable Power</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Computer Table & Accessories</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>TV Boxes & Mini PCs</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Toys & Hobbies</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Phone Accessories</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Automobiles & Motorcycles</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Security Systems</Text>
                    <Text  _hover={{borderLeft:"solid blue", paddingLeft:"10px"}}>Wearable Devices</Text>
                </PopoverContent>
            </Popover>
            <Text>New</Text>
            <Text>Bestselling</Text>
            <Text>Brand</Text>
            <Text>Clearance</Text>
            <Text>Deals</Text>
            <Text>Cupons</Text>
            <Text>App Only</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            
            </Flex>
            </Box>
        </Flex>
    
        
    ); 
}