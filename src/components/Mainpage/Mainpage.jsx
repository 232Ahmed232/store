import React from 'react'
import { DollarSign,Euro, EuroIcon } from "lucide-react";

import productList from '../Data'

function Mainpage() {

    
  return (
    <div className='bg-slate-300 flex gap-16 p-4 flex-wrap w-4/5 justify-center h-auto'>
        {productList.map((ele,index)=>(
            <div key={index} className='text-center w-1/4'>
                <img src={ele.image} alt="" />
                <h1 >{ele.name}</h1>
                <h1>{ele.price}<EuroIcon /></h1> 
            </div>
        ))}

    </div>
  )
}

export default Mainpage