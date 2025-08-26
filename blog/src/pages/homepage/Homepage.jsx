import Navbar from '../../Navabar/Navbar';
import './homepage.css';

function Homepage(){
    function handleAllPostbtn(){
      
    }
    return(
        <>
        <title>Homepage</title>
        <Navbar/>
        <div className="homepage-content">
            <h1>welcome to my blog</h1>
            <button className='allpost-btn' onClick={handleAllPostbtn}>See All Post</button>
        </div>
        </>
    )
}
export default Homepage;