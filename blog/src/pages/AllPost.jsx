import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../Navabar/Navbar";
import '../App.css';

function AllPost(){
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
  return (
    <>
    <title>All post</title>
    <Navbar/>
    <div className="homepage-container">
      <div className="allPost-sub-container">
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
    </div>
    </>
  )
}

export default AllPost;