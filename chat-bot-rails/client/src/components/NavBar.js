import { Link } from 'react-router-dom'

function NavBar(){

  return(
    <div>
      <Link to="/"><button>Login</button></Link>
      <Link to="/history"><button>History</button></Link>
      <Link to="/chatRoom"><button>ChatRoom</button></Link>
      <Link to="/home"><button>HOME</button></Link>
    </div>
  )
}

export default NavBar;