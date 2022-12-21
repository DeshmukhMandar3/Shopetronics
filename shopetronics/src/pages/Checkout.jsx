import Navbar from "../components/Navbar";
import CartNavbar from "../components/CartNavbar";
import LargeWithAppLinksAndSocial from "../components/Footer";
import {Box} from "@chakra-ui/react";

export default function Checkout(){
    return(
        <Box>
            <Navbar/>
            {CartNavbar(50)}
            <LargeWithAppLinksAndSocial/>
        </Box>
    )
}