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

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);



  return (
    <CurrencyProvider >
     <Navbar/>
     <div className='flex items-center justify-center gap-2 m-2'>
     <Sidebar onCategoryChange={setSelectedCategories} onBrandChange={setSelectedBrands}/>
      <Mainpage selectedCategories={selectedCategories} selectedBrands={selectedBrands}/>
     </div>
     {/* <Pagination/> */}
    </CurrencyProvider>
  )
}

export default App
