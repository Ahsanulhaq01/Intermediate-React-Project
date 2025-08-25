import axios from 'axios'
import './App.css'
import Navbar from './Navabar/Navbar'
import { useEffect, useState } from 'react'
function App() {
 const [blogdata , setBlogData] = useState([])
 useEffect(()=>{
  const getData = async()=>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setBlogData(response.data)
    }
    catch(err){
      console.log("error while fetching data" + err)
    }
  }
  getData();
 },[])

 console.log(blogdata)

  return (
    <>
    <Navbar/>
    <div className="homepage-container">
      {blogdata.map((blogpost)=>{
        return(
          <div key={blogpost.id} className="blog-container">
        <div className="blog-title">
          <p className="title-text truncate"><b>{blogpost.title}</b></p>
        </div>
        <div className="blog-body">
          <p className="body-content truncate">
            {blogpost.body}
          </p>
        </div>
      </div>
        )
      })}
    </div>
    </>
  )
}

export default App
