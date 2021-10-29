import NavBar from './NavBar'

function HomePage({ Logout, user }){

  return(
    <div>
      <NavBar />
      <h2>HomePage</h2>
      <div className="welcome-message">
        <h2>Welcome, <span>{user.username}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  )
}

export default HomePage;