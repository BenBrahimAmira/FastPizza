
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice = useSelector(getTotalCartPrice)
    
    if(!totalCartQuantity) return null ;
    return (
    <div className=" flex items-center justify-between bg-stone-800 px-4 p-4 uppercase text-stone-200 text-sm sm:px-6 md:text-base">
    <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-6" >
    <span>{totalCartQuantity} Pizzas </span>
    <span>{formatCurrency(totalCartPrice)}</span>
    </p>
    <Link to="/cart">Open cart &rarr;</Link>
    </div>
    )
    }
    export default CartOverview;