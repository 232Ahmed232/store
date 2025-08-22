import React, { Children, useState } from "react";
import CurrencyContext from "./context";


const CurrencyProvider = ({children}) =>{
    const[multiple,SetMultiple] = useState(1)
    const[icon,SetIcon] = useState("$")
    const[min,SetMin] = useState(0)
    const[max,SetMax] = useState(5000)
    const [cart,setCart] = useState([])
    return(
    
    <CurrencyContext.Provider value={{icon,SetIcon,multiple,SetMultiple,min,max,SetMin,SetMax,cart,setCart}}>
        {children}
    </CurrencyContext.Provider>
    )
}

export default CurrencyProvider