import {Box,Slider,SliderMark,SliderTrack,SliderFilledTrack,SliderThumb} from "@chakra-ui/react"
export default function CartNavbar(val){
    return(
            <Box h="100px" bg={'rgb(30,128,253)'} marginTop={"-25px"} padding={"25px"}>
                
                    <Slider  defaultValue={val} max={"100"} isReadOnly="true" width={"50%"} display={"block"} margin={"auto"}>
                        <SliderMark value={"23"} marginTop={"7px"} color={"white"}><b>Cart</b></SliderMark>
                        <SliderMark value={"44"} marginTop={"7px"} color={"white"}><b>Place Order</b></SliderMark>
                        <SliderMark value={"73"} marginTop={"7px"} color={"white"}><b>Pay</b></SliderMark>
                    
                        <SliderTrack>
                            <SliderFilledTrack bg={"green"} />
                            
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
            
            </Box>
            
    )
}