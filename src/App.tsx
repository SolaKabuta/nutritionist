// import { useState } from 'react'
import Navbar from './components/UI/Navbar/Navbar.tsx';
import Homepage from "./components/pages/Home/Homepage.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Navbar/>
            <Homepage/>
        </div>
    </>
  )
}

export default App
