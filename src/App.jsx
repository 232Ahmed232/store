import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Mainpage from './components/Mainpage/Mainpage'
// import { Sidebar } from 'lucide-react'
// import './App.css's

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <div className='flex items-start gap-2 m-2'>
     <Sidebar/>
     <Mainpage/>
     </div>
    </>
  )
}

export default App
