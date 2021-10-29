import { Link } from 'react-router-dom'

function NavBar(){

  return(
    <div id="navbar">
      <h1 id="navbar-title" className="crt site-title">Roboto<span id="cursor-blink-1">_</span></h1>
      <Link to="/"><button id="nav-button">Login</button></Link>
      <Link to="/history"><button id="nav-button">History</button></Link>
      <Link to="/chatRoom"><button id="nav-button">Chat Room</button></Link>
      <Link to="/home"><button id="nav-button">Home</button></Link>
      <br />
      <h1>------------------------------</h1>
    </div>
  )
}

export default NavBar;