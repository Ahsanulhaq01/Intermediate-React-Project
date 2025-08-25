import Navbar from './Navabar/Navbar'
import AllPost from './pages/AllPost'
import { Routes,Route } from 'react-router'
import Homepage from './pages/Homepage'
import ContactPage from './pages/ContactPage'
function App() {
  return(

    <>
    <Routes>
      <Route index element ={<Homepage/>}></Route>
      <Route path='post' element={<AllPost/>}></Route>
      <Route path='contact' element={<ContactPage/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default App
