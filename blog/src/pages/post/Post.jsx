import { useParams } from "react-router";
import Navbar from "../../Navabar/Navbar";
import "./post.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const {id} = useParams();
  const [post , setPost] = useState([]);
  async function singlePost() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setPost(response.data);
    console.log(response.data)
  }
  useEffect(()=>{
    singlePost();
  } , [id])
  

  return (
    <>
     <Navbar />
      {!post ? <h1>Loading....</h1> : <div className="container">
        <div className="post-container">
          <div className="title">
            <div className="post-title-heading">
              <h3 className="title-heading">Title</h3>
            </div>
            <div className="post-title">
              <p className="title-text text">
                {post.title}
              </p>
            </div>
          </div>
          <div className="body">
            <div className="post-body-heading">
              <h3 className="body-heading">Body</h3>
            </div>
            <div className="post-body">
              <p className="body-text text">
                {post.body}
              </p>
            </div>
          </div>
        </div>
      </div>}
      {/* <div className="container">
        <div className="post-container">
          <div className="title">
            <div className="post-title-heading">
              <h3 className="title-heading">Title</h3>
            </div>
            <div className="post-title">
              <p className="title-text text">
                {post.title}
              </p>
            </div>
          </div>
          <div className="body">
            <div className="post-body-heading">
              <h3 className="body-heading">Body</h3>
            </div>
            <div className="post-body">
              <p className="body-text text">
                {post.body}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Post;
