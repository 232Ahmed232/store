import { useState } from 'react'


import Sidebar from '../Sidebar/Sidebar'
import Mainpage from '../Mainpage/Mainpage'


function Home() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
  
  
  
    return (
     
       <div className='flex items-center justify-center gap-2 m-2'>
       <Sidebar onCategoryChange={setSelectedCategories} onBrandChange={setSelectedBrands}/>
        <Mainpage selectedCategories={selectedCategories} selectedBrands={selectedBrands}/>
       </div>
      
    )
}

export default Home