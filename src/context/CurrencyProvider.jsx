import React, { Children, useState } from "react";
import CurrencyContext from "./context";


const CurrencyProvider = ({children}) =>{
    const[multiple,SetMultiple] = useState(1)
    const[icon,SetIcon] = useState("$")
    return(
    
    <CurrencyContext.Provider value={{icon,SetIcon,multiple,SetMultiple}}>
        {children}
    </CurrencyContext.Provider>
    )
}

export default CurrencyProvider