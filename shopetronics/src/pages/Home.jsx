import Navbar from "../components/Navbar"
import Deal from "../components/Deal"
import React from "react";
import Trending from "../components/Trending"
import NewForYou from "../components/NewForYou"
import EnjoyLife from "../components/EnjoyLife"
import Bestseller from '../components/Bestseller'
import PopularBrands from '../components/PopularBrands';
import LaserPrinters from '../components/LaserPrinters';
import Bluetooth from '../components/Bluetooth';
import Vaccum from "../components/Vaccum";
import LargeWithAppLinksAndSocial from "../components/Footer"
import { AuthContext } from "../context/AuthContext";

export default function Home(){
    const {Increase,username,isAuth} = React.useContext(AuthContext);
    console.log("isAuth",isAuth)
    console.log("name",username)

    async function updateCart(){
        let price=0;
        let count=0;
        let sp=0;

        let res=await fetch(`http://localhost:8080/cart`);
        let data=await res.json();
        //console.log(data);
        data.map((el)=>{ 
            count++;
            let ans=(el.sellingPrice).split("");
            ans.shift();
            sp=ans.join("")
            sp=+(sp);
            price+=sp;
            price.toFixed(2);
            console.log(count);
            console.log(price);
        })

        Increase(price,count);

   }

   React.useEffect(()=>{
    updateCart();
   },[])

    return(
        <div>
            <Navbar/>
            <Deal/>
            <Trending/>
            <NewForYou/>
            <EnjoyLife/>
            <Bestseller/>
            <PopularBrands/>
            <LaserPrinters/>
            <Bluetooth/>
            <Vaccum/>
            <LargeWithAppLinksAndSocial/>
    </div>
        

    );
}