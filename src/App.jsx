import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
// import { Sidebar } from 'lucide-react'
// import './App.css's

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Sidebar/>
    </>
  )
}

export default App
