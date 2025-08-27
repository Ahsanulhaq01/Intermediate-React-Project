import Navbar from "../../Navabar/Navbar";
import "./post.css";

function Post() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="container">
        <div className="post-container">
          <div className="title">
            <div className="post-title-heading">
              <h3 className="title-heading">Title</h3>
            </div>
            <div className="post-title">
              <p className="title-text text">
                sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
              </p>
            </div>
          </div>
          <div className="body">
            <div className="post-body-heading">
              <h3 className="body-heading">Body</h3>
            </div>
            <div className="post-body">
              <p className="body-text text">
                quia et suscipit\nsuscipit recusandae consequuntur expedita et
                cum\nreprehenderit molestiae uzt ut quas totam\nnostrum rerum
                est autem sunt rem eveniet architecto"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
