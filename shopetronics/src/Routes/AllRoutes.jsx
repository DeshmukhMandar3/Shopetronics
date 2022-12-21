import {Routes,Route} from 'react-router-dom';
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from '../pages/SignUp';
import AllProducts from '../pages/AllProducts';
import Cart from "../pages/Cart"
import PrivateRoutes from './PrivateRoutes';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';

export default function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/SignUp"} element={<SignUp/>}/>
                <Route path={"/all/:category"} element={<PrivateRoutes><AllProducts/></PrivateRoutes>}/>
                <Route path={"/cart"} element={<PrivateRoutes><Cart/></PrivateRoutes>}/>
                <Route path={"/detail"} element={<PrivateRoutes><ProductDetails/></PrivateRoutes>}/>
                <Route path={"/checkout"}element={<PrivateRoutes><Checkout/></PrivateRoutes>}/>
                <Route/>
            </Routes>
        </div>
    )
}