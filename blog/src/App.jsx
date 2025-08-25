import Navbar from './Navabar/Navbar'
import AllPost from './pages/AllPost'
import { Routes,Route } from 'react-router'
import Homepage from './pages/Homepage'
function App() {
  return(

    <>
    <Routes>
      <Route index element ={<Homepage/>}></Route>
      <Route path='post' element={<AllPost/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default App
