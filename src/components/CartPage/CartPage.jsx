import React ,{useContext} from 'react'
import { useParams,Link } from 'react-router-dom'
import CurrencyContext from "../../context/context";


function CartPage() {
    const { cart,setCart} = useContext(CurrencyContext);

    
   console.log(cart);
  return (
    <div className='text-center'>
        {cart.map((ele,i)=>(
            <div key={i}>
                <h1 className='text-white m-4 p-4 bg-black font-extrabold'>
                    {ele.name}
                    
                </h1>
                
            </div>
        ))}
        <Link to={`/carts/e,pty`}>
        <button 
        onClick={()=> setCart([])}
        className='bg-slate-300 text-white m-4 p-4 font-bold hover:bg-black'
        >Check Out</button>
        </Link>
    </div>
  )
}

export default CartPage