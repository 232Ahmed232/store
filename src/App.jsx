import { useState } from 'react'

import CurrencyProvider from "./context/CurrencyProvider"

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Mainpage from './components/Mainpage/Mainpage'
import { Import } from 'lucide-react'
import Pagination from './components/Pageniation/Pagenation'
// import { Sidebar } from 'lucide-react'
// import './App.css's

function App() {




  return (
    <CurrencyProvider >
     <Navbar/>
     <div className='flex items-center justify-center gap-2 m-2'>
     <Sidebar/>
     <Mainpage />
     </div>
     {/* <Pagination/> */}
    </CurrencyProvider>
  )
}

export default App
