import NavBar from './NavBar'

function HomePage({ user }){

  return(
    <div>
      <NavBar />
      <div className="welcome-message">
        <h2>Welcome to <span>{user}</span></h2>
        
      </div>
    </div>
  )
}

export default HomePage;