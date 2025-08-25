import './App.css'
function App() {
 

  return (
    <>
    <div className="nav-container">
        <div className="logo">
          <img src="./menu-logo.png" alt="menu-logo" className="menu-img" />
        </div>
        <div className="nav-right-section">
        <ul className="nav-ul">
          <li key={1}>Home</li>
          <li key={2}>All Post</li>
          <li key={3}>Contact</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default App
