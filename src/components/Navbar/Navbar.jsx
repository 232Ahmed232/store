import React,{useContext} from 'react'
import CartIcon from './CartIcon'

import CurrencyContext from "../../context/context";

import { Search } from 'lucide-react'
import CountryCurrencyDropdown from './CountryCurrencyDropdown'

function Navbar() {

    const { cart} = useContext(CurrencyContext);

    const handelcountry = (country) =>{
        console.log(country)
    }


  return (
    <div>
        <nav className="flex justify-evenly bg-slate-300 text-5xl items-center">
            <a className="navbar-brand" href="#">XPURE</a>
            <div className =' text-xl'>
            <CountryCurrencyDropdown onSelect={handelcountry} />
            </div>
            <div className='flex w-1/2 justify-center gap-2 p-3 items-center'>
            <input 
                type="text" 

                />
            <button type='submit'> 
                <Search className=" bg-slate-100 h-16 w-16 hover:text-white hover:bg-black text-gray-600" />
            </button>
            </div>

            <button onClick={()=> console.log(cart)}>
                <CartIcon count={cart.length}/>
            </button>
        </nav>
    </div>
  )
}

export default Navbar