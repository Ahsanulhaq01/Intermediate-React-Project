import { Link } from "react-router";
import Navbar from "../../Navabar/Navbar";
import "./homepage.css";

function Homepage() {
  return (
    <>
      <title>Homepage</title>
      <Navbar />
      <div className="homepage-content">
        <h1>welcome to my blog</h1>
        <button className="allpost-btn">
           <Link to='/posts' className="link-btn">See All Post</Link>
        </button>
      </div>
    </>
  );
}
export default Homepage;
