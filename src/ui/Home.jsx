import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import pizza from '../image/pizza.jpg';
import pizza1 from '../image/pizza1.jpg';
import pizza2 from '../image/pizza2.jpg';


function Home() { 
    const username = useSelector((state) => state.user.username)
    return (

    <div className="my-8 px-1 mt-10 text-center sm:my-16 bg-orange-100">
    <h1 className="mb-8 text-xl font-semibold md:text-3xl" >
    The Best Pizza
    <br />
    
     <span className="text-orange-600"> Straight out of the oven, straight to you.</span>
    </h1>
     {username === '' ? <CreateUser/> : <Button to='/menu' type = 'primary'>
         Continue ordering,{username}
         </Button>}
         <div className="flex gap-32 items-center m-8 mb-32 sm:m-4 sm:mb-16">
         <img  src={pizza}  className="image"/>
         <img  src={pizza1}  className="image"/>
         <img  src={pizza2}  className="image"/>
        
         </div>
   </div>

    );
    }
    export default Home;