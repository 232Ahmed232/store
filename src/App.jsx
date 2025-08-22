import { useState } from 'react'

import CurrencyProvider from "./context/CurrencyProvider"

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Mainpage from './components/Mainpage/Mainpage'
import { Import } from 'lucide-react'
import Pagination from './components/Pageniation/Pagenation'
import { Outlet } from 'react-router-dom' 
// import { Sidebar } from 'lucide-react'
// import './App.css's

function App() {

  

  return (
    <CurrencyProvider >
     <Navbar/>
     
    <Outlet />
    </CurrencyProvider>
  )
}

export default App
