import React,{useContext} from 'react'
import CartIcon from './CartIcon'
import { NavLink ,Link} from 'react-router-dom';

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
            <Link className="navbar-brand" to={'/'}>XPURE</Link>
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

            <NavLink to={`/carts/${((cart.length)?cart:"nothing")}`}>
                <CartIcon count={cart.length}/>
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar