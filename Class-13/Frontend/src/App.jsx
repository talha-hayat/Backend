import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Services from './Services'
import Work from './Work'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import Contactus from './Contactus'
import LoanForm from './LoanForm'
import  signup  from './Pages/Signup'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
 
<Route>
    <Route path="/" element={<><Navbar/>,<Home />,<Services/>,<Work/>,<About/>,<Footer/></>} />
  <Route path="/services" element={<><Navbar/>,<Services />,<Footer/></>} />
  <Route path="/work" element={<><Navbar/>,<Work />,<Footer/></>} />
  <Route path='/about' element={<><Navbar/>,<About/>,<Footer/></>}></Route>
  <Route path='/signup' element={<><Signup /></>}></Route>
</Route>
  {/* <Route path="/about" element={} />
  <Route path="/contact" element={<div>Contact Us</div>} />
  <Route path="*" element={<div>404 Not Found</div>} /> */}
</Routes>
<Routes>
  <Route path="/contactus" element={<><Navbar/>,<Contactus/>,<Footer/></>} />
  <Route path='/loanform' element={<><Navbar/>,<LoanForm/>,<Footer/></>} />
</Routes>
 
    </>
  )
}

export default App
