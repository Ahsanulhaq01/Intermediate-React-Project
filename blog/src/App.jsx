import './App.css'
import Navbar from './Navabar/Navbar'
function App() {
 

  return (
    <>
    <Navbar/>
    <div className="homepage-container">
      <div className="blog-container">
        <div className="blog-title">
          <p className="title-text truncate"><b>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</b></p>
        </div>
        <div className="blog-body">
          <p className="body-content truncate">
            quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
          </p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-title">
          <p className="title-text truncate"><b>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</b></p>
        </div>
        <div className="blog-body">
          <p className="body-content truncate">
            quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
