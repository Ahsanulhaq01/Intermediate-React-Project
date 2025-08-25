import './navbar.css'
function Navbar(){
    return(
        <>
         <div className="nav-container">
        <div className="logo">
          <img src="./menu-logo.png" alt="menu-logo" className="menu-img" />
        </div>
        <div className="nav-right-section">
        <ul className="nav-ul">
          <li key={1}><a href="/">Home</a></li>
          <li key={2}><a href="/post">all Post</a></li>
          <li key={3}><a href="/contact">Contact</a></li>
        </ul>
        </div>
    </div>
        </>
    )
}

export default Navbar;